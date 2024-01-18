<template>
  <q-page class="privacy-policy">
    <div class="mt-48 container mx-auto">
      <h1 class="text-6xl font-bold font-sans text-primary mb-10">Política de Privacidade do Essência Bahiana</h1>
      <p class="text-secondary text-lg mb-6">Saiba como o Essência Bahiana protege sua privacidade e dados pessoais, especialmente em conexão com o Google AdSense.</p>

      <p class="text-secondary text-lg mb-6">Bem-vindo ao Essência Bahiana! Prezamos pela transparência e compromisso com a segurança dos seus dados pessoais. Esta Política de Privacidade explica como coletamos, utilizamos e compartilhamos informações no âmbito de nossos serviços, incluindo, mas não se limitando à integração com o Google AdSense.</p>

      <h2 class="font-bold font-sans text-primary text-3xl">Introdução à Política de Privacidade</h2>
      <p class="text-secondary text-lg mb-6">A privacidade dos nossos usuários é de extrema importância para nós. O Essência Bahiana está comprometido em proteger as informações pessoais coletadas quando você acessa nosso conteúdo e serviços. Esta seção esclarece o propósito da nossa política e a importância de sua privacidade para nós.</p>

      <h2 class="font-bold font-sans text-primary text-3xl">Coleta de Informações</h2>
      <p class="text-secondary text-lg mb-6">Entender quais informações são coletadas e como são coletadas é fundamental. Aqui, explicamos os tipos de dados que o Essência Bahiana coleta, os métodos de coleta e como o consentimento do usuário é obtido.</p>

      <h2 class="font-bold font-sans text-primary text-3xl">Uso das Informações Coletadas</h2>
      <p class="text-secondary text-lg mb-6">As informações coletadas são utilizadas para melhorar continuamente nossos serviços, personalizar a experiência do usuário e cumprir obrigações legais. Este segmento aborda detalhadamente esses aspectos.</p>

      <h2 class="font-bold font-sans text-primary text-3xl">Integração com o Google AdSense</h2>
      <p class="text-secondary text-lg mb-6">O Google AdSense permite monetizar o conteúdo do site através de anúncios. Nesta seção, discutiremos como o Essência Bahiana integra o AdSense em suas operações e como isso afeta a coleta e o uso de dados.</p>

      <h2 class="font-bold font-sans text-primary text-3xl">Compartilhamento e Divulgação de Informações</h2>
      <p class="text-secondary text-lg mb-6">É importante entender em que circunstâncias suas informações podem ser compartilhadas. Aqui, explicamos quando e por que suas informações podem ser divulgadas, seja para parceiros terceirizados ou por requisitos legais.</p>

      <h2 class="font-bold font-sans text-primary text-3xl">Medidas de Segurança de Dados</h2>
      <p class="text-secondary text-lg mb-6">A segurança dos seus dados é uma prioridade. Neste segmento, abordamos as medidas de segurança implementadas para proteger seus dados, incluindo criptografia e protocolos de segurança.</p>

      <h2 class="font-bold font-sans text-primary text-3xl">Direitos do Usuário e Controle de Dados</h2>
      <p class="text-secondary text-lg mb-6">Você tem direitos significativos em relação aos seus dados pessoais. Aqui, explicamos como você pode acessar, corrigir ou excluir suas informações pessoais e quais são seus direitos de portabilidade de dados.</p>

      <h2 class="font-bold font-sans text-primary text-3xl">Cookies e Tecnologias de Rastreamento</h2>
      <p class="text-secondary text-lg mb-6">Cookies e outras tecnologias de rastreamento desempenham um papel crucial na personalização da experiência online. Neste segmento, explicamos como essas tecnologias são utilizadas no Essência Bahiana e como você pode gerenciar suas preferências.</p>

      <h2 class="font-bold font-sans text-primary text-3xl">Privacidade de Crianças</h2>
      <p class="text-secondary text-lg mb-6">A proteção de crianças online é extremamente importante. Aqui, discutimos as políticas do Essência Bahiana em relação à coleta e uso de dados de crianças, em conformidade com a COPPA.</p>

      <h2 class="font-bold font-sans text-primary text-3xl">Transferências Internacionais de Dados</h2>
      <p class="text-secondary text-lg mb-6">Como as informações podem ser transferidas internacionalmente, é crucial entender as políticas e salvaguardas em vigor. Esta seção detalha como o Essência Bahiana lida com transferências de dados transfronteiriças.</p>

      <h2 class="font-bold font-sans text-primary text-3xl">Websites e Serviços de Terceiros</h2>
      <p class="text-secondary text-lg mb-6">O Essência Bahiana pode conter links para sites externos. Aqui, explicamos como interagimos com esses sites de terceiros e a importância de revisar suas políticas de privacidade.</p>

      <FaqSection :faqs="faq"/>

    </div>
    <FooterComponent :firstTitle="firstTitle" :secondTitle="secondTitle" :copyRight="copyRight"/>
  </q-page>
