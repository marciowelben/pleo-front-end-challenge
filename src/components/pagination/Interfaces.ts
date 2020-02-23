export interface IProps {
  page: number
  limit: number
  total: number
  onNext: () => void
  onPrevious: () => void
  onChangeLimit: (value: string) => void
}
