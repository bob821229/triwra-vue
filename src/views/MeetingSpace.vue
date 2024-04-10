<template>

    <div class="content">
        <h1>會議空間</h1>
        <div class="row">
            <div class="col-md-6" v-for="item in data" :key="item.name">
                <div class="card">
                    <img :src="item.img" class="card-img-top">
                    <div class="card-body">
                        <p class="card-text">{{ item.name }}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { getMeetingSpace } from '../api/api.js'
import { ref, onMounted } from 'vue'
interface MeetingSpaceItem {
    name: string;
    img: string;
}
const data = ref<MeetingSpaceItem[]>([]);

onMounted(() => {
    getData()
})
const getData = async () => {
    try {
        const result = await getMeetingSpace();
        data.value = result.data;
    } catch (error) {
        console.log("連線失敗", error);
    }
}
</script>

<style scoped lang="scss">
.content {
    padding: 0;
    max-width: 1100px;
    margin: 50px auto;

    h1 {
        text-align: center;
        color: #A47332;
        font-size: 35px;
        font-weight: 500;
    }

    .card {
        border: none;
        margin: 10px 0;

        .card-img-top {
            aspect-ratio: 928/580;
        }

        .card-text {
            color: #54595f;
            font-size: 22px;
            font-weight: 700;
            text-align: center;
        }
    }

}
</style>