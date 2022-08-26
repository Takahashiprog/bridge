import './App.css';
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Register from './pages/Register';
import ErrorFallback from './pages/ErrorBoundary';
import AppContextProvider from './contexts/AppContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route component={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const AppContainer = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => { window.location.reload() }}>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ErrorBoundary>
  )
}

export default AppContainer;
