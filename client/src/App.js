import React, {Component} from "react";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./pages/dashboard/Dashboard.page";
import { ExamList } from "./pages/exam-list/ExamList.page";
import CreateExam  from "./pages/create-exam/CreateExam";
import { Exam } from "./pages/exam/Exam.page";

class App extends Component  {

  render() {
  return (
    <div>
      <DefaultLayout>
        <Exam/>
      </DefaultLayout>
    </div>
  );
  }
}

export default App;



 