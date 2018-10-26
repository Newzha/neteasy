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
      <div class="recommends">
        <div class="contentContainer">
          <div class="commonTitle">为你推荐</div>
          <MainPosItem :mainData="findthings.recommendOne"/>
          <MinorPosItem :minorData="findthings.recommendTwo"/>
          <MinorPosItem :minorData="findthings.recommendThree"/>
        </div>
      </div>
      <div class="tenFifteen">
        <div class="inner">
          <div class="title">十点一刻</div>
          <div id="tenFifteenBS" ref="tenFifteenWrapper">
            <div class="list" v-if="findthings.tenfifteen">
              <a class="main" href="javascript:;"
                 v-for="(item, index) in findthings.tenfifteen" :key="index">
                <div class="line-title">
                  <span>今日话题</span>
                </div>
                <div class="title">{{item.title}}</div>
                <div class="desc">{{item.desc}}</div>
                <div class="joinInfo">
                  <div class="joininner">
                    <div class="avatars" v-if="item.participantAvatar">
                      <div class="avatar" v-for="(avatar, index) in item.participantAvatar"
                           :key="index" v-if="avatar">
                        <img :src="avatar" alt="">
                      </div>
                    </div>
                    <div class="joincount">
                      {{item.participantNum}}人参与话题
                    </div>
                  </div>
                </div>
              </a>
              <a class="more" href="javascript:;">
                <div class="inner">
                  <div class="text">查看全部话题</div>
                  <i class="right-icon"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="recommends">
        <div class="contentContainer">
          <div class="commonTitle">严选臻品</div>
          <MainPosItem :mainData="findthings.zhenOne"/>
          <MinorPosItem :minorData="findthings.zhenTwo"/>
          <MinorPosItem :minorData="findthings.zhenThree"/>
        </div>
      </div>
      <div class="exploreLook">
        <div class="commonTitle">严选LOOK</div>
        <div class="imgWarp">
          <img src="//yanxuan.nosdn.127.net/df832854b69052c07574c0b31e98a773.jpg?imageView&quality=75" alt="">
        </div>
        <div class="topicInfo">
          <div class="author">
            <div class="avatar">
              <img src="//yanxuan.nosdn.127.net/e616ff38ea5b8dae191214698d21927f?imageView&quality=75&thumbnail=48y48" alt="">
            </div>
            <div class="nickname">蔡****莲</div>
          </div>
          <div class="desc">
            如其他评论所说，包包因为要定型的缘故，皮质较硬，无法自己随意塑型。另一方面，皮质较结实，平日里随意背，随意放地上都没啥问题，若是柔软的皮质恐怕早就磨破了。空间还可以，放11寸的macbook勉强可以塞进去，比A4纸小一点的那种课本也能放进去。磁铁搭扣也很好，吸上之后随意晃动都不会脱落，背出去放心。
          </div>
        </div>
      </div>
      <MoreSurprise :data="findthings.findMore"/>
      <!--<div class="exploreMore">
        <div class="lineTitle">
          <div>
            更多精彩
          </div>
        </div>
        <MoreSurprise v-if="moreSurprise"
                      v-for="(surpise, index) in moreSurprise" :key="index"
                      :surpise = 'surpise'/>
      </div>-->
    </div>

  </div>
