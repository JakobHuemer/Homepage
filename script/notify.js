const notifications = document.querySelector('.notifications');

const removeToast = (toast) => {
  toast.classList.add('hide');
  setTimeout(() => toast.remove(), 500);
};

const toast_details = {
  timer: 5000,
  success: {
    icon: 'fa-circle-check',
    msg: 'Email sucessfully sent!',
  },
  'user-error': {
    icon: 'fa-circle-exclamation',
    msg: 'E-Mail not valid!',
  },
  'fatal-error': {
    icon: 'fa-circle-xmark',
    msg: 'Ops, something went wrong!',
  },
};

const createToast = (id) => {
  const toast = document.createElement('li');

  toast.className = `toast ${id}`;

  const { icon, msg } = toast_details[id];

  toast.innerHTML = `<div class="column">
  <i class="fa-solid ${icon}"></i>
  <span>${msg}</span>
  </div>
  <i onclick="removeToast(this.parentElement)" class="fa-solid fa-xmark"></i>`;

  notifications.appendChild(toast);

  setTimeout(() => {
    removeToast(toast);
  }, toast_details.timer);

  switch (id) {
    case 'success':
      break;
  }
};
