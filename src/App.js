import React from 'react';
import './style.css';
import {Login} from './components/Login';
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { Home } from '@mui/icons-material';
import Register from './components/Register';


const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route
        path="*"
        element={<ProtectedRoutes><Home /></ProtectedRoutes>}
      />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
  )
}

// export default function App() {
//   return (
//     <div>
//     <Router>
//     <Routes>
//       <Route
//         path="/"
//         element={<ProtectedRoutes><Home /></ProtectedRoutes>}
//       />
//       <Route path="/register" element={<Register />} />
//       <Route path="/login" element={<Login />} />
//     </Routes>
//   </Router>
//   </div>
//   );
// }

export function ProtectedRoutes(props) {
  if (localStorage.getItem("user")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default App;


