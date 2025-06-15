<template>
    <div class="payment-form">
      <!-- <h2>Pay with</h2>
      
      <div class="payment-methods">
        <label class="payment-method">
          <input 
            type="radio" 
            name="paymentMethod" 
            v-model="paymentMethod" 
            value="card" 
            checked
          />
          <span>Credit or debit card</span>
          <div class="card-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visa/visa-original.svg" alt="VISA" width="40">
          </div>
        </label>
      </div> -->
  
      <div v-if="paymentMethod === 'card'" class="card-form">
        <div class="form-group">
          <label for="cardholderName">Cardholder name *</label>
          <input 
            type="text" 
            id="cardholderName" 
            v-model="cardDetails.name" 
            placeholder="Enter cardholder full name" 
            required
          />
        </div>
  
        <div class="form-group">
          <label for="cardNumber">Card number *</label>
          <input 
            type="text" 
            id="cardNumber" 
            v-model="cardDetails.number" 
            placeholder="e.g. 4444 2222 4444 2222" 
            required
            @input="formatCardNumber"
          />
        </div>
  
        <div class="form-row">
          <div class="form-group">
            <label for="expiryDate">Expiration date *</label>
            <input 
              type="text" 
              id="expiryDate" 
              v-model="cardDetails.expiry" 
              placeholder="e.g. 12/22" 
              required
              @input="formatExpiryDate"
            />
          </div>
  
          <div class="form-group">
            <label for="cvv">Security code *</label>
            <input 
              type="text" 
              id="cvv" 
              v-model="cardDetails.cvv" 
              placeholder="e.g. 678" 
              required
              maxlength="3"
            />
          </div>
        </div>

        <div class="form-group">
          <label for="amount">Amount *</label>
          <input 
            type="text" 
            id="amount" 
            v-model="cardDetails.amount" 
            placeholder="e.g. 1234567890" 
            required
            @input="formatCardNumber"
          />
        </div>
      </div>
  
      <!-- <div class="billing-details">
        <h3>Billing details</h3>
  
        <div class="form-group">
          <label for="company">Company *</label>
          <input 
            type="text" 
            id="company" 
            v-model="billingDetails.company" 
            required
          />
        </div>
  
        <div class="form-group">
          <label for="einvoice">E-Invoice *</label>
          <input 
            type="email" 
            id="einvoice" 
            v-model="billingDetails.einvoice" 
            required
          />
        </div>
  
        <div class="form-row">
          <div class="form-group">
            <label for="street">Street *</label>
            <input 
              type="text" 
              id="street" 
              v-model="billingDetails.street" 
              required
            />
          </div>
  
          <div class="form-group">
            <label for="streetNumber">No *</label>
            <input 
              type="text" 
              id="streetNumber" 
              v-model="billingDetails.streetNumber" 
              required
            />
          </div>
        </div>
  
        <div class="form-row">
          <div class="form-group">
            <label for="city">City *</label>
            <input 
              type="text" 
              id="city" 
              v-model="billingDetails.city" 
              required
            />
          </div>
  
          <div class="form-group">
            <label for="postalCode">Postal code *</label>
            <input 
              type="text" 
              id="postalCode" 
              v-model="billingDetails.postalCode" 
              required
            />
          </div>
        </div>
  
        <div class="form-group">
          <label for="country">Country *</label>
          <select 
            id="country" 
            v-model="billingDetails.country" 
            required
          >
            <option value="" disabled>Select country</option>
            <option v-for="country in countries" :key="country.code" :value="country.code">
              {{ country.name }}
            </option>
          </select>
        </div>
      </div> -->
  
      <button class="submit-button" @click="submitForm" :disabled="isProcessing">
        {{ isProcessing ? 'Processing...' : 'Confirm and pay' }}
      </button>
  
      <!-- <div class="stripe-branding">
        <span>Powered by</span>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg" alt="Stripe" width="60">
      </div> -->
    </div>

  </template>
  
