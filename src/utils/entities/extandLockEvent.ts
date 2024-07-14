import { ExtendLock } from "../../../generated/CLLockerHook/CLLockerHook";
import { ExtendLockEvent } from "../../../generated/schema";

export const createExtandLockEvent = (event: ExtendLock): void => {
  let entity = new ExtendLockEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.tokenId = event.params.tokenId;
  entity.unlockDate = event.params.unlockDate;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
};
