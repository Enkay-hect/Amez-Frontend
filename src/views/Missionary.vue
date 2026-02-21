<template>
    <NavBar class="bg-black" style="height: 10.5rem;">

    </NavBar>

    <div class="p-[20px] flex justify-center items-center min-[100vh]" >
      <div class="profile-container">
            <div class="header">
                <div class="profile-header">
                    <h1 class="name-title">Mrs. Promise Effiong</h1>
                    <div class="subtitle">Missionary Supervisor</div>
                    <div class="district-name">Eastern West Africa Episcopal District</div>
                </div>
            </div>

            <div class="profile-content">
                <div class="profile-photo">
                    <div class="photo-container">
                        <div class="photo-placeholder">
                        </div>
                    </div>
                    <div class="photo-caption">"Whatever you do, do it heartily, as to the Lord and not to men."</div>
                </div>

                <div class="profile-details text-justify">
                    <div class="section">
                        <h2 class="section-title"><i class="fas fa-user"></i> Personal Details</h2>
                        <div class="detail-item">
                            <div class="detail-label">Date of Birth:</div>
                            <div class="detail-content">16th January, 1967</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Place of Birth:</div>
                            <div class="detail-content">Enugu State, Nigeria</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Residence:</div>
                            <div class="detail-content">Calabar, Cross River State, Nigeria</div>
                        </div>
                    </div>

                    <div class="section">
                        <h2 class="section-title"><i class="fas fa-graduation-cap"></i> Education</h2>
                        <div class="timeline">
                            <div class="timeline-item">
                                <div class="timeline-year">Early Education</div>
                                <div class="detail-content">
                                    Agwu Town School, Agwu, Enugu State<br>
                                    Prince Memorial High School, Onitsha, Anambra State
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-year">1992</div>
                                <div class="detail-content">
                                    Nigeria Certificate in Education (NCE)<br>
                                    College of Education, Jalingo, Taraba State<br>
                                    Major: Biology and Integrated Science
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-year">2004</div>
                                <div class="detail-content">
                                    Bachelor of Education (B.Ed)<br>
                                    University of Calabar, Calabar, Nigeria<br>
                                    Major: Guidance and Counseling
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section text-justify">
                        <h2 class="section-title"><i class="fas fa-briefcase"></i> Professional Career</h2>
                        <div class="detail-content">
                            <p>Professional teacher registered with the Teachers Registration Council of Nigeria.</p>
                            <p>Teacher and School Counsellor with the State Secondary School Board, Cross River State, Nigeria from 1996 to present.</p>
                            <p>Member of the Nigerian Union of Teachers (NUT) in Nigeria.</p>
                        </div>

                        <div class="badges">
                            <div class="badge"><i class="fas fa-certificate"></i> Certified Teacher</div>
                            <div class="badge"><i class="fas fa-users"></i> NUT Member</div>
                            <div class="badge"><i class="fas fa-graduation-cap"></i> School Counselor</div>
                        </div>
                    </div>

                    <div class="section">
                        <h2 class="section-title"><i class="fas fa-church"></i> Church Service</h2>
                        <div class="detail-content">
                            <p><i>Active member of the African Methodist Episcopal Zion Church with extensive service:</i></p>
                            <ul style="padding-left: 12px; margin-top: 10px; list-style-type: disc;">
                                <li>Sunday school teacher and Superintendent</li>
                                <li>Superintendent of Buds or Promise Secretary of Youth Missionary Society</li>
                                <li>Conference Worker</li>
                                <li>President WH&OMS of Calabar-North District (2009-2015)</li>
                                <li>President of the Minister's Spouses and Widow(ers) Fellowship (2012-2016)</li>
                                <li>Missionary Supervisor, Eastern West Africa Episcopal District (2016)</li>
                            </ul>
                        </div>

                        <div class="detail-item flex-col sm:flex-row" style="margin-top: 15px;">
                            <div class="detail-label">Leadership Roles:</div>
                            <div class="detail-content">
                                <p>Appointed Missionary Supervisor of Eastern West Africa Episcopal District in 2016.</p>
                                <p>In 2022, her responsibilities expanded to include four Annual Conferences in Central Southern Africa Episcopal District (South Africa, Zimbabwe, Malawi, Mozambique).</p>
                                <p>By the 52nd Quadrennial Session of the General Conference, appointed Missionary Supervisor of Eastern West Africa Episcopal District, covering 11 Annual Conferences in Nigeria, Uganda, and Burundi.</p>
                            </div>
                        </div>
                    </div>

                    <div class="section">
                        <h2 class="section-title"><i class="fas fa-heart"></i> Family</h2>
                        <div class="detail-content">
                            <p>Married to Bishop Uduak Usen Effiong, the 105th Bishop in Succession, and Presiding Prelate of the Eastern West Africa Episcopal District.</p>
                            <p>Their union is blessed with four children: John, Samuel, Esther, and Elizabeth.</p>
                        </div>
                    </div>

                    <div class="quote-section">
                        <div class="quote-text">
                            "Whatever you do, do it heartily, as to the Lord and not to men."
                        </div>
                        <div class="quote-reference">Colossians 3:23 (NKJV)</div>
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
    .profile-container {
            max-width: 1000px;
            width: 100%;
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
            display: flex;
            flex-direction: column;
        }

        .header {
            background: linear-gradient(to right, rgb(53, 52, 52), rgb(53, 52, 52));
            color: white;
            padding: 40px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .header::before {
            content: "";
            position: absolute;
            top: -50px;
            left: -50px;
            width: 200px;
            height: 200px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 50%;
        }

        .header::after {
            content: "";
            position: absolute;
            bottom: -80px;
            right: -80px;
            width: 250px;
            height: 250px;
            background: rgba(212, 175, 55, 0.1);
            border-radius: 50%;
        }

        .profile-header {
            position: relative;
            z-index: 2;
        }

        .name-title {
            font-size: 2.8rem;
            margin-bottom: 10px;
            letter-spacing: 1px;
        }

        .subtitle {
            font-size: 1.5rem;
            font-weight: 300;
            opacity: 0.9;
            margin-bottom: 30px;
        }

        .district-name {
            font-size: 1.2rem;
            background: rgba(212, 175, 55, 0.2);
            display: inline-block;
            padding: 8px 25px;
            border-radius: 30px;
            font-weight: 500;
        }

        .profile-content {
            display: flex;
            padding: 40px;
            gap: 40px;
        }

        @media (max-width: 768px) {
            .profile-content {
                flex-direction: column;
            }
        }

        .profile-photo {
            flex: 0 0 300px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .photo-container {
            width: 250px;
            height: 300px;
            background: linear-gradient(45deg, #1a472a, #d4af37);
            border-radius: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .photo-placeholder {
            background: #f0f0f0;
            width: 90%;
            height: 90%;
            background-image: url(/images/Fieldworkerss/supervisorNew.jpeg);
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 5rem;
            color: #888;
        }

        .photo-caption {
            margin-top: 20px;
            text-align: center;
            font-style: italic;
            color: #666;
        }

        .profile-details {
            flex: 1;
        }

        .section {
            margin-bottom: 35px;
        }

        .section-title {
            color: black;
            font-size: 1.6rem;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 2px solid black;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .section-title i {
            color: #d4af37;
        }

        .detail-item {
            margin-bottom: 15px;
            display: flex;
        }

        .detail-label {
            font-weight: 600;
            min-width: 180px;
            color: black;
        }

        .detail-content {
            flex: 1;
            line-height: 1.6;
        }

        .timeline {
            padding-left: 20px;
            border-left: 2px solid #d4af37;
            margin-left: 10px;
        }

        .timeline-item {
            position: relative;
            padding-bottom: 20px;
            padding-left: 20px;
        }

        .timeline-item:last-child {
            padding-bottom: 0;
        }

        .timeline-item::before {
            content: "";
            position: absolute;
            left: -25px;
            top: 8px;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #d4af37;
            border: 2px solid white;
            box-shadow: 0 0 0 2px #d4af37;
        }

        .timeline-year {
            font-weight: 600;
            color: black;
            margin-bottom: 5px;
        }

        .quote-section {
            background: rgba(212, 175, 55, 0.1);
            padding: 30px;
            border-radius: 15px;
            margin-top: 20px;
            position: relative;
            border-left: 4px solid #d4af37;
        }

        .quote-text {
            font-size: 1.3rem;
            font-style: italic;
            color: black;
            line-height: 1.6;
            margin-bottom: 15px;
        }

        .quote-reference {
            text-align: right;
            font-weight: 500;
            color: black;
        }

        .footer {
            padding: 25px;
            text-align: center;
            display: flex;
            justify-content: center;
            gap: 30px;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.1rem;
        }

        .contact-item i {
            color: #d4af37;
            font-size: 1.3rem;
        }

        .badges {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin-top: 20px;
        }

        .badge {
            background: rgba(26, 71, 42, 0.1);
            padding: 8px 20px;
            border-radius: 30px;
            font-size: 0.9rem;
            font-weight: 500;
            color: black;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .badge i {
            color: #d4af37;
        }
  </style>
