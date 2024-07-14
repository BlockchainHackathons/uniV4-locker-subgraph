import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  DecreaseLiquidity,
  ExtendLock,
  LiquidityAdded
} from "../generated/CLLockerHook/CLLockerHook"

export function createDecreaseLiquidityEvent(
  tokenId: BigInt,
  liquidity: BigInt,
  removedAmount0: BigInt,
  removedAmount1: BigInt
): DecreaseLiquidity {
  let decreaseLiquidityEvent = changetype<DecreaseLiquidity>(newMockEvent())

  decreaseLiquidityEvent.parameters = new Array()

  decreaseLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  decreaseLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "liquidity",
      ethereum.Value.fromUnsignedBigInt(liquidity)
    )
  )
  decreaseLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "removedAmount0",
      ethereum.Value.fromUnsignedBigInt(removedAmount0)
    )
  )
  decreaseLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "removedAmount1",
      ethereum.Value.fromUnsignedBigInt(removedAmount1)
    )
  )

  return decreaseLiquidityEvent
}

export function createExtendLockEvent(
  tokenId: BigInt,
  unlockDate: BigInt
): ExtendLock {
  let extendLockEvent = changetype<ExtendLock>(newMockEvent())

  extendLockEvent.parameters = new Array()

  extendLockEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  extendLockEvent.parameters.push(
    new ethereum.EventParam(
      "unlockDate",
      ethereum.Value.fromUnsignedBigInt(unlockDate)
    )
  )

  return extendLockEvent
}

export function createLiquidityAddedEvent(
  poolId: Bytes,
  tokenId: BigInt,
  liquidity: BigInt,
  amount0: BigInt,
  amount1: BigInt,
  unlockDate: BigInt
): LiquidityAdded {
  let liquidityAddedEvent = changetype<LiquidityAdded>(newMockEvent())

  liquidityAddedEvent.parameters = new Array()

  liquidityAddedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromFixedBytes(poolId))
  )
  liquidityAddedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  liquidityAddedEvent.parameters.push(
    new ethereum.EventParam(
      "liquidity",
      ethereum.Value.fromUnsignedBigInt(liquidity)
    )
  )
  liquidityAddedEvent.parameters.push(
    new ethereum.EventParam(
      "amount0",
      ethereum.Value.fromUnsignedBigInt(amount0)
    )
  )
  liquidityAddedEvent.parameters.push(
    new ethereum.EventParam(
      "amount1",
      ethereum.Value.fromUnsignedBigInt(amount1)
    )
  )
  liquidityAddedEvent.parameters.push(
    new ethereum.EventParam(
      "unlockDate",
      ethereum.Value.fromUnsignedBigInt(unlockDate)
    )
  )

  return liquidityAddedEvent
}
