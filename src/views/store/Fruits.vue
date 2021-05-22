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
        <router-link to="/packs">
          <span class="uppercase text-xs underline font-semibold text-green-340"
            >legumes</span
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
import FeaturedProducts from '../../components/store/featuredProducts'
import VerticalMenu from '../../components/core/VerticalMenu'
import FilterStore from '../../components/store/filterStore.vue'
export default {
  name: 'Home',
  components: {
    Navbar, 
    Slider,
    ProductsCard,
    VerticalMenu,
    FeaturedProducts,
    FilterStore,
  },
  data: function () {
    return {
      Products: [
        {
          imgSrc: require('../../assets/kits/fraise.png'),
          name: "Abricots",
          price: "9,00",
        },
        {
          imgSrc: require('../../assets/kits/fraise.png'),
          name: "Banan",
          price: "6.5",
          newPrice: "4.5",
          offre: true,
        },
        {
          imgSrc: require('../../assets/kits/fraise.png'),
          name: "Fraise",
          price: "6",
        },
        {
          imgSrc: require('../../assets/kits/fraise.png'),
          name: "Cerises",
          price: "4.5",
        },
        {
          imgSrc: require('../../assets/kits/fraise.png'),
          name: "Kiwis",
          price: "7.5",
          newPrice: "6.5",
          offre: true,
        },
        {
          imgSrc: require('../../assets/kits/fraise.png'),
          name: "Ananas",
          price: "5",
          newPrice: "4",
          offre: true,
        },
        {
          imgSrc: require('../../assets/kits/fraise.png'),
          name: "Citron vert",
          price: "6",
        },
        {
          imgSrc: require('../../assets/kits/fraise.png'),
          name: "Frambrois",
          price: "7.5",
          newPrice: "6.5",
          offre: true,
        },
        {
          imgSrc: require('../../assets/kits/fraise.png'),
          name: "Kakis",
          price: "4.5",
        },
        {
          imgSrc: require('../../assets/kits/fraise.png'),
          name: "Grenades",
          price: "6.5",
          newPrice: "4.5",
          offre: true,
        },
        {
          imgSrc: require('../../assets/kits/fraise.png'),
          name: "Mangue",
          price: "6",
        },
        {
          imgSrc: require('../../assets/kits/fraise.png'),
          name: "Orange",
          price: "4.5",
        },
        {
          imgSrc: require('../../assets/kits/fraise.png'),
          name: "Pomme jaune",
          price: "7.5",
          newPrice: "6.5",
          offre: true,
        },
        {
          imgSrc: require('../../assets/kits/fraise.png'),
          name: "Pomme rouge",
          price: "5",
          newPrice: "4",
          offre: true,
        },
        {
          imgSrc: require('../../assets/kits/fraise.png'),
          name: "Poire",
          price: "7.5",
          newPrice: "6.5",
          offre: true,
        },
        {
          imgSrc: require('../../assets/kits/fraise.png'),
          name: "Peche",
          price: "4.5",
        },
        {
          imgSrc: require('../../assets/kits/fraise.png'),
          name: "Prune",
          price: "6.5",
          newPrice: "4.5",
          offre: true,
        },
        {
          imgSrc: require('../../assets/kits/fraise.png'),
          name: "Raisin vert",
          price: "6",
        },
      ],
    }
  }
}
</script>
