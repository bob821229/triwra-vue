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

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link active" to="/">網站首頁</RouterLink>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            關於本院
                        </a>

                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
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
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            部門介紹
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
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
                                <RouterLink class="dropdown-item"
                                    to="/ResearchInstitute1/教育推廣處/EducationPromotionOffice">
                                    教育推廣處</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="dropdown-item"
                                    to="/ResearchInstitute1/國際合作處/InternationalCooperationOffice">國際合作處
                                </RouterLink>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link active" to="/ResearchResults/研究成果">研究成果
                        </RouterLink>
                        <!-- <a class="nav-link active" aria-current="page" href="#">研究成果</a> -->
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="https://www.104.com.tw/company/1a2x6bju9s"
                            target="_blank">人才招募</a>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link active" aria-current="page" to="/ContactUs">聯絡我們
                        </RouterLink>
                    </li>

                    <li class="nav-item ms-2">
                        <a href="https://www.facebook.com/groups/1069174471128508">
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
import { RouterLink, RouterView } from 'vue-router'

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
        max-width: 300px;
    }
}
</style>