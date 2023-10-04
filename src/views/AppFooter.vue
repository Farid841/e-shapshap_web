<script setup></script>

<template>

    
    <!-- Footer Start -->
    <footer class="bg-theme-dark-blue py-10">
        <div class="container mx-auto px-5 ">
            <div class="grid md:grid-cols-3 items-center">
                
                <!-- Colonne Logo -->
                <div class="mb-10 md:mb-0 text-center md:text-left">
                    <a href="/" v-smooth-scroll><img src="../assets/logo.png" alt="Logo" /></a>
                </div>

                <!-- Première colonne de liens -->
                <div>
                    <ul class="flex flex-col space-y-5 md:space-y-0 text-xs text-center md:text-left font-theme-heading">
                        <li class="uppercase text-white hover:text-theme-secondary transition duration-200">
                            <a href="#" v-smooth-scroll>Recharge</a>
                        </li>
                        <li class="uppercase text-white hover:text-theme-secondary transition duration-200">
                            <a href="/about-us" v-smooth-scroll>A propos</a>
                        </li>

                    </ul>
                </div>

                <!-- Deuxième colonne de liens -->
                <div class="text-center md:text-left">
                    <ul class="flex flex-col space-y-5 md:space-y-0 text-xs">
                        <li class="uppercase text-white hover:text-theme-secondary transition duration-200">
                            <a href="/legal" v-smooth-scroll>Legal</a>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    <!-- Footer End -->
</template>

