var express = require('express');
var router = express.Router();

const nameList = [
{ 'id': '01', 'term' : 'DevOps', 'desc' : 'DevOps is a set of methods that combines software development and operations to shorten the system’s development phase while still delivering high-quality software. It emphasizes the use of proper communication, collaboration, and automation to achieve a certain goal.', 'ref': 'Vadapalli, S. 2018, DevOps : continuous delivery, integration, and deployment with DevOps : dive into the core DevOps strategies / Sricharan Vadapalli, Packt Publishing, viewed 11 July 2022'},
{ 'id': '02', 'term' : 'Silos', 'desc' : 'Silos it is a term used in organisations wherein the teams insulates themselves from other teams and can cause lack of collaboration.', 'ref': 'Madamanchi, S., 2021, Google Cloud for DevOps Engineers / Madamanchi, Sandeep, Packt Publishing, Accessed: 21 July 2023'},
{ 'id': '03', 'term' : 'CI/CD Pipelines', 'desc' : 'CI/CD Pipelines is a series of methods that must be done in order to deliver a revised version of a program. ', 'ref': 'Madamanchi, S., 2021, Google Cloud for DevOps Engineers / Madamanchi, Sandeep, Packt Publishing, Accessed: 21 July 2023'},
{ 'id': '04', 'term' : 'Microservices', 'desc' : 'Microservices is the main example used within DevOps because they are composed of tiny, discrete software parts that can be readily combined to construct bigger, more complicated software systems. ', 'ref': 'Davis, A. (Software engineer), author. (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform : a project-based guide. [First edition]. Edited by A. Newmark. Manning Publications. Accessed: 21 July 2023'},
{ 'id': '05', 'term' : 'Inward facing ', 'desc' : 'Inward facing refers to the factors concerning the employees of a certain organisation. ', 'ref': 'Coupland, M., 2021, DevOps Adoption Strategies : Principles, Processes, Tools, and Trends / Coupland, Martyn, Packt Publishing, Accessed: 21 July 2023'},
{ 'id': '06', 'term' : 'Outward facing ', 'desc' : 'Outward facing refers to the factors concerning the customers or the end-user of a certain project.', 'ref': 'Coupland, M., 2021, DevOps Adoption Strategies : Principles, Processes, Tools, and Trends / Coupland, Martyn, Packt Publishing, Accessed: 21 July 2023'},
{ 'id': '07', 'term' : 'Data explosion ', 'desc' : 'Data explosion refers to the level of difficulty in data management due to rapid increase in the amount of data that are generated in the computing systems.', 'ref': 'Sricharan Vadapalli, (2018), DevOps: continuous delivery, integration, and deployment with DevOps: dive into the core DevOps strategies, Accessed: 21 July 2023'},
{ 'id': '08', 'term' : 'In-memory computing', 'desc' : 'In-memory computing refers to the process of relying the calculations to the main memory of the computer itself which make computations very fast. ', 'ref': 'Sricharan Vadapalli, (2018), DevOps: continuous delivery, integration, and deployment with DevOps: dive into the core DevOps strategies, Accessed: 21 July 2023'},
{ 'id': '09', 'term' : 'Docker', 'desc' : 'Docker is a more efficient and portable open source tool that is similar to Virtual Machines. It is mainly used to “pack” an application and all its dependencies.', 'ref': 'Sricharan Vadapalli, (2018), DevOps: continuous delivery, integration, and deployment with DevOps: dive into the core DevOps strategies, Accessed: 21 July 2023'},
{ 'id': '10', 'term' : 'Kubernete', 'desc' : 'Kubernetes is another open source tool used to help better organise the Docker containers', 'ref': 'Sricharan Vadapalli, (2018), DevOps: continuous delivery, integration, and deployment with DevOps: dive into the core DevOps strategies, Accessed: 21 July 2023'},
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722 DevOps Glossary - S222509548', sub: ' my website showing a collection of DevOps terms and their descriptions', names: nameList });
});

module.exports = router;
