import { BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CookieToken,
  Approval,
  SwapToTreasury,
  Transfer
} from "../generated/CookieToken/CookieToken"
import {
  Mint as MintLP
} from "../generated/UniswapV2Pair/UniswapV2Pair"

import { HourlyStat, DailyStat, WeeklyStat } from "../generated/schema"

function createOrGetHourly(timestamp: BigInt) : HourlyStat {
  let hourly = (timestamp.toI32() / 60).toString();
  
  let _stat = HourlyStat.load(hourly);
  if (!_stat) {
    _stat = new HourlyStat(hourly);
    _stat.timestamp = timestamp;
    _stat.count_ckie_burn = BigInt.fromI32(0);
    _stat.count_matic_add = BigInt.fromI32(0);
    _stat.count_ckie_add = BigInt.fromI32(0);
    _stat.count_lp_owned = BigInt.fromI32(0);
  }
  return _stat;
}

function createOrGetDaily(timestamp: BigInt) : DailyStat {
  let daily = (timestamp.toI32() / (60 * 24)).toString();
  
  let _stat = DailyStat.load(daily);
  if (!_stat) {
    _stat = new DailyStat(daily);
    _stat.timestamp = timestamp;
    _stat.count_ckie_burn = BigInt.fromI32(0);
    _stat.count_matic_add = BigInt.fromI32(0);
    _stat.count_ckie_add = BigInt.fromI32(0);
    _stat.count_lp_owned = BigInt.fromI32(0);
  }
  return _stat;
}

function createOrGetWeekly(timestamp: BigInt) : WeeklyStat {
  let weekly = (timestamp.toI32() / (60 * 24 * 7)).toString();
  let _stat = WeeklyStat.load(weekly);
  if (!_stat) {
    _stat = new WeeklyStat(weekly);
    _stat.timestamp = timestamp;
    _stat.count_ckie_burn = BigInt.fromI32(0);
    _stat.count_matic_add = BigInt.fromI32(0);
    _stat.count_ckie_add = BigInt.fromI32(0);
    _stat.count_lp_owned = BigInt.fromI32(0);
  }
  return _stat;
}


export function handleSwapToTreasury(event: SwapToTreasury): void {}

// cookie transfer
export function handleTransfer(event: Transfer): void {
  let statH = createOrGetHourly(event.block.timestamp);
  let statD = createOrGetDaily(event.block.timestamp);
  let statW = createOrGetWeekly(event.block.timestamp);

  if (event.params.to == Address.fromString('0x0000000000000000000000000000000000000000')) {
    statH.count_ckie_burn = statH.count_ckie_burn.plus(event.params.value);
    statD.count_ckie_burn = statD.count_ckie_burn.plus(event.params.value);
    statW.count_ckie_burn = statW.count_ckie_burn.plus(event.params.value);
  }
  statH.save();
  statD.save();
  statW.save();

  // Entities can be written to the store with `.save()`
  
  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.allowance(...)
  // - contract.approve(...)
  // - contract.balanceOf(...)
  // - contract.decimals(...)
  // - contract.decreaseAllowance(...)
  // - contract.freeFee(...)
  // - contract.hasFee(...)
  // - contract.haveTax(...)
  // - contract.increaseAllowance(...)
  // - contract.lastTransfer(...)
  // - contract.minSellTime(...)
  // - contract.name(...)
  // - contract.owner(...)
  // - contract.router(...)
  // - contract.symbol(...)
  // - contract.totalSupply(...)
  // - contract.transfer(...)
  // - contract.transferFrom(...)
  // - contract.treasury(...)

}

export function handleMintLP(event: MintLP): void {

}