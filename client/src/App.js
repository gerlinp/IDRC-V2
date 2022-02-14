import React, {Component} from "react";

import Exam from "./components/Exam"
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./pages/dashboard/Dashboard.page";
class App extends Component  {

  state = {
    exams: [
      {
        patient: "COVID-19-AR-16406513",
        examId: 1,
        image: "https://4rai.com/images/easyblog_articles/155/chest-xray.jpg",
        keyFind:"The lungs are free of air space disease",
        brixia: "1,2,3,4",
        age: 44,
        sex: "m",
        bmi:"33.3",
        zip: 722
      },
      {
        patient: "COVID-19-AR-16406513",
        examId: 3,
        image: "https://4rai.com/images/easyblog_articles/155/chest-xray.jpg",
        keyFind:"Right basilar atelectasis",
        brixia: "1,2,3,4",
        age: 44,
        sex: "m",
        bmi:"33.3",
        zip: 722
      },
      {
        patient: "COVID-19-AR-16406491",
        examId: 1,
        image: "https://4rai.com/images/easyblog_articles/155/chest-xray.jpg",
        keyFind:"The lungs are free of air space disease",
        brixia: "1,2,3,4",
        age: 49,
        sex: "f",
        bmi:"43.85",
        zip: 721
      },
      {
        patient: "COVID-19-AR-16406496",
        examId: 2,
        image: "https://4rai.com/images/easyblog_articles/155/chest-xray.jpg",
        keyFind:"Lung volumes remain low but there appears to...",
        brixia: "1,2,3,4",
        age: 75,
        sex: "f",
        bmi:"23.57",
        zip: 721
      },
    ]
  };


  render() {
  return (
    <div >
      <DefaultLayout>
      <Dashboard/>

        {/* <div className="exam-results">
        {this.state.exams.map( (exam, index) =>
            <Exam 
              patient={exam.patient}
              examId={exam.examId}
              keyFind={exam.keyFind}
              key={index}
              image={exam.image}
              age={exam.age}
              zip={exam.zip}
              // key={exam.id.toString()} 
              index={index}
            />
          )}
        </div> */}
      </DefaultLayout>

    </div>
  );
  }
}

export default App;



 