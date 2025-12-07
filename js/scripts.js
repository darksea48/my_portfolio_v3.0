// Portfolio Data JSON
const portfolioData = {
    profile: {
        name: "Douglas Suárez Zamorano",
        tagline: "Desarrollador Full Stack Python/Django en formación | Técnico en Programación Computacional",
        email: "d.suarez.zamorano@gmail.com",
        social: {
            linkedin: "https://www.linkedin.com/in/douglas-suarez-zamorano/",
            github: "https://github.com/darksea48"
        }
    },
    certifications: [
        {
            id: 1,
            title: "Introducción a JavaScript Moderno",
            date: "2024-10-15",
            excerpt: "Descubre las últimas características de ES2024 y cómo pueden mejorar tu código JavaScript.",
            content: "En este artículo exploramos las nuevas características de JavaScript ES2024, incluyendo pattern matching, records y tuples, y muchas más funcionalidades que harán tu código más limpio y eficiente.",
            icon: "📝",
            tags: ["JavaScript", "ES2024", "Web Development"]
        },
        {
            id: 2,
            title: "CSS Grid vs Flexbox: Guía Completa",
            date: "2024-10-10",
            excerpt: "Una guía completa para entender las diferencias y casos de uso de Grid y Flexbox.",
            content: "CSS Grid y Flexbox son dos herramientas poderosas para crear layouts. Aprende cuándo usar cada una y cómo combinarlas para crear diseños increíbles.",
            icon: "🎨",
            tags: ["CSS", "Layout", "Design"]
        },
        {
            id: 3,
            title: "Optimización de Performance en React",
            date: "2024-10-05",
            excerpt: "Técnicas avanzadas para mejorar el rendimiento de tus aplicaciones React.",
            content: "Explora técnicas de optimización como memoización, lazy loading, code splitting y más para hacer tus aplicaciones React más rápidas.",
            icon: "⚡",
            tags: ["React", "Performance", "Optimization"]
        },
        {
            id: 4,
            title: "TypeScript: Mejores Prácticas 2024",
            date: "2024-09-28",
            excerpt: "Guía actualizada de las mejores prácticas para escribir TypeScript profesional.",
            content: "TypeScript ha evolucionado mucho. Conoce las mejores prácticas actuales para tipos, interfaces, genéricos y más.",
            icon: "💎",
            tags: ["TypeScript", "Best Practices", "JavaScript"]
        }
    ],
    projects: [
        {
            title: `Gestor de Restaurante Mi Itaka`,
            img: "img/img-restobaritaka.jpg",
            date: `2025`,
            details: `Sistema de gestión integral para un restaurante, desarrollado con Django y MySQL (también adaptado para PostgreSQL, debido a la compatibilidad del ORM de Django). Incluye funcionalidades para la administración de menús, reservas y pedidos. El proyecto está diseñado para optimizar las operaciones diarias del restaurante, como el manejo de pedidos y facilitar la gestión administrativa. Próximamente se incorporarán más detalles y funcionalidades, como la integración de los módulos de caja, donde podrán sacarse los vouchers de los pedidos y también el gestión de inventario en cocina y barra.`,
            links: [
                {
                    url: `https://github.com/darksea48/proyecto_miitaka.git`,
                    text: `Código`,
                    class: `btn btn-primary btn-sm me-2`
                },
                {
                    url: `https://proyecto-miitaka.onrender.com/`,
                    text: `Demo`,
                    class: `btn btn-outline-light btn-sm`
                }
            ],
            techs: ["Django", "Python", "MySQL", "PostgreSQL", "HTML", "CSS", "JavaScript"]
        },
        {
            title: `Gestor de Productos - Sistema de Inventario Django`,
            img: "img/gestion-prod.avif",
            date: "2025",
            details: `Un sistema completo de gestión de productos desarrollado con Django y MySQL, que incluye funcionalidades CRUD, búsqueda avanzada, relaciones entre modelos y una interfaz de usuario moderna y responsive. Permite a los usuarios administrar productos, categorías y proveedores de manera eficiente, con validaciones de datos y manejo de errores robusto. El proyecto demuestra habilidades en desarrollo web full-stack, diseño de bases de datos y buenas prácticas de desarrollo con Django.`,
            links: [
                {
                    url: `https://github.com/darksea48/M7_EvalMod_GestorProductos.git`,
                    text: `Código`,
                    class: `btn btn-primary btn-sm me-2`
                }
            ],
            techs: ["Django", "Python", "MySQL", "HTML", "CSS", "JavaScript"]
        },
        {
            title: `Sistema Cinepedia - Gestión de Películas y Usuarios`,
            img: "img/cinepedia.jpg",
            date: "2025",
            details: `Plataforma web para gestión y reseña de películas - Sistema completo de gestión de contenido cinematográfico con funcionalidades de publicación, comentarios y administración de usuarios. Desarrollado con Django y MySQL, permite a los usuarios explorar una amplia base de datos de películas, agregar reseñas y calificaciones, y a los administradores gestionar el contenido de películas de manera eficiente.`,
            links: [
                {
                    url: `https://github.com/darksea48/proyecto_cinepedia_mod7.git`,
                    text: `Código`,
                    class: `btn btn-primary btn-sm me-2`
                },
                {
                    url: `https://cinepedia-2pio.onrender.com/`,
                    text: `Demo`,
                    class: `btn btn-outline-light btn-sm`
                }
            ],
            techs: ["Django", "Python", "MySQL", "HTML", "CSS", "JavaScript"]
        },
        {
            title: `Sistema de gestor de tareas`,
            img: "img/img-gestortareasdjango.png",
            date: "2025",
            details: `Desarrollé una aplicación web de gestión de tareas utilizando Django y Python. La aplicación permite a los usuarios crear, leer, actualizar y eliminar tareas, con funcionalidades adicionales como marcar tareas como completadas y filtrarlas por estado (no cuenta con persistencia de datos por el momento, debido a que así fue solicitado ). Implementé autenticación de usuarios para que cada usuario pueda gestionar sus propias tareas de manera segura. El proyecto demuestra habilidades en desarrollo web full-stack, manejo de bases de datos y buenas prácticas de desarrollo con Django.`,
            links: [
                {
                    url: `https://github.com/darksea48/DB-inventario-MOD5.git`,
                    text: `Código`,
                    class: `btn btn-primary btn-sm me-2`
                }
            ],
            techs: ["Django", "Python", "HTML", "CSS", "JavaScript"]
        },
        {
            title: `Sistema de Gestión de Inventario`,
            img: "img/img-inventario.png",
            date: "2025",
            details: `Desarrollé un sistema de base de datos para un inventario y transacciones, hecho con MySQL. Este sistema tiene como propósito gestionar productos, proveedores y transacciones de compras y ventas, manteniendo actualizado el inventario en tiempo real mediante triggers y procedimientos almacenados. Permite registrar productos y proveedores, administrar compras y ventas a través de transacciones SQL, controlar el stock automáticamente con un trigger, evitar ventas con stock insuficiente usando procedimientos almacenados con ROLLBACK, y consultar el inventario actual e historial de movimientos.`,
            links: [
                {
                    url: `https://github.com/darksea48/DB-inventario-MOD5.git`,
                    text: `Código`,
                    class: `btn btn-primary btn-sm me-2`
                }
            ],
            techs: ["MySQL"]
        },
        {
            title: `Sistema de Gestion de Biblioteca`,
            img: "img/img-biblioteca.jpg",
            date: "2025",
            details: `Desarrollé un sistema de gestión de biblioteca basado en una interfaz de línea de comandos (CLI), desarrollado en Python. Permite a los usuarios realizar operaciones básicas de CRUD (Crear, Leer, Actualizar, Eliminar) sobre una colección de libros, tanto físicos como digitales, guardando la clase correspondiente para la manipulación de la información como un objeto según la clase guardada (siendo un libro físico o un libro digital).`,
            links: [
                {
                    url: `https://github.com/darksea48/BIBLIOTECA-MOD4.git`,
                    text: `Código`,
                    class: `btn btn-primary btn-sm me-2`
                }
            ],
            techs: ["Python"]
        },
        {
            title: "Aplicación en Python: Gestor de tareas",
            img: "img/img-gestortareas.png",
            date: "2025",
            details: `He creado una aplicación de consola en Python para crear, ver y gestionar tareas de forma eficiente. Las tareas se guardan en archivos JSON, lo que asegura persistencia, organización estructurada y fácil integración con otros sistemas, demostrando manejo de datos con estructuras dinámicas y almacenamiento no relacional. La aplicación permite añadir nuevas tareas, listar todas las tareas existentes y marcar tareas como completadas, proporcionando una solución sencilla y efectiva para la gestión diaria de tareas.`,
            links: [
                {
                    url: "https://github.com/darksea48/python-funciones/tree/master/M3-Evaluacion%20Modulo",
                    text: "Código",
                    class: "btn btn-primary btn-sm me-2"
                }
            ],
            techs: ["Python", "JSON"]
        },
        {
            title: "Sitio Web de Enseñanza sobre Ciberseguridad",
            img: "img/screenshot-ciberseguridad.png",
            date: "2025",
            details: `Creé un sitio web educativo de ciberseguridad con HTML, CSS y JavaScript, que ofrece recursos interactivos y guías para mejorar la seguridad en línea. Presenta contenido claro para principiantes sobre buenas prácticas, gestión de contraseñas y detección de amenazas, con secciones bien definidas y navegación sencilla. El proyecto evidencia habilidades en diseño web, organización de contenidos y comunicación técnica pedagógica.`,
            links: [
                {
                    url: `https://github.com/darksea48/M2-Evaluacion-Modulo.git`,
                    text: `Código`,
                    class: `btn btn-primary btn-sm me-2`
                },
                {
                    url: `https://m2-evaluacion-modulo.vercel.app/`,
                    text: `Demo`,
                    class: `btn btn-outline-light btn-sm`
                }
            ],
            techs: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "Photobook Personal Mis Gatos",
            img: "img/screenshot-photobook.png",
            date: "2025",
            details: `Pensados en ustedes dos: Champiñon y Oreo. Desarrollé un sitio web personal como vitrina digital (photobook) con una galería de imágenes de mis gatos, seleccionadas y organizadas para explorar fácilmente. El diseño es limpio y funcional, centrado en lo visual, y el proyecto refleja experimentación con tecnologías web modernas, buenas prácticas de maquetación y una UX fluida.`,
            links: [
                {
                    url: `https://github.com/darksea48/my-first-photobook.git`,
                    text: `Código`,
                    class: `btn btn-primary btn-sm me-2`
                },
                {
                    url: `https://my-first-photobook.vercel.app/`,
                    text: `Demo`,
                    class: `btn btn-outline-light btn-sm`
                }
            ],
            techs: ["HTML", "CSS", "JavaScript"]
        },
    ],
    resume: {
        experience: [
            {
                title: "Programador de Encuestas",
                place: "CADEM",
                date_start: "Ago 2020",
                date_end: "Actualidad",
                details: `Desarrollo y programación de encuestas online en Limesurvey, asegurando calidad, experiencia de usuario y correcto formato de datos, utilizando JavaScript, jQuery y HTML/CSS. Gestión de panelistas y envío de correos masivos con Sendgrid. Además, edición de imágenes y videos para encuestas con Adobe Photoshop y Premiere, entre otros.`,
                habilities: ["JavaScript", "jQuery", "HTML", "CSS", "Limesurvey", "Sendgrid", "Adobe Photoshop", "Adobe Premiere"],
                references: [],
            },
            {
                title: "Técnico en Soporte",
                place: "Facultad de Veterinaria - Universidad de Chile",
                date_start: "May 2018",
                date_end: "Jun 2020",
                details: `Gestión técnica y soporte computacional en la Facultad de Ciencias Veterinarias y Pecuarias de la Universidad de Chile. Mantención de software y hardware, instalación de cámaras de vigilancia y puntos de red, manejo de servidores Windows y bases de datos SQL/MySQL. Desarrollo web en PHP, HTML, CSS y JavaScript, además de configuración de correos electrónicos y gestión de infraestructura tecnológica.`,
                habilities: ["Soporte Técnico", "SQL", "MySQL", "PHP", "HTML", "CSS", "JavaScript", "Windows Server"],
                references: ""
            },
            {
                title: "Técnico Encargado de Laboratorio de Computación",
                place: "Departamento de Ingeniería en Obras Civiles - Universidad de Santiago",
                date_start: "Abr 2016",
                date_end: "May 2018",
                details: `Gestión administrativa y técnica en el Laboratorio de Computación, incluyendo supervisión de servidores, equipos y redes. Soporte técnico y desarrollo web en HTML, CSS, PHP, WordPress y MySQL. Además, diseño gráfico con la Suite Adobe, abarcando Photoshop, InDesign, Illustrator y Premiere.`,
                habilities: ["Soporte Técnico", "HTML", "CSS", "PHP", "WordPress", "MySQL", "Adobe Photoshop", "Adobe InDesign", "Adobe Illustrator", "Adobe Premiere"],
                references: ""
            }
        ],
        education: [
            {
                title: "Bootcamp Desarrollo de Aplicaciones Web Full Stack Python Trainee",
                place: "Skillnest by Coding Dojo Latam",
                date_start: "May 2025",
                date_end: "Nov 2025",
                details: `Aprendizaje en Front-end (HTML/CSS/JavaScript) y Back-end (Python, Django, SQL)`,
                habilities: ["Front-end", "Back-end", "Python", "Django", "SQL", "HTML", "CSS", "JavaScript"]
            },
            {
                title: "Técnico en Programación Computacional",
                place: "Instituto Profesional AIEP",
                date_start: "2014",
                date_end: "2016",
                details: `Título de Educación Superior, en las cuales se adquirieron competencias en HTML, CSS, JavaScript, PHP, SQL (MS Server y MySQL), asp.net, entre otros.`,
                habilities: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "asp.net"]
            }
        ]
    }
};

