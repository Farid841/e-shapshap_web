<script setup>
import LinkButton from '../components/LinkButton.vue';
</script>

<template>
    <!-- Hero Section Start -->
    <div class="container mx-auto px-5 overflow-x-hidden lg:overflow-x-visible ">
        <section class="grid grid-cols-none lg:grid-cols-2 pb-16 pt-8 items-center">
            <div class="lg:w-5/6 order-2 lg:order-none">
                <h1 class="text-4xl xl:text-5xl font-bold font-theme-heading text-center lg:text-left">Votre recharge en un clic !</h1>
                <p class="lg:text-xl mt-10 font-theme-content text-theme-grayish-blue text-center lg:text-left">✅ Rapide, sécurisé, disponible 24/7.
                    Dites adieu aux complications, essayez dès maintenant! 
                </p>
                <div class="flex justify-end mt-10">
                    <LinkButton btn-type="primary" link="#download-section" class="w-64 text-center flex items-center justify-center">Recharge</LinkButton>
                </div>
            </div>
            <div class="relative order-1 lg:order-none mb-20 lg:mt-0 lg:mb-0 lg:-mr-10">
                <img class="z-10 w-full" src="../assets/images/illustration-hero.svg" />
                <div class="-z-10 bg-blue-500 h-52 w-full sm:h-80 sm:w-full rounded-l-full absolute -right-28 md:-right-48 -bottom-8"></div>
            </div>
        </section>
    </div>
    <!-- Hero Section End -->
</template>
