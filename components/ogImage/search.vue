<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})
defineProps<{
  title?: string;
}>();
</script>

<template>
  <div class='bg-white'>
		<h1>{{title}}</h1>
		<p class='some-text-element'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ipsum veniam nobis voluptatem fugit rerum sunt officiis, explicabo at eos corporis. Natus modi sunt quisquam veniam assumenda quam aspernatur corrupti?</p>
  </div>
</template>

<style scoped lang="scss">
h1 {
	color: blue;
}
.some-text-element {
  color: red;
}
</style>