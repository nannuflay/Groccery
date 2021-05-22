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
        <router-link to="/Poules">
          <span class="uppercase text-xs underline font-semibold text-green-340"
            >poules</span
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
import FilterStore from '../../components/store/filterStore.vue'
export default {
  name: 'Home',
  components: {
    Navbar, 
    Slider,
    ProductsCard,
    FilterStore,
    FeaturedProducts,
  },
  data: function () {
    return {
      Products: [
        {
          imgSrc: 'https://dnrsausagesupplies.ca/images/products/Lacto_Binder_Gluten_Free_1_kg_336.jpg',
          name: "Tomates",
          arabicName: "مطيشة",
          price: "9,00",
        },
        {
          imgSrc: 'https://image.freepik.com/free-photo/raw-chicken-meat-white-background_58830-687.jpg',
          name: "Onions",
          arabicName: "بصلة",
          price: "6.5",
          newPrice: "4.5",
          offre: true,
        },
        {
          imgSrc: 'https://5.imimg.com/data5/KM/LF/MY-8299207/whole-chicken-meat-500x500.jpg',
          name: "Carotte",
          arabicName: "خيزو",
          price: "6",
        },
        {
          imgSrc: 'https://image.freepik.com/free-photo/raw-chicken-meat-white-background_58830-687.jpg',
          name: "Chou fleur",
          arabicName: "شيفلور",
          price: "4.5",
        },
        {
          imgSrc: 'https://st2.depositphotos.com/1796303/5674/i/950/depositphotos_56745257-stock-photo-fresh-raw-beef-meat-isolatet.jpg',
          name: "Pomme du terre",
          arabicName: "بطاطة بيضاء",
          price: "7.5",
          newPrice: "6.5",
          offre: true,
        },
        {
          imgSrc: 'https://image.freepik.com/free-photo/raw-chicken-meat-white-background_58830-687.jpg',
          name: "Piment rouge",
          arabicName: "فلفلة حارة",
          price: "5",
          newPrice: "4",
          offre: true,
        },
        {
          imgSrc: 'https://st2.depositphotos.com/1796303/5674/i/950/depositphotos_56745257-stock-photo-fresh-raw-beef-meat-isolatet.jpg',
          name: "Carotte",
          arabicName: "خيزو",
          price: "6",
        },
        {
          imgSrc: 'https://image.freepik.com/free-photo/raw-chicken-meat-white-background_58830-687.jpg',
          name: "pois",
          arabicName: "جلبانة",
          price: "7.5",
          newPrice: "6.5",
          offre: true,
        },
        {
          imgSrc: 'https://st2.depositphotos.com/1796303/5674/i/950/depositphotos_56745257-stock-photo-fresh-raw-beef-meat-isolatet.jpg',
          name: "Chou fleur",
          arabicName: "شيفلور",
          price: "4.5",
        },
        {
          imgSrc: 'https://image.freepik.com/free-photo/raw-chicken-meat-white-background_58830-687.jpg',
          name: "Onions",
          arabicName: "بصلة",
          price: "6.5",
          newPrice: "4.5",
          offre: true,
        },
        {
          imgSrc: 'https://dnrsausagesupplies.ca/images/products/Lacto_Binder_Gluten_Free_1_kg_336.jpg',
          name: "Carotte",
          arabicName: "خيزو",
          price: "6",
        },
        {
          imgSrc: 'https://st2.depositphotos.com/1796303/5674/i/950/depositphotos_56745257-stock-photo-fresh-raw-beef-meat-isolatet.jpg',
          name: "Chou fleur",
          arabicName: "شيفلور",
          price: "4.5",
        },
        {
          imgSrc: 'https://dnrsausagesupplies.ca/images/products/Lacto_Binder_Gluten_Free_1_kg_336.jpg',
          name: "Pomme du terre",
          arabicName: "بطاطة بيضاء",
          price: "7.5",
          newPrice: "6.5",
          offre: true,
        },
        {
          imgSrc: 'https://5.imimg.com/data5/KM/LF/MY-8299207/whole-chicken-meat-500x500.jpg',
          name: "Piment rouge",
          arabicName: "فلفلة حارة",
          price: "5",
          newPrice: "4",
          offre: true,
        },
      ],
    }
  }
}
</script>
