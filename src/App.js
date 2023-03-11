import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import SinglePost from './pages/singlePost';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts/:postId' element={<SinglePost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
