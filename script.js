// Menu mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Filtro do portfólio
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove a classe active de todos os botões
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Adiciona a classe active ao botão clicado
        button.classList.add('active');
        
        // Obtém o filtro
        const filter = button.getAttribute('data-filter');
        
        // Filtra os itens do portfólio
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Botão voltar ao topo
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('active');
    } else {
        backToTopButton.classList.remove('active');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Formulário de contato
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Aqui você pode adicionar a lógica para enviar o formulário
    // Por exemplo, usando EmailJS, Fetch API, etc.
    
    // Simulação de envio bem-sucedido
    alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
    contactForm.reset();
});

// Animação das barras de habilidades quando a seção é visualizada
const aboutSection = document.getElementById('about');
const skillBars = document.querySelectorAll('.skill-progress span');

function animateSkillBars() {
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 200);
    });
}

// Observador de interseção para animar as barras de habilidades
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(aboutSection);

// Efeito de digitação no título
const heroTitle = document.querySelector('.hero-text h1');
const originalText = heroTitle.textContent;
let charIndex = 0;

function typeEffect() {
    if (charIndex < originalText.length) {
        heroTitle.textContent = originalText.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeEffect, 100);
    }
}

// Inicia o efeito de digitação quando a página carrega
window.addEventListener('load', () => {
    heroTitle.textContent = '';
    setTimeout(typeEffect, 500);
});
