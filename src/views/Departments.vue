<template class="">
    <NavBar style="height: 10rem" >
 
    </NavBar>


    <div class="w-full gap-14 lg:px-72 mt-14 ">
           <div v-for="(item, index) in dept" :key="index"  class="flex flex-col">
                <h1 class="font-bold">{{ item.overall_tile }}</h1>
                
                <div class="flex flex-col lg:flex-row gap-14 justify-between mt-5">
                    <div >
                        {{ item.image }}
                    </div>

                    <div>
                        <h3> <b>{{ item.body.leader }} </b></h3>
                        <h3>  {{ item.body.office }}</h3>
                        <h3>  {{ item.body.requirement }}</h3>

                        <br>

                        <h3>  {{ item.body.Description }}</h3>

                        <br>

                        <h3> <b>Motto</b>: {{ item.body.Motto }}</h3>
                        <h3> <b>Colors</b>: {{ item.body.Colors }}</h3>
                        <h3> <b>Theme Hymn</b>: {{ item.body.Theme_Hymn }}</h3>

                        <br>

                        <h3> <b>Mission</b>: {{ item.body.Mission }}</h3>

                    </div>
                </div>
               
           </div>
    </div>





</template>

<script setup>
import NavBar from '../components/NavBar.vue';



const dept = [
    {
        overall_tile : "1. No Poverty",
        image: "image",
        body : {
            leader : "leader",
            office : "office",
            requirement : "Parent Body Society (Age 41 & Up)",

            Description: 'Description',

            Motto : "Motto",
            Colors: "Colors",
            Theme_Hymn: "Theme_Hymn",
            
            Mission: "The Women's Home and Overseas Missionary Society includes the Parent Body, from age 41 to an unlimited age. The purpose of the Parent Body is to (1) promote growth in the knowledge and understanding of God and His plan of redemption for the world, as revealed through Jesus Christ and the power of the Holy Spirit; (2) teach the concepts of Christian missions and provide experiences for participation in mission work and its ministries; (3) exemplify the principles of Christian living and to win others to Christ; (4) Promote the cause of World Evangelism; and (5) serve as a financial support system to undergird the world mission outreach of The African Methodist Episcopal Zion Church, at home and overseas, to the end that, through the power of the Holy Spirit, Christ is exalted and God is glorified.",
        },
    },
]


</script>

<style scoped>

</style>