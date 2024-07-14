import { Initialize } from "../../../generated/Launcher/Launcher";
import { InitializeEvent } from "../../../generated/schema";

export const createInitializeEvent = (event: Initialize): void => {
  let initializeEvent = new InitializeEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  initializeEvent.poolId = event.params.poolId;
  initializeEvent.currency0 = event.params.currency0;
  initializeEvent.currency1 = event.params.currency1;
  initializeEvent.fee = event.params.fee;
  initializeEvent.clockhook = event.params.clockhook;

  initializeEvent.blockNumber = event.block.number;
  initializeEvent.blockTimestamp = event.block.timestamp;
  initializeEvent.transactionHash = event.transaction.hash;

  initializeEvent.save();
};
