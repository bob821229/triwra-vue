<template>

    <div class="content">

        <form class="row g-3 needs-validation" novalidate @submit.prevent>
            <span class="title">聯絡我們?</span>
            <span class="remark">若您有任何需要我們服務的地方，請填寫以下表單表達您的意見，我們收到您的來信後，將儘速回覆。</span>
            <div class="form_group col-md-4">
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
            <div class="form_group col-md-4">
                <label for="organation" class="form-label">
                    單位
                    <span class="text-danger"> *</span>
                </label>
                <input type="text" class="form-control" id="organation" placeholder="請輸入學校、機構名稱" required
                    v-model.trim="formData.organation">
                <div class="text-danger error_msg" v-for="error in v$.organation.$errors" :key="error.$uid">{{
                    error.$message
                }}</div>
            </div>
            <div class="form_group col-md-4">
                <label for="position" class="form-label">
                    職稱
                    <span class="text-danger"> *</span>
                </label>
                <input type="text" class="form-control" id="position" placeholder="職位、學生、民眾" required
                    v-model.trim="formData.position">
                <div class="text-danger error_msg" v-for="error in v$.position.$errors" :key="error.$uid">
                    {{ error.$message }}
                </div>
            </div>
            <div class="form_group col-md-6">
                <label for="contactNumber" class="form-label">電話
                    <span class="text-danger"> *</span>
                </label>
                <div class="input-group has-validation">
                    <input type="tel" class="form-control" id="contactNumber" aria-describedby="inputGroupPrepend"
                        placeholder="請輸入您的電話號碼" required v-model.trim="formData.contactNumber">
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
                <vue-recaptcha :sitekey="instance_vueRecaptchaV2.data_v2SiteKey" size="normal" theme="light" hl="zh-TW"
                    @verify="instance_vueRecaptchaV2.recaptchaVerified"
                    @expire="instance_vueRecaptchaV2.recaptchaExpired"
                    @fail="instance_vueRecaptchaV2.recaptchaFailed" />
            </div>
            <div class="form_group col-12 text-center">
                <button class="btn btn-primary" type="button" @click="submitForm()">送出</button>
            </div>
        </form>
        <!-- <button @click="saveData">saveData</button>
        <button @click="redirectToSuccessPage">redirectToSuccessPage</button>
        <button @click="resetHandle">resetHandle</button> -->

    </div>


</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength, helpers } from '@vuelidate/validators'
import { reactive, ref, computed, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import vueRecaptcha from 'vue3-recaptcha2';
import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js'
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
    position: '',
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
        position: {
            required: helpers.withMessage("職稱為必填", required)
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
    formData.position = '';
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
            position: "",
            contactNumber: "",
            email: "",
            purpose: "",
            content: "",
            category:""
        };
        obj.fullName = formData.fullName;
        obj.organation = formData.organation;
        obj.position = formData.position;
        obj.contactNumber = formData.contactNumber;
        obj.email = formData.email;
        obj.purpose = formData.purpose;
        obj.content = formData.content;
        obj.category="02"


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
.content {
    margin: 0 auto;
    width: 60%;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9
}

span.title {
    font-size: 1.25rem;
    font-weight: bold;
}

.remark {
    color: #999;
    font-size: 14px;
    font-weight: 400;
    margin-top: 0;
}

.form_group {
    margin-bottom: 20px;

    label {
        font-size: 16px;
        font-weight: bold;
    }
}

.btn-primary {
    background-color: #A47332;
    border-color: #A47332;
}

.error_msg {
    padding: 2px;
}

.v3-margin {
    margin-top: 20px;
}
</style>