<template>
  <div class="ItemWarp">
    <header class="header" :class="className" >
      <a :class="{haowu: className!=='newItemList'}">
        <span v-if="className=='newItemList'">新品首发</span>
        <span v-else>人气推荐·好物精选</span>
        <!--<span v-if="'popularItemList' === className">人气推荐·好物精选</span>-->
        <div>
          <span>
            <span>查看全部</span>
            <i class="right-icon"></i>
          </span>
        </div>
      </a>
    </header>
    <div :id ="className" class="ItemList">
      <ul>
        <li v-for="(item,index) in ItemList" :key="index">
          <a>
            <div class="img-warp">
              <img :src="item.listPicUrl">
            </div>
            <div class="item-name">
              <span>
                {{item.name}}
              </span>
            </div>
            <div class="item-desc">
              {{item.simpleDesc}}
            </div>
            <div class="item-price">￥{{item.retailPrice}}</div>
          </a>
        </li>
        <li class="item-more">
          <a>
            <span>查看全部</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {

    data() {
      return {}
    },
    props:{
      className:String,
      ItemList:Array
    },

    mounted(){
//      const BSbox =document.getElementById(this.className);
//      const BSbox =document.querySelector('.ItemList');
      const BSbox =document.querySelectorAll('.ItemList');
      setTimeout(() =>{
        new BScroll(BSbox[0],{
          click: true,
          scrollX:true,
          scrollY:false
        });
        new BScroll(BSbox[1],{
          click: true,
          scrollX:true,
          scrollY:false
        });
      },200)
    },



  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/stylus/index.styl'
  .ItemWarp
    margin-bottom: (.26667rem);
    background-color: #fff;
    width 100%
    overflow hidden
    >.header
      background-size: (10*75/$rem) (3.46667*75/$rem);
      height: (3.46667*75/$rem);
      margin-bottom:( .42667*75/$rem);
      position: relative;
      display: flex;
      flex-flow: row nowrap;
      align-items: center
      justify-content: center;
      font-size: (.42667*75/$rem);
      &.newItemList
        background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png)
      &.popularItemList
        background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap2-d626e0b52a.png)
      >a
        display: block;
        text-align: center;
        font-size: (.48*75/$rem);
        color: #8BA0B6;
        flex-flow: row nowrap;
        align-items: center
        >div
          position: relative;
          margin: (.21333*75/$rem) auto 0;
          width:( 3.2*75/$rem);
          height: (.74667*75/$rem);
          font-size: (.37333*75/$rem);
          line-height: (.74667*75/$rem);
          background: #D8E5F1;
          i
            position: absolute;
            top: (.22667*75/$rem);
            background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexNewArrow-f3b56d449b.png);
            background-size: (.13333*75/$rem) (.29333*75/$rem);
            display: inline-block;
            height: (.29333*75/$rem);
            width: (.13333*75/$rem);
            margin-left: (.08*75/$rem);
        &.haowu
          color: #B4A078;
          >div
            background-color  #F4E9CB
            i
              background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexPopularArrow-fb701819de.png)
    >.ItemList
      height: (6.4*75/$rem)
      background-color: #fff;
      display flex
      >ul
        display flex
        >li
          margin-left: (.4*75/$rem);
          width: (3.73333*75/$rem)
          height 100%
          float: left;
          position: relative
          overflow: hidden
          background-color #fff
          &.item-more
            display: block;
            border: (.10667*75/$rem) solid #F4F4F4;
            width: (3.73333*75/$rem);
            height: (3.73333*75/$rem);
            margin: (0 .4*75/$rem);
            line-height: (3.73333*75/$rem);
            text-align: center;
            >a>span
              font-size: (.37333*75/$rem);
              color: #666
          >a
            width 100%
            >.img-warp
              width 100%
              background-color #f4f4f4
              margin-bottom: (.26667*75/$rem)
              >img
                width 100%
                display block


            >.item-name
              margin-top: (.13333*75/$rem);
              padding: 0 (.13333*75/$rem);
              line-height: (.64*75/$rem);
              text-align: left;
              font-size: (.37333*75/$rem);
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              color: #333;

            >.item-desc
              display: block;
              margin-bottom: (.18667*75/$rem);
              font-size: (.32*75/$rem);
              color: #7f7f7f;
              line-height: (.4*75/$rem);
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              padding: 0 (.13333*75/$rem)
            >.item-price
              padding: 0 (.13333*75/$rem);
              font-size: (.37333*75/$rem)
              line-height: 1;
              text-align: left;
              color: #b4282d;
</style>
