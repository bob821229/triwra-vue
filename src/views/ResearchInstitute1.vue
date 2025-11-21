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


        <Carousel :key="carouselKey" :value="data.images" :numVisible="3" :numScroll="1"
            :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000" :showIndicators="false">
            <template #item="slotProps">
                <div class="m-2 " style="text-align: center;">
                    <img :src="slotProps.data.url" class="img-fluid img_wrap" alt="...">
                    <span class="img_text">{{ slotProps.data.text }}</span>
                </div>
            </template>
        </Carousel>




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
//斷點設定
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
// 部門資料
const data = ref({
    departmentName: '',
    departmentTitle: '',
    departmentContent: '',
    researchAreasTitle: '',
    researchAreasContent: '',
    researchAreaslist: [],
    images: []
});
//輪播圖的key每次載入新的頁面就加1
const carouselKey = ref(0);
// 取出路由
const route = useRoute()
//監聽路由變化 
watchEffect(async () => {
    await fetchData()
    //資料有變化 就重新渲染
    carouselKey.value++;
})
//取得部門資料
async function fetchData() {
    try {
        const response = await getResearchInstitute(route.params.id as string)
        data.value = response.data

    } catch (error) {
        console.log(error)
    }
}



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

.img_wrap {
    //height: 250px;
    aspect-ratio: 1.6/1;
}
.img_text{
    letter-spacing: 0.5px;
}
</style>