import{Q as N,_ as R}from"./FooterComponent.eb2f4cba.js";import{u as z}from"./use-meta.dd1633b9.js";import{Q as $}from"./QImg.3889eed3.js";import{ab as d,ac as v,ad as y,f as c,ag as I,aj as E,ao as g,ak as j,r as l,ap as x,ai as a,ah as S,F as V,aq as B,ar as F,as as f}from"./index.88b01d17.js";import{u as M}from"./use-quasar.1f7450a0.js";const b={__name:"WhatsAppBtn",props:{text:String},setup(t){const e=()=>{const i="https://wa.me/5511993271622";window.open(i,"_blank")};return(s,i)=>(d(),v(j,{align:"left",size:"md",class:"py-2 rounded bg-white text-primary my-5 mt-auto shadow-2xl flex justify-start mx-auto",onClick:e},{default:y(()=>[c(I,{size:"40px",class:"mr-5"},{default:y(()=>[c($,{src:"zap-icon.webp",alt:"\xCDcone Whatsapp"})]),_:1}),E(" "+g(t.text),1)]),_:1}))}},O={class:"relative w-full h-screen overflow-hidden flex justify-center items-center"},H={class:"absolute top-0 left-0 w-full h-full"},L=a("div",{class:"absolute top-0 left-0 w-full h-full bg-black opacity-15"},null,-1),Q={class:"absolute top-0 max-w-2xl w-full h-full flex p-5 flex-col py-[200px] justify-center md:justify-start items-center text-center text-white z-10"},U={class:"text-5xl md:text-[80px] text-white font-bold mb-6 font-sans leading-3 shadow-primary drop-shadow-lg"},W={class:"text-6xl md:text-[120px] leading-normal uppercase"},K={class:"text-3xl md:text-3xl text-shadow-outline text-white font-open"},J={__name:"HeroComponent",props:{image:String,firstTitle:String,secondTitle:String,subtitle:String},setup(t){const e=l("Converse Conosco");return(s,i)=>(d(),x("section",O,[a("div",H,[c($,{src:t.image,alt:"Praia em Porto Seguro Bahia",class:"object-cover object-[85%] md:object-center w-full h-full"},null,8,["src"])]),L,a("div",Q,[a("h1",U,[E(g(t.firstTitle)+" ",1),a("span",W,g(t.secondTitle),1)]),a("p",K,g(t.subtitle),1),c(b,{text:e.value},null,8,["text"])])]))}},G=["src"],X={class:"text-white text-lg"},Y={__name:"SelectionBarItem",props:{bgColor:String,icon:String,text:String},setup(t){return(e,s)=>(d(),x("div",{class:S(`hover:scale-105 hover:shadow-2xl cursor-pointer ease-in-out duration-300 flex flex-col
  justify-center items-center ${t.bgColor} p-5`)},[a("img",{src:t.icon,alt:"",class:"w-20 h-20"},null,8,G),a("p",X,g(t.text),1)],2))}},Z={class:"w-full h-auto md:h-44 bg-white flex justify-center"},ee={class:"w-full grid grid-cols-3 md:grid-cols-6"},te={__name:"SelectionBar",setup(t){const e=l([{bgColor:"bg-secondary",icon:"drink.svg",text:"Festas"},{bgColor:"bg-accent",icon:"bus.svg",text:"Traslados"},{bgColor:"bg-secondary",icon:"boat.svg",text:"Passeios"},{bgColor:"bg-accent",icon:"beach.svg",text:"Praias"},{bgColor:"bg-secondary",icon:"dive.svg",text:"Mergulhos"},{bgColor:"bg-accent",icon:"food.svg",text:"Gastronomia"}]);return(s,i)=>(d(),x("section",Z,[a("div",ee,[(d(!0),x(V,null,B(e.value,r=>(d(),v(Y,{bgColor:r.bgColor,icon:r.icon,text:r.text,key:r.text},null,8,["bgColor","icon","text"]))),128))])]))}},ae={class:"flex flex-row max-w-[1000px] px-6 mx-auto mb-20 justify-between"},se=["src","alt"],oe={class:"text-sans font-bold text-secondary text-3xl md:text-4xl mb-6"},re={class:"text-white text-lg mb-6"},ie={__name:"TransferCard",props:{image:String,alt:String,title:String,text:String,customCss:String,order:Boolean},setup(t){const e=l("Saiba mais");return(s,i)=>(d(),x("figure",ae,[a("img",{src:t.image,alt:t.alt,class:S(` w-full md:w-1/3 object-cover object-bottom aspect-square drop-shadow-md w-[315px] h-[315px] ${t.order?"md:order-2":""}`)},null,10,se),a("figcaption",{class:S(`w-full md:w-2/3 md:px-10 flex flex-col justify-start items-start py-6 ${t.customCss}`)},[a("h2",oe,g(t.title),1),a("p",re,g(t.text),1),c(b,{text:e.value},null,8,["text"])],2)]))}},ne={class:"w-full min-h-[500px] bg-primary py-20"},le={class:"container flex flex-col mx-auto"},ce=a("header",{class:"px-6 max-w-[1000px] mb-16 md:mb-28"},[a("h1",{class:"font-sans text-3xl md:text-6xl text-accent font-bold mb-2 md:mb-5"},"Explore Porto Seguro com Conforto e Seguran\xE7a"),a("p",{class:"text-secondary text-lg md:text-2xl"},"Traslados e Passeios Personalizados")],-1),ue={class:"flex flex-col w-full max-w-[800px] px-6 md:mx-auto"},me=a("h2",{class:"text-accent text-3xl md:text-6xl font-bold mb-6 text-center md:text-left"},"Pronto para Descobrir Porto Seguro?",-1),de=a("p",{class:"text-white text-lg md:text-xl mb-10"},"N\xE3o espere mais para planejar a viagem dos seus sonhos! Clique aqui e fa\xE7a j\xE1 a sua cota\xE7\xE3o de traslados via WhatsApp. R\xE1pido, f\xE1cil e seguro \u2013 seu Porto Seguro est\xE1 a apenas uma mensagem de dist\xE2ncia!",-1),pe={__name:"TransferSection",setup(t){const e=l([{image:"van-1.webp",alt:"Van na praia.",title:"Traslados e Passeios Personalizados",text:"Explore as maravilhas de Porto Seguro com nossos passeios exclusivos e traslados confort\xE1veis. Seu parceiro ideal em turismo, garantindo aventuras inesquec\xEDveis e seguran\xE7a em cada viagem!",customCss:"",order:!1},{image:"van-2.webp",alt:"Van na Praia do Espelho",title:"Explore o Cora\xE7\xE3o da Bahia com Estilo! ",text:"Porto Seguro espera por voc\xEA com suas praias deslumbrantes e hist\xF3ria rica. Desfrute de experi\xEAncias \xFAnicas com nossos tours especializados e servi\xE7os de traslado de primeira classe, projetados para proporcionar conforto e conveni\xEAncia em suas aventuras tropicais.",customCss:"md:pl-0 md:pr-20",order:!0},{image:"van-3.webp",alt:"turistas felizes dentro da Van",title:"Viva a Magia de Porto Seguro!",text:"Embarque em uma jornada extraordin\xE1ria pelos encantos naturais e culturais de Porto Seguro. Oferecemos itiner\xE1rios personalizados e servi\xE7os de qualidade para tornar cada momento de sua viagem memor\xE1vel e cheio de descobertas.",customCss:"",order:!1}]),s=l("Fa\xE7a uma cota\xE7\xE3o");return(i,r)=>(d(),x("section",ne,[a("div",le,[ce,(d(!0),x(V,null,B(e.value,o=>(d(),v(ie,{image:o.image,title:o.title,text:o.text,customCss:o.customCss,order:o.order,alt:o.alt,key:o.image},null,8,["image","title","text","customCss","order","alt"]))),128)),a("footer",ue,[me,de,c(b,{text:s.value},null,8,["text"])])])]))}},h={_origin:"https://api.emailjs.com"},xe=(t,e="https://api.emailjs.com")=>{h._userID=t,h._origin=e},D=(t,e,s)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class C{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const k=(t,e,s={})=>new Promise((i,r)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:n})=>{const p=new C(n);p.status===200||p.text==="OK"?i(p):r(p)}),o.addEventListener("error",({target:n})=>{r(new C(n))}),o.open("POST",h._origin+t,!0),Object.keys(s).forEach(n=>{o.setRequestHeader(n,s[n])}),o.send(e)}),ge=(t,e,s,i)=>{const r=i||h._userID;D(r,t,e);const o={lib_version:"3.12.1",user_id:r,service_id:t,template_id:e,template_params:s};return k("/api/v1.0/email/send",JSON.stringify(o),{"Content-type":"application/json"})},fe=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},he=(t,e,s,i)=>{const r=i||h._userID,o=fe(s);D(r,t,e);const n=new FormData(o);return n.append("lib_version","3.12.1"),n.append("service_id",t),n.append("template_id",e),n.append("user_id",r),k("/api/v1.0/email/send-form",n)};var ve={init:xe,send:ge,sendForm:he};const be={class:"contact-section bg-dark-page text-light-gray p-10",id:"contact"},_e={class:"container mx-auto"},we=a("div",{class:"text-center mb-10"},[a("h2",{class:"text-6xl font-bold text-primary mb-2"},"Entre em Contato"),a("p",{class:"text-secondary text-xl"},"Estamos prontos para atend\xEA-lo!")],-1),ye={class:"grid grid-cols-1 gap-8"},Se={class:"contact-info"},Pe={class:"contact-form"},Te=a("p",{class:"text-accent"},"Ou preencha o formul\xE1rio abaixo:",-1),Ce={__name:"ContactSection",setup(t){const e=M(),s=l(""),i=l(""),r=l(""),o=l(""),n=l(""),p=l(null),_=l(null),w=l(null),A=()=>{if(e.loading.show(),p.value.validate(),_.value.validate(),w.value.validate(),p.value.hasError||_.value.hasError||w.value.hasError)e.notify({position:"center",color:"negative",message:"Preencha todos os campos do formul\xE1rio!"});else{const P="service_18oqx0c",m="template_cepexpj",u="pyNp3eLV_0abuERKu",q={name:s.value,phone:o.value,email:n.value,subject:i.value,message:r.value};ve.send(P,m,q,u).then(T=>{e.loading.hide(),e.notify({position:"center",icon:"done",color:"positive",message:"Email enviado com sucesso!"}),s.value="",n.value="",r.value="",o.value="",i.value=""}).catch(T=>{e.loading.hide(),e.notify({color:"negative",message:"Erro ao enviar o email: ".error}),console.error("Erro ao enviar o email:",T)})}};return(P,m)=>(d(),x("div",be,[a("div",_e,[we,a("div",ye,[a("div",Se,[c(b,{text:"Converse pelo WhatsApp"})]),a("div",Pe,[Te,a("form",{onSubmit:F(A,["prevent"])},[c(f,{filled:"",modelValue:s.value,"onUpdate:modelValue":m[0]||(m[0]=u=>s.value=u),ref_key:"nameRef",ref:p,rules:[u=>!!u||"Nome \xE9 obrigat\xF3rio."],label:"Nome",class:"mb-4",color:"primary"},null,8,["modelValue","rules"]),c(f,{filled:"",modelValue:n.value,"onUpdate:modelValue":m[1]||(m[1]=u=>n.value=u),label:"E-mail",class:"mb-6",color:"primary"},null,8,["modelValue"]),c(f,{filled:"",modelValue:o.value,"onUpdate:modelValue":m[2]||(m[2]=u=>o.value=u),label:"Telefone",class:"mb-6",color:"primary"},null,8,["modelValue"]),c(f,{filled:"",modelValue:i.value,"onUpdate:modelValue":m[3]||(m[3]=u=>i.value=u),ref_key:"subjectRef",ref:_,rules:[u=>!!u||"Assunto \xE9 obrigat\xF3rio."],label:"Assunto",class:"mb-4",color:"primary"},null,8,["modelValue","rules"]),c(f,{filled:"",modelValue:r.value,"onUpdate:modelValue":m[4]||(m[4]=u=>r.value=u),ref_key:"messageRef",ref:w,rules:[u=>!!u||"Mensagem \xE9 obrigat\xF3rio."],label:"Mensagem",type:"textarea",class:"mb-4",color:"primary"},null,8,["modelValue","rules"]),c(j,{label:"Enviar Mensagem",type:"submit",color:"secondary",class:"w-full"})],32)])])])]))}},De={__name:"IndexPage",setup(t){const e=l("Ess\xEAncia"),s=l("Bahiana"),i=l("Descubra a Magia e a Cultura \xDAnica da Terra do Descobrimento"),r=l("/hero.webp"),o=l(`\xA9 ${new Date().getFullYear()} Essencia Bahiana. Todos os direitos reservados.`);return z({title:"Ess\xEAncia BAHIANA",meta:{description:{name:"description",content:"Descubra o melhor de Porto Seguro com a Ess\xEAncia Bahiana. Oferecemos passeios personalizados e traslados confort\xE1veis para uma experi\xEAncia de viagem aut\xEAntica e memor\xE1vel na Bahia."},equiv:{"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"},keywords:{name:"keywords",content:"Porto Seguro, Pontos tur\xEDsticos em Porto Seguro, Passeios em Porto Seguro, Traslados em Porto Seguro, Turismo na Bahia, Viagens pela Bahia, Melhores experi\xEAncias em Porto Seguro, Roteiros de viagem em Porto Seguro, Atra\xE7\xF5es tur\xEDsticas na regi\xE3o, Servi\xE7o de transporte em Porto Seguro, Roteiro de viagem personalizado, Dicas de viagem para Porto Seguro, Destinos na Bahia, Planejamento de viagem, Experi\xEAncias memor\xE1veis na Bahia."},ogTitle:{property:"og:title",template(){return"Ess\xEAncia BAHIANA"}},ogDescription:{property:"og:description",template(){return"Descubra o melhor de Porto Seguro com a Ess\xEAncia Bahiana. Oferecemos passeios personalizados e traslados confort\xE1veis para uma experi\xEAncia de viagem aut\xEAntica e memor\xE1vel na Bahia."}},ogImage:{property:"og:image",template(){return"https://essenciabahiana.com.br/hero.webp"}},twitterTitle:{property:"twitter:title",template(){return"Ess\xEAncia BAHIANA"}},twitterDescription:{property:"twitter:description",template(){return"Descubra o melhor de Porto Seguro com a Ess\xEAncia Bahiana. Oferecemos passeios personalizados e traslados confort\xE1veis para uma experi\xEAncia de viagem aut\xEAntica e memor\xE1vel na Bahia."}},twitterImage:{property:"twitter:image",template(){return"https://essenciabahiana.com.br/hero.webp"}}}}),(n,p)=>(d(),v(N,{class:"flex flex-center w-full"},{default:y(()=>[c(J,{image:r.value,firstTitle:e.value,secondTitle:s.value,subtitle:i.value},null,8,["image","firstTitle","secondTitle","subtitle"]),c(te),c(pe),c(Ce),c(R,{firstTitle:e.value,secondTitle:s.value,copyRight:o.value},null,8,["firstTitle","secondTitle","copyRight"])]),_:1}))}};export{De as default};