import { TransactionService } from "../../services/TransactionService/TransactionService";

import {
    loadTransaction,
    loadTransactionDone,
    loadTransactionFail,
} from "../../stores/TransactionStore/TransactionEvents";

import { TransactionValues } from "../../domain/transaction";
import { RequestError } from "../../domain/request";

const execute = async (): Promise<void> => {

    loadTransaction();

    return TransactionService.getTransactions()
        .then((transactions: TransactionValues[]) => {
            loadTransactionDone(transactions);
        })
        .catch(({ hasError, message }: RequestError) => {
            loadTransactionFail({ hasError, message });
        });
};

const GetTransactionsUseCase = {
    execute,
};

export default GetTransactionsUseCase;
