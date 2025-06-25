<template>
      <NavBar style="height: 10.5rem" class="bg-black">

    </NavBar>

    <!-- <div class="relative inset-0 flex flex-col justify-center items-center gap-3 pt-20 bg-black w-[100%]">
        <div class="relative flex flex-col justify-center items-center w-full max-w-screen-lg pt-8">
            <img src="/images/logo1.jpeg" alt="Logo" class="w-full h-auto max-h-[500px] object-contain">
        </div>
     </div> -->


     <div class="seminary-container">
            <!-- Header Section -->
            <div class="header">
                <h1>Hood-Speaks Theological Seminary</h1>
                <p>Ndon Ebom, Uruan, Akwa Ibom State - Training Leaders to Build the Church</p>
            </div>

            <!-- Tab Navigation -->
            <div class="tab-navigation">
                <button v-for="tab in tabs"
                        :key="tab.id"
                        :class="['tab-button', { active: activeTab === tab.id }]"
                        @click="activeTab = tab.id">
                    {{ tab.label }}
                </button>
            </div>

            <!-- About Tab -->
            <div v-show="activeTab === 'about'">
                <div class="card">
                    <div class="card-header">About Hood-Speaks</div>
                    <div class="card-body">
                        <h2 class="section-title">Our History</h2>
                        <div class="history-content">
                            <p>Hood-Speaks Theological Seminary was established through the vision of Bishop Samuel Chuka Ekemam, Sr. Following his consecration as Bishop in 1988 and assignment to the 13th Episcopal District of the A. M. E. Zion Church (later renamed Eastern West Africa Episcopal District), Bishop Ekemam recognized the need for trained ministers and workers for the church's growth.</p>
                            <p>In 1991, a committee chaired by the Late Rev. Dr. Jimmy Johnson Essien applied to the Ministry of Education, Akwa Ibom State for permission to establish the seminary. Approval was granted on July 10, 1992, with the seminary officially opening for classes on October 21, 1991, with five lecturers and twenty-four students.</p>
                            <p>The first Trustee Board was inaugurated on November 6, 1993. Since its inception, Hood-Speaks has been positioned to achieve its core mandate of building leaders to build the Church.</p>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">Philosophy</div>
                    <div class="card-body">
                        <div class="philosophy-grid">
                            <div class="philosophy-item">
                                <h3>Vision</h3>
                                <p>To be the Leading and Excellent institution for training and developing people for ordained and lay ministries of the African Methodist Episcopal Zion Church, other Christian denominations, and for the services of humanity.</p>
                            </div>
                            <div class="philosophy-item">
                                <h3>Mission Statement</h3>
                                <p>To deploy available resources and facilities diligently to train and develop people with high quality standard and discipline for ordained and lay ministries of the African Methodist Episcopal Zion Church, other Christian denominations, and for the service of humanity.</p>
                            </div>
                            <div class="philosophy-item">
                                <h3>Core Values</h3>
                                <div class="core-values">
                                    <span class="value-badge">Accountability</span>
                                    <span class="value-badge">Creativity</span>
                                    <span class="value-badge">Diligence</span>
                                    <span class="value-badge">Discipline</span>
                                    <span class="value-badge">Innovation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">Campus Gallery</div>
                    <div class="card-body">
                        <div class="campus-gallery">
                            <div class="gallery-item">
                                <img src="/newhoodspeak/admin-block.jpeg" alt="Administrative Block">
                                <div class="gallery-caption">Administrative Block</div>
                            </div>
                            <div class="gallery-item">
                                <img src="/newhoodspeak/chapel.jpeg" alt="Dr. Faustina Ekemam Chapel">
                                <div class="gallery-caption">Dr. Faustina Ekemam Chapel</div>
                            </div>
                            <div class="gallery-item">
                                <img src="/newhoodspeak/classroom.jpeg" alt="Classrooms">
                                <div class="gallery-caption">Sample of Classrooms</div>
                            </div>
                            <div class="gallery-item">
                                <img src="/newhoodspeak/farm.jpeg" alt="Hood-Speaks Farms">
                                <div class="gallery-caption">Hood-Speaks Farms</div>
                            </div>
                            <div class="gallery-item">
                                <img src="/newhoodspeak/roll-of-honour.jpg" alt="Hood-Speaks Roll of honour">
                                <div class="gallery-caption">Honour Roll of Fame</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Leadership Tab -->
            <div v-show="activeTab === 'leadership'">
                <div class="card">
                    <div class="card-header">Leadership</div>
                    <div class="card-body">
                        <h2 class="section-title">Board of Trustees</h2>
                        <p><strong>Chairman:</strong> Rt. Rev. Professor Uduak U. Effiong (Prelate of the Eastern West Africa Episcopal District)</p>
                        <p><strong>Members:</strong> 24 members drawn across professional, denominational and community lines</p>
                        <p><strong>Function:</strong> Policy formulation and decision making</p>

                        <h2 class="section-title" style="margin-top: 30px;">Management Committee</h2>
                        <div class="leadership-grid">
                            <div class="leader-card">
                                <img src="/newhoodspeak/president.jpeg" alt="Rev. Professor Uduak B. Ubom" class="leader-image">
                                <h3>Rev. Prof Uduak B. Ubom</h3>
                                <div class="leader-position">President, HSTS</div>
                            </div>
                            <div class="leader-card">
                                <img src="/newhoodspeak/vice-president.jpeg" alt="Rev. Dr. Ndubisi G. Elijah" class="leader-image">
                                <h3>Rev. Dr. Ndubisi G. Elijah</h3>
                                <div class="leader-position">Vice President, HSTS</div>
                            </div>
                            <div class="leader-card">
                                <img src="/newhoodspeak/registrar.jpeg" alt="Rev. Dr. Aniekan E. Akpan" class="leader-image">
                                <h3>Rev. Dr. Aniekan E. Akpan</h3>
                                <div class="leader-position">Registrar, HSTS</div>
                            </div>
                            <div class="leader-card">
                                <img src="/newhoodspeak/bursar.jpeg" alt="Rev. Anwana-Abasi Tommy" class="leader-image">
                                <h3>Rev. Anwana-Abasi Tommy</h3>
                                <div class="leader-position">Bursar, HSTS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Programmes Tab -->
            <div v-show="activeTab === 'programmes'">
                <div class="card">
                    <div class="card-header">Academic Programmes</div>
                    <div class="card-body">
                        <div class="programmes-list">
                            <div class="programme-card">
                                <h3>Diploma in Theology</h3>
                                <div class="programme-detail">
                                    <strong>Duration:</strong> 24 months (Full-time)
                                </div>
                                <div class="programme-detail">
                                    <strong>Requirements:</strong> O'Level with minimum 4 credits including English Language (not more than 2 sittings)
                                </div>
                            </div>

                            <div class="programme-card">
                                <h3>Bachelor of Art in Theology</h3>
                                <div class="programme-detail">
                                    <strong>Duration:</strong> 48 months (Full-time)
                                </div>
                                <div class="programme-detail">
                                    <strong>Requirements:</strong> O'Level with minimum 5 credits including English and 4 relevant subjects (not more than 2 sittings)
                                </div>
                                <div class="programme-detail">
                                    <strong>Advanced Entry:</strong> ND in Theology or related discipline
                                </div>
                            </div>

                            <div class="programme-card">
                                <h3>Postgraduate Diploma in Theology</h3>
                                <div class="programme-detail">
                                    <strong>Duration:</strong> 18 months (Full-time)
                                </div>
                                <div class="programme-detail">
                                    <strong>Requirements:</strong> HND or Bachelor's Degree in any discipline + O'Level requirements
                                </div>
                            </div>

                            <div class="programme-card">
                                <h3>Master of Art in Theology</h3>
                                <div class="programme-detail">
                                    <strong>Duration:</strong> 24 months (Full-time)
                                </div>
                                <div class="programme-detail">
                                    <strong>Requirements:</strong> Bachelor's Degree in Theology or PGD in Theology. HND holders with 5+ years theological experience may be considered.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">Funding Sources</div>
                    <div class="card-body">
                        <ul class="funding-list">
                            <li>Quarterly allocation from the Connectional Budget Office</li>
                            <li>Annual support from the Overseers WH&OMS</li>
                            <li>Annual support from EWAED WH&OMS</li>
                            <li>Income from farm proceeds and fees</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Calendar Tab -->
            <div v-show="activeTab === 'calendar'">
                <div class="card">
                    <div class="card-header">Academic Calendar 2024/2025</div>
                    <div class="card-body">
                        <table class="calendar-table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Event</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="event in academicCalendar" :key="event.date">
                                    <td>{{ event.date }}</td>
                                    <td>{{ event.description }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">Press Release</div>
                    <div class="card-body">
                        <p>This is to inform interested candidates from the AMEZ Church and other denominations that the 2023/2024 academic session of Hood-Speaks Theological Seminary with registration from March 19 - April 5, 2024. However, for postgraduate admissions, sales of forms and admissions are ongoing. This is mainly to accommodate the interest of our members. Please give wider publicity as you encourage potential candidates to take advantage of these.</p>
                    </div>
                </div>
            </div>

            <!-- Student Life Tab -->
            <div v-show="activeTab === 'student'">
                <div class="card">
                    <div class="card-header">Student Services</div>
                    <div class="card-body">
                        <div class="services-grid">
                            <div class="service-item">
                                <div class="service-icon">🏠</div>
                                <h3>Hostel Accommodation</h3>
                            </div>
                            <div class="service-item">
                                <div class="service-icon">💧</div>
                                <h3>Water Supply</h3>
                            </div>
                            <div class="service-item">
                                <div class="service-icon">💡</div>
                                <h3>Constant Electricity</h3>
                            </div>
                            <div class="service-item">
                                <div class="service-icon">⚕️</div>
                                <h3>Healthcare</h3>
                            </div>
                            <div class="service-item">
                                <div class="service-icon">⚽</div>
                                <h3>Sports Facilities</h3>
                            </div>
                            <div class="service-item">
                                <div class="service-icon">💬</div>
                                <h3>Counselling</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">Gallery</div>
                    <div class="card-body">
                        <div class="campus-gallery">
                            <div class="gallery-item">
                                <img src="/newhoodspeak/gallery1.jpeg" alt="Student Chapel Service">
                                <div class="gallery-caption"></div>
                            </div>
                            <div class="gallery-item">
                                <img src="/newhoodspeak/gallery2.jpeg" alt="Classroom Learning">
                                <div class="gallery-caption"></div>
                            </div>
                            <div class="gallery-item">
                                <img src="/newhoodspeak/gallery3.jpeg" alt="Student Activities">
                                <div class="gallery-caption"></div>
                            </div>
                            <div class="gallery-item">
                                <img src="/newhoodspeak/gallery4.jpeg" alt="Community Outreach">
                                <div class="gallery-caption"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    <!-- <div class=" pt-10 pb-10">
        <div class="flex flex-row gap-6 justify-between flex-wrap xl:px-72">
            <button
                @click="current = 'A'"
                :class="{
                'active': current === 'A',
                'tab-button': true
                }"
                >
                About
            </button>
            <button
                @click="current = 'B'"
                :class="{
                'active': current === 'B',
                'tab-button': true
                }"
                >
                Calendar
            </button>
            <button
                @click="current = 'C'"
                :class="{
                'active': current === 'C',
                'tab-button': true
                }"
                >
                Leadership
            </button>
            <button
                @click="current = 'D'"
                :class="{
                'active': current === 'D',
                'tab-button': true
                }"
                >
                Programme
            </button>
            <button
                @click="current = 'E'"
                :class="{
                'active': current === 'E',
                'tab-button': true
                }"
                >
                Student life
            </button>
        </div>



        <div class="mt-8 px-4">
            <component :is="currentComponent" />
        </div>
  </div> -->




    <!-- <div class="p-4">
        <h2 class="text-2xl font-bold text-center mb-4">Hood-Speaks Gallery</h2>
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="(image, index) in images" :key="index" class="relative overflow-hidden">
            <img :src="image" :alt="'Image ' + (index + 1)"
            class="w-full h-56 object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105" />
        </div>
        </div>
    </div> -->

