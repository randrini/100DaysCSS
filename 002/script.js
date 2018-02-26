let hamTarget = document.querySelector('.ham');

hamTarget.addEventListener('click', (e) => {

  e.preventDefault();
  hamTarget.classList.toggle("open");
  console.log('passed');


} );