import { TransactionModel } from "./transaction-model"

export interface WalletModel {
  id: string
  name: string
  total: number
  currency: string
  transactions?: TransactionModel[]
}

export const fromBody: (body: any) => WalletModel =
  (body: any) => {
    return {
      id: body._id,
      name: body.name,
      total: body.total,
      currency: body.currency
    }
  }
