<template>
  <div class="list">
      <header class="header">
          <span>我的列表</span>
      </header>
      <div class="main">
          <ul>
              <li v-for="(item,index) in dataList" :key="index">
                  <div class="list-content" @click="goDetail(index)">
                    <div class="list-left">{{item}}</div>
                    <div class="list-right">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-xiangyoujiantou"></use>
                        </svg>
                    </div>
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name:'List',
  data() {
    return {
        dataList:['测试列表01','测试列表02','测试列表03','测试列表04','测试列表05']
    }
  },
  methods: {
      goDetail(i){
          this.$router.push({name:'Page',params:{index:i}});
      }
  }
}
</script>

<style scoped>
.header{
    height: 1.8rem;
    text-align: center;
    line-height: 1.8rem;
    background: #fff;
    border-bottom: 1px solid #e6e6e6;
    position: relative;
    font-size: .768rem;
}
.main {
    overflow: scroll;
    height: 25rem;
    margin-top: .4rem;
}
.main ul li {
    margin: 0;
    width: 15.95rem;
    background: #fff;
    padding: .53rem .53rem 0;
}
.main ul li .list-content{
    padding-bottom: .5rem;
    font-size: .579rem;
    overflow: hidden;
    border-bottom: 1px solid #e8e8e8;
}
.main ul li .list-content .list-left {
    float: left;
}
.main ul li .list-content .list-right {
    float: right;
}
</style>
