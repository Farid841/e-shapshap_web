<script setup>

import LinkButton from '../components/LinkButton.vue';


</script>

<template>
    <!-- Features Section Start -->
    <div id="features" class="container mx-auto px-5">
        <section class="py-16">
            <div class="w-4/5 md:w-3/5 mx-auto" style="background-image: url('../assets/images/vmcom.png'); background-size: cover; background-position: center;">
                <h2 class="text-3xl md:text-4xl font-semibold font-theme-heading text-center">Notre Associé de Confiance</h2>
                <p class="text-theme-grayish-blue text-center mt-7 font-theme-content text-lg">
                    Nous sommes ravis de collaborer étroitement avec VM COM, une entreprise dynamique dans le domaine de la communication. Cette union stratégique nous permet de diversifier notre offre et d'apporter toujours plus de valeur à nos clients.
                </p>
            </div>
            <div class="mt-16">
                <!-- Tab Content -->
                <div class="grid gap-32 lg:grid-cols-2 items-center">
                    <div class="relative">
                        <img class="z-10 w-full" src="../assets/images/vmcom.png" alt="VM COM Image">
                        <div class="-z-10 bg-theme-primary h-52 w-96 sm:h-80 sm:w-full rounded-r-full absolute -left-56 -bottom-16">VM COM</div>
                    </div>
                    <div>
                        <h3 class="font-theme-heading text-2xl md:text-3xl font-medium text-center lg:text-left"></h3>
                        <p class="mt-7 font-theme-content text-lg text-theme-grayish-blue text-center lg:text-left"></p>
                        <div class="flex justify-center lg:justify-start mt-7">
                            <a href="http:///www.vmcomm1.com/" target="_blank" rel="noopener noreferrer"><LinkButton btn-type="primary" target="_blank" rel="noopener noreferrer">Voir</LinkButton> </a>
                        </div>
                    </div>
                </div>
                <!-- End of Tab Content -->
            </div>
        </section>
    </div>
    <!-- Features Section End -->
</template>
