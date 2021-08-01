<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">业务管理系统1.0</div>
      <el-form
        :model="param"
        :rules="rules"
        ref="login"
        label-width="0px"
        class="ms-content"
      >
        <el-form-item prop="mobile">
          <el-input v-model="param.mobile" placeholder="手机号">
            <template #prepend>
              <el-button icon="el-icon-user"></el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="name">
          <el-input v-model="param.name" placeholder="姓名">
            <template #prepend>
              <el-button icon="el-icon-user"></el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="accountType">
          <!-- <template #prepend> -->
            <el-button icon="el-icon-user"></el-button>
            <el-select v-model="param.accountType" placeholder="归属银行" style="width:80%">
                <el-option label="工商" value="工商"></el-option>
                <el-option label="农业" value="农业"></el-option>
                <el-option label="中国" value="中国"></el-option>
                <el-option label="建设" value="建设"></el-option>
                <el-option label="交通" value="交通"></el-option>
                <el-option label="招商" value="招商"></el-option>
          </el-select>
          <!-- </template> -->
          
        </el-form-item>

        <el-form-item prop="account">
          <el-input v-model="param.account" placeholder="银行账户">
            <template #prepend>
              <el-button icon="el-icon-user"></el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="referrerCode">
          <el-input
            type="referrerCode"
            placeholder="邀请码"
            v-model="param.referrerCode"
            @keyup.enter="submitForm()"
          >
            <template #prepend>
              <el-button icon="el-icon-lock"></el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="密码"
            v-model="param.password"
            @keyup.enter="submitForm()"
          >
            <template #prepend>
              <el-button icon="el-icon-lock"></el-button>
            </template>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">注册</el-button>
        </div>
        <p class="login-tips">Tips : 用户名和密码随便填。</p>
      </el-form>
    </div>
  </div>
</template>

<script>
import { registerData } from "../api/index";

export default {
  data() {
    return {
      param: {
        mobile: "",
        referrerCode: "",
        password: "",
        account: "",
        accountType: "",
        name: "",
      },
      rules: {
        mobile: [{ required: true, message: "请输入手机", trigger: "blur" }],
        referrerCode: [
          { required: true, message: "请输入邀请码", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        account: [
          { required: true, message: "请输入银行账户", trigger: "blur" },
        ],
        name: [{ required: true, message: "请输入昵称", trigger: "blur" }],
      },
    };
  },
  created() {
    this.$store.commit("clearTags");
  },
  methods: {
    submitForm() {
      this.$refs.login.validate((valid) => {
        if (valid) {
          registerData(this.param).then((res) => {
            if (res.code == 200) {
              localStorage.setItem("username", this.param.mobile);
              this.$message.success("注册成功");
              this.$router.push("/dashboard");
            } else {
              this.$message.success(res.msg);
              this.$router.push("/register");
            }
          });
        } else {
          this.$message.success("请输入账号密码和邀请码");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../assets/img/login-bg.jpg);
  background-size: 100%;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>