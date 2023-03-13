<template>
  {{ title }}
  <ElButton type="success">hello </ElButton>
</template>
<script setup>
import {ref} from "vue"
import {ElButton} from "element-plus"
const title = ref("hello world")
</script>