<template>
    <div class="table_wrap">
        <table id="myTable" class="table  table-bordered border-dark">
            <thead>
                <tr>
                    <th data-field="unit" data-halign="center" data-align="center" data-width="40" data-width-unit="%"
                        class="bold">
                        單位</th>
                    <th data-field="position" data-halign="center" data-align="center" data-width="20"
                        data-width-unit="%" class="bold">職稱</th>
                    <th data-field="name" data-halign="center" data-align="center" data-width="20" data-width-unit="%"
                        class="bold">
                        姓名</th>
                    <th data-field="extension" data-halign="center" data-align="center" data-width="20"
                        data-width-unit="%" class="bold">02-2809-3497分機</th>
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
import { getContacts } from '../api/api.js'

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
const tableData = ref([])

function headerStyle(column: any) {
    return {
        classes: 'thead-style',
        extension: {
            classes: 'red-text'
        },
    }
}

// 取得聯絡資料
const getTableData = async () => {
    tableData.value = (await getContacts()).data
}
interface MergeInfo {
    pre?: string | null;
    mergeIdx?: number;
    mergeRows?: number;
    list?: Array<{
        idx: number;
        rowspan: number;
    }>;
}

interface ObjType {
    [key: string]: MergeInfo;
}
// 建立表格
const bindTable = () => {
    $('#myTable').bootstrapTable({
        data: tableData.value,
        onPostBody: (d: any) => {
            let mergeCompare: ObjType = {
                unit: {
                    pre: null,
                    mergeIdx: 0,
                    mergeRows: 0,
                    list: [],
                },
            };
            d.forEach((r: any, idx: any) => {
                compareMenu(mergeCompare, "unit", r.unit, idx);
            });

            flushMergeInfo(mergeCompare, "unit");

            console.log(mergeCompare);
            mergeRows(mergeCompare, "unit");
        },
        headerStyle: headerStyle
    })
}
function compareMenu(obj: any, field: any, currentFieldValue: any, dataRowIdx: any) {
    if (obj[field].pre != null && obj[field].pre != currentFieldValue) {
        //flush
        flushMergeInfo(obj, field);
        obj[field].mergeIdx = dataRowIdx;
        obj[field].mergeRows = 0;
    }
    obj[field].mergeRows++;
    obj[field].pre = currentFieldValue;
}
function flushMergeInfo(obj: any, field: string) {
    obj[field].list.push({
        idx: obj[field].mergeIdx,
        rowspan: obj[field].mergeRows,
    });
}
function mergeRows(obj: any, field: string) {
    obj[field].list.forEach((data: any, idx: any) => {
        $("#myTable").bootstrapTable("mergeCells", {
            index: data.idx,
            field: field,
            colspan: 1,
            rowspan: data.rowspan,
        });
    });
}

onMounted(async () => {
    await getTableData()
    bindTable()

})
</script>

<style scoped lang="scss">
.table_wrap {
    width: 80%;
    margin: 50px auto 0;

    .table td,
    .table th {
        font-weight: bold;
    }

    .footer_wrap {
        padding: 10px 0;
        text-align: right;

        a {
            color: #A47332;
        }
    }


}

.thead-style {
    background-color: #F9E4A9;
}

td .bold {
    font-weight: bold;
}

th.red-text {
    color: red;
}
</style>