document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleIcon = themeToggleBtn.querySelector('.material-symbols-outlined');

    // Función para establecer el tema y actualizar el icono
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        // El icono muestra la acción contraria (si está oscuro, ofrece cambiar a claro y viceversa)
        if (theme === 'dark') {
            themeToggleIcon.textContent = 'light_mode';
            themeToggleBtn.setAttribute('aria-label', 'Cambiar a tema claro');
        } else {
            themeToggleIcon.textContent = 'dark_mode';
            themeToggleBtn.setAttribute('aria-label', 'Cambiar a tema oscuro');
        }
    };

    // Inicializar el estado del icono basado en el tema actual (que ya fue aplicado en el head para evitar parpadeos)
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(currentTheme);

    // Manejar el clic en el botón de alternancia
    themeToggleBtn.addEventListener('click', () => {
        const activeTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    // Escuchar cambios en la preferencia del sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Solo cambiamos automáticamente si el usuario no ha elegido manualmente un tema preferido
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });

    // --- LÓGICA DE MODALES DE PROYECTOS ---
    const setupProjectModal = (openBtnId, modalId, closeBtnId) => {
        const openBtn = document.getElementById(openBtnId);
        const modal = document.getElementById(modalId);
        const closeBtn = document.getElementById(closeBtnId);

        if (openBtn && modal) {
            const openModal = (e) => {
                e.preventDefault();
                modal.classList.add('is-open');
                modal.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
                if (closeBtn) closeBtn.focus();
            };

            const closeModal = () => {
                modal.classList.remove('is-open');
                modal.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
                openBtn.focus();
            };

            openBtn.addEventListener('click', openModal);

            if (closeBtn) {
                closeBtn.addEventListener('click', closeModal);
            }

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modal.classList.contains('is-open')) {
                    closeModal();
                }
            });
        }
    };

    setupProjectModal('open-navos-modal', 'navos-modal', 'modal-close');
    setupProjectModal('open-navtools-modal', 'navtools-modal', 'navtools-modal-close');


    // --- LÓGICA DEL MODAL FLOTANTE (Créditos Avatar) ---
    const openPfpModalBtn = document.querySelector('.profile-blob');
    const pfpModal = document.getElementById('pfp-modal');
    const closePfpModalBtn = document.getElementById('pfp-modal-close');

    if (openPfpModalBtn && pfpModal) {
        // Abrir modal
        const openModal = (e) => {
            if (e) e.preventDefault();
            pfpModal.classList.add('is-open');
            pfpModal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden'; // Evitar scroll de fondo
            if (closePfpModalBtn) closePfpModalBtn.focus();
        };

        // Cerrar modal
        const closeModal = () => {
            pfpModal.classList.remove('is-open');
            pfpModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = ''; // Restaurar scroll
            openPfpModalBtn.focus();
        };

        openPfpModalBtn.addEventListener('click', openModal);

        // Soporte de accesibilidad por teclado (Enter o Espacio)
        openPfpModalBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                openModal(e);
            }
        });

        if (closePfpModalBtn) {
            closePfpModalBtn.addEventListener('click', closeModal);
        }

        // Cerrar al hacer clic en el fondo oscuro
        pfpModal.addEventListener('click', (e) => {
            if (e.target === pfpModal) {
                closeModal();
            }
        });

        // Cerrar con la tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && pfpModal.classList.contains('is-open')) {
                closeModal();
            }
        });
    }
});
