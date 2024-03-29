<template>

    <div class="content">
        <form class="row g-3 needs-validation" novalidate @submit.prevent>
            <span class="title">聯絡我們?</span>
            <span class="remark">若您有任何需要我們服務的地方，請填寫以下表單表達您的意見，我們收到您的來信後，將儘速回覆。</span>
            <div class="form_group col-md-4">
                <label for="name" class="form-label">
                    姓名
                    <span class="text-danger"> *</span>
                </label>
                <input type="text" class="form-control" id="name" placeholder="請輸入您的姓名" required
                    v-model.trim="formData.name">
                <div class="text-danger error_msg" v-for="error in v$.name.$errors" :key="error.$uid">
                    {{ error.$message }}
                </div>
            </div>
            <div class="form_group col-md-4">
                <label for="unit" class="form-label">
                    單位
                    <span class="text-danger"> *</span>
                </label>
                <input type="text" class="form-control" id="unit" placeholder="請輸入學校、機構名稱" required
                    v-model.trim="formData.unit">
                <div class="text-danger error_msg" v-for="error in v$.unit.$errors" :key="error.$uid">{{ error.$message
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
                <label for="text" class="form-label">電話
                    <span class="text-danger"> *</span>
                </label>
                <div class="input-group has-validation">
                    <input type="tel" class="form-control" id="phone" aria-describedby="inputGroupPrepend"
                        placeholder="請輸入您的電話號碼" required v-model.trim="formData.phone">
                </div>
                <div class="text-danger error_msg" v-for="error in v$.phone.$errors" :key="error.$uid">
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
                <button :disabled="isValid" class="btn btn-primary" type="submit" @click="submitForm()">送出</button>
            </div>
        </form>

    </div>


</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength, helpers } from '@vuelidate/validators'
import { reactive, ref, computed, watch } from 'vue'
import vueRecaptcha from 'vue3-recaptcha2';
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
        alert('驗證過期啦QAQ 請重新勾選"我不是機器人"');
        response.value = '';
    },
    recaptchaFailed: () => {
        // 驗證失敗進行的動作
        // After recaptcha is failed, the action you can do.
    },
});

const formData = reactive({
    name: '',
    unit: '',
    position: '',
    phone: '',
    email: '',
    purpose: '',
    content: ''
})
const checkPhone = (value: string) => {
    if (value == '') { return true }
    const phoneRegex = /^09\d{2}-?\d{3}-?\d{3}$/;
    return phoneRegex.test(value);
}

// 驗證欄位名稱
const rules = computed(() => {
    return {
        name: {
            required: helpers.withMessage("姓名為必填", required),
            maxLength: helpers.withMessage("姓名長度最多10個字", maxLength(10)),
        },
        unit: {
            required: helpers.withMessage("單位為必填", required)
        },
        position: {
            required: helpers.withMessage("職稱為必填", required)
        },
        phone: {
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
// 驗證規則
const v$ = useVuelidate(rules, formData);
watch(formData, () => {
    v$.value.$validate();
}, { deep: true });

const isValid = computed(() => {
    return v$.value.$invalid;
})
const resetFormData = () => {
    formData.name = '';
    formData.unit = '';
    formData.position = '';
    formData.phone = '';
    formData.email = '';
    formData.purpose = '';
    formData.content = '';
    v$.value.$reset();
}
// 驗證刷新function
const resetHandle = () => {
    v$.value.$reset();
};
const submitForm = async () => {
    const result = await v$.value.$validate();
    if (result) {

        // const token = await execute('submit');
        // console.log(token.score);
        // console.log("表單驗證成功");
        if (response.value.length > 0) {
            alert("表單驗證成功");
        } else {
            alert("請勾選我不是機器人");
        }


    } else {
        // console.log("表單驗證失敗");
        alert("表單驗證失敗");
    }
}

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
    font-size: 20px;
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