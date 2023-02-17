// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import SearchHome from './components/SearchHome'
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>

      <Container>
        <Routes>
          <Route path='/' element={<SearchHome />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Container>

    </BrowserRouter>
  );
}

export default App;
