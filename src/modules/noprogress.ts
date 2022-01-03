import NProgress from 'nprogress'
import type { UserModule } from '~/types'

export const install: UserModule = ({ app, router }) => {
  router.beforeEach(() => {
    NProgress.start()
  })
  router.afterEach(() => {
    NProgress.done()
  })
}
