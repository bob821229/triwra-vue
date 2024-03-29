<template>
    <div class="dempartment_wrap">
        <div class="main_title">
            <h1>
                <span>
                    <slot name="departmentName">(default departmentName)</slot>
                </span>
            </h1>
        </div>
        <div class="second-title">
            <span>

                <slot name="departmentTitle">(default departmentTitle)</slot>

            </span>
        </div>
        <div class="content_text">
            <slot name="departmentContent">
                (default departmentContent)
            </slot>


        </div>

        <div class="second-title">

            <span>
                <slot name="researchAreasTitle">
                    (default researchAreasTitle)
                </slot>
            </span>
        </div>
        <div class="content_text">
            <slot name="researchAreasContent">
                (default researchAreasContent)

            </slot>


        </div>

        <ul class="list_wrap">
            <slot name="researchAreaslist">
                <li>(default researchAreaslist)</li>
            </slot>


        </ul>

        <!-- <slot name="images">
            (預設照片)
            <div class="owl-item">
                <img src="/src/assets/images/ResearchInstituteOne/image2.jpg" alt="">
            </div>
        </slot> -->
        <div class="owl-carousel owl-theme owl-loaded">
            <div class="owl-stage-outer">
                <div class="owl-stage">
                    <slot name="images">
                        (預設照片)
                        <!-- <div class="owl-item">
                            <img src="/src/assets/images/ResearchInstituteOne/image2.jpg" alt="">
                        </div> -->
                    </slot>

                </div>
            </div>



        </div>

        <!-- <slot name="images">
            (預設照片)

        </slot> -->
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue'
// // 導入 jQuery
// import $ from 'jquery';
// window.jQuery = window.$ = $; // 将 jQuery 暴露到全局命名空间中
// 導入 Owl Carousel輪播 的 CSS 和 JavaScript
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';



onMounted(async () => {

    //initCarousel()
})
onUpdated(async () => {
    initCarousel();
})

function initCarousel() {
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
    })
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