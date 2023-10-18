<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})
defineProps<{
  title?: string;
}>();
</script>
<template>
  <div class="w-full h-full text-white bg-gradient-to-tr from-green-600 to-green-700">
		<p class='font-["Unbounded"] text-4xl'>{{title}}</p>
		<p class='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ipsum veniam nobis voluptatem fugit rerum sunt officiis, explicabo at eos corporis. Natus modi sunt quisquam veniam assumenda quam aspernatur corrupti?</p>
  </div>
</template>