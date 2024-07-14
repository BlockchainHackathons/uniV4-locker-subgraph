import { Initialize as InitializeEvent } from "../generated/Launcher/Launcher"
import { Initialize } from "../generated/schema"

export function handleInitialize(event: InitializeEvent): void {
  let entity = new Initialize(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.currency0 = event.params.currency0
  entity.currency1 = event.params.currency1
  entity.fee = event.params.fee
  entity.clockhook = event.params.clockhook

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
