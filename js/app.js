document.addEventListener('DOMContentLoaded', () => {

const form = document.querySelector('#new-entry-form');
const currentMembers = document.querySelector('#members');

form.addEventListener('submit', (event) => {

  event.preventDefault();
  const name = event.target.name.value;
  const bike = event.target.bike.value;
  const position = event.target.position.value;
  const memberType = event.target.memberType.value;

  newEntry.textContent = `Name: ${name}, Bike: ${bike}, Riding Position: ${position}, Member Level: ${memberType}`;
  newEntry.classList.add('entry');

  currentMembers.appendChild(newEntry);

  form.reset();

});



}); //final brackets do not remove
