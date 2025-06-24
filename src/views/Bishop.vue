<template>
    <NavBar style="height: 9.5rem">

    </NavBar>

    <div class="p-[20px] flex justify-center items-center min-[100vh]" >
      <div class="container">
            <header>
                <div class="profile-img">
                </div>
                <h2>Bishop Uduak U. Effiong</h2>
                <h2>Eastern West Africa Episcopal District</h2>
                <div class="badge">
                    <i class="fas fa-church"></i> African Methodist Episcopal Zion Church
                </div>
            </header>

            <div class="content">
                <div class="main-content">
                    <div class="card">
                        <h3>Biography</h3>
                        <p>Bishop Uduak Usen Effiong was born on <span class="highlight">12th October, 1962</span> to the late Rev. Effiong Usen Ekpenyong and the late Mrs. Akon Effiong, of Ikot Eyo Ntung, Ono Ito, Odukpani LGA of Cross River State, Nigeria. Both parents were members of the African Methodist Episcopal Zion Church.</p>
                        <p>Bishop U. U. Effiong, a child of the parsonage, is the last born of the family that produced <span class="highlight">ten ministers</span> for the AME Zion Church, including their late father who retired as Presiding Elder in 1991, a cousin and two daughter in-laws.</p>

                        <div class="education">
                            <h4 style="margin-top: 25px;">Education</h4>
                            <div class="education-item">
                                <p><strong>State School, Elkahia, Port Harcourt</strong> (1970–1975)</p>
                            </div>
                            <div class="education-item">
                                <p><strong>Country Grammar School, Ikwere/Etche, Rivers State</strong> (1975–1980)</p>
                            </div>
                            <div class="education-item">
                                <p><strong>University of Calabar, Calabar</strong> (1980–1984; 1989–1991; 1995–2002)</p>
                                <p class="degree">B.Sc.Ed. (1984)</p>
                                <p class="degree">M.Ed. (1992)</p>
                                <p class="degree">Ph.D. in Science Education (2002)</p>
                            </div>
                            <div class="education-item">
                                <p><strong>Eternity Theological College, Uyo</strong> (2015)</p>
                                <p class="degree">M.A. in Theology (2015)</p>
                                <p>(An affiliate of Teamwork Bible College, USA)</p>
                            </div>
                        </div>
                        <br>
                        <p>Following his salvation experience on <span class="highlight">3rd January, 1988</span>, Bishop U. U. Effiong maintained close
                            relationship with Jesus Christ. In <span class="highlight">December 1994</span>, he was
                            received into the travelling ministry of the African Methodist Episcopal Zion Church by Bishop S. Chuka Ekemann, Sr. at Anderson Memorial A. M. E. Zion Church, Calabar.</p>

                        <h4 style="margin-top: 25px;">Ministry Timeline</h4>
                        <div class="timeline">
                            <div class="timeline-item">
                                <h4>Ordained Deacon</h4>
                                <p>1995</p>
                            </div>
                            <div class="timeline-item">
                                <h4>Ordained Elder</h4>
                                <p>1997</p>
                            </div>
                            <div class="timeline-item">
                                <h4>Assistant Pastor</h4>
                                <p>Anderson Memorial AMEZC, Calabar (1994–1996)</p>
                            </div>
                            <div class="timeline-item">
                                <h4>Pastor</h4>
                                <p>Anderson Memorial AMEZC, Calabar (1996–2008)</p>
                            </div>
                            <div class="timeline-item">
                                <h4>Presiding Elder</h4>
                                <p>Calabar-South District, Cross River Nigeria (1998–2009)</p>
                            </div>
                            <div class="timeline-item">
                                <h4>Presiding Elder</h4>
                                <p>Calabar-North District, Cross River Nigeria (2009–2012)</p>
                            </div>
                            <div class="timeline-item">
                                <h4>Bishop’s Administrative Assistant</h4>
                                <p>Cross River Nigeria Conference, EWAED (2003–2013)</p>
                            </div>
                            <div class="timeline-item">
                                <h4>Bishop’s Deputy</h4>
                                <p>Eastern West Africa Episcopal District (2012-2016)</p>
                            </div>
                            <div class="timeline-item">
                                <h4>Bishop</h4>
                                <p>Eastern West Africa Episcopal District (2016)</p>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <h3>Family & Personal Life</h3>
                        <div class="family-section">
                            <div class="family-img">
                                <i class="fas fa-heart"></i>
                            </div>
                            <div class="family-info">
                                <h4>Married to Mrs. Promise Chinwe Effiong</h4>
                                <p>Missionary Supervisor</p>
                                <p>Blessed with four children: John, Samuel, Esther and Elizabeth</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="sidebar">
                    <div class="card">
                        <h3>Contact Bishop</h3>
                        <form class="contact-form" @submit.prevent="submitForm">
                            <div class="form-group">
                                <label for="name">Your Name</label>
                                <!-- <input type="text" id="name" v-model="form.name" required> -->
                            </div>
                            <div class="form-group">
                                <label for="email">Your Email Address</label>
                                <!-- <input type="email" id="email" v-model="form.email" required> -->
                            </div>
                            <div class="form-group">
                                <label for="phone">Your Phone Number</label>
                                <!-- <input type="tel" id="phone" v-model="form.phone"> -->
                            </div>
                            <div class="form-group">
                                <label for="message">Your Message</label>
                                <!-- <textarea id="message" v-model="form.message" required></textarea> -->
                            </div>
                            <button type="submit" class="btn">
                                <i class="fas fa-paper-plane"></i> Send Message
                            </button>
                        </form>
                    </div>

                    <div class="card">
                        <h3>Information</h3>
                        <div class="info-box">
                            <div class="icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <h4>Location</h4>
                                <p>Eastern West Africa Episcopal District</p>
                            </div>
                        </div>
                        <div class="info-box">
                            <div class="icon">
                                <i class="fas fa-church"></i>
                            </div>
                            <div>
                                <h4>Denomination</h4>
                                <p>African Methodist Episcopal Zion Church</p>
                            </div>
                        </div>
                        <div class="info-box">
                            <div class="icon">
                                <i class="fas fa-user-tie"></i>
                            </div>
                            <div>
                                <h4>Position</h4>
                                <p>Bishop</p>
                            </div>
                        </div>
                        <div class="info-box">
                            <div class="icon">
                                <i class="fas fa-graduation-cap"></i>
                            </div>
                            <div>
                                <h4>Education</h4>
                                <p>Ph.D. in Science Education</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </div>



  </template>

  <script setup>
  import NavBar from '../components/NavBar.vue';
  </script>


