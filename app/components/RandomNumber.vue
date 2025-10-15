<script lang="ts" setup>
const {data, refresh} = useFetch('/api/randomNumber')
</script>


<template>
  <UAlert
    title="Random Number"
    :description="`Current number is ${data}`"
    :actions="[{
      label: 'Refresh',
      onClick: () => refresh(),
      icon: 'i-heroicons-arrow-path',
      color: 'neutral',
      variant: 'soft'
    }]"
  />
</template>
