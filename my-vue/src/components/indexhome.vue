<!--  -->
<template>
<div>
  <div class='m-index' >
    <header class="yo-header ya-header-a">
      <i class="yo-ico yoright" @click="greet">返回</i>
    <span class="regret yo-ico">...</span>

    <h2 class="title">榜单《电影《豆瓣</h2>
  </header>
  <section >
      <router-view></router-view>
  </section>
  <nav>
    <ul>
      <li className="yo-ico"><router-link to="/board"><b>首页</b></router-link></li>
      <li class="yo-ico"><router-link to="/search"><b>搜索</b></router-link></li>
      <li class="yo-ico"><router-link to="/user"><b>我的</b></router-link></li>
    </ul>

  </nav>
  </div>
</div>
</template>
<script>
export default {
  methods: {
    greet: function () {
      this.$router.go(-1)
    }
  }
}
</script>
