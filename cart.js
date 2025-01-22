const array = [];
const itemsContainer = document.getElementById('items');
function updateList() {
    itemsContainer.innerHTML = '';
    array.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('list-item');
        div.textContent = `${index + 1}: ${item}`;
        itemsContainer.appendChild(div);
    });
}
function pushToArray() {
    const input = document.getElementById('inputValue');
    const value = input.value.trim();
    if (value) {
        array.push(value);
        input.value = '';
        updateList();
    } else {
        alert('Please enter a value to push.');
    }
}
function popFromArray() {
    if (array.length > 0) {
        array.pop();
        updateList();
    } else {
        alert('The array is empty. Nothing to pop.');
    }
}