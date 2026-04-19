<template>
    <NavBar class="bg-black" style="height: 10.5rem;">
      
        
    </NavBar>

     <div class="relative flex flex-col text-white justify-center align-center ">
        <div class=" inset-0 bg-cover bg-center sm:flex flex-col  justify-center align-middle gap-3" style="background-image: url(images/women/img119.jpg); background-color: grey; background-blend-mode: multiply;">
            <h2 class="text-4xl font-extrabold text-center"> </h2>
        </div>
     </div>
  
    <div class="w-[100%] flex flex-row flex-wrap md:flex-nowrap gap-8 h-auto px-8  py-7">
      <!-- <div class="md:w-[50%]">
        <img src="../../public/images/clergy.jpg" alt="" srcset="">
      </div> -->
  
  <!-- Main Content -->
      <div class="container">
        <div class="page-title">
          <h1>Livestream</h1>
          <div class="subhead">Join us online for worship, conferences, and special services</div>
        </div>

        <!-- Current / Next Live -->
        <div class="live-now"><i class="fas fa-circle"></i> LIVE NOW</div>
        <div class="video-wrapper">
          <!-- Replace with your actual YouTube embed or live stream -->
          <iframe src="https://www.youtube.com/embed/NnGmXo71TIs" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>

        <div class="video-info">
          <h2>Sunday Worship Service</h2>
          <div class="next-service"><strong>Next:</strong> Wednesday Prayer @ 6:00 PM WAT</div>
        </div>

        <!-- Upcoming Livestreams -->
        <div class="section-header">
          <h2>Upcoming Livestreams</h2>
          <a href="#" class="view-all">View Full Schedule <i class="fas fa-arrow-right"></i></a>
        </div>

        <div class="cards-grid">
          <!-- Card 1 -->
          <!-- <div class="stream-card">
            <div class="thumbnail" style="background-image: url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80');">
              <div class="play-icon"><i class="fas fa-play"></i></div>
            </div>
            <div class="card-body">
              <h3>WH&OMS Convention, RNC</h3>
              <div class="meta"><i class="fas fa-calendar-alt"></i> April 19, 2026 · 9:30 AM WAT</div>
              <p>Theme: <strong>Leadership and Legacy</strong></p>
              <a href="#" class="btn-outline">Set Reminder</a>
            </div>
          </div> -->

          <!-- Card 2 -->
          <div class="stream-card">
            <div class="thumbnail" style="background-image: url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80');">
              <div class="play-icon"><i class="fas fa-play"></i></div>
            </div>
            <div class="card-body">
              <h3>WH&OMS Convention, PHNC</h3>
              <div class="meta"><i class="fas fa-calendar-alt"></i> May 03, 2026 · 9:30 AM WAT</div>
              <p>Theme: <strong>Leadership and Legacy</strong></p>
              <a href="#" class="btn-outline">Set Reminder</a>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="stream-card">
            <div class="thumbnail" style="background-image: url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80');">
              <div class="play-icon"><i class="fas fa-play"></i></div>
            </div>
            <div class="card-body">
              <h3>WH&OMS Convention, LWNC</h3>
              <div class="meta"><i class="fas fa-calendar-alt"></i> May 17, 2026 · 9:30 AM WAT</div>
              <p>Theme: <strong>Leadership and Legacy</strong></p>
              <a href="#" class="btn-outline">Set Reminder</a>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="stream-card">
            <div class="thumbnail" style="background-image: url('https://images.unsplash.com/photo-1470119693884-47d3a1d1b180?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80');">
              <div class="play-icon"><i class="fas fa-play"></i></div>
            </div>
            <div class="card-body">
              <h3>WH&OMS Convention, SENC</h3>
              <div class="meta"><i class="fas fa-calendar-alt"></i> May 31, 2026 · 9:30 AM WAT</div>
              <p>Theme: <strong>Leadership and Legacy</strong></p>
              <a href="#" class="btn-outline">Set Reminder</a>
            </div>
          </div>
          
          <!-- Card 5 -->
          <div class="stream-card">
            <div class="thumbnail" style="background-image: url('https://images.unsplash.com/photo-1470119693884-47d3a1d1b180?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80');">
              <div class="play-icon"><i class="fas fa-play"></i></div>
            </div>
            <div class="card-body">
              <h3>Hood-Speaks Founder's Day Rally</h3>
              <div class="meta"><i class="fas fa-calendar-alt"></i> June 27, 2026 · 10:00 AM WAT</div>
              <p>Theme: <strong>Being Creative in our Methods</strong></p>
              <a href="#" class="btn-outline">Set Reminder</a>
            </div>
          </div>

        </div>

        <!-- Recent / Past Livestreams -->
        <div class="section-header">
          <h2>Recent Services</h2>
          <a href="#" class="view-all">Watch All <i class="fas fa-arrow-right"></i></a>
        </div>

        <div class="cards-grid">
          <!-- Past Card 1 -->
          <div class="stream-card">
            <div class="thumbnail" style="background-image: url('https://images.unsplash.com/photo-1517457373985-3b2b08b3b7a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80');">
              <div class="play-icon"><i class="fas fa-play"></i></div>
            </div>
            <div class="card-body">
              <h3>District Prayer Summit</h3>
              <div class="meta"><i class="fas fa-calendar-alt"></i> November 22, 2025</div>
              <p>Three hours of prayer and worship.</p>
              <a href="#" class="btn-outline">Replay</a>
            </div>
          </div>

          <!-- Past Card 2 -->
          <div class="stream-card">
            <div class="thumbnail" style="background-image: url('https://images.unsplash.com/photo-1524863479829-916d8e77f114?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80');">
              <div class="play-icon"><i class="fas fa-play"></i></div>
            </div>
            <div class="card-body">
              <h3>Ordination Service</h3>
              <div class="meta"><i class="fas fa-calendar-alt"></i> October 15, 2025</div>
              <p>Ordination of new elders and deacons.</p>
              <a href="#" class="btn-outline">Replay</a>
            </div>
          </div>
        </div>

        <!-- Call to Action: Subscribe to YouTube -->
        <div class="cta-banner">
          <h2>Never Miss a Live Stream</h2>
          <p>Subscribe to our YouTube channel and turn on notifications to get alerts when we go live.</p>
          <a href="#" class="btn"><i class="fab fa-youtube"></i> Subscribe on YouTube</a>
        </div>
      </div>
      </div>

  
  </template>
  
  <script setup>
  import NavBar from '../components/NavBar.vue';

  import { ref, computed } from 'vue';

    // Define the YouTube video ID (Replace 'YOUR_VIDEO_ID' with your actual ID)
    // const props = defineProps({
    //     videoId: {
    //         type: String,
    //         required: true
    //     }
    // });

    const videoId = 'Oc6Fuj1DBWI';

    // Compute the embed URL
    const embedUrl = computed(() => `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&enablejsapi=1`);

    
  </script>


