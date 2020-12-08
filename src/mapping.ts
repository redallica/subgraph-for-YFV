import { BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts"
import { YFV, Approval, Transfer } from "../generated/YFV/YFV"
import { TokenApprove, TokenHolder, TransferCounter } from "../generated/schema"

export function handleApproval(event: Approval): void {
let tokenapprove = TokenApprove.load(event.transaction.from.toHex())
if (tokenapprove == null) {
  tokenapprove = new TokenApprove(event.transaction.from.toHex())
 
tokenapprove.count = BigInt.fromI32(0)
}
tokenapprove.count = event.transaction.value
tokenapprove.owner = event.params.owner
tokenapprove.spender = event.params.spender
tokenapprove.save()
}
export function handleTransfer(event: Transfer): void {
  // Define Token folder from where the amount is transfered
  let tokenholderFrom = TokenHolder.load(event.params.from.toHex())
  if (tokenholderFrom == null) {
    tokenholderFrom = newTokenHolder(event.params.from.toHex(), event.params.from.toHex());
  }
  tokenholderFrom.balance = event.params.balance
  tokenholderFrom.save()

// Define Token folder to where the amount is transferred
  let tokenholderTo = TokenHolder.load(event.params.to.toHex())
  if (tokenholderTo == null) {
    tokenholderTo = newTokenHolder(event.params.to.toHex(), event.params.to.toHex());
  }
  tokenholderTo.balance = event.params.balance
  tokenholderTo.save()

  // Transfer counter total and historical
  let transferCounter = TransferCounter.load('singleton')
  if (transferCounter == null) {
    transferCounter = new TransferCounter('singleton')
    transferCounter.count = BigInt.fromI32(0)
    transferCounter.totalTransferred = BigInt.fromI32(0)
  }
  
  transferCounter.count = transferCounter.count.plus(BigInt.fromI32(1))
  transferCounter.totalTransferred = transferCounter.totalTransferred.plus(event.params.totalTransferred)
  transferCounter.save()
}

function newTokenHolder(id: string, address: String): TokenHolder {
  let tokenholder = new TokenHolder(id);
  tokenholder.address = address
  tokenholder.balance = BigInt.fromI32(0)
  return tokenholder
}
