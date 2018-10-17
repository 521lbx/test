<template>
	<div>
		<mu-paper :z-depth="1">
			<mu-appbar class="topBar" color="primary" textColor="#2b2b2b":z-depth="0">
			  <div slot="default" class="topBarTex">
			    订单
			  </div>
			</mu-appbar>
			<mu-container ref="container" class="demo-loadmore-content">
	    		<mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
	    			<div class="padd30 topBarMargin">
						<div v-for="item in orderlist" class="O_list" :key="item.id">
							<div class="bgcfff borderRad6" >
								<div style="height:1rem;">
									<div v-if="item.replace_send_status==0" class="O_dilivertyTag fl">
										代取快递
									</div>
									<div v-if="(item.type==0&&item.order_status==1)||(item.type==1&&item.order_dec=='送货中')" class="O_statusTex fr colorRed">
										{{item.order_dec}}
									</div>
									<div v-else class="O_statusTex color2b  fr">
										{{item.order_dec}}
									</div>
								</div>
							</div>
							<div class="O_dashline"></div>
							<div class="padd30 bgcfff">
								<div class="O_shop">
									<div style="display: flex;align-items:center;">
										<img class="O_shopimg" src="https://www.menkouhaodian.com/public/Uploads/goodsImg/20180713/4694352625780f088e4eb798ab5ef6e8.jpg"/>
										<div class="font36 fontbold">
											{{item.gb_name}}
										</div>
									</div>
									<div style="display: flex;align-items:center;">
										<img class="O_icon"src="http://180.76.168.76/Rwms/goodshop/images/position.png"/>
										<img class="O_icon" style="margin:0;" src="http://180.76.168.76/Rwms/goodshop/images/telphone.png"/>
									</div>
								</div>
								<div class="bordere8 ">
									<div class="O_statusList" v-for="(item1,index) in item.all_status":key="index"v-if="item1.status_desc!='用户已下单'">
										<p>{{item1.action_time|formatDate}}</p>
										<p>{{item1.status_desc}}</p>
									</div>
								</div>
								<div class="font30 O_total">
									<p class="color9">总计</p>
									<p class="color2b fontbold">￥60(10件) </p>
								</div>
								<div v-if="item.type==0&&item.order_status==1" class="O_cancleBt fontbold font32 borderRad6 bgc textCenter">
									取消
								</div>
							</div>
						</div>
					</div>
	    		</mu-load-more>
	    	</mu-container>
		</mu-paper>
		<!--<mu-paper :z-depth="1">
			<mu-appbar class="topBar" color="primary" textColor="#2b2b2b":z-depth="0">
			  <div slot="default" class="topBarTex">
			    订单
			  </div>
			</mu-appbar>
			<mu-container ref="container" class="demo-loadmore-content">
	    		<mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
	    			<div class="padd30 topBarMargin">
						<div v-for="item in orderlist" class="O_list" :key="item.id">
							<div class="bgcfff borderRad6" >
								<div style="height:1rem;">
									<div v-if="item.replace_send_status==0" class="O_dilivertyTag fl">
										代取快递
									</div>
									<div v-if="(item.type==0&&item.order_status==1)||(item.type==1&&item.order_dec=='送货中')" class="O_statusTex fr colorRed">
										{{item.order_dec}}
									</div>
									<div v-else class="O_statusTex color2b  fr">
										{{item.order_dec}}
									</div>
								</div>
							</div>
							<div class="O_dashline"></div>
							<div class="padd30 bgcfff">
								<div class="O_shop">
									<div style="display: flex;align-items:center;">
										<img class="O_shopimg" src="https://www.menkouhaodian.com/public/Uploads/goodsImg/20180713/4694352625780f088e4eb798ab5ef6e8.jpg"/>
										<div class="font36 fontbold">
											{{item.gb_name}}
										</div>
									</div>
									<div style="display: flex;align-items:center;">
										<img class="O_icon"src="http://180.76.168.76/Rwms/goodshop/images/position.png"/>
										<img class="O_icon" style="margin:0;" src="http://180.76.168.76/Rwms/goodshop/images/telphone.png"/>
									</div>
								</div>
								<div class="bordere8 ">
									<div class="O_statusList" v-for="(item1,index) in item.all_status":key="index"v-if="item1.status_desc!='用户已下单'">
										<p>{{item1.action_time|formatDate}}</p>
										<p>{{item1.status_desc}}</p>
									</div>
								</div>
								<div class="font30 O_total">
									<p class="color9">总计</p>
									<p class="color2b fontbold">￥60(10件) </p>
								</div>
								<div v-if="item.type==0&&item.order_status==1" class="O_cancleBt fontbold font32 borderRad6 bgc textCenter">
									取消
								</div>
							</div>
						</div>
					</div>
	    		</mu-load-more>
	    	</mu-container>
		</mu-paper>-->
	</div>
