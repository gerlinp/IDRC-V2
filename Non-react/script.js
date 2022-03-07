let displayedExams = [];
let examTable = document.querySelector(".table");
let examNum = document.querySelector("#exam-num");
let displayModal = document.querySelector('#exam-modal');
let searchInput = document.querySelector('#search-input')



// Fetching Static Json Data & making them into variables
let patients = fetch('./Patient_Data.json')
.then(response => response.json())
.then( data => patientArray(data))

let exams = fetch('./exams.json')
.then(response => response.json())
.then( data => examArray(data))

function examArray(data) {
    exams = data
    displayExams(exams)
}

function patientArray(data) {
    patients = data
}

// function that ties Patient IDs to matching Exams
function examPatientMatch(exam) {
    for (let i = 0; i < patients.length; i++) {
        if ( exam === patients[i].PATIENT_ID  ) {
            return patients[i];
        } 
    }
}

// Displays Exams to site
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
        <div class="exam-row text-center align-middle" data-exam="${index}" data-patient="${patientInfo}">
        <div class="cell align-middle xray-img" data-title="Xray"><img src="https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/${img}" alt="Xray"></div>

        <div class="cell align-middle patId" data-title="Patient ID"><button onClick="patientSearch(${index})" type="button" class="btn btn-primary">${patientId}</button></div>

        <div class="cell align-middle" data-title="Exam ID"><button onClick="showModal(${index},'examModal')" type="button" class="btn btn-primary">${examId} Details</button></div>


        <div id="admin-btns" class="cell align-middle d-none" data-title="Admin">

            <button onClick="updateModal(${index})" type="button" class="btn bg-info">Update</button>

            <button onClick="showModal(${index},'delete')" type="button" class="btn bg-danger">Delete</button>

        </div>

        <div class="cell align-middle keyFind" data-title="Key FIndings">${keyFind}</div>
        <div class="cell align-middle" data-title="Study Modality">${studyMod}</div>
        <div class="cell align-middle" data-title="Age">${patientInfo.AGE}</div>
        <div class="cell align-middle" data-title="Gender">${patientInfo.SEX}</div>
        <div class="cell align-middle" data-title="BMI">${patientInfo.LATEST_BMI}</div>
        <div class="cell align-middle" data-title="Zip Code">${patientInfo.ZIP}</div>
        </div>`
    });
    examTable.innerHTML += examHTML;
}

// Exam search function
function runSearch() {

    let searchTotal = document.querySelector('.exam-total');
    let total = ''


    
    if (document.querySelector('#search-input')) {
        input = document.querySelector('#search-input');
        const search = searchInput.value.toLowerCase();
        const patIds = document.querySelectorAll('.patId');
        const keyFinds = document.querySelectorAll('.keyFind');

        patIds.forEach( person => {
            let patId = person.innerHTML;
            let parent = person.parentElement;
            if (patId.toLowerCase().indexOf(search.toLowerCase()) != -1) {
                parent.classList.remove('hideExam');
            } else {
                parent.classList.add('hideExam');
            }
        })

        total = document.querySelectorAll('.hideExam').length
        console.log(total)

        if (total == 232 ) {
            keyFinds.forEach( find => {
                let keyFind = find.innerHTML
                let keyParent= find.parentElement
                if (keyFind.toLowerCase().indexOf(search.toLowerCase()) != -1) {
                    keyParent.classList.remove('hideExam');
                } else {
                    keyParent.classList.add('hideExam');
                }
            })
        }

    }
    total = document.querySelectorAll('.hideExam').length

    if (total === 0 ) {
        searchTotal.innerHTML = `Total Exams:232`
    } else {
        searchTotal.innerHTML = `Total Exams:${ 232 - total}`
    }
    
}

// Search Input event Listener
searchInput.addEventListener('keyup', function(e) {
    runSearch() 
})

// Patient search function 
function patientSearch(index) {
    let patSearch = document.querySelector("#search-input")
    let patientSearch = exams[index].patient_Id
    patSearch.value = patientSearch
    runSearch() 
}

// Update Modal animations

function updateModal(index) {

    showModal(index,'update')
    
    let labels = document.querySelectorAll('.label')
    labels.forEach(label => {
        label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
    })    
}


// Modal
const showModal = (index,button) => {
    let examInfo = exams[index]
    let patientInfo = examPatientMatch(exams[index].patient_Id)
    console.log(button)

    // Exam details modal
    if ( button == 'examModal') { 
        displayModal.innerHTML = `
        <div class="modal fade" id="exam-modal"  tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${examInfo.exam_Id} / ${examInfo.patient_Id}</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="examInfo-top">
                    <div class="modal-item" data-title="Xray">
                        <img src="https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/${examInfo.png_filename}" alt="Xray">
                    </div>
                    <h4>EXAM INFO</h4>
                    <div class="modal-item" data-title="Diagnosis imaging time (days)">
                        <p>${examInfo.Diag_to_img_study_days}</p>
                    </div>
                    <div class="modal-item" data-title="Diangnosis imaging time (hours)">
                        <p>${examInfo.Diagnosis_to_imaging_time_hrs}</p>
                    </div>
                    <div class="modal-item" data-title="Image Study Description">
                        <p>${examInfo.Image_study_description}</p>
                    </div>
                    <div class="modal-item" data-title="Study Modality">
                        <p>${examInfo.study_modality}</p>
                    </div>
                    <div class="modal-item keyFind" data-title="Key FIndings">
                        <p>${examInfo.key_findings}</p>
                    </div>
                </div>
                    <div class="examInfo-bottom">
                        <h4>PATIENT INFO</h4>
                        <div class="modal-item m-3" data-title="Patient ID">
                            <h5>${patientInfo.PATIENT_ID}</h5>
                        </div>
                    <div class="examInfo-bottom-container">
                        <div class="examInfo-bottom-left me-5">
                            <div class="modal-item" data-title="Age">
                                <p>${patientInfo.AGE}</p>
                            </div>
                            <div class="modal-item" data-title="Gender">
                                <p>${patientInfo.SEX}</p>
                            </div>
                            <div class="modal-item" data-title="Latest BMI">
                                <p>${patientInfo.LATEST_BMI}</p>
                            </div>
                            <div class="modal-item" data-title="Zip">
                                <p>${patientInfo.ZIP}</p>
                            </div>
                            <div class="modal-item" data-title="Test name">
                                <p>${patientInfo.test}</p>
                            </div>
                        </div>
                        <div class="examInfo-bottom-right">                        
                            <div class="modal-item" data-title="Latest weight">
                                <p>${patientInfo.latest_weight}</p>
                            </div>
                            <div class="modal-item" data-title="Height">
                                <p>${patientInfo.height}</p>
                            </div>
                            <div class="modal-item" data-title="Diabetes Type I">
                                <p>${patientInfo.DIABETES_TYPE_I}</p>
                            </div>
                            <div class="modal-item" data-title="Diabetes Type II">
                                <p>${patientInfo.DIABETES_TYPE_II}</p>
                            </div>
                            <div class="modal-item" data-title="ICU Admit">
                            <p>${patientInfo.icu_admit}</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
        `
    } 
    // Update details modal    
    else if ( button == 'update') { 
        displayModal.innerHTML =`
        <div class="modal fade" id="exam-modal"  tabindex="-1">
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${examInfo.exam_Id} / ${examInfo.patient_Id}</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body update-info">
                <div class="update-container">
                    <h1>UPDATE</h1>
                    <form>
                        <div class="update-form-info container">
                            <h2>EXAM INFO</h2>
                            <div class="update-form-control">
                                <input type="text" value="${examInfo.exam_Id}" required>
                                <label class="label">Exam ID</label>
                            </div>
                            <div class="update-form-control">
                                <input type="text" value="${examInfo.Diag_to_img_study_days}" required>
                                <label class="label">Diagnosis imaging time (days)</label>
                            </div>
                            <div class="update-form-control">
                                <input type="text" value="${examInfo.Diagnosis_to_imaging_time_hrs}" required>
                                <label class="label">Diangnosis imaging time (hours)</label>
                            </div>
                            <div class="update-form-control">
                                <input type="text" value="${examInfo.Image_study_description}" required>
                                <label class="label">Image Study Description</label>
                            </div>
                            <div class="update-form-control">
                                <input type="text" value="${examInfo.study_modality}" required>
                                <label class="label">Study Modality</label>
                            </div>
                            <div class="update-form-control">
                                <p>Key Findings</p>
                                <textarea class="update-textarea">${examInfo.key_findings}</textarea>
                            </div>
                        </div>
                        <div class="update-form-info container">
                        <h2>Patient INFO</h2>
                            <div class="update-form-control">
                                <input type="text" value="${examInfo.patient_Id}" required>
                                <label class="label">Patient ID</label>
                            </div>
                            <div class="update-form-control">
                                <input type="text" value="${patientInfo.test}" required>
                                <label class="label">Test Name</label>
                            </div>
                            <div class="update-form-control">
                                <input type="text" value="${patientInfo.AGE}" required>
                                <label class="label">AGE</label>
                            </div>
                            <div class="update-form-control">
                                <input type="text" value="${patientInfo.SEX}" required>
                                <label class="label">Gender</label>
                            </div>
                            <div class="update-form-control">
                                <input type="text" value="${patientInfo.LATEST_BMI}" required>
                                <label class="label">Latest BMI</label>
                            </div>
                            <div class="update-form-control">
                                <input type="text" value="${patientInfo.ZIP}" required>
                                <label class="label">Zip Code</label>
                            </div>
                            <div class="update-form-control">
                                <input type="text" value="${patientInfo.latest_weight}" required>
                                <label class="label">Latest Weight</label>
                            </div>
                            <div class="update-form-control">
                                <input type="text" required value="${patientInfo.height}">
                                <label class="label">Latest Height</label>
                            </div>
                            <div class="update-form-control">
                                <input type="text" required value="${patientInfo.DIABETES_TYPE_I}">
                                <label class="label">Diabetes Type I</label>
                            </div>
                            <div class="update-form-control">
                                <input type="text" required value="${patientInfo.DIABETES_TYPE_II}">
                                <label class="label">Diabetes Type II</label>
                            </div>
                            <div class="update-form-control">
                                <input type="text" required value="${patientInfo.icu_admit}">
                                <label class="label">ICU Admit</label>
                            </div>
                            
                        </div>    
                    </form>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
        `
    } else if ( button == 'create') {
        displayModal.innerHTML =        displayModal.innerHTML =`
        <div class="modal fade" id="exam-modal"  tabindex="-1">
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">New Exam</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body update-info">
                <div class="update-container">
                    <h1>CREATE EXAM</h1>
                    <form>
                        <div class="update-form-info container">
                            <h2>EXAM INFO</h2>
                            <div class="update-form-control">
                                <input type="text" required>
                                <label class="label">Exam ID</label>
                            </div>
                            <div class="update-form-control">
                                <input type="text" required>
                                <label class="label">Diagnosis imaging time (days)</label>
                            </div>
                            <div class="update-form-control">
                                <input type="text" required>
                                <label class="label">Diangnosis imaging time (hours)</label>
                            </div>
                            <div class="update-form-control">
                                <input type="text" required>
                                <label class="label">Image Study Description</label>
                            </div>
                            <div class="update-form-control">
                                <input type="text" required>
                                <label class="label">Study Modality</label>
                            </div>
                            <div class="update-form-control">
                                <p>Key Findings</p>
                                <textarea class="update-textarea"></textarea>
                            </div>
                        </div>
                        <div class="update-form-info container">
                        <h2>Patient INFO</h2>
                            <div class="update-form-control">
                                <input type="text" required>
                                <label class="label">Patient ID</label>
                            </div>
                            <div class="update-form-control">
                                <input type="text"  required>
                                <label class="label">Test Name</label>
                            </div>
                            <div class="update-form-control">
                                <input type="text"  required>
                                <label class="label">AGE</label>
                            </div>
                            <div class="update-form-control">
                                <input type="text" required>
                                <label class="label">Gender</label>
                            </div>
                            <div class="update-form-control">
                                <input type="text"  required>
                                <label class="label">Latest BMI</label>
                            </div>
                            <div class="update-form-control">
                                <input type="text"  required>
                                <label class="label">Zip Code</label>
                            </div>
                            <div class="update-form-control">
                                <input type="text" " required>
                                <label class="label">Latest Weight</label>
                            </div>
                            <div class="update-form-control">
                                <input type="text" required >
                                <label class="label">Latest Height</label>
                            </div>
                            <div class="update-form-control">
                                <input type="text" required >
                                <label class="label">Diabetes Type I</label>
                            </div>
                            <div class="update-form-control">
                                <input type="text" required >
                                <label class="label">Diabetes Type II</label>
                            </div>
                            <div class="update-form-control">
                                <input type="text" required >
                                <label class="label">ICU Admit</label>
                            </div>
                            
                        </div>    
                    </form>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
        `
    }

    // document.body.append(examModal);
    let modal = new bootstrap.Modal(displayModal.querySelector('.modal'));
    modal.show();
}
