<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">后台管理系统</div>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="phone">
                    <el-input v-model="param.phone" placeholder="手机号">
                        <template #prepend>
                            <el-button icon="el-icon-user"></el-button>
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
                <div class="register-btn">
                    <el-button type="primary" @click="register()">注册</el-button>
                </div>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>

import { login } from "../api/index";

export default {
    data() {
        return {
            param: {
                phone: "",
                password: "",
            },
            rules: {
                phone: [
                    { required: true, message: "请输入用户名", trigger: "blur" }
                ],
                password: [
                    { required: true, message: "请输入密码", trigger: "blur" }
                ]
            }
        };
    },
    created() {
        this.$store.commit("clearTags");
    },
    methods: {
        submitForm() {
            this.$refs.login.validate(valid => {
                if (valid) {
                    login(this.param).then(res => {
                        if ( res && res.code==200) {
                            localStorage.setItem("username", this.param.phone);
                            this.$message.success("登录成功");
                            this.$router.push("/dashboard");
                        }else{
                            this.$message.success(res.msg);
                            this.$router.push("/login");
                        }
                    });
                } else {
                    this.$message.success("请输入账号和密码");
                    return false;
                }
            });
        },
        register() {
            this.$refs.login.validate(valid => {
                console.log(valid);
                this.$router.push("/register");
            });
        }
    }
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
.register-btn {
    text-align: left;
    float:left;
}
.login-btn {
    text-align: right;
    float:right;
}
.register-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
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