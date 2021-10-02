const Firebase = require('firebase');
const config = require('./config');

const db = Firebase.initializeApp(config.firebaseConfig);


firebase.auth.Auth.Persistence.LOCAL;

$("#login-btn").click(function(){
    
    var email = $("#emailid").valid();
    var password = $("#password").valid();

    if(email != "" && password != "")
    {
        var result = firebase.auth().signInWithEmailAndPassword(email, password);

        result.catch(function(error)
        {
            var errorcode = error.code;
            var errorMessage = error.message;

            console.log(errorcode);
            console.log(errorMessage);
            window.alert("Message: " + errorMessage);
        })
    } 
    else
    {
        window.alert("please enter Email andd Password.");
    }
})

module.exports = db;