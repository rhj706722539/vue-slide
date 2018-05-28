<template>
  <div class="list">
      <header class="header">
          <span>我的列表</span>
      </header>
      <div class="main" ref="wrap" :style="{ height: wrapHeight + 'px' }">
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
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name:'List',
  computed:{
      ...mapState({

      })
  },
  data() {
    return {
        wrapHeight:0,
        dataList:  ['测试列表01','测试列表02','测试列表03','测试列表04','测试列表05',
                    '测试列表06','测试列表07','测试列表08','测试列表09','测试列表10',
                    '测试列表11','测试列表12','测试列表13','测试列表14','测试列表15',
                    '测试列表16','测试列表17','测试列表18','测试列表19','测试列表20',
                    '测试列表21','测试列表22','测试列表23','测试列表24','测试列表25',
                    '测试列表26','测试列表27','测试列表28','测试列表29','测试列表30']
    }
  },
  beforeRouteLeave(to, from, next){
    let position = this.$refs.wrap.scrollTop;
    this.$store.commit('SAVE_POSITION', position);
    console.log("beforeRouteLeave"+position);
    next()
  },
  updated(){
    this.$nextTick(function(){
      let position = this.$store.state.position;
      this.$refs.wrap.scrollTop = position;
      console.log("updated" + position);
    }) 
  },
  methods: {
    ...mapMutations([
    
    ]),
    ...mapActions([
    
    ]),
    goDetail(i){
        this.$router.push({name:'Page',params:{index:i}});
    }
  },
  mounted () {
      this.wrapHeight = document.documentElement.clientHeight - this.$refs.wrap.getBoundingClientRect().top - 10;
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
    padding-top: .4rem;
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
