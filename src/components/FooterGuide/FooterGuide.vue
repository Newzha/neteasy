<template>
  <footer class="footer_guide border-1px">
    <span class="guide_item" @click="goTo('/msite')" :class="{on: $route.path==='/msite'}">
      <span class="item_icon">
        <i class="icon iconfont icon-home"></i>
      </span>
      <span class="text_icon">首页</span>
    </span>
    <a href="javascript:;" class="guide_item" @click="goTo('/findthings')" :class="{on: $route.path==='/findthings'}">
      <span class="item_icon">
        <i class="icon iconfont icon-search"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/category')" :class="{on: $route.path==='/category'}">
      <span class="item_icon">
        <i class="icon iconfont icon-menu"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/shopcar')" :class="{on: $route.path==='/shopcar'}">
      <span class="item_icon">
        <i class="icon iconfont icon-cart"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item"  @click="goTo('/profile')" :class="{on: $route.path==='/profile'}">
      <span class="item_icon">
        <i class="icon iconfont icon-person2"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>
<script>
  export default {
    methods: {
      goTo (path) {
        // 通过路由导航跳转路由
        this.$router.replace(path)
      }
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/index.styl"

  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #f5f5f5
    width 100%
    height: (1.30667*75/$rem)
    display flex
    text-align: center;
    align-items: center;
    align-items: center;
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      /*margin 5px*/
      color #666
      font-size: 0.293333333333333rem;
      margin-top: 4px;
      margin-bottom: 2px;
      &.on
        color #b4282d
      span
        font-size (22/$rem)
        margin-top 4px
        margin-bottom 2px

        .iconfont
          font-size (.533*75/$rem)
          font-weight bold
</style>
