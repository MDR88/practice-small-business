// Practice: Small Business
// A small business wants to keep track of its employees and the computers that they use.
//Each employee is assigned to a department, and they each get assigned a computer when they join the company.






// Build arrays of objects that represent Employees, Departments, and Computers.

// Assign every resource a unique id property.

// Assign each employee to a department using a foreign key.

// Assign each employee to a department using a foreign key.

// Assign each employee a computer using a foreign key.

// Create a loop to write name, ID, computer and department.

const employees = [{
            "employeeId": 1,
            "name": "Fred Rodgers",
            "deptName": "IT",
            "computerId": 10
        },
        {
            "employeeId": 2,
            "name": "Barny Willaims",
            "departmentId:": 3,
            "computerId": 11

        }, {
            "employeeId": 4,
            "name": "Mary Myers",
            "departmentId": 2,
            "computerId": 11

        },
        {
            "employeeId": 5,
            "name": "Tammy Jackson",
            "departmentId": 4,
            "computerId": 10

        },
        {
            "employeeId": 6,
            "name": "Steve Roberts",
            "departmentId": 2,
            "computerId": 11

        },
        {
            "employeeId": 7,
            "name": "Lucy Robbins",
            "departmentId": 2,
            "computerId": 10
        },
        {
            "employeeId": 8,
            "name": "Stella McNally",
            "departmentId": 2,
            "computerId": 10
        },
        {
            "employeeId": 9,
            "name": "Jack Palance",
            "departmentId:": 3,
            "computerId": 11
        }

    ],

    const department = [{
                "departmentId": 1,
                "deptName": "IT"
            },
            {
                "departmentId": 2,
                "deptName": "Marketing"
            }, {
                "departmentId:": 3,
                "deptName": "HR"
            },
            {
                "departmentId": 4,
                "deptName": "Engineering"

            }
        ],

        const computers = [{
                "computerId": 10,
                "computerType": "Mac"
            },
            {
                "computerId": 11,
                "computerType": "PC"
            }

        ]


// Once your data is normalized, use your DOM skills to display a card for each employee.It should display the employee name, the name of their department, and which computer they are using