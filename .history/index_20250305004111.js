// 1. Function that receives a function and calls it
function receivesAFunction(callback) {
    callback();  // Call the callback function passed as an argument
  }
  
  // 2. Function that returns a named function
  function returnsANamedFunction() {
    function namedFunction() {
      return "I am a named function!";
    }
    return namedFunction;  // Return the named function
  }
  
  // 3. Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
      return "I am an anonymous function!";
    };
  }
 