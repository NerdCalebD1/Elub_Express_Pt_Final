window.addEventListener('scroll', () => {
      const elementos = document.querySelectorAll('.reveal');/* Para pegar a classe de todos elementos */
      const triggerBottom = window.innerHeight * 0.90;

      elementos.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
          el.classList.add('show');
        } else {
          el.classList.remove('show');
        }
      });
    });