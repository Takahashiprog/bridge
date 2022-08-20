import './App.css';
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
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
