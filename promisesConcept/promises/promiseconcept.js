// In this lesson we will learn about the promises with arrow function :)
console.log("Is this file is linked with ajax.html");
promise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = true;
      if (!error) {
        console.log("Promise has resolved");
        resolve();
      } else {
        console.log("Promise has rejected");
        reject("Not! Resolve");
      }
    }, 2000);
  });
};
promise().then(()=> console.log("Thanks! for resoving")).catch( (error) =>console.log("Thanks! for reject \n" + error))