#　Vue 源码解读

## Vue 初始化过程

### Vue

> /src/core/instance/index.js

```javascript
// 导包
import { initMixin } from "./init."

// Vue 构造函数
function Vue (options) {
    if (process.env.NODE_ENV !== 'production' && !(this instranceof Vue)) {
        warn('Vue is a constructor and should be called with the `new` keyword')
    }
    // 调用 Vue.prototype._init 方法（该方法在 initMixin 中定义）
    this._init(options)
}

// 定义 Vue.prototype._init 方法
initMixin(Vue)

// 导出
export default Vue
```



### Vue.prototype._init

> /src/core/instance/init.js

```javascript
/** 
* 定义 Vue.prototype._init 方法
* @param {*} Vue Vue 构造函数
*/
export function initMixin(Vue: Class<Component>) {
    // 负责 Vue 的初始化
    Vue.prototype._init = function (options?: Object) {
        // Vue 实例
        const vm: Component = this
        // 每一个 Vue 实例都有一个 _uid, 并且是依次递增
        vm._uid++
        
        // a flag to avoid this being observed
    	vm._isVue = true
        // 处理组件配置项
        if (options && options._isComponent) {
            // optimize internal component instantiation
      		// since dynamic options merging is pretty slow, and none of the
      		// internal component options needs special treatment.
            /**
       		* 每个子组件初始化时 走这里，这里只做了一些性能优化
       		* 将组件配置对象上的一些深层次属性放到 vm.$options 选项中，以提高代码的执行效率
       		*/
            initInternalComponent(vm, options)
        } else {
            /**
            * 初始化根组件时 走这里， 合并 Vue 的全局配置到根组件的局部配置， 比如 Vue.component 注册的全局组件会合并到 根实例的 components 选项中
            * 每个子组件的选项合并则发生在两个地方：
			* 	1. Vue.component 方法注册的全局组件在注册时进行了选项合并
			* 	2. { component: {xx } } 方式注册的局部组件在执行编译器生成的 render 函数时做了选项合并， 包括根组件中的 components 配置
            */
            vm.$options = mergeOptions(
            	resolveConstructorOptions(vm.constructor),
                options || {},
                vm
            )
        }
        /* istanbul ignore else */
        if (process.env.NODE_ENV !== 'production') {
            // 设置代理， 将 vm 实例上的属性代理到 vm._renderProxy 上
            initProxy(vm)
        } else {
            vm._renderProxy = vm
        }
        // expose real self
        vm._self = vm
        // 初始化组件实例关系属性， 比如$parent, $children, $root, $refs 等
        initLifecycle(vm)
        /**
        * 初始化自定义事件， 这里需要注意一点， 所以我们在 <comp @click="handleClick" /> 上注册的事件， 监听者不是父组件
        * 而是子组件本身， 也就是说事件的派发和监听者都是子组件本身， 与父组件无关
        */
        initEvents(vm)
        // 解析组件的插槽信息， 得到 vm.$slot， 处理渲染函数， 得到 vm.$createElement 方法， 即 h 函数
        initRender(vm)
        // 调用 beforeCreate 钩子函数
        callHook(vm, 'beforeCreate')
        // 初始化组件的 inject 配置项，得到 result[key] = val 形式的配置对象，然后对结果数据进行响应式处理，并代理每个 key 到 vm 实例 
        initInjections(vm)
        // 数据响应式的重点，处理 props、methods、data、computed、watch
        initState(vm)
        // 解析数据配置项上的 provide 对象， 将其挂载到vm._provided
        initProvide(vm) // resolve provide after data/props
        // 调用 created 钩子函数
        initCreated(vm)
        
        // 如果发现配置项上有 el 属性， 则自动调用 $mount 方法， 也就是说有了 el 选项， 就不需要手动去调用 $mount， 反之，没有 el ， 则必须手动调用 $mount
        if (vm.$options.el) {
            // 调用 $mount 方法， 进入挂载阶段
            vm.$mount(vm.$options.el)
        }
    }
}
```



### resolveConstructorOptions

> /src/core/instance/init.js

```javascript
/**
 * 从组件构造函数中解析配置对象 options，并合并基类选项
 * @param {*} Ctor 
 * @returns 
 */
export default resolveConstructorOptions (Ctor: Class<Component>) {
    // 配置项目
    let options = Ctor.options
    if (Ctor.super) {
        // 存在基类， 递归解析基类构造函数的选项
        const superOptions = resolveContructorOptions(Ctor.super)
        const cachedSuperOptions = Ctor.superOptions
        if (superOptions !== cachedSuperOptions) {
            // 不相等说明基类构造函数选项已经发生改变， 需要重新设置
            Ctor.superOptions = superOptions
            // 检查 Ctor.options 上是否有任何后期修改/附加的选项 （#4976）
            const modifiedOptions = resolveModifiedOptions(Ctor)
            // 如果存在修改/附加， 则合并两个选项
            if (modifiedOptions) {
                extend(Ctor.extendOptions, modifiedOptions)
            }
            //选项合并后，将结果赋值为 Ctor.Options
            options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions)
            if (options.name) {
                options.components[options.name] = Ctor
            }
        }
    }
    return options
}
```



















