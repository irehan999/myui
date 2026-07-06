/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Route path="/" element={<Explorer />} />
        <Route path="/components/:slug" element={<ComponentDetail />} />
      </Routes>
    </Router>
  );
}
