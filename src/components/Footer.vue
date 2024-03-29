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
                        <a href="">-關於本院-</a>
                        <ul>
                            <li>
                                <RouterLink class="dropdown-item" to="/業務範疇">業務範疇</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="dropdown-item" to="/SupervisorProfile">主管簡介</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="dropdown-item" to="/會議空間">會議空間</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="dropdown-item" to="/交通資訊">交通資訊</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="dropdown-item" to="/影音專區">影音專區</RouterLink>
                            </li>
                        </ul>
                    </div>
                    <div class="right_block" :class="{ 'display_none': isExpandFooter }">
                        <a href="">-部門介紹-</a>
                        <ul>
                            <li>
                                <RouterLink class="dropdown-item" to="/研究一所">研究一所</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="dropdown-item" to="/研究二所">研究二所</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="dropdown-item" to="/研究三所">研究三所</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="dropdown-item" to="/研究四所">研究四所</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="dropdown-item" to="/教育推廣處">教育推廣處</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="dropdown-item" to="/國際合作處">國際合作處</RouterLink>
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
                <span>今天網站訪客數量:88</span>
                <span>網站訪客數量統計:45771</span>
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
                    <li>台灣水資源與農業研究院 版權所有 © 2025建議瀏覽器：Chrome</li>
                    <li>網站全部圖文版權係屬本院所有，非經本院正式書面同意，不得將全部或部分內容，轉載於任何形式媒體</li>

                </ul>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import ScrollToTopBtn from './ScrollToTopBtn.vue'
const footerControlText = ref('展開網站架構')
const isExpandFooter = ref(true)



function expandFooter() {
    isExpandFooter.value = !isExpandFooter.value
    footerControlText.value = isExpandFooter.value ? '展開網站架構' : '收合網站架構'
}


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