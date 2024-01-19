
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: '/politicas-de-privacidade',
        component: () => import('pages/PrivacyPolicy.vue')
      },
      {
        path: '/blog',
        component: () => import('pages/BlogHome.vue'),
      },
      {
        path: '/blog/:categor/:id',
        component: () => import('pages/BlogPage.vue')
      }
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
