const userInput = document.getElementById('text-input');
const btn = document.getElementById('check-btn');
const result = document.getElementById('result');

const checkPalindrome = input => {
    const originalInput = input.value;
    const lowerCaseStr = input.value.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();

    if (input.value === '') {
        alert('Please input a value');
        return;
    } 

    result.replaceChildren();

    result.innerHTML = `${originalInput} ${lowerCaseStr === lowerCaseStr.split('').reverse().join('') ? 'is' : 'is not'} a palindrome`;
}

btn.addEventListener('click', () => {
    checkPalindrome(userInput);
    userInput.value = '';
});

userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      checkPalindrome(userInput);
      userInput.value = '';
    }
});