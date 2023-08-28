function Name() {
  var date = new Date().getTime().toString();
  var name = `test_name_placeholder`.replace("placeholder", date);
  return name;
}

function email() {
  var date = new Date().getTime().toString();
  var email = `test-user-placeholder@test.com`.replace("placeholder", date);
  return email;
}

function password() {
  var date = new Date().getTime().toString();
  // var password = `placeholder`.replace("placeholder", date);
  var password = "A@bc123.com"
  return password;
}

function confirmPassword() {
  // var date = new Date().getTime().toString();
  // var password = `test-user-password-placeholder`.replace("placeholder", date);
  var confirmPassword = password();
  return confirmPassword;
}

output.credentials = {
  name: Name(),
  email: email(),
  password: password(),
  confirmPassword: confirmPassword(),
};