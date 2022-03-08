let checkbox = document.getElementById('openSidebarMenu')
let buttonX = document.getElementById('buttonX')

console.log(checkbox);
console.log(buttonX);

function hideNav() {
    checkbox.value.toggleClass('false');
}