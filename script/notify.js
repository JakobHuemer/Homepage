const notifications = document.querySelector('.notifications');

const removeToast = (toast) => {
  toast.classList.add('hide');
  setTimeout(() => toast.remove(), 500);
};

const toast_details = {
  timer: 5000,
  success: {
    icon: 'fa-circle-check',
  },
  'user-error': {
    icon: 'fa-circle-exclamation',
  },
  'fatal-error': {
    icon: 'fa-circle-xmark',
  },
};

const createToast = (id, msg) => {
  const toast = document.createElement('li');

  toast.className = `toast ${id}`;

  const { icon } = toast_details[id];

  toast.innerHTML = `<div class="column">
  <i class="fa-solid ${icon}"></i>
  <span>${msg}</span>
  </div>
  <i onclick="removeToast(this.parentElement)" class="fa-solid fa-xmark"></i>`;

  notifications.appendChild(toast);

  setTimeout(() => {
    removeToast(toast);
  }, toast_details.timer);
};