// Variables globales para CAPTCHA
let captchaNum1, captchaNum2, captchaAnswer;

$(document).ready(function() {
    // Initialize
    loadProfile();
    rendercertifications();
    renderProjects();
    renderResume();
    generateCaptcha();

    // Navigation
    $('.nav-link').on('click', function(e) {
        e.preventDefault();
        const page = $(this).data('page');
        navigateTo(page);
    });

    // Mobile menu toggle
    $('#menuToggle').on('click', function() {
        $('#sidebar').toggleClass('show');
    });

    // Close sidebar on navigation (mobile)
    $('.nav-link').on('click', function() {
        if ($(window).width() <= 768) {
            $('#sidebar').removeClass('show');
        }
    });

    // Theme toggle
    initTheme();

    // Contact form
    $('form[action="https://api.web3forms.com/submit"]').on('submit', function(e) {
        e.preventDefault();
        
        // Validar CAPTCHA interno
        const userAnswer = parseInt($('#captcha').val());
        
        if (isNaN(userAnswer) || userAnswer !== captchaAnswer) {
            swal.fire({
                icon: 'error',
                title: 'Error de Verificación',
                text: 'La respuesta del CAPTCHA es incorrecta. Por favor, inténtalo de nuevo.'
            });
            generateCaptcha(); // Generar nuevo CAPTCHA
            $('#captcha').val('').focus();
            return false;
        }
        
        // Enviar el formulario
        handleContactSubmit(this);
    });

    // Smooth scroll for internal links
    $('a[href^="#"]').on('click', function(e) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 20
            }, 500);
        }
    });
});

