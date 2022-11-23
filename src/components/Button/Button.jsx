export const Button = ({ onClick, leftIcon, rightIcon, disabled, children, className, type = 'button' }) => (
  <button className={`buttonPointer ${className}`} onClick={onClick} disabled={disabled} type={type}>
   {leftIcon} {children} {rightIcon}
  </button>
);