//Declaring all global variables that needed to require files located elsewhere.
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

// Declaring all dependencies
const fs = require('fs');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist')
const distPath = path.join(DIST_DIR, 'mainSite.html')

const renderTeam = require('./src/main-site')
const teamMembers = [];
const teamIds = [];

function employeeMenu() {
    function createManager() {
        inquirer.prompt([{
            type: 'input',
            name: 'managerName',
            message: 'What is the name of your manager?'
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'What is the ID of your manager?'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the email of your manager?'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the office number of your manager?'
    }
]).then((managerAnswers) => {
    const manager = new Manager(
        managerAnswers.managerName,
        managerAnswers.managerId,
        managerAnswers.managerEmail,
        managerAnswers.officeNumber
    )
    teamMembers.push(manager)
    teamIds.push(managerAnswers.managerId)
    createTeams()
})
    }
    function createTeams() {
        inquirer.prompt([{
            type: 'list',
            name: 'employeeChoices',
            message: 'What type of team member would you like?',
            choices: [
                'engineer',
                'intern',
                'none'
            ]
        }
    ]).then((userChoices) => {
        switch (userChoices.employeeChoices) {
            case 'engineer':
                addEngineer()
                break;
            case 'intern':
                addIntern()
                break;
            default:
                buildEmployees()
                break;
        }
    })
    }
    function addEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the name of your engineer?'
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'What is the ID of your engineer?'
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is the email of your engineer?'
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'What is the GitHub username of your engineer?'
            }
        ]).then((engineerAnswers) => {
            const engineer = new Engineer(
                engineerAnswers.engineerName,
                engineerAnswers.engineerId,
                engineerAnswers.engineerEmail,
                engineerAnswers.engineerGithub
            )
            teamMembers.push(engineer)
            teamIds.push(engineerAnswers.engineerId)
            createTeams()
        })
    }
    function addIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'What is the name of your intern?'
            },
            {
                type: 'input',
                name: 'internId',
                message: 'What is the ID of your intern?'
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'What is the email of your intern?'
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'Where did your intern go to school?'
            }
        ]).then((internAnswers) => {
            const intern = new Intern(
                internAnswers.internName,
                internAnswers.internId,
                internAnswers.internEmail,
                internAnswers.internSchool
            )
            teamMembers.push(intern)
            teamIds.push(internAnswers.internId)
            createTeams()
        })
    }

    function buildEmployees() {
        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR)
        }
        fs.writeFileSync(distPath, renderTeam(teamMembers), 'utf-8')
    }
    createManager()
}

employeeMenu();