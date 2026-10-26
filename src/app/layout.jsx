import Layout from '@/components/Layout';
import '@/styles/globals.css';
import '@/styles/responsive.css';

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
    <html lang="ar" dir="rtl">
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
