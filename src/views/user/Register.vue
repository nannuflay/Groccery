<template>
  <div class="bg-gray-100">
    <navbar/>
    <div class="flex mx-auto">
      <div class="flex  w-full">
        <div class="w-full bg-white pt-10">
        <Notification
          v-if="showNotifyBar"
          :notification=notification
          ></Notification>
          <ul class="flex mb-0 list-none flex-wrap pt-3  pb-4 flex-row lg:w-2/5 lg:mx-auto mx-4">
            <li class="-mb-px  last:mr-0 flex-auto text-center">
              <a class="text-sm font-semibold uppercase  py-3  block  cursor-pointer " v-on:click="toggleTabs(1)" v-bind:class="{'text-black ': openTab !== 1, 'text-green-600 border border-green-100 rounded-md bg-green-50': openTab === 1}">
                SE CONNECTER
              </a>
            </li>
            <li class="-mb-px flex-auto text-center">
              <a class="text-sm font-semibold uppercase py-3 block cursor-pointer " v-on:click="toggleTabs(2)" v-bind:class="{'text-black': openTab !== 2, 'text-green-600 border border-green-100 rounded-md bg-green-50': openTab === 2}">
                CRÉER UN COMPTE
              </a>
            </li>
          </ul>
          <div class=" flex flex-col mx-auto   mb-6" style="">
            <div class="lg:px-4 py-5">
              <div class="">
                <div  class=" flex  p-5 lg:w-5/12 mx-auto" :class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                  <div class="flex flex-col mx-auto lg:w-full">
                  <div class="text-center">
                      <span class="text-lg font-semibold text-gray-700">Connectez-vous à votre compte</span>
                    </div>
                  <div class=" mt-2 rounded-lg p-4 lg:mx-20">
                    <div class="">
                      <div class="">
                        <span class="text-gray-800 font-semibold">E-mail:</span>
                      </div>
                      <input class="border-b mx-auto  w-full flex flex-1  focus:border-green-600 focus:outline-none border-gray-800  h-12 p-2 bg-white" type="text" name="email"  placeholder="E-mail addresse">
                    </div>

                     <div class="mt-6">
                      <div class="">
                        <span class="text-gray-800 font-semibold">Mot de passe:</span>
                      </div>
                      <input class="border-b mx-auto  w-full flex flex-1  focus:border-green-600 focus:outline-none border-gray-800  h-12 p-2 bg-white" type="password" name="password"  placeholder="Mot de passe">
                    </div>
                    <div class="text-center mt-4">
                      <div class="flex justify-between items-center">
                        <div>
                          <label class="select-none text-xs font-semibold text-gray-800">
                            <input type="checkbox" class="mr-1 w-3 h-3">
                            Rester Connecter
                          </label>
                          
                        </div>
                        <button class="text-xs  hover:text-green-600  focus:outline-none">Mot de passe oublie ?</button>
                      </div>
                        <button class="mt-10  w-full border bg-green-600 px-4 py-3 rounded-lg text-sm font-bold text-white focus:outline-none">SE CONNECTER</button>

                      <div class="mt-10  flex justify-center">
                        <span class="text-sm text-gray-600 mr-2">Pas de compte ? </span>
                        <button class="hover:text-green-600 text-sm font-semibold text-gray-700" v-on:click="toggleTabs(2)">Créez-en un</button>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                <div class="lg:w-4/12 mx-auto" v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                  <div class="flex flex-col">
                  <div class="text-center mt-3">
                      <span class="text-lg font-semibold text-gray-700">Inscrirez-vous à votre compte</span>
                    </div>
                  <div class=" mt-2 rounded-lg lg:p-4">
                    <div class="">
                      <div class="">
                        <span class="text-gray-800 font-semibold">Nom complete:</span>
                      </div>
                      <input v-model="user.name" class="border-b mx-auto  w-full flex flex-1  focus:border-green-350 focus:outline-none border-gray-800  h-12 p-2 bg-white" type="text" name="name"  placeholder="john alex">
                    </div>
                    <div class="mt-3">
                      <div class="">
                        <span class="text-gray-800 font-semibold">Numero telephone:</span>
                      </div>
                      <input v-model="user.phone_number" class="border-b mx-auto  w-full flex flex-1  focus:border-green-350 focus:outline-none border-gray-800  h-12 p-2 bg-white" type="text" name="number"  placeholder="06 xx xx xx">
                    </div>

                    <div class="mt-3">
                      <div class="">
                        <span class="text-gray-800 font-semibold">E-mail:</span>
                      </div>
                      <input v-model="user.email" class="border-b mx-auto  w-full flex flex-1  focus:border-green-350 focus:outline-none border-gray-800  h-12 p-2 bg-white" type="text" name="email"  placeholder="E-mail addresse">
                    </div>

                     <div class="mt-6">
                      <div class="">
                        <span class="text-gray-800 font-semibold">Mot de passe:</span>
                      </div>
                      <input v-model="user.password" class="border-b mx-auto  w-full flex flex-1  focus:border-green-350 focus:outline-none border-gray-800  h-12 p-2 bg-white" type="password" name="password"  placeholder="Mot de passe">
                    </div>
                    <!-- <div class="flex mt-10">
                      <input class="mt-2 mx-2" type="checkbox" name="" >
                      <div>
                        <span class="text-sm font-semibold text-gray-800">Recevoir notre newsletter</span>
                        <p class="text-sm  text-gray-500">Vous soyez alertés en amont des meilleurs offres et promotions sur le site</p>
                      </div>
                    </div> -->
                    <div class="text-center mt-7">
                      <div class="text-center">
                        <button v-on:submit.prevent="createNewUser()" v-on:click.prevent="createNewUser()" class="  bg-green-600 w-full px-4 py-3 rounded-lg text-sm font-bold focus:outline-none text-white">S'inscrirez</button>
                      </div>
                      <div class="mt-10 flex justify-center">
                        <span class="text-sm text-gray-600 mr-2">Vous avez déjà un compte ?</span>
                        <button class="hover:text-green-350 text-sm font-semibold text-gray-700" v-on:click="toggleTabs(1)">Connectez-vous !</button>
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
  </div>
