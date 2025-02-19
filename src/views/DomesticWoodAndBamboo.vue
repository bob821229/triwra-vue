<template>
    <div class="banner_wrap">
        <img   class="fill_image" src="../assets/images/DomesticWoodAndBamboo/banner.jpg" alt="...">
        <!-- <div class="background-image"></div> -->
        <div class="text_wrap text-nowrap" style="justify-content: center;top: 80%;">國產木竹材驗證中心</div>
    </div>
    <div class="dempartment_wrap">
        <div class="main_title" v-show="false">
            <h1>
                <span>
                    {{ data.departmentName }}
                </span>
            </h1>
        </div>
        <div class="second-title">
            <span>
                {{ data.departmentTitle }}
            </span>
        </div>
        <div class="row">
            <div class="content_text col-12 col-md-9">
                {{ data.departmentContent }}
                <table class="table table-bordered " style="border-radius: 10px;">
                    <thead>
                        <tr class="table-primary">
                            <th scope="col">實習稽核員</th>
                            <th scope="col">學歷</th>
                            <th scope="col">工作年資</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">陳昱蓉</td>
                            <td>國立臺灣大學森林環境暨資源所 博士</td>
                            <td>15年</td>
                        </tr>
                        <tr>
                            <td>成瑋</td>
                            <td>中興大學森林所 碩士</td>
                            <td>8年</td>
                        </tr>
                        <tr>
                            <td>花瑄鴻</td>
                            <td>國立臺灣大學森林環境暨資源所 碩士</td>
                            <td>2年</td>
                        </tr>
                        <tr>
                            <td>謝宇雯</td>
                            <td>國立宜蘭大學森林暨自然資源所 碩士</td>
                            <td>2年</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-12 col-md-3 " >
                <img style="cursor: pointer;" class="img-fluid" src="../assets/images/DomesticWoodAndBamboo/認證書.png" alt="認證書"
                    data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            </div>
            <!-- Modal -->
            <div class="modal fade" id="staticBackdrop"  data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <!-- <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div> -->
                        <div class="modal-body">
                            <img class="img-fluid" src="../assets/images/DomesticWoodAndBamboo/認證書.png" alt="認證書">
                        </div>
                        <!-- <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Understood</button>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="second-title">
            <span>
                服務項目
            </span>
        </div>
        <div class="content_text">
            本中心依據農產品產銷履歷制度相關法規，提供林產品個別驗證，驗證項目包含：原木、山造角材、原竹、木製材品及竹製材品，若有任何需求歡迎點選下列「留言給我們」，相關申請文件如下。


        </div>


        <div class="second-title">

            <span>
                {{ data.researchAreasTitle }}
            </span>
        </div>
        <div class="content_text file_wrap">
            <div class="file-item" v-for="file in data.files" :key="file?.fileName">
                <span class="file-name">{{ file?.fileName }}</span>
                <span class="dotted-line"></span>
                <!-- <button type="button" class="btn btn-primary" ><i class="bi bi-download"></i>下載</button> -->
                <a :href="`/files/${file?.fileUrl}`" target="_blank" rel="noopener noreferrer" class="btn btn-primary"
                    download>
                    <i class="bi bi-download me-1"></i>下載
                </a>
            </div>
        </div>

        <!-- TODO 聯絡資訊 -->
        <div class="contact_wrap mt-5"
            style="display: flex;flex-direction: column;justify-content: center;align-items: center;" >
            <button class="btn custom-button-color rounded-pill mb-2" @click="isShowFrom = !isShowFrom" v-show="false">
                <i class="bi" :class="isShowFrom ? 'bi-chevron-up' : 'bi-envelope'"></i>
                {{ isShowFrom ? '收起表單' : '留言給我們' }}
            </button>

            <div class="from_wrap" :class="{ 'collapse': !isShowFrom }" style="transition: all 0.3s ease-in-out">
                <form class="row g-3 needs-validation" novalidate @submit.prevent>
                    <span class="title">聯絡我們?</span>
                    <span class="remark">若您有任何需要我們服務的地方，請填寫以下表單表達您的意見，我們收到您的來信後，將儘速回覆。</span>
                    <div class="form_group col-md-6">
                        <label for="fullName" class="form-label">
                            姓名
                            <span class="text-danger"> *</span>
                        </label>
                        <input type="text" class="form-control" id="fullName" placeholder="請輸入您的姓名" required
                            v-model.trim="formData.fullName">
                        <div class="text-danger error_msg" v-for="error in v$.fullName.$errors" :key="error.$uid">
                            {{ error.$message }}
                        </div>
                    </div>
                    <div class="form_group col-md-6">
                        <label for="organation" class="form-label">
                            單位
                            <span class="text-danger"> *</span>
                        </label>
                        <input type="text" class="form-control" id="organation" placeholder="請輸入學校、機構名稱" required
                            v-model.trim="formData.organation">
                        <div class="text-danger error_msg" v-for="error in v$.organation.$errors" :key="error.$uid">
                            {{
                                error.$message
                            }}</div>
                    </div>
                    <div class="form_group col-md-6">
                        <label for="contactNumber" class="form-label">電話
                            <span class="text-danger"> *</span>
                        </label>
                        <div class="input-group has-validation">
                            <input type="tel" class="form-control" id="contactNumber"
                                aria-describedby="inputGroupPrepend" placeholder="請輸入您的電話號碼" required
                                v-model.trim="formData.contactNumber">
                        </div>
                        <div class="text-danger error_msg" v-for="error in v$.contactNumber.$errors" :key="error.$uid">
                            {{ error.$message }}
                        </div>
                    </div>
                    <div class="form_group col-md-6">
                        <label for="email" class="form-label">Email
                            <span class="text-danger"> *</span>
                        </label>
                        <div class="input-group has-validation">
                            <input type="email" class="form-control" id="email" placeholder="Example: user@website.com"
                                aria-describedby="inputGroupPrepend" required v-model.trim="formData.email">
                        </div>
                        <div class="text-danger error_msg" v-for="error in v$.email.$errors" :key="error.$uid">
                            {{ error.$message }}
                        </div>
                    </div>
                    <span class="title">需要甚麼幫助?</span>
                    <div class="form_group col-md-12">
                        <label for="purpose" class="form-label">目的
                            <span class="text-danger"> *</span>
                        </label>
                        <input type="text" class="form-control" id="purpose" required v-model.trim="formData.purpose">
                        <div class="text-danger error_msg" v-for="error in v$.purpose.$errors" :key="error.$uid">
                            {{ error.$message }}
                        </div>
                    </div>
                    <div class="form_group col-md-12">
                        <label for="content" class="form-label">內容
                            <span class="text-danger"> *</span>
                        </label>
                        <textarea class="form-control" id="content" rows="5" v-model.trim="formData.content"></textarea>
                        <div class="text-danger error_msg" v-for="error in v$.content.$errors" :key="error.$uid">
                            {{ error.$message }}
                        </div>
                    </div>
                    <div class="form_group col-12 ">
                        <vue-recaptcha :sitekey="instance_vueRecaptchaV2.data_v2SiteKey" size="normal" theme="light"
                            hl="zh-TW" @verify="instance_vueRecaptchaV2.recaptchaVerified"
                            @expire="instance_vueRecaptchaV2.recaptchaExpired"
                            @fail="instance_vueRecaptchaV2.recaptchaFailed" />
                    </div>
                    <div class="form_group col-12 text-center">
                        <button class="btn btn-primary" type="button" @click="submitForm()">送出</button>
                    </div>
                </form>
            </div>

            <!-- <a href="mailto:blue821229@triwra.org.tw">發送電子郵件</a> -->
            <div class="content_text mt-2 mb-5">
                聯絡資訊：02-28093497 #764 賴靖陽 <br>
            </div>


        </div>

        <!-- TODO 輪播圖 -->
        <Carousel class="mt-5" :key="carouselKey" :value="data.images" :numVisible="3" :numScroll="1"
            :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000" :showIndicators="false">
            <template #item="slotProps">
                <div class="m-2 ">
                    <img :src="slotProps.data" class="img-fluid img_wrap" alt="...">
                </div>
            </template>
        </Carousel>

        <!-- TODO 地理位置 -->
        <div class="map_wrap mt-5">
            <div class="second-title">
                <span>地理位置</span>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14446.647095238317!2d121.45704409999999!3d25.14712325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442af92d6eaad3d%3A0x7d107b44577b7fcd!2z5Y-w54Gj5rC06LOH5rqQ6IiH6L6y5qWt56CU56m26Zmi!5e0!3m2!1szh-TW!2stw!4v1732085912685!5m2!1szh-TW!2stw"
                style="border:0;width: 100%;height: 450px;" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>


    </div>

