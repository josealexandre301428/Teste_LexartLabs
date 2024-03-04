import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './Pages/notFound/notFound';
import LoginForm from './Pages/login/LoginForm';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
