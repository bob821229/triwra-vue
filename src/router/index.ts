import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import SuccessPage from '../views/SuccessPage.vue';
import axios from 'axios';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: '台灣水資源與農業研究院' 
      }
    },
    {
      path: '/SupervisorProfile/',
      name: 'SupervisorProfile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SupervisorProfile.vue'),
      meta: {
        title: '主管簡介' 
      }
    },
    {
      path: '/ResearchInstitute1/:title/:id',
      name: 'ResearchInstitute1',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ResearchInstitute1.vue'),
      
    },
    {
      path: '/ResearchResults',
      name: 'ResearchResults',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ResearchResults.vue'),
      meta: {
        title: '研究成果' 
      }
      
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactUs.vue'),
      meta: {
        title: '聯絡我們' 
      }
      
    },
    {
      path: '/ContactForm',
      name: 'ContactForm',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactForm.vue'),
      meta: {
        title: '聯絡填寫單' 
      }
      
    },
    {
      path: '/MeetingSpace',
      name: 'MeetingSpace',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MeetingSpace.vue'),
      meta: {
        title: '會議空間' 
      }
      
    },
    {
      path: '/BusinessCategory',
      name: 'BusinessCategory',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BusinessCategory.vue'),
      meta: {
        title: '業務範疇' 
      }
      
    },
    {
      path: '/TrafficInformationAndMaps',
      name: 'TrafficInformationAndMaps',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TrafficInformationAndMaps.vue'),
      meta: {
        title: '交通資訊與地圖' 
      }
      
    },
    {
      path: '/AudioAndVideoArea',
      name: 'AudioAndVideoArea',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AudioAndVideoArea.vue'),
      meta: {
        title: '影音專區' 
      }
      
    },
    { 
      path: '/success', 
      component: SuccessPage, 
      meta: { 
        title: '成功' 
      } 
    },
  ]
})


router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0) // 滾動到頁面頂部
    document.title = typeof to.params.title === 'string' ? to.params.title : (typeof to.meta.title === 'string' ? to.meta.title : '')
    next() // 繼續路由跳轉
  
});

// router.beforeEach(async (to, from, next) => {
//   try {
//     // const response = await axios.get('/public/data/numberOfVisitors.json');
//     // console.log('今日訪客數量:',response.data.data.todayVisitors);
//     // console.log('訪客統計:',response.data.data.totalVisiotrs);
//   } catch (error) {
//     console.error('API error:', error);
//   } finally {
//     window.scrollTo(0, 0) // 滾動到頁面頂部
//     document.title = typeof to.params.title === 'string' ? to.params.title : (typeof to.meta.title === 'string' ? to.meta.title : '')
//     next() // 繼續路由跳轉
//   }
// });

export default router
