export interface TransactionModel {
  id: string
  title: string
  amount: number
  date: Date
}

export const fromBody: (body: any) => TransactionModel =
  (body: any) => {
    return {
      id: body._id,
      title: body.title,
      amount: body.amount,
      date: new Date(body.date)
    }
  }
