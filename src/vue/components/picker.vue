<template>
  <div class="bmui-picker-shade">
    <aside class="bmui-picker">
      <div class="bmui-picker-head">
        <button
          class="bmui-picker-btn"
          type="button">取消</button>
        <button
          class="bmui-picker-btn"
          type="button">确认</button>
      </div>
      <div
        class="bmui-picker-content"
        v-if="type === 'TIME'">
        <div
          class="bmui-picker-list"
          @touchstart.prevent="down($event, 0)"
          @touchmove.prevent="move"
          @touchend.prevent="up"
          @mousedown.prevent="down($event, 0)"
          @mousemove.prevent="move"
          @mouseleave.prevent="up"
          @mouseup.prevent="up">
          <div
            class="bmui-picker-wrap"
            :style="{ 'transform': `translateY(${(indexes[0] || 0) * -OFFSET + (yTarget === 0 ? yCurr - yStart : 0)}px)` }">
            <div
              class="bmui-picker-item"
              :class="{ 'bmui-picker-active': yTarget === 0 ? i === targetIndex : i === indexes[0] }"
              :style="{ 'height': OFFSET + 'px', 'lineHeight': OFFSET + 'px' }"
              v-for="(h, i) of displayedItems[0]">{{ h.name }}</div>
          </div>
        </div>
        <div class="bmui-picker-list bmui-picker-colon">
          <div class="bmui-picker-wrap">:</div>
        </div>
        <div
          class="bmui-picker-list"
          @touchstart.prevent="down($event, 1)"
          @touchmove.prevent="move"
          @touchend.prevent="up"
          @mousedown.prevent="down($event, 1)"
          @mousemove.prevent="move"
          @mouseleave.prevent="up"
          @mouseup.prevent="up">
          <div
            class="bmui-picker-wrap"
            :style="{ 'transform': `translateY(${(indexes[1] || 0) * -OFFSET + (yTarget === 1 ? yCurr - yStart : 0)}px)` }">
            <div
              class="bmui-picker-item"
              :class="{ 'bmui-picker-active': yTarget === 1 ? i === targetIndex : i === indexes[1] }"
              :style="{ 'height': OFFSET + 'px', 'lineHeight': OFFSET + 'px' }"
              v-for="(m, i) of displayedItems[1]">{{ m.name }}</div>
          </div>
        </div>
      </div>
      <div
        class="bmui-picker-content"
        v-else>
        <div
          class="bmui-picker-list"
          v-for="(list, listIndex) of displayedItems"
          v-if="list.length"
          @touchstart.prevent="down($event, listIndex)"
          @touchmove.prevent="move"
          @touchend.prevent="up"
          @mousedown.prevent="down($event, listIndex)"
          @mousemove.prevent="move"
          @mouseleave.prevent="up"
          @mouseup.prevent="up">
          <div
            class="bmui-picker-wrap"
            :style="{ 'transform': `translateY(${(indexes[listIndex] || 0) * -OFFSET + (yTarget === listIndex ? yCurr - yStart : 0)}px)` }">
            <div
              class="bmui-picker-item"
              :class="{ 'bmui-picker-active': yTarget === listIndex ? itemIndex === targetIndex : itemIndex === indexes[listIndex] }"
              :style="{ 'height': OFFSET + 'px', 'lineHeight': OFFSET + 'px' }"
              v-for="(item, itemIndex) of list">{{ typeof item === 'string' ? item : item.value }}</div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>
<script>

const OFFSET = 30

export default {
  data () {
    return {
      type: '',
      items: [],
      indexes: [],
      yTarget: null,
      yStart: null,
      yCurr: null,
      status: '', // STARTING
      NOW: null,
      TODAY: null
    }
  },
  computed: {
    OFFSET () {
      return OFFSET
    },
    displayedItems () {
      if (this.items.length > 1) {
        return this.items
      } else {
        let res = []
        let i = 0
        let target = this.items[0]
        while (target && target.length) {
          res.push(target)
          let itemIndex = this.indexes[i]
          if (typeof itemIndex === 'number') {
            let item = target[itemIndex]
            if (item && item.sub && item.sub.length) {
              if (item.sub) {
                if (item.sub.length) {
                  target = item.sub
                  i++
                  continue
                }
              }
            }
          }
          break
        }
        return res
      }
    },
    targetIndex () {
      if (typeof this.yTarget === 'number') {
        let offset = this.yCurr - this.yStart
        let ceiling = offset > 0 ? (offset % OFFSET > OFFSET / 2) : (offset % OFFSET > -OFFSET / 2)
        let target = this.indexes[this.yTarget] - (ceiling ? Math.ceil(offset / OFFSET) : Math.floor(offset / OFFSET))
        let max = this.displayedItems[this.yTarget].length - 1
        return target > 0 ? target > max ? max : target : 0
      }
      return null
    }
  },
  created () {
    this.doInitData()
  },
  methods: {
    doInitData () {
      this.NOW = Date.now()
      this.TODAY = new Date().setHours(0, 0, 0, 0)
      this.type = (this.$options.config && this.$options.config.type) || ''
      if (this.type === 'TIME') {
        this.items = (function () {
          let res = []
          let hours = []
          let minutes = []
          for (let h = 0; h < 24; h++) {
            hours.push({
              name: h < 10 ? '0' + h : '' + h,
              value: h
            })
          }
          for (let m = 0; m < 60; m++) {
            minutes.push({
              name: m < 10 ? '0' + m : '' + m,
              value: m
            })
          }
          res.push(hours)
          res.push(minutes)
          return res
        })()
        let date = this.$options.value === undefined ? new Date() : new Date(this.$options.value)
        this.$options.value = [date.getHours(), date.getMinutes()]
      } else {
        this.items = this.$options.list || []
      }
      this.doSetIndexes(this.$options.value || [])
    },
    doSetIndexes (values) {
      for (let i = 0; i < this.displayedItems.length; i++) {
        if (!values || values[i] === undefined) {
          this.indexes.splice(i, 1, this.indexes[i] || 0)
        } else {
          let target = this.displayedItems[i].findIndex(function (item) {
            return typeof item === 'string' ? item === values[i] : item.value === values[i]
          })
          this.indexes.splice(i, 1, target === -1 ? 0 : target)
        }
      }
      return this.indexes
    },
    down (ev, index) {
      if (!this.status) {
        this.yTarget = index
        this.yStart = ev.touches ? ev.touches[0].clientY : ev.clientY
        this.yCurr = ev.touches ? ev.touches[0].clientY : ev.clientY
        this.status = 'STARTING'
      }
    },
    move: (function () {
      let locker
      return function (ev) {
        if (this.status === 'STARTING') {
          if (locker) return
          locker = setTimeout(function () {
            locker = null
          }, 75)
          this.yCurr = ev.touches ? ev.touches[0].clientY : ev.clientY
        }
      }
    })(),
    up () {
      if (this.status === 'STARTING') {
        if (this.items.length > 1) {
          this.indexes.splice(this.yTarget, 1, this.targetIndex)
        } else {
          this.indexes = this.indexes.slice(0, this.yTarget).concat(this.targetIndex)
        }
        // 下面这一句会自动选择sub的第一项，但会增加较多的displayedItems消耗
        // this.doSetIndexes()
        this.yTarget = null
        this.yStart = null
        this.yCurr = null
        this.status = ''
      }
    }
  }
}
</script>
