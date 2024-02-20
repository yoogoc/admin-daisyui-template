import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { App } from 'vue';

export function setupIcons(app: App) {
  library.add(...Object.keys(fab).map(key => fab[key]))
  library.add(...Object.keys(fas).map(key => fas[key]))
  app.component('font-awesome-icon', FontAwesomeIcon)
}