</template>

<script setup>
    import { ref, onMounted, computed } from 'vue';
    import NavBar from '../components/NavBar.vue';


    import About from '../components/HoodspeakComponent/About.vue'
    import Calendar from '../components/HoodspeakComponent/Calendar.vue'
    import Leadership from '../components/HoodspeakComponent/Leadership.vue';
    import Programme from '../components/HoodspeakComponent/Programme.vue';
    import Student_life from '../components/HoodspeakComponent/Student_life.vue';



    // const current = ref('A')


    // const currentComponent = computed(() => {
    // switch (current.value) {
    //     case 'A': return About
    //     case 'B': return Calendar
    //     case 'C': return Leadership
    //     case 'D': return Programme
    //     case 'E': return Student_life
    //     default: return About
    // }
    // })

    const images = ref([
        '/images/hood-speaks/hoodspeak4.jpeg',
        '/images/hood-speaks/hoodspeak2.jpeg',
        '/images/hood-speaks/hoodspeak1.jpeg',
        '/images/hood-speaks/hoodspeak3.jpeg',
        '/images/hood-speaks/hoodspeak6.jpeg',
        '/images/hood-speaks/hoodspeak5.jpeg',
        '/images/hood-speaks/hoodspeak7.jpeg',
        '/images/hood-speaks/hoodspeak8.jpeg',
    ]);


    const activeTab = ref('about')

