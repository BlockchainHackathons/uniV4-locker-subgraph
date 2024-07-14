import {
  DecreaseLiquidity as DecreaseLiquidityEvent,
  ExtendLock as ExtendLockEvent,
  LiquidityAdded as LiquidityAddedEvent,
} from "../generated/CLLockerHook/CLLockerHook";
import { createDecreaseLiquidityEvent } from "./utils/entities/decreaseliquidityEvent";
import { createExtandLockEvent } from "./utils/entities/extandLockEvent";
import { createLiquidityAddedEvent } from "./utils/entities/liquidityAddedEvent";

export function handleDecreaseLiquidity(event: DecreaseLiquidityEvent): void {
  createDecreaseLiquidityEvent(event);
}

export function handleExtendLock(event: ExtendLockEvent): void {
  createExtandLockEvent(event);
}

export function handleLiquidityAdded(event: LiquidityAddedEvent): void {
  createLiquidityAddedEvent(event);
}
