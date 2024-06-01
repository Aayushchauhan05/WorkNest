### Project

here is dummy login for freelancer for arpit database-
"Email": "arpit@example.com",
"phone": "12345678",

## POST http://localhost:5001/api/Listproject

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
"\_id": "665ad8e7ffd056f865368a65",
"createdAt": "2024-06-01T08:16:39.898Z",
"updatedAt": "2024-06-01T08:16:39.898Z",
"\_\_v": 0
}
}

### login

## POST http://localhost:5001/api/login

Front-End Data
{
"firstName": "John",
"lastName": "Doe",
"companyName": "ABC Inc.",
"companySize": "Large",
"password": "securePassword123",
"Email": "john.doe@example.com",
"phone": "1234567890",
"Dob": "1990-01-01",
"Position": "CEO",
"Refer": "LinkedIn",
"verified": {
"status": "approved",
"by": "admin"
},
"isVerified": true,
"Linkdin": "https://www.linkedin.com/in/johndoe",
"personalWebsite": "https://www.example.com",
"isBusiness": true,
"connects": 20,
"otp": "123456",
"ProjectList": ["projectId1", "projectId2"],
"Appliedcandidates": ["candidateId1", "candidateId2"]
}

Back-End Data
{
"userexist": {
"\_id": "665abe5602ca2bd43211479d",
"firstName": "John",
"lastName": "Doe",
"companyName": "Tech Solutions",
"companySize": "200-500",
"password": "$2b$14$vjATtMOyMTjwuUR8efNYuO0/Sy4a/oXxjPw0y7kao04JinIZUwWiu",
"Email": "john.doe@example.com",
"phone": "+1234567890",
"Dob": "1990-05-15",
"Position": "Senior Developer",
"Refer": "Jane Smith",
"verified": true,
"isVerified": true,
"Linkdin": "https://www.linkedin.com/in/johndoe",
"personalWebsite": "https://www.johndoe.com",
"isBusiness": true,
"connects": 150,
"otp": "347997",
"ProjectList": [],
"Appliedcandidates": [],
"createdAt": "2024-06-01T06:23:18.750Z",
"updatedAt": "2024-06-01T06:23:18.750Z",
"\_\_v": 0
},
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyZXhpc3QiOnsiX2lkIjoiNjY1YWJlNTYwMmNhMmJkNDMyMTE0NzlkIiwiZmlyc3ROYW1lIjoiSm9obiIsImxhc3ROYW1lIjoiRG9lIiwiY29tcGFueU5hbWUiOiJUZWNoIFNvbHV0aW9ucyIsImNvbXBhbnlTaXplIjoiMjAwLTUwMCIsInBhc3N3b3JkIjoiJDJiJDE0JHZqQVR0TU95TVRqd3VVUjhlZk5ZdU8wL1N5NGEvb1h4alB3MHk3a2FvMDRKaW5JWlV3V2l1IiwiRW1haWwiOiJqb2huLmRvZUBleGFtcGxlLmNvbSIsInBob25lIjoiKzEyMzQ1Njc4OTAiLCJEb2IiOiIxOTkwLTA1LTE1IiwiUG9zaXRpb24iOiJTZW5pb3IgRGV2ZWxvcGVyIiwiUmVmZXIiOiJKYW5lIFNtaXRoIiwidmVyaWZpZWQiOnRydWUsImlzVmVyaWZpZWQiOnRydWUsIkxpbmtkaW4iOiJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vam9obmRvZSIsInBlcnNvbmFsV2Vic2l0ZSI6Imh0dHBzOi8vd3d3LmpvaG5kb2UuY29tIiwiaXNCdXNpbmVzcyI6dHJ1ZSwiY29ubmVjdHMiOjE1MCwib3RwIjoiMzQ3OTk3IiwiUHJvamVjdExpc3QiOltdLCJBcHBsaWVkY2FuZGlkYXRlcyI6W10sImNyZWF0ZWRBdCI6IjIwMjQtMDYtMDFUMDY6MjM6MTguNzUwWiIsInVwZGF0ZWRBdCI6IjIwMjQtMDYtMDFUMDY6MjM6MTguNzUwWiIsIl9fdiI6MH0sImlhdCI6MTcxNzI1NDEwNiwiZXhwIjoxNzE3NDI2OTA2fQ.mecN19TJLfyu5-1ko8FMl3-OB9YWHG1Bn_77sIhXoSo"
}

