import { AxiosError } from "axios";

import Api from "../../clients/api/api";

import { RequestError } from "../../domain/request";
import {
    NewTransactionParams,
    TransactionValues,
} from "../../domain/transaction";

const createTransaction = async ({
    description,
    amount,
    type,
    categoryId,
}: NewTransactionParams): Promise<void> => {
    return Api.post({
        url: "/transaction",
        body: {
            description,
            amount,
            type,
            categoryId,
        },
    })
        .then((response) => {
            return response.data;
        })
        .catch((err: AxiosError<RequestError>) => {
            throw err.response?.data;
        });
};

const getTransactions = async (): Promise<TransactionValues[]> => {
    return Api.get({
        url: "/transaction",
    })
        .then((response) => {
            return response.data;
        })
        .catch((err: AxiosError<RequestError>) => {
            throw err.response?.data;
        });
};

export const TransactionService = {
    createTransaction,
    getTransactions,
};
