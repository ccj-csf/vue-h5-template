<template>
  <button> {{ baseTitle }} </button>
</template>

<script lang="ts" setup>
  type propsType = {
    baseTitle: string
  }
  const props = defineProps<propsType>()
  console.log('props', props)
</script>
<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'BaseSlot',
    inheritAttrs: false,
    // props: {
    //   baseTitle: {
    //     type: String,
    //     require: true,
    //   },
    // },
  })
</script>
