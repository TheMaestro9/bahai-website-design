import React from 'react';
import './Badge.css';
import SvgIcon from './SvgIcon';

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  icon,
  className = '',
  onClick,
  ...props
}) {
  const Component = onClick ? 'button' : 'span';
  return (
    <Component
      className={`ui-badge ui-badge-${variant} ui-badge-${size} ${onClick ? 'ui-badge-interactive' : ''} ${className}`.trim()}
      onClick={onClick}
      {...props}
    >
      {icon && <SvgIcon name={icon} size={size === 'sm' ? 12 : 14} className="ui-badge-icon" />}
      <span className="ui-badge-text">{children}</span>
    </Component>
  );
}
