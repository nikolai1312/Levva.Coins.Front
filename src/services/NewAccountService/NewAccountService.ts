import { AxiosError } from "axios";

import { Api } from "../../clients/api/api"

import { NewAccountParams } from "../../domain/newAccount";

import { RequestError } from "../../domain/request";

const createUser = async ({
    name,
    email,
    password,
    confirmPassword,
}: NewAccountParams): Promise<void> => {
    return Api.post({
        url: "/User/Create",
        body: {
            name,
            email,
            password,
            confirmPassword,
        },
    })
        .then((response) => {
            return response.data;
        })
        .catch((err: AxiosError<RequestError>) => {
            throw err.response?.data;
        });
};

export const NewAccountService = {
    createUser,
};