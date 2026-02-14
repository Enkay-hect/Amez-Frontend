<template>
    <NavBar style="height: 10.5rem" class="bg-black">
        
</NavBar>
  
<!-- <div class="mb-24 mt-24">
        <h1 class="text-4xl font-bold text-center mb-2">LAGOS WEST NIGERIA ANNUAL CONFERENCE</h1>
            <h2 class="text-2xl font-semibold text-center mb-10">LIST OF MINISTERS/DISTRICT & STATIONS</h2>
    </div> -->
    
    <!-- Header -->
    <header class="mb-24 mt-24">
        <div class="container">
            <h1 class="logo"><i class="fas fa-church"></i>Northern Nigeria <span>Annual Conference</span></h1>
            <p class="tagline">African Methodist Episcopal Zion Church - Established XXXX</p>
        </div>
    </header>

    <!-- Navigation -->
    <!-- <nav>
  <div class="container nav-container">-->
    
    <!-- Mobile Menu Button -->
    <!-- <button 
      class="mobile-menu-btn"
      @click="toggleMobileMenu"
    >
      <i class="fas fa-bars"></i>
    </button> -->

    <!-- Nav Links -->
    <!-- <ul 
      class="nav-links"
      :class="{ active: isMobileMenuActive }"
    >
      <li><a href="#history" @click="handleNavClick">History</a></li>
      <li><a href="#presiding-elders" @click="handleNavClick">Presiding Elders</a></li>
      <li><a href="#ministers" @click="handleNavClick">Ministers Roll</a></li>
      <li><a href="#gallery" @click="handleNavClick">Gallery</a></li>
    </ul> -->

  <!-- </div> 
