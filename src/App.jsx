import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import History from './pages/History';
import Calendar from './pages/Calendar';
import AbdulBahaVisits from './pages/AbdulBahaVisits';
import Beliefs from './pages/Beliefs';
import Covenant from './pages/Covenant';
import About from './pages/About';
import Figures from './pages/Figures';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="figures" element={<Figures />} />
          <Route path="history" element={<History />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="abdulbaha-visits" element={<AbdulBahaVisits />} />
          <Route path="beliefs" element={<Beliefs />} />
          <Route path="beliefs/covenant" element={<Covenant />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
