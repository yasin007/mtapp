<template>
  <div class="page-register">
    <section>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
               hide-required-asterisk="false">
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="ruleForm.mobile" placeholder="请输入手机号" maxlength="11"></el-input>
        </el-form-item>
        <el-form-item class="code" label="短信验证码" prop="code">
          <el-input class="codeinput" placeholder="请输入验证码" maxlength="4"
                    v-model="ruleForm.code"></el-input>
          <el-button class="codeButton" type="primary" :loading=verCodeButtonLoading @click="sendMsg">{{ statusMsg }}
          </el-button>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input type="password" placeholder="请输入密码" v-model="ruleForm.pwd"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="cpwd">
          <el-input type="password" placeholder="请输入确认密码" v-model="ruleForm.cpwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :loading=registerButtonLoading @click="register">注册并登录</el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
  import {getMessage, register} from '../../api/api'
  import cookie from '../../static/js/cookie'

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
        statusMsg: '发送验证码',
        verCodeButtonLoading: false,
        registerButtonLoading: false,
        error: {
          mobile: '',
          password: '',
          username: '',
          code: ''
        },
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
          self.verCodeButtonLoading = true
          getMessage({
            mobile: self.ruleForm.mobile
          }).then((response) => {
            self.verCodeButtonLoading = false
            let count = 60
            self.statusMsg = `${count--}秒`
            self.timerid = setInterval(function () {
              self.statusMsg = `${count--}秒`
              if (count === 0) {
                clearInterval(self.timerid)
                self.statusMsg = ''
              }
            }, 1000)
          })
            .catch(function (error) {
              self.verCodeButtonLoading = false
              if (error.mobile) {
                self.$message({
                  showClose: true,
                  message: error.mobile[0],
                  type: 'error'
                })
              }
            })
        })
      },
      register: function () {
        let self = this
        this.$refs['ruleForm'].validate((valid) => {
          if (valid) {
            self.registerButtonLoading = true
            register({
              username: self.ruleForm.mobile,
              password: self.ruleForm.cpwd,
              code: self.ruleForm.code
            }).then((response) => {
              self.registerButtonLoadingg = false
              cookie.setCookie('name', response.data.username, 7)
              cookie.setCookie('token', response.data.token, 7)
              // 更新store数据
              self.$store.dispatch('setInfo')
              //跳转到首页页面
              self.$router.push({name: 'home'})
            }).catch(function (error) {
              self.registerButtonLoading = false
              if (error.username) {
                self.$message({
                  showClose: true,
                  message: error.username[0],
                  type: 'error'
                })
              }
              if (error.code) {
                self.$message({
                  showClose: true,
                  message: error.code[0],
                  type: 'error'
                })
              }
            })
          } else {
            return false
          }
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
      width: 180px;
    }
    .codeButton {
      display: block;
      float: right;
      font-size: 12px;
      width: 130px;
      text-align: center;
    }
    .status {
      font-size: 12px;
      margin-left: 20px;
      color: #e6a23c;
    }
    .error {
      color: red;
    }
  }
</style>
