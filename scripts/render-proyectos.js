document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects-container');
    const modalsContainer = document.getElementById('modals-container');

    if (!projectsContainer || !window.misProyectos) return;

    let htmlCards = '';
    let htmlModals = '';

    window.misProyectos.forEach(proyecto => {
        // --- Generar HTML de la Tarjeta ---
        let footerHtml = '';
        if (proyecto.action.type === 'modal') {
            footerHtml = `
                <a href="#" id="open-${proyecto.action.modalId}" class="btn-text">
                    ${proyecto.action.text}
                    <span class="material-symbols-outlined">arrow_forward</span>
                </a>
            `;
        } else if (proyecto.action.type === 'link') {
            footerHtml = `
                <a href="${proyecto.action.link}" class="btn-text">
                    ${proyecto.action.text}
                    <span class="material-symbols-outlined">arrow_forward</span>
                </a>
            `;
        } else if (proyecto.action.type === 'disabled') {
            footerHtml = `
                <span class="btn-text" style="opacity: 0.6; pointer-events: none;">
                    ${proyecto.action.text}
                    <span class="material-symbols-outlined">${proyecto.action.icon || 'pending'}</span>
                </span>
            `;
        }

        htmlCards += `
            <div class="project-card">
                <div class="project-card-header">
                    <div class="project-icon-box">
                        <span class="material-symbols-outlined">${proyecto.icon}</span>
                    </div>
                    <h3>${proyecto.title}</h3>
                </div>
                <p class="project-desc">${proyecto.description}</p>
                <div class="project-card-footer">
                    ${footerHtml}
                </div>
            </div>
        `;

        // --- Generar HTML del Modal (si lo tiene) ---
        if (proyecto.action.type === 'modal' && proyecto.modal) {
            const m = proyecto.modal;
            
            let btnHtml = '';
            if (m.btnLink) {
                btnHtml = `
                    <div class="modal-footer">
                        <a href="${m.btnLink}" target="_blank" class="btn-primary">
                            <span class="material-symbols-outlined">${m.btnIcon || 'open_in_new'}</span>
                            <span>${m.btnText}</span>
                        </a>
                    </div>
                `;
            }

            htmlModals += `
                <div id="${proyecto.action.modalId}" class="modal-overlay" aria-hidden="true" role="dialog" aria-labelledby="${proyecto.action.modalId}-title">
                    <div class="modal-container">
                        <header class="modal-header">
                            <h2 id="${proyecto.action.modalId}-title" class="modal-title-text">${m.title}</h2>
                            <button id="${proyecto.action.modalId}-close" class="icon-button" aria-label="Cerrar ventana">
                                <span class="material-symbols-outlined">close</span>
                            </button>
                        </header>
                        <div class="modal-body">
                            ${m.image ? `<img src="${m.image}" alt="Captura de ${m.title}" class="modal-image">` : ''}
                            ${m.descHtml}
                        </div>
                        ${btnHtml}
                    </div>
                </div>
            `;
        }
    });

    // Inyectar en el DOM
    projectsContainer.innerHTML = htmlCards;
    
    if (modalsContainer) {
        modalsContainer.innerHTML = htmlModals;
    }

    // Configurar Modales Dinámicamente
    window.misProyectos.forEach(proyecto => {
        if (proyecto.action.type === 'modal') {
            const openBtn = document.getElementById('open-' + proyecto.action.modalId);
            const modal = document.getElementById(proyecto.action.modalId);
            const closeBtn = document.getElementById(proyecto.action.modalId + '-close');

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

                if (closeBtn) closeBtn.addEventListener('click', closeModal);

                modal.addEventListener('click', (e) => {
                    if (e.target === modal) closeModal();
                });

                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
                });
            }
        }
    });

});
