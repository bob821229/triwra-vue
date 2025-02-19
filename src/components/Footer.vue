<template>
    <ScrollToTopBtn></ScrollToTopBtn>
    <div class="footer_wrap">
        <RouterLink to="/">
            <button type="button" class="btn btn-outline-warning rounded-pill">
                回到首頁
            </button>
        </RouterLink>
        <footer>
            <div class="test">
                <span @click="expandFooter">{{ footerControlText }}</span>
                <div class="footer_content">
                    <div class="left_block" :class="{ 'display_none': isExpandFooter }">
                        <RouterLink to="/">-關於本院-</RouterLink>
                        <ul>
                            <li>
                                <RouterLink class="dropdown-item" to="/BusinessCategory">業務範疇</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="dropdown-item" to="/SupervisorProfile">主管簡介</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="dropdown-item" to="/MeetingSpace">會議空間</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="dropdown-item" to="/TrafficInformationAndMaps">交通資訊</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="dropdown-item" to="/AudioAndVideoArea">影音專區</RouterLink>
                            </li>
                        </ul>
                    </div>
                    <div class="right_block" :class="{ 'display_none': isExpandFooter }">
                        <a href="">-部門介紹-</a>
                        <ul>
                            <li>
                                <RouterLink class="dropdown-item" to="/ResearchInstitute1/研究一所/ResearchInstitute1">研究一所
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink class="dropdown-item" to="/ResearchInstitute1/研究二所/ResearchInstitute2">研究二所
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink class="dropdown-item" to="/ResearchInstitute1/研究三所/ResearchInstitute3">研究三所
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink class="dropdown-item" to="/ResearchInstitute1/研究四所/ResearchInstitute4">研究四所
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink class="dropdown-item" to="/ResearchInstitute1/研究五所/ResearchInstitute5">研究五所
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink data-auto class="dropdown-item"
                                    to="/ResearchInstitute1/林業研究發展中心/ForestryResearchAndDevelopmentCenter">林業研究發展中心
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink class="dropdown-item"
                                    to="/ResearchInstitute1/教育推廣處/EducationPromotionOffice">教育推廣處</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="dropdown-item"
                                    to="/ResearchInstitute1/國際合作處/InternationalCooperationOffice">國際合作處</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer_img">
                <RouterLink to="/">
                    <img class="d-none d-lg-block" src="../assets/images/logoCNEN_white.svg" alt="" width="768"
                        height="118">

                </RouterLink>
            </div>
            <div class="visitor_information">
                <span>今天網站訪客數量:{{ numberOfVisitors.todayVisitors }}</span>
                <span>網站訪客數量統計:{{ numberOfVisitors.totalVisiotrs }}</span>
            </div>
        </footer>
    </div>
    <div class="footer_detail container">
        <div class="row">
            <div class="col-md-12 col-lg-6">
                <ul>
                    <li><i class="bi bi-house-fill"></i>地址：新北市淡水區中正東路二段27-8號19F (近紅樹林捷運站)</li>
                    <li><i class="bi bi-telephone-fill"></i>電話：（02）2809-3497</li>
                    <li><i class="bi bi-calculator-fill"></i>傳真：（02）2808-2308</li>
                </ul>
            </div>
            <div class="col-md-12 col-lg-6">
                <ul>
                    <li>台灣水資源與農業研究院 版權所有 © 2024建議瀏覽器：Chrome</li>
                    <li>網站全部圖文版權係屬本院所有，非經本院正式書面同意，不得將全部或部分內容，轉載於任何形式媒體</li>

                </ul>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { ref, onMounted, watch } from 'vue'
import axios from 'axios';
import ScrollToTopBtn from './ScrollToTopBtn.vue'
const footerControlText = ref('展開網站架構')
const isExpandFooter = ref(true)
const route = useRoute();
const numberOfVisitors = ref({
    todayVisitors: "",
    totalVisiotrs: ""
})

//展開收合
function expandFooter() {
    isExpandFooter.value = !isExpandFooter.value
    footerControlText.value = isExpandFooter.value ? '展開網站架構' : '收合網站架構'
}

//取得訪客人數
async function fetchApiData() {
    let baseURL = ''
    if (import.meta.env.PROD) {
        baseURL = '/api/home/getVisitorCounter'
    } else {
        baseURL = '/data/numberOfVisitors.json'
    }
    console.log("baseURL", baseURL)
    try {
        const response = await axios.get(`${baseURL}`);
        numberOfVisitors.value = response.data.data
        console.log('今日訪客數量:', response.data.data.todayVisitors);
        console.log('訪客統計:', response.data.data.totalVisiotrs);
    } catch (error) {
        console.error('API error:', error);
    }
}
watch(route, () => {
    fetchApiData();
});

</script>

<style scoped lang="scss">
.footer_wrap {
    text-align: center;

    .btn-outline-warning {
        margin: 20px;
    }
}

footer {
    background-image: url('../assets/images/08-scaled.jpg');
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    .test {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 40px;

        span {
            font-size: 20px;
            font-weight: 600;
            color: #fff;
            cursor: pointer;
        }

        .footer_content {
            display: flex;
            justify-content: center;
            margin-top: 20px;

            a {
                font-size: 19px;
                color: #fff;
                font-weight: 600;
                position: relative;

                &::before {
                    background: #d94f5c none repeat scroll 0 0;
                    bottom: 0;
                    content: "";
                    height: 2px;
                    left: 0;
                    position: absolute;
                    transform: scale3d(0, 5, 1);
                    transform-origin: 0 50% 0;
                    transition: transform 0.3s cubic-bezier(1, 0.68, 0.16, 0.9) 0s;
                    width: 100%;
                }
            }

            li {
                margin: 10px 0;

                &:hover a::before {
                    transform: scale3d(1, 1, 1);
                }
            }





        }
    }

    .visitor_information {
        span {
            margin: 5px;
            color: #fff;
            font-weight: 900;
            font-size: 14px;
        }
    }

}

.footer_detail {
    max-width: 1100px;
    margin-bottom: 40px;
    // padding-bottom: 40px;

    div {
        // width: 50%;
        padding: 10px;
        font-size: 17px;
        line-height: 35px;
        font-weight: 400;
        color: #54595f;

        ul {
            padding: 0;
            margin: 0;
        }
    }
}

.display_none {
    display: none;
}

.btn-outline-warning {
    --bs-btn-color: #A47332;
    --bs-btn-border-color: #A47332;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #A47332;
    --bs-btn-hover-border-color: #A47332;
    --bs-btn-focus-shadow-rgb: 255, 193, 7;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #A47332;
    --bs-btn-active-border-color: #A47332;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #A47332;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #A47332;
    --bs-gradient: none;
    border: #A47332 3px solid;
    background-color: #fff;
    padding: 12px 24px;
}
</style>