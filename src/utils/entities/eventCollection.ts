import { EventCollection } from "../../../generated/schema";
import {
  chainId,
  hookLock,
  launcher,
  ONE_BI,
  poolm,
  ZERO_BI,
} from "../constant";

export const createEventCollection = (): void => {
  let eventCollection = new EventCollection(launcher);
  eventCollection.chaindId = chainId;
  eventCollection.poolm = poolm;
  eventCollection.launcher = launcher;
  eventCollection.hookLock = hookLock;
  eventCollection.numberPoolsV4 = ZERO_BI;
  eventCollection.save();
};

export const addEventCollectionNumberPoolsV4 = (): void => {
  let eventCollection = EventCollection.load(launcher)!;

  eventCollection.numberPoolsV4 = eventCollection.numberPoolsV4.plus(ONE_BI);
  eventCollection.save();
};
