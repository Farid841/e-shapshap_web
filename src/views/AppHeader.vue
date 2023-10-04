<script>
export default {
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggleOpen() {
      this.open = !this.open;
    }
  }
}
</script>

<template>
    <!-- Navbar Start -->
    <div class="container mx-auto px-5">
        <header class="flex justify-between py-12 items-center">
            <div>
                <a href="/"><img src="../assets/logo.png" alt="Site Logo" width="220"></a>
            </div>
            
            <nav class="flex justify-end flex-col md:flex-row">
                <!-- Menu Toggler -->
                <button @click="toggleMobileNav()" type="button" class="flex md:hidden focus:outline-none">
                    <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                        <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                    </svg>
                </button>

                <!-- Desktop Menu -->
                <ul class="space-x-10 font-theme-heading font-medium items-center hidden md:flex  flex-col space-y-7 md:space-y-0 md:flex-row">
    <li class="relative group uppercase hover:text-theme-secondary transition duration-200 cursor-pointer" @click="toggleOpen" @mouseover="open = true" @mouseleave="open = false">
      <a href="#" class="inline-block">Recharge</a>
      <ul v-show="open" @click="open = false" class="absolute left-0 mt-2 py-2 bg-white rounded shadow-lg border border-gray-200 text-gray-700">
        <li><a href="#link1" class="block px-4 py-2 hover:bg-gray-200">Link </a></li>
        <li><a href="#link2" class="block px-4 py-2 hover:bg-gray-200">Link</a></li>
      </ul>
    </li>
    <li class="uppercase hover:text-theme-secondary transition duration-200"><a href="/about-us">A propos</a></li>
    <li class="uppercase hover:text-theme-secondary transition duration-200"><a href="#subscribe"></a></li>
    <li class="uppercase bg-orange-500 hover:bg-orange-700 px-6 py-2 text-white rounded shadow-md hover:bg-white border-2 border-transparent hover:border-theme-secondary hover:text-theme-secondary cursor-pointer transition duration-200">
      <a href="/login">Connexion</a>
    </li>
  </ul>
            </nav>
        </header>

        <!-- Mobile Menu Start-->
        <div v-show="mobileNav">
            <div class="absolute px-5 py-12 block z-30 top-0 left-0 w-full h-full bg-gradient-to-b from-theme-dark-blue via-theme-dark-blue-tp to-theme-dark-blue">
                <div class="flex justify-between items-center">
                    <img src="/images/logo-bookmark-white.svg" alt="Logo">
                    <button @click="toggleMobileNav()" type="button" class="focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x text-white" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </button>
                </div>
                <ul class="uppercase text-white text-md tracking-widest items-center flex flex-col mt-14">
                    <li class="hover:text-theme-secondary transition duration-200 py-4 border-t border-b border-theme-grayish-blue w-full text-center">
                        <a  @click="toggleMobileNav()" href="#features">Recharge</a>
                    </li>
                    <li class="hover:text-theme-secondary transition duration-200 py-4 border-b border-theme-grayish-blue w-full text-center">
                        <a  @click="toggleMobileNav()" href="/about-us">A propos</a>
                    </li>
                    
                     <li class="bg-transparent border-2 rounded px-6 py-2 mt-6 w-full text-center cursor-pointer hover:text-theme-secondary transition duration-200" style="backgroundColor:'#ff7f00'">
                        <a @click="toggleMobileNav()" href="/login">Connexion</a>
                    </li>
                </ul>          

            </div>
        </div>
        <!-- Mobile Menu End-->
    </div>
    <!-- Navbar End -->
</template>