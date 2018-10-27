<template>
  <div class="shopCar">
    <div class="shopHeader">
      <div class="headerContent">
        <div class="headerIn">
          <span class="logo">购物车</span>
          <div class="right">
            <a class="cart" href="javascript:;">
              <span class="txt">领券</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="shopType">
      <ul class="list">
        <li class="item">
          <i class="iconType"></i>
          <span>30天无忧退货</span>
        </li>
        <li class="item">
          <i class="iconType"></i>
          <span>48小时快速退款</span>
        </li>
        <li class="item">
          <i class="iconType"></i>
          <span>满88元免邮费</span>
        </li>
      </ul>
    </div>

    <div class="shopContent">
      <div class="shopContainer">
        <div class="img"></div>
        <div class="txt">
          <div class="login">
            <div class="title">去添加点什么吧</div>
            <div class="btn" @click="$router.replace('/profile')">登录</div>
            <!--<a class="btn" href="javascript:;" @click="$router.replace('/shopcar')">登录</a>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .shopCar
    padding-bottom: 2.64rem
    .shopHeader
      height 88px
      .headerContent
        position: fixed!important;
        left: 0;
        top: 0;
        z-index: 5;
        width: 100%
        .headerIn
          height: 1.17333rem;
          padding: 0 .4rem;
          line-height: 1.17333rem;
          text-align: center;
          background-color: #fff;
          position: relative
          .logo
            display: inline-block;
            font-size: .48rem
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
          .right
            position: absolute;
            top: 0;
            right: .4rem;
            font-size: .4rem
            .cart
              position: relative;
              color: #B4282D
              .txt
                margin-right: 0.8rem;

    .shopType
      .list
        position: relative;
        z-index: 1;
        height: .93333rem;
        padding: 0 .4rem;
        background: #f4f4f4
        display: flex
        flex-flow: row nowrap
        align-items: center
        justify-content: space-between
        .item
          display: flex
          align-items: center;
          font-size: .32rem;
          color: #666
          &:nth-child(2)
            margin-left: .8rem;
          &:nth-child(3)
            margin-left: .8rem;
          .iconType
            margin-right: .08rem;
            position: relative;
            top: -1px
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-1d7541974f.png);
            background-repeat: no-repeat;
            width: .13333rem;
            height: .13333rem
          span
            font-size: .32rem;
            color: #666

    .shopContent
      position: fixed;
      top: 1.17333rem;
      left: 0;
      bottom: 0;
      z-index: 0;
      width: 100%;
      background-color: #f4f4f4;
      text-align: center
      .shopContainer
        position: absolute;
        top: -.66667rem;
        right: 0;
        bottom: 0;
        left: 0;
        height: 4rem;
        margin: auto
        .img
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png)
          display: inline-block;
          vertical-align: middle;
          width: 3.30667rem;
          height: 3.30667rem;
          margin-bottom: .10667rem;
          background-size: 3.30667rem 3.30667rem;
          background-position: center center;
          background-repeat: no-repeat
        .txt
          font-size: .37333rem;
          line-height: 1;
          color: #7f7f7f
          .login
            margin-top: -.26667rem
            font-size: .37333rem;
            line-height: 1;
            color: #7f7f7f
            .title
              margin-bottom: .66667rem;
              line-height: 1;
              font-size: .37333rem;
              color: #999
            .btn
              margin: auto;
              width: 6.4rem;
              height: 1.22667rem;
              font-size: .4rem;
              line-height: 1.22667rem;
              color: #fff;
              background-color: #b4282d;
              border-radius: .04rem

</style>
