<template>
   <NavBar style="height: 10.5rem" class="bg-black">

  </NavBar>
  <div class="contact-container">
            <!-- Header Section -->
            <div class="header">
                <h1>Contact Us</h1>
                <p>Get in touch with the African Methodist Episcopal Zion Church - Eastern West Africa Episcopal District</p>
            </div>

            <!-- Main Content -->
            <div class="content-grid">
                <!-- Contact Information -->
                <div class="contact-info-section">
                    <h2 class="section-title"><i class="fas fa-info-circle"></i> Contact Information</h2>

                    <div class="contact-methods">
                        <div class="contact-card">
                            <div class="contact-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="contact-details">
                                <h3>Headquarters Address</h3>
                                <p>African Methodist Episcopal Zion Church</p>
                                <p>Eastern West Africa Episcopal District</p>
                                <p>Calabar, Cross River State</p>
                                <p>Nigeria</p>
                            </div>
                        </div>

                        <div class="contact-card">
                            <div class="contact-icon">
                                <i class="fas fa-phone-alt"></i>
                            </div>
                            <div class="contact-details">
                                <h3>Phone & Fax</h3>
                                <p><a href="tel:+2348000000000">+234 800 000 0000</a> (Main Office)</p>
                                <p><a href="tel:+2348000000001">+234 800 000 0001</a> (Administration)</p>
                                <p>Fax: +234 800 000 0002</p>
                            </div>
                        </div>

                        <div class="contact-card">
                            <div class="contact-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="contact-details">
                                <h3>Email Addresses</h3>
                                <p><a href="mailto:info@amez-ewaed.org">info@amez-ewaed.org</a> (General Inquiries)</p>
                                <p><a href="mailto:communications@amez-ewaed.org">communications@amez-ewaed.org</a> (Media)</p>
                                <p><a href="mailto:events@amez-ewaed.org">events@amez-ewaed.org</a> (Event Coordination)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="contact-form-section">
                    <h2 class="section-title"><i class="fas fa-paper-plane"></i> Send Us a Message</h2>

                    <form>
                        <div class="form-group">
                            <label for="name">Full Name</label>
                            <input type="text" id="name" class="form-control" placeholder="Your name">
                        </div>

                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" class="form-control" placeholder="your.email@example.com">
                        </div>

                        <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="tel" id="phone" class="form-control" placeholder="+234 800 000 0000">
                        </div>

                        <div class="form-group">
                            <label for="subject">Subject</label>
                            <select id="subject" class="form-control">
                                <option value="">Select a subject</option>
                                <option value="general">General Inquiry</option>
                                <option value="prayer">Prayer Request</option>
                                <option value="membership">Church Membership</option>
                                <option value="events">Event Information</option>
                                <option value="donations">Donations</option>
                                <option value="media">Media Inquiry</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="message">Your Message</label>
                            <textarea id="message" class="form-control" placeholder="Type your message here..."></textarea>
                        </div>

                        <button class="btn btn-primary">
                            <i class="fas fa-paper-plane"></i> Send Message
                        </button>
                    </form>
                </div>
            </div>

            <!-- Leadership Contact -->
            <div class="leadership-section">
                <h2 class="section-title"><i class="fas fa-user-alt"></i> Leadership Contacts</h2>

                <p>For specific matters, you may contact our episcopal leadership directly:</p>

                <div class="leadership-grid">
                    <div class="leader-card">
                        <img src="/images/contact/bishop-effiong (1).jpg" alt="Bishop Uduak Usen Effiong" class="leader-image">
                        <div class="leader-content">
                            <h3 class="leader-name">Bishop Uduak Usen Effiong</h3>
                            <div class="leader-position">Presiding Prelate</div>
                            <div class="leader-contact">
                                <div class="contact-item">
                                    <i class="fas fa-envelope"></i>
                                    <a href="mailto:bishop@amez-ewaed.org">bishop@amez-ewaed.org</a>
                                </div>
                                <div class="contact-item">
                                    <i class="fas fa-phone"></i>
                                    <a href="tel:+2348000000010">+234 800 000 0010</a>
                                </div>
                                <div class="contact-item">
                                    <i class="fas fa-clock"></i>
                                    <span>By appointment only</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="leader-card">
                        <img src="/images/contact/supervisor.jpg" alt="Mrs. Promise Effiong" class="leader-image">
                        <div class="leader-content">
                            <h3 class="leader-name">Mrs. Promise C. Effiong</h3>
                            <div class="leader-position">Missionary Supervisor</div>
                            <div class="leader-contact">
                                <div class="contact-item">
                                    <i class="fas fa-envelope"></i>
                                    <a href="mailto:missions@amez-ewaed.org">missionarysupervisor@amez-ewaed.org</a>
                                </div>
                                <div class="contact-item">
                                    <i class="fas fa-phone"></i>
                                    <a href="tel:+2348000000011">+234 800 000 0011</a>
                                </div>
                                <div class="contact-item">
                                    <i class="fas fa-clock"></i>
                                    <span>By appointment only</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Map Section -->
            <div class="map-section">
                <h2 class="section-title"><i class="fas fa-map-marked-alt"></i> Our Location</h2>

                <p>The Eastern West Africa Episcopal District headquarters is located in Calabar, Cross River State, Nigeria:</p>

                <div class="map-container">
                    <i class="fas fa-map-marker-alt" style="font-size: 3rem; margin-right: 15px;"></i>
                    AMEZ Eastern West Africa Episcopal District Headquarters, Calabar
                </div>

                <div class="directions">
                    <h3 style="color: var(--dark); margin: 25px 0 15px;">Directions</h3>
                    <p>From Calabar International Airport: Take the Airport Road to Marian Road. Turn left onto Eta Agbo Road. The headquarters is located on the right side, opposite the State Library.</p>

                    <h3 style="color: var(--dark); margin: 25px 0 15px;">Parking Information</h3>
                    <p>Visitor parking is available on the premises. Additional parking can be found at the adjacent public parking lot on weekends and during special events.</p>
                </div>
            </div>

            <!-- Footer -->
            <!--<div class="footer">
                <div class="footer-content">
                    <h3>Connect With Us</h3>
                    <p>Stay updated with our latest news, events, and spiritual messages through our social media channels</p>

                    <div class="social-links">
                        <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-youtube"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>
                    </div>

                    <div class="contact-info">
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <span>info@amez-ewaed.org</span>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <span>+234 800 000 0000</span>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Calabar, Cross River State, Nigeria</span>
                        </div>
                    </div>

                    <div class="copyright">
                        © 2023 African Methodist Episcopal Zion Church - Eastern West Africa Episcopal District. All Rights Reserved.
                    </div>
                </div>
            </div> -->
        </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';

