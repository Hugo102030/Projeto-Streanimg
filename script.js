
const container = document.querySelectorAll('.container');

container.forEach(container => {
    let isDown = false;
    let startX;
    let scrollLeft;
    
    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.style.cursor = 'grabbing'; 
        startX = e.pageX - container.offsetLeft; 
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        container.style.cursor = 'grab';
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();

        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 3;

        container.scrollLeft = scrollLeft - walk;
    });
});

    // Função de abrir e fechar o menu hamburguer

    isFixedNavbar: any;

    navbarOpened = false;

    ('window:scroll', [])
    onWindowScroll(); {
        const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (offset > 10) {
            this.isFixedNavbar = true;
        } else {
            this.isFixedNavbar = false;
        }
    }

    toggleNavbar(); {
        this.navbarOpened = !this.navbarOpened;
    }
