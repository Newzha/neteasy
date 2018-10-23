<template>
  <div class="headerContainer">
    <div class="headerWrap">
      <a class="icon-home" href="javascript:;" @click="$router.replace('/msite')"></a>
      <a class="icon-logo" href="javascript:;" @click="$router.replace('/msite')"></a>
      <div class="rightWrap">
        <a class="searchWarp" href="javascript:;" @click="$router.replace('/fingthings')">
          <i class="icon-search"></i>
        </a>
        <a class="shopcarWarp" href="javascript:;" @click="$router.replace('/shopcart')">
          <i class="icon-shop"></i>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/index.styl"
  .headerContainer
    position absolute
    top 0
    left 0
    width 100%
    height (87/$rem)
    background-color #fafafa
    &:after
      content ''
      position: absolute;
      background-color: #d9d9d9;
      width: 100%;
      height: 1px;
      transform-origin: 50% 100% 0;
      bottom: 0
    >.headerWrap
      width 100%
      margin auto
      overflow hidden
      position relative
      padding: (0 .21333*75/$rem) (0 .32*75/$rem);
      height: (1.17333*75/$rem);
      display: flex;
      justify-content: space-between;
      >.icon-home
        position: absolute;
        cursor: pointer;
        width: (.64*75/$rem);
        height: (.58667*75/$rem);
        background-position: 0 (-.98667*75/$rem)
        display: inline-block;
        vertical-align: middle;
        transform translateY(50%)
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s28ce1ea0be-3d137edb2d.png);
        background-repeat: no-repeat;
        background-size: (2.29333*75/$rem) (4.96*75/$rem)
        &:before
          content: "";

      .icon-logo
        position absolute
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        width: (2.29333*75/$rem);
        height: (.72*75/$rem);
        background-position: 0 (-1.70667*75/$rem);
        display: inline-block;
        vertical-align: middle;
        background-image:url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s28ce1ea0be-3d137edb2d.png);
        background-repeat: no-repeat;
        background-size:(2.29333*75/$rem) (4.96*75/$rem)
        font-style: normal
      >.rightWrap
        /*width: 20%*/
        margin-left: auto;
        margin-right: (.36667*75/$rem)
        .searchWarp
          /*margin-right: (.26667*75/$rem);*/
          text-decoration: none;
          outline: 0;
          cursor: pointer;
          float: left;
          .icon-search
            margin-right: (.26667*75/$rem)
            position: relative;
            width: (.85333*75/$rem);
            height: (.85333*75/$rem);
            background-position: 0 (-4.10667*75/$rem)
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s28ce1ea0be-3d137edb2d.png);
            background-repeat: no-repeat;
            background-size: (2.29333*75/$rem) (4.96*75/$rem)
            &:before
              content: "";

        .shopcarWarp
          margin-right: (.26667*75/$rem);
          .icon-shop
            position: relative;
            width: (.85333*75/$rem);
            height: (.85333*75/$rem);
            background-position: 0 0
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s28ce1ea0be-3d137edb2d.png);
            background-repeat: no-repeat;
            background-size: (2.29333*75/$rem) (4.96*75/$rem)
</style>
