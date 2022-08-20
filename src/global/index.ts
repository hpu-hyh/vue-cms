import { App } from 'vue'
import registerElement from './register-element'
import registerGlobalProperties from './register-properties'
export default function registerApp(app: App): void {
  registerElement(app)
  registerGlobalProperties(app)
}
