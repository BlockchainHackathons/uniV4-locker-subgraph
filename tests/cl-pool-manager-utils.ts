import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Donate,
  DynamicLPFeeUpdated,
  Initialize,
  ModifyLiquidity,
  OwnershipTransferred,
  PausableRoleGranted,
  PausableRoleRevoked,
  Paused,
  ProtocolFeeControllerUpdated,
  ProtocolFeeUpdated,
  Swap,
  Unpaused
} from "../generated/CLPoolManager/CLPoolManager"

export function createDonateEvent(
  id: Bytes,
  sender: Address,
  amount0: BigInt,
  amount1: BigInt,
  tick: i32
): Donate {
  let donateEvent = changetype<Donate>(newMockEvent())

  donateEvent.parameters = new Array()

  donateEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )
  donateEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  donateEvent.parameters.push(
    new ethereum.EventParam(
      "amount0",
      ethereum.Value.fromUnsignedBigInt(amount0)
    )
  )
  donateEvent.parameters.push(
    new ethereum.EventParam(
      "amount1",
      ethereum.Value.fromUnsignedBigInt(amount1)
    )
  )
  donateEvent.parameters.push(
    new ethereum.EventParam("tick", ethereum.Value.fromI32(tick))
  )

  return donateEvent
}

export function createDynamicLPFeeUpdatedEvent(
  id: Bytes,
  dynamicLPFee: i32
): DynamicLPFeeUpdated {
  let dynamicLpFeeUpdatedEvent = changetype<DynamicLPFeeUpdated>(newMockEvent())

  dynamicLpFeeUpdatedEvent.parameters = new Array()

  dynamicLpFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )
  dynamicLpFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "dynamicLPFee",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(dynamicLPFee))
    )
  )

  return dynamicLpFeeUpdatedEvent
}

export function createInitializeEvent(
  id: Bytes,
  currency0: Address,
  currency1: Address,
  hooks: Address,
  fee: i32,
  parameters: Bytes
): Initialize {
  let initializeEvent = changetype<Initialize>(newMockEvent())

  initializeEvent.parameters = new Array()

  initializeEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )
  initializeEvent.parameters.push(
    new ethereum.EventParam("currency0", ethereum.Value.fromAddress(currency0))
  )
  initializeEvent.parameters.push(
    new ethereum.EventParam("currency1", ethereum.Value.fromAddress(currency1))
  )
  initializeEvent.parameters.push(
    new ethereum.EventParam("hooks", ethereum.Value.fromAddress(hooks))
  )
  initializeEvent.parameters.push(
    new ethereum.EventParam(
      "fee",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(fee))
    )
  )
  initializeEvent.parameters.push(
    new ethereum.EventParam(
      "parameters",
      ethereum.Value.fromFixedBytes(parameters)
    )
  )

  return initializeEvent
}

export function createModifyLiquidityEvent(
  id: Bytes,
  sender: Address,
  tickLower: i32,
  tickUpper: i32,
  salt: Bytes,
  liquidityDelta: BigInt
): ModifyLiquidity {
  let modifyLiquidityEvent = changetype<ModifyLiquidity>(newMockEvent())

  modifyLiquidityEvent.parameters = new Array()

  modifyLiquidityEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )
  modifyLiquidityEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  modifyLiquidityEvent.parameters.push(
    new ethereum.EventParam("tickLower", ethereum.Value.fromI32(tickLower))
  )
  modifyLiquidityEvent.parameters.push(
    new ethereum.EventParam("tickUpper", ethereum.Value.fromI32(tickUpper))
  )
  modifyLiquidityEvent.parameters.push(
    new ethereum.EventParam("salt", ethereum.Value.fromFixedBytes(salt))
  )
  modifyLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "liquidityDelta",
      ethereum.Value.fromSignedBigInt(liquidityDelta)
    )
  )

  return modifyLiquidityEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausableRoleGrantedEvent(
  account: Address
): PausableRoleGranted {
  let pausableRoleGrantedEvent = changetype<PausableRoleGranted>(newMockEvent())

  pausableRoleGrantedEvent.parameters = new Array()

  pausableRoleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausableRoleGrantedEvent
}

export function createPausableRoleRevokedEvent(
  account: Address
): PausableRoleRevoked {
  let pausableRoleRevokedEvent = changetype<PausableRoleRevoked>(newMockEvent())

  pausableRoleRevokedEvent.parameters = new Array()

  pausableRoleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausableRoleRevokedEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createProtocolFeeControllerUpdatedEvent(
  protocolFeeController: Address
): ProtocolFeeControllerUpdated {
  let protocolFeeControllerUpdatedEvent =
    changetype<ProtocolFeeControllerUpdated>(newMockEvent())

  protocolFeeControllerUpdatedEvent.parameters = new Array()

  protocolFeeControllerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "protocolFeeController",
      ethereum.Value.fromAddress(protocolFeeController)
    )
  )

  return protocolFeeControllerUpdatedEvent
}

export function createProtocolFeeUpdatedEvent(
  id: Bytes,
  protocolFee: i32
): ProtocolFeeUpdated {
  let protocolFeeUpdatedEvent = changetype<ProtocolFeeUpdated>(newMockEvent())

  protocolFeeUpdatedEvent.parameters = new Array()

  protocolFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )
  protocolFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "protocolFee",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(protocolFee))
    )
  )

  return protocolFeeUpdatedEvent
}

export function createSwapEvent(
  id: Bytes,
  sender: Address,
  amount0: BigInt,
  amount1: BigInt,
  sqrtPriceX96: BigInt,
  liquidity: BigInt,
  tick: i32,
  fee: i32,
  protocolFee: i32
): Swap {
  let swapEvent = changetype<Swap>(newMockEvent())

  swapEvent.parameters = new Array()

  swapEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("amount0", ethereum.Value.fromSignedBigInt(amount0))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("amount1", ethereum.Value.fromSignedBigInt(amount1))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "sqrtPriceX96",
      ethereum.Value.fromUnsignedBigInt(sqrtPriceX96)
    )
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "liquidity",
      ethereum.Value.fromUnsignedBigInt(liquidity)
    )
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("tick", ethereum.Value.fromI32(tick))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "fee",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(fee))
    )
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "protocolFee",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(protocolFee))
    )
  )

  return swapEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}
