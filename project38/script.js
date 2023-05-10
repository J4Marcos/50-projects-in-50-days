const navItems = document.querySelectorAll('.phone nav li');
const images = document.querySelectorAll('.phone img');

navItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Remove 'show' class from all images
    images.forEach((img) => img.classList.remove('show'));
    // Remove 'active' class from all nav items
    navItems.forEach((li) => li.classList.remove('active'));
    
    // Add 'show' class to the corresponding image
    images[index].classList.add('show');
    // Add 'active' class to the clicked nav item
    item.classList.add('active');
  });
});
