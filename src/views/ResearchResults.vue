<template>
    <div class="research-results-wrap">
        <h1 class="title">近年研究成果</h1>
        <div class="table_wrap">
            <table id="myTable" class="table table-striped table-bordered border-dark">
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getResearchResults } from '../api/api'
import 'bootstrap-table/dist/locale/bootstrap-table-zh-TW.min.js';

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
        locale: 'zh-TW',//語言中文
        sortable: true,
        search: true,
        searchAlign: 'right', // 將搜尋框對齊到右側
        pagination: true,
        paginationHAlign: 'right', // 控制分頁按鈕的水平對齊方式
        paginationDetailHAlign: 'left', // 控制分頁詳細信息的水平對齊方式
        pageSize: 10, // 每頁顯示的行數
        paginationParts: ['pageInfo', 'pageList'],//預設: ['pageInfo', 'pageSize', 'pageList']
        // paginationNextText: '下一頁',
        // paginationPreText: '上一頁',
        //自定義分頁字串顯示為中文
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return "目前顯示 第" + pageFrom + " 至 第" + pageTo + "個資料列，總計" + totalRows + "個資料列";
        },
        //自定義分頁字串顯示為中文
        formatRecordsPerPage: function (pageNumber) {
            return '每頁顯示' + pageNumber + '個資料列';
        },
        // // 自定義搜尋框placeholder
        // formatSearch() {
        //     return '搜尋'
        // }
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

<style lang="scss">
.research-results-wrap {

    a.page-link {
        color: #666 !important;

    }

    .active .page-link {
        color: #fff !important;
        background-color: #A47332;
        border: #A47332 1px solid;
    }

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

    .btn-secondary {
        background-color: #A47332;
        border: #A47332 1px solid;

    }
}
</style>