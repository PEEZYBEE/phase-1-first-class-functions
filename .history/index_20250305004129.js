// 1. Function that receives a function and calls it
function receivesAFunction(callback) {
    callback();  // Call the callback function passed as an argument
  }
  
 
  function returnsANamedFunction() {
    function namedFunction() {
      return "I am a named function!";
    }
    return namedFunction; 
  }
  
 
  function returnsAnAnonymousFunction() {
    return function() {
      return "I am an anonymous function!";
    };
  }
 