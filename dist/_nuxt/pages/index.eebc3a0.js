(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{196:function(e,t,r){var content=r(202);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("c035c202",content,!0,{sourceMap:!1})},200:function(e,t,r){"use strict";r.r(t);var o={name:"Card",props:{title:{type:String,required:!0},description:{type:String,required:!0},labels:{type:Array,required:!0},url:{type:String,required:!0},img:{type:String,required:!0}}},l=(r(201),r(3)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"max-w-sm rounded overflow-hidden shadow-lg card"},[r("a",{attrs:{href:e.url,target:"_blank"}},[r("img",{staticClass:"w-full",attrs:{src:e.img,alt:"logo"}})]),e._v(" "),r("div",{staticClass:"px-6 py-4"},[r("div",{staticClass:"font-bold text-xl mb-2"},[e._v(e._s(e.title))]),e._v(" "),r("p",{staticClass:"text-gray-700 text-base"},[e._v(e._s(e.description))])]),e._v(" "),r("div",{staticClass:"px-6 py-4"},e._l(e.labels,(function(label){return r("span",{key:label,staticClass:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"},[e._v("#"+e._s(label))])})),0)])}),[],!1,null,"10dd3e96",null);t.default=component.exports},201:function(e,t,r){"use strict";var o=r(196);r.n(o).a},202:function(e,t,r){(t=r(36)(!1)).push([e.i,".card[data-v-10dd3e96]{display:inline-block;margin:20px}img[data-v-10dd3e96]{margin-left:auto;margin-right:auto;width:auto;max-height:350px}",""]),e.exports=t},205:function(e,t,r){"use strict";r.r(t);var o=r(200),l=r(89),n={name:"Portfolio",components:{Card:o.default,MainLayout:l.a},data:function(){return{technologies:[{src:"https://i.imgur.com/x3CYclw.png",name:"JavaScript"},{src:"https://i.imgur.com/cFC4rej.png",name:"HTML5"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",name:"CSS"},{src:"https://i.imgur.com/9YHOqS6.png",name:"React"},{src:"https://i.imgur.com/DGIFtCv.png",name:"Vue"},{src:"https://i.imgur.com/aVSMiAF.png",name:"Git"},{src:"https://i.imgur.com/xeZOCCj.png",name:"Graphql"},{src:"https://i.imgur.com/aK5pheS.png",name:"Python"},{src:"https://i.imgur.com/tVIwnQg.png",name:"VSCode"},{src:"https://i.imgur.com/xNjaHz9.png",name:"Apollo"},{src:"https://i.imgur.com/Omud1zQ.png",name:"Linux"}],cards:[{title:"Cusiin",id:"cusiin",description:"[en desarrollo] SaaS All-in-one (frontend, backend y dashboard), first-mobile, pensado para facilitar las ventas minoristas online principalmente en la industria restaurantera a bajo coste.",labels:["React","NextJS","TailwindCSS","Stripe","GoogleAPI","Serverless","Apollo","MongoDB","Strapi"],url:"https://rojodelicias.com/",img:"https://i.imgur.com/xoap3hF.png"},{title:"ERP Estrella",id:"estrella",description:"[en desarrollo] El proyecto comienza con un módulo de inventario y posteriormente se irán añadiendo módulos para las ventas y demás necesidades de datos de la empresa. En este proyecto utilicé una base de datos Mongo en Mongo Cloud, Apollo Server para administrar las querys y mutaciones, y en la parte del frontend React y Apollo Client.",labels:["React","Apollo","Graphql","Mongo","Express"],url:"https://estrella-erp.vercel.app/",img:"https://i.imgur.com/XcP2hAU.png"},{title:"Teresa López Blog",id:"teresa",description:"El blog esta hecho con una starter library de Gatsby y se personalizó. Teresa es una escritora recien empezada, aún no es famosa pero algún dia lo será. Su contenido aún está en proceso pero el diseño y la funcionalidad están listos para explotar su talento.",labels:["Blog","Literatura"],url:"https://www.teresaescribe.net/",img:"https://i.imgur.com/B8kJUSn.png"},{title:"Petgram",id:"petgram",description:"PWA hecha en el curso de React Avanzado en Platzi",labels:["PWA","React","Hooks","Apollo","Helmet","Router"],url:"https://petgram-alexbarba.vercel.app/",img:"https://i.imgur.com/Z7lgRlU.png"},{title:"Calculadora Binaria",id:"binaryCalculator",description:'Calculadora binaria hecha con Vanilla JS y CSS, usando Regex, a prueba de errores, para el reto "10 Days of Javascript" de Hackerrank',labels:["Calculadora","Javascript","CSS"],url:"https://alexbarba.github.io/BinaryCalculator/",img:"https://i.imgur.com/tKNvJ7t.png"},{title:"Rojo Delicias",id:"rojodelicias",description:"(2018) Sitio web estatico donde publican su información de contacto, su menú (desplegado con vue y un archivo JSON) y fotos de sus platillos.",labels:["Bootstrap","HTML","CSS"],url:"https://alexbarba.github.io/rojodelicias-site/",img:"https://alexbarba.github.io/rojodelicias-site/images/medium/logo-collapsed.png"},{title:"Platzi Video",id:"platzivideo",description:"UI para reproducción de video hecha en React. Proyecto realizado para el curso de React 2017 en la plataforma de educación Platzi.",labels:["React","Javascript","Platzi"],url:"https://alexbarba.github.io/curso-react/",img:"https://i.imgur.com/la6x97t.png"},{title:"Fiestas de Octubre",id:"fiestas",description:"Mi primer proyecto llevado a producción fue el sitio web de Fiestas de Octubre Guadalajara 2017, para el cual mis nociones de HTML5 eran muy básicas. Inicié con un template como guia y lo personalicé al grado de que quedó identico al mockup que me entregaron. La duración del proyecto fue de una semana.",labels:["Jalisco","Evento"],url:"https://alexbarba.github.io/fiestas-de-octubre-2017/",img:"https://alexbarba.github.io/fiestas-de-octubre-2017/images/home/logo-nuevo.png"}]}},head:{title:"Alexis Barba - Portafolio 🚀"}},c=r(3),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("MainLayout",[r("div",{staticClass:"container mx-auto divide-y-2 divide-black divide-opacity-25"},[r("div",{staticClass:"py-4"},[r("h2",{staticClass:"lg:text-3xl text-2xl"},[e._v("Proyectos")]),e._v(" "),e._l(e.cards,(function(e){return r("Card",{key:e.id,attrs:{title:e.title,description:e.description,labels:e.labels,url:e.url,img:e.img}})}))],2),e._v(" "),r("div",{staticClass:"py-4"},[r("h2",{staticClass:"lg:text-3xl text-2xl"},[e._v("\n        Lenguajes, Frameworks, Herramientas, Librerías\n      ")]),e._v(" "),r("div",{staticClass:"m-8"},e._l(e.technologies,(function(e){return r("img",{key:e.name,staticClass:"h-40 inline-block m-4",attrs:{src:e.src}})})),0)])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Card:r(200).default})}}]);