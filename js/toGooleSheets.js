const GoogleSpreadsheet = require('google-spreadsheet');

// below is the link to the google spread sheet where i got the sheet ID
// https://docs.google.com/spreadsheets/d/1xnxp7DTFTm-lCuL4xRKmNsyndO8OQA41sDpfNkju_kc/edit#gid=0
const sheetId = '1xnxp7DTFTm-lCuL4xRKmNsyndO8OQA41sDpfNkju_kc'; // Replace with the ID of your Google Sheets document

async function saveData() {
    // Get the values from the form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Authenticate with Google Drive API
    const doc = new GoogleSpreadsheet(sheetId);
    await doc.useServiceAccountAuth(require('./credentials.json'));
    await doc.loadInfo();

    // Add the data to the sheet
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow({ name, email, message });

    // Save the changes to the sheet
    await doc.save();
}

// Add an event listener to the "Save" button
const saveButton = document.getElementById('save-button');
saveButton.addEventListener('click', saveData);