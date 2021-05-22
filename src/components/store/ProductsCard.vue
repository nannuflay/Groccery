<template>
  <div>
    <div>
      <div
        class="card product-card rounded-lg bg-white border hover:border-green-340
         border-gray-200 mr-2 w-52 pb-4 px-3 py-2 cursor-pointer relative hover:shadow-md"
      >
        <div
          class="uppercase shadow-2xl absolute top-3 right-2 w-10 h-5 text-xs text-white
           bg-red-600 font-semibold flex items-center justify-center rounded-lg font-mono"
          v-if="product.offre === true"
        >
          -20%
        </div>
        <div class="text-center">
          <img class="w-44 h-44 mx-auto mb-6" :src="product.imgSrc" alt="" />
          <span class="text-gray-800 font-semibold hover:text-green-340 mt-4">
            {{ product.name }}
          </span>
          <div class="flex items-center justify-center mt-1">
            <span class="text-green-340 font-semibold text-2xl mr-3">
              ${{ product.price }}
            </span>
            <span
              v-if="product.offre === true"
              class="font-semibold text-gray-400 line-through mt-3"
            >
              ${{ product.newPrice }}
            </span>
          </div>

          <!-- svg product icons  -->

          <div
            class="items-center justify-center mt-3 mx-2 flex-btns absolute hidden top-16 right-8"
          >
            <button
              class="p-2 has-tooltip-1 relative bg-white hover:bg-green-340 shadow-md rounded-full text-sm text-white focus-within:outline-none"
            >
              <span
                class="hidden tooltip-1 absolute -top-8 -right-10 text-gray-200 w-28 bg-black opacity-80 p-1 rounded-md font-semibold text-xs"
                >Ajouter au panier</span
              >
              <svg
                class="w-6 h-6 icon-svg text-white"
                style="color: white"
                id="pcart"
                viewBox="0 0 511 511.99913"
              >
                <path
                  d="m512.496094 172v80c0 11.046875-8.953125 20-20 20h-13.152344l-8.425781 74.988281c-1.148438 10.21875-9.804688 17.765625-19.851563 17.769531-.746094 0-1.496094-.042968-2.257812-.128906-10.976563-1.230468-18.875-11.132812-17.640625-22.105468l10.421875-92.753907c1.136718-10.117187 9.691406-17.769531 19.875-17.769531h11.035156v-40h-432v40h341c11.046875 0 20 8.957031 20 20 0 11.046875-8.953125 20-20 20h-307.226562l19.75 164.761719c2.40625 20.089843 19.480468 35.238281 39.714843 35.238281h247.125c20.382813 0 37.472657-15.277344 39.75-35.535156 1.230469-10.976563 11.128907-18.871094 22.105469-17.640625 10.976562 1.234375 18.875 11.132812 17.644531 22.109375-4.554687 40.511718-38.730469 71.066406-79.5 71.066406h-247.125c-40.46875 0-74.617187-30.300781-79.433593-70.480469l-20.316407-169.519531h-13.488281c-11.046875 0-20-8.953125-20-20v-80c0-11.046875 8.953125-20 20-20h70.9375l105.683594-143.839844c6.539062-8.898437 19.054687-10.816406 27.957031-4.273437 8.902344 6.539062 10.816406 19.054687 4.277344 27.957031l-88.28125 120.15625h231.589843l-88.285156-120.15625c-6.539062-8.902344-4.625-21.417969 4.277344-27.957031 8.902344-6.542969 21.417969-4.628907 27.960938 4.273437l105.679687 143.839844h70.199219c11.046875 0 20 8.957031 20 20zm-275.996094 160v80c0 11.046875 8.953125 20 20 20 11.042969 0 20-8.953125 20-20v-80c0-11.046875-8.957031-20-20-20-11.046875 0-20 8.953125-20 20zm80 0v80c0 11.046875 8.953125 20 20 20 11.042969 0 20-8.953125 20-20v-80c0-11.046875-8.957031-20-20-20-11.046875 0-20 8.953125-20 20zm-160 0v80c0 11.046875 8.953125 20 20 20 11.042969 0 20-8.953125 20-20v-80c0-11.046875-8.957031-20-20-20-11.046875 0-20 8.953125-20 20zm0 0"
                ></path>
              </svg>
            </button>
            <button
              class="has-tooltip-2 relative bg-white hover:bg-green-340 hover:text-white p-2 rounded-full shadow-md text-black ml-1 focus-within:outline-none"
            >
              <span
                class="tooltip-2 hidden absolute -top-8 -right-11 text-white w-32 bg-black opacity-80 p-1 rounded-md font-semibold text-xs"
                >Ajouter WishList</span
              >

              <svg
                class="w-6 h-6 icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
            <button
              @click="toggleModal()"
              class="has-tooltip-3 relative bg-white p-2 hover:bg-green-340 hover:text-white rounded-full ml-1 shadow-md focus-within:outline-none"
            >
              <span
                class="tooltip-3 hidden absolute -top-8 -right-5 text-white w-20 bg-black opacity-80 p-1 rounded-md font-semibold text-xs"
                >Quick view</span
              >

              <svg
                class="w-6 h-6 icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>
          </div>

          <!-- quantity minus plus section -->

          <div class="absolute top-44 counter hidden" style="right:73px">
            <div
              class="flex items-center justify-between w-16 h-8 bg-green-340 rounded-lg"
            >
              <button
                class="text-white focus:outline-none"
                @click="counter--"
              >
                <svg
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <span class="text-white font-bold">{{ counter }}</span>
              <button
                class="text-white  focus:outline-none"
                @click="counter++"
              >
                <svg
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="openModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <button
        @click="openModal = false"
        class="absolute hover:bg-gray-100 focus:outline-none top-10 right-10 font-extrabold bg-white h-10 w-10 rounded-full"
      >
        <!-- <span>J'achete</span> -->
        <svg
          class="w-6 h-6 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div class="relative my-6 mx-auto w-100 max-w-3xl">
        <!--content-->
        <div
          class="border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <div class="relative py-16 px-4">
            <div class="flex w-full justify-center items-center">
              <div class="w-5/12 mx-20">
                <img
                  class="w-44 h-44"
                  src="../../assets/kits/legume1.png"
                  alt=""
                />
              </div>
              <div class="mx-5 w-6/12">
                <div class="flex justify-between items-center">
                  <span class="text-lg font-extrabold text-gray-700"
                    >Piment rouge</span
                  >
                  <button
                    @click="addWishList()"
                    class="flex items-center hover:text-green-340 text-gray-800 focus:outline-none"
                  >
                    <svg
                      v-if="iconFilled === false"
                      class="w-6 h-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <svg
                      v-else
                      :class="{ 'text-green-340': (iconFilled = true) }"
                      class="w-6 h-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <p class="font-medium text-lg mt-5 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. unde
                  minima assumenda aspernatur rem reiciendis quam.
                </p>
                <div class="flex items-center mt-4">
                  <router-link to="/legumes">
                    <button
                      class="focus:outline-none mr-2 px-2 py-1 bg-gray-100 rounded-full text-sm font-semibold text-gray-800 shadow-sm"
                    >
                      #Legumes
                    </button>
                  </router-link>
                  <router-link to="/Salades">
                    <button
                      class="focus:outline-none px-2 py-1 bg-gray-100 rounded-full text-sm font-semibold text-gray-800 shadow-sm"
                    >
                      #Salades
                    </button>
                  </router-link>
                </div>
                <div class="flex items-center justify-between w-full mt-10">
                  <span class="text-green-340 text-sm font-bold">6,5MAD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="openModal" class="opacity-50 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
