<!--  -->
<template>
  <div class=''>
    <section>
      <mt-loadmore
        :top-method="loadTop"
        :bottom-method="loadBottom"
        :bottom-all-loaded="allLoaded"
        ref="loadmore"
      >
        <dl
          v-for="(imgs,index) in movuel"
          :key="index"
        >

          <dt class="dtimg">
            <img
              :src="imgs.img"
              alt=""
            >
          </dt>
          <dd>
            <b v-text="imgs.time"></b>
          </dd>
        </dl>
      </mt-loadmore>

    </section>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import maxios from '../utils/axios'

// 用于兄弟组件之间传值
// import Msg from '../assets/js/msg'

import { Loadmore } from 'mint-ui'
import Vue from 'vue'

Vue.component(Loadmore.name, Loadmore)

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    // 这里存放数据
    return {
      movuel: [],
      allLoaded: true
    }
  },
  methods: {
    loadTop: function () {
      // ...// load more data
      // this.$refs.loadmore.onTopLoaded()
      console.log(1)
    },
    loadBottom () {
      // ...// load more data
      // this.allLoaded = true// if all data are loaded
      // this.$refs.loadmore.onBottomLoaded()
      console.log(0)
    }
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    let _this = this

    // let type = _this.$route.params.type
    // console.log(type)
    // 获取兄弟组件传值
    // Msg.$on('val', function (v) {
    //   console.log(v)
    // })

    maxios.get({
      url: 'http://127.0.0.1:5000/blist',
      method: 'get',
      callback: function (res) {
        _this.movuel = res.data.imgdata
      }
    })
  }
}
</script>
<style lang='scss' scoped>
/* @import url(); 引入公共css类 */

dl {
  dt {
    width: 60%;
    img {
      width: 100%;
    }
  }
}
</style>
