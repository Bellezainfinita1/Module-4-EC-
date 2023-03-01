let again = 'y';
while (again !== 'n' && again !== 'N' && again !== 'y' && again !== 'Y') {
  again = window.prompt("Invalid entry. Repeat entries? (y or n)", "y");
}