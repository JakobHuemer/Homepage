const sections = document.querySelectorAll('.animate-in');

const options = {
  root: null,
  threshold: 0,
  rootMargin: '-20%',
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});
