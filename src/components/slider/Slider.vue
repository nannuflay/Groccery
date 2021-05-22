<template>
  <div class="carousel">
    <agile
      :speed="2500"
      fade
      style="width:880px;"
      class="select-none  hidden lg:flex shadow-md z-0 border-gray-300 border rounded-md overflow-hidden"
    >
      <div class="slide  shadow-lg " style="height:495px">
        <img src="../../assets/kits/Slider1.png" alt="">
      </div>
      <div class="slide bg-red-100" style="height:495px"></div>
      <template class="" slot="prevButton">
        <svg class="w-16 h-16  text-black opacity-60" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
      </template>
    <template  class="" slot="nextButton">
        <svg class="w-16 h-16  text-black opacity-60" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>

    </template>

    </agile>

    <agile
      autoplay
      :speed="2500"
      fade
      :navButtons="false"
      style="width:350px;"
      class="select-none shadow-md lg:hidden mx-auto"
    >
      <div class="slide" style="height:390px">
        <img class="w-full h-full" src="../../assets/kits/1.png" alt="">
      </div>
              
      <div class="slide" style="height:390px">
        <img  class="w-full h-full" src="../../assets/kits/2.png" alt="">
      </div>

      <div class="slide" style="height:390px">
        <img class="w-full h-full" src="../../assets/kits/3.png" alt="">
      </div>
    </agile>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
  components: {
    agile: VueAgile 
  },
  data: function () {
    return {
    }
  }
}
</script>

<style>

  .slide .agile__slide {
    position: relative;
  }


  .agile__nav-button {
    cursor: pointer;
		position: absolute;
    display: none;
    top: 40%;
  }


  .agile__nav-button--next {
    position: absolute;
    right:3px;
    z-index: 50;
  }

    .agile__nav-button--prev {
    position: absolute;
    left:3px;
    z-index: 50;
  }
  .carousel:hover .agile__nav-button {
    display: block;
  }

</style>