import React from "react";
import  { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { DefaultLayout } from "./layout/DefaultLayout";
// import { Dashboard } from "./pages/dashboard/Dashboard.page";
import { ExamList } from "./pages/exam-list/ExamList.page";
import CreateExam  from "./pages/create-exam/CreateExam";
import { Exam } from "./pages/exam/Exam.page";
import { Login } from "./pages/login/Login.page";
import {AdminList} from "./pages/admin-list/Admin-list.page"

function App() {
  return (
   <Router>
    <Switch>
        <Route exact path="/"><Login/></Route>
        <DefaultLayout>
          {/* <Route path="/dashboard"><Dashboard/></Route> */}
          <Route path="/create-exam"><CreateExam/></Route>
          <Route path="/exam-list"><ExamList/></Route>
          <Route path="/admin-list"><AdminList/></Route>
          <Route path="/exam/:eId"><Exam/></Route>
        </DefaultLayout>
      </Switch>
    </Router>
  );
  }


export default App;



 