import {
  DecreaseLiquidity as DecreaseLiquidityEvent,
  ExtendLock as ExtendLockEvent,
  LiquidityAdded as LiquidityAddedEvent,
} from "../generated/CLLockerHook/CLLockerHook"
import {
  DecreaseLiquidity,
  ExtendLock,
  LiquidityAdded,
} from "../generated/schema"

export function handleDecreaseLiquidity(event: DecreaseLiquidityEvent): void {
  let entity = new DecreaseLiquidity(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.tokenId = event.params.tokenId
  entity.liquidity = event.params.liquidity
  entity.removedAmount0 = event.params.removedAmount0
  entity.removedAmount1 = event.params.removedAmount1

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleExtendLock(event: ExtendLockEvent): void {
  let entity = new ExtendLock(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.tokenId = event.params.tokenId
  entity.unlockDate = event.params.unlockDate

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLiquidityAdded(event: LiquidityAddedEvent): void {
  let entity = new LiquidityAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.poolId = event.params.poolId
  entity.tokenId = event.params.tokenId
  entity.liquidity = event.params.liquidity
  entity.amount0 = event.params.amount0
  entity.amount1 = event.params.amount1
  entity.unlockDate = event.params.unlockDate

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