</nav> -->


    <!-- Main Content -->
    <main class="container">
        <!-- History & Bishop Assistant Section -->
        <section id="history" class="history-bishop-section">
            <div class="history-content">
                <h3>Conference History</h3>
                <p>XX</p>
                <br>
                <p>XX</p>
                <br>
                <p>XX</p>
                <br>
                <p>XX</p>
                <br>
                <p>XX</p>
                <br>
                <p>XX</p>
                <br>
                <p>XX</p>
                <br>
            </div>
            
            <div class="bishop-assistant">
                <div class="circular-img-frame">
                    <img src="/images/BAAs/barrekemam.jpg" alt="Rev. Barr. Ozioha V. Ekemam">
                </div>
                <h3>Rev. Barr. Ozioha V. Ekemam</h3>
                <div class="title">Bishop's Administrative Assistant</div>
            </div>
        </section>

        <!-- Presiding Elders Section -->
        <section id="presiding-elders" class="presiding-elders-section">
            <h2 class="section-title"><i class="fas fa-users"></i> Presiding Elders</h2>
            <div class="presiding-elders-grid">
                <!-- Elder 1 -->
                <div class="elder-card">
                    <div class="elder-img">
                        <img src="/images/conferences/ANC/nopic.jpeg" alt="">
                    </div>
                    <h3 class="elder-name">-</h3>
                    <div class="elder-role">Presiding Elder</div>
                    <div class="elder-district">-</div>
                </div>

                <!-- Elder 2 -->
                <div class="elder-card">
                    <div class="elder-img">
                        <img src="/images/conferences/ANC/nopic.jpeg" alt="">
                    </div>
                    <h3 class="elder-name">-</h3>
                    <div class="elder-role">Presiding Elder</div>
                    <div class="elder-district">-</div>
                </div>

                <!-- Elder 3 -->
                <div class="elder-card">
                    <div class="elder-img">
                        <img src="/images/conferences/ANC/nopic.jpeg" alt="">
                    </div>
                    <h3 class="elder-name">-</h3>
                    <div class="elder-role">Presiding Elder</div>
                    <div class="elder-district">-</div>
                </div>

                <!-- Elder 4 -->
                <div class="elder-card">
                    <div class="elder-img">
                        <img src="/images/conferences/ANC/nopic.jpeg" alt="">
                    </div>
                    <h3 class="elder-name">-</h3>
                    <div class="elder-role">Presiding Elder</div>
                    <div class="elder-district">-</div>
                </div>
            </div>
        </section>

        <!-- Ministers Roll Section -->
        <section id="ministers" class="ministers-roll-section">
            <h2 class="section-title"><i class="fas fa-list-ol"></i> Ministers Roll & Stations</h2>
            <div class="table-container">
                <table class="ministers-table">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Names of Ministers</th>
                            <th>District</th>
                            <th>Name of Churches & Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td><strong>Rev. Barr. Ozioha V. Ekemam</strong></td>
                            <td>-</td>
                            <td><strong>BISHOP'S ADMINISTRATIVE ASSISTANT</strong></td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td><strong>-</strong></td>
                            <td><strong>-</strong></td>
                            <td><strong>PRESIDING ELDER</strong></td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>4.</td>
                            <td>-</td>
                            <td>-</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>5.</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>6.</td>
                            <td>-</td>
                            <td>-</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>7.</td>
                            <td><strong>-</strong></td>
                            <td><strong>-</strong></td>
                            <td><strong>PRESIDING ELDER</strong></td>
                        </tr>
                        <tr>
                            <td>8.</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>9.</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>10.</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>11.</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>12.</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        
                    </tbody>
                </table>
                <p class="table-note">Note: Supernumerary and retired ministers are listed separately in conference records.</p>
            </div>
        </section>

        <!-- Gallery Section -->
        <section id="gallery" class="gallery-section">
            <h2 class="section-title"><i class="fas fa-camera"></i> Conference Gallery</h2>
            <div class="gallery-grid">
                <!-- Gallery Item 1 -->
                <div class="gallery-item" data-item-id="1">
                    <div class="image-container" :ref="registerContainer">
                        <img src="/images/conferences/ANC/nopic.jpeg" alt="Annual Conference" class="active">
                        <img src="/images/conferences/ANC/nopic.jpeg" alt="Conference Session">
                        <img src="/images/conferences/ANC/nopic.jpeg" alt="Conference Hall">
                    </div>
                    <div class="gallery-overlay">
                        <div class="gallery-title">Annual Conference Session</div>
                        <div class="gallery-category">Leadership Meeting</div>
                        <div class="image-counter">
                            <span class="current-image">1</span>/<span class="total-images">3</span>
                        </div>
                        <div class="gallery-controls">
                            <button class="control-btn prev-btn"><i class="fas fa-chevron-left"></i></button>
                            <button class="control-btn next-btn"><i class="fas fa-chevron-right"></i></button>
                        </div>
                    </div>
                </div>

                <!-- Gallery Item 2 -->
                <div class="gallery-item" data-item-id="2">
                    <div class="image-container" :ref="registerContainer">
                        <img src="/images/conferences/ANC/nopic.jpeg" alt="Church Service" class="active">
                        <img src="/images/conferences/ANC/nopic.jpeg" alt="Church Gathering">
                        <img src="/images/conferences/ANC/nopic.jpeg" alt="Church Interior">
                        <img src="/images/conferences/ANC/nopic.jpeg" alt="Worship Service">
                    </div>
                    <div class="gallery-overlay">
                        <div class="gallery-title">Sunday Worship Service</div>
                        <div class="gallery-category">Worship</div>
                        <div class="image-counter">
                            <span class="current-image">1</span>/<span class="total-images">4</span>
                        </div>
                        <div class="gallery-controls">
                            <button class="control-btn prev-btn"><i class="fas fa-chevron-left"></i></button>
                            <button class="control-btn next-btn"><i class="fas fa-chevron-right"></i></button>
                        </div>
                    </div>
                </div>

                <!-- Gallery Item 3 -->
                <div class="gallery-item" data-item-id="3">
                    <div class="image-container" :ref="registerContainer">
                        <img src="/images/conferences/ANC/nopic.jpeg" alt="Special Program" class="active">
                        <img src="/images/conferences/ANC/nopic.jpeg" alt="Special Program">
                        <img src="/images/conferences/ANC/nopic.jpeg" alt="Special Program">
                        <img src="/images/conferences/ANC/nopic.jpeg" alt="Special Program">
                        <img src="/images/conferences/ANC/nopic.jpeg" alt="Special Program">
                        <img src="/images/conferences/ANC/nopic.jpeg" alt="Special Program">
                    </div>
                    <div class="gallery-overlay">
                        <div class="gallery-title">Special Program</div>
                        <div class="gallery-category">Program</div>
                        <div class="image-counter">
                            <span class="current-image">1</span>/<span class="total-images">3</span>
                        </div>
                        <div class="gallery-controls">
                            <button class="control-btn prev-btn"><i class="fas fa-chevron-left"></i></button>
                            <button class="control-btn next-btn"><i class="fas fa-chevron-right"></i></button>
                        </div>
                    </div>
                </div>

                <!-- Gallery Item 4 -->
                <div class="gallery-item" data-item-id="4">
                    <div class="image-container" :ref="registerContainer">
                        <img src="/images/conferences/ANC/nopic.jpeg" alt="Youth Program" class="active">
                        <img src="/images/conferences/ANC/nopic.jpeg" alt="Youth Activity">
                        <img src="/images/conferences/ANC/nopic.jpeg" alt="Youth Gathering">
                        <img src="/images/conferences/ANC/nopic.jpeg" alt="Youth Event">
                        <img src="/images/conferences/ANC/nopic.jpeg" alt="Youth Meeting">
                    </div>
                    <div class="gallery-overlay">
                        <div class="gallery-title">Youth Ministry Program</div>
                        <div class="gallery-category">Youth</div>
                        <div class="image-counter">
                            <span class="current-image">1</span>/<span class="total-images">5</span>
                        </div>
                        <div class="gallery-controls">
                            <button class="control-btn prev-btn"><i class="fas fa-chevron-left"></i></button>
                            <button class="control-btn next-btn"><i class="fas fa-chevron-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Auto-play controls -->
            <!-- <div class="gallery-global-controls">
                <button id="autoPlayToggle" class="control-btn">
                    <i class="fas fa-pause"></i> Pause Auto-play
                </button>
                <div class="speed-control">
                    <label for="animationSpeed">Animation Speed:</label>
                    <select id="animationSpeed">
                        <option value="5000">Slow (5s)</option>
                        <option value="3000" selected>Normal (3s)</option>
                        <option value="1500">Fast (1.5s)</option>
                    </select>
                </div>
            </div> -->
            <!-- Circular Gallery -->
            <h3 style="margin-top: 50px; margin-bottom: 30px; color: var(--primary); text-align: center;">Conference Lay Leadership</h3>
            <div class="circular-gallery">
                <!-- Circular Item 1 -->
                <div class="circular-gallery-item">
                    <div class="circular-gallery-img">
                        <img src="/images/conferences/ANC/nopic.jpeg" alt="Lay Council President">
                    </div>
                    <div class="circular-gallery-title">-</div>
                    <div>Lay Council President</div>
                </div>

                <!-- Circular Item 2 -->
                <div class="circular-gallery-item">
                    <div class="circular-gallery-img">
                        <img src="/images/conferences/ANC/nopic.jpeg" alt="Fieldworker">
                    </div>
                    <div class="circular-gallery-title">-</div>
                    <div>Field Worker</div>
                </div>

                <!-- Circular Item 3 -->
                <div class="circular-gallery-item">
                    <div class="circular-gallery-img">
                        <img src="/images/conferences/ANC/nopic.jpeg" alt="President, Men of Zion Ministry">
                    </div>
                    <div class="circular-gallery-title">-</div>
                    <div>President, Men of Zion Ministry</div>
                </div>

                <!-- Circular Item 4 -->
                <div class="circular-gallery-item">
                    <div class="circular-gallery-img">
                        <img src="/images/conferences/ANC/nopic.jpeg" alt="Diretor of Youth Council">
                    </div>
                    <div class="circular-gallery-title">-</div>
                    <div>President Youth Fellowship</div>
                </div>
                <!-- Circular Item 5 -->
                <div class="circular-gallery-item">
                    <div class="circular-gallery-img">
                        <img src="/images/conferences/ANC/nopic.jpeg" alt="Diretor of Children Ministry">
                    </div>
                    <div class="circular-gallery-title">-</div>
                    <div>Diretor of Children Ministry</div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>Northern Nigeria Annual Conference</h3>
                    <p>Organized: XXX November, XXX</p>
                    <p>XXX Districts: </p>
                </div>
                
                <div class="footer-column">
                    <h3>Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="#history" @click="handleNavClick">Conference History</a></li>
                        <li><a href="#presiding-elders" @click="handleNavClick">Presiding Elders</a></li>
                        <li><a href="#ministers" @click="handleNavClick">Ministers Roll</a></li>
                        <li><a href="#gallery" @click="handleNavClick">Gallery</a></li>
                    </ul>
                </div>
                
                <div class="footer-column">
                    <h3>Contact Information</h3>
                    <ul class="contact-info">
                        <li><i class="fas fa-map-marker-alt"></i> XXX</li>
                        <li><i class="fas fa-phone"></i> +234 XXX XXXX XXX</li>
                        <li><i class="fas fa-envelope"></i> nnc@amez-ewaed.org</li>
                        <li><i class="fas fa-globe"></i>https://amez-ewaed.org/Annual-Conference/Northern-Nigeria-Conference</li>
                    </ul>
                </div>
            </div>
            
            <!-- <div class="copyright">
                <p>&copy; 2026 Lagos West Nigeria Annual Conference - AME Zion Church. All Rights Reserved.</p>
            </div> -->
        </div>
    </footer>
