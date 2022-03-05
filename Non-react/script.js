let exams ='';
let patients = '';
let displayedExams = [];
let examTable = document.querySelector(".table");


// Fetching Static Json Data

fetch('./exams.json')
    .then(response => response.json())
    .then( data => examArray(data) )

// fetch('./Patient Data.json')
//     .then(response => response.json())
//     .then( data => patientArray(data) )

function examArray(data) {
    exams = data
    displayExams(exams)
}

function displayExams(exams) {

    let examHTML = '';
    exams.forEach((exam, index) => {
        let patientId = exam.patient_Id;
        // let imgStudyDays = exam.Diag_to_img_study_days;
        // let imgStudyHrs = exam.Diagnosis_to_imaging_time_hrs;
        // let imgDesc = exam.Image_study_description;
        let studyMod = exam.study_modality;
        let keyFind = exam.key_findings;
        let img = exam.png_filename;
        let examId = exam.exam_Id;
        examHTML += `
        <div class="exam-row" data-index="${index}">
        <div class="cell" data-title="Patient ID"><a>${patientId}</a></div>
        <div class="cell" data-title="Exam ID">${examId}</div>
        <div class="cell" data-title="Xray"><img src="https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/${img}" alt="Xray"></div>
        <div class="cell" data-title="Key FIndings">${keyFind}</div>
        <div class="cell" data-title="Study Modality">${studyMod}</div>
        <div class="cell" data-title="Age">51</div>
        <div class="cell" data-title="Gender">Male</div>
        <div class="cell" data-title="BMI">37.7</div>
        <div class="cell" data-title="Zip Code">722</div>
        </div>`
    });
    examTable.innerHTML += examHTML;
}
  



// https://data.mongodb-api.com/app/data-lmmlp/endpoint/data/beta
// https://docs.atlas.mongodb.com/api/data-api/

