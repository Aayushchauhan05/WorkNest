## http://localhost:5001/api/Listproject


Front-End data

{
  "projectName": "Website Redesign",
  "Description": "Redesigned the company's e-commerce website to improve user experience and sales.",
  "verified": true,
  "isVerified": true,
  "githubLink": "https://github.com/user/website-redesign",
  "Start": "2023-01-15T00:00:00Z",
  "End": "2023-03-30T00:00:00Z",
  "Refer": "John Doe, CTO at Company X",
  "TechUsed": ["React", "Node.js", "Express", "MongoDB"],
  "Role": "Frontend Developer",
  "projectType": "Full-time"
}

Back_End data

{
  "New_project": {
    "projectName": "Website Redesign",
    "Description": "Redesigned the company's e-commerce website to improve user experience and sales.",
    "verified": true,
    "isVerified": true,
    "githubLink": "https://github.com/user/website-redesign",
    "Start": "2023-01-15T00:00:00.000Z",
    "End": "2023-03-30T00:00:00.000Z",
    "Refer": "John Doe, CTO at Company X",
    "TechUsed": [
      "React",
      "Node.js",
      "Express",
      "MongoDB"
    ],
    "Role": "Frontend Developer",
    "projectType": "Full-time",
    "_id": "665ad8e7ffd056f865368a65",
    "createdAt": "2024-06-01T08:16:39.898Z",
    "updatedAt": "2024-06-01T08:16:39.898Z",
    "__v": 0
  }
}

## http://localhost:5001/api/Companyreg

Status: 200 OK
Size: 37 Bytes
Time: 4.16 s

Front-End data

{
  "firstName": "John",
  "lastName": "Doe",
  "companyName": "Tech Innovators Ltd.",
  "companySize": "51-200",
  "password": "securepassword123",
  "Email": "john.doe@techinnovators.com",
  "phone": "+1234567890",
  "Dob": "1980-05-15",
  "Position": "CEO",
  "Refer": "LinkedIn",
  "verified": "Pending",
  "isVerified": false,
  "Linkdin": "https://www.linkedin.com/in/johndoe",
  "personalWebsite": "https://www.johndoe.com",
  "isBusiness": true,
  "connects": 10,
  "otp": "123456",
  "ProjectList": ["60d5ec49f10a9c5a5b1e9e1b", "60d5ec49f10a9c5a5b1e9e1c"],
  "Appliedcandidates": ["60d5ec49f10a9c5a5b1e9e1d", "60d5ec49f10a9c5a5b1e9e1e"]
}

Back-End data

 Successfull


## http://localhost:5001/api/Applyforwork
 working and showing company doesn't exist

 Front-End data

 {
    "Name": "Jane Smith",
    "Email": "jane.smith@example.com",
    "phoneNumber": "+1234567890",
    "address": "123 Main St, Anytown, USA",
    "desiredSalary": "70000",
    "experience": {
        "education": [
            {
                "degree": "Bachelor of Science in Computer Science",
                "institution": "University of Example",
                "yearOfGraduation": "2015"
            }
        ],
        "Workhistory": [
            {
                "company": "Tech Innovators Inc.",
                "position": "Software Engineer",
                "duration": "2016-2020"
            },
            {
                "company": "NextGen Solutions",
                "position": "Senior Software Engineer",
                "duration": "2020-2024"
            }
        ]
    },
    "role": "Senior Developer",
    "status": "Pending",
    "projectId": "60d5ec49f10a9c5a5b1e9e1b"
}

Back-End data

{
  "message": "Company does not exist"
}

## POST http://localhost:5001/api/skills/createSkill

Front-End Data
{
    "skills": "java script"
}

Back-End Data
{
  "skills": "java script",
  "_id": "665afbf6f1f396159fd21d9f",
  "__v": 0
}

## GET http://localhost:5001/api/skills/getSkills


Back-End Data
[
  {
    "_id": "665aaeae27e19755474a52a3",
    "__v": 0
  },
  {
    "_id": "665af6a1fcc40cc376e49c50",
    "skills": "JavaScript",
    "__v": 0
  },
  {
    "_id": "665af725fcc40cc376e49c52",
    "skills": "c++",
    "__v": 0
  },
  {
    "_id": "665af738fcc40cc376e49c54",
    "skills": "c",
    "__v": 0
  },
  {
    "_id": "665af753fcc40cc376e49c56",
    "skills": "java",
    "__v": 0
  },
  {
    "_id": "665af7913223037f15817c07",
    "skills": "java",
    "__v": 0
  },
  {
    "_id": "665af7ad3223037f15817c09",
    "skills": "pyth",
    "__v": 0
  },
  {
    "_id": "665af80c3223037f15817c0b",
    "skills": "React",
    "__v": 0
  },
  {
    "_id": "665af8153223037f15817c0d",
    "skills": "Next js",
    "__v": 0
  },
  {
    "_id": "665af81f3223037f15817c0f",
    "skills": "Node js",
    "__v": 0
  },
  {
    "_id": "665af84d3223037f15817c11",
    "skills": "Mongoondb",
    "__v": 0
  },
  {
    "_id": "665af85e3223037f15817c13",
    "skills": "js",
    "__v": 0
  },
  {
    "_id": "665afbf6f1f396159fd21d9f",
    "skills": "java script",
    "__v": 0
  }
]

## GET http://localhost:5001/api/skills/getSkillById/665af725fcc40cc376e49c52

Back-End DAtA

{
  "_id": "665af725fcc40cc376e49c52",
  "skills": "c++",
  "__v": 0
}

## PATCH http://localhost:5001/api/skills/updateSkillById/665af725fcc40cc376e49c52

Front-End Data
{
    "skills": "java script"
}

Back-End Data
{
  "_id": "665af725fcc40cc376e49c52",
  "skills": "java script",
  "__v": 0
}

## DELETE http://localhost:5001/api/skills/deleteSkillyById/665af725fcc40cc376e49c52

Front-End Data
{
    "skills": "java script"
}

Back_End Data
{
  "_id": "665af725fcc40cc376e49c52",
  "skills": "java script",
  "__v": 0
}




