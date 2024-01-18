<template>
  <div class="faq-container py-8">
    <div class="faq-title text-2xl font-bold mb-4 text-primary">
      Perguntas Frequentes (FAQs)
    </div>
    <div class="faq-content">
      <div v-for="(faq, index) in props.faqs" :key="index" class="faq-item mb-4 text-primary">
        <q-expansion-item
          expand-separator
          :label="faq.question"
        >
          <q-card>
            <q-card-section class="text-secondary">
             {{ faq.answer }}
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  faqs: {
    question: String,
    answer: String
  }
})

</script>
