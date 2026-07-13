import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Explorer from './pages/Explorer';
import ComponentDetail from './pages/ComponentDetail';
import Preview from './pages/Preview';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Isolated preview route with zero layout interference */}
        <Route path="/preview/:slug" element={<Preview />} />
        
        {/* Main gallery pages */}
        <Route path="/" element={<Navigate to="/components/serene" replace />} />
        <Route path="/components/:slug" element={<ComponentDetail />} />
        <Route path="/explorer" element={<Explorer />} />
      </Routes>
    </Router>
  );
}
