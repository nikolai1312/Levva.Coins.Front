import { AxiosError } from "axios";

import { Api } from "../../clients/api/api";

import { RequestError } from "../../domain/request";
import {
    NewTransactionParams,
    SearchTransactionParams,
    TransactionValues,
} from "../../domain/transaction";

const createTransaction = async ({
    description,
    amount,
    type,
    categoryId,
}: NewTransactionParams) => {
    return Api.post({
        url: "/Transaction/Create",
        body: {
            description,
            amount,
            type,
            categoryId,
        },
    })
        .then((response: any) => {
            return response.data;
        })
        .catch((err: AxiosError<RequestError>) => {
            throw err.response?.data;
        });
};

const getTransactions = async (): Promise<TransactionValues[]> => {
    return Api.get({
        url: "/Transaction/list",
    })
        .then((response) => {
            return response.data;
        })
        .catch((err: AxiosError<RequestError>) => {
            throw err.response?.data;
        });
};

const searchTransactions = async ({ search }: SearchTransactionParams): Promise<TransactionValues[]> => {
    if (search === "") { return TransactionService.getTransactions() };

    return Api.get({
        url: `/Transaction/${search}`,
    })
        .then((response) => response.data)
        .catch((error: AxiosError<RequestError>) => {
            throw error.response?.data;
        });
};


export const TransactionService = {
    createTransaction,
    getTransactions,
    searchTransactions,
};
