<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-sm-10 col-md-7 col-lg-5 mx-auto pt-5">
                <div class="card mt-5">
                    <div class="card-header bg-white mb-0">
                        <h3 class="text-center">VUE3 ADMIN</h3>
                    </div>
                    <div class="card-body">
                        <ElForm ref="elFormRef" :model="form" :rules="rules" label-position="left">
                            <ElFormItem prop="username">
                                <ElInput v-model="form.username" type="text" placeholder="请输入用户名"/>
                            </ElFormItem>
                            <ElFormItem prop="password">
                                <ElInput v-model="form.password" type="password" show-password placeholder="请输入密码"/>
                            </ElFormItem>
                            <ElFormItem>
                                <ElButton type="primary" size="default" class="w-100" @click="subumit(elFormRef)">立即登录</ElButton>
                            </ElFormItem>
                        </ElForm>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import {ref,reactive} from "vue"
    import {ElForm,ElFormItem,ElInput,ElButton} from "element-plus"
    const form = reactive({username:"",password: ""})
    const elFormRef = ref()
    const rules = reactive({
        username: [
            {
                required: true,message:"用户名不能为空",trigger: "blur"
            }
        ],
        password: [
            {
                required: true,message:"密码不能为空",trigger: "blur"
            }
        ]
    })

    const subumit = async (formRef) => {
        await formRef.validate((valid,fields) => {
            console.log(valid)
        })
    }
</script>