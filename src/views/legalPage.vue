<template>
    <div class="container mx-auto p-5">
      <!-- Titre de la page -->
      <h1 class="text-2xl font-bold mb-5">Mentions Légales</h1>
  
      <!-- Liste des boutons -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <router-link to="/terms-of-service" class="btn-legal">Conditions générales d'utilisation (CGU)</router-link>
        <router-link to="/terms-of-service" class="btn-legal">Conditions générales de vente (CGV)</router-link>
        <router-link to="/terms-of-service" class="btn-legal">Informations sur la protection des données</router-link>
        <router-link to="/privacy-policy" class="btn-legal">Politique de confidentialité</router-link>
        <router-link to="/cookie-policy" class="btn-legal">Politique des cookies</router-link>
        <router-link to="/return-policy" class="btn-legal">Politique de retour</router-link>
        <!-- Ajoutez d'autres boutons selon vos besoins -->
         
        Mentions légales
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LegalPage'
  }
  </script>
  
  <style scoped>
  /* Utilisation de classes Tailwind pour définir le style du bouton */
  .btn-legal {
    @apply block text-center bg-blue-500 text-white py-2 px-4 rounded transition-colors duration-200;
  }
  
  .btn-legal:hover {
    @apply bg-orange-600;
  }
  </style>
  