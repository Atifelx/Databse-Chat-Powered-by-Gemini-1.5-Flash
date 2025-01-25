import React, { useState, useEffect } from "react";

// Import the JSON file (ensure it is in the public directory or src folder)
import studentsData from "../src/chat/students.json";

const StudentTable = () => {
  const [data, setData] = useState([]);

  // Load data into the state
  useEffect(() => {
    setData(studentsData);
  }, []);

  return (
    <div style={{ margin: "20px", overflowX: "auto" }}>
      <h1 style={{ textAlign: "center" }}>Student Information</h1>
      <table style={tableStyle}>
        <thead>
          <tr style={headerStyle}>
            <th>ID</th>
            <th>Student Name</th>
            <th>Roll No</th>
            <th>Gender</th>
            <th>City</th>
            <th>University</th>
            <th>Country</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, index) => (
            <tr key={student.id} style={index % 2 === 0 ? evenRowStyle : oddRowStyle}>
              <td>{student.id}</td>
              <td>{student.student_name}</td>
              <td>{student.roll_no}</td>
              <td>{student.gender}</td>
              <td>{student.city}</td>
              <td>{student.university}</td>
              <td>{student.country}</td>
              <td>{student.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Styles for the table
const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  textAlign: "left",
  fontFamily: "Arial, sans-serif",
};

const headerStyle = {
  backgroundColor: "#4CAF50",
  color: "white",
  padding: "10px",
};

const evenRowStyle = {
  backgroundColor: "#f2f2f2",
};

const oddRowStyle = {
  backgroundColor: "#ffffff",
};

export default StudentTable;
