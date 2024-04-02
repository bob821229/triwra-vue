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
            <li v-for="item in data.researchAreaslist">{{ item }}</li>


        </ul>


        <div class="owl-carousel owl-theme owl-loaded">
            <div class="owl-stage-outer">
                <div class="owl-stage">
                    <div class="owl-item" v-for="(img, idx) in data.images" :key="idx">
                        <img :src="img" alt="">
                    </div>

                </div>
            </div>


            <!-- <button class="my-2" @click="refreshCarousel">refresh</button> -->
        </div>


    </div>

</template>

<script setup lang="ts">
import { ref, onMounted, onUpdated, watchEffect, watch, nextTick } from 'vue'
// import Department from '../components/Department.vue'
import { getResearchInstitute } from '../api/api'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import { useRoute } from "vue-router";
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

watchEffect(async () => {
    await fetchData()
})

async function fetchData() {
    try {
        const response = await getResearchInstitute(route.params.id)
        data.value = response.data

    } catch (error) {
        console.log(error)
    }
}
onMounted(async () => {
    await fetchData()
    initCarousel()

})
// onUpdated(() => {
//     $('.owl-carousel').trigger('refresh.owl.carousel');

// })
function refreshCarousel() {
    $('.owl-carousel').trigger('refresh.owl.carousel');
}
watch(data, () => {
    // console.log('data changed')
    $('.owl-carousel').trigger('refresh.owl.carousel');

    // $('.owl-carousel').trigger('destroy.owl.carousel');
    // initCarousel()
})

function initCarousel() {
    // 初始化輪播組件時，應該確保當輪播組件被渲染到 DOM 中時再進行初始化，否則可能會造成初始化失敗
    if (document.querySelector('.owl-carousel')) {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }
        });
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

::v-deep .owl-nav {
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

::v-deep .owl-dots {
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