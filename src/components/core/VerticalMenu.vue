<template>
  <div class="border border-gray-300" style="width: 270px; height: 500px">
    <div class="w-full text-white h-12 flex items-center bg-green-340 px-6 pt-2">
      <svg
        class="w-4 h-4 mr-1"
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
      <span class="text-sm font-semibold ">ALL CATEGORIES</span>
    </div>
    <div
      v-for="category in Categories"
      :key="category.name"
      style=""
      class="item-list px-6"
    >
      <router-link
        :to="category.to"
        class="flex items-center py-3 border-t border-gray-200"
      >
        <div class="text-center">
          <span class=" font-semibold text-sm text-gray-900 tra">{{ category.name }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Categories: [
        {
          to: "/Legumes",
          name: "Legumes",
          svgIcon: require("../../assets/icons/cabbage.svg"),
        },
        {
          to: "/Poules",
          name: "Poules",
          svgIcon: require("../../assets/icons/poule.svg"),
        },
        {
          to: "/Fruits",
          name: "Fruits",
          svgIcon: require("../../assets/icons/avocado.svg"),
        },
        {
          to: "/Olives",
          name: "Olives et confits",
          svgIcon: require("../../assets/icons/olives.svg"),
        },
        {
          to: "/Herbes",
          name: "Herbes fines",
          svgIcon: require("../../assets/icons/herb.svg"),
        },
        {
          to: "/Salades",
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
          svgIcon: require("../../assets/icons/vegetables.svg"),
        },
        {
          to: "/offers",
          name: "Les bonnes Affaires",
          svgIcon: require("../../assets/icons/price-tag.svg"),
        },
      ],
    };
  },
};
</script>

<style>
</style>