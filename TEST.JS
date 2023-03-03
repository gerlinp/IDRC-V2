import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'patientId', headerName: 'ID' },
  { field: 'age', headerName: 'Age', width: 200 },
  { field: 'sex', headerName: 'Sex', width: 200 },
  { field: 'zipCode', headerName: 'Zip Code', width: 200 },
  { field: 'bmi', headerName: 'BMI', width: 200 },
  { field: 'examId', headerName: 'Exam ID', width: 200 },
  { field: 'keyFindings', headerName: 'Key Findings', width: 200 },
  { field: 'brixiaScores', headerName: 'Brixia Scores', width: 200 },
  { field: 'imageURL', headerName: 'Image URL', width: 200 },
];

const DataGrid = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('https://czi-covid-1-hjgxknco3a-uc.a.run.app/api/exams')
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  console.log(tableData);

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid rows={tableData} columns={columns} pageSize={12} />
    </div>
  );
};

export default DataGrid;
