<template>
  <div class="page-register">
    <article class="header">
      <header>
        <a
          href="/"
          class="site-logo"/>
        <span class="login">
          <em class="bold">已有美团账号？</em>
          <a href="/login">
            <el-button
              type="primary"
              size="small">登录</el-button>
          </a>
        </span>
      </header>
    </article>
    <section>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="验证码" prop="code">
          <el-input type="password" v-model="ruleForm.code" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="密码" prop="pwd">
          <el-input type="password" v-model="ruleForm.pwd" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="确认密码" prop="cpwd">
          <el-input type="password" v-model="ruleForm.cpwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">同意一下协议并注册</el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        statusMsg: '',
        error: '',
        ruleForm: {
          code: '',
          pwd: '',
          cpwd: '',
          email: ''
        },
        rules: {
          email: [{
            required: true,
            type: 'email',
            message: '请输入邮箱',
            trigger: 'blur'
          }],
          code: [{
            required: true,
            message: '请输入验证码',
            trigger: 'blur'
          }],
          pwd: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }],
          cpwd: [{
            required: true,
            message: '请确认密码',
            trigger: 'blur'
          }, {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请再次输入密码'))
              } else if (value !== this.ruleForm.pwd) {
                callback(new Error('两次输入密码不一致'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }]
        }
      }
    }
  }
</script>

<style lang="scss">

  .header {
    border-bottom: 2px solid #2bb8aa;
    min-width: 980px;
    color: #666;

    header {
      margin: 0 auto;
      padding: 10px 0;
      width: 980px;

      .site-logo {
        display: inline-block;
        width: 128px;
        width: 54px;
        height: 36px;
        text-indent: -9999px;
        background-position: -669px -748px;
        background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
      }

      .login {
        float: right;
        line-height: 36px;
      }

      .bold {
        margin-right: 10px;
        vertical-align: sub;
      }
      .el-button {
        background: #2db3a6;
        font-size: 12px;
      }
    }
  }

  section {
    margin: 0 auto 30px;
    padding-top: 30px;
    width: 980px;
    min-height: 300px;
    padding-right: 550px;
    box-sizing: border-box;
  }
</style>
