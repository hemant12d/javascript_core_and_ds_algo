console.log("In this lesson we will learn about the Ajax");

let fetch = document.getElementById('fetch');
fetch.addEventListener("click", buttonClickHandler1);

function buttonClickHandler1() {
  const xhr = new XMLHttpRequest();
  // Open the Object


  // Get request
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

  // What to do on progress(Optional)
  xhr.onprogress = function(){
      console.log("xhr request is on the progress");
  }

  xhr.onreadystatechange = function(){
      console.log("readyStage is " + this.readyState);
  }

  // What to do when response is ready
  xhr.onload = function(){
      if(this.status === 200) {
          console.log("Server Data");
          console.log(this.responseText);
      }
      else
      {
           console.log("Some error found\n");
      }
  }

//   Send the request to the file to get the content
  xhr.send();

  }

//   let fetch = document.getElementById("fetch");
//   fetch.addEventListener("click", buttonClickHandler);
//   function buttonClickHandler() {
//     // Post request
//     let xhr1 = new XMLHttpRequest();
//     xhr1.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
//     xhr1.getResponseHeader("Content-type", "application/json");
//     xhr1.onprogress = function () {
//       console.log("Your request is on progress");
//     };

//     xhr1.onload = function () {
//       if (this.status === 200) {
//         console.log("Yes the content has loded");
//         console.log(xhr1.responseText);
//         let con = document.getElementById("con");
//         con.innerHTML += xhr1.responseText;
//       } else {
//         console.log("Some error occured");
//       }
//     };
// let params = '{"name":"tesdft","salary":"1523","age":"23"}';
//     xhr1.send(params);
//   }

