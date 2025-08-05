/* style.css */
/* Variáveis de cores */
:root {
    --primary: #2c3e50;
    --secondary: #3498db;
    --accent: #1abc9c;
    --light: #ecf0f1;
    --dark: #34495e;
    --text: #2c3e50;
    --background: #f9f9f9;
    --card-bg: #ffffff;
    --shadow: rgba(0, 0, 0, 0.1);
}

/* Reset e estilos gerais */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: var(--background);
    color: var(--text);
    line-height: 1.6;
    overflow-x: hidden;
    scroll-behavior: smooth;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

section {
    padding: 80px 0;
}

h1, h2, h3, h4 {
    margin-bottom: 20px;
    color: var(--primary);
}

p {
    margin-bottom: 15px;
}

a {
    text-decoration: none;
    color: var(--secondary);
    transition: color 0.3s;
}

a:hover {
    color: var(--accent);
}

.btn {
    display: inline-block;
    padding: 12px 30px;
    background: var(--secondary);
    color: white;
    border-radius: 30px;
    font-weight: 600;
    transition: all 0.3s ease;
    border: 2px solid var(--secondary);
    cursor: pointer;
}

.btn:hover {
    background: transparent;
    color: var(--secondary);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.btn-outline {
    background: transparent;
    color: var(--secondary);
}

.btn-outline:hover {
    background: var(--secondary);
    color: white;
}

.section-title {
    text-align: center;
    margin-bottom: 60px;
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: var(--accent);
    border-radius: 2px;
}

/* Header e Navegação */
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 2px 10px var(--shadow);
    transition: all 0.3s ease;
}

header.scrolled {
    padding: 10px 0;
    background: rgba(255, 255, 255, 0.98);
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
}

.logo {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--primary);
}

.logo span {
    color: var(--secondary);
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-menu li {
    margin-left: 30px;
}

.nav-menu a {
    color: var(--dark);
    font-weight: 600;
    font-size: 1rem;
    position: relative;
}

.nav-menu a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent);
    transition: width 0.3s ease;
}

.nav-menu a:hover::after {
    width: 100%;
}

.hamburger {
    display: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: var(--primary);
}

#hero {
    padding: 180px 0 100px;
    background: linear-gradient(135deg, #2c3e50 0%, #1a2530 100%);
    color: white;
    position: relative;
    overflow: hidden;
}

.hero-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    position: relative;
    z-index: 2;
}

.hero-text {
    flex: 1;
    max-width: 650px;
}

.hero-text h1 {
    font-size: 3.5rem;
    line-height: 1.2;
    margin-bottom: 20px;
    color: white;
}

.hero-text h2 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 30px;
    color: var(--light);
}

.hero-btns {
    display: flex;
    gap: 20px;
    margin-top: 40px;
}

.hero-img {
    flex: 1;
    display: flex;
    justify-content: center;
}

.profile-frame {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    overflow: hidden;
    border: 8px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.profile-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.profile-placeholder {
    font-size: 5rem;
    color: #ccc;
}

.hero-highlight {
    color: var(--accent);
    font-weight: 700;
}

.about-content {
    display: flex;
    gap: 50px;
    align-items: center;
}

.about-text {
    flex: 1;
}

.about-skills {
    flex: 1;
}

.skill-bars {
    margin-top: 30px;
}

.skill-bar {
    margin-bottom: 25px;
}

.skill-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
}

.skill-progress {
    height: 10px;
    background: #e0e0e0;
    border-radius: 5px;
    overflow: hidden;
}

.skill-progress span {
    display: block;
    height: 100%;
    background: var(--accent);
    border-radius: 5px;
    transition: width 1s ease-in-out;
}

#skills {
    background: var(--light);
}

.skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 30px;
}

.skill-card {
    background: var(--card-bg);
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px var(--shadow);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: center;
}

.skill-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.skill-icon {
    font-size: 3rem;
    color: var(--accent);
    margin-bottom: 20px;
}

.skill-card h3 {
    font-size: 1.4rem;
    margin-bottom: 15px;
}

#experience {
    background: white;
}

.timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
}

.timeline::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background: var(--secondary);
    margin-left: -1px;
}

.timeline-item {
    position: relative;
    margin-bottom: 50px;
}

.timeline-content {
    position: relative;
    width: 45%;
    padding: 30px;
    background: var(--card-bg);
    border-radius: 10px;
    box-shadow: 0 5px 20px var(--shadow);
}

.timeline-item:nth-child(odd) .timeline-content {
    left: 0;
}

.timeline-item:nth-child(even) .timeline-content {
    left: 55%;
}

.timeline-date {
    position: absolute;
    top: 15px;
    right: -75px;
    background: var(--secondary);
    color: white;
    padding: 10px 15px;
    border-radius: 30px;
    font-weight: 600;
    text-align: center;
    min-width: 120px;
}

.timeline-item:nth-child(even
