<template>
  <div class="home bg-gray-50">
    <div class="lg:mx-auto lg:shadow-lg lg:w-100">
      <Navbar class="" />
      <div class="flex lg:flex-row flex-col-reverse  lg:px-6 bg-white w-full pt-10 lg:justify-between">
        <div>
          <!-- <vertical-menu class="hidden lg:block"></vertical-menu> -->
          <img
            class="w-64 hidden lg:block mt-1"
            src="https://demo.wpthemego.com/themes/sw_revo/wp-content/uploads/2017/02/banner10-4.png"
            alt=""
          />
          <featured-products class="mt-5  lg:block hidden"></featured-products>
          <div class="mt-8 lg:flex flex-col hidden w-64">
            <facebook-slides class="-mb-1"></facebook-slides>
            <button class=" bg-blue-10 border border-white py-3 uppercase text-white font-semibold" style="width:258px; margin-left:-1px">follow us</button>
          </div>
          <div>
            <img class="mt-10 border border-gray-200 w-64 rounded-sm" src="../assets/kits/4.png" alt="">
          </div>
        </div>

        <div class="">
          <slider class="mt-1 rounded-lg"></slider>
          <div class="flex lg:flex-row flex-col justify-between items-center lg:mt-7 mt-6 border border-gray-200 rounded-md">
            <div
              class=" h-28 lg:w-00 w-full flex lg:justify-center pl-12 items-center"
              v-for="item in Items"
              style=""
              :key="item.title"
            >
              <img class="w-12 h-12 icon-svg" :src="item.icon" alt="" />
              <div class="flex flex-col ml-3">
                <span class=" font-semibold text-gray-800">{{
                  item.title
                }}</span>
                <span class="text-gray-400 text-sm">{{
                  item.description
                }}</span>
              </div>
            </div>
          </div>
          <div  class="mt-9">
            <product-tabs></product-tabs>
          </div>
          <div class="mt-8 hidden lg:block">
            <best-seller-product></best-seller-product>
          </div>
        </div>
      </div>
      <div class="px-6 py-6 bg-white lg:block hidden">
        <new-arrivals></new-arrivals>
      </div>
      <!-- <Footer /> -->
    </div>
  </div>
</template>

<script>
import Navbar from "../components/core/navbar";
import Footer from "../components/core/Footer";
import Slider from "../components/slider/Slider";
import VerticalMenu from "../components/core/VerticalMenu";
import ProductTabs from "../components/core/productTabs.vue";
import BestSellerProduct from "../components/store/bestSellerProduct.vue";
import FeaturedProducts from '../components/store/featuredProducts.vue';
import FacebookSlides from '../components/slider/facebookSlides.vue';
import NewArrivals from '../components/slider/newArrivals.vue';
export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    Slider,
    ProductTabs,
    VerticalMenu,
    BestSellerProduct,
    FeaturedProducts,
    FacebookSlides,
    NewArrivals,
  },
  data: function () {
    return {
      Items: [
        {
          title: "100% MONEY BACK",
          icon: require("../assets/icons/hand.svg"),
          description: "Guarantee",
        },
        {
          title: "FREE SHIPPING",
          icon: require("../assets/icons/gift-box.svg"),
          description: "When Order Over $150",
        },
        {
          title: "24-HOURS",
          icon: require("../assets/icons/back-in-time.svg"),
          description: "Life Time Support",
        },
      ],
    };
  },
};
</script>


<style scoped>
.icon-svg {
  /* filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(326deg) brightness(97%) contrast(104%) !important; */

}


.icon-svg:hover {
  filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(326deg) brightness(97%) contrast(104%) !important;

}

</style>