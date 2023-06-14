import { TransactionValues } from "../../domain/transaction";
import { RequestError } from "../../domain/request";

import {
    loadTransaction,
    loadTransactionDone,
    loadTransactionFail,
} from "../../stores/TransactionStore/TransactionEvents";
import { TransactionService } from "../../services/TransactionService/TransactionService";

const execute = async (query: string | null) => {
    loadTransaction();

    return TransactionService.getTransactions()
        .then((transactions: TransactionValues[]) => {
            const transactionFilter = transactions.filter((item => query === item.category.description))
            console.log(transactionFilter);
            loadTransactionDone(transactionFilter);
        })
        .catch(({ hasError, message }: RequestError) => {
            loadTransactionFail({ hasError, message });
        });
};

const SearchTransactionsUseCase = {
    execute,
};

export default SearchTransactionsUseCase;