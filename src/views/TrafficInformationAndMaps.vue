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
            <li>公車：搭乘公車，於「八勢一街」下車，步行約3分鐘可抵達本院。<br>
                可搭乘車號：756、757、818、821、837、857、880、882、883、892、893、947、957、983、紅23、紅52
            </li>
            <li>停車場：安泰登峰大樓不開放對外停車，請儘可能搭乘大眾交通工具前來本院。附近有兩處停車場，資訊如下：<br>
                (1). Times 淡水中正東路一段停車場(淡水區中正東路一段 137 號，每0.5 小時收費10 元，當日最高60 元，共有 100 格車位)。<br>
                (2). 紅樹林站停車場(淡水區中正東路二段 68 號，每小時收費 20 元，共有 215格車位)。</li>
        </ul>

        <div class="map_wrap">
            <iframe class="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.443783404864!2d121.45644621124131!3d25.154488977645535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442af92d6eaad3d%3A0x7d107b44577b7fcd!2z5Y-w54Gj5rC06LOH5rqQ6IiH6L6y5qWt56CU56m26Zmi!5e0!3m2!1szh-TW!2stw!4v1711961985440!5m2!1szh-TW!2stw"
                width="1100" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <h1>周遭景點</h1>
        <div class="owl-carousel owl-theme owl-loaded">
            <div class="owl-stage-outer">
                <div class="owl-stage">
                    <div class="owl-item">
                        1
                    </div>
                    <div class="owl-item">
                        2
                    </div>
                    <div class="owl-item">
                        3
                    </div>
                    <div class="owl-item">
                        4
                    </div>
                    <div class="owl-item">
                        5
                    </div>

                </div>
            </div>
            <p>多个复选框：</p>
            <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">
            <label for="runoob">Runoob</label>
            <input type="checkbox" id="google" value="Google" v-model="checkedNames">
            <label for="google">Google</label>
            <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
            <label for="taobao">taobao</label>
            <br>
            <span>选择的值为: {{ checkedNames }}</span>

            <!-- <button class="my-2" @click="refreshCarousel">refresh</button> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import { onMounted, ref } from 'vue';
const checkedNames = ref([])
onMounted(async () => {

    initCarousel()

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
</style>