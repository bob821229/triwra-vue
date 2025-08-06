<template>
    <!-- banner -->

    <swiper-container
        class="mySwiper"
        :pagination="true"
        :pagination-clickable="true"
        :navigation="true"
        space-between="30"
        :centered-slides="true"
        :loop="true"
        :autoplay-delay="5500"
        :autoplay-disable-on-interaction="false"
    >
        <swiper-slide>
            <div class="banner_wrap">
                <img
                    class="fill-image"
                    src="../assets/images/Home/banner1.jpg"
                    alt="..."
                />
                <div class="text_wrap">
                    <span>
                        <span class="year">
                            <count-up
                                :start-val="1922"
                                :end-val="2017"
                                :duration="5"
                                :options="{ useGrouping: false }"
                            >
                                <template #suffix>
                                    <span>年</span>
                                </template>
                            </count-up>
                        </span>
                        1月6日創立
                    </span>
                    <span>
                        <span class="year">
                            <count-up
                                :start-val="1911"
                                :end-val="2019"
                                :duration="5"
                                :options="{ useGrouping: false }"
                            >
                                <template #suffix>
                                    <span>年</span>
                                </template>
                            </count-up>
                        </span>
                        改隸為全國性研究機構
                    </span>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="banner_wrap">
                <img
                    class="fill-image"
                    src="../assets/images/Home/banner2.jpg"
                    alt="..."
                />
                <div class="text_wrap">
                    <div class="button_wrap">
                        關於研究院
                        <p></p>

                        <a class="godown_btn" href="#section1"
                            ><i class="bi bi-arrow-down"></i
                        ></a>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <!-- <swiper-slide>
      <RouterLink to="/DomesticWoodAndBamboo">
        <div class="banner_wrap">
          <img class="fill-image" src="../assets/images/Home/banner3.jpg" alt="國產木竹材驗證中心">
          <div class="text_wrap" style="justify-content: center;top: 80%;">
            <span>
              國產木竹材驗證中心
            </span>
          </div>
        </div>
      </RouterLink>
    </swiper-slide> -->
    </swiper-container>
    <div id="section1" class="content">
        <!-- 介紹 -->
        <p class="txt" style="text-indent: 2em">
            台灣水資源與農業研究院前身為淡江大學水資源管理與政策研究中心(1999-2017)，在水資源與農業研究領域耕耘多年。2017年為賡續拓墾研究範疇，乃匯聚水資源及農田水利相關領域的社會賢達與專家學者之力創立台水農院，原隸屬新北市政府教育局；2019年為尋求更大發展與突破，改隸教育部，成為「全國性教育事務財團法人學術研究機構」。多年來，本院研究領域涵蓋水資源管理與政策研究、水利工程規劃、水土環境監測、法規研析、教育訓練、國際合作交流等，不僅為農民解決農田灌溉問題，也提供研究成果做為政府決策參考，在水資源與農業領域相關研究機構中佔有獨特地位，也獲得政府與學界的肯定與重視。值此全球氣候變異現象日趨頻繁之際，水資源問題更為複雜而嚴峻，農業環境也面臨前所未有的考驗。本院擁有眾多專業人才，累積多年的研究經驗，針對各項問題深入分析探討，提出前瞻性的見解，積極因應氣侯變遷議題，提供更具效率的知識服務，發揮「政府智庫」的功能，為水資源與農業永續貢獻棉薄之力。
        </p>

        <div class="research">
            <h1>研究領域</h1>
            <div class="row">
                <div class="col-md-7 col-sm-12">
                    <div class="row">
                        <div class="col-md-6 col-sm-12 researchInstitute_card">
                            <RouterLink
                                class="nav-link active"
                                to="/ResearchInstitute1/研究一所/ResearchInstitute1"
                            >
                                <div class="card">
                                    <img
                                        src="../assets/images/Home/一所_介紹_Banner-p3w9ig9zi8rr9pe8ke565lut9tm8fy0acx18cj0zzk.jpg"
                                        class="card-img-top researchInstitute_img"
                                        alt="..."
                                    />
                                    <h5 class="card-title d-none d-md-block">
                                        研究一所
                                    </h5>
                                    <h5 class="card_title2 d-block d-md-none">
                                        研究一所
                                    </h5>
                                    <h5 class="card_txt_mobile">
                                        農業水資源與灌溉管理
                                    </h5>
                                </div>
                                <p
                                    class="card_text h6 fw-bold mt-1 d-none d-md-block"
                                >
                                    農業水資源與灌溉管理
                                </p>
                            </RouterLink>
                        </div>
                        <div class="col-md-6 col-sm-12 researchInstitute_card">
                            <RouterLink
                                class="nav-link active"
                                to="/ResearchInstitute1/研究二所/ResearchInstitute2"
                            >
                                <div class="card">
                                    <img
                                        src="../assets/images/Home/2-1.jpg"
                                        class="card-img-top researchInstitute_img"
                                        alt="..."
                                    />
                                    <h5 class="card-title d-none d-md-block">
                                        研究二所
                                    </h5>
                                    <h5 class="card_title2 d-block d-md-none">
                                        研究二所
                                    </h5>
                                    <h5 class="card_txt_mobile">
                                        公共治理與制度創新
                                    </h5>
                                </div>
                                <p
                                    class="card_text h6 fw-bold mt-1 d-none d-md-block"
                                >
                                    公共治理與制度創新
                                </p>
                            </RouterLink>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-sm-12 researchInstitute_card">
                            <RouterLink
                                class="nav-link active"
                                to="/ResearchInstitute1/研究三所/ResearchInstitute3"
                            >
                                <div class="card">
                                    <img
                                        src="../assets/images/Home/3.jpg"
                                        class="card-img-top researchInstitute_img"
                                        alt="..."
                                    />
                                    <h5 class="card-title d-none d-md-block">
                                        研究三所
                                    </h5>
                                    <h5 class="card_title2 d-block d-md-none">
                                        研究三所
                                    </h5>
                                    <h5 class="card_txt_mobile">
                                        農業環境與政策
                                    </h5>
                                </div>
                                <p
                                    class="card_text h6 fw-bold mt-1 d-none d-md-block"
                                >
                                    農業環境與政策
                                </p>
                            </RouterLink>
                        </div>
                        <div class="col-md-6 col-sm-12 researchInstitute_card">
                            <RouterLink
                                class="nav-link active"
                                to="/ResearchInstitute1/研究四所/ResearchInstitute4"
                            >
                                <div class="card">
                                    <img
                                        src="../assets/images/Home/4.jpg"
                                        class="card-img-top researchInstitute_img"
                                        alt="..."
                                    />
                                    <h5 class="card-title d-none d-md-block">
                                        研究四所
                                    </h5>
                                    <h5 class="card_title2 d-block d-md-none">
                                        研究四所
                                    </h5>
                                    <h5 class="card_txt_mobile">
                                        農田水利工程建設與管理研究
                                    </h5>
                                </div>
                                <p
                                    class="card_text h6 fw-bold mt-1 d-none d-md-block"
                                >
                                    農田水利工程建設與管理研究
                                </p>
                            </RouterLink>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-sm-12 researchInstitute_card">
                            <RouterLink
                                class="nav-link active"
                                to="/ResearchInstitute1/研究五所/ResearchInstitute5"
                            >
                                <div class="card">
                                    <img
                                        src="../assets/images/Home/5-1.jpg"
                                        class="card-img-top researchInstitute_img"
                                        alt="..."
                                    />
                                    <h5 class="card-title d-none d-md-block">
                                        研究五所
                                    </h5>
                                    <h5 class="card_title2 d-block d-md-none">
                                        研究五所
                                    </h5>
                                    <h5 class="card_txt_mobile">法制研究</h5>
                                </div>
                                <p
                                    class="card_text h6 fw-bold mt-1 d-none d-md-block"
                                >
                                    法制研究
                                </p>
                            </RouterLink>
                        </div>
                        <div class="col-md-6 col-sm-12 researchInstitute_card">
                            <RouterLink
                                class="nav-link active"
                                to="/ResearchInstitute1/研究六所/ResearchInstitute6"
                            >
                                <div class="card">
                                    <img
                                        src="../assets/images/Home/6.jpg"
                                        class="card-img-top researchInstitute_img"
                                        alt="..."
                                    />
                                    <h5 class="card-title d-none d-md-block">
                                        研究六所
                                    </h5>
                                    <h5 class="card_title2 d-block d-md-none">
                                        研究六所
                                    </h5>
                                    <h5 class="card_txt_mobile">
                                        生態檢核及保育研究
                                    </h5>
                                </div>
                                <p
                                    class="card_text h6 fw-bold mt-1 d-none d-md-block"
                                >
                                    生態檢核及保育研究
                                </p>
                            </RouterLink>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-sm-12 researchInstitute_card">
                            <RouterLink
                                class="nav-link active"
                                to="/ResearchInstitute1/林業研究發展中心/ForestryResearchAndDevelopmentCenter"
                            >
                                <div class="card">
                                    <img
                                        src="../assets/images/Home/林業中心icon.png"
                                        class="card-img-top researchInstitute_img"
                                        alt="..."
                                    />
                                    <h5 class="card-title">林業研究發展中心</h5>
                                </div>
                                <p
                                    class="card_text h6 fw-bold mt-1 d-none d-md-block"
                                >
                                    獎勵輔導造林政策，森林碳匯研究
                                </p>
                            </RouterLink>
                        </div>
                        <div class="col-md-6 col-sm-12 researchInstitute_card">
                            <RouterLink
                                class="nav-link active"
                                to="/ResearchInstitute1/教育推廣處/EducationPromotionOffice"
                            >
                                <div class="card">
                                    <img
                                        src="../assets/images/Home/5.jpg"
                                        class="card-img-top researchInstitute_img"
                                        alt="..."
                                    />
                                    <h5 class="card-title">教育推廣處</h5>
                                </div>
                                <p
                                    class="card_text h6 fw-bold mt-1 d-none d-md-block"
                                >
                                    農田水利業務人員教育訓練與政策推廣研究
                                </p>
                            </RouterLink>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-sm-12 researchInstitute_card">
                            <RouterLink
                                class="nav-link active"
                                to="/ResearchInstitute1/國際合作處/InternationalCooperationOffice"
                            >
                                <div class="card">
                                    <img
                                        src="../assets/images/Home/6-1.jpg"
                                        class="card-img-top researchInstitute_img"
                                        alt="..."
                                    />
                                    <h5 class="card-title">國際合作處</h5>
                                </div>
                                <p
                                    class="card_text h6 fw-bold mt-1 d-none d-md-block"
                                >
                                    國際合作交流及宣導
                                </p>
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 col-sm-12">
                    <ul>
                        <li class="txt">水文分析與觀測技術</li>
                        <li class="txt">水資源政策與區域水資源經營管理</li>
                        <li class="txt">農業水資源智慧管理與灌溉配水</li>
                        <li class="txt">水資源旱澇災害預警與應變制度</li>
                        <li class="txt">農田水利事業制度</li>
                        <li class="txt">農田水利組織</li>
                        <li class="txt">公共政策及行政法制</li>
                        <li class="txt">推動林業永續發展</li>
                        <li class="txt">推動友善環境農業</li>
                        <li class="txt">促進畜牧業產業發展</li>
                        <li class="txt">農田水利中長程政策規劃及推動</li>
                        <li class="txt">
                            農田水利工程灌溉排水、取水設施工程可行性
                        </li>
                        <li class="txt">生態環境調查與生態檢核機制</li>
                        <li class="txt">農田水利教育訓練</li>
                        <li class="txt">水資源與農業會議與活動</li>
                        <li class="txt">志工管理培訓</li>
                        <li class="txt">食農教育推廣</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="video_wrap">
            <h1>影音專區</h1>
            <div class="row">
                <div class="col-md-3">
                    <div class="card">
                        <div class="video">
                            <iframe
                                class="video-iframe"
                                src="https://www.youtube.com/embed/JTzkQs4SUWM?si=0yGrcb8s0-OXqt9d"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                        </div>
                        <a href="https://www.youtube.com/watch?v=JTzkQs4SUWM"
                            >大愛新聞台留住一滴水- 虞國興院長極端氣候議題訪談</a
                        >
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <div class="video">
                            <iframe
                                class="video-iframe"
                                src="https://www.youtube.com/embed/89cpd4V7qjk?si=vtIeXHFRSxLOAtQ2"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                        </div>
                        <a href="https://www.youtube.com/watch?v=JTzkQs4SUWM"
                            >大愛新聞台留住一滴水- 虞國興院長水庫議題訪談</a
                        >
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <div class="video">
                            <iframe
                                class="video-iframe"
                                src="https://www.youtube.com/embed/QaNo1i-XCj4?si=z_PLmeGksewlz_ZL"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                        </div>
                        <a href="https://www.youtube.com/watch?v=QaNo1i-XCj4"
                            >2022水圳綠道啟用典禮暨植樹活動</a
                        >
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <div class="video">
                            <iframe
                                class="video-iframe"
                                src="https://www.youtube.com/embed/pdgLEjzbs6E?si=OlKm_LlSil8qY5PQ"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                        </div>
                        <a
                            href="https://www.youtube.com/watch?v=pdgLEjzbs6E&t=37s"
                            >民事新聞台田下大小事 -
                            蘇騰鋐副院長蔬菜耐淹水議題訪談</a
                        >
                    </div>
                </div>
            </div>
        </div>

        <div class="researche_wrap">
            <h1>研究成果平台</h1>
            <div class="row">
                <div class="platform col-md-4">
                    <figure class="figure">
                        <img
                            src="../assets/images/Home/水圳綠道-1.png"
                            class="figure-img img-fluid rounded"
                            alt="..."
                        />
                    </figure>
                </div>
                <div class="platform col-md-4">
                    <a href="https://age.triwra.org.tw/" target="_blank">
                        <figure class="figure">
                            <img
                                src="../assets/images/Home/綠能發展資訊.png"
                                class="figure-img img-fluid rounded"
                                alt="..."
                            />
                        </figure>
                    </a>
                </div>
                <div class="platform col-md-4">
                    <a href="https://ctcid.triwra.org.tw/" target="_blank">
                        <figure class="figure">
                            <img
                                src="../assets/images/Home/國際灌溉排水協會中華民國國家委員會.png"
                                class="figure-img img-fluid rounded"
                                alt="..."
                            />
                        </figure>
                    </a>
                </div>
                <div class="platform col-md-6">
                    <a href=" http://coafli.triwra.org.tw/" target="_blank">
                        <figure class="figure">
                            <img
                                src="../assets/images/Home/前瞻基礎建設.png"
                                class="figure-img img-fluid rounded"
                                alt="..."
                            />
                        </figure>
                    </a>
                </div>
                <div class="platform col-md-6">
                    <figure class="figure">
                        <img
                            src="../assets/images/Home/韌性農業.png"
                            class="figure-img img-fluid rounded"
                            alt="..."
                        />
                    </figure>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import ScrollToTopBtn from "../components/ScrollToTopBtn.vue";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
