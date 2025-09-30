function outer()
{
    var arr = [];
    for (var i = 0; i < 4; i++)
    {
        // storing anonymous function
        arr[i] = function () { return i; }
    }
 
    // returning the array.
    return arr;
}
 
var get_arr = outer();
 
console.log(get_arr[0]());
console.log(get_arr[1]());
console.log(get_arr[2]());
console.log(get_arr[3]());