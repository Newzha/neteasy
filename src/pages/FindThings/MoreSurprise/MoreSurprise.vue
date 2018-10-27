<template>
  <!--<a class="surprise">
    <div class="imgWarp">
      <div class="left-img" :style="{backgroundImage:`url(${surpise.picList[0]})`}"  v-if="surpise.picList"></div>
      <div class="right-img" v-if="surpise.picList">
        <div class="up" :style="{backgroundImage:`url(${surpise.picList[1]})`}"></div>
        <div class="down" :style="{backgroundImage:`url(${surpise.picList[2]})`}"></div>
      </div>
      <div class="one-img" :style="{backgroundImage:`url(${surpise.itemPicUrl})`}" v-else></div>
    </div>
    <div class="desc">{{surpise.content? surpise.content:surpise.title}}</div>
  </a>-->
  <section class="exploreMore">
    <div class="line-title">
      <span class="inner">更多精彩</span>
    </div>
    <div class="content">
      <!--<a href="javascript:;" class="item" v-for="item in data" :key="item.topicId">-->
      <!--<div>[Vue warn]: Duplicate keys detected: '573'. This may cause an update error.</div>-->
      <a href="javascript:;" class="item" v-for="(item, index) in data" :key="index">
        <img v-lazy="item.itemPicUrl" alt="img">
        <!--<img :src="item.itemPicUrl" alt="img">-->
        <div class="desc">{{item.title}}</div>
      </a>
    </div>
  </section>
</template>
<script>
  export default {
    props: {
//      surpise: Object,
      data: Array
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/stylus/index.styl'
  /*.surprise
    display: block;
    padding: .32rem;
    margin-bottom: .4rem;
    background-color: #fff;
    color: #333
    box-sizing border-box
    >.imgWarp
      overflow: hidden
      >.left-img
        float: left;
        width: 6.13333rem;
        height: 4.8rem;
        margin-right: .05333rem
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat
      >.right-img
        float: right;
        width: 2.37333rem
        >.up
          width: 2.37333rem
          height: 2.37333rem;
          background-size 100% 100%
          background-position: center;
          background-repeat: no-repeat
          margin-bottom: .05333rem
        >.down
          width: 2.37333rem
          height: 2.37333rem
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat
      >.one-img
        width (642/$rem)
        height (360/$rem)
        display block
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat
    >.desc
      background-color: #fff;
      font-size: .37333rem;
      padding-top: .38667rem;
      padding-bottom: .37333rem;
      line-height: 1.2;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden*/
  .exploreMore
    margin 0 (.4*75/$rem) (.4*75/$rem)
    .line-title
      height (1.86667*75/$rem);
      display flex
      align-items center
      &:before
        content ''
        display block
        width (3.52*75/$rem);
        height 1px
        background #d9d9d9
      &:after
        content ''
        display block
        width (3.52*75/$rem)
        height 1px
        background #d9d9d9
      .inner
        margin 0 (.32*75/$rem)
        font-size (.37333*75/$rem)
        color #333333
    .content
      display: block;
      color: #333;
      >.item
        display block
        padding (.32*75/$rem)
        background #ffffff
        color #333333
        margin-bottom (.4*75/$rem)
        >img
          width (8.56*75/$rem)
          height (4.8*75/$rem)
        >.desc
          font-size (.37333*75/$rem)
          padding-top: (.38667*75/$rem);
          padding-bottom: (.37333*75/$rem);
          line-height 1.2
          ellipsis()
</style>
