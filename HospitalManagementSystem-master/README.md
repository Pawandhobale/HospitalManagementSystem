🏥 Hospital Management System

A Full Stack Hospital Management System built using Spring Boot, React.js, and MySQL.
This project helps hospitals manage patients, appointments, doctors, admissions, reviews, and authentication in an efficient way.

🚀 Features
👨‍⚕️ Doctor Module
Doctor Dashboard
View Patient Details
Manage Appointments
Check Reviews
Admit Patients
Prescription Management
🧑‍🤝‍🧑 Patient Module
Patient Registration
Login & Authentication
Book Appointments
View Appointment History
Submit Reviews
Contact Hospital
🔐 Authentication System
User Registration
Login System
Forgot Password
OTP Verification
Secure Authentication
🛠️ Tech Stack
Frontend
React.js
Material UI
JavaScript
HTML5
CSS3
Backend
Java
Spring Boot
Spring MVC
REST API
Maven
Database
MySQL
📂 Project Structure
HospitalManagementSystem/
│
├── backend/
│   ├── src/main/java
│   ├── src/main/resources
│   └── pom.xml
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/hospital-management-system.git
2️⃣ Backend Setup
Navigate to Backend Folder
cd backend
Install Dependencies
mvn clean install
Run Spring Boot Application
mvn spring-boot:run

Backend runs on:

http://localhost:8080
3️⃣ Frontend Setup
Navigate to Frontend Folder
cd frontend
Install Packages
npm install
Start React Application
npm start

Frontend runs on:

http://localhost:3000
🗄️ Database Configuration

Update application.properties

spring.datasource.url=jdbc:mysql://localhost:3306/hospitaldb
spring.datasource.username=root
spring.datasource.password=yourpassword
📌 API Modules
Patient APIs
Appointment APIs
Doctor APIs
Login APIs
Review APIs
Admit APIs