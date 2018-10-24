<template>
    <div class="msiteContainer">
      <div class="headerWarp">
        <div class="line">
          <a href="javascript:;"></a>
          <div class="top_search">
            <i class="icon  "></i>
            <span class="placeholder">搜索商品, 共16706款好物</span>
          </div>
        </div>

        <div class="tabsScroll" ref="wrapper">
          <!--<div class="list">
            <div class="tab active">
              <span class="text">推荐</span>
            </div>
            <div class="tab ">
              <span class="text">居家</span>
            </div>
            <div class="tab ">
              <span class="text">鞋包配饰</span>
            </div>
            <div class="tab ">
              <span class="text">电器</span>
            </div>
            <div class="tab ">
              <span class="text">洗护</span>
            </div>
            <div class="tab ">
              <span class="text">饮食</span>
            </div>
            <div class="tab ">
              <span class="text">餐厨</span>
            </div>
            <div class="tab ">
              <span class="text">婴童</span>
            </div>
            <div class="tab ">
              <span class="text">文体</span>
            </div>
            <div class="tab ">
              <span class="text">特色区</span>
            </div>
          </div>-->
          <!--<div class="list">

              <span class="text action">推荐</span>

              <span class="text">居家</span>

              <span class="text">鞋包配饰</span>

              <span class="text">电器</span>

              <span class="text">洗护</span>

              <span class="text">饮食</span>

              <span class="text">餐厨</span>

              <span class="text">婴童</span>

              <span class="text">文体</span>

              <span class="text">特色区</span>

          </div>-->
          <ul class="list" >
            <li v-for="(name, index) in navlist" :key="index"
                 @click="currentIndex(index)">
              <span :class="{active: index === current}">{{name}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="scrollContainer">
        <section class="sectionInner">
          <div class="hd-indexFloor">
            <div class="scrollBox">
              <div class="section">
                <div class="swiper">
                  <div class="swiper-container">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide"
                           v-for="(item, index) in msite.focusList" :key="index">
                        <img :src="item.picUrl" alt="">
                      </div>
                      <!--<div class="swiper-slide">
                        <img src="https://yanxuan.nosdn.127.net/2b5b07ddf3f5aae92cfa355587f39f05.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                      </div>
                      <div class="swiper-slide">
                        <img src="https://yanxuan.nosdn.127.net/f8dcd65c11106261e0030638914c9b64.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                      </div>
                      <div class="swiper-slide">
                        <img src="https://yanxuan.nosdn.127.net/fc52e260d16abdff1a8777a713c67aa2.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                      </div>
                      <div class="swiper-slide">
                        <img src="https://yanxuan.nosdn.127.net/c3f81941ae3a5f8455bd41f2f4d0b8af.png?imageView&quality=75&thumbnail=750x0" alt="">
                      </div>
                      <div class="swiper-slide">
                        <img src="https://yanxuan.nosdn.127.net/9ef118e6b8466d519e4f022fab216868.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                      </div>
                      <div class="swiper-slide">
                        <img src="https://yanxuan.nosdn.127.net/57bf83e2766bb53509e10a5e027d1bc6.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                      </div>
                      <div class="swiper-slide">
                        <img src="https://yanxuan.nosdn.127.net/73b53038a69afb01910dfc84d962a55b.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                      </div>
                      <div class="swiper-slide">
                        <img src="https://yanxuan.nosdn.127.net/3bce861d0d6bb047903c40da0b322b9d.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                      </div>
                      <div class="swiper-slide">
                        <img src="https://yanxuan.nosdn.127.net/2b5b07ddf3f5aae92cfa355587f39f05.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                      </div>
                      <div class="swiper-slide">
                        <img src="https://yanxuan.nosdn.127.net/f8dcd65c11106261e0030638914c9b64.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                      </div>-->
                    </div>
                    <div class="swiper-pagination"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="supports" >
              <ul class="grow">
                <li class="item">
                  <a>
                    <i class="icon"></i>
                    <span class="text">网易自营品牌</span>
                  </a>
                </li>
                <li class="item">
                  <a>
                    <i class="icon"></i>
                    <span class="text">30天无忧退货</span>
                  </a>
                </li>
                <li class="item">
                  <a>
                    <i class="icon"></i>
                    <span class="text">48小时快速退款</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="m1-indexFloor">
            <header class="hd">
              <a class="more" href="http://m.you.163.com/manufacturer/list">
                <span>品牌制造商直供</span>
                <i class="icon"></i>
              </a>
            </header>
            <div class="manuSupply">
              <ul class="list ">
                <li class="item" v-for="(item, index) in msite.tagList" :key="item.index"
                    :class="{'left-item': !(index%2)/2}" v-if="index<=3">
                  <a href="httt//m.you.163.com/item/manufacturer?tagId=1080000&page=1&size=100">
                    <div class="cnt">
                      <h4 class="title">{{item.name}}</h4>
                      <div class="price">
                        <span class="price1">{{item.floorPrice}}</span><!--
                      --><span class="price2">元起</span>
                      </div>
                      <i class="icon" v-show="item.newOnShelf"></i>
                    </div>
                    <img :src="item.picUrl" alt="pic">
                  </a>
                </li>
                <!--<li class="item left-item">
                  <a href="http//m.you.163.com/item/manufacturer?tagId=1080000&page=1&size=100">
                    <div class="cnt">
                      <h4 class="title">海外制造商</h4>
                      <div class="price">
                        <span class="price1">9.9</span>&lt;!&ndash;
                      &ndash;&gt;<span class="price2">元起</span>
                      </div>
                      <i class="icon"></i>
                    </div>
                    <img src="http://yanxuan.nosdn.127.net/8d670dfdf89315316160266b9a81f68a.png?imageView&thumbnail=355x0&quality=65" alt="">
                  </a>
                </li>
                <li class="item">
                  <a href="http//m.you.163.com/item/manufacturer?tagId=1026000&page=1&size=100">
                    <div class="cnt">
                      <h4 class="title">CK制造商</h4>
                      <div class="price">
                        <span class="price1">25</span>&lt;!&ndash;
                      &ndash;&gt;<span class="price2">元起</span>
                      </div>
                      <i class="icon"></i>
                    </div>
                    <img src="http://yanxuan.nosdn.127.net/5aecffba9202b1fa956758dfbcd65b85.png?imageView&thumbnail=355x0&quality=65" alt="">
                  </a>
                </li>
                <li class="item left-item">
                  <a href="http//m.you.163.com/item/manufacturer?tagId=1001037&page=1&size=100">
                    <div class="cnt">
                      <h4 class="title">新秀丽制造商</h4>
                      <div class="price">
                        <span class="price1">34.9</span>&lt;!&ndash;
                      &ndash;&gt;<span class="price2">元起</span>
                      </div>
                      <i class="icon"></i>
                    </div>
                    <img src="http://yanxuan.nosdn.127.net/f57d460dde6e737f2bacd9f67cb73a41.png?imageView&thumbnail=355x0&quality=65" alt="">
                  </a>
                </li>
                <li class="item">
                  <a href="http//m.you.163.com/item/manufacturer?tagId=1001000&page=1&size=100">
                    <div class="cnt">
                      <h4 class="title">MUJI制造商</h4>
                      <div class="price">
                        <span class="price1">39.9</span>&lt;!&ndash;
                      &ndash;&gt;<span class="price2">元起</span>
                      </div>
                      <i class="icon"></i>
                    </div>
                    <img src="http://yanxuan.nosdn.127.net/b0b0ea6b866039d9ded1dfa39bf1a105.png?imageView&thumbnail=355x0&quality=65" alt="">
                  </a>
                </li>-->
              </ul>
            </div>
          </div>
          <indexItem :className="'newItemList'" :ItemList="msite.newItemList"
                      v-if="msite.newItemList"/>
          <indexItem :className="'popularItemList'" :ItemList="msite.popularItemList"
                      v-if="msite.popularItemList"/>
          <!--<div class="new-indexFloor">
            <header class="hd">
              <a class="more" href="javaScript">
                <span>新品首发</span>
                <div class="all">
                  <span class="wrap">
                    <span>查看全部</span>
                    <i class="arrow-right"></i>
                  </span>
                </div>
              </a>
            </header>
            <div class="goodGrid">
              <div class="innerSwiper">
                <ul class="list">
                  <li class="item">
                    <a class="good" href="javascript:;">
                      <div class="hd">
                        <div class="wraper">
                          <div class="lazyload">
                            <img src="http://yanxuan.nosdn.127.net/f8a1351045e3a4848b81c3036d229c1c.png?imageView&quality=65&thumbnail=330x330" alt="">
                          </div>
                          &lt;!&ndash;<div class="descript">古法热敷，研磨艾绒，专业的身体调理 </div>&ndash;&gt;
                        </div>
                      </div>
                      <div class="name">
                        <span>网易智造低压海盐热敷腰带</span>
                      </div>
                      <div class="newItemDesc">古法热敷，研磨艾绒，专业的身体调理</div>
                      <div class="price">
                        <span>
                          <span>¥</span>&lt;!&ndash;
                          &ndash;&gt;<span>199</span>
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
      </div>-->
          <div class="limitTimeBuy" v-if="msite.flashSaleIndexVO">
            <a>
              <div class="limitTimeBuy-warp">
                <div class="left-item">
                  <div class="title">严选限时购</div>
                  <div class="countdown">
                    <span class="hours time" >{{hour}}</span>
                    <span class="colon" >:</span>
                    <span class="mins time" >{{mins}}</span>
                    <span class="colon" >:</span>
                    <span class="secs time" >{{secs}}</span>
                  </div>
                  <div class="next-title">
                    <span>下一场</span>
                    <span >
                      {{msite.flashSaleIndexVO.nextStartTime | date-format("HH:mm")}}</span>
                    <span>开始</span>
                  </div>
                </div>
                <div class="right-item">
                  <div class="imgWarp">
                    <img :src="msite.flashSaleIndexVO.primaryPicUrl" alt="">
                  </div>
                  <div class="price">
                    <div class="nowPrice">
                      <span class="rmb">￥</span>
                      <span>{{msite.flashSaleIndexVO.activityPrice}}</span>
                    </div>
                    <div class="originPrice">
                      <span class="rmb">￥</span>
                      <span>{{msite.flashSaleIndexVO.originPrice}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="fuliSale">
            <a href="javascript:;"></a>
          </div>
          <div class="topicList">
            <header class="topic-title">
              <a>
                <span>专题精选</span>
                <i class="icon-right"></i>
              </a>
            </header>
            <div class="topic-items">
              <div class="topicScrollBox">
                <ul v-if="msite.topicList">
                  <li v-for="(topic, index) in msite.topicList"
                      :key="index">
                    <a href="javascript:;">
                      <img :src="topic.scenePicUrl">
                    </a>
                    <div class="item-price">
                      <h4>{{topic.title}}</h4>
                      <span>
                      {{topic.priceInfo}}元起
                    </span>
                    </div>
                    <div class="item-info">{{topic.subtitle}}</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <GoodsGrid v-for="(cate, index) in msite.cateList" :key="index"
                      v-if="msite.cateList" :cateData="cate"/>
          <div class="downLoad-copyright">
            <div>
              <div class="downLoad">
                <a href="javascript:;">下载APP</a>
                <a href="javascript:;">电脑版</a>
              </div>
              <p class="copyright">
                <span>网易公司版权所有 © 1997-2018</span>
                <span>食品经营许可证：JY13301080111719</span>
              </p>
            </div>
          </div>
        </section>
      </div>
      <i class="gotoTop" @click = 'gotoTop'></i>
    </div>

</template>
<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import {mapState} from 'vuex'

  import indexItem from './indexItem/indexItem.vue'
  import GoodsGrid from './GoodsGrid/GoodsGrid.vue'
  export default {
    data () {
      return {
        navlist: ['推荐', '居家', '鞋包配饰', '服装','电器', '洗护', '饮食', '餐厨', '婴童', '文体', '特色区'],
        current: 0,
        countdownTime: 0
      }
    },
    computed: {
      ...mapState(['msite']),
      /*//品牌直供数据
      tagData() {
        if(this.msite.tagList){
          const tagData = this.msite.tagList.splice(0,4)
          return tagData
        } else {
          return
        }
      }*/
      // 计算限时购的时分秒倒计时
      hour () {
        const hour = Math.floor(this.countdownTime/(1000*60*60))
        return hour > 10? hour : '0'+hour
      },
      mins () {
        const mins = Math.floor(this.countdownTime/(1000*60)%60)
        return mins > 10? mins : '0'+mins
      },
      secs () {
        const secs = Math.floor(this.countdownTime/1000%60)
        return secs > 10? secs : '0'+secs
      }
    },

    mounted () {
      const timer = setInterval(() => {
        this.countdownTime -= 100
      },100)
      // 请求首页数据
      this.$store.dispatch('getMSite', () => {
        console.log('dispatch了')
        // 必须在状态数据更新之后执行
        this.$nextTick(() => {
          // 初始化列表显示之后执行
          this._initScroll()
          this.countdownTime = this.msite.flashSaleIndexVO.remainTime
          new Swiper('.swiper-container', {
//          centeredSlides: true,
            /*autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },*/
            // 需要分页器
            pagination: {
              el: '.swiper-pagination'
            },
            loop:true // 循环模式
          });
        })
      })
     /* setTimeout(() => {
        // 初始化列表显示之后执行
        new Swiper('.swiper-container', {
//          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          // 需要分页器
          pagination: {
            el: '.swiper-pagination'
          },
          loop:true // 循环模式
        });
      }, 500)*/

    },
    methods: {
      currentIndex (index) {
        this.current = index
      },

      gotoTop(){
        this.Container.scrollTo(0,0,1000)
      },

      _initScroll () {

        const scrollBox = document.querySelector('.scrollBox');

        const topicScrollBox = document.querySelector('.topicScrollBox');
        /*setTimeout(() => {


        },500)*/
        // 头部推荐滑动
        new BScroll (this.$refs.wrapper, {
          scrollX: true,
          click: true
        });
        // 新品、人气商品滑动
        this.Container = new BScroll (scrollBox,{
          click: true,
          scrollX:false,
          scrollY:true,
          probeType: 1,
          scrollbar:true
        });
        // 专题精选滑动
        new BScroll(topicScrollBox,{
          click: true,
          scrollX:true,
          scrollY:false
        });
      }
    },
    watch: {

    },
    components: {
      indexItem,
      GoodsGrid
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/index.styl'
html,body
  height 100%
  overflow hidden
  .msiteContainer
    width 100%
    height 100%
    /*overflow: hidden;*/
    .headerWarp
      background #fff
      /*position absolute*/
      position fixed !important
      top 0
      left 0
      width:100%
      z-index 5
      /*height (148*75/$rem)*/
      .line
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        padding: (.21333*75/$rem) (.4*75/$rem);
        >a
          width: (1.84*75/$rem);
          height: (.53333*75/$rem);
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
          display: inline-block;
          margin-right:(.26667*75/$rem)
          background-size: cover;
          background-position: center;
        .top_search
          flex-grow: 1;
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: center;
          height: (.74667*75/$rem);
          font-size: (.37333*75/$rem);
          background-color: #ededed;
          border-radius: (.10667*75/$rem);
          .icon
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: (.37333*75/$rem);
            height: (.37333*75/$rem);
            margin-right: (.13333*75/$rem);
          .placeholder
            color: #666;


      .tabsScroll
        position: relative;
        width: 100%;
        overflow: hidden;
        display: flex;
        flex-flow: row nowrap;
        background: #ffffff;
        height (60/$rem)
        /*width 100%
        display flex
        flex-direction column
        flex 1*/
        .list
          display: flex;
          flex-flow: row nowrap;
          flex-shrink: 0;
          background: #fff;
          width: (1535.5/$rem)!important
          /*padding: 0 0 12px 0;*/
          flex-direction row
          justify-content: space-between;
          align-items: center;
          padding: 0 .4rem;
          /*height: .8rem;
          display: flex;
          flex-shrink: 0;
          padding: 0 .4rem;
          background: #fff;*/
          >li
            /*width: 70px;*/
            /*text-align: center;
            flex-shrink:0;
            flex-wrap:nowrap;
            margin: (0.5*75/$rem)
            font-size: (.37333*75/$rem)*/
            display: inline-block;
            padding: 0 .21333rem;
            line-height: .8rem;
            font-size: .37333rem;
            color: #333;
            text-align: center;
            /*margin-left: .64rem;
            position relative*/
            li:nth-chilld(1)
              margin-left 0
            span
              /*padding: 0 0 12px 0;
              color: #b4282d;
              border-bottom: 3px solid #b4282d;*/
              display: block;
              padding: 0 .21333rem;
              line-height: .8rem;
              font-size: .37333rem;
              color: #333;
              text-align: center;
              vertical-align middle
              &.active
                padding: 0 0 -2px 0;
                color: #b4282d;
                border-bottom: 3px solid #b4282d;
              /*&.active::after
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                width: (87.95/$rem);
                height: .05333rem;
                background-color: #b4282d;*/

    /*.swiper-container
      height: (4.93333*75/$rem)
      margin-top
      position: relative

      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;*/
   /* >.scrollBox
      width 100%
      height 100%
      overflow hidden
      >.section
        width 100%
        overflow hidden
        !*padding-top 148*$rpx*!
        .swiper
          width 100%
          overflow hidden
          margin-bottom: (.26667*75/$rem);
          background-color: #fff
          >.swiper-container
            height (4.93333*75/$rem)
            >.swiper-wrapper
              img
                width 100%
                height 100%
            >.swiper-pagination
              >.swiper-pagination-bullet
                width: (.53333*75/$rem);
                height: (.03333*75/$rem);
                display: inline-block;
                background: #fff;
                opacity: .4;
                padding: 0;
                border: 0;
                font-size: 100%;
                font-weight: normal;
                vertical-align: baseline
                &.swiper-pagination-bullet-active
                  opacity: 1;*/
    /*>.scrollContainer
      width 100%
      height 100%
      !*overflow hidden*!
      margin-top (148/$rem)!important
      >.sectionInner
        width 100%
        overflow hidden
*/
    .hd-indexFloor
      margin-bottom: (.26667*75/$rem);
      background-color: #ededed;
      margin-top (148/$rem)
      .scrollBox
        height: (4.93333*75/$rem)
        position: relative
        .section
          padding-top: (4.93333*75/$rem)!important
          position: relative;
          width: 100%;

          overflow: hidden
          .swiper
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            .swiper-container
              margin-left: auto;
              margin-right: auto;
              position: relative;
              overflow: hidden;
              z-index: 1;
              height:( 4.93333*74/$rem);
              .swiper-wrapper
                /*width (750/$rem)*/
                display: flex
                z-index: 1
                box-sizing: content-box
                .swiper-slide
                  >img
                    width (750/$rem)
                    height (369.98/$rem)
  //                 /* width: 100% !important
  //                  height: 100% !important*/
              .swiper-pagination
                /*bottom: (.4*75/$rem)*/
                width: 100%
                position: absolute;
                bottom: 10px;
                left: 0;
                text-align: center;
                z-index: 10;
      .supports
        background-color #fff
        margin-bottom: (.26667*75/$rem);
        .grow
          width 100%
          height: (.96*75/$rem);
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          zoom: 1;
          .item
            flex: 1;
            float: left
            display flex
            align-items center
            justify-content center
            >a
              flex 1
              display: flex;
              justify-content center
              vertical-align: middle;
              height: .42667rem
              .icon
                display: inline-block;
                vertical-align: middle;
                background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-index-288c7abfd1.png);
                background-repeat: no-repeat;
                background-size: 100% 100%;
                width: (.42667*75/$rem);
                height: (.42667*75/$rem);
              .text
                font-size: (.32*75/$rem);
                color: #333;
                margin-left: (.10667*75/$rem);
                line-height: (.42667*75/$rem);
                display: inline-block;
                vertical-align: middle;



    .m1-indexFloor
      margin-bottom: (.26667*75/$rem);
      background-color: #fff;
      .hd
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        height: (1.46667*75/$rem);
        font-size: (.42667*75/$rem);
        .more
          align-items: center;
          display: flex;
          flex-flow: row nowrap;
          color: #333;
          .icon
            margin-left: (.13333*75/$rem);
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/go2-3e511991d6.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: (.4*75/$rem);
            height: (.4*75/$rem);

      .manuSupply
        padding-bottom: (.10667*75/$rem);
        .list
          position: relative;
          margin: (0 .21333*75/$rem);
          height: (6.24*75/$rem);
          overflow: hidden;
          .item
            display: inline-block;
            float left
            position: relative;
            margin-bottom: (.10667*75/$rem);
            width: (4.73333*75/$rem);
            height: (3.14667*75/$rem);
            overflow: hidden;
            background-color: #f4f4f4
            &.left-item
              margin-right: (.10667*75/$rem);
            >a
              width: 100%;
              height: 100%;
              .cnt
                position: absolute;
                left: 0;
                top: 0;
                padding: (.26667*75/$rem) 0 0 (.26667*75/$rem);
                width: 100%;
                z-index: 4;
                .title
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  overflow: hidden;
                  color: #333;
                  font-size: (.37333*75/$rem);
                  line-height: (.45333*75/$rem);
                  margin-bottom: (.08*75/$rem);
                .price
                  width (334.98/$rem)
                  height (34/$rem)
                  display flex
                  .price1
                    /*display inline-block*/
                    color: #333;
                    font-size: (.37333*75/$rem);
                    line-height: (.45333*75/$rem);
                  .price2
                    /*display inline-block*/
                    color: #333;
                    font-size: (.32*75/$rem);
                    line-height: (.45333*75/$rem);
                .icon
                  display: block;
                  margin-top: (.13333*75/$rem);
                  background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/new-5e42f2db1f.png);
                  background-repeat: no-repeat;
                  height: (.42667*75/$rem);
              img
                width (354.98/$rem) !important
                height (236/$rem) !important


    .new-indexFloor
      margin-bottom: (.26667*75/$rem);
      background-color: #fff;
      >.hd
        background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png);
        background-size:(10*75/$rem) (3.46667*75/$rem);
        height: (3.46667*75/$rem);
        margin-bottom: (.42667*75/$rem);
        position: relative;
        display: flex;
        flex-flow: row nowrap;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        -moz-align-items: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        -moz-justify-content: center;
        justify-content: center;
        font-size: (.42667*75/$rem);
        >.more
          display: block;
          text-align: center;
          font-size: (.48*75/$rem);
          color: #8BA0B6;
          align-items: center
          flex-flow: row nowrap;
          .all
            position: relative;
            margin: (.21333*75/$rem) auto 0;
            width: (3.2*75/$rem);
            height: (.74667*75/$rem);
            font-size: (.37333*75/$rem);
            line-height: (.74667*75/$rem);
            background: #D8E5F1;
            .wrap
              width: (1.70667*75/$rem);
              display: inline-block;
              text-align: left;
              .arrow-right
                position: absolute;
                top: (.22667*75/$rem);
                background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexNewArrow-f3b56d449b.png);
                background-size: (.13333*75/$rem) (.29333*75/$rem);
                display: inline-block;
                height: (.29333*75/$rem);
                width: (.13333*75/$rem);
                margin-left: (.08*75/$rem);

      .goodGrid
        background-color: #fff
        height: (6.4*75/$rem);
        .innerSwiper
          margin-left: auto;
          margin-right: auto;
          position: relative;
          overflow: hidden;
          /*z-index: 1;*/
          .list
            height: 414px;
            z-index: 0;
            align-items: flex-start;
            overflow: visible;
            display: flex;
            box-sizing: content-box;
            width: 100%;
            .item
              padding: 0!important;
              margin-left: (.4*75/$rem);
              width: (3.73333*75/$rem);
              height (413.97/$rem)
              float: left;
              position: relative;
              overflow: hidden;
              background-color: #fff;
              .good
                display: block
                width: 100%;
                height (413.97/$rem)
                .hd

                  border-radius: (.05333*75/$rem);
                  position: relative;
                  height (279.98/$rem)
                  /*z-index: 0;*/
                  .wraper
                    /*background-color: #f4f4f4;*/
                    border-radius: 4;
                    padding-bottom: 100%;
                    margin-bottom: (.26667*75/$rem);
                    position: relative;
                    height (279.98/$rem)
                    .lazyload
                      width: 100%;
                      >img
                        display: block
                        background-color: #f4f4f4;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%
                .name
                  /*margin-bottom: (.13333*75/$rem);*/
                  padding: 0 (.13333*75/$rem);
                  font-size: (.37333*75/$rem);
                  line-height: (.45333*75/$rem);
                  margin-top: (.13333*75/$rem);
                  text-align: left;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                  color: #333;
                .newItemDesc
                  display: block;
                  /*margin-bottom: (.18667*75/$rem);*/
                  font-size: (.32*75/$rem);
                  color: #7f7f7f;
                  line-height: (.4*75/$rem);
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  padding: (0.13333*75/$rem);
                .price
                  padding: (0.13333*75/$rem);
                  font-size: (.37333*75/$rem);
                  line-height: 1;
                  text-align: left;
                  color: #b4282d;
                  font-family: PingFangSC-Regular;
                  .price1
                    display inline-block




    .limitTimeBuy
      .limitTimeBuy-warp
        padding: (.4*75/$rem) (.53333*75/$rem) (.4*75/$rem) (.74667*75/$rem);
        margin-bottom: (.26667*75/$rem);
        height: (5.06667*75/$rem);
        background: #fff;
        display: -moz-flex;
        display: flex;
        >.left-item
          flex 1
          display flex
          flex-direction: column;
          padding-top: (1.06667*75/$rem);
          >.title
            font-size: (.48*75/$rem);
            line-height: (.48*75/$rem);
            margin-bottom: (.32*75/$rem);
            color: #333;
            letter-spacing: (.16*75/$rem);
          >.countdown
            display inline
            overflow hidden
            >span
              float left
              vertical-align middle
              line-height: (.74667*75/$rem);
              display: inline-block;
              text-align: center;
            >.time
              width: (.82667*75/$rem);
              height: (.74667*75/$rem);
              font-size: (.42667*75/$rem);
              color: #fff;
              border-radius: (.05333*75/$rem);
              background: #444;
            >.colon
              color: #333;
              font-size: (.4*75/$rem);
              width: (.26667*75/$rem);
              font-weight: 700;
          >.next-title

            margin-top: (.53333*75/$rem);
            color: #333;
            font-size: (.32*75/$rem);
            line-height: (.32*75/$rem);
            height: (.32*75/$rem);
            >span
              display inline-block
        >.right-item
          background: #fff;
          width: (4.26667*75/$rem);
          height: (4.26667*75/$rem);
          position: relative;
          >.imgWarp
            width 100%
            >img
              width: 100%;
              height: 100%;

          >.price
            height: (1.28*75/$rem);
            width: (1.28*75/$rem);
            position: absolute;
            right: (.26667*75/$rem);
            bottom: (.48*75/$rem);
            background-color: rgba(244,143,24,.95);
            border-radius: 100%;
            color: #fff;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            >div
              font-size: (.37333*75/$rem);
              line-height: (.37333*75/$rem);
              height: (.37333*75/$rem);
              >.rmb
                display inline-block
                font-size (.32*75/$rem)
                margin-right (-5/$rem)


    .fuliSale
      width: (10*75/$rem);
      height: (4*75/$rem);
      margin-bottom: (.26667*75/$rem)
      >a
        width 100%
        height 100%
        display block
        background-image: url(http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

    .topicList
      width 100%
      font-size: .42667rem
      background-color #fff
      >.topic-title
        width 100%
        height: 1.46667rem
        display flex
        color: #333
        align-items center
        justify-content center
        >a>span
          display inline-block
        .icon-right
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/go2-3e511991d6.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .4rem;
          height: .4rem;

      >.topic-items
        width 100%
        height (453/$rem)
        box-sizing border-box
        padding: 0 .4rem .48rem;
        overflow: hidden
        >.topicScrollBox
          width 100%
          height 100%
          display flex
          >ul
            display flex
            flex 1
            flex-shrink: 0
            >li
              display flex
              flex-flow: row nowrap
              flex-direction column
              margin-right: (20.8444/$rem);
              >a
                display: block;
                width: 7.66667rem;
                margin-bottom: .21333rem;
                border-radius: (8/$rem);
                overflow: hidden
                >img
                  display block
                  width 100%
                  height 100%
              >.item-price
                height: .54667rem;
                margin-bottom: .02667rem;
                zoom: 1;
                >h4
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  width: 5.46667rem;
                  float: left;
                  font-size: .37333rem;
                >span
                  float: right;
                  font-size: .37333rem;
                  color: #b4282d;
              >.item-info
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 7.66667rem;
                font-size: .32rem;
                color: #7F7F7F;

    .downLoad-copyright
      border-top: (1/$rem) solid rgba(0,0,0,.15);
      background-color: #414141
      margin-bottom (98/$rem)
      >div
        text-align: center;
        padding: .72rem .26667rem .37333rem
        width: 10rem;
        margin-right: auto;
        margin-left: auto;
        box-sizing border-box
        >.downLoad
          width 90%
          margin-right: auto;
          margin-left: auto;
          display flex
          align-items center
          justify-content center
          >a
            width: 2.29333rem;
            font-size: .32rem;
            color: #fff;
            margin-right: .33333rem
            margin-left: .33333rem
            height: .82667rem;
            line-height: .82667rem
            border: (1/$rem) solid #999
            text-align: center;
            background-color: transparent;
            border-radius: (4/$rem);
            overflow: hidden;

        >.copyright
          box-sizing: border-box
          margin-top: .48rem;
          margin-bottom: .48rem;
          display flex
          flex-direction column
          align-items center
          justify-content center
          >span
            font-size: .32rem;
            line-height: .42667rem;
            color: #999;


    .gotoTop
      position: absolute;
      right: (.30667*75/$rem);
      bottom: (1.6*75/$rem);
      vertical-align: middle;
      width: (1.09333*75/$rem);
      height: (1.09333*75/$rem);
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goToTop-7a19216f77.png);
      background-size: (1.09333*75/$rem) (1.09333*75/$rem);
      z-index: 2;
</style>
