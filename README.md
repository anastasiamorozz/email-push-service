##Project Description:
Develop an asynchronous email delivery service using NestJS and RabbitMQ that accepts email requests via API and processes them through background workers.

##Functional Requirements:

Provide a POST /email/send endpoint that accepts to, subject, text or html fields.

Validate incoming data using class-validator.

Publish valid requests to a RabbitMQ queue named email.send.

A separate worker listens to the email.send queue and sends emails via SMTP using Nodemailer.

Implement retry logic: retry up to 3 times on failure.

Log failed attempts and successful deliveries.

Use Mailtrap for testing email delivery.

(Optional) Store logs or email history in PostgreSQL.

##Expected Outcome:
A working backend-only service with a documented API endpoint, functional queue-based email processing, proper error handling, and tested email delivery through SMTP.