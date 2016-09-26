function basicTeenager(age) {
  // if the age is between 13-19
  if (age >= 13 && age <= 19) {
    // return "You are a teenager!"
    return "You are a teenager!"
  }
}

function teenager(age) {
  return basicTeenager(age) || "You are not a teenager"
}

function ageChecker(age) {
  var message = age < 13 ? "You are a kid" : "You are a grownup";
  return basicTeenager(age) || message;
}

function ternaryTeenager(age) {
  return basicTeenager(age) ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {
  return basicTeenager(age) ? "You are a teenager" : "You have an age";
}
