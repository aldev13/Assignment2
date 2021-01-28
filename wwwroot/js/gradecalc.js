//Program calculates the percentage entered in by the user
//Which then gives an alert to the total percentage and letter grade earned


$("#submitButton").click( function () {

    //Create Variables
    var assign, project, quiz, exam, intex, total, grade;

    //Assign Variables
    assign = parseInt($("#Assign").val());
    project = parseInt($("#Project").val());
    quiz = parseInt($("#Quiz").val());
    exam = parseInt($("#Exam").val());
    intex = parseInt($("#Intex").val());

    //Calculate total percentage
    total = assign + project + quiz + exam + intex

    //Determine letter grade and alert the result
    if (total >= 101)
    {
        alert("This is not a real grade");
    }
    else if (total >= 94)
    {
        grade = "A";
        alert("Your total percentage is " + total + "%! And your letter grade is " + grade);
    }
    else if (total >= 90)
    {
        grade = "A-";
        alert("Your total percentage is " + total + "%! And your letter grade is " + grade);
    }
    else if(total >= 87)
    {
        grade = "B+";
        alert("Your total percentage is " + total + "%! And your letter grade is " + grade);
    }
    else if(total >= 84)
    {
        grade = "B";
        alert("Your total percentage is " + total + "%! And your letter grade is " + grade);
    }
    else if(total >= 94)
    {
        grade = "A";
        alert("Your total percentage is " + total + "%! And your letter grade is " + grade);
    }
    else if(total >= 80)
    {
        grade = "B-";
        alert("Your total percentage is " + total + "%! And your letter grade is " + grade);
    }
    else if(total >= 77)
    {
        grade = "C+";
        alert("Your total percentage is " + total + "%! And your letter grade is " + grade);
    }
    else if(total >= 74)
    {
        grade = "C";
        alert("Your total percentage is " + total + "%! And your letter grade is " + grade);
    }
    else if(total >= 70)
    {
        grade = "C-";
        alert("Your total percentage is " + total + "%! And your letter grade is " + grade);
    }
    else if(total >= 67)
    {
        grade = "D+"
        alert("Your total percentage is " + total + "%! And your letter grade is " + grade);
    }
    else if(total >= 64)
    {
        grade = "D";
        alert("Your total percentage is " + total + "%! And your letter grade is " + grade);
    }
    else if(total >= 60)
    {
        grade = "D-";
        alert("Your total percentage is " + total + "%! And your letter grade is " + grade);
    }
    else
    {
        grade = "E";
        alert("Your total percentage is " + total + "%! And your letter grade is " + grade + ", sorry...");
    }
});