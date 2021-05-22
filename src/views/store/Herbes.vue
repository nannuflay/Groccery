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
        <router-link to="/Herbes">
          <span class="uppercase text-xs underline font-semibold text-green-340"
            >herbes</span
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
import ProductsCard from "../../components/store/ProductsCard";
import Navbar from "../../components/core/navbar";
import Slider from "../../components/slider/Slider";
import FeaturedProducts from "../../components/store/featuredProducts.vue";
import FilterStore from '../../components/store/filterStore.vue'
import VerticalMenu from "../../components/core/VerticalMenu";
export default {
  name: "Home",
  components: {
    Navbar,
    Slider,
    FeaturedProducts,
    FilterStore,
    ProductsCard,
    VerticalMenu,
  },
  data: function () {
    return {
      Products: [
        {
          imgSrc: 'https://www.kfd.ma/490-home_default/persil.jpg',
          name: "Persil",
          price: "9,00",
        },
        {
          imgSrc: 'https://www.kfd.ma/498-home_default/menthe-.jpg',
          name: "Menthe",
          price: "5",
          newPrice: "4",
          offre: true,
        },
        {
          imgSrc: 'https://www.kfd.ma/524-home_default/chiba-.jpg',
          name: "Chiba",
          price: "6",
        },
        {
          imgSrc: 'https://www.kfd.ma/497-home_default/coriandre-.jpg',
          name: "Coriandre",
          price: "7.5",
          newPrice: "6.5",
          offre: true,
        },
        {
          imgSrc: 'https://www.kfd.ma/491-home_default/basilic-.jpg',
          name: "Basilic",
          price: "6.5",
          newPrice: "4.5",
          offre: true,
        },
        {
          imgSrc: 'https://www.kfd.ma/495-home_default/romarin-.jpg',
          name: "Romarin",
          price: "6",
        },
        {
          imgSrc: 'https://www.kfd.ma/499-home_default/epinard-.jpg',
          name: "Epinard",
          price: "4.5",
        },
        {
          imgSrc: 'https://www.kfd.ma/496-home_default/thym-.jpg',
          name: "Thym",
          price: "7.5",
          newPrice: "6.5",
          offre: true,
        },
      ],
    }
  }
}
</script>
