<template>
    <NavBar style="height: 10.5rem" class="bg-black">


    </NavBar>

    <div class="seminary-container">

           <!-- Fieldworkers -->
           <div >
               <div class="card">
                   <div class="card-header">Fieldworkers</div>
                   <div class="card-body">

                       <h2 class="section-title" style="margin-top: 30px;"></h2>
                       <div class="leadership-grid">
                           <div class="leader-card">
                               <img src="/images/Fieldworkerss/deacuduakwilliams.png" alt="Deac. Uduak S. Williams" class="leader-image">
                               <h3>Deac. Uduak S. Williams</h3>
                               <div class="leader-position">Nigeria Conference</div>
                           </div>
                           <div class="leader-card">
                               <img src="/images/Fieldworkerss/deaclovelyn.png" alt="Deac. Lovelyn Nwadike" class="leader-image">
                               <h3>Deac. Lovelyn Nwadike</h3>
                               <div class="leader-position">Central Nigeria Conference</div>
                           </div>
                           <div class="leader-card">
                               <img src="/images/Fieldworkerss/deacmanda.png" alt="Deac. Manda Jack" class="leader-image">
                               <h3>Deac. Manda Jack</h3>
                               <div class="leader-position">Rivers Nigeria Conference</div>
                           </div>
                           <div class="leader-card">
                               <img src="/images/Fieldworkerss/deacmfon.png" alt="Deac. Mfon M. Udoh" class="leader-image">
                               <h3>Deac. Mfon M. Udoh</h3>
                               <div class="leader-position">Lagos West Nigeria Conference</div>
                           </div>
                           <div class="leader-card">
                               <img src="/images/Fieldworkerss/deacemem.jpeg" alt="Deac. Emem U. Thompson" class="leader-image">
                               <h3>Deac. Emem U. Thompson</h3>
                               <div class="leader-position">Mainland Nigeria Conference</div>
                           </div>
                           <div class="leader-card">
                               <img src="/images/Fieldworkerss/mrsnse.jpeg" alt="Mrs. Nse E. Amos" class="leader-image">
                               <h3>Mrs. Nse E. Amos</h3>
                               <div class="leader-position">Northern Nigeria Conference</div>
                           </div>
                           <div class="leader-card">
                               <img src="/images/Fieldworkerss/deacuduakekeng.png" alt="Deac. Uduak Ekeng" class="leader-image">
                               <h3>Deac. Uduak Ekeng</h3>
                               <div class="leader-position">Cross River Nigeria Conference</div>
                           </div>
                           <div class="leader-card">
                               <img src="/images/Fieldworkerss/deacconfidence.png" alt="Deac. Confidence Patrick" class="leader-image">
                               <h3>Deac. Confidence Patrick</h3>
                               <div class="leader-position">Southeastern Nigeria Conference</div>
                           </div>
                           <div class="leader-card">
                               <img src="/images/Fieldworkerss/deaceno.png" alt="Deac. Eno I. Udoekpe" class="leader-image">
                               <h3>Deac. Eno I. Udoekpe</h3>
                               <div class="leader-position">Southern Nigeria Conference</div>
                           </div>
                           <div class="leader-card">
                               <img src="/images/Fieldworkerss/mrsnsisong.png" alt="Mrs. Nsisong M. Akpan" class="leader-image">
                               <h3>Mrs. Nsisong M. Akpan</h3>
                               <div class="leader-position">Akwa Nigeria Conference</div>
                           </div>
                           <div class="leader-card">
                               <img src="/images/Fieldworkerss/deacingonimi.png" alt="Deac. Ingonimi E. Moro" class="leader-image">
                               <h3>Deac. Ingonimi E. Moro</h3>
                               <div class="leader-position">Port Harcourt Nigeria Conference</div>
                           </div>

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
