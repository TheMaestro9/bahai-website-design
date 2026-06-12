import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import History from './pages/History';
import Calendar from './pages/Calendar';
import AbdulBahaVisits from './pages/AbdulBahaVisits';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="history" element={<History />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="abdulbaha-visits" element={<AbdulBahaVisits />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
