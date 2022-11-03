export const Button = ({ onClick, leftIcon, rightIcon, disabled, children, className }) => (
  <button className={`buttonPointer ${className}`} onClick={onClick} disabled={disabled}>
   {leftIcon} {children} {rightIcon}
  </button>
);