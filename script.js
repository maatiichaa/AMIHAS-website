
    const counters = document.querySelectorAll('.stat h2');
    let animated = false;
    const animateCounters = () => {
      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;
          const increment = Math.ceil(target / 100);
          if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 40);
          } else {
            counter.innerText = target + "+";
          }
        };
        updateCount();
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animateCounters();
          animated = true;
        }
      });
    }, { threshold: 0.5 });
    observer.observe(document.querySelector('.stats'));

    const navLinks = document.querySelectorAll('.navbar a[data-target]');
    const sections = document.querySelectorAll('.page-section');
    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('data-target');
        sections.forEach(section => {
          section.classList.toggle('show', section.id === targetId);
        });
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });
    });

    const dropdownLinks = document.querySelectorAll('.dropdown a[data-target]');
    dropdownLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('data-target');
        sections.forEach(section => {
          section.classList.toggle('show', section.id === targetId);
        });
      });
    });
    const sliderImages = document.querySelectorAll('.slider img');
      let currentSlide = 0;

      function showSlide(index) {
        sliderImages.forEach((img, i) => {
          img.classList.toggle('active', i === index);
        });
      }

      setInterval(() => {
        currentSlide = (currentSlide + 1) % sliderImages.length;
        showSlide(currentSlide);
      }, 3000); // Change every 3 seconds

      showSlide(currentSlide);
