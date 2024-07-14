import { Initialize } from "../../../generated/Launcher/Launcher";
import { Pool } from "../../../generated/schema";

export const createPool = (event: Initialize): void => {
  let pool = new Pool(event.params.poolId.toString());
  pool.currency0 = event.params.currency0.toString();
  pool.currency1 = event.params.currency1.toString();
  pool.fee = event.params.fee;
  pool.clockhook = event.params.clockhook;
  pool.save();
};
