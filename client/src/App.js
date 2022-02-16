import React, {Component} from "react";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./pages/dashboard/Dashboard.page";
import { ExamList } from "./pages/exam-list/ExamList.page"

class App extends Component  {

  render() {
  return (
    <div>
 
      <DefaultLayout>
        <ExamList/>
      </DefaultLayout>

    </div>
  );
  }
}

export default App;



 