import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext.jsx';
import Layout from './components/Layout.jsx';
import Login from './pages/Login.jsx';
import SubmitReport from './pages/SubmitReport.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Reports from './pages/Reports.jsx';
import ReportDetails from './pages/ReportDetails.jsx';
import Admin from './pages/Admin.jsx';
import Handlers from './pages/Handlers.jsx';
import Routing from './pages/Routing.jsx';
import Analytics from './pages/Analytics.jsx';
import HandlerDashboard from './pages/HandlerDashboard.jsx';
import './styles.css';

function Protected({ children, roles }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Layout>{children}</Layout>;
}

function Home() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <Navigate
      to={
        user.role === 'admin'
          ? '/admin'
          : user.role === 'handler'
            ? '/handler'
            : '/dashboard'
      }
    />
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Home />} />

          <Route
            path="/dashboard"
            element={
              <Protected roles={['user']}>
                <Dashboard />
              </Protected>
            }
          />

          <Route
            path="/handler"
            element={
              <Protected roles={['handler']}>
                <HandlerDashboard />
              </Protected>
            }
          />

          <Route
            path="/admin"
            element={
              <Protected roles={['admin']}>
                <Admin />
              </Protected>
            }
          />

          <Route
            path="/submit"
            element={
              <Protected roles={['user', 'admin']}>
                <SubmitReport />
              </Protected>
            }
          />

          <Route
            path="/reports"
            element={
              <Protected>
                <Reports />
              </Protected>
            }
          />

          <Route
            path="/reports/:reportId"
            element={
              <Protected>
                <ReportDetails />
              </Protected>
            }
          />

          <Route
            path="/handlers"
            element={
              <Protected roles={['admin']}>
                <Handlers />
              </Protected>
            }
          />

          <Route
            path="/routing"
            element={
              <Protected roles={['admin']}>
                <Routing />
              </Protected>
            }
          />

          <Route
            path="/analytics"
            element={
              <Protected roles={['admin']}>
                <Analytics />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}