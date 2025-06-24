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
                        <input type="text" id="fullName" class="form-control" placeholder="John Doe">
                    </div>

                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" class="form-control" placeholder="john.doe@example.com">
                    </div>

                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" class="form-control" placeholder="+234 800 000 0000">
                    </div>

                    <div class="form-group">
                        <label>Donation Type</label>
                        <div class="donation-options">
                            <div class="donation-option active">
                                <div class="amount">₦5,000</div>
                                <div class="label">Basic Support</div>
                            </div>
                            <div class="donation-option">
                                <div class="amount">₦10,000</div>
                                <div class="label">Regular Gift</div>
                            </div>
                            <div class="donation-option">
                                <div class="amount">₦25,000</div>
                                <div class="label">Generous Donor</div>
                            </div>
                            <div class="donation-option">
                                <div class="amount">₦50,000</div>
                                <div class="label">Ministry Partner</div>
                            </div>
                            <div class="donation-option">
                                <div class="amount">₦100,000</div>
                                <div class="label">Kingdom Builder</div>
                            </div>
                            <div class="donation-option">
                                <div class="amount">Other</div>
                                <div class="label">Custom Amount</div>
                            </div>
                        </div>

                        <div class="custom-amount">
                            <span>₦</span>
                            <input type="number" class="form-control" placeholder="Enter custom amount">
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Payment Method</label>
                        <div class="payment-methods">
                            <div class="payment-method active">
                                <div class="payment-icon">
                                    <i class="fab fa-cc-visa"></i>
                                </div>
                                <div class="payment-details">
                                    <h3>Credit/Debit Card</h3>
                                    <p>Secure online payment</p>
                                </div>
                            </div>
                            <div class="payment-method">
                                <div class="payment-icon">
                                    <i class="fas fa-university"></i>
                                </div>
                                <div class="payment-details">
                                    <h3>Bank Transfer</h3>
                                    <p>Direct to our account</p>
                                </div>
                            </div>
                        </div>

                        <div class="card-form">
                            <div class="card-icons">
                                <div class="card-icon"><i class="fab fa-cc-visa"></i></div>
                                <div class="card-icon"><i class="fab fa-cc-mastercard"></i></div>
                                <div class="card-icon"><i class="fab fa-cc-amex"></i></div>
                            </div>

                            <div class="form-group">
                                <label for="cardNumber">Card Number</label>
                                <input type="text" id="cardNumber" class="form-control" placeholder="1234 5678 9012 3456">
                            </div>

                            <div class="form-row">
                                <div class="form-group">
                                    <label for="expiry">Expiry Date</label>
                                    <input type="text" id="expiry" class="form-control" placeholder="MM/YY">
                                </div>

                                <div class="form-group">
                                    <label for="cvv">CVV</label>
                                    <input type="text" id="cvv" class="form-control" placeholder="123">
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="cardName">Name on Card</label>
                                <input type="text" id="cardName" class="form-control" placeholder="John Doe">
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="message">Dedication Message (Optional)</label>
                        <textarea id="message" class="form-control" rows="3" placeholder="I'm donating in honor of..."></textarea>
                    </div>

                    <div class="form-group">
                        <button class="btn btn-primary">
                            <i class="fas fa-lock"></i> Donate Securely
                        </button>
                    </div>

                    <p style="text-align: center; color: var(--gray); font-size: 0.9rem;">
                        <i class="fas fa-shield-alt"></i> Your donation is securely processed and protected
                    </p>
                </div>
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
            background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
            background-size: cover;
            background-position: center;
            color: white;
            padding: 80px 20px;
            text-align: center;
            margin-bottom: 20px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .header h2 {
            font-size: 2.5rem;
            margin-bottom: 15px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .header p {
            font-size: 1.0rem;
            max-width: 800px;
            margin: 0 auto;
            opacity: 0.9;
        }

        .content-grid {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 50px;
        }

        @media (max-width: 900px) {
            .content-grid {
                grid-template-columns: 1fr;
            }
        }

        .donation-form-section {
            background: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .section-title {
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 2px solid black;
            font-size: 1.8rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .section-title i {
            color: black;
        }

        .form-group {
            margin-bottom: 25px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
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
            color: black;
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
        }

        .custom-amount span {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--dark);
        }

        .payment-methods {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-bottom: 25px;
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
        }

        .impact-stories {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
        }


</style>
