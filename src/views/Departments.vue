<template class="">
    <NavBar style="height: 10rem" >
 
    </NavBar>


    <div class="w-full gap-14 px-7 lg:px-64 xl:px-76 mt-14 ">
           <div v-for="(item, index) in dept" :key="index"  class="flex flex-col mb-14">
                <h1 class="font-extrabold text-4xl text-[#b51671] mb-10">{{ item.overall_tile }}</h1>
                
                <div class="flex flex-col sm:flex-row gap-14 justify-between mt-10">
                    <div class="sm:w-1/4 sm:min-w-[200px]">
                        <img :src="item.image" alt="" srcset="" class="w-full h-auto">
                    </div>

                    <div class="sm:w-3/4">
                        <h3> <b>{{ item.body.leader }} </b></h3>
                        <h3>  {{ item.body.office }}</h3>
                        <h3>  {{ item.body.requirement }}</h3>

                        <br>
                        <h3 v-if="item.body.Description !== '' ">  {{ item.body.Description }}</h3>
                        <br>

                        <h3 class="lg:w-3/4"> <b>Motto</b>: {{ item.body.Motto }}</h3>
                        <h3> <b>Colors</b>: {{ item.body.Colors }}</h3>

                        <h3 v-if="item.body.Watchword !== '' "> <b>Theme Song</b>: {{ item.body.Watchword }}</h3>

                        <h3 v-if="item.body.Theme_Song !== '' "> <b>Theme Song</b>: {{ item.body.Theme_Song }}</h3>
                        <h3 v-if="item.body.Theme_Hymn !== '' "> <b>Theme Hymn</b>: {{ item.body.Theme_Hymn }}</h3>

                        <br>

                        <h3 class="text-justify"> <b>Mission</b>: {{ item.body.Mission }}</h3>

                    </div>
                </div>
               
           </div>
    </div>





</template>

<script setup>
import NavBar from '../components/NavBar.vue';



