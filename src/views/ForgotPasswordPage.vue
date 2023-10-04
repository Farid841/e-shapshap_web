<template>

    <section class="container mx-auto px-5 md:w-4/5 ">
      <div class="h-full ">
        <div class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img src="../assets/images/Forgot-password.svg" class="w-full" alt="forgot password" />
          </div>
    
          <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form @submit.prevent="sendResetEmail" class="border border-gray-300 p-4 rounded">
    
              <!-- Forgot Password Header -->
              <div class="flex flex-col items-center justify-center mb-4">
                <h2 class="text-lg font-semibold">Forgot Password</h2>
                <p class="text-sm text-gray-500">Enter your email to receive reset instructions</p>
              </div>
    
              <!-- Email input -->
              <div class="relative mb-6">
                  <input type="text" v-model="email" class="peer block w-full rounded border bg-gray-100 px-3 py-2 outline-none transition-all focus:placeholder-opacity-0" id="emailInput" placeholder="" required />
                  <label for="emailInput" class="absolute left-3 top-2 text-gray-700 transition-all peer-focus:-top-6 peer-focus:text-primary">Email address</label>
              </div>
    
              <!-- Submit button -->
              <div class="text-center">
                <button type="submit" class="inline-block px-7 py-3 rounded bg-blue-500 text-white font-medium transition duration-150 ease-in-out hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-700">
                  Send Email
                </button>
    
                <p class="text-center text-red-500 mt-2" v-if="errorMessage">{{ errorMessage }}</p>
    
                <!-- Back to login link -->
                <p class="mb-0 mt-2 pt-1 text-sm font-semibold"> Remembered? 
                  <a href="/login" class="text-red-500 hover:text-red-600 focus:outline-none underline focus:text-red-700"> Back to Login </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    
    </template>
    
    <script>
    import { forgotPassword } from '@/services/api.js';
    
    export default {
      data() {
        return {
          email: '',
          errorMessage: ''
        };
      },
      methods: {
        async sendResetEmail() {
            try {
                const response = await forgotPassword({ email: this.email });
                // Si l'API renvoie un succès, affichez un message ou redirigez
                if (response) {
                    this.errorMessage = "Un e-mail de réinitialisation a été envoyé à " + this.email + ".";
                } else {
                    this.errorMessage = "Une erreur est survenue. Veuillez réessayer plus tard.";
                }
            } catch (error) {
                console.error('Error sending reset email:', error);
                this.errorMessage = "Erreur lors de l'envoi de l'e-mail de réinitialisation. Veuillez réessayer.";
            }
        }   
     }
    };
    </script>
    
    <style scoped>
    /* Add any additional styles specific to this page */
    </style>
    