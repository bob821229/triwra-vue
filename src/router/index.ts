import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: '台農院復刻首頁' 
      }
    },
    {
      path: '/SupervisorProfile/:title',
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
      path: '/ResearchResults/:title',
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
      
    }
  ]
})


router.beforeEach((to, from, next) => {
  // 在每次路由跳转前执行
  window.scrollTo(0, 0); // 滚动到页面顶部
  document.title = to.params.title || to.meta.title
  next(); // 继续路由跳转
});

export default router
