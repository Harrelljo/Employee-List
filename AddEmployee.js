import React, { useState } from "react";

function AddEmployee({ addEmployee }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newEmployee = {
      EmployeeId: Date.now(),
      name,
    };

    addEmployee(newEmployee);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter employee name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default AddEmployee;
