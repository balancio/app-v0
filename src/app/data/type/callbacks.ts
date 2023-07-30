import { TransactionModel } from "../model/transaction-model";
import { WalletModel } from "../model/wallet-model";

type CbEmpty = () => void
type CbWallets = (wallets: WalletModel[]) => void
type CbTransactions = (trans: TransactionModel[]) => void

export {
  CbEmpty,
  CbWallets,
  CbTransactions,
}
