using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment2.Models
{
    public class GradeCalcModel
    {
        [Range(0, 50, ErrorMessage = "Assignment % must be between 0 and 50")]
        public int Assign { get; set; }

        [Range(0, 10, ErrorMessage = "Project % must be between 0 and 10")]
        public int Project { get; set; }

        [Range(0, 10, ErrorMessage = "Quiz % must be between 0 and 10")]
        public int Quiz { get; set; }

        [Range(0, 20, ErrorMessage = "Exam % must be between 0 and 20")]
        public int Exam { get; set; }

        [Range(0, 10, ErrorMessage = "Intex % must be between 0 and 10")]
        public int Intex { get; set; }
    }
}
