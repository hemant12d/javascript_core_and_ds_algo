console.log('Welcome to the World of Fetch Api');

// Fetch the Data with Get Method
const getData = () =>{
    // Url to fetch the Data
    let getUrl = 'https://api.github.com/users';
    getUrl = 'https://jsonplaceholder.typicode.com/posts';

    // response.json(); === Server Return Response in Json
    fetch(getUrl).then( response => response.json() ).
    then(data => console.log(data))
}
// getData();

// Fetch the Data with Post Method
const postData = () => {
    let postUrl = '	http://dummy.restapiexample.com/api/v1/create';
    
    // User Data
    let data = '{"name":"testdfsdfsdf123","salary":"123","age":"23"}';

    let parmas = {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: data, 
    }

    fetch(postUrl, parmas).then( response => response.json() ).
    then( data => console.log(data) )

}
postData();