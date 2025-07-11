<template>
  <h1 style="text-align: center;">主管簡介</h1>
  <div class="top_wrap">
    <!-- <h2>董事會</h2> -->
    <p>董事長：<a href="#吳榮義">吳榮義</a></p>
    <!-- <p>董事：王瑞德、余化龍、吳瑞賢、周師文、林聰賢、林濟民、陳伸賢、許銘熙、黃裕星、游保杉、蔡明華、<a href="#虞國興">虞國興</a>（依姓氏筆畫序）</p>


    <h2>諮詢委員</h2>
    <p>何俐禛</p>


    <h2>顧問</h2>
    <p>林尉濤、蔡明華、廖安定、鄭隨和、鄭錦章、黃裕星、郭鴻裕、 劉宗德 、陳尊賢、黃錦堂</p>


    <h2>院長室</h2> -->
    <p>院　長：<a href="#虞國興">虞國興</a></p>
    <p>副院長：<a href="#吳啟瑞">吳啟瑞</a>、<a href="#蘇騰鋐">蘇騰鋐</a>、<a href="#邱雅梅">邱雅梅</a>
    </p>

    <!-- <p>助理院長 <a href="#李佩玲">李佩玲</a> </p> -->

  </div>
  <div class="content">
    <!-- <h1 style="text-align: center;">主管簡介</h1> -->
    <ManagerCard :parameters="data"></ManagerCard>

    <!-- <div v-for="(obj, idx) in data" :key="obj.name" :id="obj.name">
      <ManagerCard>

        <template #name>
          {{ obj.name }}
        </template>
<template #position>
          {{ obj.position }}
        </template>

<template #professionalField>
          {{ obj.professionalField }}
        </template>


<template #honors>
          <template v-if="obj.honors && obj.honors.length > 0">
            <li v-for="(honor, index) in obj.honors" :key="index">
              <p>{{ honor }}</p>
            </li>
          </template>
</template>

<template #educationalQualifications>
          <li v-for="(school, index) in obj.educationalQualifications" :key="index">
            <p>{{ school }}</p>
          </li>
        </template>

<template #experience>
          <li v-for="(exp, idx) in obj.experience" :key="idx">
            <p>{{ exp }}</p>
          </li>
        </template>

<template #img>
          <img :src="`${obj.pic}`" class="img-fluid" alt="...">
        </template>
</ManagerCard>
</div> -->


  </div>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getSupervisorProfile } from '../api/api.js'
// import ManagerCard from '../components/ManagerCard.vue'
import ManagerCard from '../components/ManagerCard.vue'
interface SupervisorProfile {
  name: string;
  position: string;
  professionalField: string;
  school: string;
  educationalQualifications: string[];
  experience: string[];
  pic: string;
  honors?: string[];
  // Add other properties as needed
}

const data = ref<SupervisorProfile[]>([])
onMounted(async () => {
  const response = await getSupervisorProfile()
  data.value = response.data
  console.log(data.value)
})
// const url = import.meta.env.VITE_BASE_IMAGE_URL
// console.log(url)
</script>

<style scoped lang="scss">
.top_wrap {
  max-width: 1100px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 20px;

  p,
  a {
    font-size: 24px;
    font-weight: 600;
    color: #54595f;
  }
}

h1 {
  font-size: 35px;
  font-weight: 500;
  color: #a47332;
  margin: 50px;
}

h2 {
  font-size: 24px;
  font-weight: 600;
  color: #54595f;
}

.content {}

li::marker {

  color: #54595f;
  font-size: 20px;
  font-weight: 500;
  font-family: Arial, sans-serif;
}

p {
  font-size: 20px;
  line-height: 41px;
  font-weight: 500;
  color: #54595f;
}
</style>