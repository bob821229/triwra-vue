<template>
  <!-- banner -->

  <swiper-container class="mySwiper" :pagination="true" :pagination-clickable="true" :navigation="true"
    space-between="30" :centered-slides="true" :loop="true" :autoplay-delay="5500"
    :autoplay-disable-on-interaction="false">
    <swiper-slide>
      <div class="banner_wrap">
        <img class="fill-image" src="../assets/images/Home/banner1.jpg" alt="...">
        <div class="text_wrap">
          <span>
            <span class="year">
              <count-up :start-val='1922' :end-val='2017' :duration='5' :options="{ useGrouping: false }">
                <template #suffix>
                  <span>年</span>
                </template>
              </count-up>
            </span>
            1月6日創立
          </span>
          <span>
            <span class="year">
              <count-up :start-val='1911' :end-val='2019' :duration='5' :options="{ useGrouping: false }">
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
        <img class="fill-image" src="../assets/images/Home/banner2.jpg" alt="...">
        <div class="text_wrap">
          <div class="button_wrap">
            關於研究院
            <p></p>

            <a class="godown_btn" href="#section1"><i class="bi bi-arrow-down"></i></a>



          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper-container>
  <div id="section1" class="content">

    <!-- 介紹 -->
    <p class="introduction" style="text-indent: 2em;">
      台灣水資源與農業研究院前身為淡江大學水資源管理與政策研究中心(1999-2017)，在水資源與農業研究領域耕耘多年。2017年為賡續拓墾研究範疇，乃匯聚水資源及農田水利相關領域的社會賢達與專家學者之力創立台水農院，原隸屬新北市政府教育局；2019年為尋求更大發展與突破，改隸教育部，成為「全國性教育事務財團法人學術研究機構」。多年來，本院研究領域涵蓋水資源管理與政策研究、水利工程規劃、水土環境監測、法規研析、教育訓練、國際合作交流等，不僅為農民解決農田灌溉問題，也提供研究成果做為政府決策參考，在水資源與農業領域相關研究機構中佔有獨特地位，也獲得政府與學界的肯定與重視。值此全球氣候變異現象日趨頻繁之際，水資源問題更為複雜而嚴峻，農業環境也面臨前所未有的考驗。本院擁有眾多專業人才，累積多年的研究經驗，針對各項問題深入分析探討，提出前瞻性的見解，積極因應氣侯變遷議題，提供更具效率的知識服務，發揮「政府智庫」的功能，為水資源與農業永續貢獻棉薄之力。
    </p>

    <div class="research">
      <h1>研究領域</h1>
      <div class="row">
        <div class="col-md-7 col-sm-12">
          <div class="row">
            <div class="col-6">
              <div class="card bg-dark text-white">
                <img src="../assets/images/Home/一所_介紹_Banner-p3w9ig9zi8rr9pe8ke565lut9tm8fy0acx18cj0zzk.jpg"
                  class="card-img" alt="...">
                <div class="card-img-overlay">
                  <RouterLink class="nav-link active" to="/ResearchInstitute1/研究一所/ResearchInstitute1">
                    <h5 class="card-title">
                      研究一所
                    </h5>
                  </RouterLink>


                  <p class="card-text">水文技術、農業用水與防災科技研究</p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="card bg-dark text-white">
                <img src="../assets/images/Home/2-1.jpg" class="card-img" alt="...">
                <div class="card-img-overlay">
                  <RouterLink class="nav-link active" to="/ResearchInstitute1/研究二所/ResearchInstitute2">
                    <h5 class="card-title">
                      研究二所
                    </h5>
                  </RouterLink>

                  <p class="card-text">農田水利事業組織、公共政策與行政法制研究</p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="card bg-dark text-white">
                <img src="../assets/images/Home/3.jpg" class="card-img" alt="...">
                <div class="card-img-overlay">
                  <RouterLink class="nav-link active" to="/ResearchInstitute1/研究三所/ResearchInstitute3">
                    <h5 class="card-title">
                      研究三所
                    </h5>
                  </RouterLink>

                  <p class="card-text">農業環境、農業經濟、農業政策與林業政策研究</p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="card bg-dark text-white">
                <img src="../assets/images/Home/4.jpg" class="card-img" alt="...">
                <div class="card-img-overlay">
                  <RouterLink class="nav-link active" to="/ResearchInstitute1/研究四所/ResearchInstitute4">
                    <h5 class="card-title">
                      研究四所
                    </h5>
                  </RouterLink>

                  <p class="card-text">農田水利工程規劃管考與生態檢核研究</p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="card bg-dark text-white">
                <img src="../assets/images/Home/5.jpg" class="card-img" alt="...">
                <div class="card-img-overlay">
                  <RouterLink class="nav-link active" to="/ResearchInstitute1/教育推廣處/EducationPromotionOffice">
                    <h5 class="card-title">
                      教育推廣處
                    </h5>
                  </RouterLink>

                  <p class="card-text">農田水利業務人員教育訓練與政策推廣研究</p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="card bg-dark text-white">
                <img src="../assets/images/Home/6-1.jpg" class="card-img" alt="...">
                <div class="card-img-overlay">
                  <RouterLink class="nav-link active" to="/ResearchInstitute1/國際合作處/InternationalCooperationOffice">
                    <h5 class="card-title">
                      國際合作處
                    </h5>
                  </RouterLink>

                  <p class="card-text">國際合作交流及宣導</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="col-md-5 col-sm-12">
          <ul>
            <li>水文分析與觀測技術</li>
            <li>水資源政策與區域水資源經營管理</li>
            <li>農業水資源智慧管理與灌溉配水</li>
            <li>水資源旱澇災害預警與應變制度</li>
            <li>農田水利事業制度</li>
            <li>農田水利組織</li>
            <li>公共政策及行政法制</li>
            <li>推動林業永續發展</li>
            <li>推動友善環境農業</li>
            <li>促進畜牧業產業發展</li>
            <li>農田水利中長程政策規劃及推動</li>
            <li>農田水利工程灌溉排水、取水設施工程可行性</li>
            <li>生態環境調查與生態檢核機制</li>
            <li>農田水利教育訓練</li>
            <li>水資源與農業會議與活動</li>
            <li>志工管理培訓</li>
            <li>食農教育推廣</li>
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
              <iframe class="video-iframe" src="https://www.youtube.com/embed/JTzkQs4SUWM?si=0yGrcb8s0-OXqt9d"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <a href="https://www.youtube.com/watch?v=JTzkQs4SUWM">大愛新聞台留住一滴水-
              虞國興院長極端氣候議題訪談</a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="video">
              <iframe class="video-iframe" src="https://www.youtube.com/embed/89cpd4V7qjk?si=vtIeXHFRSxLOAtQ2"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <a href="https://www.youtube.com/watch?v=JTzkQs4SUWM">大愛新聞台留住一滴水-
              虞國興院長水庫議題訪談</a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="video">
              <iframe class="video-iframe" src="https://www.youtube.com/embed/QaNo1i-XCj4?si=z_PLmeGksewlz_ZL"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <a href="https://www.youtube.com/watch?v=QaNo1i-XCj4">2022水圳綠道啟用典禮暨植樹活動</a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="video">
              <iframe class="video-iframe" src="https://www.youtube.com/embed/pdgLEjzbs6E?si=OlKm_LlSil8qY5PQ"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <a href="https://www.youtube.com/watch?v=pdgLEjzbs6E&t=37s">民事新聞台田下大小事 -
              蘇騰鋐副院長蔬菜耐淹水議題訪談</a>
          </div>
        </div>
      </div>
    </div>

    <div class="researche_wrap">
      <h1>研究成果平台</h1>
      <div class="row">
        <div class="platform col-md-4">
          <figure class="figure">
            <img src="../assets/images/Home/水圳綠道-1.png" class="figure-img img-fluid rounded" alt="...">
          </figure>
        </div>
        <div class="platform col-md-4">
          <figure class="figure">
            <img src="../assets/images/Home/綠能發展資訊.png" class="figure-img img-fluid rounded" alt="...">
          </figure>
        </div>
        <div class="platform col-md-4">
          <figure class="figure">
            <img src="../assets/images/Home/國際灌溉排水協會中華民國國家委員會.png" class="figure-img img-fluid rounded" alt="...">
          </figure>
        </div>
        <div class="platform col-md-6">
          <figure class="figure">
            <img src="../assets/images/Home/前瞻基礎建設.png" class="figure-img img-fluid rounded" alt="...">
          </figure>
        </div>
        <div class="platform col-md-6">
          <figure class="figure">
            <img src="../assets/images/Home/韌性農業.png" class="figure-img img-fluid rounded" alt="...">
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ScrollToTopBtn from '../components/ScrollToTopBtn.vue'

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
import CountUp from 'vue-countup-v3'
import { ref } from 'vue';
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
    color: #A47332;
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

  .card {
    border: none;
    margin-bottom: 40px;
  }

  .card-img-overlay {
    text-shadow: #363636 2px 2px 5px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    text-align: center;
    padding: 0;

    .card-title {
      font-size: 1.5rem;
      font-weight: 600;
      padding-bottom: 0;
      margin-bottom: 0;
    }

    .card-text {
      font-size: 0.9rem;
      font-weight: 500;
    }
  }
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
      font-size: 2.5rem;
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

@media screen and (max-width:768px) {
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
}
</style>