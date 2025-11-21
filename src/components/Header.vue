<template>
    <!-- <header>
        <div class="wrapper">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div>
    </header> -->

    <!-- test -->

    <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
            <RouterLink class="navbar-brand" to="/">
                <div class="img_wrapper">
                    <img src="../assets/images/logoCNEN_site_color.svg" class="img-fluid" alt="...">
                </div>
                <!-- <img src="../assets/images/logoCNEN_site_color.svg" alt="" width="319.5" height="49"> -->
            </RouterLink>

            <button id="hamburger" class="navbar-toggler" type="button"  @click="toggleMenu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink @click="toggleMenu" class="nav-link active" to="/">網站首頁</RouterLink>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            關於本院
                        </a>

                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
                            <li>
                                <RouterLink @click="toggleMenu" class="dropdown-item" to="/ChairmanView">榮譽董事長</RouterLink>
                            </li>
                            <li>
                                <RouterLink @click="toggleMenu" class="dropdown-item" to="/BusinessCategory">業務範疇</RouterLink>
                            </li>
                            <li>
                                <RouterLink @click="toggleMenu" class="dropdown-item" to="/SupervisorProfile">主管簡介</RouterLink>
                            </li>
                            <li>
                                <RouterLink @click="toggleMenu" class="dropdown-item" to="/TrafficInformationAndMaps">院區簡介
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink @click="toggleMenu" class="dropdown-item" to="/MeetingSpace">會議空間</RouterLink>
                            </li>
                            <li>
                                <RouterLink @click="toggleMenu" class="dropdown-item" to="/AudioAndVideoArea">影音專區</RouterLink>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            部門介紹
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <RouterLink @click="toggleMenu" class="dropdown-item"
                                    to="/ResearchInstitute1/研究一所/ResearchInstitute1">研究一所
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink @click="toggleMenu" class="dropdown-item"
                                    to="/ResearchInstitute1/研究二所/ResearchInstitute2">研究二所
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink @click="toggleMenu" class="dropdown-item"
                                    to="/ResearchInstitute1/研究三所/ResearchInstitute3">研究三所
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink @click="toggleMenu" class="dropdown-item"
                                    to="/ResearchInstitute1/研究四所/ResearchInstitute4">研究四所
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink @click="toggleMenu" class="dropdown-item"
                                    to="/ResearchInstitute1/研究五所/ResearchInstitute5">研究五所
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink @click="toggleMenu" class="dropdown-item"
                                    to="/ResearchInstitute1/研究六所/ResearchInstitute6">研究六所
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink @click="toggleMenu" class="dropdown-item"
                                    to="/ResearchInstitute1/林業研究發展中心/ForestryResearchAndDevelopmentCenter">林業研究發展中心
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink @click="toggleMenu" class="dropdown-item"
                                    to="/ResearchInstitute1/教育推廣處/EducationPromotionOffice">
                                    教育推廣處</RouterLink>
                            </li>
                            <li>
                                <RouterLink @click="toggleMenu" class="dropdown-item"
                                    to="/ResearchInstitute1/國際合作處/InternationalCooperationOffice">國際合作處
                                </RouterLink>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <RouterLink @click="toggleMenu" class="nav-link active" to="/ResearchResults">研究成果
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" @click="toggleMenu" aria-current="page"
                            href="https://www.104.com.tw/company/1a2x6bju9s" target="_blank">人才招募</a>
                    </li>
                    <li class="nav-item">
                        <RouterLink @click="toggleMenu" class="nav-link active" aria-current="page" to="/ContactUs">聯絡我們
                        </RouterLink>
                    </li>

                    <li class="nav-item ms-2">
                        <a href="https://www.facebook.com/groups/1069174471128508" @click="toggleMenu">
                            <div>
                                <img src="../assets/images/Facebook.png" alt="" width="40" height="40">
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { Collapse } from 'bootstrap';
import { onMounted, watch, ref, nextTick } from 'vue';
const bsCollapse = ref<any>(null)
const menuToggle = ref(null)
const windowWidth = ref(0)
// onMounted(() => {

//     const dataToggle = document.querySelectorAll('[data-auto]');
//     const menuToggle = document.getElementById('navbarSupportedContent') as any;
//     // 检查当前设备是否为移动设备
//     const isMobile = window.matchMedia('(max-width: 767px)').matches;
//     console.log('isMobile:', isMobile)

//     if (menuToggle && isMobile) {
//         const bsCollapse = new Collapse(menuToggle, {
//             toggle: false
//         });

//         dataToggle.forEach((item) => {
//             item.addEventListener('click', () => {
//                 bsCollapse.toggle();
//             });
//         });
//     }
// });
// 以下為用vue的方式操控
onMounted(() => {
  const menuToggle = document.getElementById('navbarSupportedContent');
  if (menuToggle) {
    bsCollapse.value = new Collapse(menuToggle, { toggle: false });
  }
});

function toggleMenu() {
  if (bsCollapse.value) {
    bsCollapse.value.toggle();
  }
}
const route = useRoute();

</script>

<style scoped lang="scss">
.navbar {
    height: 80px;
    // padding: 15px;
    background-color: #FFF;
    // position: relative;

}

.nav-item:hover .dropdown-menu {
    display: block;
}

.nav-item {

    a.nav-link,
    a.dropdown-item {
        color: #A47332;
        font-size: 20px;
        font-weight: 400;
    }
}

.navbar-nav {
    background-color: #FFF;


}

.container-fluid {
    background-color: #FFF;

}

.collapse {
    z-index: 50;
    width: 100%;
}

.img_wrapper {
    max-width: 400px;
    aspect-ratio: 320/50;
}

@media screen and (max-width:768px) {
    .img_wrapper {
        max-width: 230px;
    }
}
</style>