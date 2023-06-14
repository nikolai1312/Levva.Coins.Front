import { CategoryValues } from "../../domain/category";

export interface CategoryState {
    isLoading: boolean;
    categorias: CategoryValues[];
    hasError: boolean;
    errorMessage: string;
}