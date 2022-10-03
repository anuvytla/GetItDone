import './App.css';
import {Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Sidebar from './Components/Sidebar';
import Donation from './Components/Donation';
import Notifications from './Components/Notifications';


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route index element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/donation' element={<Donation />} />
            <Route path='/notifications' element={<Notifications />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