<style scoped>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --primary: #1a472a;
      --secondary: #d4af37;
      --accent: #8b0000;
      --light: #f8f9fa;
      --dark: #333;
      --gray: #6c757d;
      --light-green: #e8f5e9;
      --medium-green: #c8e6c9;
      --transition-speed: 300ms;
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


    /* Page title */
    .page-title {
      text-align: center;
      padding: 40px 0 20px;
    }

    .page-title h1 {
      font-size: 3rem;
      color: var(--primary);
      margin-bottom: 10px;
    }

    .page-title .subhead {
      font-size: 1.2rem;
      color: var(--gray);
      max-width: 700px;
      margin: 0 auto;
    }

    /* Live indicator */
    .live-now {
      background-color: #ff4d4d;
      color: white;
      display: inline-block;
      padding: 4px 12px;
      border-radius: 40px;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 1px;
      margin-bottom: 10px;
    }

    .live-now i {
      margin-right: 5px;
    }

    /* Video player */
    .video-wrapper {
      position: relative;
      width: 100%;
      padding-bottom: 56.25%; /* 16:9 aspect ratio */
      margin: 30px 0 20px;
      background: #000;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }

    .video-wrapper iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
    }

    /* Video info bar */
    .video-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }

    .video-info h2 {
      font-size: 1.8rem;
      color: var(--primary);
    }

    .video-info .next-service {
      background-color: var(--light-green);
      padding: 10px 20px;
      border-radius: 40px;
      font-size: 0.7rem;
      font-weight: 600;
      color: var(--primary);
    }

    /* Section headers */
    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin: 40px 0 20px;
    }

    .section-header h2 {
      font-size: 2rem;
      color: var(--primary);
      position: relative;
      padding-bottom: 5px;
    }

    .section-header h2::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 4px;
      background-color: var(--secondary);
    }

    .view-all {
      color: var(--primary);
      font-weight: 600;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }

    .view-all:hover {
      color: var(--secondary);
    }

    /* Cards grid */
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 30px;
      margin: 30px 0;
    }

    .stream-card {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .stream-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 24px rgba(0,40,0,0.15);
    }

    .stream-card .thumbnail {
      position: relative;
      width: 100%;
      height: 160px;
      background-color: var(--medium-green);
      background-size: cover;
      background-position: center;
    }

    .stream-card .play-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50px;
      height: 50px;
      background-color: rgba(255,255,255,0.8);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary);
      font-size: 1.5rem;
      transition: background-color 0.3s;
    }

    .stream-card:hover .play-icon {
      background-color: var(--secondary);
      color: white;
    }

    .stream-card .card-body {
      padding: 20px;
    }

    .stream-card h3 {
      color: var(--primary);
      margin-bottom: 8px;
      font-size: 1.3rem;
    }

    .stream-card .meta {
      font-size: 0.9rem;
      color: var(--gray);
      margin-bottom: 10px;
    }

    .stream-card .meta i {
      width: 16px;
      color: var(--secondary);
      margin-right: 4px;
    }

    .stream-card p {
      font-size: 0.95rem;
      margin-bottom: 15px;
    }

    .stream-card .btn-outline {
      display: inline-block;
      border: 2px solid var(--primary);
      color: var(--primary);
      padding: 6px 18px;
      border-radius: 40px;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.9rem;
      transition: background-color 0.3s, color 0.3s;
    }

    .stream-card .btn-outline:hover {
      background-color: var(--primary);
      color: white;
    }

    /* CTA banner */
    .cta-banner {
      background: linear-gradient(135deg, var(--primary) 0%, #2a5a3a 100%);
      color: white;
      border-radius: 12px;
      padding: 40px;
      margin: 40px 0;
      text-align: center;
    }

    .cta-banner h2 {
      font-size: 2rem;
      margin-bottom: 15px;
    }

    .cta-banner p {
      max-width: 600px;
      margin: 0 auto 25px;
      font-size: 1.1rem;
      opacity: 0.95;
    }

    .cta-banner .btn {
      display: inline-block;
      background-color: var(--secondary);
      color: var(--dark);
      padding: 12px 32px;
      border-radius: 40px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.1rem;
      transition: background-color 0.3s, transform 0.2s;
    }

    .cta-banner .btn:hover {
      background-color: white;
      transform: scale(1.02);
    }

    .cta-banner .btn i {
      margin-left: 8px;
    }

    /* Footer */
    .site-footer {
      background-color: var(--primary);
      color: white;
      padding: 40px 0 20px;
      margin-top: 60px;
    }

    .footer-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 30px;
    }

    .footer-section {
      flex: 1 1 250px;
    }

    .footer-section h4 {
      color: var(--secondary);
      margin-bottom: 15px;
      font-size: 1.2rem;
    }

    .footer-section p, .footer-section a {
      color: rgba(255,255,255,0.8);
      text-decoration: none;
      display: block;
      margin-bottom: 8px;
    }

    .footer-section a:hover {
      color: var(--secondary);
    }

    .social-links a {
      display: inline-block;
      margin-right: 15px;
      font-size: 1.5rem;
      color: white;
    }

    .social-links a:hover {
      color: var(--secondary);
    }

    .copyright {
      text-align: center;
      padding-top: 30px;
      margin-top: 30px;
      border-top: 1px solid rgba(255,255,255,0.1);
      font-size: 0.9rem;
      color: rgba(255,255,255,0.6);
    }

    /* Responsive */
    @media (max-width: 768px) {
      .page-title h1 {
        font-size: 2.2rem;
      }
      .video-info h2 {
        font-size: 1.5rem;
      }
      .section-header h2{
        font-size: 1.3rem;
      }
      .video-info h2{
        font-size: 1.4rem;
      }
    }

     @media (max-width: 600px) {
      .page-title h1 {
        font-size: 1.6rem;
      }
      .page-title .subhead{
        font-size: 0.7rem;
      }
      .live-now{
        font-size: 0.6rem;
      }
      .video-info h2{
        font-size: 1rem;
      }
      .next-service{
        font-size: 0.6rem;
      }
      .section-header h2{
        font-size: 1.2rem;
      }
      .view-all{
        font-size: 0.6rem;
      }
      .card-body h3{
        font-size: 1rem;
      }
      .cta-banner h2{
        font-size: 1.2rem;
      }
      .cta-banner p{
        font-size: 0.8rem;
      }
    }
</style>
  