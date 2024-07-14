import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address } from "@graphprotocol/graph-ts"
import { Initialize } from "../generated/schema"
import { Initialize as InitializeEvent } from "../generated/Launcher/Launcher"
import { handleInitialize } from "../src/launcher"
import { createInitializeEvent } from "./launcher-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let poolId = Bytes.fromI32(1234567890)
    let currency0 = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let currency1 = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let fee = 123
    let clockhook = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newInitializeEvent = createInitializeEvent(
      poolId,
      currency0,
      currency1,
      fee,
      clockhook
    )
    handleInitialize(newInitializeEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Initialize created and stored", () => {
    assert.entityCount("Initialize", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Initialize",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "poolId",
      "1234567890"
    )
    assert.fieldEquals(
      "Initialize",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "currency0",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Initialize",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "currency1",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Initialize",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "fee",
      "123"
    )
    assert.fieldEquals(
      "Initialize",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "clockhook",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
