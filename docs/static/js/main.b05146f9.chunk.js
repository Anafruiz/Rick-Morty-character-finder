(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{25:function(e,s,t){},32:function(e,s,t){"use strict";t.r(s);var a=t(1),c=t(19),n=t.n(c),r=(t(25),t(9)),i=t(10),l=t(2),o=t(0),j=function(e){return Object(o.jsxs)("label",{className:"form__label",htmlFor:"name",children:["Name:",Object(o.jsx)("input",{value:e.name,onChange:function(s){e.handleFilter({value:s.target.value,key:"name"})},className:"form__input",type:"text",placeholder:" Search a character",name:"name",id:"name"})]})},u=function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("label",{className:"form__label",htmlFor:"species",children:"Specie:"}),Object(o.jsxs)("select",{className:"form__input",name:"species",id:"species",onChange:function(s){e.handleFilter({value:s.target.value,key:"species"})},value:e.species,children:[Object(o.jsx)("option",{className:"form__input--color",value:"all",children:"All"}),Object(o.jsx)("option",{className:"form__input--color",value:"Human",children:"Human"}),Object(o.jsx)("option",{className:"form__input--color",value:"Alien",children:"Alien"})]})]})},d=function(e){var s=function(s){e.handleFilter({value:s.target.value,key:"origin"})},t=e.OriginList.map((function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"checkbox",children:[Object(o.jsxs)("label",{className:"input",children:[e," "]}),Object(o.jsx)("input",{className:"",onChange:s,type:"checkbox",name:"origin",value:e})]})})}));return Object(o.jsx)("div",{className:"origin__container",children:t})},m=function(e){var s=function(s){e.handleFilter({value:s.target.value,key:"gender"})},t=e.genderList.map((function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"checkbox",children:[Object(o.jsxs)("label",{className:"input",children:[e," "]}),Object(o.jsx)("input",{className:"input",onChange:s,type:"checkbox",name:"gender",value:e})]})})}));return Object(o.jsx)("div",{children:t})},h=function(e){return Object(o.jsx)("button",{className:"button",children:Object(o.jsx)("i",{className:"fa fa-trash","aria-hidden":"true",onClick:function(){e.resetInputs()}})})},b=function(e){return Object(o.jsx)("section",{className:"form",children:Object(o.jsxs)("form",{className:"form__container",onSubmit:function(e){e.preventDefault()},children:[Object(o.jsx)(j,{handleFilter:e.handleFilter,name:e.name}),Object(o.jsx)(u,{handleFilter:e.handleFilter,species:e.species}),Object(o.jsx)(d,{handleFilter:e.handleFilter,OriginList:e.OriginList}),Object(o.jsx)(m,{handleFilter:e.handleFilter,genderList:e.genderList}),Object(o.jsx)(h,{resetInputs:e.resetInputs})]})})},O=t(7),f=function(e){return Object(o.jsxs)(O.b,{to:"/user/".concat(e.user.id),className:"link",children:[Object(o.jsx)("img",{className:"characters__img",src:e.user.image,alt:"foto del personaje"}),Object(o.jsxs)("h2",{className:"characters__name",children:[e.user.name," "]}),Object(o.jsxs)("p",{className:"characters__species",children:["Specie: ",e.user.species]})]})},x=function(e){var s=e.users.sort((function(e,s){return e.name>s.name?1:e.name<s.name?-1:0})).map((function(s){return Object(o.jsx)("li",{className:"characters__card",children:Object(o.jsx)(f,{user:s,episodes:e.episodes})},s.id)})),t=0!==e.users.length?Object(o.jsx)("ul",{className:"characters",children:s}):Object(o.jsxs)("div",{className:"characterResult",children:[Object(o.jsxs)("span",{children:["This character doesn't exist ",Object(o.jsx)("i",{className:"far fa-thumbs-down"})]}),Object(o.jsx)("span",{className:"characterResult__span",children:"Try again!"})]});return Object(o.jsx)("section",{children:t})},p=t.p+"static/media/angry.8dfdea3c.jpg",g=function(e){return void 0===e.user?Object(o.jsxs)("div",{className:"notFound",children:[Object(o.jsxs)("h1",{children:["User not found!",Object(o.jsx)("i",{className:"far fa-sad-tear"})," "]}),Object(o.jsx)("img",{className:"notFound__img",src:p})]}):Object(o.jsx)("section",{className:"characterDetail",children:Object(o.jsxs)("div",{className:"characterDetail__card",children:[Object(o.jsx)("img",{className:"characterDetail__img",src:e.user.image,alt:""}),Object(o.jsxs)("ul",{className:"characterDetail__item",children:[Object(o.jsx)("li",{className:"characterDetail__name",children:e.user.name}),Object(o.jsxs)("div",{className:"characterDetail__container1",children:[Object(o.jsxs)("li",{className:"characterDetail__status",children:["Status:",e.user.status,"Alive"===e.user.status?Object(o.jsx)("i",{className:" fas fa-heartbeat icon-status"}):"Dead"===e.user.status?Object(o.jsx)("i",{className:" fas fa-skull-crossbones icon-status"}):"unknown"===e.user.status?Object(o.jsx)("i",{className:" fas fa-question icon-status"}):void 0]}),Object(o.jsxs)("li",{className:"characterDetail__species",children:["Specie: ",e.user.species]})]}),Object(o.jsxs)("div",{className:"characterDetail__container2",children:[Object(o.jsxs)("li",{className:"characterDetail__origen",children:["Origin: ",e.user.origin," "]}),Object(o.jsxs)("li",{className:"characterDetail__episodes",children:["Episodes: ",e.user.episode.length]})]})]})," ",Object(o.jsx)(O.b,{to:"/",className:"link",title:"Back to user list",children:Object(o.jsx)("button",{className:"characterDetail__button",children:Object(o.jsx)("i",{className:"fas fa-undo"})})})]})})},_=function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json().then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,species:e.species,status:e.status,episode:e.episode,image:e.image,origin:e.origin.name,gender:e.gender}}))}))}))},N=t.p+"static/media/logo.de13d484.png",v=function(){return Object(o.jsx)("h1",{className:"header",children:Object(o.jsx)("img",{className:"header__logo",src:N})})},k=function(){return Object(o.jsxs)("div",{className:"footer",children:[Object(o.jsx)("small",{className:"footer__name",children:"@Anafruiz"}),Object(o.jsx)("small",{className:"footer__name",children:"Adalab 2021"})]})},F=function e(){var s=Object(a.useState)([]),t=Object(i.a)(s,2),c=t[0],n=t[1],j=Object(a.useState)(""),u=Object(i.a)(j,2),d=u[0],m=u[1],h=Object(a.useState)("all"),O=Object(i.a)(h,2),f=O[0],p=O[1],N=Object(a.useState)([]),F=Object(i.a)(N,2),y=F[0],D=F[1],S=Object(a.useState)([]),L=Object(i.a)(S,2),w=L[0],C=L[1];Object(a.useEffect)((function(){_().then((function(e){n(e)}))}),[]);var A=c.map((function(e){return e.origin})),I=Object(r.a)(new Set(A)),E=c.map((function(e){return e.gender})),B=Object(r.a)(new Set(E)),H=c.filter((function(e){return e.name.toLowerCase().includes(d.toLowerCase())})).filter((function(e){return"all"===f||e.species===f})).filter((function(e){return 0===y.length||y.includes(e.origin)})).filter((function(e){return 0===w.length||w.includes(e.gender)}));return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(l.c,{children:[Object(o.jsxs)(l.a,{exact:!0,path:"/",component:e,children:[Object(o.jsx)(v,{}),Object(o.jsx)(b,{handleFilter:function(e){if("name"===e.key)m(e.value);else if("species"===e.key)p(e.value);else if("origin"===e.key){console.log("console",e.value);var s=y.indexOf(e.value);if(-1===s){var t=[].concat(Object(r.a)(y),[e.value]);D(t),console.log(t)}else{var a=Object(r.a)(y);a.splice(s,1),D(a),console.log(a)}}else if("gender"===e.key){var c=w.indexOf(e.value);if(-1===c){var n=[].concat(Object(r.a)(w),[e.value]);C(n),console.log(n)}else{var i=Object(r.a)(w);i.splice(c,1),C(i),console.log(i)}}},name:d,species:f,origin:y,resetInputs:function(){m(""),p("all"),D([]),C([])},OriginList:I,genderList:B}),Object(o.jsx)(x,{users:H}),Object(o.jsx)(k,{})]}),Object(o.jsx)(l.a,{path:"/user/:id",render:function(e){var s=c.find((function(s){return s.id===parseInt(e.match.params.id)}));return Object(o.jsx)(g,{user:s})}})]})})};n.a.render(Object(o.jsx)(O.a,{children:Object(o.jsx)(F,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.b05146f9.chunk.js.map