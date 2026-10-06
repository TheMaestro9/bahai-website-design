import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home/Home';
import History from './pages/history/History';
import AbdulBahaVisits from './pages/history/AbdulBahaVisits';
import Calendar from './pages/calendar/Calendar';
import Beliefs from './pages/beliefs/Beliefs';
import Covenant from './pages/beliefs/Covenant';
import About from './pages/about/About';
import Figures from './pages/about/Figures';
import Contributions from './pages/contributions/Contributions';
import Questions from './pages/questions/Questions';
import QuestionDetail from './pages/questions/QuestionDetail';

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
