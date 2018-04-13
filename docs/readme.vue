<script>
import Readme from './readme.md'

export default {
  computed: {
    anchor () {
      return this.$route.path ? this.$route.path.slice(1) : ''
    }
  },
  watch: {
    anchor (v) {
      this.doUpdateScroll()
    }
  },
  mounted () {
    this.doUpdateScroll()
  },
  methods: {
    doUpdateScroll () {
      let id = this.$route.path.slice(1)
      if (id) {
        let target = this.$el.querySelector('#' + id)
        if (target) {
          this.$el.scrollTop = target.offsetTop - target.clientTop
        }
      }
    }
  },
  template: '<div>' + Readme + '</div>'
}
</script>
<style scoped>
  h2 {
    color: #1fb8ff;
    font-weight: bold;
  }
  h2:before {
    content: "# ";
  }
  table {
    min-width: 50%;
  }
  th, td {
    border: 1px solid #ccc;
    padding: 5px;
  }
</style>
