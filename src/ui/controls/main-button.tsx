import { Button, ButtonProps } from 'grommet'
import { Down } from 'grommet-icons'

interface MainButtonProps extends ButtonProps {
  id?: string
  fixed?: boolean
  action: boolean
  onClick: () => void
}

const MainButton: React.FC<MainButtonProps> = ({
  id,
  label,
  primary,
  secondary,
  size = 'medium',
  fixed,
  type,
  action,
  a11yTitle,
  disabled,
  onClick,
}) => {
  return (
    <Button
      id={id}
      label={label}
      primary={primary}
      secondary={secondary}
      size={size}
      type={type}
      style={{ maxWidth: fixed ? '103px' : '', overflow: 'hidden' }}
      onClick={onClick}
      icon={action ? <Down size="10px" a11yTitle={a11yTitle} /> : undefined}
      reverse
      gap="xsmall"
      disabled={disabled}
    />
  )
}

export default MainButton
