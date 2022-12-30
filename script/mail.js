function sendMail() {
  if (
    document.getElementById('name').value == '' ||
    document.getElementById('email').value == '' ||
    document.getElementById('message').value == ''
  ) {
  }

  alert(document.getElementById('email').value);

  var params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  console.log(params);
  alert(params);

  const serviceID = 'service_w9sem2z';
  const templateID = 'template_ih18w3o';
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      // document.getElementById('name').value = '';
      // document.getElementById('email').value = '';
      // document.getElementById('message').value = '';
      alert('Message sent successfully!');
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      alert('Message failed to send.');
    });

  return;
}
