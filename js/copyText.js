function copyText() {
    // Select the text to be copied
    var text = document.querySelector('#text-to-copy');
    text.select();

    // Execute the copy command
    document.execCommand('copy',true, '973-980-3904' );

    // Alert the user that the text has been copied
    alert('Text copied to clipboard');
}

// Call the copyPhoneNumber() function when the button is clicked


function copyPhoneNumber(phoneNumber) {
    document.getElementById('button').onclick = function() {
        copyPhoneNumber('973-980-3904');
    }

    navigator.clipboard.writeText(phoneNumber).then(function() {
        console.log('Copied phone number to clipboard');
    }, function(err) {
        console.error('Failed to copy phone number: ', err);
    });
}