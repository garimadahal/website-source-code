
  // Mobile menu toggle functionality
  const menuIcon = document.getElementById('menuIcon');
  const nav = document.getElementById('nav');
  
  menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
    
    // Change icon based on menu state
    const icon = menuIcon.querySelector('i');
    if (nav.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
  
  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      const icon = menuIcon.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    });
  });
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      
      // remove active from all tabs
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // hide all contents
      contents.forEach(c => c.classList.remove("active"));

      // show selected content
      const target = tab.getAttribute("data-tab");
      document.getElementById(target).classList.add("active");
    });
  });


