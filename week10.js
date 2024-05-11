let id = 0; // lets us refer to each unique id

document.getElementById('add').addEventListener('click', () => {
    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-task').value;
    // allows us to set the value of the first cell in the row 
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`; // setting value to yyyy/mm/dd
    row.insertCell(2).innerHTML = document.getElementById('new-start-date').value;
    row.insertCell(3).innerHTML = document.getElementById('new-end-date').value;
    let actions = row.insertCell(4);
    actions.appendChild(document.createTextNode(' ')); // appending a space
    document.getElementById('new-task').value = '';
    id++; // increment id for the next row
});

