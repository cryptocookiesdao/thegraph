// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class HourlyStat extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save HourlyStat entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type HourlyStat must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("HourlyStat", id.toString(), this);
    }
  }

  static load(id: string): HourlyStat | null {
    return changetype<HourlyStat | null>(store.get("HourlyStat", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get count_ckie_burn(): BigInt {
    let value = this.get("count_ckie_burn");
    return value!.toBigInt();
  }

  set count_ckie_burn(value: BigInt) {
    this.set("count_ckie_burn", Value.fromBigInt(value));
  }

  get count_matic_add(): BigInt {
    let value = this.get("count_matic_add");
    return value!.toBigInt();
  }

  set count_matic_add(value: BigInt) {
    this.set("count_matic_add", Value.fromBigInt(value));
  }

  get count_ckie_add(): BigInt {
    let value = this.get("count_ckie_add");
    return value!.toBigInt();
  }

  set count_ckie_add(value: BigInt) {
    this.set("count_ckie_add", Value.fromBigInt(value));
  }

  get count_ckie_supply(): BigInt {
    let value = this.get("count_ckie_supply");
    return value!.toBigInt();
  }

  set count_ckie_supply(value: BigInt) {
    this.set("count_ckie_supply", Value.fromBigInt(value));
  }

  get count_lp_add(): BigInt {
    let value = this.get("count_lp_add");
    return value!.toBigInt();
  }

  set count_lp_add(value: BigInt) {
    this.set("count_lp_add", Value.fromBigInt(value));
  }

  get count_lp_owned(): BigInt {
    let value = this.get("count_lp_owned");
    return value!.toBigInt();
  }

  set count_lp_owned(value: BigInt) {
    this.set("count_lp_owned", Value.fromBigInt(value));
  }
}

export class DailyStat extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DailyStat entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type DailyStat must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("DailyStat", id.toString(), this);
    }
  }

  static load(id: string): DailyStat | null {
    return changetype<DailyStat | null>(store.get("DailyStat", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get count_ckie_burn(): BigInt {
    let value = this.get("count_ckie_burn");
    return value!.toBigInt();
  }

  set count_ckie_burn(value: BigInt) {
    this.set("count_ckie_burn", Value.fromBigInt(value));
  }

  get count_matic_add(): BigInt {
    let value = this.get("count_matic_add");
    return value!.toBigInt();
  }

  set count_matic_add(value: BigInt) {
    this.set("count_matic_add", Value.fromBigInt(value));
  }

  get count_ckie_add(): BigInt {
    let value = this.get("count_ckie_add");
    return value!.toBigInt();
  }

  set count_ckie_add(value: BigInt) {
    this.set("count_ckie_add", Value.fromBigInt(value));
  }

  get count_ckie_supply(): BigInt {
    let value = this.get("count_ckie_supply");
    return value!.toBigInt();
  }

  set count_ckie_supply(value: BigInt) {
    this.set("count_ckie_supply", Value.fromBigInt(value));
  }

  get count_lp_add(): BigInt {
    let value = this.get("count_lp_add");
    return value!.toBigInt();
  }

  set count_lp_add(value: BigInt) {
    this.set("count_lp_add", Value.fromBigInt(value));
  }

  get count_lp_owned(): BigInt {
    let value = this.get("count_lp_owned");
    return value!.toBigInt();
  }

  set count_lp_owned(value: BigInt) {
    this.set("count_lp_owned", Value.fromBigInt(value));
  }
}

export class WeeklyStat extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save WeeklyStat entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type WeeklyStat must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("WeeklyStat", id.toString(), this);
    }
  }

  static load(id: string): WeeklyStat | null {
    return changetype<WeeklyStat | null>(store.get("WeeklyStat", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get count_ckie_burn(): BigInt {
    let value = this.get("count_ckie_burn");
    return value!.toBigInt();
  }

  set count_ckie_burn(value: BigInt) {
    this.set("count_ckie_burn", Value.fromBigInt(value));
  }

  get count_matic_add(): BigInt {
    let value = this.get("count_matic_add");
    return value!.toBigInt();
  }

  set count_matic_add(value: BigInt) {
    this.set("count_matic_add", Value.fromBigInt(value));
  }

  get count_ckie_add(): BigInt {
    let value = this.get("count_ckie_add");
    return value!.toBigInt();
  }

  set count_ckie_add(value: BigInt) {
    this.set("count_ckie_add", Value.fromBigInt(value));
  }

  get count_ckie_supply(): BigInt {
    let value = this.get("count_ckie_supply");
    return value!.toBigInt();
  }

  set count_ckie_supply(value: BigInt) {
    this.set("count_ckie_supply", Value.fromBigInt(value));
  }

  get count_lp_add(): BigInt {
    let value = this.get("count_lp_add");
    return value!.toBigInt();
  }

  set count_lp_add(value: BigInt) {
    this.set("count_lp_add", Value.fromBigInt(value));
  }

  get count_lp_owned(): BigInt {
    let value = this.get("count_lp_owned");
    return value!.toBigInt();
  }

  set count_lp_owned(value: BigInt) {
    this.set("count_lp_owned", Value.fromBigInt(value));
  }
}
