// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal,
} from "@graphprotocol/graph-ts";

export class TokenApprove extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TokenApprove entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TokenApprove entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenApprove", id.toString(), this);
  }

  static load(id: string): TokenApprove | null {
    return store.get("TokenApprove", id) as TokenApprove | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get spender(): Bytes {
    let value = this.get("spender");
    return value.toBytes();
  }

  set spender(value: Bytes) {
    this.set("spender", Value.fromBytes(value));
  }
}
export class TokenHolder extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TokenHolder entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TokenHolder entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenHolder", id.toString(), this);
  }

  static load(id: string): TokenHolder | null {
    return store.get("TokenHolder", id) as TokenHolder | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): String {
    let value = this.get("address");
    return value.toString();
  }

  set address(value: String) {
    this.set("address", Value.fromString(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }
  
  //get transactionCount(): BigInt {
    //let value = this.get("transactionCount");
    //return value.toBigInt();
  //}

  //set transactionCount(value: BigInt) {
    //this.set("transactionCount", Value.fromBigInt(value));
  //}

  get allowance(): BigInt {
    let value = this.get("allowance");
    return value.toBigInt();
  }

  set allowance(value: BigInt) {
    this.set("allowance", Value.fromBigInt(value));
  }
}
export class TransferCounter extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TransferCounter entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TransferCounter entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TransferCounter", id.toString(), this);
  }

  static load(id: string): TransferCounter | null {
    return store.get("TransferCounter", id) as TransferCounter | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get totalTransferred(): BigInt {
    let value = this.get("totalTransferred");
    return value.toBigInt();
  }

  set totalTransferred(value: BigInt) {
    this.set("totalTransferred", Value.fromBigInt(value));
  }
}