<script setup>

        import { ref, reactive } from 'vue';
        import axios from 'axios';

        const paymentMethod = ref('card');
        const isProcessing = ref(false);
        const formErrors = ref({});

        const cardDetails = reactive({
          name: '',
          number: '',
          expiry: '',
          cvv: '',
          amount: ''
        });

        // const billingDetails = reactive({
        //   company: '',
        //   einvoice: '',
        //   street: '',
        //   streetNumber: '',
        //   city: '',
        //   postalCode: '',
        //   country: ''
        // });

        const countries = [
          { code: 'US', name: 'United States' },
          { code: 'GB', name: 'United Kingdom' },
          // ... other countries
        ];

        const formatCardNumber = () => {
        cardDetails.number = cardDetails.number
            .replace(/\s/g, '')
            .replace(/(\d{4})/g, '$1 ')
            .trim();
        };

        const formatExpiryDate = () => {
        cardDetails.expiry = cardDetails.expiry
            .replace(/\D/g, '')
            .replace(/^(\d{2})/, '$1/')
            .substring(0, 5);
        };

        const validateForm = () => {
        formErrors.value = {};
        let isValid = true;

        // Card validation
        if (paymentMethod.value === 'card') {
            if (!cardDetails.name) {
              formErrors.value.cardName = 'Cardholder name is required';
              isValid = false;
            }

            if (!cardDetails.number || !/^\d{16}$/.test(cardDetails.number.replace(/\s/g, ''))) {
              formErrors.value.cardNumber = 'Valid card number is required';
              isValid = false;
            }

            if (!cardDetails.expiry || !/^\d{2}\/\d{2}$/.test(cardDetails.expiry)) {
              formErrors.value.cardExpiry = 'Valid expiry date (MM/YY) is required';
              isValid = false;
            }

            if (!cardDetails.cvv || !/^\d{3,4}$/.test(cardDetails.cvv)) {
              formErrors.value.cardCvv = 'Valid security code is required';
              isValid = false;
            }
        }

        // Billing validation
        if (!billingDetails.company) {
              formErrors.value.company = 'Company name is required';
              isValid = false;
        }

        if (!billingDetails.einvoice || !/^\S+@\S+\.\S+$/.test(billingDetails.einvoice)) {
            formErrors.value.einvoice = 'Valid email is required';
            isValid = false;
        }

        // Add more validation as needed...

        return isValid;
        };

        const submitForm = async () => {
        if (!validateForm()) {
            return;
        }

        isProcessing.value = true;

        try {
            const response = await axios.post('/api/payments', {
            payment_method: paymentMethod.value,
            card_details: paymentMethod.value === 'card' ? {
                name: cardDetails.name,
                last_four: cardDetails.number.slice(-4),
                expiry: cardDetails.expiry
            } : null,
            billing_details: billingDetails
            });

            // Handle successful payment
            emit('payment-success', response.data);

            // Optionally reset form
            if (response.data.success) {
            resetForm();
            }
        } catch (error) {
            handleApiError(error);
        } finally {
            isProcessing.value = false;
        }
        };

        const handleApiError = (error) => {
        if (error.response) {
            // Laravel validation errors
            if (error.response.status === 422) {
            formErrors.value = error.response.data.errors;
            } else {
            // Other API errors
            alert(error.response.data.message || 'Payment failed. Please try again.');
            }
        } else {
            console.error('Payment error:', error);
            alert('Network error. Please check your connection.');
        }
        };

        const resetForm = () => {
        cardDetails.name = '';
        cardDetails.number = '';
        cardDetails.expiry = '';
        cardDetails.cvv = '';
        
        billingDetails.company = '';
        billingDetails.einvoice = '';
        // Reset other fields...
        };

        const emit = defineEmits(['payment-success']);
</script>

  
  <style scoped>
  .payment-form {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  
  h3 {
    font-size: 1.2rem;
    margin: 20px 0 15px;
    padding-top: 15px;
    border-top: 1px solid #eee;
  }
  
  .payment-methods {
    margin-bottom: 20px;
  }
  
  .payment-method {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .payment-method input {
    margin-right: 10px;
  }
  
  .card-icons {
    margin-left: auto;
    display: flex;
    align-items: center;
  }
  
  .card-icons img {
    margin-left: 5px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-row {
    display: flex;
    gap: 15px;
  }
  
  .form-row .form-group {
    flex: 1;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 0.9rem;
  }
  
  input, select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  input:focus, select:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }
  
  .submit-button {
    width: 100%;
    padding: 12px;
    background-color: #4a90e2;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 20px;
  }
  
  .submit-button:hover {
    background-color: #3a7bc8;
  }
  
  .submit-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  .stripe-branding {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 10px;
    font-size: 0.8rem;
    color: #666;
  }
  
  .stripe-branding span {
    margin-right: 5px;
  }

  .form-group {
    position: relative;
    margin-bottom: 20px;
    }

    .error-message {
    color: #e74c3c;
    font-size: 0.8rem;
    position: absolute;
    bottom: -16px;
    }

    input.error {
    border-color: #e74c3c;
    }
  </style>