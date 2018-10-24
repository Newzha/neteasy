<template>
  <div class="findthings">
    <HeaderGuide/>

    <div class="explore">
      <div class="bannerWrapper">
        <div class="carousel">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <a class="swiper-slide" href="javascript:;" v-for="(banner, index) in findthings.banner"
                       :key="index" v-if="findthings.banner">
                <img :src="banner.picUrl" alt="pic">
                <div class="content">
                  <div class="subTitle">{{banner.subTitle}}</div>
                  <div class="title">{{banner.title}}</div>
                  <div class="desc">{{banner.desc}}</div>
                </div>
              </a>
              <!--<a class="swiper-slide" href="http://you.163.com/act/topic/v1/pub/975DnRVmye.html">
                <img src="//yanxuan.nosdn.127.net/b0605adb7eac1667e37e4545bebbff6b.jpg?imageView&quality=75" alt="">
                <div class="content">
                  <div class="subTitle">严选推荐</div>
                  <div class="title">无限回购TOP榜</div>
                  <div class="desc">买过1次？还会想买第2件！</div>
                </div>
              </a>
              <a class="swiper-slide" href="http://you.163.com/act/topic/v1/pub/EWtiwou4Ka.html">
                <img src="//yanxuan.nosdn.127.net/316565aa03bd5fa262a5f5fee67dd097.jpg?imageView&quality=75" alt="">

              </a>
              <a class="swiper-slide" href="http://you.163.com/act/topic/v1/pub/Azx54lvdgQ.html">
                <img src="//yanxuan.nosdn.127.net/27b53887275a6abc13bb55edab82b375.png?imageView&quality=75" alt="">

              </a>
              <a class="swiper-slide" href="http://you.163.com/act/topic/v1/pub/MLfc8sZn9r.html">
                <img src="//yanxuan.nosdn.127.net/b082dff07ac6b8111c77cea5a1a0e418.jpg?imageView&quality=75" alt="">

              </a>
              <a class="swiper-slide" href="http://you.163.com/act/topic/v1/pub/975DnRVmye.html">
                <img src="//yanxuan.nosdn.127.net/b0605adb7eac1667e37e4545bebbff6b.jpg?imageView&quality=75" alt="">
                <div class="content">
                  <div class="subTitle">严选推荐</div>
                  <div class="title">无限回购TOP榜</div>
                  <div class="desc">买过1次？还会想买第2件！</div>
                </div>
              </a>
              <a class="swiper-slide" href="http://you.163.com/act/topic/v1/pub/EWtiwou4Ka.html">
                <img src="//yanxuan.nosdn.127.net/316565aa03bd5fa262a5f5fee67dd097.jpg?imageView&quality=75" alt="">

              </a>-->
            </div>
            <!--<div class="swiper-pagination"></div>-->
          </div>
        </div>
      </div>
      <div class="article">
        <div id="article-scroll" ref="wrapper">
          <ul class="article-list">
            <li v-for="(column, index) in findthings.column" :key="index" v-if="findthings.column">
              <div class="img-container" :style="{background: `url(${column.picUrl})`}"></div>
              <div class="article-count">
                <div>{{column.articleCount}}</div>
              </div>
              <div class="title">{{column.title}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {

    data () {
      return {

      }
    },
    mounted () {
      // 获取findthings
      this.$store.dispatch('getFindThings', () => {
        // 状态数据更新后执行
        this.$nextTick(() => {
          // 初始化列表显示之后执行
          new Swiper('.swiper-container', {
//          centeredSlides: true,
            /*autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },*/
            loop:true // 循环模式
          });
          this._initScroll()
        })
      })
    },
    computed: {
      ...mapState(['findthings']),
    },
    methods: {
      _initScroll () {
        const articleScroll = document.getElementById('article-scroll');
        // article滑动
        new BScroll(this.$refs.wrapper, {
          click: true,
          scrollX:true,
          scrollY:false,
          probeType: 1,
        });
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/index.styl'
html,body
  height 100%
  overflow hidden
  .explore
    margin-top (88/$rem)
    background-color: #f4f4f4;
    padding-bottom: (1.29333*75/$rem);
    line-height: 1.2;
    width 100%
    /*width: (10*75/$rem);*/
    /*margin: auto;*/
    .bannerWrapper
      background-color: #fff;
      overflow: hidden;
      .carousel
        padding: (.32*75/$rem) 0;
        width: (9.2*75/$rem);
        /*width 100%*/
        margin: auto;
        position: relative;
        background-color: #fff;
        .swiper-container
          overflow: visible!important;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          width 100%
          /*z-index: 1;*/
          .swiper-wrapper
            height: auto;
            position: relative;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            width: 100%;
            /*z-index: 1;*/
            display: flex;
            box-sizing: content-box;
            .swiper-slide
              position: relative;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              margin: auto;
              display: block;
              /*padding: (0 .13333*75/$rem);*/
              background-color: #fff;
              height: auto;
              flex-shrink: 0;
              >img
                height (384.98/$rem)
                display: block;
                width: (670.03/$rem);
                /*height: (5.13333*75/$rem);*/
                border-radius: (.10667*75/$rem);
              .content
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                width: (6.21333*75/$rem);
                height: (2.64*75/$rem);
                background-color: rgba(255,255,255,.9);
                .subTitle
                  position: relative;
                  font-size: (.26667*75/$rem);
                  color: #7f7f7f;
                  line-height: .4rem;
                  padding: 0 (.10667*75/$rem);
                .title
                  font-size: (.42667*75/$rem);
                  line-height: (.64*75/$rem);
                  color: #333;
                  margin-top: (.21333*75/$rem);
                  font-weight: 700;
                .desc
                  font-size: (.32*75/$rem);
                  color: #333;
                  line-height: (.48*75/$rem);
                  margin-top: (.05333*75/$rem);

            /*.swiper-pagination
              width: auto;
              right: 0;
              left: auto;
              margin-bottom: (.21333*75/$rem);
              padding-right: (.4*75/$rem);
              position: absolute;
              text-align: center;
              !*z-index: 10;*!*/
    >.article
      overflow: hidden;
      padding: .42667rem .4rem .37333rem;
      height: 3.81333rem;
      background-color: #fff;
      margin-bottom: .26667rem
      >#article-scroll
        margin-left: auto;
        margin-right: auto;
        position: relative;
        z-index: 1;
        display flex
        >.article-list
          flex 1
          display flex
          >li
            position: relative;
            width: 2.18667rem;
            height: 2.8rem;
            margin-right: .32rem
            >.img-container
              width: 2.18667rem;
              height: 2.18667rem;
              margin-bottom: .29333rem;
              border-radius: .05333rem
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat
            >.article-count
              position: absolute;
              top: 0;
              right: 0;
              color: #fff;
              width: 1.54667rem;
              height: .42667rem;
              border-radius: 0 .05333rem 0 0;
              >div
                position: absolute;
                top: 0;
                right: .10667rem;
                width: 2rem;
                height: .42667rem;
                line-height: .42667rem;
                text-align: right
                font-size (24/$rem)
            >.title
              color: #333;
              font-size: .32rem;
              line-height: 1;
              text-align: center;
              width: 2.45333rem;
              margin-left: -.13333rem

</style>
