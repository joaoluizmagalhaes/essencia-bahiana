import{Q as $}from"./QImg.48bf40d4.js";import{k as v,av as C,aw as T,c as h,h as u,a4 as q,$ as A,aG as L,aH as R,aI as E,l as Q,aJ as P,aK as I,r as b,o as D,w as H,ab as N,ac as U,ad as _,ai as o,f as n,aL as d,ao as x,aA as M}from"./index.cfebbb4d.js";import{Q as V,_ as j}from"./FooterComponent.5ecb3b6e.js";import{u as F}from"./use-meta.fcf069ec.js";import{a as O,d as z,b as G,_ as J}from"./InstagramFeed.4954ae1a.js";var g=v({name:"QBreadcrumbsEl",props:{...C,label:String,icon:String,tag:{type:String,default:"span"}},emits:["click"],setup(e,{slots:s}){const{linkTag:t,linkAttrs:c,linkClass:p,navigateOnClick:m}=T(),r=h(()=>({class:"q-breadcrumbs__el q-link flex inline items-center relative-position "+(e.disable!==!0?"q-link--focusable"+p.value:"q-breadcrumbs__el--disable"),...c.value,onClick:m})),a=h(()=>"q-breadcrumbs__el-icon"+(e.label!==void 0?" q-breadcrumbs__el-icon--with-label":""));return()=>{const i=[];return e.icon!==void 0&&i.push(u(q,{class:a.value,name:e.icon})),e.label!==void 0&&i.push(e.label),u(t.value,{...r.value},A(s.default,i))}}});const K=["",!0];var Y=v({name:"QBreadcrumbs",props:{...L,separator:{type:String,default:"/"},separatorColor:String,activeColor:{type:String,default:"primary"},gutter:{type:String,validator:e=>["none","xs","sm","md","lg","xl"].includes(e),default:"sm"}},setup(e,{slots:s}){const t=R(e),c=h(()=>`flex items-center ${t.value}${e.gutter==="none"?"":` q-gutter-${e.gutter}`}`),p=h(()=>e.separatorColor?` text-${e.separatorColor}`:""),m=h(()=>` text-${e.activeColor}`);return()=>{const r=E(Q(s.default));if(r.length===0)return;let a=1;const i=[],y=r.filter(l=>l.type!==void 0&&l.type.name==="QBreadcrumbsEl").length,k=s.separator!==void 0?s.separator:()=>e.separator;return r.forEach(l=>{if(l.type!==void 0&&l.type.name==="QBreadcrumbsEl"){const f=a<y,B=l.props!==null&&K.includes(l.props.disable),S=(f===!0?"":" q-breadcrumbs--last")+(B!==!0&&f===!0?m.value:"");a++,i.push(u("div",{class:`flex items-center${S}`},[l])),f===!0&&i.push(u("div",{class:"q-breadcrumbs__separator"+p.value},k()))}else i.push(l)}),u("div",{class:"q-breadcrumbs"},[u("div",{class:c.value},i)])}}});const w=P("postStore",{state:()=>({post:{},isDataLoaded:!1,title:"Page",description:"Ess\xEAncia Bahiana Site",keywords:"",imageURL:"hero.webp"}),actions:{async fetchPost(e){const s=O(z,"blog",e),t=await G(s);t.exists()&&(this.post={id:t.id,...t.data()},this.title=this.post.title,this.description=this.post.description,this.keywords=this.post.keywords,this.imageURL=this.post.imageURL),this.isDataLoaded=!0}}}),W={class:"max-w-[1000px] min-h-[400px] mx-auto mt-28 md:mt-44 mb-10"},X={class:"w-full"},Z={class:"py-8 px-6 md:px-0 flex flex-col"},tt={class:"text-2xl md:text-5xl font-sans font-bold mb-6"},et={class:"text-2xl"},st=o("p",{class:"ml-auto text-kg text-accent"},"Por Ess\xEAncia Bahiana",-1),at={class:"max-w-[1000px] mx-auto flex flex-col md:flex-row mb-6"},ot=["innerHTML"],it={class:"w-full md:w-4/12"},lt={preFetch({store:e,currentRoute:s}){const t=w(e),c=s.params.id;return t.fetchPost(c)}},pt=Object.assign(lt,{__name:"BlogPage",setup(e){const s=I(),t=w(),c=b("Ess\xEAncia"),p=b("Bahiana"),m=b(`\xA9 ${new Date().getFullYear()} Essencia Bahiana. Todos os direitos reservados.`);async function r(a){await t.fetchPost(a)}return D(async()=>{await r(s.params.id)}),H(()=>s.params.id,async a=>{await r(a)}),F(()=>({title:t.title,titleTemplate:a=>`Ess\xEAncia BAHIANA | Blog | ${a}`,meta:{description:{name:"description",content:t.description},keywords:{name:"keywords",content:t.keywords},"http-equiv":{"http-equiv":"Content-Type",content:"text/html charset=UTF-8"},ogTitle:{property:"og:title",content:`Ess\xEAncia BAHIANA | ${t.title}`},ogDescription:{property:"og:description",content:t.description},ogImage:{property:"og:image",content:`https://essenciabahiana.com.br/${t.imageURL}`},twitterTitle:{property:"twitter:title",content:`Ess\xEAncia BAHIANA | ${t.title}`},twitterDescription:{property:"twitter:description",content:t.description},twitterImage:{property:"twitter:image",content:`https://essenciabahiana.com.br/${t.imageURL}`}}})),(a,i)=>(N(),U(V,{class:""},{default:_(()=>[o("header",W,[o("figure",null,[o("div",X,[n($,{class:"w-full max-h-[500px] object-cover",src:`/${d(t).imageURL}`,alt:d(t).post.title},null,8,["src","alt"])]),o("figcaption",Z,[o("h1",tt,x(d(t).post.title),1),o("p",et,x(d(t).post.excerpt),1),st]),n(M,{class:"max-w-[1000px] mx-auto mb-6"}),n(Y,{class:"ml-6 md:ml-0"},{default:_(()=>[n(g,{label:"Home",to:"/"}),n(g,{label:"Blog",to:"/blog"}),n(g,{label:"O que fazer"}),n(g,{label:d(t).post.title},null,8,["label"])]),_:1})])]),o("main",at,[o("section",{innerHTML:d(t).post.content,class:"blog-content w-full md:w-8/12 px-6 md:pl-0"},null,8,ot),o("aside",it,[n(J)])]),n(j,{firstTitle:c.value,secondTitle:p.value,copyRight:m.value},null,8,["firstTitle","secondTitle","copyRight"])]),_:1}))}});export{pt as default};