const dept = [
    {
        overall_tile : "Parent Body",
        image: "images/Departments/WHOMSnobg.png",
        body : {
            leader : "Mrs. Sandra B. Crowder",
            office : "International President",
            requirement : "Parent Body Society (Age 41 & Up)",

            Description: '',

            Motto : '"The World for Christ"',
            Colors: "Purple (sorrow, suffering), Gold (honor)",

            Watchword: '',


            Theme_Song: "",
            Theme_Hymn: "Lift Him Up",
            
            Mission: "The Women's Home and Overseas Missionary Society includes the Parent Body, from age 41 to an unlimited age. The purpose of the Parent Body is to (1) promote growth in the knowledge and understanding of God and His plan of redemption for the world, as revealed through Jesus Christ and the power of the Holy Spirit; (2) teach the concepts of Christian missions and provide experiences for participation in mission work and its ministries; (3) exemplify the principles of Christian living and to win others to Christ; (4) Promote the cause of World Evangelism; and (5) serve as a financial support system to undergird the world mission outreach of The African Methodist Episcopal Zion Church, at home and overseas, to the end that, through the power of the Holy Spirit, Christ is exalted and God is glorified.",
        },
    },

    {
        overall_tile : "YAMS – Young Adult Missionary Society",
        image: "images/Departments/YAMS.png",
        body : {
            leader : "Ms. Karlease Smalls",
            office : "Connectional General Coordinator of YAMS",
            requirement : "Young Adult Missionary Society (Age 22 – 40)",

            Description: '',

            Motto : '"With hearts and hands: We reach up to God for strength and direction, We reach out to love and touch others, We reach down to lift fallen humanity.”',
            Colors: "Peach (loyalty, blood, charity) and Taupe (sorrow, joy and glory)",

            Watchword: '',

            Theme_Song: "",
            Theme_Hymn: '"Our Promise, Praise, And Petition"',
            
            Mission: "The purpose of this department is to (1) unite women, age 22–40, of The A.M.E. Zion Church for mission service in the church and community. The prime objectives will include social concerns such as child abuse, teenage pregnancies, drug dependency, world hunger, etc.; (2) provide an opportunity for the personal and individual Christian growth of members; (3) provide an opportunity for Christian witness through the use of their time, talent, and treasure to support the mission; (4) provide experiences that will enable Young Adult Missionaries to perpetuate the existence and continued growth of the Women’s Home and Overseas Missionary Society, The A.M.E. Zion Church, and the kingdom of God.",
        },
    },

    {
        overall_tile : "Youth Missionary Society",
        image: "images/Departments/YMS.png",
        body : {
            leader : "Ms. Melva Polk Wright",
            office : "Connectional General Secretary, Youth Missionaries",
            requirement : "Youth Missionary Society (Age 13 – 21)",

            Description: '',

            Motto : '"Ambassadors for Christ"',
            Colors: 'Navy Blue (truth, loyalty) and Gold (heaven and honor)',

            Watchword: '"Christ for Every Youth, Every Youth for Christ"',


            Theme_Song: '"Give of Your Best to the Master"',
            Theme_Hymn: '"Take My Life and Let It Be"',
            
            Mission: "The Youth Missionary Society, formerly called the Young Women’s Missionary Society was organized in 1909 in Salisbury, NC by its founder and first General Secretary, Miss Victoria Richardson. It was adopted in May 1912 in Charlotte, NC. We honor and recognize Miss Victoria Richardson Day on the second Sunday of each January which is closest to her birthday on January 12. The Y’s Society was organized to give the opportunity and privilege for young ladies to serve others. Young men are now allowed to become honorary members; however, they have no voting privileges and may not hold an office position.",
        },
    },

    {
        overall_tile : "Buds of Promise",
        image: "images/Departments/Buds_of_Promise.png",
        body : {
            leader : "Mrs. April C. Davis",
            office : "Connectional General Superintendent, Buds of Promise",
            requirement : "Buds of Promise Juvenile Missionary Society (Age 1 – 12)",

            Description: '',

            Motto : '"Blooming All for Jesus"',
            Colors: "Green (growth) and White (purity)",

            Watchword: '',


            Theme_Song: '"Blooming All for Jesus"',
            Theme_Hymn: "I Would Be True",
            
            Mission: "The Buds of Promise are the Juvenile Society of the WHOM Society. The mission of the WHOM Society is to establish Christian learning environments and experiences for all children (age 1 through 12) through mission education. These experiences will enable each child to acquire the knowledge, beliefs and attitudes that are essential to his/her spiritual development as an individual and are necessary for the attainment of a meaningful life.",
        },
    },

    {
        overall_tile : "Bureau of Supply",
        image: "images/Departments/bureau_of_supply.png",
        body : {
            leader : "Mrs. Jo-Ann Monroe",
            office : "Connectional General Secretary, Bureau of Supply",
            requirement : "Bureau of Supply (All Ages)",

            Description: 'Donations, including clothing, medicine, literature, finances, etc., are collected through this department for those in need throughout the areas served by The African Methodist Episcopal Zion Church.',

            Motto : '"Faith and Service"',
            Colors: "Pink (excellence, perfection) and White (purity, joy)",

            Watchword: '',

            Theme_Song: "Pink (excellence, perfection) and White (purity, joy)",
            Theme_Hymn: "",
            
            Mission: "The purpose of the department is to solicit funds and supplies for home and overseas work.",
        },
    },

    {
        overall_tile : "Life Members",
        image: "images/Departments/lifemember.png",
        body : {
            leader : "Mrs. Joy Williamson-Foster",
            office : "Connectional General Chairman, Life Members Council",
            requirement : "Life Members Council (All Ages)",

            Description: 'The Life Members Council includes all Life Members, Honorary Life Members, Matrons, and Patrons whose donations provide support for education, training, field missions, and other work of the WHOM Society.',

            Motto : '"Each One, Make One"',
            Colors: "White (purity, joy) and Red (fire, blood, charity)",

            Watchword: '',

            Theme_Song: '"Throw Out the Life Line"',
            Theme_Hymn: "",
            
            Mission: "The Life Members Council is the most exciting department in the Women’s Home and Overseas Missionary Society! This department captures the hearts and interests of men, women, boys, and girls from across the width and breath of Zion. The purpose of the department is to organize all Life Members, Matrons, Patrons, and Honorary Life members into a local council. An investment in this department is an investment in the lives of Zion’s greatest resource: Her People!",
        },
    },
]


</script>

<style scoped>

</style>