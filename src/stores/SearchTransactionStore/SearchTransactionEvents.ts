import { createEvent } from "effector";

import { TransactionValues } from "../../domain/transaction";
import { RequestError } from "../../domain/request";

export const loadSearchTransaction = createEvent("loadSearchTransaction");
export const loadSearchTransactionDone = createEvent<TransactionValues[]>("loadSearchTransactionDone");
export const loadSearchTransactionFail = createEvent<RequestError>("loadSearchTransactionFail");
export const loadSearchTransaction = createEvent("loadSearchTransaction");
export const loadSearchTransactionDone = createEvent<TransactionValues[]>("loadSearchTransactionDone");
export const loadSearchTransactionFail = createEvent<RequestError>("loadSearchTransactionFail");