import CountUp from "vue-countup-v3";
import { ref } from "vue";
const startVal = ref(0);
const endVal = ref(2017);
</script>

<style scoped lang="scss">
.content {
    padding: 10px;
    max-width: 1100px;
    margin: 50px auto;
    font-size: 1.375rem;
    font-weight: 700;
    color: #54595f;

    h1 {
        margin: 50px 0;
        text-align: center;
        color: #a47332;
        font-size: 2.2rem;
        font-weight: 500;
        text-decoration: underline;
    }

    ul {
        list-style: disc;

        li {
            margin-bottom: 6px;
        }
    }

    .col-6 {
        padding: 3px;
    }
}

// 所處卡片
.researchInstitute_card {
    .card {
        border: none;
        position: relative;

        .card-title {
            position: absolute;
            font-size: 1.4rem;
            font-weight: 600;
            bottom: 0;
            // top: 5%;
            left: 50%;
            transform: translateX(-50%);
            margin-bottom: 0;
            white-space: nowrap;
            text-shadow: #363636 2px 2px 5px;
            color: #fff;
        }

        .card_txt_mobile {
            display: none;
            color: #fff;
            text-shadow: #363636 2px 2px 5px;
            position: absolute;
        }
    }

    .card-text {
        font-size: 12px;
        font-weight: 500;
    }
}
.researchInstitute_img {
    aspect-ratio: 298/164.16;
}
.mySwiper {
    width: 100%;
    height: auto;

    .banner_wrap {
        width: 100%;
        max-height: 714px;
        overflow: hidden;
        position: relative;

        .text_wrap {
            display: flex;
            justify-content: space-between;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            // width: 50%;
            width: 60%;
            z-index: 10;
            color: #fff;
            font-size: 3.5rem;
            line-height: 1;
            font-weight: 600;
            text-shadow: 5px 5px 10px rgb(0, 0, 0);

            .year {
                font-size: 3.75rem;
            }

            span {
                text-align: center;
            }
        }
    }

    .fill-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.godown_btn {
    display: inline-block;
    border-radius: 68px;
    color: #fff;
    border: 3px solid #fff;
    padding: 5px 20px;
    font-size: 1.25rem;
    font-weight: 600;
    cursor: pointer;
    background-color: #0000;
    box-shadow: 2px 2px 5px #363636;

    // transition: all 0.3s ease-in-out;

    &:hover {
        animation: heartbeat 1s infinite;
    }
}

@keyframes heartbeat {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
}

.video_wrap {
    .col-md-3 {
        padding: 6px;
    }

    .card {
        border: none;

        a {
            text-align: center;
            font-size: 1rem;
            font-weight: 600;
            color: #54595f;
            text-decoration: none;
        }
    }

    .video-iframe {
        width: 100%;
        aspect-ratio: 16/9;
        border-radius: 5px;
    }
}

.platform {
    text-align: center;
    max-height: 107px;
}

.card_text {
    font-size: 16px;
}

@media screen and (max-width: 768px) {
    .txt {
        font-size: 1.2rem;
        font-weight: 500;
    }

    .researchInstitute_img {
        aspect-ratio: 3/1;
    }

    // 所處卡片
    .researchInstitute_card {
        padding: 10px 0;

        .card {
            border: none;
            position: relative;

            .card-title {
                position: absolute;
                font-size: 1.4rem;
                font-weight: 600;
                // bottom: 0;
                top: 5%;
                left: 50%;
                transform: translateX(-50%);
                margin-bottom: 0;
                white-space: nowrap;
                text-shadow: #363636 2px 2px 5px;
                color: #fff;
                // display: none;
            }
            .card_title2 {
                margin-bottom: 0;
                position: absolute;
                right: 5px;
                bottom: 5px;
                white-space: nowrap;
                text-shadow: #363636 2px 2px 5px;
                color: #fff;
                font-weight: 600;
                // top: 100;
                transform: translateX(-0%);
            }

            .card_txt_mobile {
                display: block;
                color: #fff;
                text-shadow: #363636 2px 2px 5px;
                position: absolute;
                font-size: 1.4rem;
                font-weight: 600;
                white-space: nowrap;
                left: 50%;
                top: 5%;
                transform: translateX(-50%);
            }
        }

        .card-text {
            font-size: 12px;
            font-weight: 500;
        }
    }

    .mySwiper {
        .banner_wrap {
            .text_wrap {
                font-size: 1rem;
                width: 70%;

                .year {
                    font-size: 1.75rem;
                }
            }
        }
    }

    .card_text {
        font-size: 12px;
    }
}
</style>
