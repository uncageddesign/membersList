document.addEventListener('DOMContentLoaded', () => {

const form = document.querySelector('#new-member-form');
const currentMembers = document.querySelector('#currentMembers');

// const seedData = [
//   {name: 'Jock McCrindle', bike: 'Harley Davidson Fatboy', position: 'Driver', memberType: 'Full'},
//   {name: 'Helen McCrindle', bike: 'NA', position: 'Pillion', memberType: 'Full'},
//   {name: 'Kevin McKnight', bike: 'Honda X4', position: 'Driver', memberType: 'Full'},
//   {name: 'Sonny Barger', bike: 'Harley Davidson Ultraglide', position: 'Driver', memberType: 'Prospective'},
// ];
//
// seedData.forEach((currentMembers) => {
//   const starter = createListItem(currentMembers);
//   newEntry.classList.add('entry')
// });

form.addEventListener('submit', (event) => {

  event.preventDefault();
  const name = event.target.name.value;
  const bike = event.target.bike.value;
  const position = event.target.position.value;
  const memberType = event.target.memberType.value;

  const newEntry = document.createElement('p')
    newEntry.innerHTML = `Name: ${name} </br> Bike: ${bike} </br> Riding Position: ${position} </br> Member Level: ${memberType}`;
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
