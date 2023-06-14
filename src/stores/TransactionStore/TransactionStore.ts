import { createStore } from "effector";

import {
    loadTransaction,
    loadCreateTransactionDone,
    loadTransactionDone,
    loadTransactionFail,
} from "./TransactionEvents";
import { TransactionState } from "./TransactionState";

const initialState: TransactionState = {
    isLoading: false,
    transactions: [],
    hasError: false,
    errorMessage: "",
};

const TransactionStore = createStore<TransactionState>(initialState)
    .on(loadTransaction, (state) => ({
        ...state,
        isLoading: true,
        hasError: false,
        errorMessage: "",
    }))
    .on(loadCreateTransactionDone, (state, data) => ({
        transactions: [...data, ...state.transactions],
        isLoading: false,
        hasError: false,
        errorMessage: "",
    }))
    .on(loadTransactionDone, (state, data) => ({
        ...state,
        isLoading: false,
        transactions: [...data],
        hasError: false,
        errorMessage: "",
    }))
    .on(loadTransactionFail, (state, data) => ({
        ...state,
        hasError: data.hasError,
        errorMessage: data.message,
        isLoading: false,
    }));

export default TransactionStore;
