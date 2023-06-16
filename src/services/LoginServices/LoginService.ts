import { AxiosError } from "axios";

import { Api } from "../../clients/api/api";

import { LoginParams, LoginValues } from "../../domain/login";

import { RequestError } from "../../domain/request/"

const authenticateUser = async ({
    email,
    password,
}: LoginParams): Promise<LoginValues> => {
    return Api.post({
        url: "/User",
        body: {
            name: null,
            email,
            password,
            token: null,
        },
    })
        .then((response) => {
            return response.data;
        })
        .catch((err: AxiosError<RequestError>) => {
            throw err.response?.data;
        });
};

export const LoginService = {
    authenticateUser,
}