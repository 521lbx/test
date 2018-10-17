<template>
  <div>
    <router-view/>
    <mu-container class="tabBottom bordertop">
	    <mu-bottom-nav :value.sync="bottomIndex">
	      <mu-bottom-nav-item value="index" title="首页" icon=" " to="/index":ripple="true"/>
	      <mu-bottom-nav-item value="orders" title="订单" icon=" " to="/orders":ripple="true"/>
	      <mu-bottom-nav-item value="mine" title="我的" icon=" " to="/mine":ripple="true"/>
	    </mu-bottom-nav>
		</mu-container>
	</div>
</template>

<script>
export default {
  data () {
    return {
    	bottomIndex:''
    }
  },
	mounted(){
		this.bottomIndex = this.$route.name||'index';
	}
}
</script>

<style lang='less'>
  //非选中态图标
  a:nth-child(1) .mu-bottom-item-icon {
    background-image: url(../../static/img/index.png) ;
    background-repeat:no-repeat;
    width:24px;
    height:24px;
    background-size:auto 24px;
  }
  a:nth-child(2) .mu-bottom-item-icon {
    background-image: url(../../static/img/order.png) ;
    background-repeat:no-repeat;
    width:24px;
    height:24px;
    background-size:auto 24px;
  }
  a:nth-child(3) .mu-bottom-item-icon{
    background-image: url(../../static/img/mine.png) ;
    background-repeat:no-repeat;
    width:24px;
    height:24px;
    background-size:auto 24px;
  }
  //选中态图标
  a:nth-child(1).mu-bottom-item-active .mu-bottom-item-icon {
    background-image: url(../../static/img/indexa.png) ;
    background-repeat:no-repeat;
    width:24px;
    height:24px;
    background-size:auto 24px;
  }
  a:nth-child(2).mu-bottom-item-active .mu-bottom-item-icon {
    background-image: url(../../static/img/ordera.png) ;
    background-repeat:no-repeat;
    width:24px;
    height:24px;
    background-size:auto 24px;
  }
  a:nth-child(3).mu-bottom-item-active .mu-bottom-item-icon{
    background-image: url(../../static/img/minea.png) ;
    background-repeat:no-repeat;
    width:24px;
    height:24px;
    background-size:auto 24px;
  }
  //字体颜色
	.mu-bottom-item-text{
		color:#999999
	}
	.mu-bottom-item-active .mu-bottom-item-text{
		color:#2b2b2b;
	}
</style>
