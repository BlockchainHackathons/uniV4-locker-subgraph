import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import { Donate } from "../generated/schema"
import { Donate as DonateEvent } from "../generated/CLPoolManager/CLPoolManager"
import { handleDonate } from "../src/cl-pool-manager"
import { createDonateEvent } from "./cl-pool-manager-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let id = Bytes.fromI32(1234567890)
    let sender = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let amount0 = BigInt.fromI32(234)
    let amount1 = BigInt.fromI32(234)
    let tick = 123
    let newDonateEvent = createDonateEvent(id, sender, amount0, amount1, tick)
    handleDonate(newDonateEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Donate created and stored", () => {
    assert.entityCount("Donate", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Donate",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "sender",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Donate",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount0",
      "234"
    )
    assert.fieldEquals(
      "Donate",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount1",
      "234"
    )
    assert.fieldEquals(
      "Donate",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tick",
      "123"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
