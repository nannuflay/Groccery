<template>
  <div class="border border-gray-100 w-64">
    <div class="w-44 bg-green-340  p-3 flex items-center relative ">
      <span class="uppercase font-semibold  text-xs text-white title"> featured product </span>
      <div class="w-10 h-10 bg-white rounded-full absolute top-0 -right-5"></div>
    </div>
    <div v-for="product in featuredProduct" :key="product.name">
      <div class="flex  items-center m-4">
        <div
          class="border border-gray-100 w-24 h-24 flex justify-center items-center"
        >
          <img class="w-20 h-20" :src="product.imgSrc" alt="" />
        </div>
				<div class="ml-4">
					<span class="font-semibold text-gray-600 hover:text-green-340 cursor-pointer"> {{product.name}} </span>
					<div class="flex items-center mt-1">
						<span class="text-green-340 font-semibold mr-3">
							${{ product.price }}
						</span>
						<span
							v-if="product.offre === true"
							class="font-semibold text-gray-400 line-through mt-2 text-sm"
						>
							${{ product.newPrice }}
						</span>
					</div>
				</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      featuredProduct: [
        {
          imgSrc:
            "https://demo.wpthemego.com/themes/sw_revo/wp-content/uploads/2017/03/o11-600x600.jpg",
          name: "Abricots",
          price: "9,00",
        },
        {
          imgSrc:
            "https://demo.wpthemego.com/themes/sw_revo/wp-content/uploads/2017/03/o13-600x600.jpg",
          name: "Banan",
          price: "6.5",
          newPrice: "4.5",
          offre: true,
        },
        {
          imgSrc:
            "https://demo.wpthemego.com/themes/sw_revo/wp-content/uploads/2017/03/o6-600x600.jpg",
          name: "Cerises",
          price: "4.5",
        },
        {
          imgSrc:
            "https://demo.wpthemego.com/themes/sw_revo/wp-content/uploads/2017/03/o19-600x600.jpg",
          name: "Kiwis",
          price: "7.5",
          newPrice: "6.5",
          offre: true,
        },
      ],
    };
  },
};
</script>

<style>

title::before {
   content: '';
   display: inline-block;
   width: 15px;
   height: 15px;
   -moz-border-radius: 7.5px;
   -webkit-border-radius: 7.5px;
   border-radius: 7.5px;
   background-color: #69b6d5;
}
</style>