</template>

<script setup lang="ts">
import { ref, onMounted, computed, watchEffect, watch, nextTick, reactive } from 'vue'
// import Department from '../components/Department.vue'
import { getResearchInstitute } from '../api/api'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import { useRoute, RouterLink, useRouter } from "vue-router";
import Button from "primevue/button"
import Image from 'primevue/image';
import Carousel from 'primevue/carousel';
import 'bootstrap/dist/js/bootstrap.bundle';

import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength, helpers } from '@vuelidate/validators'
import vueRecaptcha from 'vue3-recaptcha2';
import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js'
//斷點設定
const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);
// 部門資料
const data = ref({
    departmentName: '',
    departmentTitle: '',
    departmentContent: '',
    researchAreasTitle: '',
    researchAreasContent: '',
    researchAreaslist: [],
    images: [],
    files: [
        {
            fileName: "",
            fileUrl: ""
        }
    ],
});
//輪播圖的key每次載入新的頁面就加1
const carouselKey = ref(0);
// 取出路由
const route = useRoute()
//表單是否顯示
const isShowFrom = ref(false)
//認證書是否顯示
const showModal = ref(false)
//監聽路由變化 
watchEffect(async () => {
    await fetchData()
    //資料有變化 就重新渲染
    carouselKey.value++;
})
//取得部門資料
async function fetchData() {
    try {
        const response = await getResearchInstitute('DomesticWoodAndBamboo')
        data.value = response.data
        console.log(data.value)

    } catch (error) {
        console.log(error)
    }
}

