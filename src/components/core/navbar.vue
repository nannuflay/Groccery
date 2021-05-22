<template>
  <div class="z-10 block">
    <div class="w-full bg-gray-50 hidden lg:block">
      <div
        class="hidden lg:flex items-center justify-between py-2 px-6 bg-white relative border-b-2 border-gray-100"
      >
        <div class="w-36 h-2"></div>
        <div>
          <span class="text-gray-500 text-xs"
            >Free 3 day delivery and free returns within the US</span
          >
        </div>
        <div class="flex items-center">
          <button
            class="focus:outline-none flex items-center text-gray-700 text-sm font-bold hover:text-green-340"
          >
            <svg
              class="w-5 h-5 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            Se connecter
          </button>
          <button
            @click="toggleMenu1()"
            class="focus:outline-none flex items-center text-gray-700 text-sm font-bold ml-5 hover:text-green-340"
          >
            <svg
              class="w-5 h-5 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Mon compte
            <svg
              v-if="showMenu1 === false"
              class="w-5 h-5 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <svg
              v-else
              class="w-5 h-5 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
          <div
            v-if="showMenu1 === true"
            class="w-44 z-10 bg-white overflow-hidden shadow-2xl absolute top-10 -right-10 flex rounded-lg"
          >
            <div class="text-center flex-col flex mx-auto w-full">
              <div class="">
                <router-link
                  to="/myAccount"
                  class="px-2 flex items-center py-3 hover:bg-gray-100 text-gray-700 text-xs"
                >
                  <svg
                    class="w-5 h-5 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Mon compte
                </router-link>

                <router-link
                  to="/myAccount"
                  class="px-2 flex items-center py-3 hover:bg-gray-100 text-gray-700 text-xs"
                >
                  <svg
                    class="w-5 h-5 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Vos commandes
                </router-link>

                <router-link
                  to="/myAccount"
                  class="px-2 flex items-center py-3 hover:bg-gray-100 text-gray-700 text-xs"
                >
                  <svg
                    class="w-5 h-5 mr-1"
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
                  Votre liste d'envie
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between py-5 px-6">
        <div>
          <router-link to="/">
            <img
              src="https://demo.wpthemego.com/themes/sw_revo/wp-content/uploads/2017/02/logo-header10.png"
              alt=""
            />
          </router-link>
        </div>
        <div
          class="flex items-center bg-white w-2/5 justify-between rounded-lg border border-gray-300"
        >
          <input
            type="text"
            placeholder="Search item"
            class="py-2 px-4 w-full focus:outline-none rounded-md text-sm"
          />
          <button class="bg-green-340 py-2 px-3 rounded-tr-md rounded-br-md">
            <svg
              class="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div class="flex relative">
          <div class="relative">
            <img
              src="../../assets/icons/headphones.svg"
              class="w-12 h-12"
              alt=""
            />
            <span
              class="text-green-340 text-xs absolute top-5 font-mono"
              style="font-size: 10px; left: 15px"
              >24H</span
            >
          </div>
          <div class="flex flex-col ml-3">
            <div class="flex items-center">
              <span class="text-gray-600 text-sm font-semibold font-serif"
                >Call us now:</span
              >
              <span
                class="text-green-340 text-sm font-serif mt-1 ml-1 font-medium"
              >
                0123-333-666</span
              >
            </div>
            <div class="flex items-center">
              <span class="text-xs text-gray-500">Email: </span>
              <span class="text-xs text-gray-500 ml-1"
                >Contact@bonsouk.com
              </span>
            </div>
          </div>
          <div>
            <button
              class="focus:outline-none p-1 bg-white relative rounded-md ml-6 border border-gray-200"
            >
              <svg
                class="w-8 h-8 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zm13 15.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                />
              </svg>
              <span
                class="h-5 w-5 text-sm rounded-full bg-green-340 absolute -top-2 -right-2 flex justify-center text-white"
                >0</span
              >
            </button>
          </div>
        </div>
      </div>
      <scroll-fixed-header class="shadow-md" :fixed.sync="fixed" :threshold="56">
        <div class="px-6 z-10 py-3 bg-gray-10" style="">
          <div class="flex items-center justify-center">
            <div
              v-for="category in Categories"
              :key="category.name"
              class=""
              style=""
            >
              <router-link
                :to="category.to"
                class="flex items-center justify-between mx-10 hover:text-green-340 text-gray-700 category-item"
              >
                <div class="text-center flex flex-col relative">
                  <span
                    v-if="category.new == true"
                    class="absolute -top-2 z-10 -right-4 w-10 h-6 flex items-center text-xs font-bold font-sans shadow-lg text-white justify-center bg-green-400 uppercase rounded-full"
                    >New</span
                  >
                  <span
                    v-if="category.offre == true"
                    class="absolute -top-2 z-10 -right-6 w-12 h-6 flex items-center text-xs font-bold font-sans text-white justify-center bg-yellow-400 uppercase rounded-full shadow-lg"
                    >offre</span
                  >
                  <img
                    class="w-9 h-9 mx-auto icon-svg"
                    :src="category.svgIcon"
                    alt=""
                  />
                  <span class="text-sm font-semibold mt-1 uppercase">{{
                    category.name
                  }}</span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </scroll-fixed-header>
    </div>

    <!-- small devices display -->
    <div class="lg:hidden flex px-4 pt-6 items-center justify-between bg-white">
      <div>
        <svg
          @click="drawer"
          class="h-6 w-6 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div>
        <img
          src="https://www.kfd.ma/img/khaddar-f-dar-logo-1585492732.jpg"
          class="w-44 h-8"
          alt=""
        />
      </div>
      <div class="-mt-2 -mr-2">
        <svg
          class="w-12 h-12 text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      </div>
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div
          @keydown.esc="isOpen = false"
          v-show="isOpen"
          class="z-10 fixed inset-0 transition-opacity"
        >
          <div
            @click="isOpen = false"
            class="absolute inset-0 bg-black opacity-50"
            tabindex="0"
          ></div>
        </div>
      </transition>
      <aside
        class="transform top-0 left-0 lg:w-3/12 w-4/6 sm:w-2/6 pt-6 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : 'hidden'"
      >
        <vertical-menu></vertical-menu>
      </aside>
    </div>
    <div class="bg-white px-6 py-4 lg:hidden flex">
      <div
        class="bg-white w-full flex items-center rounded-full border border-gray-200 shadow-md"
      >
        <input
          class="w-full px-6 text-gray-700 leading-tight focus:outline-none"
          type="text"
          placeholder="Rechercher"
        />
        <div class="p-1">
          <button
            class="bg-green-350 text-white rounded-full hover:bg-green-340 focus:outline-none w-10 h-10 flex items-center justify-center"
          >
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VerticalMenu from "./VerticalMenu";
export default {
  components: { VerticalMenu },
  data() {
    return {
      isOpen: false,
      showMenu1: false,
      showMenu2: false,
      fixed: false,
      Categories: [
        {
          to: "/Legumes",
          name: "Legumes",
          svgIcon: require("../../assets/icons/cabbage.svg"),
        },
        {
          to: "/Fruits",
          name: "Fruits",
          svgIcon: require("../../assets/icons/avocado.svg"),
        },
        {
          to: "/Poules",
          name: "Poules",
          svgIcon: require("../../assets/icons/poule.svg"),
        },

        {
          to: "/Olives",
          name: "Olives",
          svgIcon: require("../../assets/icons/olives.svg"),
        },
        {
          to: "/Herbes",
          name: "Herbes",
          svgIcon: require("../../assets/icons/herb.svg"),
        },
        {
          to: "/Salades",
          new: true,
          name: "Salades",
          svgIcon: require("../../assets/icons/salad.svg"),
        },
        {
          to: "/Epices",
          name: "Epices",
          svgIcon: require("../../assets/icons/salt.svg"),
        },
        {
          to: "/Packs",
          name: "Packs",
          offre: true,
          svgIcon: require("../../assets/icons/vegetables.svg"),
        },
        {
          to: "/offers",
          name: "Offers",
          svgIcon: require("../../assets/icons/price-tag.svg"),
        },
      ],
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
    toggleMenu1() {
      this.showMenu1 = !this.showMenu1;
    },
    toggleMenu2() {
      this.showMenu2 = !this.showMenu2;
    },
  },
};
</script>

<style scoped>
.hover-item:hover {
  margin-top: 25px !important;
}
.category-item:hover .icon-svg {
  filter: invert(59%) sepia(35%) saturate(6303%) hue-rotate(46deg)
    brightness(92%) contrast(101%);
}

.icon-svg {
  filter: invert(21%) sepia(7%) saturate(2195%) hue-rotate(178deg)
    brightness(92%) contrast(81%);
}
</style>
