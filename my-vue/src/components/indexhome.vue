<!--  -->
<template>
<div>
  <div class='m-index'>
    <header class="yo-header ya-header-a">
    <span class="regret yo-ico">...</span>

    <h2 class="title">榜单《电影《豆瓣</h2>
  </header>
  <section >
      <mt-swipe :auto=4000>
        <mt-swipe-item v-for="(imgs,index) in spdata" :key='index'>
          <!-- {{imgs.img}} -->
          <img  clss='imgs' :src='imgs.img' alt="">
        </mt-swipe-item>

      </mt-swipe>

  </section>
  <nav>
    <ul>
      <li class="yo-ico">$#xe6b8;<b>首页</b></li>
      <li class="yo-ico">$#xe6b8;<b>搜索</b></li>
      <li class="yo-ico">$#xe6b8;<b>我的</b></li>
    </ul>
  </nav>
  </div>
</div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { Swipe, SwipeItem } from 'mint-ui'
import Vue from 'vue'

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
  mounted: function () {
    let _this = this
    utilsasios.get({
      url: 'http://127.0.0.1:5000/sp',
      method: 'get',
      callback: function (res) {
        _this.spdata = res.data.imgdata
      }
    })
  }
}
</script>
<style lang='scss'>

</style>
