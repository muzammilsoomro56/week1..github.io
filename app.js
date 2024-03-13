const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li');
const header = document.querySelector('.header.container');

// Function to toggle the mobile menu
const toggleMobileMenu = () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
};

// Event listener for hamburger icon click
hamburger.addEventListener('click', toggleMobileMenu);

// Event listener for scroll to change header background color
document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

// Event listener for menu item click to close mobile menu
menu_item.forEach((item) => {
    item.addEventListener('click', toggleMobileMenu);
});

// Modify the event listener to handle dropdown menu items
menu_item.forEach((item) => {
	const dropdown = item.querySelector('.dropdown');
	if (dropdown) {
	  // Show the dropdown on hover
	  item.addEventListener('mouseenter', () => {
		dropdown.classList.add('active');
	  });
	  
	  // Hide the dropdown when mouse leaves
	  item.addEventListener('mouseleave', () => {
		dropdown.classList.remove('active');
	  });
	}
  });
  
  