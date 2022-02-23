<template>
  <div class="blog-item-mobile">
      <div class="ttd">
        <div class="thumbnail"><img src="@/photos/Skydive.jpg" alt=""></div>
        <div class="title">This day in history</div>
        <div class="date">12/27/2012</div>
      </div>
       <!-- eslint-disable-next-line max-len -->
      <div class="page-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, soluta sapiente quo sed debitis libero illo perspiciatis. Impedit praesentium dolorum amet obcaecati rerum aut aliquam accusantium modi, eius architecto quam!</div>
   <div class="imgs"><img src="@/photos/Skydive.jpg" alt=""></div>
  </div>
</template>

<script>
export default {
  name: 'BlogItem',
};
</script>

<style scoped>
.blog-item-mobile {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 4rem;
  width: 98%;
  background: #1c2c3b;
  margin-top: .25rem;
  box-shadow: 2px 2px 2px #4c5f72;
  overflow: hidden;
}
.blog-item-mobile .date {
  font-size: .5rem;
  margin-left: auto;
}
.blog-item-mobile .thumbnail {
  height:2rem;
  width: 150px;
}
.blog-item-mobile .thumbnail img{
  height:3rem;
  object-fit: contain;
}
.blog-item-mobile .ttd{
  display: flex;
  flex-basis: 100%;
}
.blog-item-mobile .page-content{
  text-indent: 150px;
  text-overflow: ellipsis;
   white-space: nowrap;
   overflow: hidden;
}
</style>
