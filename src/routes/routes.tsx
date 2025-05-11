// src/routes/router.tsx
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Dashboard from '../pages/Dashboard';
import Patients from '../pages/Patients';
import PatientDetails from '../components/PatientDetails';
import ErrorPage from '../components/ErrorPage';
import NotFound from '../components/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'patients', element: <Patients /> },
      { path: 'patients/:id', element: <PatientDetails /> },
      { path: '*', element: <NotFound /> }, 
    ],
  },
  { path: '*', element: <ErrorPage /> }, 
]);
