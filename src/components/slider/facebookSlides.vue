<template>
  <carousel
    :paginationEnabled="false"
    :autoplay="true"
    :perPage="1"
    class="bg-blue-10"
  >
    <slide
      v-for="post in posts"
      :key="post.caption"
      class="px-6 pt-4 scrollbar"
      style=" width:230px"
    >
      <img
        class="w-16 h-16 mx-auto"
        src="../../assets/icons/facebook.png"
        alt=""
      />
      <div class="mt-3">
        <div class="flex items-center justify-center">
          <div class="flex flex-col text-center mt-4">
            <span class="text-white font-semibold"> {{ post.date }}</span>
            <span class="text-white font-extralight mt-3">
              {{ post.caption }}
            </span>
          </div>
        </div>
      </div>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      right: "ss",
      posts: [
        {
          date: "March 17, 2018",
          caption:
            "Un très bon service, rapidité de livraison  et des produits de qualités,Merci infiniment et au plaisir de recommander",
        },
        {
          date: "March 9, 2018",
          caption:
            "très satisfaite de votre service ... les produits sont de bonne qualités et frais.. je vous souhaite une très bonne continuation et merci pour le cadeau ❤",
        },
        {
          date: "May 4, 2018",
          caption: "un très bon service , bonne continuation",
        },
        {
          date: "February 16, 2018",
          caption:
            "Vraiment rien a dir bonne qualité et rapide. je suis trop satisfait pour mon panier fruits et super qualité merci beaucoup",
        },
        {
          date: "February 12, 2018",
          caption:
            "J ai testé j ai gagné bcp de temps en plus on m'a livré à domicile. Le fait de commander en en appelant m'a facilité la journée.  Je vous le recommande vivement. Les légumes et les fruits tout frais merci bonsouk",
        },
        {
          date: "February 10, 2018 ",
          caption:
            "Très satisfaite ! Produits de qualité avec un très bon service ! Je recommande vivement !",
        },
        {
          date: "February 2, 2018",
          caption:
            "Mille merci pour votre service Un tres bon rapport qualite prix Bon courage et bonne chance",
        },
      ],
    };
  },
};
</script>

<style>
.VueCarousel-dot {
  background-color: rgb(199, 199, 199) !important;
  outline: none !important;
  margin-right: -6px;
}
</style>