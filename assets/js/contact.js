(function() {
    emailjs.init('user_p1n8LptjZCHY7pQZH2NVa');
})();


window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_99oj5hm', 'template_7xrjid8', this)
            .then(function() {
                alert('SUCCESS!');
            }, function(error) {
                alert('FAILED...', error);
            });
            event.target.reset(); 
    });
}

// const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
// const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
// const userID = process.env.REACT_APP_EMAILJS_USER_ID;

//         (function() {
//             emailjs.init(userID);
//         })();

  
//         window.onload = function() {
//             document.getElementById('contact-form').addEventListener('submit', function(event) {
//                 event.preventDefault();

//                 emailjs.sendForm(serviceID, templateID, this)
//                     .then(function() {
//                         alert('SUCCESS!');
//                     }, function(error) {
//                         alert('FAILED...', error);
//                     });
//                     event.target.reset(); 
//             });
//         }