// ============以下 表單使用的================
function showAlert(title = "", text = "", icon = "success") {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        // confirmButtonColor: "#A47332"
        // confirmButtonText: '確認'
    })

}
const router = useRouter();
//跳轉到成功頁面
function redirectToSuccessPage() {
    router.push('/success');
}
//驗證
const response = ref('');
const instance_vueRecaptchaV2 = reactive({
    // 請換成你註冊的 SiteKey
    // Please change to your SiteKey.
    data_v2SiteKey: '6LfiNagpAAAAAHMu1v6CqjjOR9830A4YCZHpNT-p',
    recaptchaVerified: (response_token: string) => {
        console.log(response_token);
        response.value = response_token;
        // 連接後端API，給後端進行認證
        // Connect to your Backend service.
    },
    recaptchaExpired: () => {
        // 驗證過期後進行的動作
        // After recaptcha is expired, the action you can do.
        // console.log('驗證過期啦QAQ');
        // alert('驗證過期啦QAQ 請重新勾選"我不是機器人"');
        response.value = '';
        showAlert('驗證過期啦QAQ', '請重新勾選"我不是機器人"', 'warning')
    },
    recaptchaFailed: () => {
        // 驗證失敗進行的動作
        // After recaptcha is failed, the action you can do.
    },
});
//表格資訊
const formData = reactive({
    fullName: '',
    organation: '',
    contactNumber: '',
    email: '',
    purpose: '',
    content: ''
})
//驗證手機(自訂規則)
const checkPhone = (value: string) => {
    if (value == '') { return true }
    const phoneRegex = /^09\d{2}-?\d{3}-?\d{3}$/;
    return phoneRegex.test(value);
}
// 驗證規則
const rules = computed(() => {
    return {
        fullName: {
            required: helpers.withMessage("姓名為必填", required),
            maxLength: helpers.withMessage("姓名長度最多10個字", maxLength(10)),
        },
        organation: {
            required: helpers.withMessage("單位為必填", required)
        },
        contactNumber: {
            required: helpers.withMessage("電話為必填", required),
            checkPhone: helpers.withMessage("請輸入正確的電話格式", checkPhone)
        },
        email: {
            required: helpers.withMessage("信箱為必填", required),
            email: helpers.withMessage("請輸入正確的email格式", email)
        },
        purpose: {
            required: helpers.withMessage("目的為必填", required),
            maxLength: helpers.withMessage("目的長度最多10個字", maxLength(10)),
        },
        content: {
            required: helpers.withMessage("內容為必填", required)
        }
    };
});
//驗證套件實體
const v$ = useVuelidate(rules, formData);
// 有輸入就驗證
watch(formData, () => {
    v$.value.$validate();
}, { deep: true });
// 驗證結果(布林值)
const isValid = computed(() => {
    return v$.value.$invalid;
})
//重置表單
const resetFormData = () => {
    formData.fullName = '';
    formData.organation = '';
    formData.contactNumber = '';
    formData.email = '';
    formData.purpose = '';
    formData.content = '';
    v$.value.$reset();
}
// 驗證刷新function
const resetHandle = () => {
    v$.value.$reset();
};
//送出表單
const submitForm = async () => {
    const result = await v$.value.$validate();
    if (result) {

        if (response.value.length > 0) {
            showAlert("表單驗證成功", '', 'success')
            //送出表單
            saveData()
            redirectToSuccessPage()
        } else {
            showAlert('請勾選我不是機器人', '', 'warning')
        }


    } else {
        showAlert("表單驗證失敗", '', 'error')
    }
}
onMounted(() => {
    //取得token
    getCsrfToken()
})
//存取token
const xsrfToken = ref<string | null>(null)
//取得token
async function getCsrfToken() {
    console.log("getToken")
    try {
        const res = await axios.get("/antiforgery/token");
        console.log(res);
        if (typeof window !== 'undefined') {
            const cookieString = document.cookie.split('; ').find(row => row.startsWith('XSRF-TOKEN='));
            if (cookieString) {
                xsrfToken.value = cookieString.split('=')[1];
            }
        }
    } catch (error) {
        console.error('Error getting CSRF token:', error);
    }
}
//送出表單
async function saveData() {
    try {
        let obj = {
            fullName: "",
            organation: "",
            contactNumber: "",
            email: "",
            purpose: "",
            content: "",
            category: ""
        };
        obj.fullName = formData.fullName;
        obj.organation = formData.organation;
        obj.contactNumber = formData.contactNumber;
        obj.email = formData.email;
        obj.purpose = formData.purpose;
        obj.content = formData.content;
        obj.category = "02"


        const response = await axios.post('/api/Contact/saveData', obj);
        //跳轉到成功頁面
        redirectToSuccessPage()
    } catch (error: any) {
        console.error('Error saving data:', error);
        if (error.response.status === 400) {
            // alert('請重新點擊送出');
            showAlert('請重新點擊 "送出"', '', 'warning')
            //重新取得token
            getCsrfToken()
        }
    }
};
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


    .file-item {
        display: flex;
        align-items: center;
        margin-top: 20px;
    }

    .file-name {
        margin-right: 8px;
        /* 與虛線間隔 */
    }

    .dotted-line {
        flex-grow: 1;
        /* 填滿剩餘空間 */
        border-bottom: 1px dashed #999;
        margin: 0 8px;
        /* 與文字和按鈕保持間隔 */
    }

    .download-btn {
        background-color: #007bff;
        color: #fff;
        border: none;
        padding: 4px 8px;
        border-radius: 4px;
        cursor: pointer;
    }

    .download-btn:hover {
        background-color: #0056b3;
    }
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