<style scoped>
.container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            overflow: hidden;
        }

        header {
            background: linear-gradient(120deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%);
            color: purple;
            padding: 30px 40px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .profile-img {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            border: 5px solid gray;
            object-fit: cover;
            margin: 0 auto 20px;
            background: linear-gradient(45deg, black, black);
            background-image: url(/images/TheBishop/bishop-effiong.jpg);
            background-size: contain;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 70px;
            z-index: 1;
        }

        h1 {
            font-family: 'Playfair Display', serif;
            font-size: 2.8rem;
            font-weight: 700;
            margin-bottom: 5px;
            letter-spacing: 0.5px;
        }

        h2 {
            font-family: 'Playfair Display', serif;
            font-size: 1.8rem;
            font-weight: 500;
            opacity: 0.9;
            margin-bottom: 25px;
        }

        .badge {
            display: inline-block;
            background: rgba(255, 255, 255, 0.15);
            padding: 8px 20px;
            border-radius: 30px;
            font-size: 1.1rem;
            margin-top: 15px;
            backdrop-filter: blur(5px);
        }

        .content {
            display: flex;
            padding: 40px;
            gap: 40px;
        }

        .main-content {
            flex: 3;
        }

        .sidebar {
            flex: 1;
        }

        .card {
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            padding: 30px;
            margin-bottom: 30px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        h3 {
            font-family: 'Playfair Display', serif;
            font-size: 1.8rem;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 2px solid #e2e8f0;
        }

        p {
            margin-bottom: 20px;
            font-size: 1.1rem;
        }

        .highlight {
            background: linear-gradient(120deg, rgba(139, 184, 232, 0.2) 0%, transparent 100%);
            padding: 2px 6px;
            border-radius: 4px;
        }

        .family-section {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-top: 25px;
            padding: 20px;
            background: #f8fafc;
            border-radius: 10px;
            border-left: 4px solid black;
        }

        .family-img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: linear-gradient(45deg, black, black);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 40px;
        }

        .family-info h4 {
            font-family: 'Playfair Display', serif;
            font-size: 1.4rem;
            margin-bottom: 10px;
        }

        .hobbies {
            display: flex;
            gap: 15px;
            margin-top: 15px;
            flex-wrap: wrap;
        }

        .hobby {
            background: #e2e8f0;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .contact-form .form-group {
            margin-bottom: 20px;
        }

        .contact-form label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            color: black;
        }

        .contact-form input,
        .contact-form textarea {
            width: 100%;
            padding: 14px;
            border: 1px solid #cbd5e0;
            border-radius: 8px;
            font-size: 1rem;
            transition: border-color 0.3s, box-shadow 0.3s;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
            outline: none;
            border-color: #4299e1;
            box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
        }

        .contact-form textarea {
            min-height: 150px;
            resize: vertical;
        }

        .btn {
            display: inline-block;
            background: linear-gradient(120deg,black 0%, black 100%);
            color: white;
            padding: 14px 32px;
            border: none;
            border-radius: 8px;
            font-size: 1.1rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px gray;
        }

        .btn i {
            margin-right: 10px;
        }

        .info-box {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 8px;
            background: #f8fafc;
            border-left: 3px solid black;
        }

        .icon {
            width: 50px;
            height: 50px;
            background: linear-gradient(120deg, black 0%, black 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 20px;
        }

        .education-item {
            margin-bottom: 25px;
            padding-bottom: 25px;
            border-bottom: 1px dashed #cbd5e0;
        }

        .education-item:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }

        .education-item h4 {
            font-size: 1.2rem;
            color: #1a3a5f;
            margin-bottom: 8px;
        }

        .education-item p {
            margin-bottom: 5px;
            font-size: 1rem;
        }

        .degree {
            font-weight: 500;
        }

        .timeline {
            position: relative;
            padding-left: 30px;
            margin-top: 30px;
        }

        .timeline::before {
            content: "";
            position: absolute;
            left: 0;
            top: 10px;
            height: calc(100% - 20px);
            width: 3px;
            background: #cbd5e0;
        }

        .timeline-item {
            position: relative;
            margin-bottom: 30px;
            padding-left: 30px;
        }

        .timeline-item::before {
            content: "";
            position: absolute;
            left: -9px;
            top: 5px;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: black;
            border: 3px solid white;
            box-shadow: 0 0 0 2px black;
        }

        .timeline-item h4 {
            font-size: 1.2rem;
            margin-bottom: 5px;
        }

        .timeline-item p {
            margin-bottom: 0;
        }

        @media (max-width: 900px) {
            .content {
                flex-direction: column;
                padding: 25px;
            }

            header {
                padding: 25px 20px;
            }

            h1 {
                font-size: 2.2rem;
            }

            h2 {
                font-size: 1.5rem;
            }
        }

        @media (max-width: 600px) {
            body {
                padding: 10px;
            }

            .card {
                padding: 20px;
            }

            .family-section {
                flex-direction: column;
                text-align: center;
            }

            .hobbies {
                justify-content: center;
            }
        }
</style>
