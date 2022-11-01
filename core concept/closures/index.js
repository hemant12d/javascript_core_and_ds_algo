console.log('Closures Concept First Overview !');

function x(){

    for(var i=1; i<=5; i++){

        function close(j){
            setTimeout(function(){
                console.log(j);
            }, (j * 1000));
        }
        close(i);

    }

    console.log("Nameste Javascript");


}

x();

