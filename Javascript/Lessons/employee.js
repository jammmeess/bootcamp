function runActivity() {
  let employees = [
    {
      first_name: "Kristoffer",
      last_name: "Bomediano",
      position: "Corporate Slave",
      department: "Dispensable",
    },
    {
      first_name: "Manny",
      last_name: "Pacquiao",
      position: ["Legal Officer 2", "Consultant", "Case Manager"],
      department: "Public Relations",
    },
    {
      first_name: "Jinky",
      last_name: "Pacquiao",
      position: "Human Resources Lead",
      department: "Human Resources",
    },
  ];
  //   console.log(employees[2].department);
  for (let i = 0; i < employees[1].position.length; i++) {
    console.log(employees[1].position[i]);
  }
  //   console.log(employees[1].position[1]);

  employees.push({
    first_name: "Lebron",
    last_name: "Labrador",
    position: "Plumbing Officer",
    department: "Utilities",
  });

  employees[3].position = "Trash Manager";

  for (let i = 0; i < employees.length; i++) {
    console.log(
      employees[i].first_name +
        " | " +
        employees[i].last_name +
        " | " +
        employees[i].position +
        " | " +
        employees[i].department
    );
  }
}
