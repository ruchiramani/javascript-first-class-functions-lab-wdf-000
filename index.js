
function countdown(callback) {
  window.setTimeout(callback, 2000);
};

function createMultiplier(number) {
  return function(value) {
    return number * value
  }
};

function multiplier(value, number) {
  return value * number
};

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);
var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3); 
