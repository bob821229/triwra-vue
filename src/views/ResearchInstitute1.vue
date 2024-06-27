<template>

    <div class="dempartment_wrap">
        <div class="main_title">
            <h1>
                <span>
                    {{ data.departmentName }}
                </span>
            </h1>
        </div>
        <div class="second-title">
            <span>

                {{ data.departmentTitle }}

            </span>
        </div>
        <div v-html="data.departmentContent" class="content_text">



        </div>

        <div class="second-title">

            <span>

                {{ data.researchAreasTitle }}
            </span>
        </div>
        <div v-html="data.researchAreasContent" class="content_text">



        </div>

        <ul class="list_wrap">
            <li v-for="(item, index) in data.researchAreaslist" :key="index">{{ item }}</li>


        </ul>
        <!-- <button @click="initCarousel">初始化</button>
        <button @click="destroyCarousel">摧毀</button>
        <button @click="fetchData">fetchData</button> -->

        <Carousel :value="data.images" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular
            :autoplayInterval="3000" :showIndicators="false">
            <template #item="slotProps">
                <div class="m-2">
                    <img :src="slotProps.data" class="img-fluid" alt="...">
                </div>
            </template>
        </Carousel>

        <!-- <div class="owl-carousel owl-theme owl-loaded">
            <div class="owl-stage-outer">
                <div class="owl-stage">
                    <div class="owl-item" v-for="(img, idx) in data.images" :key="img">
                        <img :src="img" alt="">
                    </div>

                </div>
            </div>
        </div> -->


    </div>

</template>

<script setup lang="ts">
import { ref, onMounted, onUpdated, watchEffect, watch, nextTick, onBeforeUnmount } from 'vue'
// import Department from '../components/Department.vue'
import { getResearchInstitute } from '../api/api'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import { useRoute } from "vue-router";
import Button from "primevue/button"
import Image from 'primevue/image';
import Carousel from 'primevue/carousel';
const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);
const data = ref({
    departmentName: '',
    departmentTitle: '',
    departmentContent: '',
    researchAreasTitle: '',
    researchAreasContent: '',
    researchAreaslist: [],
    images: []
});

const route = useRoute()
let carouselInstance: any = null;//輪播實例
watchEffect(async () => {
    await fetchData()
})

async function fetchData() {
    try {
        const response = await getResearchInstitute(route.params.id as string)
        data.value = response.data

    } catch (error) {
        console.log(error)
    }
}
onMounted(async () => {
    // await fetchData()
})
//摧毀實例
// function destroyCarousel() {
//     console.log("destroyCarousel")
//     console.log("carouselInstance:", carouselInstance)
//     if (carouselInstance) {
//         console.log("摧毀carousel")
//         carouselInstance.trigger('destroy.owl.carousel');
//     }
// }

//初始化實例
// function initCarousel() {
//     console.log("initCarousel")
//     console.log("carouselInstance:", carouselInstance)
//     // 初始化輪播組件時，應該確保當輪播組件被渲染到 DOM 中時再進行初始化，否則可能會造成初始化失敗
//     if (document.querySelector('.owl-carousel')) {
//         console.log("初始化carousel")
//         carouselInstance = $('.owl-carousel').owlCarousel({
//             loop: true,
//             margin: 10,
//             nav: true,
//             dots: true,
//             autoplay: true,
//             autoplayTimeout: 3000,
//             autoplayHoverPause: true,
//             responsive: {
//                 0: {
//                     items: 1
//                 },
//                 600: {
//                     items: 3
//                 },
//                 1000: {
//                     items: 3
//                 }
//             }
//         });

//     }
// }
//卸載前
// onBeforeUnmount(() => {

// })
</script>

<style scoped lang="scss">
.dempartment_wrap {
    max-width: 1100px;
    margin: 20px auto;
}

h1 {
    font-size: 36px;
    font-weight: 500;
    color: #A47332;
    text-align: center;

    span {
        border-bottom: #A47332 3px solid;

    }
}

.second-title {
    text-align: center;
    margin: 20px 0;

    span {
        font-size: 24px;
        font-weight: 500;
        color: #A47332;
        margin: auto;
    }
}

.content_text {
    font-size: 22px;
    font-weight: 500;
    color: #54595f;
    line-height: 41px;
}

.list_wrap {
    margin: 20px 0;
    padding: 20px;
    list-style: disc;


    li {
        font-size: 22px;
        font-weight: 500;
        color: #54595f;
    }
}

:deep(.owl-nav) {
    position: absolute;
    top: 45%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    width: 100%;


    span {
        font-size: 50px;
        color: #fff;
    }



}

:deep(.owl-dots) {
    width: 100%;
    height: 50px;
    text-align: center;

    .owl-dot {
        display: inline-block;
        margin: 0 5px;

        span {
            width: 50px;
            height: 50px;
            font-size: 50px;
        }
    }


}
</style>