import { TransactionModel } from "../model/transaction-model";
import { WalletModel } from "../model/wallet-model";

type CbOnError = () => void
type CbWallets = (wallets: WalletModel[]) => void
type CbTransactions = (trans: TransactionModel[]) => void

export {
  CbOnError,
  CbWallets,
  CbTransactions,
}
