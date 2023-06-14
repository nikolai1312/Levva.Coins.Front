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
        url: "/transaction",
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
        url: "/transaction",
    })
        .then((response: any) => {
            return response.data;
        })
        .catch((err: AxiosError<RequestError>) => {
            throw err.response?.data;
        });
};

const searchTransactions = async (search: string | null) => {
    if (search === null || search?.length <= 0) return getTransactions();

    return Api.get({
        url: "/transaction",
        config: {
            params: {
                search
            }
        }
    })
        .then((response: any) => response.data)
        .catch((error: AxiosError<RequestError>) => {
            throw error.response?.data;
        });
};


export const TransactionService = {
    createTransaction,
    getTransactions,
    searchTransactions,
};
