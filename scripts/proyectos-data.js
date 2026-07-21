const misProyectos = [
    {
        id: 'navos',
        title: 'NavOS',
        icon: 'desktop_windows',
        description: 'Una modificación personalizada de una ISO de Windows con el bloatware desactivado y optimizaciones para un mejor rendimiento.',
        action: {
            type: 'modal',
            modalId: 'navos-modal',
            text: 'Ver proyecto'
        },
        modal: {
            title: 'NavOS 10 (Deprecado)',
            image: 'assets/navos.png',
            descHtml: '<p class="modal-desc">NavOS es una modificación diseñada para eliminar el bloatware, desactivar telemetría innecesaria y optimizar el rendimiento general del sistema operativo Windows, manteniendo la estabilidad para juegos y productividad.</p>',
            btnLink: 'https://drive.google.com/file/d/19fRUJpRM1G9Xa4ak_lUPNnAiTWpc8ICD/view?usp=sharing',
            btnIcon: 'download',
            btnText: 'Descargar ISO'
        }
    },
    {
        id: 'nav-tools',
        title: 'Nav Tools',
        icon: 'terminal',
        description: 'Una utilidad ligera e interactiva en Batch (.cmd) para automatizar la configuración inicial de Windows, aplicando optimizaciones del sistema e instalación de apps vía Winget.',
        action: {
            type: 'modal',
            modalId: 'navtools-modal',
            text: 'Ver proyecto'
        },
        modal: {
            title: 'Nav Tools (Privado)',
            image: 'assets/navtools.png',
            descHtml: `
                <p class="modal-desc"><strong>Nav Tools</strong> es una utilidad interactiva desarrollada en Batch (.cmd) que reúne funciones esenciales para poner a punto un sistema Windows recién instalado de forma rápida y sencilla.</p>
                <p class="modal-desc" style="font-weight: 600;">¿Qué puedes hacer con ella?</p>
                <ul style="margin-left: 20px; color: var(--md-sys-color-on-surface-variant); font-size: 0.95rem; line-height: 1.6; display: flex; flex-direction: column; gap: 8px;">
                    <li><strong>Instalación de Apps con Winget:</strong> Instala de forma automatizada y en lote programas indispensables como navegadores, reproductores multimedia, editores de código y herramientas del sistema.</li>
                    <li><strong>Optimización y Privacidad:</strong> Desactiva servicios secundarios innecesarios, telemetría y tareas programadas de recopilación de datos para liberar recursos y mejorar la privacidad.</li>
                    <li><strong>Limpieza del Sistema:</strong> Elimina de forma rápida archivos temporales, caché del sistema y del navegador, y libera espacio residual en el disco.</li>
                    <p class="modal-desc">Incluido en NavOS</p>
                </ul>
            `,
            btnLink: null
        }
    },
    {
        id: 'mi-sitio-web',
        title: 'Mi Sitio Web',
        icon: 'language',
        description: 'Esta misma página web personal, diseñada desde cero con HTML, CSS puro y Js.',
        action: {
            type: 'link',
            link: 'https://github.com/navimk/navimk.github.io',
            text: 'Ver código'
        }
    },
    {
        id: 'j7elte',
        title: 'Samsung j7 builds',
        icon: 'mobile_arrow_down',
        description: 'LineageOS 17.1 & 18.1 builds ',
        action: {
            type: 'modal',
            modalId: 'j7-modal',
            text: 'Ver'
        },
        modal: {
            title: 'Samsung j7 builds',
            image: 'assets/j7.jpg',
            descHtml: 'Que loco se pondria a mantaner este viejo dispositivo(yo), aqui puedes ver las builds que hago a veces para este viejo telefono',
            btnLink: 'https://drive.google.com/drive/folders/1wWQDH8n6mT7cVU1Zlea6Hp4tDT76bc-g?usp=sharing',
            btnIcon: 'mobile_arrow_down',
            btnText: 'Descarga'
        }
    },
    {
        id: 'secret',
        title: 'Secret',
        icon: 'question_mark',
        description: 'hmmmmmmmmm',
        action: {
            type: 'modal',
            modalId: 'secret-modal',
            text: 'Algo'
        },
        modal: {
            title: 'Secret :0',
            image: 'assets/ooooo.jpg',
            descHtml: '',
            btnLink: 'https://youtu.be/dQw4w9WgXcQ?si=GjCvlZNSazhhrC7-',
            btnIcon: 'question_mark',
            btnText: 'huh'
        }
    },
    {
        id: 'proximamente',
        title: 'Próximamente',
        icon: 'construction',
        description: 'Actualmente me encuentro trabajando en un nuevo e interesante proyecto. ¡Vuelve pronto para ver las novedades!',
        action: {
            type: 'disabled',
            text: 'En desarrollo',
            icon: 'pending'
        }
    }
];

// Exporting to global window so other scripts can read it
window.misProyectos = misProyectos;
