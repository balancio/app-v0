import { TransactionModel } from "./transaction-model"

export interface WalletModel {
  id: number
  name: string
  total: number
  transactions?: TransactionModel[]
}
