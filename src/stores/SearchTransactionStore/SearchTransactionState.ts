import { TransactionValues } from "../../domain/transaction";
import { TransactionValues } from "../../domain/transaction";

export interface SearchTransactionState {
    isLoading: boolean;
    transactions: TransactionValues[];
    hasError: boolean;
    errorMessage: string;
}
export interface SearchTransactionState {
    isLoading: boolean;
    transactions: TransactionValues[];
    hasError: boolean;
    errorMessage: string;
}