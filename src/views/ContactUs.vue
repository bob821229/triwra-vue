<template>
    <div class="table_wrap">
        <table id="myTable" class="table table-striped table-bordered border-dark">
            <thead>
                <tr>
                    <th data-field="unit" data-halign="center" data-align="center">單位</th>
                    <th data-field="name" data-halign="center" data-align="center">姓名</th>
                    <th data-field="phone" data-halign="center" data-align="center">電話</th>
                </tr>
            </thead>
        </table>
        <div class="footer_wrap">
            <RouterLink to="/ContactForm">
                <a href="">聯絡我們請點此處</a>
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

let data = [
    {
        "unit": "院長",
        "name": "虞國興",
        "phone": "(02)2809-3497 分機 677"
    },
    {
        "unit": "副院長",
        "name": "鄭克聲",
        "phone": "(02)2809-3497 分機 803"
    },
    {
        "unit": "副院長",
        "name": "吳啟瑞",
        "phone": "(02)2809-3497 分機 801"
    },
    {
        "unit": "一所所長",
        "name": "吳啟瑞",
        "phone": "(02)2809-3497 分機 801"
    },
    {
        "unit": "二所所長",
        "name": "邱豐真",
        "phone": "(02)2809-3497 分機 850"
    },
    {
        "unit": "三所所長",
        "name": "黃啟瑞",
        "phone": "(02)2809-3497 分機 761"
    },
    {
        "unit": "四所所長",
        "name": "蘇騰鋐",
        "phone": "(02)2809-3497 分機 770"
    },
    {
        "unit": "助理院長",
        "name": "李佩玲",
        "phone": "(02)2809-3497 分機 750"
    },
    {
        "unit": "助理院長",
        "name": "邱豐真",
        "phone": "(02)2809-3497 分機 850"
    },
    {
        "unit": "助理院長",
        "name": "黃啟瑞",
        "phone": "(02)2809-3497 分機 761"
    },
    {
        "unit": "教育推廣處處長",
        "name": "李佩玲",
        "phone": "(02)2809-3497 分機 750"
    },
    {
        "unit": "國際合作處處長",
        "name": "陳志昇",
        "phone": "(02)2809-3497 分機 861"
    }
]
onMounted(() => {
    $('#myTable').bootstrapTable({
        data: data
    })
})
</script>

<style scoped lang="scss">
.table_wrap {
    width: 80%;
    margin: 50px auto 0;

    .footer_wrap {
        padding: 10px 0;
        text-align: right;

        a {
            color: #A47332;
        }
    }
}
</style>