</template>

<script>
import navbar from '@/components/core/navbar'
import { RegisterUser } from '@/services/authService'
import Notification from '@/components/notification'
export default {
  components: {
    navbar,
    Notification
  },
  data () {
    return {
      openTab: 1,
      user: {
        email: null,
        password: null,
        name: null,
        phone_number: null
      },
      showNotifyBar: false,
      notification: {
        title: null,
        description: null
      }
    }
  },
  methods: {
    createNewUser: async function() {
      try {
        const user = await RegisterUser(this.user)
        // check if user is not undifined or null
        if (user !== null || user !== undefined) {
          // check if user returns a 200 status code
          if (user.status === 200) {
            // if everythings ok, redirect user to login form
            this.toggleTabs(1)
            this.toggleNotification(
              true,
              "operation success",
              "you may login to your account"
            )
            setTimeout(() => {
              this.showNotifyBar = false
            }, 12000)
          }
        }
      } catch (err) {
        this.toggleNotification(true, "Error occurd", err.message)
        console.log(err)
      }
    },
    toggleNotification: function(isShowed, title, desc) {
      this.showNotifyBar = isShowed
      this.notification.title = title
      this.notification.description = desc
    },
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    },
    // async logInWithFacebook() {
    //   await this.loadFacebookSDK(document, "script", "facebook-jssdk");
    //   await this.initFacebook();
    //   window.FB.login(function(response) {
    //     if (response.authResponse) {
    //       alert("You are logged in &amp; cookie set!");
    //       // Now you can redirect the user or do an AJAX request to
    //       // a PHP script that grabs the signed request from the cookie.
    //     } else {
    //       alert("User cancelled login or did not fully authorize.");
    //     }
    //   });
    //   return false;
    // },

    // async initFacebook() {
    //   window.fbAsyncInit = function() {
    //     window.FB.init({
    //       appId: "8220179XXXXXXXXX", //You will need to change this
    //       cookie: true, // This is important, it's not enabled by default
    //       version: "v13.0"
    //     });
    //   };
    // },

    // async loadFacebookSDK(d, s, id) {
    //   var js,
    //     fjs = d.getElementsByTagName(s)[0];
    //   if (d.getElementById(id)) {
    //     return;
    //   }
    //   js = d.createElement(s);
    //   js.id = id;
    //   js.src = "https://connect.facebook.net/en_US/sdk.js";
    //   fjs.parentNode.insertBefore(js, fjs);
    // }
  }

}
</script>

<style>

</style>