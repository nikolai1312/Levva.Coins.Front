import { createEvent } from "effector";

import { RequestError } from "../../domain/request";
import { TransactionValues } from "../../domain/transaction";

export const loadTransaction = createEvent("loadTransaction");
export const loadCreateTransactionDone = createEvent(
    "loadCreateTransactionDone"
);
export const loadTransactionDone = createEvent<TransactionValues[]>(
    "loadTransactionDone"
);
export const loadTransactionFail = createEvent<RequestError>(
    "loadTransactionFail"
);
