<!--  -->
<template>
  <div>
    <mt-swipe :auto=4000>
    <mt-swipe-item v-for="(imgs,index) in spdata" :key='index'>
      <!-- {{imgs.img}} -->
      <img  clss='imgs' :src='imgs.img' alt="">
    </mt-swipe-item>

  </mt-swipe>
  <!-- 列表组件 -->
      <Boardlist uri="1"/>
      <Boardlist uri="2"/>
      <Boardlist uri="3"/>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { Swipe, SwipeItem } from 'mint-ui'
import Vue from 'vue'

// 子组件的使用
import Boardlist from '@/components/boardlist'

// import axios from 'axios'
// 使用自己封装的axios
import utilsasios from '../utils/axios'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
export default {
  data () {
    return {
      spdata: []

    }
  },
  components: {
    // 引入的组件
    Boardlist
  },
  mounted: function () {
    let _this = this
    utilsasios.get({
      url: 'http://127.0.0.1:5000/sp',
      method: 'get',
      callback: function (res) {
        _this.spdata = res.data.imgdata
        _this.name = res.data.text
      }
    })
  }
}
</script>