</template>
<script setup>
import { ref } from 'vue'
import FaqSection from 'src/components/FaqSection.vue'
import FooterComponent from 'src/components/FooterComponent.vue'

const faq = ref([
  {
    question: 'Como o Essência Bahiana utiliza o Google AdSense para coletar dados?',
    answer: 'O Essência Bahiana utiliza o Google AdSense para exibir anúncios que são relevantes para os usuários. O Google AdSense utiliza cookies e outras tecnologias de rastreamento para coletar informações sobre as preferências dos usuários e o tipo de conteúdo que acessam. Essas informações são usadas para fornecer anúncios direcionados, melhorando assim a experiência do usuário e permitindo a monetização do site.',
    open: false,
  },
  {
    question: 'Quais são os direitos do usuário em relação aos dados coletados pelo Essência Bahiana?',
    answer: 'Usuários do Essência Bahiana têm o direito de acessar, corrigir ou excluir seus dados pessoais a qualquer momento. Além disso, os usuários têm o direito de se opor ou restringir o processamento de seus dados e o direito à portabilidade de dados. Para exercer esses direitos, os usuários podem entrar em contato diretamente com o Essência Bahiana através dos canais de suporte fornecidos.',
    open: false,
  },
  {
    question: 'Como posso gerenciar minhas preferências de cookies no Essência Bahiana?',
    answer: 'Os usuários podem gerenciar suas preferências de cookies nas configurações do navegador. Além disso, o Essência Bahiana fornece informações e opções para gerenciar preferências de cookies diretamente no site, permitindo que os usuários escolham aceitar, recusar ou personalizar o uso de cookies conforme necessário.',
    open: false,
  },
  {
    question: 'Que medidas de segurança o Essência Bahiana implementa para proteger os dados dos usuários?',
    answer: 'O Essência Bahiana implementa várias medidas de segurança para proteger os dados dos usuários, incluindo criptografia de dados, firewalls e protocolos de segurança para prevenir o acesso não autorizado. Além disso, realizamos treinamentos regulares de segurança para nossa equipe e mantemos políticas rigorosas para garantir a proteção e a privacidade dos dados dos usuários.',
    open: false,
  },
  {
    question: 'Como o Essência Bahiana lida com a privacidade das crianças?',
    answer: 'O Essência Bahiana leva a privacidade das crianças a sério e está em conformidade com a Lei de Proteção à Privacidade Online de Crianças (COPPA). Não coletamos intencionalmente informações de crianças menores de 13 anos. Se tivermos conhecimento de que informações foram coletadas de uma criança menor de 13 anos, tomaremos medidas imediatas para excluir tais informações.',
    open: false,
  },
  {
    question: 'O Essência Bahiana compartilha informações com outros países?',
    answer: 'O Essência Bahiana pode transferir informações para países fora do Brasil, especialmente em relação à integração com o Google AdSense. No entanto, asseguramos que todas as transferências de dados são realizadas em conformidade com as leis de proteção de dados aplicáveis e que medidas de segurança adequadas estão em vigor para proteger os dados durante a transferência e em seu destino final.',
    open: false,
  },
])

const firstTitle = ref('Essência')
const secondTitle = ref('Bahiana')
const copyRight = ref(`© ${ new Date().getFullYear() } Essencia Bahiana. Todos os direitos reservados.`)

</script>