// Navigation function
function navigateTo(page) {
    $('.page').removeClass('active').hide();
    $('.nav-link').removeClass('active');
    
    $(`#${page}`).fadeIn(400).addClass('active');
    $(`.nav-link[data-page="${page}"]`).addClass('active');
    
    // Scroll to top
    $('html, body').animate({ scrollTop: 0 }, 300);
}

// Load profile data
function loadProfile() {
    $('#sidebarName').text(portfolioData.profile.name);
    $('#sidebarTagline').text(portfolioData.profile.tagline);
}

// Render certifications posts
function rendercertifications() {
    const $grid = $('#certificationsGrid');
    $grid.empty();

    portfolioData.certifications.forEach((post, index) => {
        const $col = $(`
            <div class="col-md-6 col-lg-4" style="animation-delay: ${index * 0.1}s">
                <div class="card h-100" data-id="${post.id}" data-type="certifications">
                    <div class="card-img-top">${post.icon}</div>
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-date">
                            <i class="bi bi-calendar3"></i> 
                            ${formatDate(post.date)}
                        </p>
                        <p class="card-text">${post.excerpt}</p>
                        <div class="mt-3">
                            ${post.tags.map(tag => 
                                `<span class="badge bg-primary">${tag}</span>`
                            ).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `);

        $col.find('.card').on('click', function() {
            showDetailModal(post, 'certifications');
        });

        $grid.append($col);
    });
}

