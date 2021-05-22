<template>
  <div class="border border-gray-100">
    <div class="">
      <div
        class="flex items-center justify-between pr-6 select-none bg-gray-200"
      >
        <div class="w-44 bg-green-340 p-3 flex items-center relative">
          <span class="uppercase font-semibold text-xs text-white title">
            bestseller product
          </span>
          <div
            class="w-10 h-10 bg-gray-200 rounded-full absolute top-0 -right-5"
          ></div>
        </div>
        <div class="flex">
          <div class="cursor-pointer" v-for="tab in tabs" :key="tab.tab">
            <div class="mx-4">
              <a
                class="text-sm font-semibold uppercase"
                v-on:click="toggleTabs(tab.tab)"
                v-bind:class="{
                  'text-gray-800': openTab !== tab.tab,
                  'text-green-340': openTab === tab.tab,
                }"
              >
                {{ tab.name }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="w-99 py-3">
        <div class="">
          <div class="tab-content tab-space">
            <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
              <div class="flex flex-wrap w-full">
                <div
                  class="card py-5 relative mx-2 border border-transparent hover:shadow-md hover:border-gray-100 text-center flex justify-center cursor-pointer"
                  v-for="fruit in Fruits"
                  :key="fruit.name"
                >
                  <div
                    class="uppercase shadow-2xl absolute top-3 right-2 w-10 h-5 text-xs text-white bg-red-600 font-semibold flex items-center justify-center rounded-lg"
                    v-if="fruit.offre === true"
                  >
                    -20%
                  </div>
                  <div>
                    <img class="w-48 h-48 mx-auto" :src="fruit.imgSrc" alt="" />
                    <span
                      class=" text-gray-900 font-semibold hover:text-green-340"
                    >
                      {{ fruit.name }}
                    </span>
                    <div class="flex items-center justify-center">
                      <span class="text-green-340 font-semibold text-xl mr-3">
                        ${{ fruit.price }}
                      </span>
                      <span
                        v-if="fruit.offre === true"
                        class="font-semibold text-gray-400 line-through mt-2"
                      >
                        ${{ fruit.newPrice }}
                      </span>
                    </div>
                    <div
                      class="items-center justify-center mt-3 mx-2 flex-btns absolute hidden top-16 right-6"
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

                    <div
                      class="absolute top-40 counter hidden"
                      style="right: 60px"
                    >
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
                          class="text-white focus:outline-none"
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
            </div>
            <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
              <div class="flex flex-wrap w-full">
                <div
                  class="card relative mx-2 py-5 border border-transparent hover:shadow-md hover:border-gray-100 text-center flex justify-center cursor-pointer"
                  v-for="fruit in Fruits"
                  :key="fruit.name"
                >
                  <div
                    class="uppercase shadow-2xl absolute top-3 right-2 w-10 h-5 text-xs text-white bg-red-600 font-semibold flex items-center justify-center rounded-lg"
                    v-if="fruit.offre === true"
                  >
                    -20%
                  </div>
                  <div>
                    <img class="w-48 h-48 mx-auto" :src="fruit.imgSrc" alt="" />
                    <span class="font-semibold text-gray-800 hover:text-green-340">
                      {{ fruit.name }}
                    </span>
                    <div class="flex items-center justify-center">
                      <span class="text-green-340 font-semibold text-xl mr-3">
                        ${{ fruit.price }}
                      </span>
                      <span
                        v-if="fruit.offre === true"
                        class="font-semibold text-gray-400 line-through mt-2 text-sm"
                      >
                        ${{ fruit.newPrice }}
                      </span>
                    </div>
                    <div
                      class="items-center justify-center mt-3 mx-2 flex-btns absolute hidden top-20 right-6"
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

                    <div
                      class="absolute top-44 counter hidden"
                      style="right: 60px"
                    >
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
                          class="text-white focus:outline-none"
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
            </div>
            <div v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }">
              <div class="flex flex-wrap w-full">
                <div
                  class="card relative mx-2 py-5 border border-transparent hover:shadow-md hover:border-gray-100 text-center flex justify-center cursor-pointer"
                  v-for="poule in poules"
                  :key="poule.name"
                >
                  <div
                    class="uppercase shadow-2xl absolute top-3 right-2 w-10 h-5 text-xs text-white bg-red-600 font-semibold flex items-center justify-center rounded-lg"
                    v-if="poule.offre === true"
                  >
                    20%
                  </div>
                  <div>
                    <img class="w-48 h-48 mx-auto" :src="poule.imgSrc" alt="" />
                    <span
                      class="text-sm font-semibold text-gray-700 hover:text-green-340"
                    >
                      {{ poule.name }}
                    </span>
                    <div class="flex items-center justify-center mt-1">
                      <span class="text-green-340 font-semibold mr-3">
                        ${{ poule.price }}
                      </span>
                      <span
                        v-if="poule.offre === true"
                        class="font-semibold text-gray-400 line-through mt-2 text-sm"
                      >
                        ${{ poule.newPrice }}
                      </span>
                    </div>
                    <div
                      class="items-center justify-center mt-3 mx-2 flex-btns absolute hidden top-16 right-6"
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

                    <div
                      class="absolute top-40 counter hidden"
                      style="right: 60px"
                    >
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
                          class="text-white focus:outline-none"
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
            </div>
            <div v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }">
              <div class="flex flex-wrap w-full">
                <div
                  class="card relative mx-2 py-5 border border-transparent hover:shadow-md hover:border-gray-100 text-center flex justify-center cursor-pointer"
                  v-for="olive in olives"
                  :key="olive.name"
                >
                  <div
                    class="uppercase shadow-2xl absolute top-3 right-2 w-10 h-5 text-xs text-white bg-red-600 font-semibold flex items-center justify-center rounded-lg"
                    v-if="olive.offre === true"
                  >
                    20%
                  </div>
                  <div>
                    <img class="w-48 h-48 mx-auto" :src="olive.imgSrc" alt="" />
                    <span
                      class="text-sm text-gray-700 font-semibold hover:text-green-340"
                    >
                      {{ olive.name }}
                    </span>
                    <div class="flex items-center justify-center mt-1">
                      <span class="text-green-340 font-semibold mr-3">
                        ${{ olive.price }}
                      </span>
                      <span
                        v-if="olive.offre === true"
                        class="font-semibold text-gray-400 line-through mt-2 text-sm"
                      >
                        ${{ olive.newPrice }}
                      </span>
                    </div>
                    <div
                      class="items-center justify-center mt-3 mx-2 flex-btns absolute hidden top-16 right-6"
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

                    <div
                      class="absolute top-40 counter hidden"
                      style="right: 60px"
                    >
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
                          class="text-white focus:outline-none"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pink-tabs",
  data() {
    return {
      openTab: 1,
      counter: 0,
      tabs: [
        {
          tab: 1,
          name: "Fruits",
        },
        {
          tab: 2,
          name: "Legumes",
        },
        {
          tab: 3,
          name: "Poules",
        },
        {
          tab: 4,
          name: "Olives et confits",
        },
      ],
      olives: [
        {
          imgSrc:
            "https://image.freepik.com/free-photo/pitted-marinated-green-olives-white-background_157837-1117.jpg",
          name: "Olives",
          price: "9,00",
        },
        {
          imgSrc:
            "https://www.kfd.ma/407-home_default/cornichons-confits-250-g.jpg",
          name: "Cocombres confits",
          price: "6.5",
          newPrice: "4.5",
          offre: true,
        },
        {
          imgSrc: "https://www.kfd.ma/462-home_default/ail-confit-250-g.jpg",
          name: "Gousse d'ail",
          price: "6",
        },
        {
          imgSrc: "https://www.kfd.ma/365-home_default/olives-vertes-200g.jpg",
          name: "Olives vert slices",
          price: "4.5",
        },
        {
          imgSrc:
            "https://www.kfd.ma/388-home_default/harissa-traditionnelle-250-g.jpg",
          name: "piment sauce (hrisa)",
          price: "7.5",
          newPrice: "6.5",
          offre: true,
        },
        {
          imgSrc:
            "https://www.kfd.ma/290-home_default/citrons-confits-boite-de-5-unites.jpg",
          name: "Citrons confits",
          price: "5",
          newPrice: "4",
          offre: true,
        },
        {
          imgSrc: "https://www.kfd.ma/289-home_default/olives-vertes-200g.jpg",
          name: "olives vertes",
          price: "6",
        },
      ],
      Fruits: [
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
        {
          imgSrc:
            "https://demo.wpthemego.com/themes/sw_revo/wp-content/uploads/2017/03/o12-600x600.jpg",
          name: "Abricots",
          price: "9,00",
        },
        {
          imgSrc:
            "https://demo.wpthemego.com/themes/sw_revo/wp-content/uploads/2017/03/o4-600x600.jpg",
          name: "Banan",
          price: "6.5",
          newPrice: "4.5",
          offre: true,
        },
        {
          imgSrc:
            "https://demo.wpthemego.com/themes/sw_revo/wp-content/uploads/2017/03/o9-600x600.jpg",
          name: "Cerises",
          price: "4.5",
        },
        {
          imgSrc:
            "https://demo.wpthemego.com/themes/sw_revo/wp-content/uploads/2017/03/o7-300x400.jpg",
          name: "Kiwis",
          price: "7.5",
          newPrice: "6.5",
          offre: true,
        },
      ],
      poules: [
        {
          imgSrc:
            "https://dnrsausagesupplies.ca/images/products/Lacto_Binder_Gluten_Free_1_kg_336.jpg",
          name: "Tomates",
          arabicName: "مطيشة",
          price: "9",
        },
        {
          imgSrc:
            "https://image.freepik.com/free-photo/raw-chicken-meat-white-background_58830-687.jpg",
          name: "Onions",
          arabicName: "بصلة",
          price: "6.5",
          newPrice: "4.5",
          offre: true,
        },
        {
          imgSrc:
            "https://5.imimg.com/data5/KM/LF/MY-8299207/whole-chicken-meat-500x500.jpg",
          name: "Carotte",
          arabicName: "خيزو",
          price: "6",
        },
        {
          imgSrc:
            "https://image.freepik.com/free-photo/raw-chicken-meat-white-background_58830-687.jpg",
          name: "Chou fleur",
          arabicName: "شيفلور",
          price: "4.5",
        },
        {
          imgSrc:
            "https://st2.depositphotos.com/1796303/5674/i/950/depositphotos_56745257-stock-photo-fresh-raw-beef-meat-isolatet.jpg",
          name: "Pomme du terre",
          arabicName: "بطاطة بيضاء",
          price: "7.5",
          newPrice: "6.5",
          offre: true,
        },
        {
          imgSrc:
            "https://image.freepik.com/free-photo/raw-chicken-meat-white-background_58830-687.jpg",
          name: "Piment rouge",
          arabicName: "فلفلة حارة",
          price: "5",
          newPrice: "4",
          offre: true,
        },
        {
          imgSrc:
            "https://st2.depositphotos.com/1796303/5674/i/950/depositphotos_56745257-stock-photo-fresh-raw-beef-meat-isolatet.jpg",
          name: "Carotte",
          arabicName: "خيزو",
          price: "6",
        },
        {
          imgSrc:
            "https://image.freepik.com/free-photo/raw-chicken-meat-white-background_58830-687.jpg",
          name: "pois",
          arabicName: "جلبانة",
          price: "7.5",
          newPrice: "6.5",
          offre: true,
        },
      ],
      Legumes: [
        {
          imgSrc:
            "https://demo.wpthemego.com/themes/sw_revo/wp-content/uploads/2017/03/o21-300x400.jpg",
          name: "Tomates",
          price: "9,00",
        },
        {
          imgSrc:
            "https://demo.wpthemego.com/themes/sw_revo/wp-content/uploads/2017/03/o17-300x400.jpg",
          name: "Onions",
          price: "6.5",
          newPrice: "4.5",
          offre: true,
        },
        {
          imgSrc:
            "https://demo.wpthemego.com/themes/sw_revo/wp-content/uploads/2017/03/o14-300x400.jpg",
          name: "Pomme de terre",
          price: "6",
        },
        {
          imgSrc:
            "https://demo.wpthemego.com/themes/sw_revo/wp-content/uploads/2017/03/o1-300x400.jpg",
          name: "Carottes",
          price: "4.5",
        },
        {
          imgSrc:
            "https://demo.wpthemego.com/themes/sw_revo/wp-content/uploads/2017/03/o10-300x400.jpg",
          name: "Pois",
          price: "5",
          newPrice: "4",
          offre: true,
        },
        {
          imgSrc:
            "https://demo.wpthemego.com/themes/sw_revo/wp-content/uploads/2017/03/o8-300x400.jpg",
          name: "Concombres",
          price: "6",
        },
        {
          imgSrc:
            "https://demo.wpthemego.com/themes/sw_revo/wp-content/uploads/2017/03/o6-600x600.jpg",
          name: "Betteraves",
          price: "7.5",
          newPrice: "6.5",
          offre: true,
        },
        {
          imgSrc:
            "https://demo.wpthemego.com/themes/sw_revo/wp-content/uploads/2017/03/o5-300x400.jpg",
          name: "Artichaut",
          price: "4.5",
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

<style scoped>
.card:hover .flex-btns {
  display: flex !important;
}
.flex-btns {
  display: none !important;
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