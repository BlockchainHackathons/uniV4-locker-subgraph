import { DecreaseLiquidity } from "../../../generated/CLLockerHook/CLLockerHook";
import { DecreaseLiquidityEvent } from "../../../generated/schema";

export const createDecreaseLiquidityEvent = (
  event: DecreaseLiquidity
): void => {
  let entity = new DecreaseLiquidityEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.tokenId = event.params.tokenId;
  entity.liquidity = event.params.liquidity;
  entity.removedAmount0 = event.params.removedAmount0;
  entity.removedAmount1 = event.params.removedAmount1;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
};
