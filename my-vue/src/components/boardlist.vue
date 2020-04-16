<!--  -->
<template>
  <div class='m-boardlist'>
    <h1>
      <b class="blift" >正在热映</b>
      <router-link to='/movieList'><i class="yo-ico yoright">&#xf07f;</i></router-link>
    </h1>
    <div class="box1">
      <div class="wrap">
        <ul>
          <li
            v-for='(imgs,index) in boardl'
            :key='index'
          >
            <img
              :src="imgs.img"
              alt=""
            >
            <p class="ptext">{{imgs.time}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import boardlistget from '../utils/axios'

// 用于兄弟组件之间传值
// import Msg from '../assets/js/msg'

export default {
  name: 'boardlist',
  data () {
    return {
      boardl: []
    }
  },
  methods: {
    // dianji: function () {
    //   Msg.$emit('val', '1')
    //   this.isDisable = false// 执行请求后就不能点击了
    // }
  },
  mounted: function () {
    let _this = this
    boardlistget.get({
      url: 'http://127.0.0.1:5000/blist',
      method: 'get',
      callback: function (res) {
        _this.boardl = res.data.imgdata
      }
    })
  },
  components: {

  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.m-boardlist{
   margin-top:10px;
  background:#fff;
}
h1:after{
  content: "020";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;

  }
h1 .blift{
  float: left;

}
h1 .yoright{
   float: right;
}
.m-boardlist {
  width: 100%;
}
.box1{
    overflow: hidden;
}
.box1 .wrap{
    overflow-x: scroll;
    overflow-y: hidden;
}
.box1 .wrap ul{
    display: flex;
}
.box1 .wrap ul li{
    flex: 1;
    width: 150px;
    float: left;
    box-sizing: border-box;
    margin-right:5px;

}
  .box1 .wrap ul li .ptext{
    text-align: center;
  }
  ul li img {
    width: 150px;
}
</style>
