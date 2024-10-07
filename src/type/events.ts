export interface EventI {
    id: number;
    summary: string;
    desc: string;
    start: string;
    end: string;
    attendees: string[] | null;
    status: string | null;
    comment: string | null;
    score: Score;
    link: string;
    user_det: UserDetail;
    job_id: JobDetail;
  }
  
  interface Score {
    P: number;
  }
  
  interface UserDetail {
    id: number;
    question_score: number | null;
    status: string | null;
    candidate: Candidate;
    handled_by: User;
    job_id: JobDetail;
  }
  
  interface Candidate {
    id: number;
    candidate_firstName: string;
    candidate_lastName: string;
    candidateGender: string;
    candidateComment: string;
    candidate_email: string;
    candidate_dob: string | null;
    candidate_phoneNumber: string | null;
    candidateAppliedDate: string | null;
    candidate_isActive: boolean;
    candidate_keySkill_Experience: string | null;
    candidate_yoe: number | null;
    candidateOtherSkills: string | null;
    candidateQualification: string | null;
    candidateWorkMode: string | null;
    candidate_noticePeriod: string | null;
    candidate_location: string | null;
    candidateDistance: string | null;
    candidateTotalExperience: number | null;
    candidate_onNotice: boolean | null;
    candidate_currentSalary: number;
    candidate_expectedSalary: number;
    candidate_resume: string | null;
    candidate_IsWillingToMove: boolean;
    candidate_resume_modification: string | null;
    candidateProfileImage: string;
  }
  
  interface User {
    id: number;
    password: string;
    last_login: string | null;
    userEmail: string;
    username: string;
    firstName: string;
    lastName: string;
    userRole: string;
    userPhoneNumber: string;
    userActiveDate: string;
    userinActiveDate: string | null;
    userModifiedDate: string;
    userdateofbirth: string | null;
    userbloodgroup: string | null;
    userdescription: string | null;
    usercity: string | null;
    userstate: string | null;
    userzipcode: string | null;
    usercountry: string | null;
    userProfileImage: string;
    is_staff: boolean;
    is_active: boolean;
    is_superuser: boolean;
    groups: number[];
    user_permissions: number[];
  }
  
  interface JobDetail {
    id: number;
    jobRequest_Title: string;
    jobRequest_Role: string;
    jobRequest_KeySkills: string;
    jobRequest_Description: string;
    jobRequest_Expected_YOE: number | null;
    jobRequest_TotalVacancy: number;
    jobRequest_FilledVacancy: number;
    jobRequest_isActive: boolean;
    jobRequest_isClosed: boolean;
    jobRequest_has_Started: boolean;
    jobRequest_isPriority: boolean;
    jobRequest_PriorityValue: number;
    jobRequest_MoveToAssets: boolean;
    jobRequest_createdOn: string;
    jobRequest_Icon: string;
    jobRequest_createdBy: string | null;
  }
  