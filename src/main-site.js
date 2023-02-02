// <!--Building out the main website's html and styling. There will be separate boilerplates for the inclusion of the different employee types.-->
const generateTeam = teamData => {
    const generateManager = managerData => {
        console.log(managerData)
        return `
        <div>
            <div>
                <h1>${managerData.getName()}</h1>
                <h2>${managerData.getRole()}</h2>
            </div>
            <ul>
                <li>${managerData.getId()}</li>
                <li>${managerData.getEmail()}</li>
                <li>${managerData.getOfficeNumber()}</li>
            </ul>
        </div>
        `
    } // remember to separate with comma!
    // <!--CONTINUE PATTERN FOR OTHER ROLES, SAME STRUCTURE AND ERYTHING-->
    const htmlData = []
    console.log(htmlData)

    htmlData.push(teamData.filter(employee => employee.getRole() === "Manager")
    .map(managerData => generateManager(managerData)));

    // htmlData.push(teamData.filter(employee => employee.getRole() === "Engineer")
    // .map(engineer => generateManager(engineer))
    // .join('')
    // );
    // <!--CONTINUE PATTERN FOR OTHER ROLES, SAME STRUCTURE AND ERYTHING-->

    return htmlData.join('')
    console.log(teamData)
}

module.exports = teamData => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

</head>
<body>
    <div>
        <div>
            <h1>My Special Team</h1>
        </div>
        <div>
            <div>
                ${generateTeam(teamData)}
            </div>
        </div>
    </div>
</body>

</html>
    `
}


