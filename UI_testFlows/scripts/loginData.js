// Logindata.js
// Read existing credentials if the file exists
const existingCredentials = [
  {
    "name": "test_name_1693153615378",
    "email": "test-user-1693153851021@test.com",
    "password": "A@bc123.com",
    "confirmPassword": "A@bc123.com"
  },
  {
    "name": "test-user-1693153956838",
    "email": "test-user-1693153956838@test.com",
    "password": "A@bc123.com",
    "confirmPassword": "A@bc123.com"
  },
  {
    "name": "test_name_1693133258045",
    "email": "test-user-1693133258052@test.com",
    "password": "password-1693133258052",
    "confirmPassword": "A@bc123.com"
  },
  {
    "name": "test_name_1693133258045",
    "email": "test-user-1693133461541@test.com",
    "password": "password-1693133461541",
    "confirmPassword": "1693133461541"
  },
  {
    "name": "test_name_1693133258045",
    "email": "test-user-1693133756309@test.com",
    "password": "password-1693133756309",
    "confirmPassword": "password-1693133756309"
  },
];

function getRandomCredentials(credentialsList) {
  const randomIndex = Math.floor(Math.random() * credentialsList.length);
  const randomCredentials = credentialsList[randomIndex];
  const email= randomCredentials.email;
  const password= randomCredentials.password;
  return { email:email, password:password };
}

output.test_user = getRandomCredentials(existingCredentials);
