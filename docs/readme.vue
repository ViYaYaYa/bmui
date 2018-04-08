<script>
import Readme from './readme.md'

let template = Readme.replace(/<h2/g, '<h2 @click="setHash"')
let tips = '请在1024宽度的窗口下获得更好的预览效果\nPlease view this page with at least 1024px width screen.'

export default {
  methods: {
    setHash (ev) {
      if (ev.target && ev.target.id) {
        this.$emit('change', ev.target.id)
      }
    }
  },
  template: '<div>' + '<p>' + tips + '</p>' + template + '</div>'
}
</script>
<style scoped>
  h2 {
    cursor: pointer;
    text-decoration: underline;
  }
  h2:hover {
    color: #00f;
  }
  table {
    min-width: 50%;
  }
  th, td {
    border: 1px solid #ccc;
    padding: 5px;
  }
</style>
