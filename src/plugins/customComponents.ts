import { App, DefineComponent } from 'vue'

// import RelaxedLayout from '@relaxed/layout'
// import { ColorPicker } from '@erkelost/colorpicker'
/**
 * @param app
 */
// const registerComponents = [RelaxedLayout, ColorPicker]
const registerComponents: DefineComponent[] = []
export function setupCustomComponents(app: App) {
  registerComponents.forEach((component) => {
    app.component(component.name, component)
  })
}
