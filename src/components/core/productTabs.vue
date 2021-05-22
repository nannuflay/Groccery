<template>
  <div class="">
    <div class="lg:border lg:border-gray-200 md:border-gray-200 bg-white border relative flex lg:flex-col md:flex-col">
      <div
        v-for="Product in Products"
        :key="Product.tab"
        class="flex justify-center"
      >
        <div class="w-full">
          <div
            class="absolute top-3"
            :class="{
              hidden: openTab !== Product.tab,
              block: openTab === Product.tab,
            }"
          >
            <div class="flex flex-col lg:flex-row md:flex-row justify-between">
              <div class="lg:mr-4 md:mr-4">
                <img class="lg:w-96 md:h-96 md:w-96 lg:h-96 h-72 w-72 mt-4 md:mt-0 lg:mt-0 " :src="Product.img" alt="" />
              </div>
              <div class="lg:w-80 md:w-80 w-full">
                <div class="flex border-b border-gray-100 lg:mr-9 pb-3 absolute top-0 right-4  md:relative lg:relative">
                  <span class="font-bold lg:text-base md:text-base text-xs text-gray-700 "
                    >YOU CAN CHOOSE THEM! QUICK!</span
                  >
                  <img
                    class="w-10 h-7 -mt-2 ml-4"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUicdYyUTSUYMEXbxZCZYX3chDOCh2feNiXA&usqp=CAU"
                    alt=""
                  />
                </div>
                <div class="mr-9 py-9">
                  <span
                    class="text-lg font-bold text-gray-900 hover:text-green-340 cursor-pointer"
                    >{{ Product.name }}</span
                  >

                  <p class="text-sm text-gray-500 mt-6">
                    {{ Product.description }}
                  </p>
                  <div class="flex items-center mt-7">
                    <span class="text-4xl font-semibold text-green-340 mr-3"
                      >${{ Product.price }}</span
                    >
                    <span
                      class="text-lg line-through font-semibold -mb-3 text-gray-400"
                      >${{ Product.oldPrice }}</span
                    >
                  </div>
                  <div class="flex items-center mt-7">
                    <button
                      class="py-2 px-4 bg-green-340 rounded-full text-sm text-white focus-within:outline-none"
                    >
                      Add to cart
                    </button>
                    <button
                      class="border border-green-340 p-2 rounded-full text-green-340 ml-1 focus-within:outline-none hover:bg-green-340 hover:text-white"
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
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                    <button
                      class="border border-green-340 p-2 rounded-full text-green-340 ml-1 focus-within:outline-none hover:bg-green-340 hover:text-white"
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
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

          <div
            class="border border-transparent hover:border-green-340 border-gray-200 w-20"
            v-on:click="toggleTabs(Product.tab)"
            v-bind:class="{ 'border-green-340': openTab === Product.tab }"
          >
            <img class="w-20 h-20" :src="Product.img" alt="" />
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openTab: 3,
      Products: [
        {
          tab: 1,
          img:
            "https://demo.wpthemego.com/themes/sw_revo/wp-content/uploads/2017/03/o9.jpg",
          name: "Lorem Ipsum Qui",
          description:
            "A family of stools of great impact and comfort completing the Flow Collection. Flow Stool in matt white and black shell made from polyurethane, available with VN 4-legged oak base.",
          price: "100",
          oldPrice: "143",
          Offer: true,
        },
        {
          tab: 2,
          img:
            "https://demo.wpthemego.com/themes/sw_revo/wp-content/uploads/2017/03/o4-300x300.jpg",
          name: "Ut Enim Ad",
          description:
            "A family of stools of great impact and comfort completing the Flow Collection. Flow Stool in matt white and black shell made from polyurethane, available with VN 4-legged oak base.",
          price: "56",
          oldPrice: "70",
          Offer: true,
        },
        {
          tab: 3,
          img:
            "https://demo.wpthemego.com/themes/sw_revo/wp-content/uploads/2017/03/o5.jpg",
          name: "Vitae Dicta Sunt",
          description:
            "A family of stools of great impact and comfort completing the Flow Collection. Flow Stool in matt white and black shell made from polyurethane, available with VN 4-legged oak base.",
          price: "89",
          oldPrice: "123",
          Offer: true,
        },
        {
          tab: 4,
          img:
            "https://demo.wpthemego.com/themes/sw_revo/wp-content/uploads/2017/03/o7.jpg",
          name: "Neque Porro Quis",
          description:
            "A family of stools of great impact and comfort completing the Flow Collection. Flow Stool in matt white and black shell made from polyurethane, available with VN 4-legged oak base.",
          price: "78",
          oldPrice: "99",
          Offer: true,
        },
        {
          tab: 5,
          img:
            "https://demo.wpthemego.com/themes/sw_revo/wp-content/uploads/2017/03/o8.jpg",
          name: "Iste Natus Err",
          description:
            "A family of stools of great impact and comfort completing the Flow Collection. Flow Stool in matt white and black shell made from polyurethane, available with VN 4-legged oak base.",
          price: "89",
          oldPrice: "129",
          Offer: true,
        },
      ],
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>