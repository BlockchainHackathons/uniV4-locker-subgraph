import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Bytes } from "@graphprotocol/graph-ts"
import { DecreaseLiquidity } from "../generated/schema"
import { DecreaseLiquidity as DecreaseLiquidityEvent } from "../generated/CLLockerHook/CLLockerHook"
import { handleDecreaseLiquidity } from "../src/cl-locker-hook"
import { createDecreaseLiquidityEvent } from "./cl-locker-hook-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let tokenId = BigInt.fromI32(234)
    let liquidity = BigInt.fromI32(234)
    let removedAmount0 = BigInt.fromI32(234)
    let removedAmount1 = BigInt.fromI32(234)
    let newDecreaseLiquidityEvent = createDecreaseLiquidityEvent(
      tokenId,
      liquidity,
      removedAmount0,
      removedAmount1
    )
    handleDecreaseLiquidity(newDecreaseLiquidityEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DecreaseLiquidity created and stored", () => {
    assert.entityCount("DecreaseLiquidity", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DecreaseLiquidity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenId",
      "234"
    )
    assert.fieldEquals(
      "DecreaseLiquidity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "liquidity",
      "234"
    )
    assert.fieldEquals(
      "DecreaseLiquidity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "removedAmount0",
      "234"
    )
    assert.fieldEquals(
      "DecreaseLiquidity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "removedAmount1",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
