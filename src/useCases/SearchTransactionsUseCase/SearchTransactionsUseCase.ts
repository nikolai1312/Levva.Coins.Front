import { SearchTransactionParams, TransactionValues } from "../../domain/transaction";
import { RequestError } from "../../domain/request";

import {
    loadTransaction,
    loadTransactionDone,
    loadTransactionFail,
} from "../../stores/TransactionStore/TransactionEvents";
import { TransactionService } from "../../services/TransactionService/TransactionService";

const execute = async ({ search }: SearchTransactionParams): Promise<void> => {
    loadTransaction();

    return TransactionService.searchTransactions({ search })
        .then((transactions: TransactionValues[]) => {
            loadTransactionDone(transactions);
        })
        .catch(({ hasError, message }: RequestError) => {
            loadTransactionFail({ hasError, message });
        });
};

const SearchTransactionsUseCase = {
    execute,
};

export default SearchTransactionsUseCase;