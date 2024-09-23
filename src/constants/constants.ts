const GRAMPANCHAYAT_COLLECT_TABLE: any = `at-email-service-${process.env.STAGE}`;
const SK_CREATED_AT_INDEX = "SK-CreatedAt-index";


const Organization_Sk = "Organization";
const CITIZEN = "Citizen";
const TRANSACTION = "Transaction";
const COMPLAINT = "Complaint";
const COMPLAINT_SK = "Organization"
const Employee_Sk = "Employee#";
const EMPLOYEE = "Employee";
const CITIZEN_SK = "Citizen#Organization";


const SUPER_ADMIN_ROLE = 1;
const ADMIN_ROLE = 2;
export {
   GRAMPANCHAYAT_COLLECT_TABLE,
   ADMIN_ROLE,
   Organization_Sk,
   SK_CREATED_AT_INDEX,
   Employee_Sk,
   CITIZEN,
   CITIZEN_SK,
   COMPLAINT_SK,
   COMPLAINT,
   EMPLOYEE,
   TRANSACTION,
   SUPER_ADMIN_ROLE
}