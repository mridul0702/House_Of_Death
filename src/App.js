import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/complaint" element={<ComplaintForm />} />
      </Routes>
    <div className="App">
    <Navbar/>
    </div>
  );
}

export default App;