const tabs = [
  { id: 'about', label: 'About' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'programmes', label: 'Programmes' },
  { id: 'calendar', label: 'Calendar' },
  { id: 'student', label: 'Student Life' }
]

const academicCalendar = [
  { date: "March 31, 2025", description: "Commencement of 1st Semester 2025 session for both undergraduate and Postgraduate Students" },
  { date: "March 31 - April 14, 2025", description: "Registration of all categories of students" },
  { date: "April 7 - July 7, 2025 (12 weeks)", description: "Lectures for all categories of students" },
  { date: "June 27 and 28, 2025", description: "HOOD-SPEAKS Trustees Board Meeting and Founder's Day, respectively" },
  { date: "July 8 - 15, 2025", description: "Revision exercise for 1st Semester 2024/2025 examinations" },
  { date: "July 18 - August 1, 2025", description: "1st Semester 2024/2025 examinations for all students" },
  { date: "August 2 - 9, 2025", description: "1st Semester Break for 2024/2025" },
  { date: "August 10, 2025", description: "Commencement of 2nd semester with Registration for all categories of students" },
  { date: "August 11 - November 14, 2025", description: "Lectures for all categories of students" },
  { date: "November 15 - 22, 2025", description: "Revision for 2nd Semester examinations" },
  { date: "November 24 - December 3, 2025", description: "2nd Semester Examinations for all categories of students" },
  { date: "December 4 - 31, 2025", description: "2nd Semester Break" },
  { date: "January 3 - February 28, 2026", description: "Long vacation and Amnesty Programmes" }
]