</template>
<script>
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  import MainPosItem from './MainPosItem/MainPosItem.vue'
  import MinorPosItem from './MinorPosItem/MinorPosItem.vue'
  import MoreSurprise from './MoreSurprise/MoreSurprise.vue'
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
      moreSurprise() {
        if(!this.findthings.findMore){
          return false
        }
      }
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
        // 十点一刻滑动
        new BScroll(this.$refs.tenFifteenWrapper, {
          click: true,
          scrollX:true,
          scrollY:false,
          probeType: 1,
        });
      }
    },
    components: {
      MainPosItem,
      MinorPosItem,
      MoreSurprise
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/index.styl'
html,body
  /*height 100%*/
  /*overflow hidden*/
  overflow-y auto
  overflow-x hidden
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

    >.recommends
      padding: 0 .4rem .53333rem;
      background-color: #fff;
      .contentContainer
        .commonTitle
          background-color: #fff;
          text-align: center;
          font-size: .42667rem;
          height: 1.6rem;
          line-height: 1.6rem;
    >.tenFifteen
      overflow: hidden;
      padding: 0 .4rem .53333rem;
      height: 7.61333rem;
      background-color: #fff;
      margin-bottom: .26667rem
      .inner
        >.title
          background-color: #fff;
          text-align: center;
          font-size: .42667rem;
          height: 1.6rem;
          line-height: 1.6rem
        #tenFifteenBS
          display flex
          .list
            flex 1
            display flex
            a
              position: relative;
              width: 7.73333rem;
              height: 5.48rem;
              padding: .50667rem .53333rem 1.05333rem;
              margin-right: .4rem;
              text-align: center;
              color: #333
              box-sizing border-box
              display: inline-block;
              vertical-align: middle;
              &.main
                position relative
                background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png);
                background-repeat: no-repeat;
                background-size: 100% 100%
                >.line-title
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin-bottom: .53333rem
                  &::before,&::after
                    content: ' ';
                    display: block;
                    width: .32rem;
                    height: 1px;
                    background-color: #7f7f7f
                  span
                    margin: 0 .10667rem;
                    font-size: .32rem;
                    color: #7f7f7f

                >.title
                  font-size: .48rem;
                  font-weight: 700;
                  margin-bottom: .18667rem
                >.desc
                  font-size: .37333rem;
                  line-height: 1.5;
                  display: block;
                  text-align center
                  overflow: hidden;
                  text-overflow: ellipsis

                >.joinInfo
                  position: absolute;
                  bottom: 1.05333rem;
                  width: 6.66667rem;
                  text-align: center
                  >.joininner
                    display: inline-block;
                    overflow: hidden
                    >.avatars
                      float: left;
                      margin-right: .21333rem
                      >.avatar
                        position: relative;
                        float: left;
                        height: .64rem;
                        width: .64rem;
                        overflow: hidden;
                        border: 1px solid #fff;
                        border-radius: 50%
                    >.joincount
                      float: left;
                      text-align: left;
                      line-height: .64rem;
                      font-size: .32rem;
                      color: #7f7f7f
              &.more
                position: relative;
                height: 5.12rem;
                border: (10/$rem) solid #e6e6e6;
                padding: 0;
                margin-right: 0;
                background-color: #fafafa
                >.inner
                  position: absolute;
                  top: 0;
                  bottom: 0;
                  left: 0;
                  right: 0;
                  margin: auto;
                  width: 3.2rem;
                  height: .50667rem;
                  display: flex;
                  align-items: center
                  >.text
                    color: #7f7f7f;
                    font-size: .42667rem;
                    line-height: .50667rem;
                    margin-right: .22667rem
                  >.right-icon
                    display: inline-block;
                    vertical-align: middle;
                    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/circle-right-arrow-3d59025cb6.png);
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    width: .4rem;
                    height: .4rem

    >.recommends
      padding: 0 .4rem .53333rem;
      background-color: #fff;
      .contentContainer
        .commonTitle
          background-color: #fff;
          text-align: center;
          font-size: .42667rem;
          height: 1.6rem;
          line-height: 1.6rem;
    >.exploreLook
      position: relative;
      display: block;
      color: #333
      >.commonTitle
        background-color: #fff;
        text-align: center;
        font-size: .42667rem;
        height: 1.6rem;
        line-height: 1.6rem;
      >.imgWarp
        width 100%
        position relative
        >img
          width 100%
          display block
      >.topicInfo
        overflow: hidden;
        position: relative;
        padding: .32rem .4rem .61333rem;
        background-color: #fff
        >.author
          height: 0.64rem;
          font-size: 0.32rem
          margin-bottom: .32rem
          display flex
          line-height 100%
          .avatar
            width: 0.64rem;
            height: 0.64rem;
            margin-right: 0.10666666666666667rem;
            >img
              border-radius: 50%;
          >.nickname
            padding-top (10/$rem)

        >.desc
          font-size: .37333rem;
          line-height: 1.6;
          color: #7f7f7f
    >.exploreMore
      margin: 0 .4rem .4rem

</style>
