<template>
    <h1 class="title">近年研究成果</h1>
    <div class="table_wrap">
        <table id="myTable" class="table table-striped table-bordered border-dark"></table>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getResearchResults } from '../api/api'


const options = ref(
    {
        columns: [
            {
                title: '所處',
                field: 'department',
                sortable: true,
                align: 'center'

            },
            {
                title: '時間',
                field: 'year',
                sortable: true,
                align: 'center'
            },
            {
                title: '計畫名稱',
                field: 'projectName',
                sortable: true,
                align: 'left'

            },
            {
                title: '委辦機關',
                field: 'organizer',
                sortable: true,
                align: 'left'

            }
        ],
        data: [],
        // theadClasses: 'table-success',
        sortable: true,
        search: true,
        searchAlign: 'right', // 將搜尋框對齊到右側
        pagination: true,
        formatPaginationDetail: function (pageNumber, pageSize, totalRows) {
            // 自定义分页详细信息文本
            return `显示 ${pageNumber * pageSize - pageSize + 1} 到 ${Math.min(pageNumber * pageSize, totalRows)} 的 ${totalRows} 行`;
        },
        paginationHAlign: 'left', // 控制分頁按鈕的水平對齊方式
        paginationDetailHAlign: 'right', // 控制分頁詳細信息的水平對齊方式
        pageSize: 10, // 每頁顯示的行數
        paginationNextText: '下一頁',
        paginationPreText: '上一頁',
    })
async function getData() {
    try {
        const result = await getResearchResults();
        options.value.data = result.data;
    } catch (error) {
        console.log("連線失敗", error);
    }
}

onMounted(async () => {
    await getData();
    $('#myTable').bootstrapTable(options.value);
});
</script>

<style scoped lang="scss">
.title {
    text-align: center;
    color: #A47332;
    font-size: 35px;
    font-weight: 500;
}

.table_wrap {
    width: 80%;
    margin: 0 auto;


}
</style>