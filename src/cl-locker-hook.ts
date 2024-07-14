import {
  DecreaseLiquidity as DecreaseLiquidityEvent,
  ExtendLock as ExtendLockEvent,
  LiquidityAdded as LiquidityAddedEvent,
} from "../generated/CLLockerHook/CLLockerHook";
import { createDecreaseLiquidityEvent } from "./utils/entities/decreaseliquidityEvent";
import { addEventCollectionNumberLocks } from "./utils/entities/eventCollection";
import { createExtandLockEvent } from "./utils/entities/extandLockEvent";
import { createLiquidityAddedEvent } from "./utils/entities/liquidityAddedEvent";
import {
  createLock,
  decreaseLiquidityLock,
  extendUnlockDateLock,
} from "./utils/entities/lock";

export function handleDecreaseLiquidity(event: DecreaseLiquidityEvent): void {
  createDecreaseLiquidityEvent(event);
  decreaseLiquidityLock(event);
  addEventCollectionNumberLocks();
}

export function handleExtendLock(event: ExtendLockEvent): void {
  createExtandLockEvent(event);
  extendUnlockDateLock(event);
}

export function handleLiquidityAdded(event: LiquidityAddedEvent): void {
  createLiquidityAddedEvent(event);
  createLock(event);
}