</template>

<script setup>
  import NavBar from '.././NavBar.vue';
import { ref, onMounted } from 'vue'

// import Footer from @
const isMobileMenuActive = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuActive.value = !isMobileMenuActive.value
}

const closeMobileMenu = () => {
  isMobileMenuActive.value = false
}

const handleAnchorClick = (event) => {
  const href = event.target.getAttribute('href')

  if (!href || !href.startsWith('#') || href === '#') return

  event.preventDefault()

  const targetElement = document.querySelector(href)

  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: 'smooth'
    })
  }
}
import { useGalleryAutoPlay } from '@/jsApi/scriptOne.js';

const { registerContainer } = useGalleryAutoPlay({
    speed: 3000
});

</script>

<style  scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.6;
    color: var(--dark);
    background-color: #f5f7f6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header Styles */
header {
    background: linear-gradient(rgba(26, 71, 42, 0.9), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1544764200-55d0b5dcb6e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80');
    background-size: cover;
    background-position: center;
    color: white;
    padding: 100px 0;
    text-align: center;
}

.logo {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: var(--secondary);
    font-family: 'Playfair Display', serif;
}

.logo i {
    margin-right: 10px;
}

.logo span {
    color: white;
}

.tagline {
    font-size: 1.2rem;
    margin-bottom: 30px;
    opacity: 0.9;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

/* Navigation */
nav {
    background-color: var(--primary);
    padding: 15px 0;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-links {
    display: flex;
    list-style: none;
}

.nav-links li {
    margin-left: 30px;
}

.nav-links a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    transition: all 0.3s ease;
    padding: 5px 10px;
    border-radius: 4px;
}

.nav-links a:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--secondary);
}

