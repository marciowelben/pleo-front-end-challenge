import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface IStyleProps {
  size?: number
  color?: string
  bgColor?: string
  disabled?: boolean
}

export interface IProps extends IStyleProps {
  icon: IconProp
  onClick: () => void
  label?: string
}
