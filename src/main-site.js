// <!--Building out the main website's html and styling. There will be separate boilerplates for the inclusion of the different employee types.-->
const generateTeam = teamData => {
    const generateManager = managerData => {
        console.log(managerData)
        return `
        <div class="container d-flex flex-wrap justify-content-center">
            <div class="card" style="width: 18rem;">
                <h1>${managerData.getName()}</h1>
                <h2>${managerData.getRole()}</h2>
            
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${managerData.getId()}</li>
                <li class="list-group-item">${managerData.getEmail()}</li>
                <li class="list-group-item">${managerData.getOfficeNumber()}</li>
            </ul>
            </div>
        </div>
        `
    } // remember to separate with comma!
    const generateEngineer = engineerData => {
        console.log(engineerData)
        return `
        <div class="container d-flex flex-wrap justify-content-center">
            <div class="card" style="width: 18rem;">
                <h1>${engineerData.getName()}</h1>
                <h2>${engineerData.getRole()}</h2>
            
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${engineerData.getId()}</li>
                <li class="list-group-item">${engineerData.getEmail()}</li>
                <li class="list-group-item"><a href="https://github.com/${engineerData.getGitHub()}" target="_blank" rel="noopener noreferrer">${engineerData.getGitHub()}</a></li>
            </ul>
            </div>
        </div>
        `
    }
    const generateIntern = internData => {
        console.log(internData)
        return `
        <div "container d-flex flex-wrap justify-content-center">
            <div class="card" style="width: 18rem;">
                <h1 class="card-title bg-dark text-light mb-0 text-center">${internData.getName()}</h1>
                <h2 class="card-title bg-dark text-light mb-0 text-center">${internData.getRole()}</h2>
            
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Intern ID:</li>
                <li class="list-group-item">${internData.getId()}</li>
                <li class="list-group-item">Intern email:</li>
                <li class="list-group-item"><a href="mailto:${internData.getEmail()}">${internData.getEmail()}</a></li>
                <li class="list-group-item">Intern school:</li>
                <li class="list-group-item">${internData.getSchool()}</li>
            </ul>
            </div>
        </div>
        `
    }
    // <!--CONTINUE PATTERN FOR OTHER ROLES, SAME STRUCTURE AND ERYTHING-->
    const htmlData = []
    console.log(htmlData)

    htmlData.push(teamData.filter(employee => employee.getRole() === "Manager")
    .map(managerData => generateManager(managerData)));

    htmlData.push(teamData.filter(employee => employee.getRole() === "Engineer")
    .map(engineerData => generateEngineer(engineerData))
    .join(''));

    htmlData.push(teamData.filter(employee => employee.getRole() === "Intern")
    .map(internData => generateIntern(internData))
    .join(''));
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
    <meta name="viewport" content="width=device-width, initial-scale=1.0 shrink-to-fit=no" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Your New Team!</title>
</head>
<body>
    <div>
        <nav class="navbar navbar-dark bg-dark">
            <h1 class="navbar-brand mb-0 h1 text-center">My New Team</h1>
        </nav>
        <div>
            <div class="container-fluid">
                ${generateTeam(teamData)}
            </div>
        </div>
    </div>
</body>

</html>
    `
}


