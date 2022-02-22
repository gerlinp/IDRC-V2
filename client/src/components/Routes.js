import React from 'react'
import { Router, Routes, Route } from "react-router-dom";
import history from '../history';
import App from '../App';
import CreateExam from './pages/CreateExam';


export default function PageRoutes() {
  return (
    <Router history={history}>
        <Routes>
            {/* <Route path="/" exact component={App}></Route> */}
            {/* <Route path="../pages/CreateExam" exact component={CreateExam}></Route> */}
        </Routes>
    </Router>
    
  )
}
