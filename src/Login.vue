<template>
  <div id="app">
    <!-- <div ref="www"></div> -->
    <div class="out">
      <div class="loginBox">
        <div class="auth-form">
          <van-tabs v-model="active" style="margin-top:1rem; padding:1rem">
            <van-tab title="登录">
              <van-form v-show="loginFlag"  @submit="login">
                <van-field label-width='3rem'
                  v-model.trim="userLogin.phone"
                  type='tel' maxlength=11
                  :rules="[{validator: phone, message:'请输入正确的手机号!'}]"
                  required clearable label="手机号"
                  placeholder="请输入手机号" />
                <van-field label-width='3rem'
                  v-model.trim="userLogin.password"
                  type='password' maxlength=20
                  required clearable label="密码"
                  :rules="[{required:true, message:'请输入密码'}]"
                  placeholder="请输入密码" />

                <van-field label-width='3rem' type="text" v-model="userLogin.verification" maxlength='4'
                  :rules="[{required:true, message:'请输入密码'}]"
                  required label="验证码" placeholder="输入验证码"  >
                  <template #button>
                    <canvas id="myCanvas" @click="changePic" ref="myCanvas"></canvas>
                  </template>
                </van-field>
                <div class="downPart">
                  <van-button size='large'  type="info" native-type='submit'>登录</van-button>
                </div>

              </van-form>
              <van-form v-show="!loginFlag" @submit="login">
                <van-field label-width='3rem'
                  v-model.trim="userLogin.phone"
                  :rules="[{validator: phone, message:'请输入正确的手机号!'}]"
                  required clearable label="手机号"
                  placeholder="请输入手机号" />
                <!-- <van-field label-width='3rem' v-model="userLogin.password" required clearable label="密码" placeholder="请输入密码" /> -->

                <van-field label-width='3rem' type="text" v-model.trim="userLogin.smsVerification"
                  center maxlength='4'
                  required style="font-size: .8rem"
                  label="验证码" placeholder="输入验证码"
                  :rules="[{required: true, message:'请输入验证码!'}]">
                  <template #button>
                    <van-button size='mini' type="primary" >发送验证码</van-button>
                  </template>
                </van-field>

                <div class="downPart">
                  <van-button size='large' type="info" native-type='submit'>登录</van-button>
                </div>
              </van-form>

            </van-tab>

            <van-tab title="注册">
              <van-form @submit="register">
                <van-field v-model.trim="userRegister.phone" 
                  :rules="[{validator:phone, message: '请输入正确的手机号'}]"
                  required placeholder="请输入手机号" />
                <van-field v-model.trim="userRegister.firstPassword"
                  :rules="[{required:true, message: '请输入密码'}]"
                  required  placeholder="请输入密码" />
                <van-field v-model.trim="userRegister.secondPassword"
                  :rules="[{required:true, message: '请再次输入密码'}]"
                  required  placeholder="请再次输入密码" /> 
                <div class="downPart">
                  <van-button size='large' type="info" native-type='submit'>注册</van-button>
                </div>
              </van-form>

            </van-tab>
          </van-tabs>
          <div v-if="active === 0" style="font-size: .5rem; margin-left: 1rem; color: #1989fa">
            <p @click="toggleLoginWay" v-if="loginFlag">短信验证码登录</p>
            <p @click="toggleLoginWay" v-else>账号密码登录</p>
          </div>
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
          <div class="tips" >
            <p>温馨提示：</p>
            <p>注册登录即表明同意<a href="#">用户协议</a> 及<a href="#">隐私政策</a> </p>
          </div>
        </div>

      </div>

    </div>
</div>

</template>
<script>
import { Toast } from 'vant'
import {code} from './utils/verificationCode'

export default {
  name: 'login',
  data() {
    return {
      active:0,
      loginFlag: true, // true为账号密码登录 false为短信验证登录
      userLogin: { // 用户登录数据
        phone: '',
        password: '',
        verification: '',
        verificationTest: '',
        smsVerification: '',
        smsVerificationTest: '123'

      },
      userRegister: { // 用户注册数据
        phone: '',
        firstPassword: '',
        secondPassword: ''
      },

    }
  },
  computed: {
      options: function() { // canvasd的属性项
       return  {
          id: 'myCanvas',
          width: 60,
          height: 25,
          txt: ''
        }
      }
  },
  methods:{
    phone: function(val) { // 校验电话号码
      return (/^[1][3,4,5,7,8][0-9]{9}$/).test(val)
    },

    changePic: function () {
      this.userLogin.verificationTest = code(this.options).toLowerCase()
      console.log(this.userLogin.verificationTest);
    },
    toggleLoginWay: function() {
      this.loginFlag = !this.loginFlag
    },
    login: function() {
      if(this.loginFlag) { // 账号密码登录
        if(this.userLogin.verification === this.userLogin.verificationTest) { // 验证码正确
          let data = {
            phone: this.userLogin.phone,
            password:this.userLogin.password
          }
          let url='https://www.fastmock.site/mock/763365f7578e614982b60a99bdc10127/api/user'
          this.$post(url, data).then(res => {
            console.log(res);
            if(res.data.verifySuccess) {
              // this.$router.replace('wode ')
              // window.open('https://www.baidu.com')
              window.location.href='https://www.baidu.com'
            }
          })
        } else { // 验证码错误 弹出提示
          Toast.fail({
            message:'验证码错误！',
            position: 'bottom',
            closeOnClick: 'true'
          })
          this.userLogin.verification=''
        }
      } else { // 手机验证码登录
        let data = {
          phone: this.userLogin.phone,
          smsVerification:this.userLogin.smsVerification
        }
        let url='https://www.fastmock.site/mock/763365f7578e614982b60a99bdc10127/api/smsVer'
        this.$post(url, data).then(res => {
          console.log(res);
          if(res.data.verifySuccess) {
            // this.$router.replace('wode ')
            // window.open('https://www.baidu.com')
            // window.location.href='https://www.baidu.com'
          }
        })
      }


    },
    register: function (){ // 注册
      if(this.register.firstPassword === this.register.secondPassword) {
        Toast.success({
          message: '成功！'
        })
        this.$router.back()
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.userLogin.verificationTest = code(this.options).toLowerCase()
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
  background-image:url('./assets/loginPics/loginBackground.jpg');
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
    position: relative;

    // font-size: 1.167rem;
    // background-color: #fff;
    // border-radius: 8px;
    // box-sizing: border-box;
    .tips{
      line-height: .9rem;
      font-size: .5rem;
      position: absolute;
      left: .6rem;
      bottom: 0rem;
    }
  }
  // opacity: .9;
}

</style>
