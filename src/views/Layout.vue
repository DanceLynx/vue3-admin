<template>
    <ElContainer style="position: fixed;top: 0;bottom: 0;left: 0;right: 0;">
      <ElHeader>
        <ElMenu
            :default-active="headerMenuIndex"
            mode="horizontal"
            :ellipsis="false"
            @select="headerMenuHandleSelect"
        >
            <ElMenuItem index="0">LOGO</ElMenuItem>
            <div style="flex-grow: 1;" />
            <ElMenuItem index="1">首页</ElMenuItem>
            <ElMenuItem index="2">商品</ElMenuItem>
            <ElMenuItem index="3">订单</ElMenuItem>
            <ElMenuItem index="4">会员</ElMenuItem>
            <ElMenuItem index="5">设置</ElMenuItem>
            <el-sub-menu index="6">
                <template #title>
                    <ElAvatar :src="userinfo.avatarUrl" :size="30" class="mr-1"/>summer
                </template>
                <ElMenuItem index="6-1">修改</ElMenuItem>
                <ElMenuItem index="6-2">退出</ElMenuItem>
            </el-sub-menu>
        </ElMenu>
      </ElHeader>
      <ElContainer style="height:100%;padding-bottom: 40px;">
        <ElAside width="200px" style="padding-bottom: 20px;">
            <ElMenu
                :default-active="asideMenuIndex"
                @select="asideMenuHandleSelect"
            >
                <ElMenuItem index="2">
                <ElIcon><icon-menu /></ElIcon>
                <span>Navigator Two</span>
                </ElMenuItem>
                <ElMenuItem index="3">
                <ElIcon><document /></ElIcon>
                <span>Navigator Three</span>
                </ElMenuItem>
                <ElMenuItem index="4">
                <ElIcon><setting /></ElIcon>
                <span>Navigator Four</span>
                </ElMenuItem>
            </ElMenu>
        </ElAside>
        <ElMain>
            <div class="item" v-for="i of 100">{{ i }}</div>
        </ElMain>
      </ElContainer>
    </ElContainer>
</template>
<script setup>
    import {ref,reactive} from "vue"
    import {ElContainer,ElHeader,ElMain,ElAside,ElMenu,ElMenuItem,ElSubMenu, ElAvatar, ElIcon} from "element-plus"
    const headerMenuIndex = ref("0")
    const asideMenuIndex = ref("0")
    const userinfo = reactive({
        avatarUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    })
    const headerMenuHandleSelect = (key,keyPath) => {
        console.log(key,keyPath)
    }
    const asideMenuHandleSelect = (key,keyPath) => {
        console.log(key,keyPath)
    }
</script>
<style>


</style>