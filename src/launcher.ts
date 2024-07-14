import { Initialize as InitializeEvent } from "../generated/Launcher/Launcher";
import { addEventCollectionNumberPoolsV4 } from "./utils/entities/eventCollection";
import { createInitializeEvent } from "./utils/entities/initializeEvent";
import { createPool } from "./utils/entities/pool";
import { createToken } from "./utils/entities/token";
import {
  addNumberDeploymentsPoolsWallet,
  createWallet,
} from "./utils/entities/wallet";

export function handleInitialize(event: InitializeEvent): void {
  let block = event.block;
  let currency0 = event.params.currency0;
  let currency1 = event.params.currency1;
  const walletId = event.transaction.from.toHexString();
  createInitializeEvent(event);
  addEventCollectionNumberPoolsV4();
  createWallet(walletId);
  addNumberDeploymentsPoolsWallet(walletId);
  createToken(currency0, block);
  createToken(currency1, block);
  createPool(event);
}
