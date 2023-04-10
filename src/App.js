import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/complaint" element={<ComplaintForm />} />
      </Routes>
    </div>
  )
}

export default App;
