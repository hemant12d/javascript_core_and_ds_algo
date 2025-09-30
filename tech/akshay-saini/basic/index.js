function a(){
    let value = 45;
    function c(){
        function d(){
            console.log(value);
        }
        d();
    }
    c();
}

a();