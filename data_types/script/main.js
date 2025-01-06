const input = document.getElementById('stringInput');
const button = document.getElementById('checkButton');

const stringRegex = /^(["'])(?:(?!\1|\\).|\\.)*(\1)$/;

function isValidString(value) {
  const match = value.match(stringRegex);
  if (!match) return false;

  const outerQuote = match[1]; 
  const innerRegex = outerQuote === '"' ? /'/g : /"/g;

  const innerMatches = value.match(innerRegex);
  return !innerMatches || innerMatches.length % 2 === 0;
}

button.addEventListener('click', () => {
  const value = input.value.trim(); 
  
  if (isValidString(value)) {
    input.style.borderColor = 'green'; 
  } else {
    input.style.borderColor = 'red'; 
  }
});
