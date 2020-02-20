export enum IDirection {
  ASC,
  DESC
}

export default interface IExpensesOrder {
  value: 'value' | 'date' | 'merchant'
  direction: IDirection
}
