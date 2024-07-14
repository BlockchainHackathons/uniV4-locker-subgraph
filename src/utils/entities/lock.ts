import { log } from "@graphprotocol/graph-ts";
import {
  DecreaseLiquidity,
  ExtendLock,
  LiquidityAdded,
} from "../../../generated/CLLockerHook/CLLockerHook";
import { Lock, Pool } from "../../../generated/schema";

export const createLock = (event: LiquidityAdded): void => {
  let params = event.params;
  let pool = Pool.load(params.poolId.toHexString());
  if (!pool) {
    log.warning("poolId : {}", [params.poolId.toHexString()]);
    return;
  }

  let lock = new Lock(params.tokenId.toString());
  lock.unlockDate = params.unlockDate;
  lock.amount0 = params.amount0;
  lock.amount1 = params.amount1;
  lock.liquidity = params.liquidity;
  lock.pool = params.poolId.toHexString();
  lock.currency0 = pool.currency0;
  lock.currency1 = pool.currency1;
  lock.owner = event.transaction.from.toHexString();

  lock.save();
};

export const extendUnlockDateLock = (event: ExtendLock): void => {
  let params = event.params;

  let lock = Lock.load(params.tokenId.toString())!;
  lock.unlockDate = params.unlockDate;
  lock.save();
};

export const decreaseLiquidityLock = (event: DecreaseLiquidity): void => {
  let params = event.params;

  let lock = Lock.load(params.tokenId.toString())!;
  lock.liquidity = params.liquidity.minus(params.liquidity);
  lock.amount0 = lock.amount0.minus(params.removedAmount0);
  lock.amount1 = lock.amount1.minus(params.removedAmount1);
  lock.save();
};
