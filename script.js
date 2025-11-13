const makeChange = (c) => {
  // Convert input to number (since prompt returns a string)
  c = Number(c);

  // Calculate number of quarters
  const q = Math.floor(c / 25);
  c = c % 25;

  // Calculate number of dimes
  const d = Math.floor(c / 10);
  c = c % 10;

  // Calculate number of nickels
  const n = Math.floor(c / 5);
  c = c % 5;

  // Remaining are pennies
  const p = c;

  // Return the result object
  return { q, d, n, p };
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