import FilterStore from "./filterStore.vue";
export default {
  props: {
    product: Object,
  },

  components: {
    FilterStore,
  },
  data: function () {
    return {
      iconFilled: false,
      counter: 0,
      openModal: false,
      showCounter: false,
      articleCounter: 0,
    };
  },
  methods: {
    toggleModal() {
      this.openModal = !this.openModal;
    },
    addCart() {
      alert("product is added to cart");
      this.openModal = false;
    },
    addWishList() {
      this.iconFilled = !this.iconFilled;
    },
    Counter() {
      this.showCounter = !this.showCounter;
      this.articleCounter++;
    },
    addArticle() {
      this.articleCounter++;
    },
    removeArticle() {
      this.articleCounter--;
    },
  },
};
</script>

<style>
.cart-btn:hover .plus-btn {
  background-color: rgb(21, 134, 100);
}
.product-card:hover {
  animation: shake 0.92s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(0, 4px, 0);
  }

  20%,
  80% {
    transform: translate3d(0, -4px, 0);
  }
}
.card:hover .counter {
  display: block;
}
.card:hover .flex-btns {
  display: flex;
}
.has-tooltip-1:hover .tooltip-1 {
  display: block;
}

.tooltip-1::after {
  content: "";
  position: absolute;
  left: 48px;
  top: 24px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #000;
  clear: both;
}

.has-tooltip-2:hover .tooltip-2 {
  display: block;
}

.tooltip-2::after {
  content: "";
  position: absolute;
  left: 58px;
  top: 24px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #000;
  clear: both;
}
.has-tooltip-3:hover .tooltip-3 {
  display: block;
}
.has-tooltip-1:hover .icon-svg {
  fill: white !important;
}
.tooltip-3::after {
  content: "";
  position: absolute;
  left: 33px;
  top: 24px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #000;
  clear: both;
}
</style>
