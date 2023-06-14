import { CategoryService } from "../../services/CategoryServices/CategoryService";

import {
    loadCategory,
    loadCategoryDone,
    loadCategoryFail,
} from "../../stores/CategoryStore/CategoryEvents";

import { RequestError } from "../../domain/request";
import { CategoryValues } from "../../domain/category";

const execute = async (): Promise<void> => {

    loadCategory();

    return CategoryService.getCategories()
        .then((categories: CategoryValues[]) => {
            loadCategoryDone(categories);
        })
        .catch(({ hasError, message }: RequestError) => {
            loadCategoryFail({ hasError, message });
        });
};

const GetCategoriesUseCase = {
    execute,
};

export default GetCategoriesUseCase;
