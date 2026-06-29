import { Routes, Route, Navigate } from 'react-router-dom';

import PagesLayout from '@/components/layouts/pagesLayout';

import HomePage from '@/pages/Home';
import AboutPage from '@/pages/About';
import EmploymentPage from '@/pages/Employment';
import Privacy from '@/pages/docs/Privacy';
import Terms from '@/pages/docs/Terms';

export default function AppRoutes() {
  return (
    <Routes>

      {/* routes with layout wrapper */}
      <Route path="/" element={<PagesLayout />}>  
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="employment" element={<EmploymentPage />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
      </Route>

      {/* fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}