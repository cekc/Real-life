function myFunction() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  var button = document.querySelector('.dropbtn');
  var dropdown = document.getElementById("myDropdown");

  if (event.target !== button && !button.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.classList.remove('show');
  }
}
