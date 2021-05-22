<template>
  <div class="bg-gray-100">
    <div class="lg:w-100 mx-auto shadow-lg bg-white">
      <Navbar class="" />
      <div class="mx-6 p-2 flex w-full items-center py-7 text-gray-400">
        <router-link to="/">
          <span
            class="uppercase text-xs hover:underline font-semibold hover:text-green-340"
            >Acceuil</span
          >
        </router-link>

        <svg
          class="w-4 h-4 mx-1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
        <router-link to="/offers">
          <span class="uppercase text-xs underline font-semibold text-green-340"
            >offers</span
          >
        </router-link>
      </div>
      <div class="flex justify-center mx-6">
        <div>
          <featured-products class=""></featured-products>
        </div>
        <div class="flex-1 ml-4">
          <img
            src="https://demo.templatetrip.com/Prestashop/PRS01/PRS023/img/cms/bottombanner-1.jpg"
            alt=""
          />
          <filter-store :product="product" class="z-20 pr-6 mt-10"></filter-store>
          <products-card
            v-for="(product, id) in Products"
            :key="id"
            :product="product"
            class="mt-10 inline-flex"
          ></products-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsCard from '../../components/store/ProductsCard'
import Navbar from '../../components/core/navbar'
import Slider from '../../components/slider/Slider'
import FilterStore from '../../components/store/filterStore.vue'
import FeaturedProducts from "../../components/store/featuredProducts.vue";
import VerticalMenu from '../../components/core/VerticalMenu'
export default {
  name: 'Home',
  components: {
    Navbar, 
    Slider,
    ProductsCard,
    FeaturedProducts,
    FilterStore,
    VerticalMenu,
  },
  data: function () {
    return {
      Products: [
        {
          imgSrc: 'https://www.kfd.ma/300-home_default/10kg-oignons.jpg',
          name: "Abricots",
          price: "9,00",
        },
        {
          imgSrc: 'https://www.kfd.ma/440-home_default/plateau-30-oeufs.jpg',
          name: "Banan",
          price: "6.5",
          newPrice: "4.5",
          offre: true,
        },
        {
          imgSrc: 'https://www.kfd.ma/298-home_default/10kg-pommes-de-terre.jpg',
          name: "Fraise",
          price: "6",
        },
        {
          imgSrc: 'https://www.kfd.ma/525-home_default/10kg-carottes.jpg',
          name: "Cerises",
          price: "4.5",
        },
        {
          imgSrc: 'https://www.kfd.ma/302-home_default/20kg-oranges.jpg',
          name: "Citron vert",
          price: "6",
        },
        {
          imgSrc: 'https://www.kfd.ma/473-home_default/5-kg-bananes-import.jpg',
          name: "Frambrois",
          price: "7.5",
          newPrice: "6.5",
          offre: true,
        },
        {
          imgSrc: 'https://www.kfd.ma/535-home_default/offre-speciale.jpg',
          name: "Kakis",
          price: "4.5",
        },
        {
          imgSrc: 'https://www.kfd.ma/538-home_default/pack-legumes-23.jpg',
          name: "Grenades",
          price: "6.5",
          newPrice: "4.5",
          offre: true,
        },
        {
          imgSrc: 'https://www.kfd.ma/463-home_default/pack-de-30-oeufs-beldi-bio.jpg',
          name: "Mangue",
          price: "6",
        },
      ],
    }
  }
}
</script>
