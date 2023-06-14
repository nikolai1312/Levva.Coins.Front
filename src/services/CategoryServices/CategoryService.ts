import { AxiosError } from "axios";

import Api from "../../clients/api/api";

import { CategoryValues, NewCategoryParams } from "../../domain/category";
import { RequestError } from "../../domain/request";

const createCategory = async ({
    description,
}: NewCategoryParams): Promise<void> => {
    return Api.post({
        url: "/category",
        body: {
            description,
        },
    })
        .then((response) => {
            return response.data;
        })
        .catch((err: AxiosError<RequestError>) => {
            throw err.response?.data;
        });
};

const getCategories = async (): Promise<CategoryValues[]> => {
    return Api.get({
        url: "/category",
    })
        .then((response) => {
            return response.data
        })
        .catch((err: AxiosError<RequestError>) => {
            throw err.response?.data;
        });
};

export const CategoryService = {
    createCategory,
    getCategories,
}