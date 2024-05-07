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

    const isPalindrome = lowerCaseStr === [...lowerCaseStr].reverse().join('');
    const message = `${originalInput} ${isPalindrome ? 'is' : 'is not'} a palindrome.`;

    const pTag = document.createElement('p');
    pTag.className = isPalindrome ? 'text-success' : 'text-danger';
    pTag.innerHTML = message;
    result.appendChild(pTag);
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