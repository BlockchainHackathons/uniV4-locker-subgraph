import { Wallet } from "../../../generated/schema";
import { ONE_BI, ZERO_BI } from "../constant";

export const createWallet = (walletId: string): void => {
  let wallet = Wallet.load(walletId);
  if (!wallet) {
    wallet = new Wallet(walletId);
    wallet.numberDeploymentsPool = ZERO_BI;
    wallet.save();
  }
};
export const addNumberDeploymentsPoolsWallet = (walletId: string): void => {
  let wallet = Wallet.load(walletId)!;
  wallet.numberDeploymentsPool = wallet.numberDeploymentsPool.plus(ONE_BI);
  wallet.save();
};
