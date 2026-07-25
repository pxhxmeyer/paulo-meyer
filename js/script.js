
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.card').forEach(card => {
      if(filter === 'all' || card.dataset.category.split(' ').includes(filter)){
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});
