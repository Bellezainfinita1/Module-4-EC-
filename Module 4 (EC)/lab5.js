let repeatEntry = true;
do {
  let userEntry = prompt("Do you want to repeat your entry? (y/n)");
  if (userEntry === "y" || userEntry === "n") {
    repeatEntry = false; // Exit the loop since valid entry received
    alert("User entered: " + userEntry);
  } else {
    alert("Invalid entry. Please enter 'y' or 'n'");
  }
} while (repeatEntry);