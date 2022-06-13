export { default as Achievement } from '../../components/Achievement.vue'
export { default as AchievementRow } from '../../components/AchievementRow.vue'
export { default as FormatCoin } from '../../components/FormatCoin.vue'
export { default as FormatDate } from '../../components/FormatDate.vue'
export { default as FormatNumber } from '../../components/FormatNumber.vue'
export { default as FormatTime } from '../../components/FormatTime.vue'
export { default as ItemLocked } from '../../components/ItemLocked.vue'
export { default as ItemUnlocked } from '../../components/ItemUnlocked.vue'
export { default as JobUnlocked } from '../../components/JobUnlocked.vue'
export { default as Requirement } from '../../components/Requirement.vue'
export { default as SkillUnlocked } from '../../components/SkillUnlocked.vue'
export { default as TaskLocked } from '../../components/TaskLocked.vue'
export { default as Timer } from '../../components/Timer.vue'
export { default as TimerElapsed } from '../../components/TimerElapsed.vue'
export { default as Title } from '../../components/Title.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
