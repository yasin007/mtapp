<template>
  <div class="page-register">
    <section>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="ruleForm.mobile" placeholder="请输入手机号" maxlength="11"></el-input>
        </el-form-item>
        <el-form-item class="code" label="短信验证码" prop="code">
          <el-input class="codeinput" placeholder="请输入验证码" maxlength="4"
                    v-model="ruleForm.code"></el-input>
          <el-button class="code_Button" type="primary" :loading=verCodeButtonLoading @click="sendMsg"
                     :disabled="isDisabled">{{ statusMsg }}
          </el-button>
        </el-form-item>
        <el-form-item label=" 密码
          " prop="pwd">
          <el-input type="password" placeholder="请输入密码" v-model="ruleForm.pwd"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="cpwd">
          <el-input type="password" placeholder="请输入确认密码" v-model="ruleForm.cpwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="register_Button" :loading=registerButtonLoading @click="register">注册并登录
          </el-button>
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
      // 手机号码验证
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
        isDisabled: false,
        time: 60,
        verCodeButtonLoading: false,
        registerButtonLoading: false,
        // 错误信息
        error: {
          mobile: '',
          password: '',
          username: '',
          code: ''
        },
        // 规则
        ruleForm: {
          mobile: '',
          code: '',
          pwd: '',
          cpwd: ''
        },
        // 验证
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
      // 发送验证码
      sendMsg: function () {
        const self = this
        if (self.timerid) {
          console.log('cuowu')
          return false
        }
        console.log('nihao')
        self.$refs['ruleForm'].validateField('mobile', (valid) => {
          if (valid) {
            return false
          }
          self.verCodeButtonLoading = true
          getMessage({
            mobile: self.ruleForm.mobile
          }).then((response) => {
            self.isDisabled = true
            self.verCodeButtonLoading = false
            let interval = window.setInterval(function () {
              --self.time
              self.statusMsg = self.time + '秒后'
              if (self.time < 0) {
                self.statusMsg = '重新发送'
                self.time = 60
                self.isDisabled = false
                window.clearInterval(interval)
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
      // 注册
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
  .page-register {
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
      .code_Button {
        float: right;
        font-size: 12px;
        width: 130px;
        text-align: center;
      }
      .register_Button {
        width: 200px;
      }
      .el-button {
        background-color: #2db3a6;
        border-color: #2db3a6;
      }
    }
  }
</style>
