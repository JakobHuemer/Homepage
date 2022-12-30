var commands = document.querySelector('.commands');
var command_array = Array.prototype.slice.call(commands.childNodes);
console.log(getFormattedNodeListString(commands.childNodes));

console.log(JSON.stringify(command_array));
var i = 0;

command_array.forEach(function (command) {
  console.log('[' + i + '] command: ' + JSON.stringify(command));
  command.addEventListener('click', function () {
    console.log('clicked');
    command.classList.toggle('active');
  });
  i++;
});

function getFormattedNodeListString(nodeList) {
  let str = '';
  nodeList.forEach((node) => {
    // Create a container element
    const container = document.createElement('div');
    // Append the node to the container
    container.appendChild(node);
    // Append the innerHTML of the container to the string
    str += container.innerHTML + '\n';
  });
  return str;
}
