import { Address, BigDecimal, BigInt } from "@graphprotocol/graph-ts";

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export const ZERO_BI = BigInt.fromI32(0);
export const ONE_BI = BigInt.fromI32(1);
export const ZERO_BD = BigDecimal.fromString("0");
export const ONE_BD = BigDecimal.fromString("1");
export const BI_18 = BigInt.fromI32(18);
export const BYTES_ONE = Address.fromI32(1);
export const MIN_BD = BigDecimal.fromString("0.000000000000000001");
export const UPDATE_INTERVAL = BigInt.fromI32(60);
export const decimalsOracle = BigInt.fromI32(8);
export const CENT_BI = BigInt.fromI32(100);

//chamel
export const chainId = BigInt.fromI32(97);
export const launcher = "0x9206a06620cd141c546b454a5b0e53b0152aa41e";
export const hookLock = "0x74980ccf8f43c772dd89b824561f8803ec4a4960";
export const poolm = "0x40a081a39e9638fa6e2463b92a4eff4bdf877179";

export const LockStatus = ["UNLOCKED", "SMALLLOCKED", "LOCKED"];
