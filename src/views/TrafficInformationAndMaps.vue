<template>
    <!-- 交通資訊與地圖 -->
    <div class="background-image"></div>
    <!-- <img src="/src/assets/images/TrafficInformationAndMaps/遠眺觀音山-e1696402684922-768x499.jpg" class="img-fluid"
        alt="..."> -->
    <div class="content">
        <h1>交通資訊與地圖</h1>
        <ul class="list_wrap">
            <li>地址：25147新北市淡水區中正東路二段27-5號19樓</li>
            <li>電話：02-2809-3497／070-1018-6777</li>
            <li>捷運：搭乘淡水線，於「紅樹林站」下車，由1號出口步行約５分鐘可抵達本院。</li>
            <li>輕軌：搭乘淡海輕軌「紅樹林站」下車，步行約5分鐘可抵達本院。</li>
            <li>公車：搭乘公車，於「輕軌紅樹林站」」下車，步行約3分鐘可抵達本院。<br>
                車號：756、757、818、821、837、857、880、882、883、892、893、947、957、983、紅23、紅52
            </li>
            <li>停車場：安泰登峰大樓不開放對外停車，請儘可能搭乘大眾交通工具前來本院。附近停車場，資訊如下：<br>
                (1). 紅樹林站停車場(淡水區中正東路二段 68 號，每小時收費 20 元，共有 215格車位)。</li>
        </ul>

        <div class="map_wrap">
            <iframe class="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.443783404864!2d121.45644621124131!3d25.154488977645535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442af92d6eaad3d%3A0x7d107b44577b7fcd!2z5Y-w54Gj5rC06LOH5rqQ6IiH6L6y5qWt56CU56m26Zmi!5e0!3m2!1szh-TW!2stw!4v1711961985440!5m2!1szh-TW!2stw"
                width="1100" height="450" style="border:0;" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <h1>周遭景點</h1>
        <!-- <img src="/src/assets/images/TrafficInformationAndMaps/附近1.jpg" alt=""> -->
        <div class="owl-carousel owl-theme owl-loaded">
            <div class="owl-stage-outer">
                <div class="owl-stage">
                    <div class="card owl-item" v-for="item in data " :key="item.attractions">
                        <img :src="item.pic" class="card-img-top" :alt="item.attractions">

                        <div class="card-body">
                            <p class="card-text text-center">{{ item.attractions }}</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>

        <div class="content">
            <div class="row">
                <div class="col-md-6 col-sm-12 around">
                    <img src="../assets/images/TrafficInformationAndMaps/周遭.jpg" class="img-fluid " alt="...">
                </div>
                <div class="col-md-6 col-sm-12 around">
                    <img src="../assets/images/TrafficInformationAndMaps/周遭2.jpg" class="img-fluid " alt="...">

                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import { onMounted, ref } from 'vue';
import { getTrafficInformationAndMaps } from '@/api/api'

onMounted(async () => {
    await fetchData()
    initCarousel()

})
interface AttractionItem {
    attractions: string;
    pic: string;
}

const data = ref<AttractionItem[]>([]);
async function fetchData() {
    try {
        const response = await getTrafficInformationAndMaps()
        data.value = response.data

    } catch (error) {
        console.log(error)
    }
}
getTrafficInformationAndMaps()
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
                    items: 2
                },
                1000: {
                    items: 2
                }
            }
        });
    }
}
</script>

<style scoped lang="scss">
.img-fluid {
    width: 100%;
}

.background-image {
    // position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 375px;
    background-image: url("@/assets/images/TrafficInformationAndMaps/觀音山.jpg");
    background-size: cover;
    background-position: center;
}

.map_wrap {
    // max-width: 1100px;
}

.content {
    padding: 0;
    max-width: 1100px;
    margin: 50px auto;

    h1 {
        text-align: center;
        color: #A47332;
        font-size: 35px;
        font-weight: 500;
        margin: 50px 0;
    }

    .list_wrap {
        // margin: 20px 0;
        // padding: 20px;
        list-style: disc;


        li {
            font-size: 22px;
            font-weight: 500;
            color: #54595f;
            line-height: 41px;
        }
    }

}


:deep(.owl-nav) {
    position: absolute;
    top: 45%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    width: 110%;
    left: -5%;

    span {
        font-size: 50px;
        color: #fff;
        color: #000;
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

.card {
    border: none;
    border-radius: 0;

    img {
        aspect-ratio: 535/362;
        object-fit: cover;
    }
}

.card-text {
    font-size: 30px;
}

.around {
    position: relative;

    transition: transform 0.5s ease;

    img {
        border-radius: 25px;
        box-shadow: #54595f 2px 3px 10px;
    }

    &:hover {
        transform: translateY(-8px);
    }
}
</style>