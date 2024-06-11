const acceptAndRejectApplication = (action,user,freelancer) => {
    return `<!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <title>Application Update</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              margin: 20px;
          }
          .container {
              max-width: 600px;
              margin: auto;
              padding: 20px;
              border: 1px solid #ccc;
              border-radius: 10px;
          }
          .header {
              font-size: 20px;
              font-weight: bold;
              margin-bottom: 20px;
          }
          .content {
              margin-bottom: 20px;
          }
          .footer {
              font-size: 14px;
              color: #555;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">Update on Your Application for ${freelancer.projectId} at ${user.companyName}</div>
          <div class="content">
              <p>Dear ${freelancer.firstName}</p>
              <p>I hope this message finds you well.</p>
              <p>Thank you for applying for the [Project Name] at [Company Name]. We appreciate the time and effort you put into your application.</p>
  
              ${
                !action == 'rejected'
                  ? `<div class="accepted">
                      <p>We are thrilled to inform you that your application has been accepted. After a thorough review of your skills and experience, we believe you are an excellent fit for this project.</p>
                      <p><strong>Project Details:</strong></p>
                      <ul>
                          <li><strong>Project Name:</strong>${freelancer.projectId}</li>
                          <li><strong>Start Date:</strong> ${user.Start}</li>
                          <li><strong>End Date:</strong>${user.End} </li>
                         
                      </ul>
                      <p>Please find attached the contract and project brief. We kindly ask you to review the documents and confirm your acceptance by [Confirmation Deadline]. We are excited to collaborate with you and look forward to the successful completion of the project.</p>
                      <p>If you have any questions or need further information, please do not hesitate to reach out.</p>
                    </div>`
                  : `<div class="rejected">
                      <p>After careful consideration, we regret to inform you that we have decided to move forward with another candidate for this project. This decision was not easy, as we received numerous applications from highly qualified professionals.</p>
                      <p>While your application for this particular project was not successful, we were impressed with your qualifications and would like to keep your profile in our records for future opportunities. We encourage you to apply for other projects at  ${user.companyName} that match your skills and experience. Please feel free to check our job board regularly for new openings.</p>
                      <p>Thank you once again for your interest and understanding.</p>
                    </div>`
              }
  
              <p>Wishing you all the best in your future endeavors.</p>
          </div>
          <div class="footer">
              Kind regards,<br>
             ${user.position}<br>
             ${user.companyName}<br>
          </div>
      </div>
  </body>
  </html>`;
  };
  const unsolicitedJobOffer = (business, freelancer) => {
    return `<!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <title>Job Offer</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              margin: 20px;
          }
          .container {
              max-width: 600px;
              margin: auto;
              padding: 20px;
              border: 1px solid #ccc;
              border-radius: 10px;
          }
          .header {
              font-size: 20px;
              font-weight: bold;
              margin-bottom: 20px;
          }
          .content {
              margin-bottom: 20px;
          }
          .footer {
              font-size: 14px;
              color: #555;
          }
          .button {
              display: inline-block;
              padding: 10px 20px;
              font-size: 16px;
              color: #fff;
              background-color: #28a745;
              text-decoration: none;
              border-radius: 5px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">Exciting Opportunity with ${business.companyName}</div>
          <div class="content">
              <p>Dear ${freelancer.firstName},</p>
              <p>We hope this message finds you well.</p>
              <p>We recently came across your profile and were highly impressed with your skills and experience. We believe that you would be a great fit for our team.</p>
              
              <p>We would love to discuss this opportunity with you further and see how we can work together. If you are interested, please reach out to us by replying to this email at ${business.Email}.</p>
              
              <p>If you have any questions or need further information, please do not hesitate to reach out to us.</p>
  
              <p>We look forward to your positive response and to the possibility of working together.</p>
          </div>
          <div class="footer">
              Kind regards,<br>
              ${business.companyName}<br>
              ${business.Email}
          </div>
      </div>
  </body>
  </html>`;
  };
  
  
 module.exports={acceptAndRejectApplication,unsolicitedJobOffer}
  