.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
}

/* Main Content */
main {
    padding: 60px 0;
}

.section-title {
    font-family: 'Playfair Display', serif;
    font-size: 2.2rem;
    color: var(--primary);
    margin-bottom: 40px;
    padding-bottom: 15px;
    border-bottom: 3px solid var(--secondary);
    position: relative;
}

.section-title i {
    margin-right: 15px;
    color: var(--secondary);
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100px;
    height: 3px;
    background-color: var(--primary);
}

/* History & Bishop Assistant Section */
.history-bishop-section {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    margin-bottom: 60px;
    align-items: flex-start;
}

.history-content {
    flex: 2;
    min-width: 300px;
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.history-content h3 {
    color: var(--primary);
    margin-bottom: 20px;
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
}

.history-content p {
    margin-bottom: 15px;
    font-size: 1.05rem;
    line-height: 1.7;
}

.bishop-assistant { 
    margin-top: 10%;
    flex: 1;
    min-width: 250px;
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    text-align: center;
}

.circular-img-frame {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 20px;
    border: 5px solid var(--secondary);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.circular-img-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.bishop-assistant h3 {
    color: var(--primary);
    margin-bottom: 10px;
    font-family: 'Playfair Display', serif;
}

.bishop-assistant .title {
    color: var(--secondary);
    font-weight: 600;
    margin-bottom: 15px;
    font-size: 1.1rem;
}

.bishop-assistant p {
    font-size: 0.95rem;
    color: var(--gray);
    line-height: 1.6;
}

/* Presiding Elders Section */
.presiding-elders-section {
    margin-bottom: 60px;
}

.presiding-elders-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.elder-card {
    background-color: white;
    border-radius: 10px;
    padding: 25px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.elder-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.elder-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 20px;
    border: 5px solid var(--primary);
}

.elder-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.elder-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    color: var(--primary);
    margin-bottom: 5px;
}

.elder-role {
    color: var(--secondary);
    font-weight: 600;
    margin-bottom: 10px;
}

.elder-district {
    font-size: 1rem;
    color: var(--dark);
    font-weight: 500;
    margin-bottom: 15px;
    padding: 8px 15px;
    background-color: rgba(26, 71, 42, 0.1);
    border-radius: 20px;
    display: inline-block;
}

/* Ministers Roll Section */
.ministers-roll-section {
    margin-bottom: 60px;
}

.ministers-table {
    width: 100%;
    border-collapse: collapse;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.ministers-table thead {
    background-color: var(--primary);
    color: white;
}

.ministers-table th {
    padding: 18px 15px;
    text-align: left;
    font-weight: 600;
    font-size: 1.1rem;
}

.ministers-table tbody tr {
    border-bottom: 1px solid #eee;
    transition: background-color 0.3s ease;
}

.ministers-table tbody tr:hover {
    background-color: rgba(26, 71, 42, 0.05);
}

.ministers-table td {
    padding: 15px;
    font-size: 1rem;
}

.ministers-table td:first-child {
    font-weight: 500;
    color: var(--primary);
}

.table-note {
    margin-top: 15px;
    font-size: 0.9rem;
    color: var(--gray);
    font-style: italic;
}

/* Gallery Section */
.gallery-section {
    margin-bottom: 60px;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 25px;
}

.gallery-item {
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    height: 250px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease;
    cursor: pointer;
}

.gallery-item:hover {
    transform: translateY(-10px);    
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.gallery-item:hover img {
    transform: scale(1.05);
}

.gallery-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    color: white;
    padding: 20px;
    transform: translateY(100%);
    transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
    transform: translateY(0);
}

.gallery-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 5px;
}

.gallery-category {
    font-size: 0.9rem;
    opacity: 0.9;
}

.image-container {
    position: relative;
    width: 100%;
    height: 100%;
}

.image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

.image-container img.active {
    opacity: 1;
}

/* Animations for image transitions */
@keyframes slideInRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideInLeft {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes zoomIn {
    from {
        transform: scale(0.8);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}

/* Apply different animations */
.gallery-item[data-item-id="1"] .image-container img.active {
    animation: fadeIn 0.5s ease-out;
}

.gallery-item[data-item-id="2"] .image-container img.active {
    animation: zoomIn 0.5s ease-out;
}

.gallery-item[data-item-id="3"] .image-container img.active {
    animation: slideInRight 0.5s ease-out;
}

.gallery-item[data-item-id="4"] .image-container img.active {
    animation: slideInLeft 0.5s ease-out;
}

.gallery-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
    color: white;
    padding: 20px;
    transform: translateY(100%);
    transition: transform 0.3s ease;
    backdrop-filter: blur(3px);
}

.gallery-item:hover .gallery-overlay {
    transform: translateY(0);
}

.gallery-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 5px;
    transform: translateY(20px);
    transition: transform 0.3s ease 0.1s;
}

.gallery-category {
    font-size: 0.9rem;
    opacity: 0.9;
    transform: translateY(20px);
    transition: transform 0.3s ease 0.15s;
}

.gallery-item:hover .gallery-title,
.gallery-item:hover .gallery-category {
    transform: translateY(0);
}

.image-counter {
    position: absolute;
    top: 15px;
    right: 15px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 3px 10px;
    border-radius: 12px;
    font-size: 0.8rem;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s ease;
}

.gallery-item:hover .image-counter {
    opacity: 1;
    transform: translateY(0);
}

.gallery-controls {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s ease 0.2s;
}

.gallery-item:hover .gallery-controls {
    opacity: 1;
    transform: translateY(0);
}

.control-btn {
    background: rgba(212, 175, 55, 0.9);
    border: none;
    color: white;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.control-btn:hover {
    background: var(--accent);
    transform: scale(1.1);
}

.gallery-global-controls {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}

#autoPlayToggle {
    background: var(--primary);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
}

#autoPlayToggle:hover {
    background: var(--accent);
    transform: translateY(-2px);
}

