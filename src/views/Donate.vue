<template class="">
    <NavBar style="height: 10.5rem" class="bg-black">
 
  </NavBar>

  <div class="w-full">

    <PaymentForm @payment-success="handlePaymentSuccess">

    </PaymentForm>

  </div>


</template>

<script setup>
  import NavBar from '../components/NavBar.vue';

  import PaymentForm from '../components/PaymentForm.vue';

  const handlePaymentSuccess = (paymentData) => {
    // Handle successful payment
    console.log('Payment successful:', paymentData);
  };

</script>

<style scoped>


</style>