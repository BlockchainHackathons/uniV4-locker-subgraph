import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address } from "@graphprotocol/graph-ts"
import { Initialize } from "../generated/Launcher/Launcher"

export function createInitializeEvent(
  poolId: Bytes,
  currency0: Address,
  currency1: Address,
  fee: i32,
  clockhook: Address
): Initialize {
  let initializeEvent = changetype<Initialize>(newMockEvent())

  initializeEvent.parameters = new Array()

  initializeEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromFixedBytes(poolId))
  )
  initializeEvent.parameters.push(
    new ethereum.EventParam("currency0", ethereum.Value.fromAddress(currency0))
  )
  initializeEvent.parameters.push(
    new ethereum.EventParam("currency1", ethereum.Value.fromAddress(currency1))
  )
  initializeEvent.parameters.push(
    new ethereum.EventParam(
      "fee",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(fee))
    )
  )
  initializeEvent.parameters.push(
    new ethereum.EventParam("clockhook", ethereum.Value.fromAddress(clockhook))
  )

  return initializeEvent
}