.speed-control {
    display: flex;
    align-items: center;
    gap: 10px;
    background: white;
    padding: 8px 15px;
    border-radius: 20px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.speed-control select {
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid var(--gray);
    background: white;
    font-family: 'Montserrat', sans-serif;
}

/* Pulse animation for active gallery item */
@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.4);
    }
    70% {
        box-shadow: 0 0 0 10px rgba(212, 175, 55, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(212, 175, 55, 0);
    }
}

.gallery-item.active-gallery-item {
    animation: pulse 2s infinite;
}

/* Loading animation */
@keyframes shimmer {
    0% {
        background-position: -200% center;
    }
    100% {
        background-position: 200% center;
    }
}

.image-container.loading::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        rgba(255,255,255,0) 0%, 
        rgba(255,255,255,0.2) 50%, 
        rgba(255,255,255,0) 100%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
}

/* Responsive Design */
@media (max-width: 992px) {
    .section-title {
        font-size: 1.8rem;
    }
}

@media (max-width: 768px) {    
    .gallery-grid {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
    
    .gallery-global-controls {
        flex-direction: column;
        gap: 15px;
    }
}

@media (max-width: 576px) {
    .container {
        padding: 0 15px;
    }
    
    .section-title {
        font-size: 1.6rem;
    }
    
    .gallery-grid {
        grid-template-columns: 1fr;
    }
    
    .gallery-item {
        height: 300px;
    }
}

/* Circular Gallery */
.circular-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.circular-gallery-item {
    text-align: center;
}

.circular-gallery-img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 15px;
    border: 5px solid var(--secondary);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.circular-gallery-img:hover {
    transform: scale(1.05);
}

.circular-gallery-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.circular-gallery-title {
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 5px;
}

/* Footer */
footer {
    background-color: var(--primary);
    color: white;
    padding: 60px 0 30px;
}

.footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 40px;
    margin-bottom: 40px;
}