// Render projects
function renderProjects() {
    const $grid = $('#projectsGrid');
    $grid.empty();

    portfolioData.projects.forEach((project, index) => {
        const techsHtml = Array.isArray(project.techs) 
            ? project.techs.map(tag => `<span class="badge bg-primary">${tag}</span>`).join('')
            : `<span class="badge bg-secondary">${project.techs}</span>`;

        const truncatedDetails = project.details.substring(0, 120) + (project.details.length > 120 ? "..." : "");
        const $col = $(`
            <div class="col-md-3 col-lg-3" style="animation-delay: ${index * 0.1}s">
                <div class="card h-100" data-type="project">
                    <img src="${project.img}" class="card-img-top" alt="${project.title}">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-date">
                            <i class="bi bi-calendar3"></i> ${project.date}
                        </p>
                        <p class="card-text">${truncatedDetails}</p>
                        <div class="mt-3">
                            ${techsHtml}
                        </div>
                    </div>
                </div>
            </div>
        `);

        $col.find('.card').on('click', function() {
            showDetailModal(project);
        });

        $grid.append($col);
    });
}

// Render resume
function renderResume() {
    const $content = $('#resumeContent');
    
    // Collect all skills and remove duplicates
    const allHabilities = [
        ...portfolioData.resume.experience.flatMap(exp => exp.habilities || []),
        ...portfolioData.resume.education.flatMap(edu => edu.habilities || [])
    ];
    const uniqueSkills = [...new Set(allHabilities)];

    let html = `
        <div class="mb-5">
            <h3 class="mb-4">
                <i class="bi bi-briefcase me-2"></i>Experiencia Profesional
            </h3>
            <div class="timeline">
                ${portfolioData.resume.experience.map(exp => `
                    <div class="timeline-item">
                        <h4>${exp.title}</h4>
                        <div class="timeline-meta">
                            <i class="bi bi-building me-2"></i>${exp.place} • 
                            <i class="bi bi-calendar3 me-2"></i>${exp.date_start} - ${exp.date_end}
                        </div>
                        <p class="timeline-description">${exp.details}</p>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="mb-5">
            <h3 class="mb-4">
                <i class="bi bi-mortarboard me-2"></i>Educación
            </h3>
            <div class="timeline">
                ${portfolioData.resume.education.map(edu => `
                    <div class="timeline-item">
                        <h4>${edu.title}</h4>
                        <div class="timeline-meta">
                            <i class="bi bi-bank me-2"></i>${edu.place} • 
                            <i class="bi bi-calendar3 me-2"></i>${edu.date_start} - ${edu.date_end}
                        </div>
                        <p class="timeline-description">${edu.details}</p>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="mb-5">
            <h3 class="mb-4">
                <i class="bi bi-code-slash me-2"></i>Habilidades Técnicas
            </h3>
            <div>
                ${uniqueSkills.map(skill => 
                    `<span class="badge bg-primary me-2 mb-2" style="font-size: 1rem; padding: 0.5rem 1rem;">${skill}</span>`
                ).join('')}
            </div>
        </div>

        <div class="text-center mt-5">
            <button class="btn btn-primary btn-lg" onclick="downloadResume()">
                <i class="bi bi-download me-2"></i>Descargar CV (PDF)
            </button>
        </div>
    `;

    $content.html(html);
}

// Show detail modal
function showDetailModal(item, type) {
    const modal = new bootstrap.Modal(document.getElementById('detailModal'));
    
    const title = type === 'certifications' ? `${item.icon} ${item.title}` : item.title;
    $('#modalTitle').html(title);
    
    let bodyHtml = '';
    if (type === 'certifications') {
        bodyHtml = `
            <p class="text-muted">
                <i class="bi bi-calendar3 me-2"></i>${formatDate(item.date)}
            </p>
            <div class="mb-3">
                ${item.tags.map(tag => `<span class="badge bg-primary me-2">${tag}</span>`).join('')}
            </div>
            <p>${item.content}</p>
        `;
    } else { // project
        const techsHtml = Array.isArray(item.techs) 
            ? item.techs.map(tag => `<span class="badge bg-primary me-2">${tag}</span>`).join('')
            : `<span class="badge bg-secondary">${item.techs}</span>`;
        
        const linksHtml = item.links.map(link => 
            `<a href="${link.url}" class="${link.class}" target="_blank">${link.text}</a>`
        ).join('');

        bodyHtml = `
            <img src="${item.img}" class="img-fluid mb-3" alt="${item.title}">
            <p class="text-muted">
                <i class="bi bi-calendar3 me-2"></i>${item.date}
            </p>
            <div class="mb-3">
                ${techsHtml}
            </div>
            <p>${item.details}</p>
            
        `;
        footerHtml = `
            <div class="d-flex justify-content-center me-auto">${linksHtml}</div>
            <div class="d-flex justify-content-center ms-auto"><button type="button" class="btn btn-secondary btn-sm ms-4" data-bs-dismiss="modal">Cerrar</button></div>
        `;
        
    }
    
    $('#modalBody').html(bodyHtml);
    $('#modalFooter').html(footerHtml);
    modal.show();
}

// Theme functions
function initTheme() {
    $('html').attr('data-theme', 'dark');
}

// Contact form handler
function handleContactSubmit(form) {
    const $form = $(form);
    const $btn = $form.find('button[type="submit"]');
    
    $btn.prop('disabled', true).html('<i class="bi bi-hourglass-split me-2"></i>Enviando...');

    // Enviar el formulario de manera nativa
    $.ajax({
        url: $form.attr('action'),
        method: 'POST',
        data: $form.serialize(),
        dataType: 'json',
        success: function(response) {
            $btn.prop('disabled', false).html('<i class="bi bi-check-circle me-2"></i>¡Mensaje Enviado!');
            $btn.removeClass('btn-primary').addClass('btn-success');

            // Show success alert
            const alert = `
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <i class="bi bi-check-circle-fill me-2"></i>
                    <strong>¡Gracias!</strong> Tu mensaje ha sido enviado exitosamente.
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>
            `;
            $(alert).insertBefore($form).hide().slideDown();

            // Reset form y generar nuevo CAPTCHA
            $form[0].reset();
            generateCaptcha();

            setTimeout(() => {
                $btn.html('<i class="bi bi-send me-2"></i>Enviar Mensaje');
                $btn.removeClass('btn-success').addClass('btn-primary');
            }, 3000);
        },
        error: function() {
            $btn.prop('disabled', false).html('<i class="bi bi-x-circle me-2"></i>Error al Enviar');
            $btn.removeClass('btn-primary').addClass('btn-danger');

            const alert = `
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <i class="bi bi-x-circle-fill me-2"></i>
                    <strong>Error:</strong> No se pudo enviar el mensaje. Inténtalo de nuevo.
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>
            `;
            $(alert).insertBefore($form).hide().slideDown();

            setTimeout(() => {
                $btn.html('<i class="bi bi-send me-2"></i>Enviar Mensaje');
                $btn.removeClass('btn-danger').addClass('btn-primary');
            }, 3000);
        }
    });
}

// Generar CAPTCHA matemático
function generateCaptcha() {
    // Generar dos números aleatorios entre 1 y 10
    captchaNum1 = Math.floor(Math.random() * 10) + 1;
    captchaNum2 = Math.floor(Math.random() * 10) + 1;
    
    // Elegir operación aleatoria (suma o resta)
    const operations = ['+', '-'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    // Calcular respuesta
    if (operation === '+') {
        captchaAnswer = captchaNum1 + captchaNum2;
    } else {
        // Asegurar que el resultado no sea negativo
        if (captchaNum1 < captchaNum2) {
            [captchaNum1, captchaNum2] = [captchaNum2, captchaNum1];
        }
        captchaAnswer = captchaNum1 - captchaNum2;
    }
    
    // Mostrar pregunta
    $('#captchaQuestion').html(`<strong>¿Cuánto es ${captchaNum1} ${operation} ${captchaNum2}?</strong>`);
    $('#captcha').val('');
}

// Download resume (simulado)
function downloadResume() {
    alert('En producción, aquí se descargaría tu CV en formato PDF.');
    // En producción, aquí generarías o descargarías el PDF real
    // window.open('/path-to-resume.pdf', '_blank');
}

// Utility: Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
}

// Smooth animations on scroll (opcional)
$(window).on('scroll', function() {
    $('.card').each(function() {
        const elementTop = $(this).offset().top;
        const elementBottom = elementTop + $(this).outerHeight();
        const viewportTop = $(window).scrollTop();
        const viewportBottom = viewportTop + $(window).height();

        if (elementBottom > viewportTop && elementTop < viewportBottom) {
            $(this).css('opacity', '1');
        }
    });
});

// Add fade-in effect to cards on load
$('.card').css('opacity', '0').each(function(index) {
    $(this).delay(index * 100).animate({ opacity: 1 }, 500);
});