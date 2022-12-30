const button = document.querySelector('.mode-switcher');
const root = document.querySelector(':root');

window.localStorage.setItem(' onlyOnce', false);

var mode = window.modeVariable || {};

// if (
//   window.matchMedia &&
//   window.matchMedia('(prefers-color-scheme: light)').matches
// ) {
//   // dark mode
//   mode = 'light';
// } else {
//   // light mode
//   mode = 'dark';
// }

// console.log(!document.cookie.split(';')[0].split('=')[1]);
// console.log(!document.cookie.split(';')[0].split('=')[1] == 'false');
// console.log(document.cookie);

if (window.localStorage.getItem('onlyOnce') === null) {
  // window.localStorage.setItem('mode', mode);
  // window.localStorage.setItem('onlyOnce', true);
  // console.log(
  //   'THE COOKIE ONLYONCE: ' + window.localStorage.getItem('onlyOnce')
  // );
  // console.log('THE COOKIE MODE: ' + window.localStorage.getItem('mode'));

  mode = 'dark';
  console.log('COOKIE INITIALIZED');
  window.localStorage.setItem('onlyOnce', true);
}

// mode = window.localStorage.getItem('mode');
// console.log(window.localStorage.getItem('mode'));

const dark_btn = document.querySelector('.mode-switcher .indicator-dark');
const light_btn = document.querySelector('.mode-switcher .indicator-light');

if (mode === 'light') {
  light_on();
} else {
  dark_on();
}

button.addEventListener('click', async () => {
  if (mode == 'dark') {
    light_on();
    mode = 'light';
    // window.localStorage.setItem('mode', mode);
  } else {
    dark_on();
    mode = 'dark';
    // window.localStorage.setItem('mode', mode);
  }
});

function dark_on() {
  dark_btn.classList.add('on');
  dark_btn.classList.remove('off');
  light_btn.classList.add('off');
  light_btn.classList.remove('on');
  setProp('--bg-primary', 'rgb(15, 15, 15)');
  setProp('--bg-primary-op', '15, 15, 15');
  setProp('--bg-secondary', 'rgb(2, 2, 2)');
  setProp('--bg-secondary-op', '2, 2, 2');
  setProp('--font-clr-primary', 'rgb(255, 255, 255)');
  setProp('--font-clr-secondary', 'rgb(253, 253, 253)');
  setProp('--neutral-primary', 'rgb(255, 255, 255)');
  setProp('--neutral-secondary', 'rgba(192, 192, 192, .1)');
  setProp('--bg-tertiary', 'rgb(20, 20, 20)');
  //alert("Dark on!");
}

function light_on() {
  dark_btn.classList.add('off');
  dark_btn.classList.remove('on');
  light_btn.classList.add('on');
  light_btn.classList.remove('off');
  setProp('--bg-primary', 'rgb(255, 255, 255)');
  setProp('--bg-primary-op', '255, 255, 255');
  setProp('--bg-secondary', 'rgb(240, 240, 240)');
  setProp('--bg-secondary-op', '240, 240, 240');
  setProp('--font-clr-primary', 'rgb(0, 0, 0)');
  setProp('--font-clr-secondary', 'rgb(4, 4, 4)');
  setProp('--neutral-primary', 'rgb(11, 11, 11)');
  setProp('--neutral-secondary', 'rgba(20, 20, 20, .1)');
  setProp('--bg-tertiary', 'rgb(220, 220, 220)');
  //alert("Light on!")
}

function setProp(name, prop) {
  root.style.setProperty(`${name}`, `${prop}`);
}
