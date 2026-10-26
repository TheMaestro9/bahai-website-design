import Header from './Header';
import Footer from './Footer';
import './Layout.css';

export default function Layout({ children }) {
  return (
    <div dir="rtl">
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
