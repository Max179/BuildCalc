import type { Directive } from 'vue'

// v-reveal：进入视口时淡入上移，可用 v-reveal="120" 传 stagger 延迟（ms）
export const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value) {
      el.style.setProperty('--reveal-delay', `${binding.value}ms`)
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            io.disconnect()
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
  },
}
