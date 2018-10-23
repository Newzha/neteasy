<template>
  <div class="findthings">
    <HeaderGuide/>

    <div class="explore">
      <div class="bannerWrapper">
        <div class="carousel">
          <div class="swiper-container">
            <div class="swiper-wrap">
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

              </a>

            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import Swiper from 'swiper'
  export default {

    mounted () {
      setTimeout(() => {
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
      }, 600)
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
        margin: auto;
        position: relative;
        background-color: #fff;
        .swiper-container
          overflow: visible!important;
          margin-left: auto;
          margin-right: auto;
          position: relative;

          /*z-index: 1;*/
          .swiper-wrap
            height: auto;
            position: relative;
            width: 100%;
            /*z-index: 1;*/
            display: flex;
            box-sizing: content-box;
            .swiper-slide
              position: relative;
              display: block;
              padding: 0 .13333rem;
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

            .swiper-pagination
              width: auto;
              right: 0;
              left: auto;
              margin-bottom: (.21333*75/$rem);
              padding-right: (.4*75/$rem);
              position: absolute;
              text-align: center;
              /*z-index: 10;*/
</style>
