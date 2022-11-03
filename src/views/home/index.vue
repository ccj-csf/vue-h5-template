<template>
  <van-button type="primary" block class="!mt-6" @click="handleClick">主要按钮</van-button>
</template>
<script lang="ts" setup>
  import { useBaiduEvent } from '@/hooks/useBaiduAnalytics'
  function handleClick() {
    const params = {
      category: '1',
      action: '2',
      label: '3',
      value: 4,
    }
    useBaiduEvent(params)
  }
  withDefaults(defineProps<{ name: string; age: number }>(), { name: 'ccj', age: 18 })
  const emits = defineEmits(['test1', 'test2'])
  emits('test1')
</script>
<style lang="less" scoped></style>
