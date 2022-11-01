let serverDataAvailable = 404;

function getDetails(){
    
    return new Promise(function(resolve, reject){
        if (serverDataAvailable === true) { resolve(); } else{ reject(); }
    });
}

getDetails().then( () => {console.log("Student Details is available");} ).catch( () => { console.log("Student Details is not available"); });
