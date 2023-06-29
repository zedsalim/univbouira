function doGet() {
  var html = HtmlService.createHtmlOutputFromFile('index');
  return html.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function uploadFiles(data) {
  var file = data.myFile;
  var folder = DriveApp.getFolderById('18BMS0awWhlPAQZUaeVrA3BmK3rmZoeTz');
  var createFile = folder.createFile(file);
  var fileUrl = createFile.getUrl();
  
  // Extract the additional form fields
  var module = data.module;
  var fileType = data.fileType;
  var grade = data.grade;
  var semestre = data.semestre;

  // Store the record in Google Sheets
  listRecord(data.username, createFile.getName(), module, fileType, grade, semestre);
  
  return fileUrl;
}

function listRecord(username, filename, module, fileType, grade, semestre) {
  var url = 'https://docs.google.com/spreadsheets/d/1dKyfhUX7eEOs7UXNSIUy30VXZSzFPGVUpFGa0UP7WzQ/edit#gid=0';
  var ss = SpreadsheetApp.openByUrl(url);
  var recordsSheet = ss.getSheetByName('Records');
  recordsSheet.appendRow([username, filename, module, fileType, grade, semestre, new Date()]);
}

function getUrl() {
  var url = ScriptApp.getService().getUrl();
  return url;
}
