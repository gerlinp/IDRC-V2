import React from 'react'
import { Router, Routes, Route } from "react-router-dom";
import history from '../history';
import App from '../App';
import CreateExam from '../pages/create-exam/CreateExam';


export default function PageRoutes() {
  return (
    <Router history={history}>

        <Switch>
            <Route path="/" exact component={App}></Route>
            <Route path="../pages/create-exam/CreateExam" exact component={CreateExam}></Route>
        </Switch>
    </Router>
    
  )
}
