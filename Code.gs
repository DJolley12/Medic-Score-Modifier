function replaceScoresWithNumberAndStar() {
  
  var app = SpreadsheetApp;
  var ss = app.getActiveSpreadsheet();
  var currentSheet = ss.getActiveSheet();
  
  for (i = 3; i < 47; i++) { 
      
    var rowNumberString = i.toString();
    var cellValue = currentSheet.getRange("R" + rowNumberString).getValue();
    
    if (cellValue == 4 || cellValue == 5 || cellValue.toString() === "" || cellValue.indexOf("*") === -1) {
      
    } else {
      currentSheet.getRange("R" + rowNumberString).setValue(cellValue.toString() + "*");
    }
  }
}

function executeEveryDayAtSix() {
  ScriptApp.newTrigger("replaceScoresWithNumberAndStar")
  .timeBased()
  .everyDays(1)
  .atHour(6)
  .nearMinute(15)
  .create();
}

