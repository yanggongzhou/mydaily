<template>
  <div class="loginBox">
    <div class="hive"></div>
    <MouseParallax>
      <div slot="main" class="stage">
        <img
          data-prax
          src="https://images.magicscorp.com/Mimg/bms/parallax.jpg"
          class="cover"
        />
      </div>
    </MouseParallax>
    <img src="static/magicLogo.png" class="logo_magics" alt="">
    <div class="contentBox">
      <div class="title">
        magic虚拟直播平台
      </div>
      <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="loginForm">
          <el-form-item label="" prop="admin_name">
            <el-input
              size="small"
              prefix-icon="el-icon-user-solid"
              placeholder="账号"
              v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input
              size="small"
              prefix-icon="el-icon-orange"
              placeholder="密码"
              type="password"
              show-password
              v-model="ruleForm.password"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button
              class="login-btn"
              size="small" type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  const Cookies:any =require("js-cookie")
  import { LoginForm, LoginRules } from '@/types'
  import { MouseParallax } from '../plugins/index.js';
  import { Component, Vue } from "vue-property-decorator";
  @Component({
    components: {
      MouseParallax
    }
  })
  export default class Start extends Vue {
    private ruleForm: LoginForm = {
      username: "",
      password: ""
    };
    private rules: LoginRules = {
      username: [
        { required: true, message: '请输入账户', trigger: 'blur' },
        { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
      ],
    };
    mounted():void {

    }
    private submitForm( formName: string) :void {
      (this.$refs[formName] as any).validate((valid:boolean) => {
        if (valid) {
          this.$https.loginIn(this.ruleForm)
          .then((res:any)=>{
            console.log(res)
            Cookies.set('userfile',{username:res.data.username,token:res.token})
              this.$message({type:"info",message:res.msg})
            if(res.status===0){
              this.$router.push({name:'list'})
            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
</script>

<style lang="less" scoped>
.loginBox{
  background: linear-gradient(225deg,#6a84ab,#382a68);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .hive{
    height: 60%;
    width: 100%;
    background: url(https://large.magics-ad.com/ai-3D/static/img/bg2.png) no-repeat;
    background-size: cover;
    background-position-x: 100%;
    position: absolute;
    bottom: 0;
  }
  .stage {
    position: relative;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    .cover {
      /*filter: blur(10px);*/
      position: absolute;
      z-index: 1;
      top: -12vw;
      left: -12vh;
      height: 120vh;
      width: 150vw;
    }
    .bbbb {
      position: absolute;
      z-index: 2;
      top: 120px;
      left: 120px;
      font-size: 36px;
      color: #fff;
    }
    .cccc {
      position: absolute;
      z-index: 3;
      color: #fff;
      font-size: 36px;
      right: 200px;
      bottom: 120px;
    }
  }
  .contentBox{
    position: absolute;
    z-index: 20;
    left: calc(50% - 180px);
    top: calc(50% - 130px);
    background: #1b1823a1;
    width: 360px;
    height: 250px;
    border-radius: 5px;
    .title{
      text-align: center;
      font-size: 21px;
      border-bottom: 2px solid #ffff;
      padding: 10px;
      color: #fff;
      /*letter-spacing: 2px;*/
    }
    .loginForm{
      padding: 25px 40px 0;
      .el-form-item {
        margin-bottom: 15px;
      }
      .login-btn{
        width: 100%;
        letter-spacing: 5px;
      }
    }

  }
}
</style>
