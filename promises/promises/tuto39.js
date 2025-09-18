// In this lesson we will learn about the promises
function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = true;
      if (!error) {
        console.log("Your promise has been resolved");
        resolve();
      }
       else {
        console.log("Your promise has not been resolved");
        reject();
      }
    }, 2000);
  });
}

func1().then(function(){
    console.log("Harry: Thanks for resolving");
}).catch(greet);
function greet(){
    console.log("Hello Guys!"); 
}


































