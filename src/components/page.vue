<template>
  <div class="page">
      <header class="header">
          <div class="is-left" @click="backHistory">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xiangzuojiantou"></use>
            </svg>
          </div>
          <span>我的详情</span>
      </header>
      <div class="page-content" :style="{background:thisColor}">
          <p>我是内容</p>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name:'Page',
  computed:{
      thisColor(){
        if(this.colorId == '0'){
        return '#0097E0'; 
        }else if(this.colorId == '1'){
        return '#3EDD92';
        }else if(this.colorId == '2'){
        return '#F8931D';
        }else if(this.colorId == '3'){
        return '#F75353';
        }else if(this.colorId == '4'){
        return '#C96BBF';
        }
    }
  },
  data() {
    return {
        colorId:''
    }
  },
  methods: {
    backHistory(){
        this.$router.goBack();
    },
    
  },
  mounted(){
    this.colorId = this.$route.params.index;
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
.is-left {
    position:absolute;
    top:0;
    left: .85rem;
    height: 1.7rem;
}
.page-content {
    width: 100%;
    height: 26rem;
    background: #fff;
    text-align: center;
}
.page-content p {
    padding-top: 5rem;
    color: #fff;
}
</style>
