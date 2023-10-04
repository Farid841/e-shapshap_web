<template>
  <!-- Notre Mission -->
  <!-- Notre Mission -->
  <section class="bg-gray-100 p-10 mt-10 rounded-lg relative">
      <div class="text-center mb-6">
          <h2 class="text-3xl md:text-4xl font-semibold mb-4">Notre Mission</h2>
          <p>Chez One Clic Recharge, nous croyons en la simplicité et l'efficacité. Notre ambition est de faciliter la recharge téléphonique en ligne pour tous, partout dans le monde.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
                <img src="../assets/images/speed.svg" alt="Image illustrant notre mission" class="mx-auto mb-4 h-24 w-24 object-cover rounded-full shadow">
                <h3 class="text-xl font-semibold  mb-2">Facilité</h3>
                <p class="text-orange-500 ">Une recharge en un clic, sans tracas.</p>
            </div>
            <div class="text-center">
                <img src="../assets/images/work.svg" alt="Image illustrant notre histoire" class="mx-auto mb-4 h-24 w-24 object-cover rounded-full shadow">
                <h3 class="text-xl font-semibold  mb-2">Engagement</h3>
                <p class="text-orange-500">Nous travaillons chaque jour pour améliorer nos services.</p>
            </div>
            <div class="text-center">
                <img src="../assets/images/trust.svg" alt="Image représentant nos valeurs" class="mx-auto mb-4 h-24 w-24 object-cover rounded-full shadow">
                <h3 class="text-xl font-semibold mb-2">Intégrité</h3>
                <p class="text-orange-500">Votre confiance est notre priorité. Transactions sécurisées garanties.</p>
            </div>
        </div>
    </section>
  <!-- Notre Histoire -->
  <section class="bg-white p-10 mt-10 rounded-lg relative">
      <div class="grid md:grid-cols-2 gap-8">
          <!-- Notre Histoire -->
          <div>
              <div class="text-center mb-6">
                  <h2 class="text-3xl md:text-4xl font-semibold mb-4">Notre Histoire</h2>
                  <p>Nés du désir de rendre les recharges téléphoniques plus accessibles, nous avons créé One Clic Recharge pour éliminer les obstacles et rapprocher les gens, où qu'ils soient.</p>
              </div>
          </div>
          <!-- L'histoire de toto -->
          <div>
              <div class="text-center mb-6">
                  <h3 class="text-2xl font-semibold mb-4">L'histoire </h3>
                  <p class="mt-4">
                    Toto, une jeune professionnelle, était en voyage d'affaires en Asie. Au beau milieu de sa conférence, elle s'est rendu compte que son crédit téléphonique était presque épuisé.
                    Elle avait besoin de passer un appel important, mais elle se trouvait dans un endroit inconnu, sans moyen de recharger son téléphone rapidement.
                    C'est là qu'elle a découvert  <strong> One Clic Recharge</strong>  . En quelques clics, elle a pu recharger son téléphone, passer son appel et conclure son affaire. Grâce à notre plateforme, 
                    Toto n'a pas eu à chercher un kiosque de recharge ou attendre. Elle a pu continuer son voyage sans interruption.
                  </p>
                  <p class ="mt-4">
                    Des histoires comme celle de Toto, il y en a des milliers grâce à <strong> One Clic Recharge</strong>. Notre mission est de faciliter la vie des personnes comme elle, qui ont besoin de rester connectées, 
                    peu importe où elles se trouvent.
                  </p>
              </div>
          </div>
      </div>
      <div class="text-center mt-8">
          <a href="link_to_app" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full">Découvrez maintenant</a>
      </div>
  </section>

  <!-- Entreprise Partenaire -->
  <section class="bg-gray-100 p-10 mt-10 rounded-lg relative">
    <div class="text-center mb-6">
        <h2 class="text-3xl md:text-4xl font-semibold mb-4">Notre Entreprise Partenaire</h2>
        <img src="../assets/images/vmcom.png" alt="Logo VM COM" class="mx-auto mb-6 h-24 w-auto">
        <p>Nous sommes fiers de collaborer avec <strong>VM COM</strong>, une entreprise reconnue pour son excellence et son engagement envers ses clients. Notre partenariat avec VM COM renforce notre capacité à offrir des services de qualité supérieure à nos clients.</p>
    </div>
    <div class="text-center mt-8">
        <a href="https://www.vmcomm1.com/" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full">En savoir plus sur VM COM</a>
    </div>
  </section>



</template>
  
  <script>
  export default {
    name: 'AboutPage',
    data() {
      return {
        // Données si nécessaire
      }
    },
    methods: {
      // Méthodes si nécessaire
    }
  }
  </script>
  
  <style scoped>
  /* Vous pouvez ajouter des styles supplémentaires si vous en avez besoin, même si nous utilisons principalement Tailwind ici */
  </style>
  