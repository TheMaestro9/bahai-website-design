import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';
import SvgIcon from './SvgIcon';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) {
  const classNames = `ui-btn ui-btn-${variant} ui-btn-${size} ${className}`.trim();

  const iconElement = icon ? (
    <SvgIcon
      name={icon}
      size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16}
      className={`ui-btn-icon ui-btn-icon-${iconPosition}`}
    />
  ) : null;

  const content = (
    <>
      {icon && iconPosition === 'right' && iconElement}
      <span className="ui-btn-text">{children}</span>
      {icon && iconPosition === 'left' && iconElement}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classNames} onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classNames} onClick={onClick} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}
