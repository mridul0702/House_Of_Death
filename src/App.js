import { Route, Routes } from 'react-router-dom';
import './App.css';
import ComplaintForm from './components/ComplaintForm';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/complaint" element={<ComplaintForm />} />
      </Routes>
    </div>
  );
}

export default App;
