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
import Contributions from './pages/Contributions';
import Questions from './pages/Questions';
import QuestionDetail from './pages/QuestionDetail';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contributions" element={<Contributions />} />
          <Route path="what-we-do" element={<Contributions />} />
          <Route path="figures" element={<Figures />} />
          <Route path="history" element={<History />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="abdulbaha-visits" element={<AbdulBahaVisits />} />
          <Route path="beliefs" element={<Beliefs />} />
          <Route path="beliefs/covenant" element={<Covenant />} />
          <Route path="questions" element={<Questions />} />
          <Route path="questions/:slug" element={<QuestionDetail />} />
          <Route path="articles/:slug" element={<QuestionDetail />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
