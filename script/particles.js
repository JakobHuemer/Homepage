var objects = ['../img/'];

while (true) {
  setTimeout(() => {
    const flake = {
      x: Math.floor(Math.random() * window.innerWidth),
      speed: Math.floor(Math.random() * 3) + 1,
      type: flakes[Math.floor(Math.random() * flakes.length)],
    };
  }, 3000);
}
