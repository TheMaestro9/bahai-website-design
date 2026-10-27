import React from 'react';
import './SocialLinks.css';
import SvgIcon from './SvgIcon';

// Default icon and Arabic label for each link type.
const LINK_TYPES = {
  website: { icon: 'globe', label: 'الموقع الرسمي' },
  instagram: { icon: 'instagram', label: 'إنستغرام' },
  facebook: { icon: 'facebook', label: 'فيسبوك' },
  youtube: { icon: 'youtube', label: 'يوتيوب' },
  x: { icon: 'x', label: 'إكس' },
};

export function SocialLink({ type = 'website', href, label, icon, className = '' }) {
  const defaults = LINK_TYPES[type] || LINK_TYPES.website;

  return (
    <a
      href={href}
      className={`ui-social-link ui-social-link-${type} ${className}`.trim()}
      target="_blank"
      rel="noopener noreferrer"
    >
      <SvgIcon name={icon || defaults.icon} size={18} className="ui-social-link-icon" />
      <span>{label || defaults.label}</span>
    </a>
  );
}

/**
 * Row of website / social media pill buttons.
 *
 * <SocialLinks
 *   ariaLabel="روابط حسين بيكار"
 *   links={[
 *     { type: 'website', href: 'https://example.com' },
 *     { type: 'instagram', href: 'https://instagram.com/...' },
 *     { type: 'facebook', href: 'https://facebook.com/...', label: 'صفحة الفيسبوك' },
 *   ]}
 * />
 */
export default function SocialLinks({ links = [], ariaLabel, className = '' }) {
  if (!links.length) return null;

  return (
    <div className={`ui-social-links ${className}`.trim()} aria-label={ariaLabel}>
      {links.map((link) => (
        <SocialLink key={link.href} {...link} />
      ))}
    </div>
  );
}