</script>

<style scoped>
.contact-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://picsum.photos/1200/400?random=1');
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
            font-size: 3.2rem;
            margin-bottom: 15px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .header p {
            font-size: 1.3rem;
            max-width: 800px;
            margin: 0 auto;
            opacity: 0.9;
        }

        .content-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-bottom: 50px;
        }

        @media (max-width: 900px) {
            .content-grid {
                grid-template-columns: 1fr;
            }
        }

        .contact-info-section {
            background: white;
            border-radius: 15px;
            padding: 40px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .section-title {
            color: var(--dark);
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 2px solid var(--secondary);
            font-size: 1.8rem;
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .section-title i {
            color: var(--secondary);
        }

        .contact-methods {
            display: grid;
            grid-template-columns: 1fr;
            gap: 25px;
        }

        .contact-card {
            display: flex;
            align-items: flex-start;
            gap: 20px;
            padding: 20px;
            border-radius: 12px;
            background: rgba(26, 71, 42, 0.05);
            transition: all 0.3s ease;
        }

        .contact-card:hover {
            background: rgba(26, 71, 42, 0.1);
            transform: translateY(-5px);
        }

        .contact-icon {
            background: var(--dark);
            color: white;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
        }

        .contact-details h3 {
            color: var(--dark);
            margin-bottom: 10px;
            font-size: 1.4rem;
        }

        .contact-details p {
            color: #555;
            margin-bottom: 5px;
        }

        .contact-details a {
            color: var(--dark);
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .contact-details a:hover {
            color: #12331f;
            text-decoration: underline;
        }

        .contact-form-section {
            background: white;
            border-radius: 15px;
            padding: 40px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .form-group {
            margin-bottom: 25px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: var(--dark);
        }

        .form-control {
            width: 100%;
            padding: 14px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 1rem;
            transition: all 0.3s ease;
        }

        .form-control:focus {
            border-color: var(--dark);
            box-shadow: 0 0 0 3px rgba(26, 71, 42, 0.1);
            outline: none;
        }

        textarea.form-control {
            min-height: 150px;
            resize: vertical;
        }

        .btn {
            display: block;
            width: 100%;
            padding: 16px;
            border: none;
            border-radius: 8px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: center;
        }

        .btn-primary {
            background: var(--dark);
            color: white;
            box-shadow: 0 4px 15px rgba(26, 71, 42, 0.3);
        }

        .btn-primary:hover {
            background: #12331f;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(26, 71, 42, 0.4);
        }

        .leadership-section {
            background: white;
            border-radius: 15px;
            padding: 40px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            margin-bottom: 50px;
        }

        .leadership-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
            text-align: center;
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

        .leader-contact {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 15px;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #555;
        }

        .contact-item i {
            color: var(--secondary);
        }

        .map-section {
            background: white;
            border-radius: 15px;
            padding: 40px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            margin-bottom: 50px;
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

        .office-hours {
            background: rgba(26, 71, 42, 0.05);
            padding: 25px;
            border-radius: 12px;
            margin-top: 30px;
        }

        .hours-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-top: 20px;
        }

        @media (max-width: 600px) {
            .hours-grid {
                grid-template-columns: 1fr;
            }
        }

        .hours-card {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
        }

        .hours-card h4 {
            color: var(--dark);
            margin-bottom: 15px;
            font-size: 1.2rem;
        }

        .hours-list {
            list-style: none;
        }

        .hours-list li {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid #eee;
        }

        .hours-list li:last-child {
            border-bottom: none;
        }

        .footer {
            background: var(--dark);
            color: white;
            padding: 40px 20px;
            border-radius: 15px;
            text-align: center;
        }

        .footer-content {
            max-width: 800px;
            margin: 0 auto;
        }

        .footer h3 {
            font-size: 1.8rem;
            margin-bottom: 20px;
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 30px 0;
        }

        .social-link {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            color: white;
            transition: all 0.3s ease;
        }

        .social-link:hover {
            background: var(--secondary);
            transform: translateY(-5px);
        }

        .copyright {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            opacity: 0.7;
        }

</style>
