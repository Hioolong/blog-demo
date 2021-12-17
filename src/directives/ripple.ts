import type { Directive, Plugin, App } from 'vue'

interface RippleStyles {
    x: number,
    y: number,
    centerX: number,
    centerY: number,
    size: number
}

function createRipple(this: HTMLElement, event: TouchEvent) {
    const { x, y, centerX ,centerY ,size } = computedRippleStyles(this, event)
    
    const ripple: HTMLElement = document.createElement('div')
    ripple.classList.add('var-ripple')
    ripple.style.width = `${size}px`
    ripple.style.height = `${size}px`
    ripple.style.transform = `translate(${x}px, ${y}px) scale3d(.3, .3, .3)`
    ripple.style.backgroundColor = 'pink'

    window.setTimeout(() => {
        ripple.style.transform = `translate(${centerX}px, ${centerY}px) scale3d(1, 1, 1)`
        ripple.style.opacity = `.25`
      }, 20)
    
    setParentElementStyles(this)
    this.appendChild(ripple)
}

function computedRippleStyles(element: HTMLElement, event: TouchEvent): RippleStyles {
    const { top, left }: DOMRect = element.getBoundingClientRect()
    const { clientWidth, clientHeight } = element

    // 计算 ripple 的半径
    // const radius: number = Math.sqrt(clientWidth ** 2 + clientHeight ** 2) / 2
    const radius: number = Math.sqrt(Math.pow(clientWidth, 2) + Math.pow(clientHeight, 2)) / 2
    
    // ripple 的长和宽
    const size: number = radius * 2

    // 获取点击的位置所在元素左上角的距离
    const localX: number = event.touches[0].clientX - left
    const localY: number = event.touches[0].clientY - top
    const x: number = localX - radius
    const y: number = localY - radius

    const centerX = clientWidth / 2 - radius
    const centerY = clientHeight / 2 - radius

    console.log(x, y, centerX, centerY, localX, localY);
    
    
    return { x, y, size, centerX, centerY }
}

function setParentElementStyles(element: HTMLElement) {
    const { zIndex, position } = window.getComputedStyle(element)

    element.style.overflow = 'hidden'
    position === 'static' && (element.style.position = 'relative')
    zIndex === 'auto' && (element.style.zIndex = '1')    
}

const Ripple: Directive & Plugin = {
    mounted(el: HTMLElement) {
        
        el.addEventListener('touchstart', createRipple)
    },
    install(app: App) {
        app.directive('ripple', this)
    }
}

export default Ripple