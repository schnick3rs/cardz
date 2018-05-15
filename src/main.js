// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fontawesome from '@fortawesome/fontawesome'
import faCogs from '@fortawesome/fontawesome-free-solid/faCogs'
import faHandPaper from '@fortawesome/fontawesome-free-solid/faHandPaper'
import faComment from '@fortawesome/fontawesome-free-solid/faCommentDots'
import faBook from '@fortawesome/fontawesome-free-solid/faBook'
import faCircle from '@fortawesome/fontawesome-free-solid/faCircle'
import faSquare from '@fortawesome/fontawesome-free-solid/faSquare'
import faBookmark from '@fortawesome/fontawesome-free-solid/faBookmark'

fontawesome.library.add(faCogs, faHandPaper, faComment, faBook, faCircle, faBookmark, faSquare)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
