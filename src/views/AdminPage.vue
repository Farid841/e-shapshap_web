<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="admin-container bg-white p-8 rounded-lg shadow-md w-1/3">
        <h2 class="text-xl font-bold mb-4">Bienvenue, Administrateur</h2>
  
        <div class="button-group space-y-4">
          <button class="btn w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded">Bouton 1</button>
          <button class="btn w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded">Bouton 2</button>
          <button @click="openModal" class="btn w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded">Envoyer un mail ?</button>
        </div>
      </div>

      <!-- Email Modal -->
      <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="closeModal"></div>

          <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                Envoyer un email
              </h3>
              <div class="mt-2">
                <input v-model="subject" type="text" placeholder="Objet" class="w-full p-2 border rounded mt-2">
                <textarea v-model="message" placeholder="Contenu du message" class="w-full p-2 border rounded mt-2 h-40"></textarea>
              </div>
            </div>
            <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <button @click="confirmSendEmail" class="btn w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded sm:ml-2">Envoyer à tout le monde</button>
              <button @click="closeModal" class="btn w-full py-2 px-4 border border-gray-300 text-gray-700 hover:bg-gray-100 rounded sm:ml-2">Annuler</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      subject: '',
      message: ''
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.subject = '';
      this.message = '';
    },
    confirmSendEmail() {
      if (confirm("Voulez-vous vraiment envoyer cet email à tout le monde?")) {
        this.sendEmail();
        this.closeModal();
      }
    },
    sendEmail() {
      // Insérez votre logique pour envoyer un email ici.
      console.log(`Sujet: ${this.subject}`);
      console.log(`Message: ${this.message}`);
    }
  }
}
</script>
