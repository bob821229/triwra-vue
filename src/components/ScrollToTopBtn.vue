<template>
    <button type="button" class="btn btn-outline-warning rounded-pill scroll-to-top "
        :class="{ 'd-none': showScrollButton }" @click="scrollToTop"><i class="bi bi-arrow-up-short"></i>頂部</button>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showScrollButton = ref(false);
// 監聽 window 的 scroll 事件
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

// 在组件銷毀時移除監聽
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
// 是否顯示至頂按鈕
function handleScroll() {
    if (window.scrollY > 200) {
        showScrollButton.value = false;
    } else {
        showScrollButton.value = true;
    }
}
// 回到頂部
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
</script>

<style scoped lang="scss">
.scroll-to-top {
    position: fixed;
    right: 20px;
    bottom: 150px;
    z-index: 1000;
}
</style>