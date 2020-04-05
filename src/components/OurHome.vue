<template>
    <div class="ourHome">
        <mu-container>
            <mu-row>
                <mu-col span="12">
                    <mu-flex justify-content="center" class="head_img">
                        <mu-chip class="demo-chip" color="Brown">
                            <mu-avatar :size="35">
                                <img src="../assets/wechat_head_pic_01.jpeg">
                            </mu-avatar>
                            <span style="font-size: 16px">张国梁</span>
                        </mu-chip>
                        <mu-icon value="favorite" :size="35" color="red"></mu-icon>
                        <mu-chip class="demo-chip" color="pink100">
                            <span style="font-size: 16px">陈艳玲</span>
                            <mu-avatar :size="35" style="margin-right: -12px;margin-left: 4px;">
                                <img src="../assets/wechat_head_pic_02.jpg">
                            </mu-avatar>
                        </mu-chip>
                    </mu-flex>
                </mu-col>
                <mu-col span="2"></mu-col>
            </mu-row>
            <mu-row>
                <mu-col span="12">
                    <mu-flex justify-content="center" style="margin-top: 50px">
                        <mu-chip class="demo-chip" color="amber300" text-color="grey700">
                        <span>
                          亲爱的，我们在一起已经{{timeForLove.day}}天{{timeForLove.hour}}小时
                          {{timeForLove.minute}}分钟{{timeForLove.second}}秒啦
                        </span>
                        </mu-chip>
                    </mu-flex>
                </mu-col>
            </mu-row>
        </mu-container>
        <span class="bubble">
            <span class="glow"></span>
        </span>
    </div>
</template>

<script>
  export default {
    name: 'OurHome',
    data() {
      return {
        msg: "hello",
        timeForLove: {
          year: 99,
          month: 12,
          day: undefined,
          hour: undefined,
          minute: undefined,
          second: undefined
        }
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        setInterval(this.timer, 500);
      })
    },
    methods: {
      timer: function () {
        let startDate = new Date("2020/3/24");
        let myDate = new Date();
        this.timeForLove.day = parseInt((myDate - startDate) / (1000 * 60 * 60 * 24));
        this.timeForLove.hour = myDate.getHours();
        this.timeForLove.minute = myDate.getMinutes() < 10 ? "0" + myDate.getMinutes() : myDate.getMinutes();
        this.timeForLove.second = myDate.getSeconds() < 10 ? "0" + myDate.getSeconds() : myDate.getSeconds();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .ourHome {
        width: 100%;
        height: 100%;
        background-image: url("../assets/home_bg_02.jpg");
        background-size: 100% auto;
    }

    .head_img {
        margin: 20px 0 20px 0;
    }

    @-webkit-keyframes pulse {
        0% {
            box-shadow: 0 0 30px #ffd3ae;
        }
        50% {
            box-shadow: 0 0 80px #ffd3ae;
        }
        100% {
            box-shadow: 0 0 30px #ffd3ae;
        }
    }
    @keyframes pulse {
        0% {
            box-shadow: 0 0 30px #ffd3ae;
        }
        50% {
            box-shadow: 0 0 80px #ffd3ae;
        }
        100% {
            box-shadow: 0 0 30px #ffd3ae;
        }
    }
    @-webkit-keyframes bubbleUp {
        0% {
            bottom: 110px;
            -webkit-transform: scale(0.9);
            opacity: 0;
        }
        1% {
            bottom: 110px;
            -webkit-transform: scale(0.3);
            opacity: 0.3;
        }
        30% {
            bottom: 110px;
            -webkit-transform: scale(0.8);
            opacity: 1;
        }
        95% {
            bottom: 545px;
            -webkit-transform: scale(0.3);
            opacity: 1;
        }
        99% {
            bottom: 550px;
            -webkit-transform: scale(3);
            opacity: 0.1;
        }
        100% {
            bottom: 110px;
            -webkit-transform: scale(0.9);
            opacity: 0;
        }
    }
    @keyframes bubbleUp {
        0% {
            bottom: 110px;
            -webkit-transform: scale(0.9);
            opacity: 0;
        }
        1% {
            bottom: 110px;
            -webkit-transform: scale(0.3);
            opacity: 0.3;
        }
        30% {
            bottom: 110px;
            -webkit-transform: scale(0.8);
            opacity: 1;
        }
        95% {
            bottom: 545px;
            -webkit-transform: scale(0.3);
            opacity: 1;
        }
        99% {
            bottom: 550px;
            -webkit-transform: scale(3);
            opacity: 0.1;
        }
        100% {
            bottom: 110px;
            -webkit-transform: scale(0.9);
            opacity: 0;
        }
    }
    span.glow {
        width: 100%;
        height: 100%;
        position: relative;
        display: block;
        border-radius: 200px;
        -webkit-animation: pulse 2s infinite;
        animation: pulse 2s infinite;
    }
    span.bubble {
        background: #fff;
        width: 80px;
        height: 80px;
        position: absolute;
        display: block;
        left: 40%;
        bottom: 5%;
        border-radius: 50%;
        background: -webkit-radial-gradient(circle closest-side, rgba(240, 197, 73, 0.16) 40%, rgba(243, 91, 194, 0.29));
        background: radial-gradient(circle closest-side, rgba(240, 197, 73, 0.16) 40%, rgba(243, 91, 194, 0.29));
        -webkit-animation: bubbleUp 4s infinite ease-in-out;
        animation: bubbleUp 4s infinite ease-in-out;
    }
</style>