</template>

<script>
	
	import { formatDate } from "@/common/common";
	export default{
		data(){
			return {
				num: 10,
		    	refreshing: false,
		    	loading: false,
				orderlist:[
		            {
		                "id":"2018071K530494948AZ",
		                "gb_id":18,
		                "add_time":1530494948,
		                "total_money":"3.00",
		                "type":0,
		                "replace_send":{"number":1,"name":"1","tel":"15525252525"},
		                "replace_send_status":0,
		                "order_dec":"已取消",
		                "order_status":3,
		                "gb_name":"小明超市",
		                "gb_photo":"/Uploads/goodsImg/20180713/4694352625780f088e4eb798ab5ef6e8.jpg",
		                "telphone":"18602450167",
		                "lat":"41.788872",
		                "lng":"123.399218",
		                "all_status":[
		                    {
		                        "id":6582,
		                        "goid":"2018071K530494948AZ",
		                        "action_type":0,
		                        "order_status":0,
		                        "pay_status":0,
		                        "action_note":null,
		                        "action_time":1530494948,
		                        "status_desc":"用户已下单"
		                    },
		                    {
		                        "id":6583,
		                        "goid":"2018071K530494948AZ",
		                        "action_type":0,
		                        "order_status":1,
		                        "pay_status":1,
		                        "action_note":null,
		                        "action_time":1530494955,
		                        "status_desc":"下单"
		                    },
		                    {
		                        "id":6584,
		                        "goid":"2018071K530494948AZ",
		                        "action_type":1,
		                        "order_status":3,
		                        "pay_status":2,
		                        "action_note":null,
		                        "action_time":1530495404,
		                        "status_desc":"取消订单"
		                    }
		                ]
		            },
		            {
		                "id":"201806153B0RD174219",
		                "gb_id":84,
		                "add_time":1530174220,
		                "total_money":"0.01",
		                "type":0,
		                "replace_send":"",
		                "replace_send_status":1,
		                "order_dec":"已退款",
		                "order_status":3,
		                "gb_name":"扬谷便利店（和平店）",
		                "gb_photo":"/Uploads/goodsImg/20180713/ece82d8f30fb37fd7daf8eb1a3b3b8fe.jpg",
		                "telphone":"15840334966",
		                "lat":"41.790703",
		                "lng":"123.401384",
		                "all_status":[
		                    {
		                        "id":6401,
		                        "goid":"201806153B0RD174219",
		                        "action_type":0,
		                        "order_status":0,
		                        "pay_status":0,
		                        "action_note":null,
		                        "action_time":1530174220,
		                        "status_desc":"用户已下单"
		                    },
		                    {
		                        "id":6402,
		                        "goid":"201806153B0RD174219",
		                        "action_type":0,
		                        "order_status":1,
		                        "pay_status":1,
		                        "action_note":null,
		                        "action_time":1530174226,
		                        "status_desc":"下单"
		                    },
		                    {
		                        "id":6403,
		                        "goid":"201806153B0RD174219",
		                        "action_type":1,
		                        "order_status":4,
		                        "pay_status":1,
		                        "action_note":"",
		                        "action_time":1530174252,
		                        "status_desc":"接单"
		                    },
		                    {
		                        "id":6404,
		                        "goid":"201806153B0RD174219",
		                        "action_type":1,
		                        "order_status":3,
		                        "pay_status":2,
		                        "action_note":null,
		                        "action_time":1530174338,
		                        "status_desc":"退款"
		                    }
		                ]
		            },
		            {
		                "id":"2018061V530DG174108",
		                "gb_id":84,
		                "add_time":1530174109,
		                "total_money":"0.01",
		                "type":0,
		                "replace_send":"",
		                "replace_send_status":1,
		                "order_dec":"已退款",
		                "order_status":3,
		                "gb_name":"扬谷便利店（和平店）",
		                "gb_photo":"/Uploads/goodsImg/20180713/ece82d8f30fb37fd7daf8eb1a3b3b8fe.jpg",
		                "telphone":"15840334966",
		                "lat":"41.790703",
		                "lng":"123.401384",
		                "all_status":[
		                    {
		                        "id":6397,
		                        "goid":"2018061V530DG174108",
		                        "action_type":0,
		                        "order_status":0,
		                        "pay_status":0,
		                        "action_note":null,
		                        "action_time":1530174109,
		                        "status_desc":"用户已下单"
		                    },
		                    {
		                        "id":6398,
		                        "goid":"2018061V530DG174108",
		                        "action_type":0,
		                        "order_status":1,
		                        "pay_status":1,
		                        "action_note":null,
		                        "action_time":1530174116,
		                        "status_desc":"下单"
		                    },
		                    {
		                        "id":6399,
		                        "goid":"2018061V530DG174108",
		                        "action_type":1,
		                        "order_status":4,
		                        "pay_status":1,
		                        "action_note":"",
		                        "action_time":1530174142,
		                        "status_desc":"接单"
		                    },
		                    {
		                        "id":6405,
		                        "goid":"2018061V530DG174108",
		                        "action_type":1,
		                        "order_status":3,
		                        "pay_status":2,
		                        "action_note":null,
		                        "action_time":1530174345,
		                        "status_desc":"退款"
		                    }
		                ]
		            },
		            {
		                "id":"20180615301J73VZ885",
		                "gb_id":84,
		                "add_time":1530173886,
		                "total_money":"0.01",
		                "type":0,
		                "replace_send":"",
		                "replace_send_status":1,
		                "order_dec":"已退款",
		                "order_status":3,
		                "gb_name":"扬谷便利店（和平店）",
		                "gb_photo":"/Uploads/goodsImg/20180713/ece82d8f30fb37fd7daf8eb1a3b3b8fe.jpg",
		                "telphone":"15840334966",
		                "lat":"41.790703",
		                "lng":"123.401384",
		                "all_status":[
		                    {
		                        "id":6388,
		                        "goid":"20180615301J73VZ885",
		                        "action_type":0,
		                        "order_status":0,
		                        "pay_status":0,
		                        "action_note":null,
		                        "action_time":1530173886,
		                        "status_desc":"用户已下单"
		                    },
		                    {
		                        "id":6389,
		                        "goid":"20180615301J73VZ885",
		                        "action_type":0,
		                        "order_status":1,
		                        "pay_status":1,
		                        "action_note":null,
		                        "action_time":1530173926,
		                        "status_desc":"下单"
		                    },
		                    {
		                        "id":6390,
		                        "goid":"20180615301J73VZ885",
		                        "action_type":1,
		                        "order_status":4,
		                        "pay_status":1,
		                        "action_note":"",
		                        "action_time":1530173972,
		                        "status_desc":"接单"
		                    },
		                    {
		                        "id":6408,
		                        "goid":"20180615301J73VZ885",
		                        "action_type":1,
		                        "order_status":3,
		                        "pay_status":2,
		                        "action_note":null,
		                        "action_time":1530174380,
		                        "status_desc":"退款"
		                    }
		                ]
		            },
		            {
		                "id":"2018061T529487K44N9",
		                "gb_id":84,
		                "add_time":1529487450,
		                "total_money":"0.01",
		                "type":0,
		                "replace_send":"",
		                "replace_send_status":1,
		                "order_dec":"已退款",
		                "order_status":3,
		                "gb_name":"扬谷便利店（和平店）",
		                "gb_photo":"/Uploads/goodsImg/20180713/ece82d8f30fb37fd7daf8eb1a3b3b8fe.jpg",
		                "telphone":"15840334966",
		                "lat":"41.790703",
		                "lng":"123.401384",
		                "all_status":[
		                    {
		                        "id":6006,
		                        "goid":"2018061T529487K44N9",
		                        "action_type":0,
		                        "order_status":0,
		                        "pay_status":0,
		                        "action_note":null,
		                        "action_time":1529487450,
		                        "status_desc":"用户已下单"
		                    },
		                    {
		                        "id":6007,
		                        "goid":"2018061T529487K44N9",
		                        "action_type":0,
		                        "order_status":1,
		                        "pay_status":1,
		                        "action_note":null,
		                        "action_time":1529487456,
		                        "status_desc":"下单"
		                    },
		                    {
		                        "id":6008,
		                        "goid":"2018061T529487K44N9",
		                        "action_type":1,
		                        "order_status":4,
		                        "pay_status":1,
		                        "action_note":"",
		                        "action_time":1529487507,
		                        "status_desc":"接单"
		                    },
		                    {
		                        "id":6009,
		                        "goid":"2018061T529487K44N9",
		                        "action_type":1,
		                        "order_status":3,
		                        "pay_status":2,
		                        "action_note":null,
		                        "action_time":1529487547,
		                        "status_desc":"退款"
		                    }
		                ]
		            },
		            {
		                "id":"20180615L28440S937E",
		                "gb_id":57,
		                "add_time":1528440937,
		                "total_money":"10.00",
		                "type":0,
		                "replace_send":"",
		                "replace_send_status":1,
		                "order_dec":"已退款",
		                "order_status":3,
		                "gb_name":"二方便利店",
		                "gb_photo":"/Buiessphoto/20180425/8018d496746b8e20fee9c7846e0ce22f.jpg",
		                "telphone":"18304013885",
		                "lat":"41.789047",
		                "lng":"123.398319",
		                "all_status":[
		                    {
		                        "id":5534,
		                        "goid":"20180615L28440S937E",
		                        "action_type":0,
		                        "order_status":0,
		                        "pay_status":0,
		                        "action_note":null,
		                        "action_time":1528440937,
		                        "status_desc":"用户已下单"
		                    },
		                    {
		                        "id":5535,
		                        "goid":"20180615L28440S937E",
		                        "action_type":0,
		                        "order_status":1,
		                        "pay_status":1,
		                        "action_note":null,
		                        "action_time":1528440950,
		                        "status_desc":"下单"
		                    },
		                    {
		                        "id":5536,
		                        "goid":"20180615L28440S937E",
		                        "action_type":1,
		                        "order_status":3,
		                        "pay_status":2,
		                        "action_note":null,
		                        "action_time":1528441049,
		                        "status_desc":"退款"
		                    }
		                ]
		            },
		            {
		                "id":"2018061F5281878S5Z3",
		                "gb_id":59,
		                "add_time":1528187853,
		                "total_money":"3.00",
		                "type":0,
		                "replace_send":"",
		                "replace_send_status":1,
		                "order_dec":"已退款",
		                "order_status":3,
		                "gb_name":"扬谷便利店（浑南店）",
		                "gb_photo":"/Uploads/goodsImg/20180517/71e9a1440a990329b55243fbf4f7d541.jpg",
		                "telphone":"15754083031",
		                "lat":"41.786372",
		                "lng":"123.393307",
		                "all_status":[
		                    {
		                        "id":5472,
		                        "goid":"2018061F5281878S5Z3",
		                        "action_type":0,
		                        "order_status":0,
		                        "pay_status":0,
		                        "action_note":null,
		                        "action_time":1528187853,
		                        "status_desc":"用户已下单"
		                    },
		                    {
		                        "id":5473,
		                        "goid":"2018061F5281878S5Z3",
		                        "action_type":0,
		                        "order_status":1,
		                        "pay_status":1,
		                        "action_note":null,
		                        "action_time":1528187865,
		                        "status_desc":"下单"
		                    },
		                    {
		                        "id":5474,
		                        "goid":"2018061F5281878S5Z3",
		                        "action_type":1,
		                        "order_status":3,
		                        "pay_status":2,
		                        "action_note":null,
		                        "action_time":1528187910,
		                        "status_desc":"退款"
		                    }
		                ]
		            },
		            {
		                "id":"201805152E731N51L68",
		                "gb_id":84,
		                "add_time":1527315169,
		                "total_money":"0.01",
		                "type":0,
		                "replace_send":"",
		                "replace_send_status":1,
		                "order_dec":"已退款",
		                "order_status":3,
		                "gb_name":"扬谷便利店（和平店）",
		                "gb_photo":"/Uploads/goodsImg/20180713/ece82d8f30fb37fd7daf8eb1a3b3b8fe.jpg",
		                "telphone":"15840334966",
		                "lat":"41.790703",
		                "lng":"123.401384",
		                "all_status":[
		                    {
		                        "id":5029,
		                        "goid":"201805152E731N51L68",
		                        "action_type":0,
		                        "order_status":0,
		                        "pay_status":0,
		                        "action_note":null,
		                        "action_time":1527315169,
		                        "status_desc":"用户已下单"
		                    },
		                    {
		                        "id":5030,
		                        "goid":"201805152E731N51L68",
		                        "action_type":0,
		                        "order_status":1,
		                        "pay_status":1,
		                        "action_note":null,
		                        "action_time":1527315174,
		                        "status_desc":"下单"
		                    },
		                    {
		                        "id":5042,
		                        "goid":"201805152E731N51L68",
		                        "action_type":1,
		                        "order_status":3,
		                        "pay_status":2,
		                        "action_note":null,
		                        "action_time":1527327145,
		                        "status_desc":"退款"
		                    }
		                ]
		            },
		            {
		                "id":"201805152C72972N77I",
		                "gb_id":84,
		                "add_time":1527297277,
		                "total_money":"0.01",
		                "type":0,
		                "replace_send":"",
		                "replace_send_status":1,
		                "order_dec":"已退款",
		                "order_status":3,
		                "gb_name":"扬谷便利店（和平店）",
		                "gb_photo":"/Uploads/goodsImg/20180713/ece82d8f30fb37fd7daf8eb1a3b3b8fe.jpg",
		                "telphone":"15840334966",
		                "lat":"41.790703",
		                "lng":"123.401384",
		                "all_status":[
		                    {
		                        "id":5001,
		                        "goid":"201805152C72972N77I",
		                        "action_type":0,
		                        "order_status":0,
		                        "pay_status":0,
		                        "action_note":null,
		                        "action_time":1527297277,
		                        "status_desc":"用户已下单"
		                    },
		                    {
		                        "id":5002,
		                        "goid":"201805152C72972N77I",
		                        "action_type":0,
		                        "order_status":1,
		                        "pay_status":1,
		                        "action_note":null,
		                        "action_time":1527297283,
		                        "status_desc":"下单"
		                    },
		                    {
		                        "id":5043,
		                        "goid":"201805152C72972N77I",
		                        "action_type":1,
		                        "order_status":3,
		                        "pay_status":2,
		                        "action_note":null,
		                        "action_time":1527327154,
		                        "status_desc":"退款"
		                    }
		                ]
		            },
		            {
		                "id":"20180515272971S6U5K",
		                "gb_id":84,
		                "add_time":1527297165,
		                "total_money":"0.01",
		                "type":0,
		                "replace_send":"",
		                "replace_send_status":1,
		                "order_dec":"已退款",
		                "order_status":3,
		                "gb_name":"扬谷便利店（和平店）",
		                "gb_photo":"/Uploads/goodsImg/20180713/ece82d8f30fb37fd7daf8eb1a3b3b8fe.jpg",
		                "telphone":"15840334966",
		                "lat":"41.790703",
		                "lng":"123.401384",
		                "all_status":[
		                    {
		                        "id":4999,
		                        "goid":"20180515272971S6U5K",
		                        "action_type":0,
		                        "order_status":0,
		                        "pay_status":0,
		                        "action_note":null,
		                        "action_time":1527297165,
		                        "status_desc":"用户已下单"
		                    },
		                    {
		                        "id":5000,
		                        "goid":"20180515272971S6U5K",
		                        "action_type":0,
		                        "order_status":1,
		                        "pay_status":1,
		                        "action_note":null,
		                        "action_time":1527297172,
		                        "status_desc":"下单"
		                    },
		                    {
		                        "id":5044,
		                        "goid":"20180515272971S6U5K",
		                        "action_type":1,
		                        "order_status":3,
		                        "pay_status":2,
		                        "action_note":null,
		                        "action_time":1527327157,
		                        "status_desc":"退款"
		                    }
		                ]
		            }
		        ]
			}
		},
		methods:{
			refresh () {
		      this.refreshing = true;
		      this.$refs.container.scrollTop = 0;
		      setTimeout(() => {
		        this.refreshing = false;
		        this.num = 10;
		      }, 2000)
		    },
		    load () {
		      this.loading = true;
		      setTimeout(() => {
		        this.loading = false;
		        this.num += 10;
		      }, 2000)
		    }
		},
		filters: {
			formatDate(time) {
				time = parseInt(time + "000");
				var date = new Date(time);
				return formatDate(date, "yyyy-MM-dd hh:mm:ss");
			}
		},
		mounted(){
			/*this.orderlist.forEach(cols=>{
				if (cols.replace_send){
					cols.replace_send = JSON.parse(cols.replace_send);
				}
			})*/
		}
	}
</script>

<style lang="less">
	.demo-loadmore-wrap {
	  width: 100%;
	  height:611px;
	  display: flex;
	  flex-direction: column;
	  .mu-appbar {
	    width: 100%;
	  }
	}
	.demo-loadmore-content {
	  -webkit-overflow-scrolling: touch;
	}
	
</style>