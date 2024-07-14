import { Initialize } from "../../../generated/Launcher/Launcher";
import { Pool } from "../../../generated/schema";

export const createPool = (event: Initialize): void => {
  let pool = new Pool(event.params.poolId.toHexString());
  pool.currency0 = event.params.currency0.toHexString();
  pool.currency1 = event.params.currency1.toHexString();
  pool.fee = event.params.fee;
  pool.clockhook = event.params.clockhook;
  pool.save();
};
