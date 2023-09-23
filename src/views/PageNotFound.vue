<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="text-center space-y-4">
        <h1 class="text-6xl font-extrabold text-gray-900">404</h1>
        <h2 class="text-xl font-medium text-gray-700">Page non trouvée</h2>
        <p class="text-gray-500">La page que vous recherchez n'est pas disponible ou a été déplacée.</p>
        <router-link to="/" class="text-blue-500 hover:underline">Retourner à la page d'accueil</router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'PageNotFound'
}
</script>

<style scoped>
/* Votre CSS supplémentaire si nécessaire */
</style>
