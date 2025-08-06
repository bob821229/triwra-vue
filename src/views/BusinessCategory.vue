<template>
    <div class="content">
        <h1>業務範疇</h1>
        <p class="content_text">
            本院設有六個研究所、林業研究發展中心、教育推廣處、國際合作處及二個支援部門（數位發展處與行政管理處）。本院以研究國內外水資源與農業領域整合議題，從事學術研究、技術服務、教育推廣及知識傳播為目的，主要辦理下列業務：
        </p>
        <ul class="list_wrap">
            <li>水資源與農業相關之活動，如教育與訓練、學術演講、學術研 討會、國際學術交流及各種媒體等活動之辦理。</li>
            <li>全國國小、國中及高中之水資源與農業環境教育宣導與專業訓練。</li>
            <li>承辦水資源與農業相關研究發展計畫，培育專業研究人才。</li>
            <li>與國內外相關大學院校合作，研析水資源與農業跨領域課題，提供政府相關因應策略諮詢服務。</li>
            <li>辦理水資源與農業相關領域之專業輔導、技術研發、技術移轉、產品測試、檢驗及認驗證服務、土木水利工程技術服務、生物資源調查、環境管理、水土保持及農村再生等。</li>
            <li>發行、出版研究成果。</li>
            <li>其他符合本院設立目的之相關公益性教育事務。</li>
        </ul>
        <h1>組織架構</h1>
        <div class="img_wrap">
            <img class="img-fluid" src="/images/BusinessCategory/組織架構圖.png" alt="">
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.content {
    padding: 0;
    max-width: 1100px;
    margin: 50px auto;

    h1 {
        margin: 50px 0;
        text-align: center;
        color: #A47332;
        font-size: 2.2rem;
        font-weight: 500;
        text-decoration: underline;
    }



    .content_text {
        font-size: 1.375rem;
        font-weight: 500;
        color: #54595f;
        line-height: 41px;
    }

    .img_wrap {
        width: 100%;
        text-align: center;

        img {
            width: 100%;
        }
    }
}

.list_wrap {
    margin: 20px 0;
    padding: 20px;
    list-style: disc;


    li {
        font-size: 1.375rem;
        font-weight: 500;
        color: #54595f;
    }
}
</style>