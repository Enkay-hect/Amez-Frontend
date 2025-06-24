<template>
    <NavBar style="height: 10.5rem" class="bg-black">

  </NavBar>


  <div class="church-container">
            <!-- Header Section -->
            <div class="header">
                <h1>The African Methodist Episcopal Zion Church</h1>
                <p>Eastern West Africa Episcopal District - Building Kingdom Communities</p>
            </div>

            <!-- Tab Navigation -->
            <div class="tabs">
                <button class="tab-btn" :class="{'active': activeTab === 'about'}" @click="activeTab = 'about'">
                    <i class="fas fa-church"></i> About AMEZ
                </button>
                <button class="tab-btn" :class="{'active': activeTab === 'beliefs'}" @click="activeTab = 'beliefs'">
                    <i class="fas fa-cross"></i> Our Heritage
                </button>
                <button class="tab-btn" :class="{'active': activeTab === 'history'}" @click="activeTab = 'history'">
                    <i class="fas fa-history"></i> History
                </button>
                <button class="tab-btn" :class="{'active': activeTab === 'leadership'}" @click="activeTab = 'leadership'">
                    <i class="fas fa-users"></i> Leadership
                </button>
            </div>

            <!-- About Tab -->
            <div class="tab-content" v-show="activeTab === 'about'">
                <h2 class="section-title"><i class="fas fa-info-circle"></i>Mission statement</h2>

                <div class="content-grid">
                    <div class="content-text">
                        <p>The mission of The African Methodist Episcopal Zion Church is to increase our love for
                            God and to help meet the needs of humankind by "Loving God with all our heart, with all our soul,
                            and with out entire mind, and to love our neighbors as ourselves." Implicit in this statement is the belief
                            that the church should have a positive relationship to humankind horizontally. We also share in the mission of His
                            Son Jesus Christ, in “healing the sick, helping the blind to receive sight, the lame to walk, the leper to
                            be cleansed, the deaf to hear, the dead to be raised, and the poor to have the Good News preached to them.” – Luke 4:18.
                            We actualize this mission by praising God, by being obedient to the demands of the Gospel, by telling the story of God’s gracious
                            acts in creating and redeeming the world, by inviting persons to commit their lives to Jesus Christ, and by serving as ministers of God’s
                            liberating and reconciling grace. Along with its emphasis on ministry and social change here in the United States, the denomination
                            has focused much of its attention and energies on outreach abroad. To date, The A.M.E. Zion Church has member churches on all continents
                            except Australia. In West Africa, in particular, the denomination has set up numerous schools and clinics throughout Ghana and Nigeria.
                            The Church also has facilities in Liberia, though some of its main structures have been destroyed by civil war. Overseas missions are a crucial
                            component of The A.M.E. Zion Church's outreach, but the denomination believes in charity starting at home. That is why, over the years,
                            several individual churches have implemented programs to help families to find low-income housing, jobs, financial planning assistance,
                            health care and day care services. "Our concern is for the whole person," says Bishop Cecil Bishop, the (retired former) senior bishop of the
                            The A.M.E. Zion Church. "We have a holistic approach and a holistic gospel. We don't feel that we live in a kind of compartmentalized sense,
                            but that life is a complete whole. So we have to be concerned about all of those amenities of life that help make up wholeness in an
                            individual." The outward person is important, but the primary focus of The A.M.E. Zion Church remains spirituality and "sharing the good
                            news of the gospel," says the former senior bishop. As we, The A.M.E. Zion Church continues to expand and diversify its ministry, we also are
                            preparing to lead an ever increasing youthful church body into the next century.
                         </p>
                    </div>

                    <div class="content-image">
                        <img src="/images/TheChurch/churchlogo.png" alt="AMEZ Church">
                    </div>
                </div>
            </div>

            <!-- Our Heritage Tab -->
            <div class="tab-content" v-show="activeTab === 'beliefs'">
                <h2 class="section-title"><i class="fas fa-bible"></i> Our Heritage</h2>

                <div class="content-text">
                    <p>Zion Methodism grew out of the merciless enslavement of our African forefathers.
                            They were kidnapped from their native land, chained, shackled, and shipped as beasts in deplorable
                             conditions to a strange and distant land, having no family, no culture and no language. Yet, our fathers and
                             mothers were comforted by the Lord God, through Jesus Christ, in the cotton fields and every place of their humiliation
                             and degradation revealing to them that He would always be with them as He had been with them in the past. When
                              Jesus, upon whom the Spirit of the Lord had descended, was preached at John Street Methodist Church, they united with that fellowship.
                              However, bigotry and oppressively cruel barriers confronted them. The Spirit of the Lord led them in the establishment of Zion Chapel
                              (which later became The Mother Church of Zion Methodism) where the gospel of His redeeming grace could be experienced.
                              Taking with them the doctrines, discipline, and polity of The Methodist Church, they proceeded in the establishment of Zion Methodism.
                              They believed that God had called them out of their bondage and had chosen them to be His people and a channel of His redeeming love
                              for all people. We believe and understand today that, in the Divine Economy, Zion Methodism is to make disciples of all
                              persons throughout the earth, to bring good news to the poor, to proclaim release to the captive, recovery of sight to the blind, to let the
                              oppressed go free and to proclaim the Year of the Lord’s favor. We are to continue this mission until Christ, God’s Son, shall come again.</p>
                </div>

                <div class="beliefs-grid">
                    <div class="belief-card">
                        <h3><i class="fas fa-book-bible"></i> The Bible</h3>
                        <p>We believe the Holy Bible is the inspired Word of God and contains all things necessary for salvation. It is the ultimate authority for Christian faith and practice.</p>
                    </div>

                    <div class="belief-card">
                        <h3><i class="fas fa-cross"></i> Salvation</h3>
                        <p>We believe that salvation is a gift from God through faith in Jesus Christ. It is available to all who repent of their sins and accept Jesus as Lord and Savior.</p>
                    </div>

                    <div class="belief-card">
                        <h3><i class="fas fa-dove"></i> The Holy Spirit</h3>
                        <p>We believe in the present ministry of the Holy Spirit who empowers believers for Christian living and service. The Spirit gives gifts for the edification of the church.</p>
                    </div>

                    <div class="belief-card">
                        <h3><i class="fas fa-church"></i> The Church</h3>
                        <p>We believe the Church is the community of believers who have accepted Jesus Christ. It is the body of Christ on earth, called to worship, fellowship, and service.</p>
                    </div>

                    <div class="belief-card">
                        <h3><i class="fas fa-hand-holding-heart"></i> Social Holiness</h3>
                        <p>We believe that faith must be expressed in action. We are committed to social justice, equality, and serving the needs of the poor, oppressed, and marginalized.</p>
                    </div>

                    <div class="belief-card">
                        <h3><i class="fas fa-water"></i> Sacraments</h3>
                        <p>We recognize two sacraments: Baptism and Holy Communion. Baptism is initiation into the Christian community, and Communion is a memorial of Christ's sacrifice.</p>
                    </div>
                </div>
            </div>

            <!-- History Tab -->
            <div class="tab-content" v-show="activeTab === 'history'">
                <h2 class="section-title"><i class="fas fa-landmark"></i> Our History</h2>

                <div class="content-grid">
                    <div class="content-text">
                        <p>The African Methodist Episcopal Zion Church has a rich history that dates back to the late 18th century. It emerged from the Free African Society, a mutual aid organization established by free blacks in Philadelphia.</p>

                        <p>In 1796, black members of the John Street Methodist Church in New York City left due to discrimination and formed their own church. This became the foundation of the AME Zion Church, which was formally organized in 1821.</p>
                    </div>
                    <div class="content-image">
                        <img src="/images/TheChurch/history.jpeg" alt="AMEZ History">
                    </div>
                </div>

                <div class="history-timeline">
                    <div class="timeline-item">
                        <div class="timeline-year">1796</div>
                        <div class="timeline-content">
                            <p>African American members withdraw from John Street Methodist Church in New York City due to discrimination and form the first Zion Church.</p>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-year">1821</div>
                        <div class="timeline-content">
                            <p>Formal organization of the African Methodist Episcopal Zion Church with six churches represented at the first General Conference.</p>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-year">1848</div>
                        <div class="timeline-content">
                            <p>AME Zion Church sends its first missionaries to Liberia, establishing the church's presence in Africa.</p>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-year">1891</div>
                        <div class="timeline-content">
                            <p>The first AME Zion missionaries arrive in Nigeria, planting churches in Lagos and Calabar.</p>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-year">1986</div>
                        <div class="timeline-content">
                            <p>Bishop Samuel Chuka Ekemam, Sr. is consecrated as Bishop and assigned to the 13th Episcopal District (Nigeria and Liberia).</p>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-year">1993</div>
                        <div class="timeline-content">
                            <p>The Eastern West Africa Episcopal District is established, covering Annual Conferences in Nigeria.</p>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-year">2016</div>
                        <div class="timeline-content">
                            <p>Bishop Uduak Usen Effiong becomes the Presiding Prelate of the Eastern West Africa Episcopal District.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Leadership Tab -->
            <div class="tab-content" v-show="activeTab === 'leadership'">
                <h2 class="section-title"><i class="fas fa-user-alt"></i> Church Leadership</h2>

                <div class="content-text">
                    <p>The AME Zion Church is led by Bishops who are elected for life by the General Conference. Each Bishop oversees an Episcopal District. The Eastern West Africa Episcopal District is currently led by Bishop Uduak Usen Effiong, the 105th Bishop in succession.</p>
                </div>

                <div class="leadership-grid">
                    <div class="leader-card">
                        <img src="/images/TheChurch/bishop-effiong (1).jpg" alt="Bishop Uduak Usen Effiong" class="leader-image">
                        <div class="leader-content">
                            <h3 class="leader-name">Bishop Uduak Usen Effiong</h3>
                            <div class="leader-position">Presiding Prelate</div>
                            <p>The 105th Bishop in succession and leader of the Eastern West Africa Episcopal District since 2016.</p>
                        </div>
                    </div>

                    <div class="leader-card">
                        <img src="/images/TheChurch/supervisor.jpg" alt="Mrs. Promise Effiong" class="leader-image">
                        <div class="leader-content">
                            <h3 class="leader-name">Mrs. Promise C. Effiong</h3>
                            <div class="leader-position">Missionary Supervisor</div>
                            <p>Oversees missionary activities throughout the Episcopal District and coordinates women's ministries.</p>
                        </div>
                    </div>
                    <div class="leader-card">
                        <img src="/images/TheChurch/history.jpeg" alt="Bishop's Administrative Assistants" class="leader-image">
                        <div class="leader-content">
                            <h3 class="leader-name">Bishop Administrative Assistants</h3>
                            <div class="leader-position"></div>
                            <p>Administer and Preside over each Annual Conferences within the Episcopal District in the absence of the Bishop and report to the Bishop.</p>
                        </div>
                    </div>
                    <div class="leader-card">
                        <img src="/images/TheChurch/president.jpeg" alt="Rev. Professor Uduak B. Ubom" class="leader-image">
                        <div class="leader-content">
                            <h3 class="leader-name">Rev. Professor Uduak B. Ubom</h3>
                            <div class="leader-position">President, Hood-Speaks Theological Seminary</div>
                            <p>Leads the premier theological training institution of the Episcopal District.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>











  </template>

  <script setup>
  import NavBar from '../components/NavBar.vue';

  import {ref} from 'vue';

  const activeTab = ref('about');

  </script>

  <style scoped>
  .church-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(history.jpeg);
            background-size: cover;
            background-position: center;
            color: white;
            padding: 80px 20px;
            text-align: center;
            margin-bottom: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .header h1 {
            font-size: 3.5rem;
            margin-bottom: 15px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .header p {
            font-size: 1.3rem;
            max-width: 800px;
            margin: 0 auto;
            opacity: 0.9;
        }

        .tabs {
            display: flex;
            justify-content: center;
            margin-bottom: 30px;
            flex-wrap: wrap;
            gap: 15px;
        }

        .tab-btn {
            background: white;
            border: none;
            padding: 12px 30px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            border-radius: 50px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .tab-btn.active, .tab-btn:hover {
            background: var(--dark);
            color: white;
            transform: translateY(-3px);
        }

        .tab-btn i {
            font-size: 1.2rem;
        }

        .tab-content {
            background: white;
            border-radius: 15px;
            padding: 40px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            margin-bottom: 50px;
        }

        .section-title {
            color: var(--dark);
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 2px solid var(--secondary);
            font-size: 2rem;
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .section-title i {
            color: var(--secondary);
        }

        .content-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
        }

        @media (max-width: 900px) {
            .content-grid {
                grid-template-columns: 1fr;
            }
        }

        .content-text {
            line-height: 1.8;
            color: #555;
        }

        .content-text p {
            margin-bottom: 20px;
        }

        .content-image {
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            height: 100%;
            display: flex;
            align-items: center;
        }

        .content-image img {
            width: 100%;
            height: auto;
            display: block;
        }

        .beliefs-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
            margin-top: 30px;
        }

        .belief-card {
            background: rgba(26, 71, 42, 0.05);
            border-left: 4px solid var(--secondary);
            padding: 25px;
            border-radius: 8px;
            transition: all 0.3s ease;
        }

        .belief-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .belief-card h3 {
            color: var(--dark);
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .belief-card h3 i {
            color: var(--secondary);
        }

        .history-timeline {
            position: relative;
            padding-left: 30px;
            margin-top: 40px;
        }

        .history-timeline::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 2px;
            background: var(--secondary);
        }

        .timeline-item {
            position: relative;
            padding-bottom: 40px;
            padding-left: 30px;
        }

        .timeline-item:last-child {
            padding-bottom: 0;
        }

        .timeline-item::before {
            content: '';
            position: absolute;
            left: -35px;
            top: 8px;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: var(--dark);
            border: 3px solid var(--secondary);
        }

        .timeline-year {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--dark);
            margin-bottom: 10px;
        }

        .timeline-content {
            background: rgba(26, 71, 42, 0.05);
            padding: 20px;
            border-radius: 8px;
        }

        .leadership-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
            margin-top: 30px;
        }

        .leader-card {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            transition: transform 0.3s ease;
        }

        .leader-card:hover {
            transform: translateY(-10px);
        }

        .leader-image {
            height: 250px;
            width: 100%;
            object-fit: cover;
        }

        .leader-content {
            padding: 25px;
        }

        .leader-name {
            color: var(--dark);
            margin-bottom: 5px;
            font-size: 1.4rem;
        }

        .leader-position {
            color: var(--accent);
            font-weight: 600;
            margin-bottom: 15px;
        }

        .ministries-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-top: 30px;
        }

        .ministry-card {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            transition: transform 0.3s ease;
        }

        .ministry-card:hover {
            transform: translateY(-5px);
        }

        .ministry-icon {
            background: var(--dark);
            color: white;
            font-size: 2.5rem;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .ministry-content {
            padding: 25px;
        }

        .ministry-title {
            color: var(--dark);
            margin-bottom: 15px;
            font-size: 1.4rem;
        }

        .footer {
            background: var(--dark);
            color: white;
            padding: 40px 20px;
            border-radius: 15px;
            margin-top: 50px;
            text-align: center;
        }
        .contact-info {
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
            margin-top: 30px;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .contact-item i {
            color: var(--secondary);
        }

        .copyright {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            opacity: 0.7;
        }

        .map-container {
            height: 400px;
            background: #e9ecef;
            border-radius: 12px;
            overflow: hidden;
            margin-top: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--gray);
            font-size: 1.2rem;
            font-weight: 600;
        }
</style>
