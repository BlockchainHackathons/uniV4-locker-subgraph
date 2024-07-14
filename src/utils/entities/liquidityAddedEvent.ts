import { LiquidityAdded } from "../../../generated/CLLockerHook/CLLockerHook";
import { Data, LiquidityAddedEvent } from "../../../generated/schema";

export const createLiquidityAddedEvent = (event: LiquidityAdded): void => {
  let entity = new LiquidityAddedEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.poolId = event.params.poolId;
  entity.tokenId = event.params.tokenId;
  entity.liquidity = event.params.liquidity;
  entity.amount0 = event.params.amount0;
  entity.amount1 = event.params.amount1;
  entity.unlockDate = event.params.unlockDate;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  let data = new Data(entity.blockTimestamp.toString());
  data.liquidity = entity.liquidity;
  data.amount0 = entity.amount0;
  data.amount1 = entity.amount1;
  data.save();
};
