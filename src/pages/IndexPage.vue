<template>
  <q-page class="flex flex-center w-full">
    <Hero :image="image" :firstTitle="firstTitle" :secondTitle="secondTitle" :subtitle="subtitle"/>
    <SelectionBar />
    <TransferSection />
    <ContactSection />
    <FooterComponent :firstTitle="firstTitle" :secondTitle="secondTitle" :copyRight="copyRight"/>
  </q-page>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue'
import { useMeta } from 'quasar'

const Hero = defineAsyncComponent(() =>
  import('src/components/HeroComponent.vue')
);
const SelectionBar = defineAsyncComponent(() =>
  import('src/components/SelectionBar.vue')
);
const TransferSection = defineAsyncComponent(() =>
  import('src/components/TransferSection.vue')
);
const FooterComponent = defineAsyncComponent(() =>
  import('src/components/FooterComponent.vue')
);
const ContactSection = defineAsyncComponent(() =>
  import('src/components/ContactSection.vue')
);
/*const EventsSection = defineAsyncComponent(() =>
  import ('src/components/EventsSection.vue')
)*/


const firstTitle = ref('Essência')
const secondTitle = ref('Bahiana')
const subtitle = ref('Descubra a Magia e a Cultura Única da Terra do Descobrimento')
const image = ref('/hero.webp')
const copyRight = ref(`© ${ new Date().getFullYear() } Essencia Bahiana. Todos os direitos reservados.`)

useMeta({
  title: 'Essência BAHIANA',
  meta:
  {
    description: {
      name: 'description',
      content: "Descubra o melhor de Porto Seguro com a Essência Bahiana. Oferecemos passeios personalizados e traslados confortáveis para uma experiência de viagem autêntica e memorável na Bahia.",
    },
    equiv: {
      'http-equiv': 'Content-Type',
      content: 'text/html; charset=UTF-8'
    },
    keywords: {
      name: 'keywords',
      content: "Porto Seguro, Pontos turísticos em Porto Seguro, Passeios em Porto Seguro, Traslados em Porto Seguro, Turismo na Bahia, Viagens pela Bahia, Melhores experiências em Porto Seguro, Roteiros de viagem em Porto Seguro, Atrações turísticas na região, Serviço de transporte em Porto Seguro, Roteiro de viagem personalizado, Dicas de viagem para Porto Seguro, Destinos na Bahia, Planejamento de viagem, Experiências memoráveis na Bahia."
    },
    ogTitle: {
      property: 'og:title',
      template () {
        return `Essência BAHIANA`
      }
    },
    ogDescription: {
      property: 'og:description',
      template () {
        return "Descubra o melhor de Porto Seguro com a Essência Bahiana. Oferecemos passeios personalizados e traslados confortáveis para uma experiência de viagem autêntica e memorável na Bahia."
      }
    },
    ogImage: {
      property: 'og:image',
      template() {
        return  `https://essenciabahiana.com.br/hero.webp`
      }
    },
    twitterTitle: {
      property: 'twitter:title',
      template () {
        return `Essência BAHIANA`
      }
    },
    twitterDescription: {
      property: 'twitter:description',
      template () {
        return "Descubra o melhor de Porto Seguro com a Essência Bahiana. Oferecemos passeios personalizados e traslados confortáveis para uma experiência de viagem autêntica e memorável na Bahia."
      }
    },
    twitterImage: {
      property: 'twitter:image',
      template() {
        return  `https://essenciabahiana.com.br/hero.webp`
      }
    }
  }

})

</script>