### for business

## POST http://localhost:5001/api/Companyreg

Front-End data

{
"firstName": "Alice",
"lastName": "Johnson",
"companyName": "Johnson Innovations",
"companySize": "Large",
"password": "securePassword!123",
"Email": "alice.johnson@example.com",
"phone": "555-1234-567",
"Dob": "1978-11-23",
"Position": "Founder",
"Refer": "Industry Event",
"verified": null,
"isVerified": false,
"Linkdin": "https://www.linkedin.com/in/alicejohnson",
"personalWebsite": "https://www.alicejohnson.com",
"isBusiness": true,
"connects": 20,
"otp": "789123",
"ProjectList": ["60d5ec49e1d45a37c0f9a6b7", "60d5ec49e1d45a37c0f9a6b8"],
"Appliedcandidates": ["60d5ec49e1d45a37c0f9a6c1", "60d5ec49e1d45a37c0f9a6c2"],
"createdAt": "2023-01-01T00:00:00Z",
"updatedAt": "2023-01-01T00:00:00Z"
}

Back-End data

{
"message": "Registration Succesfull"
}

## GET http://localhost:5001/api/Getprojectdata

Back-End Data
{
"data": {
"\_id": "665adda4ffd056f865368a6b",
"Email": "ayushchauhan0507@gmail.com",
"CompanyName": "Tech Solutions Inc.",
"ProjectList": [
"665adda4ffd056f865368a68",
"665ade71ffd056f865368a6d"
],
"\_\_v": 0
}
}

### Place bide

## POST http://localhost:5001/api/Applyforwork

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

### Skills

## POST http://localhost:5001/api/skills/createSkill

Front-End Data
{
"skills": "java script"
}

Back-End Data
{
"skills": "java script",
"\_id": "665afbf6f1f396159fd21d9f",
"\_\_v": 0
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
"\_id": "665af725fcc40cc376e49c52",
"skills": "c++",
"\_\_v": 0
}

## PATCH http://localhost:5001/api/skills/updateSkillById/665af725fcc40cc376e49c52

Front-End Data
{
"skills": "java script"
}

Back-End Data
{
"\_id": "665af725fcc40cc376e49c52",
"skills": "java script",
"\_\_v": 0
}

## DELETE http://localhost:5001/api/skills/deleteSkillyById/665af725fcc40cc376e49c52

Front-End Data
{
"skills": "java script"
}

Back_End Data
{
"\_id": "665af725fcc40cc376e49c52",
"skills": "java script",
"\_\_v": 0
}

### Freelancer

## GET http://localhost:5001/api/freelancerprofile

Back-End Data
{
"Data": {
"pendingProject": [],
"rejectedProject": [],
"acceptedProject": [],
"\_id": "66594751178d775e52b8186c",
"firstName": "Aayush ",
"lastName": "Chauhan",
"userName": "data.values.userName",
"password": "$2b$14$HaCZrf5sgUaE9SU1Z/pEuurQ.vLuAdB3leKL9CnypqFWi32i7nMS6",
"Email": "ayushchauhan0507@gmail.com",
"phone": "123456789",
"Dob": "6363-03-06",
"professionalInfo": [
{
"previousCompany": "hsxhywsd",
"Role": "kjmsmnms"
}
],
"Skills": [
"63363636b,smn,smsm"
],
"Education": "high-school",
"Role": "designer",
"project": [
{
"\_id": "665ad8e7ffd056f865368a65",
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
"createdAt": "2024-06-01T08:16:39.898Z",
"updatedAt": "2024-06-01T08:16:39.898Z",
"**v": 0
}
],
"Refer": "asgas",
"isVerified": false,
"githubLink": "https://chatgpt.com/c/fdab44bb-758c-4e8d-a46d-94395e690c27",
"Linkdin": "https://chatgpt.com/c/fdab44bb-758c-4e8d-a46d-94395e690c27",
"perHourPrice": 22,
"connects": 0,
"workExperience": "2",
"isfreelancer": true,
"consultant": false,
"createdAt": "2024-05-31T03:43:13.351Z",
"updatedAt": "2024-06-01T08:16:39.953Z",
"**v": 0
}
}
