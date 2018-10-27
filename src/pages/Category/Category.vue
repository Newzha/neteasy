<template>
  <div class="category">
    <div class="header">
      <div class="hdItem">
        <div class="hdInput">
          <i class="icon"></i>
          <span class="placeholder">搜索商品, 共17222款好物</span>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="navContainer">
        <div class="navScroll" ref="scrollNav">
          <ul class="navList">
            <li :class="{active:isActive  === index}" v-if="category_data.length"
                v-for="(category, index) in category_data" :key="index"
                @click="swithchCategory(index, category)">
              <a class="txt" href="javascript:;">{{category.name}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="rightCate" ref="scrollRight">
      <div class="imgRight" >
        <div class="banner" :style="{backgroundImage: `url(${nowCategory.bannerUrl})`}">
          <div class="cnt"></div>
        </div>
        <div class="cateList" v-if="category_data.length">
          <SpecialItem v-if="!nowCategory.level" :nowCategory = 'nowCategory'/>
          <CategoryItem v-else :nowCategory = 'nowCategory'/>

        </div>
      </div>
    </div>
    </section>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  import SpecialItem from './SpecialItem/SpecialItem.vue'
  import CategoryItem from './CategoryItem/CateGoryItem.vue'
  export default {
    data() {
      return{
        isActive: 0,
        nowCategory:{}
      }
    },
    computed: {
      ...mapState(['category_data'])
    },
    mounted() {
      this.$store.dispatch('getCategory', () => {
        console.log('categroy了')
        this.$nextTick(() => {
          this._initScroll();
          this.nowCategory = this.category_data[0]
        })
      })
    },
    methods: {
      swithchCategory (index,category) {
        this.isActive = index;
        this.nowCategory = category
      },
      _initScroll () {
        // 左边导航滑动
        new BScroll(this.$refs.scrollNav,{
          click: true,
          scrollX:false,
          scrollY:true,
          probeType: 1,
          scrollbar:true
        });
        // 右边内容滑动
        new BScroll(this.$refs.scrollRight,{
          click:true,
          scrollX:false,
          scrollY:true,
          probeType: 1,
          scrollbar:true
        })
      }
    },

    components: {
      SpecialItem,
      CategoryItem
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .category
    width 100%
    height 100%
    overflow hidden
    .header
      position: fixed!important;
      left: 0;
      top: 0;
      z-index: 5;
      width: 100%;
      height 1.173333333333333rem
      &:after
        content: '';
        position: absolute;
        background-color: #d9d9d9;
        left: 0;
        width: 100%;
        height: 0.013333333333333rem;
        transform-origin: 50% 100% 0;
        bottom: 0;
      .hdItem
        display flex
        align-items: center;
        height: 1.17333rem;
        padding: 0 .4rem;
        background-color: #fff;
        position: relative
        .hdInput
          width: 100%
          display flex
          flex-flow: row nowrap
          align-items: center
          justify-content: center;
          height: .74667rem;
          font-size: .37333rem;
          background-color: #ededed;
          border-radius: .10667rem;
          .icon
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: .37333rem;
            height: .37333rem;
            margin-right: .13333rem
          .placeholder
            color: #666
            font-size: .37333rem
    .section
      position relative
      width 100%
      height 100%
      /*padding-top 88/$rem*/
      box-sizing border-box
      background-color: #fff
      .navContainer
        position: absolute;
        top: 0.173333333333333rem
        left: 0;
        bottom: 0;
        z-index: 1;
        width: 2.16rem;
        background-color: #fff
        &::after
          content: '';
          position: absolute;
          background-color: rgba(0,0,0,.15);
          top: 0;
          bottom: 0;
          width: 1px;
          -webkit-transform-origin: 100% 50% 0;
          transform-origin: 100% 50% 0;
          right: 0
        >.navScroll
          width 100%
          height 100%
          overflow hidden
          position: relative
          ul
            box-sizing: border-box;
            li
              position relative
              width: 100%;
              height: .866667rem;
              text-align: center;
              border: none
              margin-top: .53333rem
              >.txt
                display: block;
                color: #333;
                font-size: .37333rem;
                line-height: .66667rem;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
              &.active
                &::before
                  content: ' ';
                  position: absolute;
                  top: 0;
                  left: 0;
                  height 100%
                  width: .08rem;
                  background-color: #ab2b2b
                >.txt
                  color: #ab2b2b

      .rightCate
        height:100%
        .imgRight
          height 100%
          margin-left: 2.16rem;
          margin-top: 1.17rem;
          padding: .4rem .4rem .28rem
          .banner
            position: relative;
            width: 100%;
            height: 2.56rem;
            display: table;
            margin-bottom: .42667rem;
            background: center no-repeat #f4f4f4;
            background-size: cover;
            border-radius: 4px
            .cnt
              display: table-cell;
              vertical-align: middle;
              text-align: center;
              font-size: .37333rem;
              color: #fff

</style>
