export interface IProps {
  page: number
  limit: number
  total: number
  disabled: boolean
  onNext: () => void
  onPrevious: () => void
  onChangeLimit: (value: string) => void
}