.footer-column {
    flex: 1;
    min-width: 250px;
}

.footer-column h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    margin-bottom: 25px;
    color: var(--secondary);
}

.footer-links {
    list-style: none;
}

.footer-links li {
    margin-bottom: 12px;
}

.footer-links a {
    color: #ddd;
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-links a:hover {
    color: var(--secondary);
}

.contact-info {
    list-style: none;
}

.contact-info li {
    margin-bottom: 15px;
    display: flex;
    align-items: flex-start;
}

.contact-info i {
    margin-right: 15px;
    color: var(--secondary);
    font-size: 1.2rem;
    margin-top: 3px;
}

.copyright {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.9rem;
    opacity: 0.8;
}

/* Responsive Design */
@media (max-width: 992px) {
    .section-title {
        font-size: 1.8rem;
    }
    
    .nav-links {
        display: none;
    }
    
    .mobile-menu-btn {
        display: block;
    }
    
    .nav-links.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: var(--primary);
        padding: 20px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
    
    .nav-links.active li {
        margin: 10px 0;
    }
}

@media (max-width: 768px) {
    header {
        padding: 80px 0;
    }
    
    .logo {
        font-size: 2rem;
    }
    
    .history-bishop-section {
        flex-direction: column;
    }
    
    .history-content, .bishop-assistant {
        flex: 1 1 100%;
    }
    
    .ministers-table {
        display: block;
        overflow-x: auto;
    }
    
    .gallery-grid, .circular-gallery {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
}

@media (max-width: 576px) {
    .container {
        padding: 0 15px;
    }
    
    .section-title {
        font-size: 1.6rem;
    }
    
    .presiding-elders-grid {
        grid-template-columns: 1fr;
    }
    
    .gallery-grid, .circular-gallery {
        grid-template-columns: 1fr;
    }
    
    .circular-img-frame, .elder-img, .circular-gallery-img {
        width: 150px;
        height: 150px;
    }
}
</style>  