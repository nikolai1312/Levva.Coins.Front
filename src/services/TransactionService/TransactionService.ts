import { AxiosError } from "axios";

import { Api } from "../../clients/api/api";

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

const searchTransactions = async (query: string | null) => {
    if (query === null || query?.length <= 0) return getTransactions();

    return Api.get({
        url: "/transaction",
        config: {
            params: {
                query
            }
        }
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
