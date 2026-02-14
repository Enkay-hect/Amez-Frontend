<template>
    <NavBar style="height: 10.5rem" class="bg-black">


    </NavBar>

    <div class="seminary-container">

           <!-- Bishop's Administrative Tab -->
           <div >
               <div class="card">
                   <div class="card-header">Bishop's Administrative Assistants</div>
                   <div class="card-body">

                       <h2 class="section-title" style="margin-top: 30px;"></h2>
                          <div class="leadership-grid">
                              <router-link to="/Annual-Conference/Nigeria-Conference">
                                  <div class="leader-card">
                                    <img src="/images/BAAs/drifreke.png" alt="Rev. Dr. Ifreke E. Ekpenyong" class="leader-image">
                                    <h3>Rev. Dr. Ifreke E. Ekpenyong</h3>
                                    <div class="leader-position">Nigeria Conference</div>
                                </div>
                              </router-link>

                             <router-link to="/Annual-Conference/Central-Nigeria-Conference">
                              <div class="leader-card">
                                  <img src="/images/BAAs/dribemere.png" alt="Rev. Dr. Samuel O. Ibemere, SR" class="leader-image">
                                  <h3>Rev. Dr. Samuel O. Ibemere, SR</h3>
                                  <div class="leader-position">Central Nigeria Conference</div>
                              </div>
                             </router-link>

                              <router-link to="/Annual-Conference/Rivers-Nigeria-Conference">
                                <div class="leader-card">
                                    <img src="/images/BAAs/drumorlu.png" alt="Rev. Dr. Umor Olu" class="leader-image">
                                    <h3>Rev. Dr. Umor Olu</h3>
                                    <div class="leader-position">Rivers Nigeria Conference</div>
                                </div>
                              </router-link>

                             <router-link to="/Annual-Conference/LagosWestNigeria-Conference">
                              <div class="leader-card">
                                  <img src="/images/BAAs/drMike11.jpg" alt="Rev. Dr. Michael S. Udoh" class="leader-image">
                                  <h3>Rev. Dr. Michael S. Udoh</h3>
                                  <div class="leader-position">Lagos West Nigeria Conference</div>
                              </div>
                             </router-link>

                              <router-link to="/Annual-Conference/Mainland-Nigeria-Conference">
                                <div class="leader-card">
                                  <img src="/images/BAAs/revAsuamiom.jpg" alt="Rev. Dr. Samuel Asuamiom" class="leader-image">
                                  <h3>Rev. Dr. Samuel Asuamiom</h3>
                                  <div class="leader-position">Mainland Nigeria Conference</div>
                                </div>
                              </router-link>

                              <router-link to="/Annual-Conference/Northern-Nigeria-Conference">
                                <div class="leader-card">
                                  <img src="/images/BAAs/barrekemam.jpg" alt="Rev. Barr. Ozioha V. Ekemam" class="leader-image">
                                  <h3>Rev. Barr. Ozioha V. Ekemam</h3>
                                  <div class="leader-position">Northern Nigeria Conference</div>
                                </div>
                              </router-link>

                             <router-link to="/Annual-Conference/CrossRiver-Conference">
                                <div class="leader-card">
                                    <img src="/images/BAAs/revEkeng1.jpeg" alt="Rev. Ekeng E. Ekeng" class="leader-image">
                                    <h3>Rev. Ekeng E. Ekeng</h3>
                                    <div class="leader-position">Cross River Nigeria Conference</div>
                                </div>
                             </router-link>

                             
                              <router-link to="/Annual-Conference/SouthEastern-Conference">
                                <div class="leader-card">
                                  <img src="/images/BAAs/drndubisi.png" alt="Rev. Dr. Godson N. Elijah" class="leader-image">
                                  <h3>Rev. Dr. Godson N. Elijah</h3>
                                  <div class="leader-position">Southeastern Nigeria Conference</div>
                              </div>
                              </router-link>

                             <router-link to="">
                              <div class="leader-card">
                                  <img src="/images/BAAs/Drekpo.png" alt="Rev. Dr. Donald J. Ekpo" class="leader-image">
                                  <h3>Rev. Dr. Donald J. Ekpo</h3>
                                  <div class="leader-position">Southern Nigeria Conference</div>
                              </div>
                             </router-link>

                             <router-link to="/Annual-Conference/AkwaNigeria-Conference">
                              <div class="leader-card">
                                  <img src="/images/BAAs/profUmoinyang.jpg" alt="Rev.Prof. Imo E. Umoinyang" class="leader-image">
                                  <h3>Rev.Prof. Imo E. Umoinyang</h3>
                                  <div class="leader-position">Akwa Nigeria Conference</div>
                              </div>
                             </router-link>

                             <router-link to="/Annual-Conference/PortHarcourt-Conference">
                              <div class="leader-card">
                                  <img src="/images/BAAs/drclement.png" alt="Rev. Clement Eghuanoye-Graham" class="leader-image">
                                  <h3>Rev. Clement Eghuanoye-Graham</h3>
                                  <div class="leader-position">Port Harcourt Nigeria Conference</div>
                              </div>

                             </router-link>

                          </div>
                   </div>
               </div>
           </div>
       </div>

  </template>

<script setup>
    import NavBar from '../components/NavBar.vue';

    import { ref, onMounted, onUnmounted } from 'vue';

    const isFixed = ref(false);

    const handleScroll = () => {
      isFixed.value = window.scrollY > 100;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });
</script>

<style scoped>
.seminary-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .card {
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            margin-bottom: 30px;
            overflow: hidden;
            transition: transform 0.3s ease;
        }

        .card-header {
            background-color: var(--dark);
            color: white;
            padding: 15px 20px;
            font-size: 1.4rem;
            font-weight: 600;
        }

        .card-body {
            padding: 25px;
        }

        .section-title {
            color: var(--dark);
            border-bottom: 2px solid var(--secondary);
            padding-bottom: 10px;
            margin-bottom: 20px;
            font-family: 'Merriweather', serif;
        }
        .leadership-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 25px;
        }

        .leader-card {
            text-align: center;
            padding: 20px;
            border-radius: 8px;
            background: white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
        }

        .leader-image {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            margin: 0 auto 15px;
            border: 3px solid var(--secondary);
        }

        .leader-card h3 {
            color: var(--dark);
            margin-bottom: 5px;
        }

        .leader-position {
            color: var(--accent);
            font-weight: 600;
            margin-bottom: 10px;
        }

</style>
