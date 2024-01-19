<template>
  <div class="contact-section bg-dark-page text-light-gray p-10" id="contact">
    <div class="container mx-auto">
      <div class="text-center mb-10">
        <h2 class="text-6xl font-bold text-primary mb-2">Entre em Contato</h2>
        <p class="text-secondary text-xl">Estamos prontos para atendê-lo!</p>
      </div>

      <div class="grid grid-cols-1 gap-8">
        <div class="contact-info ">

          <WhatsAppBtn text="Converse pelo WhatsApp" />

        </div>

        <div class="contact-form">
          <p class="text-accent">Ou preencha o formulário abaixo:</p>
          <form @submit.prevent="submitForm">
            <q-input
              filled
              v-model="name"
              ref="nameRef"
              :rules="[val => !!val || 'Nome é obrigatório.']"
              label="Nome"
              class="mb-4"
              color="primary" />
            <q-input
              filled
              v-model="email"
              label="E-mail"
              class="mb-6"
              color="primary" />
            <q-input
              filled
              v-model="phone"
              label="Telefone"
              class="mb-6"
              color="primary" />
            <q-input
              filled
              v-model="subject"
              ref="subjectRef"
              :rules="[val => !!val || 'Assunto é obrigatório.']"
              label="Assunto"
              class="mb-4"
              color="primary" />
            <q-input
              filled
              v-model="message"
              ref="messageRef"
              :rules="[val => !!val || 'Mensagem é obrigatório.']"
              label="Mensagem"
              type="textarea"
              class="mb-4"
              color="primary" />


            <q-btn label="Enviar Mensagem" type="submit" color="secondary" class="w-full" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import WhatsAppBtn from './WhatsAppBtn.vue'
import emailjs from '@emailjs/browser'

const $q = useQuasar()
const name = ref('')
const subject = ref('')
const message = ref('')
const phone = ref('')
const email   = ref('')
const nameRef = ref(null)
const subjectRef = ref(null)
const messageRef = ref(null)


const submitForm = () => {

  $q.loading.show()

  nameRef.value.validate()
  subjectRef.value.validate()
  messageRef.value.validate()

  if(nameRef.value.hasError || subjectRef.value.hasError || messageRef.value.hasError) {
    $q.notify({
      position: 'center',
      color: 'negative',
      message: 'Preencha todos os campos do formulário!'
    })
  } else {

    // Configuração do serviço de email
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID // Substitua pelo seu Service ID
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID // Substitua pelo seu Template ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    // Parâmetros do email
    const params = {
      name: name.value,
      phone:  phone.value,
      email: email.value,
      subject: subject.value,
      message: message.value
    }

    // Envio do email
    emailjs.send(serviceID, templateID, params, publicKey)
      .then((response) => {

        $q.loading.hide()

        $q.notify({
            position: 'center',
            icon: 'done',
            color: 'positive',
            message: 'Email enviado com sucesso!'
          })

        // Limpar os campos de entrada
        name.value = ''
        email.value = ''
        message.value = ''
        phone.value = ''
        subject.value = ''
      })
      .catch((error) => {
        $q.loading.hide()
        $q.notify({
            color: 'negative',
            message: 'Erro ao enviar o email: ' . error
          })
        console.error('Erro ao enviar o email:', error)
      })

  }

}
</script>

