import { BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CookieToken,
  Approval,
  SwapToTreasury,
  Transfer
} from "../generated/CookieToken/CookieToken"
import {
  Transfer as TransferLP,
  Mint as MintLP,
  UniswapV2Pair
} from "../generated/UniswapV2Pair/UniswapV2Pair"

import { HourlyStat, DailyStat, WeeklyStat } from "../generated/schema"

function createOrGetHourly(timestamp: BigInt) : HourlyStat {
  let hourly = (timestamp.toI32() / (60 * 60)).toString();
  
  let _stat = HourlyStat.load(hourly);
  if (!_stat) {
    _stat = new HourlyStat(hourly);
    _stat.timestamp = timestamp;
    _stat.count_ckie_burn = BigInt.fromI32(0);
    _stat.count_matic_add = BigInt.fromI32(0);
    _stat.count_ckie_add = BigInt.fromI32(0);
    _stat.count_ckie_supply = BigInt.fromI32(0);
    _stat.count_lp_owned = BigInt.fromI32(0);
    _stat.count_lp_add = BigInt.fromI32(0);
  }
  return _stat;
}

function createOrGetDaily(timestamp: BigInt) : DailyStat {
  let daily = (timestamp.toI32() / (60 * 60 * 24)).toString();
  
  let _stat = DailyStat.load(daily);
  if (!_stat) {
    _stat = new DailyStat(daily);
    _stat.timestamp = timestamp;
    _stat.count_ckie_burn = BigInt.fromI32(0);
    _stat.count_matic_add = BigInt.fromI32(0);
    _stat.count_ckie_add = BigInt.fromI32(0);
    _stat.count_ckie_supply = BigInt.fromI32(0);
    _stat.count_lp_owned = BigInt.fromI32(0);
    _stat.count_lp_add = BigInt.fromI32(0);
  }
  return _stat;
}

function createOrGetWeekly(timestamp: BigInt) : WeeklyStat {
  let weekly = (timestamp.toI32() / (60 * 60 * 24 * 7)).toString();
  let _stat = WeeklyStat.load(weekly);
  if (!_stat) {
    _stat = new WeeklyStat(weekly);
    _stat.timestamp = timestamp;
    _stat.count_ckie_burn = BigInt.fromI32(0);
    _stat.count_matic_add = BigInt.fromI32(0);
    _stat.count_ckie_add = BigInt.fromI32(0);
    _stat.count_ckie_supply = BigInt.fromI32(0);
    _stat.count_lp_owned = BigInt.fromI32(0);
    _stat.count_lp_add = BigInt.fromI32(0);
  }
  return _stat;
}


export function handleSwapToTreasury(event: SwapToTreasury): void {}

// cookie transfer
export function handleTransfer(event: Transfer): void {
  let statH = createOrGetHourly(event.block.timestamp);
  let statD = createOrGetDaily(event.block.timestamp);
  let statW = createOrGetWeekly(event.block.timestamp);

  let ckie = UniswapV2Pair.bind(Address.fromString('0x3C0Bd2118a5E61C41d2aDeEBCb8B7567FDE1cBaF'));
  

  if (event.params.to == Address.fromString('0x0000000000000000000000000000000000000000')) {
    statH.count_ckie_burn = statH.count_ckie_burn.plus(event.params.value);
    statD.count_ckie_burn = statD.count_ckie_burn.plus(event.params.value);
    statW.count_ckie_burn = statW.count_ckie_burn.plus(event.params.value);
  }

  statH.count_ckie_add = ckie.totalSupply();
  statD.count_ckie_add = statH.count_ckie_add;
  statW.count_ckie_add = statH.count_ckie_add;

  statH.save();
  statD.save();
  statW.save();

}

export function handleTransferLP(event: TransferLP): void {
  let statH = createOrGetHourly(event.block.timestamp);
  let statD = createOrGetDaily(event.block.timestamp);
  let statW = createOrGetWeekly(event.block.timestamp);

  const uniPairAddress = Address.fromString('0xED1D8d6cdC88b6794555099Ca4Ed1aabEccE56c2');
  
  let uniPair = UniswapV2Pair.bind(uniPairAddress);
  let ckie = UniswapV2Pair.bind(Address.fromString('0x3C0Bd2118a5E61C41d2aDeEBCb8B7567FDE1cBaF'));
  let wmatic = UniswapV2Pair.bind(Address.fromString('0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'));

  let ckieBalance = ckie.balanceOf(uniPairAddress);
  let wmaticBalance = wmatic.balanceOf(uniPairAddress);
  let totalSupply = uniPair.totalSupply();


  // 0x40fd228e9affd14c11a6df17cc7806a0d905ee93 is the treasury
  const treasury = Address.fromString('0x40fd228e9affd14c11a6df17cc7806a0d905ee93')

  statH.count_lp_owned = uniPair.balanceOf(treasury);
  statD.count_lp_owned = statH.count_lp_owned;
  statW.count_lp_owned = statH.count_lp_owned;

  statH.count_ckie_add = ckie.totalSupply();
  statD.count_ckie_add = statH.count_ckie_add;
  statW.count_ckie_add = statH.count_ckie_add;

  if (event.params.to == treasury) {
    let valueWmatic = event.params.value.times(wmaticBalance).div(totalSupply);
    let valueCkie = event.params.value.times(ckieBalance).div(totalSupply);

    statH.count_lp_add = statH.count_lp_add.plus(event.params.value);
    statH.count_ckie_add = statH.count_ckie_add.plus(valueCkie);
    statH.count_matic_add = statH.count_matic_add.plus(valueWmatic);

    statD.count_lp_add = statD.count_lp_add.plus(event.params.value);
    statD.count_ckie_add = statD.count_ckie_add.plus(valueCkie);
    statD.count_matic_add = statD.count_matic_add.plus(valueWmatic);

    statW.count_lp_add = statW.count_lp_add.plus(event.params.value);
    statW.count_ckie_add = statW.count_ckie_add.plus(valueCkie);
    statW.count_matic_add = statW.count_matic_add.plus(valueWmatic);
  }
  statH.save();
  statD.save();
  statW.save();
}

export function handleMintLP(event: MintLP): void {}
