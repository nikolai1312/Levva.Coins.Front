import { TransactionValues } from "../../domain/transaction";

export interface SearchTransactionState {
    isLoading: boolean;
    transactions: TransactionValues[];
    hasError: boolean;
    errorMessage: string;
}