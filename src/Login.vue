<template>
  <div id="app">
    <div ref="www"></div>
    <div class="out">
      <div class="in">
        <div class="input" ref="input">

          <van-tabs v-model="active">
            <van-tab title="登录">
              <van-cell-group>
                <van-field v-model="userLogin.phone" required clearable label="手机号" placeholder="请输入手机号" />
                <van-field v-model="userLogin.password" required clearable label="密码" placeholder="请输入密码" />

                <van-field type="text" label="" placeholder="输入验证码" v-model="userLogin.verification" />
                  <!-- <img class="verificationImage"
                      src="http://demo.itlike.com/web/xlmc/api/captcha"
                      alt="captcha"
                      @click.prevent="getCaptcha"
                      ref="imgCaptcha"
                      slot="button"> -->

             
                  <span class="canvas" @click="changePic">
                    <canvas id="myCanvas" ref="myCanvas" width="500" height="600"></canvas>
                  </span>
              </van-cell-group>

            </van-tab>
            <van-tab title="注册">
              <van-cell-group>
                <van-field v-model="userRegister.phone" required placeholder="请输入手机号" />
                <van-field v-model="userRegister.firstPassword" required  placeholder="请输入密码" />
                <van-field v-model="userRegister.secondPassword" required  placeholder="请再次输入密码" />
              </van-cell-group>
            </van-tab>
          </van-tabs>
          <!-- <div class="canvas">
            <canvas id="myCanvas" ref="myCanvas" width="800" height="600"></canvas>
          </div> -->
        </div>
        <div class="downPart">
          <van-button plain type="primary">朴素按钮</van-button>
        </div>
        <div class="otherWay">
          <div>微信</div>
          <div>qq</div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import {code} from './utils/verificationCode'

export default {
  name: 'login',
  data() {
    return {
      active:0,
      userLogin: { // 用户登录数据
        phone: '',
        password: '',
        verification: ''
      },
      userRegister: { // 用户注册数据
        phone: '',
        firstPassword: '',
        secondPassword: ''
      },

    }
  },
  computed: {
      options: function() {
       return  {
          id: 'myCanvas',
          // width: this.$refs.input.style.width,
          width: 300,
          height: 60,
          txt: ''
        }
      }
  },
  methods:{
    changePic: function () {
      code(this.options)
    }
  },
  mounted() {
      this.$nextTick(() => {
        code(this.options)
      })
    
  },
}
</script>
<style lang="less">
.out{
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image:url('./assets/loginPics/pic1.jpg');
  // background-repeat: no-repeat;
  // // background-attachment: fixed;
  background-size: 100% 100%;
  // // background-position: ;
  // ::after{
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   bottom: 0;
  //   left: 0;
  //   right: 0;
  //   width: 100%;
  //   height: 100%;
  //   background-image: linear-gradient(120deg, #eaee44, #33d0ff);
  //   opacity: 0.4;
  // }
}
.in{
  width: 80%;
  height: 70%;
  background-color: white;
  border-radius: 20px;
  // opacity: .9;
}
.input{
  margin-top: 20px;
}
</style>
