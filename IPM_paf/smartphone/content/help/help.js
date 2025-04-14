document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-question').forEach(q => {
      q.addEventListener('click', () => {
        const parent = q.parentElement;
        parent.classList.toggle('open');
      });
    });
  });
  