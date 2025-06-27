<template class="">
    <NavBar style="height: 10.5rem" class="bg-black">

  </NavBar>

  <!-- <div class="w-full">

    <PaymentForm @payment-success="handlePaymentSuccess">

    </PaymentForm>

  </div> -->


  <div class="donation-container">
            <!-- Header Section -->
            <div class="header">
                <h2>Support Our Mission</h2>
                <p>Your generous donations help us spread the gospel, support communities, and transform lives across Eastern West Africa</p>
            </div>

            <!-- Main Content -->
            <div class="content-grid">
                <!-- Donation Form Section -->
                <div class="donation-form-section">
                    <h2 class="section-title"><i class="fas fa-hand-holding-heart"></i> Make a Donation</h2>

                    <div class="form-group">
                        <label for="fullName">Full Name</label>
                        <input type="text" id="fullName" class="form-control" placeholder="John Doe" v-model="fullName">
                    </div>

                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" class="form-control" placeholder="john.doe@example.com" v-model="email">
                    </div>

                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" class="form-control" placeholder="+234 800 000 0000" v-model="phone">
                    </div>

                    <div class="form-group">
                        <label>Donation Amount</label>
                        <div class="custom-amount">
                            <span>₦</span>
                            <input type="number"
                                   class="form-control amount-input"
                                   placeholder="Enter custom amount"
                                   v-model="customAmount"
                                   @input="setCustomAmount">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Payment Method</label>
                        <div class="payment-methods">
                            <div class="payment-method"
                                 :class="{active: paymentMethod === 'card'}"
                                 @click="paymentMethod = 'card'">
                                <div class="payment-icon">
                                    <i class="fab fa-cc-visa"></i>
                                </div>
                                <div class="payment-details">
                                    <h3>Credit/Debit Card</h3>
                                    <p>Secure online payment</p>
                                </div>
                            </div>
                            <div class="payment-method"
                                 :class="{active: paymentMethod === 'bank'}"
                                 @click="paymentMethod = 'bank'">
                                <div class="payment-icon">
                                    <i class="fas fa-university"></i>
                                </div>
                                <div class="payment-details">
                                    <h3>Bank Transfer</h3>
                                    <p>Local & International</p>
                                </div>
                            </div>
                        </div>

                        <!-- Card Payment Form -->
                        <div class="card-form" v-if="paymentMethod === 'card'">
                            <div class="card-icons">
                                <div class="card-icon"><i class="fab fa-cc-visa"></i></div>
                                <div class="card-icon"><i class="fab fa-cc-mastercard"></i></div>
                                <div class="card-icon"><i class="fab fa-cc-amex"></i></div>
                                <div class="card-icon"><i class="fab fa-cc-discover"></i></div>
                            </div>

                            <div class="form-group">
                                <label for="cardNumber">Card Number</label>
                                <input type="text" id="cardNumber" class="form-control" placeholder="1234 5678 9012 3456" v-model="cardNumber">
                            </div>

                            <div class="form-row">
                                <div class="form-group">
                                    <label for="expiry">Expiry Date</label>
                                    <input type="text" id="expiry" class="form-control" placeholder="MM/YY" v-model="expiry">
                                </div>

                                <div class="form-group">
                                    <label for="cvv">CVV</label>
                                    <input type="text" id="cvv" class="form-control" placeholder="123" v-model="cvv">
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="cardName">Name on Card</label>
                                <input type="text" id="cardName" class="form-control" placeholder="John Doe" v-model="cardName">
                            </div>
                        </div>

                        <!-- Bank Transfer Form -->
                        <div class="bank-transfer-form" v-if="paymentMethod === 'bank'">
                            <div class="international-note">
                                <h4><i class="fas fa-info-circle"></i> Important Information for International Donors</h4>
                                <p>When making an international transfer, please note:</p>
                                <ul>
                                    <li>Include your full name in the transfer reference</li>
                                    <li>Allow 3-5 business days for processing</li>
                                    <li>Bank fees may apply - consider covering these to maximize your donation</li>
                                    <li>Email donations@amez.org with your transfer details</li>
                                    <li>For USD transfers, use our correspondent bank: Citibank New York</li>
                                </ul>
                            </div>
                            <div class="currency-selector">
                                <div class="currency-flag">₦</div>
                                <div><strong>Local Transfer (Naira)</strong></div>
                            </div>


                            <div class="bank-details">
                                <h3><i class="fas fa-landmark"></i> Local Bank Details</h3>
                                <div class="detail-row">
                                    <div class="detail-label">Bank Name:</div>
                                    <div class="detail-value">United Bank for Africa (UBA)</div>
                                </div>
                                <div class="detail-row">
                                    <div class="detail-label">Account Name:</div>
                                    <div class="detail-value">AMEZ Eastern West Africa</div>
                                </div>
                                <div class="detail-row">
                                    <div class="detail-label">Account Number:</div>
                                    <div class="detail-value">1234567890</div>
                                </div>
                                <div class="detail-row">
                                    <div class="detail-label">Sort Code:</div>
                                    <div class="detail-value">033151518</div>
                                </div>
                            </div>

                            <div class="currency-selector">
                                <div class="currency-flag">$</div>
                                <div><strong>International Transfer (USD)</strong></div>
                            </div>

                            <div class="bank-details">
                                <h3><i class="fas fa-globe"></i> International Bank Details</h3>
                                <div class="detail-row">
                                    <div class="detail-label">Bank Name:</div>
                                    <div class="detail-value">United Bank for Africa (UBA)</div>
                                </div>
                                <div class="detail-row">
                                    <div class="detail-label">Account Name:</div>
                                    <div class="detail-value">AMEZ Eastern West Africa</div>
                                </div>
                                <div class="detail-row">
                                    <div class="detail-label">Account Number:</div>
                                    <div class="detail-value">1234567890</div>
                                </div>
                                <div class="detail-row">
                                    <div class="detail-label">SWIFT/BIC Code:</div>
                                    <div class="detail-value">UGAGNGLAXXX</div>
                                </div>
                                <div class="detail-row">
                                    <div class="detail-label">Bank Address:</div>
                                    <div class="detail-value">57 Marina, Lagos Island, Lagos, Nigeria</div>
                                </div>
                                <div class="detail-row">
                                    <div class="detail-label">Correspondent Bank:</div>
                                    <div class="detail-value">Citibank New York (SWIFT: CITIUS33)</div>
                                </div>
                            </div>



                            <div class="form-group">
                                <label for="proof">Upload Transfer Proof (Optional)</label>
                                <input type="file" id="proof" class="form-control">
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="message">Dedication Message (Optional)</label>
                        <textarea id="message" class="form-control" rows="3" placeholder="I'm donating in honor of..." v-model="message"></textarea>
                    </div>

                    <div class="form-group">
                        <button class="btn btn-primary" @click="submitDonation">
                            <i class="fas fa-lock"></i> {{ paymentMethod === 'card' ? 'Donate Securely' : 'Submit Bank Details' }}
                        </button>
                    </div>

                    <div class="secure-note">
                        <i class="fas fa-shield-alt"></i> Your donation is securely processed and protected
                    </div>
                </div>

            </div>

            <div class="footer">
                <p>© 2023 AMEZ Eastern West Africa. All donations are tax-deductible as allowed by law.</p>
                <p>Contact us: donations@amez.org | +234 800 123 4567</p>
            </div>
        </div>
