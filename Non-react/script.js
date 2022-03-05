let displayedExams = [];
let examTable = document.querySelector(".table");

let patients = fetch('./Patient_Data.json')
.then(response => response.json())
.then( data => patientArray(data))

let exams = fetch('./exams.json')
.then(response => response.json())
.then( data => examArray(data))


// Fetching Static Json Data

function examArray(data) {
    exams = data
    displayExams(exams)
}

function patientArray(data) {
    patients = data
}

function examPatientMatch(exam) {
    for (let i = 0; i < patients.length; i++) {
        if ( exam === patients[i].PATIENT_ID  ) {
            return patients[i];
        } 
    }
}

function displayExams(examData) {
    let examHTML = '';

    examData.forEach((exam, index) => {

        let patientId = exam.patient_Id;
        // let imgStudyDays = exam.Diag_to_img_study_days;
        // let imgStudyHrs = exam.Diagnosis_to_imaging_time_hrs;
        // let imgDesc = exam.Image_study_description;
        let studyMod = exam.study_modality;
        let keyFind = exam.key_findings;
        let img = exam.png_filename;
        let examId = exam.exam_Id;
        let patientInfo = examPatientMatch(exam.patient_Id)

        examHTML += `
        <div class="exam-row" data-exam="${index}" data-patient="${patientInfo}">
        <div class="cell" data-title="Xray"><img src="https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/${img}" alt="Xray"></div>
        <div class="cell" data-title="Patient ID"><a>${patientId}</a></div>
        <div class="cell" data-title="Exam ID">${examId}</div>
        <div class="cell" data-title="Key FIndings">${keyFind}</div>
        <div class="cell" data-title="Study Modality">${studyMod}</div>
        <div class="cell" data-title="Age">${patientInfo.AGE}</div>
        <div class="cell" data-title="Gender">${patientInfo.SEX}</div>
        <div class="cell" data-title="BMI">${patientInfo.LATEST_BMI}</div>
        <div class="cell" data-title="Zip Code">${patientInfo.ZIP}</div>
        </div>`
    });
    examTable.innerHTML += examHTML;
}




// https://data.mongodb-api.com/app/data-lmmlp/endpoint/data/beta
// https://docs.atlas.mongodb.com/api/data-api/

