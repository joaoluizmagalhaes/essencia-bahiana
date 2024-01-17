import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Add icons to the library
library.add(fab, faUserSecret)

console.log(library)

// This is the plugin to be registered in your entry file, not a boot file
export default {
  install: (app) => {
    app.component('font-awesome-icon', FontAwesomeIcon)
  }
}
