import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from './Home/Home';
import Coilhead from './Monsters/Coilhead/Coilhead';
import Jester from './Monsters/Jester/Jester';

function App() {



  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
            
                <Home />
              </>
            }
          />

<Route
            path="/coilhead"
            element={
              <>
            
                <Coilhead />
              </>
            }
          />

<Route
            path="/jester"
            element={
              <>
            
                <Jester />
              </>
            }
          />

        </Routes>
      </Router>
    </div>
  );
}

export default App;