</script>

<style scoped>
 .seminary-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
      }

      .header {
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://picsum.photos/1200/400?random=1');
          background-size: cover;
          background-position: center;
          color: white;
          padding: 60px 20px;
          text-align: center;
          margin-bottom: 30px;
          border-radius: 8px;
      }

      .header h1 {
          font-family: 'Merriweather', serif;
          font-size: 2.8rem;
          margin-bottom: 15px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }

      .header p {
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto;
      }

      .card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          margin-bottom: 30px;
          overflow: hidden;
          transition: transform 0.3s ease;
      }

      .card:hover {
          transform: translateY(-5px);
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

      .history-content p {
          margin-bottom: 15px;
          text-align: justify;
      }

      .philosophy-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 20px;
      }

      .philosophy-item {
          background-color: rgba(26, 71, 42, 0.05);
          border-left: 4px solid var(--secondary);
          padding: 20px;
          border-radius: 4px;
      }

      .philosophy-item h3 {
          color: var(--dark);
          margin-bottom: 10px;
      }

      .core-values {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 15px;
      }

      .value-badge {
          background-color: var(--dark);
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.9rem;
      }

      .campus-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin-top: 20px;
      }

      .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          height: 200px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

      .gallery-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 10px;
          font-size: 0.9rem;
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

      .programmes-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
      }

      .programme-card {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 20px;
          background: white;
      }

      .programme-card h3 {
          color: var(--dark);
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 1px solid #eee;
      }

      .programme-detail {
          margin-bottom: 10px;
          display: flex;
      }

      .programme-detail strong {
          min-width: 120px;
          color: var(--dark);
      }

      .calendar-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
      }

      .calendar-table th,
      .calendar-table td {
          padding: 12px 15px;
          text-align: left;
          border-bottom: 1px solid #ddd;
      }

      .calendar-table th {
          background-color: var(--dark);
          color: white;
      }

      .calendar-table tr:nth-child(even) {
          background-color: #f8f9fa;
      }

      .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
      }

      .service-item {
          background: rgba(26, 71, 42, 0.05);
          padding: 20px;
          border-radius: 8px;
          text-align: center;
          transition: all 0.3s ease;
      }

      .service-item:hover {
          background: rgba(26, 71, 42, 0.1);
          transform: translateY(-3px);
      }

      .service-icon {
          font-size: 2rem;
          color: var(--dark);
          margin-bottom: 15px;
      }

      .funding-list {
          list-style-type: none;
          padding-left: 20px;
      }

      .funding-list li {
          margin-bottom: 10px;
          padding-left: 25px;
          position: relative;
      }

      .funding-list li:before {
          content: "•";
          color: var(--secondary);
          font-size: 1.5rem;
          position: absolute;
          left: 0;
          top: -5px;
      }

      .tab-navigation {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-bottom: 25px;
      }

      .tab-button {
          background-color: white;
          border: 1px solid #ddd;
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 30px;
          font-weight: 600;
          transition: all 0.3s ease;
      }

      .tab-button.active, .tab-button:hover {
          background-color: var(--dark);
          color: white;
          border-color: var(--dark);
      }

      @media (max-width: 768px) {
          .header h1 {
              font-size: 2.2rem;
          }

          .header p {
              font-size: 1rem;
          }

          .tab-navigation {
              justify-content: center;
          }

          .tab-button {
              padding: 8px 15px;
              font-size: 0.9rem;
          }

          .calendar-table {
              display: block;
              overflow-x: auto;
          }
      }


.tab-button {
  @apply px-6 py-3 rounded-t-lg font-medium text-gray-700 transition-colors duration-200;
  @apply hover:bg-gray-100 hover:text-gray-900;
}

.tab-button.active {
  @apply bg-white text-blue-600 border-b-2 border-blue-600;
  @apply hover:bg-white hover:text-blue-600;
}

@media (max-width: 768px) {
  .tab-button {
    @apply px-4 py-2 text-sm;
  }
}

</style>
