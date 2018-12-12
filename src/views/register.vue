<template>
  <div class="page-register">
    <section>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
               hide-required-asterisk="false">
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="ruleForm.mobile" placeholder="请输入手机号" maxlength="11"></el-input>
        </el-form-item>
        <el-form-item class="code" label="短信验证码" prop="code">
          <el-input class="codeinput" type="password" placeholder="请输入验证码" maxlength="4"
                    v-model="ruleForm.code"></el-input>
          <el-button class="codeButton" type="primary" @click="sendMsg">发送验证码</el-button>
        </el-form-item>
        <span class="status">{{ statusMsg }}</span>
        <el-form-item label="密码" prop="pwd">
          <el-input type="password" placeholder="请输入密码" v-model="ruleForm.pwd"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="cpwd">
          <el-input type="password" placeholder="请输入确认密码" v-model="ruleForm.cpwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">注册并登录</el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
  import {getMessage} from '../api/api'

  export default {
    data() {
      // 此处自定义校验手机号码js逻辑
      let phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/
      let validatePhone = (rule, value, callback) => {
        if (!phoneReg.test(value)) {
          callback(new Error('请输入正确手机号'))
        } else {
          callback()
        }
      }
      // 密码验证
      let passwordvalidator = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.ruleForm.pwd) {
          callback(new Error('两次输入密码不一致'))
        } else {
          callback()
        }
      }
      return {
        statusMsg: '',
        error: '',
        ruleForm: {
          mobile: '',
          code: '',
          pwd: '',
          cpwd: ''
        },
        rules: {
          mobile: [
            {
              required: true,
              message: '请输入手机号'
            },
            {
              validator: validatePhone
            }
          ],
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
            message: '请输入确认密码',
            trigger: 'blur'
          }, {
            validator: passwordvalidator,
            trigger: 'blur'
          }]
        }
      }
    },
    methods: {
      sendMsg: function () {
        const self = this
        if (self.timerid) {
          return false
        }
        self.$refs['ruleForm'].validateField('mobile', (valid) => {
          if (valid) {
            return false
          }
          getMessage({
            mobile: self.ruleForm.mobile
          }).then((response) => {
            let count = 60;
            self.statusMsg = `验证码已发送,剩余${count--}秒`
            self.timerid = setInterval(function () {
              self.statusMsg = `验证码已发送,剩余${count--}秒`
              if (count === 0) {
                clearInterval(self.timerid)
              }
            }, 1000)
          })
            .catch(function (error) {
              console.log(error.response.data.mobile[0])
            })
        })
      }
    }
  }
</script>

<style lang="scss">
  section {
    margin: 0 auto 30px;
    padding-top: 30px;
    width: 980px;
    min-height: 300px;
    padding-right: 550px;
    box-sizing: border-box;
    .codeinput {
      width: 200px;
    }
    .codeButton {
      float: right;
    }
    .status {
      font-size: 12px;
      margin-left: 20px;
      color: #e6a23c;
    }
  }
</style>
