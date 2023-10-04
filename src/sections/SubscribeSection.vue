<script setup>
import { ref } from "vue";
import Swal from "sweetalert2";
import { sendEmail } from '@/services/api.js'; // Assurez-vous que sendEmail est exporté depuis api.js

let nom = ref("");
let email = ref("");
let sujet = ref("");
let message = ref("");
let erreurContact = ref(false);

const soumettreForm = async () => {
    if (!nom.value || !email.value || !sujet.value || !message.value) {
        erreurContact.value = true;
    } else {
        try {
            await sendEmail(nom.value, email.value, sujet.value, message.value);
        } catch (erreur) {
            // Traitez l'erreur si nécessaire. Par exemple, vous pourriez afficher une autre Swal ici.
            Swal.fire({
                icon: "error",
                title: "Oups...",
                text: "Il y a eu un problème lors de l'envoi de l'email. Veuillez réessayer plus tard.",
            });
            return;
        }

        Swal.fire({
            icon: "success",
            title: "Message envoyé",
            text: `Merci, ${nom.value} ! Nous reviendrons vers vous rapidement.`,
        });
    }
};
</script>

<template>
    <!-- Section Formulaire de Contact Début -->
    <div id="contact" class="bg-blue-500 mt-10">
        <div class="container w-full lg:w-2/5 mx-auto px-5">
            <section class="py-16">
                <h4 class="text-sm tracking-widest uppercase text-center text-white font-theme-heading">Contactez-nous</h4>
                <h2 class="text-3xl md:text-4xl font-medium text-center text-white mt-9 mb-10 font-theme-heading">Nous sommes là pour vous aider</h2>

                <form @submit.prevent="soumettreForm()">
                    <div class="space-y-8"> <!-- Ici, j'ai changé space-y-4 à space-y-8 -->
                        <!-- Entrée Nom -->
                        <div class="relative font-theme-content">
                            <input v-model="nom" class="w-full py-3 px-5 text-sm text-gray-600 border-0 shadow-md rounded focus:ring-4 focus:ring-blue-300" type="text" name="nom" placeholder="Votre Nom" />
                            <div v-show="erreurContact && !nom.value" class="absolute w-full text-xs italic px-2 py-1 bg-theme-secondary text-white rounded">Veuillez entrer votre nom</div>
                        </div>

                        <!-- Entrée Email -->
                        <div class="relative font-theme-content">
                            <input v-model="email" class="w-full py-3 px-5 text-sm text-gray-600 border-0 shadow-md rounded focus:ring-4 focus:ring-blue-300" type="email" name="email" placeholder="Votre Email" />
                            <div v-show="erreurContact && !email.value" class="absolute w-full text-xs italic px-2 py-1 bg-theme-secondary text-white rounded">Veuillez entrer votre email</div>
                        </div>

                        <!-- Entrée Sujet -->
                        <div class="relative font-theme-content">
                            <input v-model="sujet" class="w-full py-3 px-5 text-sm text-gray-600 border-0 shadow-md rounded focus:ring-4 focus:ring-blue-300" type="text" name="sujet" placeholder="Sujet" />
                            <div v-show="erreurContact && !sujet.value" class="absolute w-full text-xs italic px-2 py-1 bg-theme-secondary text-white rounded">Veuillez entrer un sujet</div>
                        </div>

                        <!-- Zone de texte Message -->
                        <div class="relative font-theme-content">
                            <textarea v-model="message" rows="5" class="w-full py-3 px-5 text-sm text-gray-600 border-0 shadow-md rounded focus:ring-4 focus:ring-blue-300" name="message" placeholder="Votre Message"></textarea>
                            <div v-show="erreurContact && !message.value" class="absolute w-full text-xs italic px-2 py-1 bg-theme-secondary text-white rounded">Veuillez entrer un message</div>
                        </div>

                        <Button type="submit" btn-type="secondary" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded shadow-lg">
                            Envoyer
                        </Button>

                    </div>
                </form>
            </section>
        </div>
    </div>
    <!-- Section Formulaire de Contact Fin -->
</template>
