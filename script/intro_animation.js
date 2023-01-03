const sections = document.querySelectorAll('.animate-in');
console.log(sections);

const options = {
  root: null,
  threshold: 0,
  rootMargin: '-20%',
};

console.log(options);

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target);

      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});
