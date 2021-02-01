
/* Sending Email from Contact Section */
(function () {
    emailjs.init("user_XXXXXXXXXXX");
})();

function sendmail() {
    let fullName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userMessage = document.getElementById("message").value;

        var contactParams = {
            from_name: fullName,
            from_email: userEmail,
            message: userMessage
        };

        emailjs.send('service_XXXX', 'template_XXXXX', contactParams).then(function (res) {})
}