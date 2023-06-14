import { createEvent } from "effector";

import { CategoryValues } from "../../domain/category";
import { RequestError } from "../../domain/request";

export const loadCategory = createEvent("loadCategory");
export const loadCreateCategoryDone = createEvent("loadCreateCategoryDone");
export const loadCategoryDone = createEvent<CategoryValues[]>("loadCategoryDone");
export const loadCategoryFail = createEvent<RequestError>("loadCategoryFail");