import { createStore } from "effector";

import {
    loadSearchTransaction,
    loadSearchTransactionDone,
    loadSearchTransactionFail,
} from "./SearchTransactionEvents";
import { SearchTransactionState } from "./SearchTransactionState";

const initialState: SearchTransactionState = {
    isLoading: false,
    transactions: [],
    hasError: false,
    errorMessage: "",
};

const SearchTransactionStore = createStore<SearchTransactionState>(
    initialState
)
    .on(loadSearchTransaction, (state) => ({
        ...state,
        isLoading: true,
        hasError: false,
        errorMessage: "",
    }))
    .on(loadSearchTransactionDone, (_, data) => ({
        isLoading: false,
        transactions: data,
        hasError: false,
        errorMessage: "",
    }))
    .on(loadSearchTransactionFail, (state, data) => ({
        ...state,
        isLoading: false,
        hasError: data.hasError,
        errorMessage: data.message,
    }));

export default SearchTransactionStore;