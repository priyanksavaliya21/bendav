import HomePage from './pages/HomePage';
import { Routes, Route } from "react-router-dom";
import './DashboardCss/Dashboard.css';
import Dashboard from './DashboardComponent/Dashboard';
import SwapPage from '../src/DashboardPage/SwapPage';
import PoolPage from '../src/DashboardPage/PoolPage';
import VeMercuryPage from '../src/DashboardPage/VeMercuryPage';
import Sidebar from './DashboardComponent/Sidebar';
import Header from './DashboardComponent/Header';
import SettingsPage from '../src/DashboardPage/SettingsPage';
import DashboardFooter from './DashboardComponent/DashboardFooter';

function App() {
  return (
    <div className='main_wrapper'>
     <Header />
     <Sidebar/>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/swappage" element={<SwapPage />} />
        <Route path="/poolpage" element={<PoolPage />} />
        <Route path="/vemercurypage" element={<VeMercuryPage />} />
        <Route path="/settingspage" element={<SettingsPage />} />
      </Routes>
     <DashboardFooter />
    </div>
  );
}

export default App;
