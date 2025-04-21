// Parent class - ExamResult
class ExamResult {
  // Base method to show a generic exam result notification
  showResult() {
    console.log("Your exam result is available. Please log in to the portal.");
  }
}

// Child class - School Student Result
class SchoolStudentResult extends ExamResult {
  // Method Overriding: Customized result message for school students
  showResult() {
    console.log("Dear Student, your school exam result has been declared.");
    console.log("Please visit the school portal to check your marks.");
    console.log("Best of luck for your future!");
  }
}

// Child class - College Student Result
class CollegeStudentResult extends ExamResult {
  // Method Overriding: Customized result message for college students
  showResult() {
    console.log("📢 College Exam Results Announced!");
    console.log("Your semester result is now available on the college website.");
    console.log("Please log in and download your result and necessary documents.");
  }
}

// Child class - Competitive Exam Result
class CompetitiveExamResult extends ExamResult {
  // Method Overriding: Customized result message for competitive exams like UPSC, NEET, etc.
  showResult() {
    console.log("🚨 Important Notice: The competitive exam result has been declared!");
    console.log("Please check your result on the portal using your roll number and date of birth.");
    console.log("Best wishes to all candidates!");
  }
}

// Polymorphic function: Accepts any type of ExamResult
function notifyResult(resultInstance) {
  // Runtime Polymorphism: Executes the correct version based on actual object
  resultInstance.showResult();
}

// Creating objects
let genericResult = new ExamResult();               // Default notification
let schoolStudent = new SchoolStudentResult();      // School student result
let collegeStudent = new CollegeStudentResult();    // College student result
let competitiveStudent = new CompetitiveExamResult(); // Competitive exam result

// Showing notifications
notifyResult(genericResult);        // Generic message
notifyResult(schoolStudent);        // School-specific message
notifyResult(collegeStudent);       // College-specific message
notifyResult(competitiveStudent);   // Competitive exam-specific message