.img_wrap {
    //height: 250px;
    aspect-ratio: 1.6/1;
}

.banner_wrap {
    width: 100%;
    overflow: hidden;
    position: relative;
    max-height: 715px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .fill_image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .background-image {
        // position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 50vw;
        background-image: url("@/assets/images/DomesticWoodAndBamboo/banner.jpg");
        background-size: cover;
        background-position: center;
    }

    .text_wrap {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        color: #fff;
        font-size: 4rem;
        line-height: 1;
        font-weight: 600;
        text-shadow: 5px 5px 10px rgb(0, 0, 0);
    }
}
.table{
    font-weight: 500;
    th{
        white-space: nowrap;
        text-align: center;
    }
}
@media screen and (max-width:768px) {
    .banner_wrap {
    width: 100%;
    overflow: hidden;
    position: relative;
    max-height: 715px;

    .text_wrap {
        font-size: 2rem;
    }
    }
    .table{
        font-size: 16px;
    }
}
.custom-button-color {
    background-color: #A47332;
    border-color: #A47332;
    color: #fff;
    font-weight: bold;

    &:hover {
        color: #fff;
        background-color: #845e22;
        border-color: #845e22;
    }
}

.from_wrap {
    margin: 0 auto;
    // width: 60%;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9
}

.table-primary {
    --bs-table-color: #fff;
    --bs-table-bg: #a48965;
    --bs-table-border-color: #fff;
    --bs-table-striped-bg: #A47332;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #A47332;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #A47332;
    --bs-table-hover-color: #000;
    color: var(--bs-table-color);
    border-color: var(--bs-table-border-color);
}

</style>