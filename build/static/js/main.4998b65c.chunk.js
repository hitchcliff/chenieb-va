(this["webpackJsonpchennieb-va"]=this["webpackJsonpchennieb-va"]||[]).push([[0],{83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(27),r=a.n(c),s=a(60),o=a(32),l=a(6),d=a(30),m=a.n(d),u=a(37),b=a(38),h=a(39),j=a(20),x=Object(j.b)({name:"preloader",initialState:{isLoaded:!1},reducers:{addIsLoaded:function(e,t){var a=t.payload;e.isLoaded=a}}}),f=x.actions.addIsLoaded,p=a(33),v=Object(j.b)({name:"hello",initialState:{test:"hello world"},reducers:{helloWorld:function(e,t){var a=t.payload;e.test=a}}}),O=(v.actions.helloWorld,Object(j.b)({name:"route",initialState:{currentRoute:""},reducers:{setCurrentRoute:function(e,t){var a=t.payload;e.currentRoute=a.currentRoute}}})),w=O.actions.setCurrentRoute,g={HelloWorld:v.reducer,Preloader:x.reducer,Route:O.reducer},y=Object(j.a)({reducer:g,middleware:[p.a]}),N=function(){function e(){Object(b.a)(this,e),this.dispatch=void 0,this.dispatch=y.dispatch}return Object(h.a)(e,[{key:"addIsLoaded",value:function(){var e=Object(u.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y.dispatch(f(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();var k=a(85),I=a(2);function C(e){var t=e.children,a=e.className,n=e.id;return Object(I.jsx)(k.a.div,{id:n,className:"relative flex flex-col py-10 px-5 md:px-10 lg:px-24 2xl:px-56 ".concat(a&&a),children:t})}var H,F=a(17),S=a(18),R=S.a.button(H||(H=Object(F.a)(["\n  transition: 0.3s ease;\n\n  :hover {\n    transition: 0.3s ease;\n  }\n"])));function L(e){var t=e.children,a=e.className;return Object(I.jsx)("div",{className:a,children:Object(I.jsx)(R,{className:"px-10 py-4 uppercase rounded-md transition-all text-white text-sm font-times whitespace-nowrap tracking-widest bg-gradient-to-r from-primary to-secondary hover:bg-primary",children:t})})}function T(){return Object(I.jsx)("section",{className:"bubbles-container",children:Object(I.jsxs)("div",{className:"bubbles",children:[Object(I.jsx)("div",{className:"bubble"}),Object(I.jsx)("div",{className:"bubble"}),Object(I.jsx)("div",{className:"bubble"}),Object(I.jsx)("div",{className:"bubble"}),Object(I.jsx)("div",{className:"bubble"}),Object(I.jsx)("div",{className:"bubble"}),Object(I.jsx)("div",{className:"bubble"}),Object(I.jsx)("div",{className:"bubble"}),Object(I.jsx)("div",{className:"bubble"}),Object(I.jsx)("div",{className:"bubble"})]})})}var A,B=a(40),z=a(43),E=a(41),W=[{icon:z.b,to:"https://www.linkedin.com/in/chenie-bontilao-09976b217/"},{icon:z.c,to:"https://twitter.com/ChenieNarra"},{icon:z.a,to:"https://www.facebook.com/queeniebontilao.bontilao"},{icon:E.a,to:"mailto:cheniebontilao30@gmail.com"}];function M(e){var t=e.className,a=W.map((function(e,t){return Object(I.jsx)("li",{className:"mx-2 bg-white w-8 h-8 rounded-full text-center flex justify-center items-center border-2 border-white shadow-md hover:border-primary hover:bg-primary hover:text-white transition-all cursor-pointer",children:Object(I.jsx)("a",{href:e.to,rel:"noreferrer",target:"_blank",children:Object(I.jsx)(B.a,{icon:e.icon})})},t)}));return Object(I.jsx)(k.a.section,{id:"socials",className:t,children:Object(I.jsx)("ul",{className:"flex flex-row items-center text-md",children:a})})}var P=S.a.div(A||(A=Object(F.a)([""])));function q(){return Object(I.jsxs)(P,{id:"footer-section",className:"text-center py-2 mt-auto primary-gradient flex justify-center items-center flex-col md:flex-row",children:[Object(I.jsx)("span",{className:"whitespace-nowrap text-md text-black md:mr-5",children:"\xa9 2021 Chenie Narra Bontilao"}),Object(I.jsx)(M,{className:"flex justify-center items-center mt-2"})]})}var G,D=a(61),J=a(23),_={y:{stiffness:1e3}},V={active:{position:"absolute",rotate:-45,margin:0},inactive:{position:"static",rotate:0}},K={active:{opacity:0,transition:Object(J.a)({delay:.3},_)},inactive:{opacity:100,transition:Object(J.a)({delay:.6},_)}},Q={active:{position:"absolute",rotate:45},inactive:{position:"static",rotate:0}},U=Object(S.a)(k.a.div)(G||(G=Object(F.a)(["\n  box-shadow: 0 0 15px rgba(255, 255, 255, 0.6);\n  width: 1rem;\n  height: 0.1rem;\n  border-radius: 5px;\n  background: white;\n\n  @media (min-width: 768px) {\n    width: 1.5rem;\n    height: 0.2rem;\n  }\n"])));function X(e){var t=e.setIsBurgerActive,a=e.isBurgerActive;return Object(I.jsxs)("button",{onClick:function(){t(!a)},className:"relative flex flex-col justify-center items-center outline-none primary-gradient rounded-full shadow-md h-10 w-10 md:h-16 md:w-16 focus:outline-none",children:[Object(I.jsx)(U,{animate:a?"active":"inactive",variants:Q,transition:{delay:.6},className:""}),Object(I.jsx)(U,{animate:a?"active":"inactive",variants:K,transition:{delay:.2},className:"mt-1"}),Object(I.jsx)(U,{animate:a?"active":"inactive",variants:V,transition:{delay:.6},className:"mt-1"})]})}var Y,Z=[{name:"home"},{name:"objective"},{name:"about"},{name:"experience"}],$=a(59),ee={hidden:{opacity:0,borderRadius:"100%",transition:Object(J.a)(Object(J.a)({},_),{},{duration:1.2})},visible:{opacity:1,borderRadius:"0%",top:"0",zIndex:123123,transition:Object(J.a)(Object(J.a)({},_),{},{duration:1.2})}};function te(){var e=Object(n.useState)(!1),t=Object(D.a)(e,2),a=t[0],i=t[1],c=Z.map((function(e,t){return Object(I.jsx)("li",{onClick:function(){return i(!1)},className:"text-white block text-xl md:text-3xl uppercase font-bold",children:Object(I.jsx)($.Link,{to:e.name,smooth:!0,duration:1e3,onClick:function(){return i(!1)},children:e.name})},t)}));return Object(I.jsxs)("div",{className:"flex items-center px-0 w-full z-50",children:[Object(I.jsx)("div",{className:"mr-auto",style:{zIndex:1231231231},children:Object(I.jsx)(X,{setIsBurgerActive:i,isBurgerActive:a})}),Object(I.jsx)(k.a.div,{variants:ee,animate:a?"visible":"hidden",className:"flex flex-col justify-center items-center fixed left-0 top-full text-white primary-gradient bg-opacity-90 w-full min-h-screen mx-auto opacity-0",children:Object(I.jsx)("ul",{className:"flex flex-col -mt-12",children:c})})]})}var ae=S.a.nav(Y||(Y=Object(F.a)(["\n  padding: 0.8rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 12312313;\n"])));function ne(e){e.className;return Object(I.jsx)(ae,{className:"w-full py-2 text-center z-50 fixed top-0 left-0",children:Object(I.jsx)(te,{})})}var ie=a(62);a(81);function ce(){!function(){var e=Object(ie.a)();e.reveal(".scale-up",{scale:.8,opacity:.2,viewFactor:.2,reset:!0}),e.reveal(".from-left",{duration:800,origin:"left",distance:"30px",opacity:.2,viewFactor:.2,reset:!0}),e.reveal(".from-right",{duration:800,origin:"right",distance:"30px",opacity:.2,viewFactor:.2,reset:!0}),e.reveal(".from-right-1200",{duration:1200,origin:"right",distance:"70px",opacity:.2,viewFactor:.2,reset:!0}),e.reveal(".from-bottom",{duration:800,scale:1,origin:"bottom",distance:"30px",viewFactor:0,reset:!0}),e.reveal(".from-bottom-900",{duration:800,scale:1,origin:"bottom",distance:"70px",viewFactor:0,reset:!0}),e.reveal(".from-top",{duration:800,scale:1,origin:"top",distance:"30px",viewFactor:.2,reset:!0}),e.reveal(".from-top-1200",{duration:1200,scale:1,origin:"top",distance:"70px",viewFactor:.2,reset:!0})}(),a.e(3).then(a.bind(null,89))}var re,se=a(86);!function(e){e.Home="/"}(re||(re={}));var oe,le=a.p+"static/media/2.4abc4ac6.jpg";function de(e){var t=e.children,a=e.heading,n=e.className;return Object(I.jsxs)("div",{className:n,children:[a===oe.H1&&Object(I.jsx)(k.a.h1,{className:"text-xl md:text-3xl lg:text-5xl font-bold font-times",children:t}),a===oe.H2&&Object(I.jsxs)("div",{children:[Object(I.jsx)(k.a.h2,{className:"uppercase text-2xl italic font-times lg:text-3xl font-bold",children:t}),Object(I.jsx)("div",{className:"w-1/2 mx-auto md:mx-0 primary-gradient h-2 rounded-full mt-5"})]}),a===oe.H4&&Object(I.jsxs)("div",{className:"text-center",children:[Object(I.jsx)(k.a.h4,{className:"uppercase text-md text-white font-times lg:text-xl font-bold",children:t}),Object(I.jsx)("div",{className:"w-1/4 mx-auto bg-white h-2 rounded-full mt-2"})]}),a===oe.H5&&Object(I.jsx)("div",{children:Object(I.jsx)(k.a.h4,{className:"uppercase text-md font-times lg:text-xl font-bold",children:t})})]})}!function(e){e.H1="h1",e.H2="h2",e.H3="h3",e.H4="h4",e.H5="h5"}(oe||(oe={}));var me=a.p+"static/media/CCA Chenie.efb8e8ee.docx";function ue(){return Object(I.jsxs)(C,{id:"home",className:"min-h-screen relative flex flex-col justify-center items-center md:flex-row bg-white",children:[Object(I.jsx)("div",{className:"w-full md:w-1/2 flex scale-up",children:Object(I.jsx)("img",{src:le,alt:"chennie",className:"w-full flex my-auto object-cover h-auto border-8 border-white shadow-xl"})}),Object(I.jsxs)("div",{className:"px-0 flex flex-col justify-center md:px-10 lg:px-24",children:[Object(I.jsx)(de,{heading:oe.H1,className:"font-times mt-10 md:mt-0 from-left",children:"Hi! I am Chenie Bontilao"}),Object(I.jsx)("p",{className:"mt-5 from-bottom",children:"I am seeking a position as a Virtual Assistant, Chat Support, and Call Center in a reputable organization."}),Object(I.jsx)("a",{href:me,target:"_blank",rel:"noreferrer",children:Object(I.jsx)(L,{className:"mt-10 from-left",children:"download my resume"})})]}),Object(I.jsx)(T,{})]})}function be(){return Object(I.jsxs)(C,{className:"py-24 flex flex-col md:flex-row",children:[Object(I.jsx)(de,{heading:oe.H2,className:"from-left text-center md:text-left",children:"Objective"}),Object(I.jsx)("p",{className:"mt-10 md:mt-0 lg:pl-24 from-bottom",children:"To happily provide the exact needs of my customers as part of my obligation. To do the best of my ability to provide quality service in order to give inspiration to the customer. To pursue customer satisfaction to sustain and contribute to the wellness of the company."})]})}var he,je=[{title:"Service Crew in Tita Fannies",accomplishments:["As a service crew my duty is  to serve our customers in a very nice way, like always saying \u201cGood morning\u201d, \u201cGood afternoon\u201d, \u201cThank you for coming\u201d.","We always make sure that the food we serve is clean. Moreover, we maintained fresh, and the right amount of food we serve, because we value customers.","I have initiative during work, if one of my co-workers needs my help, I'm always there to help not only to impress everybody but because I love helping people. Even though I'm a service crew I'm also a dishwasher and kitchen assistant and waitress.","Lastly is being punctual. It is very necessary if you have work, coming early to attend your duty is very basic but the most important is to complete your working hours, willing to adjust, and ready to work for extra hours specially occasions like valentine's day."]},{title:"Customer Service in Delicious Bakeshop",accomplishments:["We need to wear proper hygiene to prevent accidents and to show customers that we have higher standards in terms of cleanliness.","We have to make sure that we give our best service to each and every of our customers.","I always smile at the customer, respect them, and treat them equally open to any learning."]},{title:"Shampoo Assistant in T3 Salon",accomplishments:["To enhance my skill in doing Foot SPA manicure, and pedicure, I go through various training about Hair Color, Rebound, and Hairstylist in this establishment. It was fun and I learned a lot with their teachings.","I was diligent enough to be offered a long-term position not just as a student but as a working partner.","I learned how to socialize with people, smile and have confidence. Their guidance kept me on track."]}],xe=S.a.div(he||(he=Object(F.a)(["\n  margin-top: 2.5rem;\n\n  @media (min-width: 1024px) {\n    margin-top: 0;\n    :not(:first-child) {\n      margin-top: 2.5rem;\n    }\n  }\n"])));function fe(){var e=je.map((function(e,t){var a=e.title,n=e.accomplishments;return Object(I.jsxs)(xe,{children:[Object(I.jsx)(de,{heading:oe.H5,className:"italic underline from-right",children:a}),Object(I.jsx)("ul",{className:"mt-5",children:n.map((function(e,t){return Object(I.jsxs)("li",{className:"mt-2 ml-10 lg:ml-16 relative from-left",children:[Object(I.jsx)(B.a,{icon:E.b,className:"mr-2 absolute top-2 -left-5 text-xs"}),e]},t)}))})]},t)}));return Object(I.jsx)(C,{id:"experience",className:"py-24",children:Object(I.jsxs)("div",{className:"w-full",children:[Object(I.jsx)(de,{heading:oe.H2,className:"text-center flex justify-center items-center w-full from-right",children:"work experience"}),Object(I.jsx)("div",{className:"mt-16",children:e})]})})}var pe=a.p+"static/media/1.36378c5c.jpg";function ve(){return Object(I.jsx)(C,{id:"about",className:"py-24 bg-gray-50 rounded-t-3xl",children:Object(I.jsxs)("div",{className:"flex flex-col md:flex-row",children:[Object(I.jsx)("div",{className:"w-full flex scale-up",children:Object(I.jsx)("img",{src:pe,alt:"chennie",className:"w-full flex my-auto object-cover h-auto border-8 border-white shadow-xl"})}),Object(I.jsxs)("div",{className:"w-full flex flex-col justify-center md:px-5  lg:pl-24 lg:pr-0",children:[Object(I.jsx)(de,{heading:oe.H5,className:"font-times text-black text-left mt-10 md:mt-0 from-top",children:"A little about me"}),Object(I.jsx)("p",{className:"mt-5 text-black from-left",children:"Throughout my career and school, I was able to gain a tremendous amount of achievements to augment my lack of experience in this field."}),Object(I.jsx)("p",{className:"mt-5 text-black from-left",children:"My interest is to gain experience to enhance my communication skills and to lend my strength to the company I\u2019m working with."}),Object(I.jsx)("a",{href:me,className:"mt-10 font-times uppercase underline font-bold from-right",children:"download my resume"}),Object(I.jsx)(M,{className:"py-3 mt-5 from-bottom"})]})]})})}function Oe(){return Object(I.jsxs)(k.a.div,{children:[Object(I.jsx)(ue,{}),Object(I.jsx)(be,{}),Object(I.jsx)(ve,{}),Object(I.jsx)(fe,{})]})}function we(){return Object(I.jsx)("div",{className:"text-center flex justify-center items-center h-screen w-full",children:Object(I.jsxs)("div",{className:"absolute flex flex-col",children:[Object(I.jsx)("span",{className:"text-8xl text-white",children:"Sorry, page not found."}),Object(I.jsx)(o.b,{to:"/",className:"text-white mt-10 italic underline opacity-50 hover:opacity-100",children:"Go back to home."})]})})}var ge=function(){function e(){Object(b.a)(this,e),this.dispatch=void 0,this.dispatch=y.dispatch}return Object(h.a)(e,[{key:"setCurrentRoute",value:function(){var e=Object(u.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y.dispatch(w(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();function ye(){var e=Object(n.useMemo)((function(){return new ge}),[]).setCurrentRoute,t=Object(l.f)(),a=Object(l.g)();return Object(n.useEffect)((function(){var a=t.location.pathname;e({currentRoute:a})}),[t.location]),Object(I.jsx)(se.a,{exitBeforeEnter:!0,children:Object(I.jsxs)(l.c,{location:a,children:[Object(I.jsx)(l.a,{exact:!0,path:[re.Home,"/home"],component:Oe}),Object(I.jsx)(l.a,{exact:!0,path:"*",component:we})]},a.pathname)})}function Ne(){var e=Object(n.useMemo)((function(){return new N}),[]).addIsLoaded;return Object(n.useEffect)((function(){ce(),document.addEventListener("readystatechange",(function(){"complete"===document.readyState&&e(!0)}))}),[]),Object(I.jsxs)(o.a,{children:[Object(I.jsx)(ne,{}),Object(I.jsx)(l.c,{children:Object(I.jsx)(l.a,{path:"*",component:ye})}),Object(I.jsx)(q,{})]})}var ke=function(e){e&&e instanceof Function&&a.e(4).then(a.bind(null,90)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),c(e),r(e)}))};a(83);r.a.render(Object(I.jsx)(i.a.StrictMode,{children:Object(I.jsx)(s.a,{store:y,children:Object(I.jsx)(Ne,{})})}),document.getElementById("root")),ke()}},[[84,1,2]]]);