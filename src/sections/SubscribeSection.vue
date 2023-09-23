<script setup>
import { ref } from "vue";
import Swal from "sweetalert2";
import { sendEmail } from '@/services/api.js'; // Assurez-vous que sendEmail est exporté de api.js

let name = ref("");
let email = ref("");
let subject = ref("");
let message = ref("");
let contactError = ref(false);

const handleSubmit = async () => {
    if (!name.value || !email.value || !subject.value || !message.value) {
        contactError.value = true;
    } else {
        try {
            await sendEmail(name.value, email.value, subject.value, message.value);
        } catch (error) {
            // Traiter l'erreur si besoin. Par exemple, vous pourriez montrer un autre Swal ici.
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "There was an issue sending the email. Please try again later.",
            });
            return;
        }

        Swal.fire({
            icon: "success",
            title: "Message Sent",
            text: `Thank you, ${name.value}! We will get back to you shortly.`,
        });
    }
};
</script>


<template>
    <!-- Contact Form Section Start -->
    <div id="contact" class="bg-theme-primary mt-10">
        <div class="container w-full lg:w-2/5 mx-auto px-5">
            <section class="py-16">
                <h4 class="text-sm tracking-widest uppercase text-center text-white font-theme-heading">Contact Us</h4>
                <h2 class="text-3xl md:text-4xl font-medium text-center text-white mt-9 mb-10 font-theme-heading">We're here to help</h2>

                <form @submit.prevent="handleSubmit()">
                    <div class="space-y-8"> <!-- Ici j'ai changé space-y-4 à space-y-8 -->
                        <!-- Name Input -->
                        <div class="relative font-theme-content">
                            <input v-model="name" class="w-full py-3 px-5 text-sm text-gray-600 border-0 shadow-md rounded focus:ring-4 focus:ring-blue-300" type="text" name="name" placeholder="Your Name" />
                            <div v-show="contactError && !name.value" class="absolute w-full text-xs italic px-2 py-1 bg-theme-secondary text-white rounded">Please enter your name</div>
                        </div>

                        <!-- Email Input -->
                        <div class="relative font-theme-content">
                            <input v-model="email" class="w-full py-3 px-5 text-sm text-gray-600 border-0 shadow-md rounded focus:ring-4 focus:ring-blue-300" type="email" name="email" placeholder="Your Email" />
                            <div v-show="contactError && !email.value" class="absolute w-full text-xs italic px-2 py-1 bg-theme-secondary text-white rounded">Please enter your email</div>
                        </div>

                        <!-- Subject Input -->
                        <div class="relative font-theme-content">
                            <input v-model="subject" class="w-full py-3 px-5 text-sm text-gray-600 border-0 shadow-md rounded focus:ring-4 focus:ring-blue-300" type="text" name="subject" placeholder="Subject" />
                            <div v-show="contactError && !subject.value" class="absolute w-full text-xs italic px-2 py-1 bg-theme-secondary text-white rounded">Please enter a subject</div>
                        </div>

                        <!-- Message Textarea -->
                        <div class="relative font-theme-content">
                            <textarea v-model="message" rows="5" class="w-full py-3 px-5 text-sm text-gray-600 border-0 shadow-md rounded focus:ring-4 focus:ring-blue-300" name="message" placeholder="Your Message"></textarea>
                            <div v-show="contactError && !message.value" class="absolute w-full text-xs italic px-2 py-1 bg-theme-secondary text-white rounded">Please enter a message</div>
                        </div>

                        <Button type="submit"  btn-type="secondary" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg">
                            Envoyez
                        </Button>
                    </div>
                </form>
            </section>
        </div>
    </div>
    <!-- Contact Form Section End -->
</template>

