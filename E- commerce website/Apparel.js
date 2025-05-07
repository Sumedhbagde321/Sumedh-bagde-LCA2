document.querySelectorAll('.category').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.category').forEach(c => c.classList.remove('active'));
      item.classList.add('active');
    });
  });

