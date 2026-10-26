import Layout from '@/components/Layout';
import '@/styles/globals.css';
import '@/styles/responsive.css';
import { asset } from '@/utils/asset';

// Image paths used from CSS. Defined here (not in globals.css) so they get the
// GitHub Pages subfolder prefix; CSS files can't add it themselves.
const cssImageVars = {
  '--symbol-url': `url('${asset('/assets/bahai-symbol.png')}')`,
  '--pattern-geo': `url('${asset('/assets/pattern-1.jpg')}')`, // Islamic geometric lattice
  '--pattern-lotus': `url('${asset('/assets/lotus-frieze.svg')}')`, // Egyptian lotus border frieze
  '--papyrus': `url('${asset('/assets/bardi-paper.webp')}')`, // Egyptian papyrus texture
  '--calendar-hero-img': `url('${asset('/assets/bahais-in-egypt/calendar-header-image-v3.jpg')}')`,
};

export const metadata = {
  title: {
    default: 'الجامعة البهائية في مصر',
    template: '%s | الجامعة البهائية في مصر',
  },
  description:
    'البوابة الرسمية للتعريف بالدين البهائي في مصر، مبادئه، تاريخه، ومساهمات الجامعة البهائية المصرية في بناء المجتمع.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" style={cssImageVars}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cairo:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
