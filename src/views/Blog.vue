<template>
  <div class="container">
    <blog-item/>
  </div>
</template>

<script>
import BlogItem from '../components/blog-item.vue';

export default {
  name: 'Blog',
  components: {
    BlogItem,
  },
};
</script>

<style scoped>
.container {
  height: calc(100% - 4.5rem);
  width: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
