import { CategoryService } from "../../services/CategoryServices/CategoryService";

import {
    loadCategory,
    loadCreateCategoryDone,
    loadCategoryFail,
} from "../../stores/CategoryStore/CategoryEvents";

import { CategoryValues, NewCategoryParams } from "../../domain/category";
import { RequestError } from "../../domain/request";

const execute = async ({ description }: NewCategoryParams): Promise<CategoryValues> => {
    loadCategory();

    return CategoryService.createCategory({
        description,
    })
        .then(({ id }: CategoryValues) => {
            loadCreateCategoryDone({ id, description });
        })
        .catch(({ hasError, message }: RequestError) => {
            loadCategoryFail({ hasError, message });
            throw new Error();
        })
};

const NewCategoryUseCase = {
    execute,
};

export default NewCategoryUseCase;