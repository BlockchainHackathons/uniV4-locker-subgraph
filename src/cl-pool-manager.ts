import {
  Donate as DonateEvent,
  DynamicLPFeeUpdated as DynamicLPFeeUpdatedEvent,
  Initialize as InitializeEvent,
  ModifyLiquidity as ModifyLiquidityEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PausableRoleGranted as PausableRoleGrantedEvent,
  PausableRoleRevoked as PausableRoleRevokedEvent,
  Paused as PausedEvent,
  ProtocolFeeControllerUpdated as ProtocolFeeControllerUpdatedEvent,
  ProtocolFeeUpdated as ProtocolFeeUpdatedEvent,
  Swap as SwapEvent,
  Unpaused as UnpausedEvent,
} from "../generated/CLPoolManager/CLPoolManager";
import {
  CLPoolManagerInitialize,
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
  Unpaused,
} from "../generated/schema";

export function handleDonate(event: DonateEvent): void {
  let entity = new Donate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.CLPoolManager_id = event.params.id;
  entity.sender = event.params.sender;
  entity.amount0 = event.params.amount0;
  entity.amount1 = event.params.amount1;
  entity.tick = event.params.tick;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleDynamicLPFeeUpdated(
  event: DynamicLPFeeUpdatedEvent
): void {
  let entity = new DynamicLPFeeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.CLPoolManager_id = event.params.id;
  entity.dynamicLPFee = event.params.dynamicLPFee;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleInitialize(event: InitializeEvent): void {
  let entity = new CLPoolManagerInitialize(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.CLPoolManager_id = event.params.id;
  entity.currency0 = event.params.currency0;
  entity.currency1 = event.params.currency1;
  entity.hooks = event.params.hooks;
  entity.fee = event.params.fee;
  entity.parameters = event.params.parameters;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleModifyLiquidity(event: ModifyLiquidityEvent): void {
  let entity = new ModifyLiquidity(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.CLPoolManager_id = event.params.id;
  entity.sender = event.params.sender;
  entity.tickLower = event.params.tickLower;
  entity.tickUpper = event.params.tickUpper;
  entity.salt = event.params.salt;
  entity.liquidityDelta = event.params.liquidityDelta;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handlePausableRoleGranted(
  event: PausableRoleGrantedEvent
): void {
  let entity = new PausableRoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.account = event.params.account;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handlePausableRoleRevoked(
  event: PausableRoleRevokedEvent
): void {
  let entity = new PausableRoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.account = event.params.account;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.account = event.params.account;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleProtocolFeeControllerUpdated(
  event: ProtocolFeeControllerUpdatedEvent
): void {
  let entity = new ProtocolFeeControllerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.protocolFeeController = event.params.protocolFeeController;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleProtocolFeeUpdated(event: ProtocolFeeUpdatedEvent): void {
  let entity = new ProtocolFeeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.CLPoolManager_id = event.params.id;
  entity.protocolFee = event.params.protocolFee;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleSwap(event: SwapEvent): void {
  let entity = new Swap(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.CLPoolManager_id = event.params.id;
  entity.sender = event.params.sender;
  entity.amount0 = event.params.amount0;
  entity.amount1 = event.params.amount1;
  entity.sqrtPriceX96 = event.params.sqrtPriceX96;
  entity.liquidity = event.params.liquidity;
  entity.tick = event.params.tick;
  entity.fee = event.params.fee;
  entity.protocolFee = event.params.protocolFee;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.account = event.params.account;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