</template>

<script setup>
  import NavBar from '../components/NavBar.vue';

  // import PaymentForm from '../components/PaymentForm.vue';

  // const handlePaymentSuccess = (paymentData) => {
  //   // Handle successful payment
  //   console.log('Payment successful:', paymentData);
  // };

</script>

<style scoped>
.donation-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            background: linear-gradient(    gray, rgba(0, 0, 0, 0.7));
            background-size: cover;
            background-position: center;
            color: white;
            padding: 80px 20px;
            text-align: center;
            margin-bottom: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .header h2 {
            font-size: 2.8rem;
            margin-bottom: 15px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            letter-spacing: 1px;
        }

        .header p {
            font-size: 1.1rem;
            max-width: 800px;
            margin: 0 auto 20px;
            opacity: 0.9;
        }

        .content-grid {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 50px;
            gap: 40px;
        }

        @media (min-width: 900px) {
            .content-grid {
                flex-direction: row;
                align-items: flex-start;
            }
        }

        .donation-form-section {
            background: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            width: 100%;
        }

        .section-title {
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 2px solid var(--primary);
            font-size: 1.8rem;
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--primary);
        }

        .section-title i {
            color: var(--primary);
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
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(26, 71, 42, 0.1);
            outline: none;
        }

        .donation-options {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            margin-bottom: 20px;
        }

        @media (max-width: 600px) {
            .donation-options {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        .donation-option {
            background: white;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            padding: 15px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .donation-option:hover, .donation-option.active {
            border-color: var(--primary);
            background: rgba(26, 71, 42, 0.05);
            transform: translateY(-3px);
        }

        .donation-option.active {
            border-color: var(--primary);
            background: rgba(26, 71, 42, 0.1);
            position: relative;
        }

        .donation-option.active::after {
            content: "\f00c";
            font-family: "Font Awesome 5 Free";
            font-weight: 900;
            position: absolute;
            top: -10px;
            right: -10px;
            background: var(--primary);
            color: white;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
        }

        .donation-option .amount {
            font-size: 1.4rem;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 5px;
        }

        .donation-option .label {
            font-size: 0.9rem;
            color: var(--gray);
        }

        .custom-amount {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 10px;
        }

        .custom-amount span {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--dark);
        }

        .amount-input {
            flex: 1;
        }

        .payment-methods {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-bottom: 25px;
        }

        @media (max-width: 480px) {
            .payment-methods {
                grid-template-columns: 1fr;
            }
        }

        .payment-method {
            background: white;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            padding: 15px;
            display: flex;
            align-items: center;
            gap: 15px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .payment-method:hover, .payment-method.active {
            border-color: var(--primary);
            background: rgba(26, 71, 42, 0.05);
        }

        .payment-method.active {
            border-color: var(--primary);
            background: rgba(26, 71, 42, 0.1);
        }

        .payment-icon {
            font-size: 2rem;
            color: var(--primary);
        }

        .payment-details {
            flex: 1;
        }

        .payment-details h3 {
            font-size: 1.1rem;
            margin-bottom: 5px;
            color: var(--dark);
        }

        .payment-details p {
            font-size: 0.9rem;
            color: var(--gray);
        }

        .card-form {
            background: rgba(26, 71, 42, 0.05);
            padding: 20px;
            border-radius: 8px;
            margin-top: 20px;
        }

        .bank-transfer-form {
            background: var(--light-green);
            padding: 20px;
            border-radius: 8px;
            margin-top: 20px;
        }

        .bank-details {
            margin-bottom: 20px;
            padding: 15px;
            background: white;
            border-radius: 8px;
            border-left: 4px solid var(--primary);
        }

        .bank-details h3 {
            color: var(--primary);
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .bank-details h3 i {
            color: var(--secondary);
        }

        .detail-row {
            display: flex;
            margin-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 1px dashed #eee;
        }

        .detail-label {
            font-weight: 600;
            min-width: 160px;
            color: var(--dark);
        }

        .detail-value {
            flex: 1;
            color: var(--primary);
            font-weight: 500;
        }

        .international-note {
            background: rgba(212, 175, 55, 0.1);
            border-left: 4px solid var(--secondary);
            padding: 15px;
            border-radius: 0 8px 8px 0;
            margin-top: 20px;
        }

        .international-note h4 {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--dark);
            margin-bottom: 10px;
        }

        .international-note ul {
            padding-left: 25px;
            margin-top: 10px;
        }

        .international-note li {
            margin-bottom: 8px;
        }

        .card-icons {
            display: flex;
            gap: 10px;
            margin-bottom: 15px;
        }

        .card-icon {
            width: 50px;
            height: 30px;
            background: white;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            color: #555;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }

        @media (max-width: 480px) {
            .form-row {
                grid-template-columns: 1fr;
            }
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
            background: var(--primary);
            color: white;
            box-shadow: 0 4px 15px rgba(26, 71, 42, 0.3);
        }

        .btn-primary:hover {
            background: #12331f;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(26, 71, 42, 0.4);
        }

        .impact-section {
            background: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            width: 100%;
        }

        .impact-stories {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 25px;
        }

        @media (min-width: 768px) {
            .impact-stories {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        .story-card {
            background: var(--light-green);
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }

        .story-image {
            height: 200px;
            background-size: cover;
            background-position: center;
        }

        .story-content {
            padding: 20px;
        }

        .story-content h3 {
            color: var(--primary);
            margin-bottom: 10px;
        }

        .story-content p {
            color: var(--dark);
            margin-bottom: 15px;
        }

        .quote {
            font-style: italic;
            color: var(--gray);
            border-left: 3px solid var(--secondary);
            padding-left: 15px;
        }

        .footer {
            text-align: center;
            padding: 30px;
            color: var(--gray);
            font-size: 0.9rem;
            border-top: 1px solid #eee;
            margin-top: 40px;
        }

        .secure-note {
            text-align: center;
            color: var(--gray);
            font-size: 0.9rem;
            margin-top: 20px;
            padding: 10px;
            background: rgba(26, 71, 42, 0.05);
            border-radius: 8px;
        }

        .secure-note i {
            color: var(--secondary);
            margin-right: 5px;
        }

        .amount-summary {
            background: rgba(26, 71, 42, 0.05);
            padding: 15px;
            border-radius: 8px;
            margin-top: 20px;
            text-align: center;
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--primary);
        }

        .currency-selector {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 15px;
        }

        .currency-flag {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #eee;
            font-weight: bold;
            font-size: 0.8rem;
        }
</style>
