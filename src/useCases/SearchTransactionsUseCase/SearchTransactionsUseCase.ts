import { TransactionValues } from "../../domain/transaction";
import { RequestError } from "../../domain/request";

import {
    loadSearchTransaction,
    loadSearchTransactionDone,
    loadSearchTransactionFail,
} from "../../stores/SearchTransactionStore/SearchTransactionEvents";
import { TransactionService } from "../../services/TransactionService/TransactionService";

const execute = async (query: string | null): Promise<void> => {
    loadSearchTransaction();

    return TransactionService.searchTransactions(query)
        .then((transactions: TransactionValues[]) => {
            const searchParams = transactions.filter((item => query === item.category.description ? item.category.description :
                (query === item.description) ? item.description : null));
            loadSearchTransactionDone(searchParams);
        })
        .catch(({ hasError, message }: RequestError) => {
            loadSearchTransactionFail({ hasError, message });
        });
};

const SearchTransactionsUseCase = {
    execute,
};

export default SearchTransactionsUseCase;