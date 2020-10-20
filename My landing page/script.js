const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

//  Toggle nav
toggle.addEventListener('click', () =>
  document.body.classList.toggle('show-nav')
); 

// Open modal
open.addEventListener('click', () => 
  modal.classList.add('show-modal')
);

// Close modal
close.addEventListener('click', () => 
  modal.classList.remove('show-modal')
);

//hide modal after clicking the outside area
window.addEventListener('click', e => e.target == modal ? 
  modal.classList.remove('show-modal') : false
)

