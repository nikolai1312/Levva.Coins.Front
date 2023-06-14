import { TransactionService } from "../../services/TransactionService/TransactionService";

import {
    loadTransaction,
    loadCreateTransactionDone,
    loadTransactionFail,
} from "../../stores/TransactionStore/TransactionEvents";

import { NewTransactionParams, TransactionValues } from "../../domain/transaction";
import { RequestError } from "../../domain/request";

const execute = async ({
    description,
    amount,
    type,
    categoryId,
}: NewTransactionParams) => {

    loadTransaction();

    return TransactionService.createTransaction({
        description,
        amount,
        type,
        categoryId,
    })
        .then(({ id, createdAt }: TransactionValues) => {
            loadCreateTransactionDone([{ id, description, amount, type, category: { id: categoryId, description }, createdAt, },]);
        })
        .catch(({ hasError, message }: RequestError) => {
            loadTransactionFail({ hasError, message });
            throw new Error();
        });
};

const NewTransactionUseCase = {
    execute,
};

export default NewTransactionUseCase;
