var totalMarks = 700;

var students = [
  {name:"Ali", fatherName:"Ahmed", rollNumber:"101", schoolName:"ABC School", biology:80, islamiat:79, urdu:70, math:97, english:85, chemistry:88, physics:73},
  {name:"Huzaifa", fatherName:"Bilal", rollNumber:"102", schoolName:"XYZ School", biology:30, islamiat:40, urdu:35, math:50, english:45, chemistry:40, physics:30},
  {name:"Asim", fatherName:"Khalid", rollNumber:"103", schoolName:"DEF School", biology:50, islamiat:60, urdu:55, math:65, english:60, chemistry:50, physics:55},
  {name:"Ebad", fatherName:"Faisal", rollNumber:"104", schoolName:"GHI School", biology:92, islamiat:83, urdu:84, math:98, english:89, chemistry:82, physics:92},
  {name:"Zain", fatherName:"Nadeem", rollNumber:"105", schoolName:"JKL School", biology:40, islamiat:35, urdu:45, math:50, english:40, chemistry:30, physics:35},
  {name:"Ashhal", fatherName:"Omar", rollNumber:"106", schoolName:"MNO School", biology:70, islamiat:75, urdu:65, math:80, english:70, chemistry:75, physics:70},
  {name:"wasay", fatherName:"Yasir", rollNumber:"107", schoolName:"PQR School", biology:55, islamiat:60, urdu:50, math:65, english:55, chemistry:60, physics:50},
  {name:"Faizan", fatherName:"Javaid", rollNumber:"108", schoolName:"STU School", biology:95, islamiat:90, urdu:85, math:100, english:95, chemistry:90, physics:95},
  {name:"Rehan", fatherName:"Irfan", rollNumber:"109", schoolName:"VWX School", biology:45, islamiat:50, urdu:40, math:55, english:50, chemistry:45, physics:40},
  {name:"Adeel", fatherName:"Usman", rollNumber:"110", schoolName:"YZA School", biology:65, islamiat:70, urdu:60, math:75, english:65, chemistry:70, physics:60},
];

function calculateMarks(student){
  var total = student.biology + student.islamiat + student.urdu + student.math + student.english + student.chemistry + student.physics;
  var percentage = (total/totalMarks)*100;
  return {total:total, percentage:percentage};
}

function showMarksheet(){
  var name = document.getElementById("name").value;
  var fatherName = document.getElementById("fatherName").value;
  var rollNumber = document.getElementById("rollNumber").value;
  var schoolName = document.getElementById("schoolName").value;

  var output = document.getElementById("output");
  output.innerHTML = "";

  var found = false;

  for(var i=0; i<students.length; i++){
    var s = students[i];
    if(s.name === name && s.fatherName === fatherName && s.rollNumber === rollNumber && s.schoolName === schoolName){
      found = true;
      var result = calculateMarks(s);
      var status = result.percentage>=40 ? "<span class='pass'>PASSED</span>" : "<span class='fail'>FAILED</span>";

      output.innerHTML += "<div class='marksheet'>" +
        "<h3>Marksheet of "+s.name+"</h3>" +
        "<p><b>Father Name:</b> "+s.fatherName+"</p>" +
        "<p><b>School Name:</b> "+s.schoolName+"</p>" +
        "<p><b>Roll No:</b> "+s.rollNumber+"</p><hr>" +
        "<p>Biology: "+s.biology+"</p>" +
        "<p>Islamiat: "+s.islamiat+"</p>" +
        "<p>Urdu: "+s.urdu+"</p>" +
        "<p>Math: "+s.math+"</p>" +
        "<p>English: "+s.english+"</p>" +
        "<p>Chemistry: "+s.chemistry+"</p>" +
        "<p>Physics: "+s.physics+"</p><hr>" +
        "<p><b>Total Marks:</b> "+result.total+" / "+totalMarks+"</p>" +
        "<p><b>Percentage:</b> "+result.percentage.toFixed(2)+"%</p>" +
        "<p>"+status+"</p></div>";
      break;
    }
  }

  if(!found){
    output.innerHTML = "<p class='not-found'>No student found with entered details!</p>";
  }

  document.getElementById("name").value="";
  document.getElementById("fatherName").value="";
  document.getElementById("rollNumber").value="";
  document.getElementById("schoolName").value="";
}
