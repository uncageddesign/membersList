document.addEventListener('DOMContentLoaded', () => {

const form = document.querySelector('#new-member-form');
const currentMembers = document.querySelector('#currentMembers');

form.addEventListener('submit', (event) => {

  event.preventDefault();
  const name = event.target.name.value;
  const bike = event.target.bike.value;
  const position = event.target.position.value;
  const memberType = event.target.memberType.value;

  const newEntry = document.createElement('p')
    newEntry.textContent = `Name: ${name}, Bike: ${bike}, Riding Position: ${position}, Member Level: ${memberType}`;
    newEntry.classList.add('entry');

  currentMembers.appendChild(newEntry);

  form.reset();

});

const deleteButton = document.createElement('button');
 deleteButton.textContent = `Delete`;
 deleteButton.addEventListener('click', () => {
   const remove = document.querySelectorAll('.entry');
   for ( entry of remove) {
     console.log(entry);
     entry.remove();
   }
 })

currentMembers.appendChild(deleteButton);




}); //final brackets do not remove
