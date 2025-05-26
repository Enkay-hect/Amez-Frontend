<template>
    <div class="w-full flex flex-row flex-wrap gap-8 xl:px-72">
        <div class="w-[25%]">
            United Nations Sustainable Development Goals Endorsed by the W.H.&O.M.S. Executive Board
        </div>

        <div class="w-75%">
            At the United Nations Sustainable Development Summit on 25 September 2015, World leaders adopted the 2030 Agenda for Sustainable Development, which includes a set of 17 Sustainable Development Goals (SDGs) to end poverty, fight inequality and justice, and tackle climate change by 2030.
        </div>
    </div>

    <div class="w-full flex flex-row flex-wrap gap-14 xl:px-72 mt-14 justify-between">
        <div v-for="(item, index) in mi" :key="index" class="w-96">
           <div>
                <h3 class="font-bold">{{ item.tile }}</h3>
                <p class="">{{ item.body }}</p>
           </div>
        </div>
    </div>
</template>

<script setup>


const mi = [
    {
        tile : "1. No Poverty",
        body : "End poverty in all its forms everywhere"
    },

    {
        tile : "2. Zero Hunger",
        body : "End hunger, achieve food security and improved nutrition and promote sustainable agriculture."
    },

    {
        tile : "3. Good Health and Well-Being",
        body : "Ensure healthy lives and promote well-being for all at all."
    },

    {
        tile : "4. Quality Education",
        body : "Ensure inclusive and equitable quality education and promote lifelong learning opportunities."
    },

    {
        tile : "5. Gender Equality",
        body : "Achieve gender equality and empower all women and girls."
    },

    {
        tile : "6. Clean Water and Sanitation",
        body : "Ensure availability and sustainable management of water and sanitation for all."
    },

    {
        tile : "7. Affordable and Clean Energy",
        body : "Ensure access to affordable, reliable, sustainable and modern energy for all."
    },

    {
        tile : "8. Decent Work and Economic Growth",
        body : "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all."
    },

    {
        tile : "9. Industry, Innovation, and Infrastructure",
        body : "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation."
    },
    

]

</script>

<style lang="scss" scoped>

</style>