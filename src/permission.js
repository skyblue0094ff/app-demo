import router from './router/router'
// import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { getToken } from '@/utils/auth'
// import { Message } from 'element-ui'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/home', '/about', '/ceshi', '/404']

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const haseToken = getToken()
  if (haseToken) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.dome()
    } else {
      next()
      // const hasRoles = store.getters.roles && store.getters.roles.length > 0
      // if (hasRoles) {
      //   next()
      // } else {
      //   try {
      //     const {roles} = await store.dispatch('user/getinfo')
      //     const accessRoutes = await store.dispatch('ermission/generaterRoutes', rolse)
      //     router.addRoutes(accessRoutes)
      //     next({...to, replace: true})
      //   } catch (error) {
      //     await store.dispatch('user/resetToken')
      //     alert(error || 'Has Error')
      //     next(`/login?redirect=${to.path}`)
      //     NProgress.done()
      //   }
      // }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
