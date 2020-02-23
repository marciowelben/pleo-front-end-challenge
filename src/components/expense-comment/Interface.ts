export interface IProps {
  comment: string
  isEditing: boolean
  newComment: string
  handleChangeComment: (value: string) => void
  handleToggleEditing: () => void
  handleSaveComment: () => void
  handleClearComment: () => void
}
