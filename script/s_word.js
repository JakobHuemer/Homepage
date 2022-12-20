// Code for secrete word
var timer = 0;

var testString = '';

addEventListener('keydown', async (event) => {
  timer += 1;
  var name = event.key;
  var code = event.code;
  testString = testString + name;
  if (testString.toLowerCase() == 'rickroll') {
    window.location.href = 'https://youtu.be/dQw4w9WgXcQ';
  } else if (testString.toLocaleLowerCase() == 'secret') {
    window.location.href =
      'https://htblaleonding-my.sharepoint.com/:w:/g/personal/j_huemer-fistelberger_htblaleonding_onmicrosoft_com/EX1SAKy31WNNoV3jugn6lM0BN13jVqEyam9XKqzeHRTXhw?e=auCmUO';
  }
  setTimeout(() => {
    Sleep(1000);
    timer -= timer >= 0 ? 1 : 0;
    if (timer <= 0) {
      testString = '';
    }
  }, 1000);
});

function Sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
