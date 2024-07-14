import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts";
import { Token } from "../../../generated/schema";
import { ERC20 } from "../../../generated/Launcher/ERC20";

export function createToken(
  tokenAddress: Address,
  block: ethereum.Block
): void {
  let token = Token.load(tokenAddress.toHexString());
  if (!token) {
    token = new Token(tokenAddress.toHexString());
    const erc20Contract = ERC20.bind(tokenAddress);
    const name = erc20Contract.try_name();
    const symbol = erc20Contract.try_symbol();
    const decimals = erc20Contract.try_decimals();

    token.name = name.reverted ? "" : name.value;
    token.symbol = symbol.reverted ? "" : symbol.value;
    token.decimals = decimals.reverted
      ? BigInt.fromI32(0)
      : BigInt.fromI32(decimals.value);
    token.blockNumber = block.number;
    token.blockTimestamp = block.timestamp;
    token.save();
  }
}
