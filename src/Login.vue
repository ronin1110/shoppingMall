<template>
  <div id="app">
    <!-- <div ref="www"></div> -->
    <div class="out">
      <div class="loginBox">
        <div class="auth-form">
          <van-tabs v-model="active" style="margin-top:1rem; padding:1rem">
            <van-tab title="登录">
              <van-cell-group >
                <van-field label-width='3rem' v-model="userLogin.phone" required clearable label="手机号" placeholder="请输入手机号" />
                <van-field label-width='3rem' v-model="userLogin.password" required clearable label="密码" placeholder="请输入密码" />

                <van-field label-width='3rem' type="text" v-model="userLogin.verification" maxlength='4' required label="验证码" placeholder="输入验证码"  >
                  <template #button>
                    <canvas id="myCanvas" @click="changePic" ref="myCanvas"></canvas>
                  </template>
                </van-field>

              </van-cell-group>
              <div class="downPart">
                <van-button size='large' type="info">登录</van-button>
              </div>
            </van-tab>


            <van-tab title="注册">
              <van-cell-group>
                <van-field v-model="userRegister.phone" required placeholder="请输入手机号" />
                <van-field v-model="userRegister.firstPassword" required  placeholder="请输入密码" />
                <van-field v-model="userRegister.secondPassword" required  placeholder="请再次输入密码" />
              </van-cell-group>
              <div class="downPart">
                <van-button size='large' type="info">注册</van-button>
              </div>
            </van-tab>
          </van-tabs>
          <van-divider
            :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 1rem',margin: '0' }">
            其他登录方式
          </van-divider>
          <van-grid :column-num='2' :border='false'>
            <van-grid-item  text="" url='https://www.baidu.com'>
               <van-icon name="wechat" size='2rem'  color='green' />
               <div style="font-size:.5rem">微信登录</div>
            </van-grid-item>
            <van-grid-item url='https://www.baidu.com' text="">
              <van-icon name="friends" size='2rem' color='green'  />
              <div style="font-size:.5rem">QQ登录</div>
            </van-grid-item>
          </van-grid> 
          <div style="font-size:.5rem; margin-top:5rem">
            <p>温馨提示：</p>
            <p>注册登录即表明同意<a href="#">用户协议</a> 及<a href="#">隐私政策</a> </p>
          </div>
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
        verification: '',
        verificationTest: ''
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
          width: 60,
          height: 25,
          txt: ''
        }
      }
  },
  methods:{
    changePic: function () {
      this.userLogin.verificationTest = code(this.options)
      console.log(this.userLogin.verificationTest);
    }
  },
  mounted() {
      this.$nextTick(() => {
        this.userLogin.verificationTest = code(this.options)
      })
    
  },
}
</script>
<style lang="less" scoped>
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

  
}
.loginBox{
  width: 80%;
  height: 80%;
  opacity: .95;
  display: flex;
  justify-content: center;
  // align-items:flex-start;
  // flex-direction: column;
  background-color: white;
  border-radius: 20px;
  // position: fixed;
  .auth-form{
    // position: relative;
    padding: .1rem;
    width: 26.5rem;
    max-width: 90%;
    // font-size: 1.167rem;
    // background-color: #fff;
    // border-radius: 8px;
    // box-sizing: border-box;
  }
  // opacity: .9;
}
// .input{
//   margin-top: 20px;
//   width: 80%;
// }
</style>
