let password;

password = prompt("Please set your password.");

do {
  confirmedPassword = prompt("Please confirm the password.");
} while (password !== confirmedPassword);
