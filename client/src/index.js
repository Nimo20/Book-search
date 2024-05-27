import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js'
import SearchBooks from './pages/SearchBooks.js'
import SavedBooks from './pages/SavedBooks.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<SearchBooks />} />
        <Route path="/saved" element={<SavedBooks />} />
        <Route path="*" element={<h1 className='display-2'>Wrong page!</h1>} />
      </Route>
    </Routes>
  </Router>
)