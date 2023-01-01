const commands = document.querySelectorAll('.expand');

commands.forEach((cmd) => {
  cmd.addEventListener('click', () => {
    commands.forEach((ncmd) => {
      if (ncmd != cmd) {
        ncmd.classList.remove('expand--reveal');
      }
    });
    cmd.classList.toggle('expand--reveal');
  });
});
