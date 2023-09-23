<template>


<section class="container mx-auto px-5 md:w-4/5 ">
  <div class="h-full ">
    <!-- Left column container with background-->
    <div
      class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
      <div
        class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
        <img
          src="../assets/images/inscription.svg"
          class="w-full"
          alt="inscription image" />
      </div>

      <!-- Right column container -->
      <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
        <form @submit.prevent="registerUser" class="border border-gray-300 p-4 rounded" >
          <!--Sign in section-->
          <div class="flex flex-row items-center justify-center lg:justify-start">
            <p class="mb-0 mr-4 text-lg">Inscription avec </p>

              <!-- Google -->
              <button type="button" data-te-ripple-init data-te-ripple-color="dark" href= "/google" class="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#EA4335] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(234,67,53,0.3),0_4px_18px_0_rgba(234,67,53,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(234,67,53,0.3),0_4px_18px_0_rgba(234,67,53,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(234,67,53,0.3),0_4px_18px_0_rgba(234,67,53,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(234,67,53,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(234,67,53,0.2),0_4px_18px_0_rgba(234,67,53,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(234,67,53,0.2),0_4px_18px_0_rgba(234,67,53,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(234,67,53,0.2),0_4px_18px_0_rgba(234,67,53,0.1)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mx-auto h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 4V8H15.8C15.4 10.3 13.8 12 12 12V16H15.8C18.7 16 21 13.5 21 10.5C21 8.1 19.2 6.1 16.8 5.5L12 4ZM3.9 7.2L7.3 9L8.8 8C8.6 7.1 8.7 6.1 9.1 5.2L5.7 3.4C4.1 5.4 3.9 6.7 3.9 7.2ZM8.8 16C6.7 16 5.3 14.2 5.1 12.2L1.9 14.6C3.5 17.7 7.7 20 12 20C14.3 20 15.9 19.2 16.7 18.1L13.2 16.5C12.7 17 11.3 18 8.8 16Z" />
                </svg>
                
              </button>
          </div>

          <!-- Separator between social media sign in and email/password sign in -->
          <div class="my-4 flex items-center justify-center">
              <div class="border-t w-full mr-3"></div>
              <p class="mx-4 mb-3 text-center font-semibold ">ou</p>
              <div class="border-t w-full ml-3"></div>
          </div>

          <!-- Email input -->
          <div class="relative mb-6">
              <input type="email" v-model="email" class="peer block w-full rounded border bg-gray-100 px-3 py-2 outline-none transition-all focus:placeholder-opacity-0" id="emailInput" placeholder="" required />
              <label for="emailInput" class="absolute left-3 top-2 text-gray-700 transition-all peer-focus:-top-6 peer-focus:text-primary">Email address</label>
          </div>

          <!-- Nom -->
          <div class="relative mb-6">
              <input type="text" v-model="name" class="peer block w-full rounded border bg-gray-100 px-3 py-2 outline-none transition-all focus:placeholder-opacity-0" id="nameInput" placeholder="" required />
              <label for="nameInput" class="absolute left-3 top-2 text-gray-700 transition-all peer-focus:-top-6 peer-focus:text-primary">Nom</label>
          </div>

          <!-- Prénom -->
          <div class="relative mb-6">
              <input type="text" v-model="firstname" class="peer block w-full rounded border bg-gray-100 px-3 py-2 outline-none transition-all focus:placeholder-opacity-0" id="firstnameInput" placeholder="" required />
              <label for="firstnameInput" class="absolute left-3 top-2 text-gray-700 transition-all peer-focus:-top-6 peer-focus:text-primary">Prénom</label>
          </div>

          <!-- Password input -->
          <div class="relative mb-6">
              <input type="password" v-model="password" class="peer block w-full rounded border bg-gray-100 px-3 py-2 outline-none transition-all focus:placeholder-opacity-0" id="passwordInput" placeholder="" required/>
              <label for="passwordInput" class="absolute left-3 top-2 text-gray-700 transition-all peer-focus:-top-6 peer-focus:text-primary">Mot de passe</label>
          </div>

          <!-- Password input -->
          <div class="relative mb-6">
              <input type="password" v-model="confirmPassword" class="peer block w-full rounded border bg-gray-100 px-3 py-2 outline-none transition-all focus:placeholder-opacity-0" id="confirmPassword" placeholder="" required/>
              <label for="confirmPassword" class="absolute left-3 top-2 text-gray-700 transition-all peer-focus:-top-6 peer-focus:text-primary">Confirmation de mot de passe</label>
          </div>



          <div class="mb-6 flex items-center justify-between">
            <!-- Remember me checkbox -->
            <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input
                class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="checkbox"
                value=""
                id="exampleCheck2" />
              <label
                class="inline-block pl-[0.15rem] hover:cursor-pointer"
                for="exampleCheck2">
                Remember me the term
              </label>
            </div>

            <!--Forgot password link-->
            <a href="/forgot-password" class="text-blue-500 hover:text-blue-700 underline transition duration-150 ease-in-out">Forgot password?</a>

          </div>

          <!-- Login button -->
          <div class="text-center lg:text-left">
            <button type="submit"  class="inline-block px-7 py-3 rounded bg-blue-500 text-white font-medium  transition duration-150 ease-in-out hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-700">
              Inscription
            </button>

            <p v-if="errorMessage">{{ errorMessage }}</p>
            <p v-if="successMessage">{{ successMessage }}</p>

            <!-- Register link -->
            <p class="mb-0 mt-2 pt-1 text-sm font-semibold"> Vous avez déjà un compte?  
              <a href="/login" class="text-red-500 hover:text-red-600 focus:outline-none underline focus:text-red-700"> Connexion </a>
            </p>

          </div>
        </form>
      </div>
    </div>
  </div>
</section>



</template>
  
<script>
    import { register } from "@/services/api.js";

    export default {
        data() {
            return {
                email: "",
                name: "",
                firstname: "",
                password: "",
                confirmPassword: "",
                errorMessage: "",
                successMessage: ""
            };
        },
        methods: {
            async registerUser() {
                if (this.password !== this.confirmPassword) {
                    this.errorMessage = "Les mots de passe ne correspondent pas!";
                    return;
                }

                try {
                    let response = await register({
                        email: this.email,
                        password: this.password,
                        firstname: this.firstname,
                        name: this.name
                    });
        
                    if (response.message) {
                        this.successMessage = "Inscription réussie! Vous pouvez vous connecter maintenant.";
                        this.$router.push("/login");
                    }
                } catch (error) {
                    this.errorMessage = "Erreur lors de l'inscription.";
                }
            },
        }
    };
</script>
