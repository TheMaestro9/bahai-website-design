import React from 'react';
import './IconButton.css';
import SvgIcon from './SvgIcon';

export default function IconButton({
  icon,
  label,
  onClick,
  variant = 'default',
  size = 'md',
  className = '',
  title,
  disabled = false,
  ...props
}) {
  return (
    <button
      type="button"
      className={`ui-icon-btn ui-icon-btn-${variant} ui-icon-btn-${size} ${className}`.trim()}
      onClick={onClick}
      disabled={disabled}
      aria-label={label || title}
      title={title || label}
      {...props}
    >
      <SvgIcon name={icon} size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
    </button>
  );
}
