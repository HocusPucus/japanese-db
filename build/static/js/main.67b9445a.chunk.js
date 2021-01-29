(this["webpackJsonpjapanese-db"]=this["webpackJsonpjapanese-db"]||[]).push([[0],{59:function(e,t,r){},60:function(e,t,r){"use strict";r.r(t);var a=r(0),s=r(1),c=r.n(s),l=r(27),n=r.n(l),i=r(8),d=r(2),o=r(30),x=r(10),m=r(28),h=r.n(m),j=r(62);function b(e){return Object(a.jsx)("div",{className:"px-8 py-6 mx-auto lg:px-10 w-full lg:w-1/3 md:w-1/2",children:Object(a.jsxs)("div",{className:"h-full w-full px-4 py-6 border rounded-xl dark:border-gray-600",children:[Object(a.jsx)("h3",{className:"text-left tracking-widest dark:text-gray-400",children:e.reading}),Object(a.jsx)("h2",{className:"flex items-center justify-start mb-4 mt-2 text-left text-blue-800 text-3xl font-bold leading-none lg:text-6xl dark:text-white",children:e.kanji}),Object(a.jsxs)("p",{className:"flex items-center mb-2 text-left text-gray-600 dark:text-gray-300",children:["1. ",e.def1]}),""!==e.def2&&Object(a.jsxs)("p",{className:"flex items-center mb-2 text-left text-gray-600 dark:text-gray-300",children:["2. ",e.def2]}),Object(a.jsx)("button",{className:"focus:shadow-outline items-end mt-12 px-8 py-2 w-full text-black hover:text-gray-400 font-semibold hover:bg-gray-800 bg-white border rounded-lg focus:outline-none shadow-xl transform transition duration-500 ease-in-out dark:bg-gray-700 dark:text-white dark:border-gray-600",children:Object(a.jsx)("a",{href:e.details,target:"_blank",rel:"noreferrer",children:"Details"})})]})})}function g(e){var t=e.results;return Object(a.jsx)("div",{className:"mb-12",children:Object(a.jsx)("section",{className:"text-gray-700 body-font",children:Object(a.jsx)("div",{className:"container px-8 mx-auto lg:px-4",children:Object(a.jsx)("div",{className:"flex flex-wrap text-center",children:t.map((function(e){return"undefined"===typeof e.kanji&&(e.kanji=e.reading,e.reading=""),Object(a.jsx)(b,{reading:e.reading,kanji:e.kanji,def1:e.def1,def2:e.def2,details:e.details},Object(j.a)())}))})})})})}function u(e){var t=e.searchTerm,r=e.onSearchChange;return Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",id:"search",placeholder:"English, Japanese, Romaji, words or text",value:t,onChange:function(e){r(e.target.value)},onFocus:function(e){return e.target.value=""},className:"w-full px-4 py-2 mb-4 mr-4 text-base placeholder-gray-400 text-gray-700 bg-gray-100 dark:bg-white border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"})})}function f(e){var t=e.search,r=e.searchTerm,s=e.setSearchTerm;return Object(a.jsx)("section",{className:"text-gray-700 body-font",children:Object(a.jsx)("div",{className:"container px-6 pt-2 pb-24 mx-auto lg:px-4",children:Object(a.jsxs)("form",{className:"flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0 dark:bg-gray-800 dark:border-gray-600",children:[Object(a.jsx)("div",{className:"relative ",children:Object(a.jsx)(u,{searchTerm:r,onSearchChange:s})}),Object(a.jsx)("button",{type:"submit",onClick:t,className:"py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ",children:"Search!"}),Object(a.jsxs)("p",{className:"mx-auto mt-3 text-sm text-center text-gray-500 dark:text-gray-400",children:["This was made with ",Object(a.jsx)("a",{className:"text-sm text-blue-500 underline hover:text-blue-700",href:"https://jisho.org/",children:"Jisho's API"})]})]})})})}function p(){var e=Object(s.useState)([]),t=Object(x.a)(e,2),r=t[0],c=t[1],l=Object(s.useState)(""),n=Object(x.a)(l,2),i=n[0],d=n[1],m=Object(s.useState)(!0),j=Object(x.a)(m,2),b=j[0],u=j[1],p=Object(s.useRef)();return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{className:"container mx-auto pb-24 pt-32 px-8 md:mt-32 lg:pt-6 lg:px-4",children:Object(a.jsxs)("div",{className:"flex flex-col mb-36 w-full text-left lg:text-center",children:[Object(a.jsxs)("h1",{className:"title-font mb-12 text-center text-blue-800 dark:text-white text-2xl font-semibold tracking-tighter sm:text-5xl",children:["A Basic Japanese - English Dictionary",Object(a.jsx)("br",{})]}),Object(a.jsx)(f,{search:function(e){if(c([]),e.preventDefault(),i){var t="/api/".concat(i);h.a.get(t).then((function(e){var t=e.data.data;if(t.length<1)return u(!1);u(!0),t.map((function(e){return c((function(t){return p.current.scrollIntoView({behavior:"smooth"}),[].concat(Object(o.a)(t),[{reading:e.japanese[0].reading,kanji:e.japanese[0].word,def1:e.senses[0].english_definitions[0],def2:"undefined"!==typeof e.senses[1]?e.senses[1].english_definitions[0]:"",details:"https://jisho.org/word/"+e.japanese[0].word}])}))}))})).catch((function(e){return console.log("error",e)}))}},searchTerm:i,setSearchTerm:d}),!b&&Object(a.jsx)("p",{className:"text-center dark:text-gray-400 text-gray-500 text-xl",children:"No Results"})]})}),Object(a.jsx)("div",{ref:p,children:Object(a.jsx)(g,{results:r,success:b})})]})}function w(){return Object(a.jsx)("div",{className:"h-75",children:Object(a.jsxs)("div",{className:"mb-36 mt-24",children:[Object(a.jsx)("div",{className:"mb-12 mt-12 text-center opacity-90",children:Object(a.jsx)("img",{alt:"profile",src:"Hocus_Avatar.svg",className:"mx-auto w-40 h-40 rounded-full object-cover"})}),Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("p",{className:"text-gray-800 dark:text-white text-2xl",children:"Hocus Pucus"}),Object(a.jsx)("p",{className:"dark:text-gray-200 text-gray-500 text-xl font-light",children:"Creator"}),Object(a.jsx)("p",{className:"text-md py-4 dark:text-gray-400 text-gray-500 font-light",children:"Student/Developer"})]}),Object(a.jsxs)("div",{className:"flex items-center justify-evenly mx-auto pt-8 w-44 text-gray-500 border-t border-gray-200",children:[Object(a.jsx)("a",{href:"mailto:japanesedb.contact@gmail.com",children:Object(a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"dark:hover:text-white hover:text-gray-800 text-xl transition-colors duration-200",viewBox:"0 0 20 20",children:[Object(a.jsx)("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),Object(a.jsx)("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]})}),Object(a.jsx)("a",{href:"https://github.com/HocusPucus",target:"_blank",rel:"noreferrer",children:Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"dark:hover:text-white hover:text-gray-800 text-xl transition-colors duration-200",viewBox:"0 0 1792 1792",children:Object(a.jsx)("path",{d:"M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"})})})]})]})})}function O(){return Object(a.jsxs)("section",{className:"body-font text-gray-700 pb-24",children:[Object(a.jsx)("div",{className:"container mx-auto pt-24 px-8 lg:px-4",children:Object(a.jsx)("div",{className:"flex flex-col mb-12 w-full text-left lg:text-center",children:Object(a.jsx)("h1",{className:"title-font title-font mb-6 text-center text-blue-800 dark:text-white text-2xl font-semibold tracking-tighter sm:text-5xl",children:"Sources"})})}),Object(a.jsxs)("div",{className:"flex-wrap gap-8 items-center justify-center text-center sm:flex",children:[Object(a.jsxs)("div",{className:"mt-6 px-4 py-4 w-full dark:bg-gray-800 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4",children:[Object(a.jsx)("h3",{className:"py-4 text-gray-700 dark:text-white underline text-2xl font-semibold sm:text-xl",children:Object(a.jsx)("a",{href:"http://www.edrdg.org/wiki/index.php/JMdict-EDICT_Dictionary_Project",target:"_blank",rel:"noreferrer",children:"JMdict"})}),Object(a.jsx)("p",{className:"text-md py-4 dark:text-gray-300 text-gray-500",children:"JMdict, created by Jim Breen and now managed by the Electronic Dictionary Research and Development Group (EDRDG), is a great general dictionary with roughly 170 000 entries and is actively maintained by Jim Breen and a team of volunteers. This dictionary file is the source of the bulk of the words in this dictionary."})]}),Object(a.jsxs)("div",{className:"mt-6 px-4 py-4 w-full dark:bg-gray-800 bg-white rounded-lg shadow-lg sm:mt-16 sm:w-1/2 md:mt-20 md:w-1/2 lg:mt-24 lg:w-1/4",children:[Object(a.jsx)("h3",{className:"py-4 text-gray-700 dark:text-white underline text-2xl font-semibold sm:text-xl",children:Object(a.jsx)("a",{href:"http://www.edrdg.org/enamdict/enamdict_doc.html",target:"_blank",rel:"noreferrer",children:"JMnedict"})}),Object(a.jsx)("p",{className:"text-md py-4 dark:text-gray-300 text-gray-500",children:"JMnedict, also from Jim Breen/EDRDG, is an immense database of Japanese proper names for people, companies and locations."})]}),Object(a.jsxs)("div",{className:"mt-6 px-4 py-4 w-full dark:bg-gray-800 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4",children:[Object(a.jsx)("h3",{className:"py-4 text-gray-700 dark:text-white underline text-2xl font-semibold sm:text-xl",children:Object(a.jsx)("a",{href:"http://www.edrdg.org/wiki/index.php/KANJIDIC_Project",target:"_blank",rel:"noreferrer",children:"KANJIDIC2"})}),Object(a.jsx)("p",{className:"text-md py-4 dark:text-gray-300 text-gray-500",children:"KANJIDIC2, also from Jim Breen/EDRDG, is a database of kanji that includes readings, meanings and a lot of metadata around kanji like lookup numbers for kanji dictionary books, stroke count and information sources variant forms."})]})]})]})}function y(){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"container z-10 flex items-center justify-between mx-auto pt-32 px-6 h-screen md:pt-0",children:Object(a.jsxs)("div",{className:"container relative flex flex-col-reverse items-center justify-between mx-auto px-6 lg:flex-row",children:[Object(a.jsxs)("div",{className:"mb-16 w-full text-center md:mb-8 lg:text-left",children:[Object(a.jsx)("h1",{className:"mt-12 text-center text-gray-700 font-sans text-5xl font-black md:mt-0 lg:text-left lg:text-8xl",children:"Sorry, this page isn't available"}),Object(a.jsx)(i.b,{to:"/",children:Object(a.jsx)("button",{className:"mt-16 px-2 py-2 w-36 text-center text-white text-base font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg focus:outline-none shadow-md transition duration-200 ease-in focus:ring-blue-500 focus:ring-offset-blue-200 focus:ring-offset-2 focus:ring-2",children:"Go back home"})})]}),Object(a.jsx)("div",{className:"relative block mx-auto w-full max-w-md md:mt-0 lg:max-w-2xl",children:Object(a.jsx)("img",{src:"404.svg",alt:"404"})})]})})})}function v(){return Object(a.jsx)("footer",{className:"text-2 px-3 py-8 dark:text-gray-200 text-gray-500 bg-gray-100 dark:bg-gray-800 transition-colors duration-200",children:Object(a.jsxs)("div",{className:"flex flex-col",children:[Object(a.jsx)("div",{className:"mt-7 mx-auto w-11 h-px rounded-full md:hidden"}),Object(a.jsxs)("div",{className:"flex flex-col mt-4 md:flex-row md:mt-0",children:[Object(a.jsx)("nav",{className:"flex flex-1 flex-col items-center justify-center border-gray-200 md:items-end md:pr-5 md:border-r",children:Object(a.jsxs)("span",{"aria-current":"page",className:"w-72 text-center text-xs lg:text-right",children:["This site uses the\xa0",Object(a.jsx)("a",{className:"text-blue-400 underline",href:"http://www.edrdg.org/wiki/index.php/JMdict-EDICT_Dictionary_Project",children:"JMdict"}),",\xa0",Object(a.jsx)("a",{className:"text-blue-400 underline",href:"http://www.edrdg.org/wiki/index.php/KANJIDIC_Project",children:"Kanjidic2"}),"\xa0and\xa0",Object(a.jsx)("a",{className:"text-blue-400 underline",href:"http://www.edrdg.org/enamdict/enamdict_doc.html",children:"JMnedict"}),"\xa0dictionary files. These files are the property of the\xa0",Object(a.jsx)("a",{className:"text-blue-400 underline",href:"http://www.edrdg.org/",children:"Electronic Dictionary Research and Development Group"}),", and are used in conformance with the Group's\xa0",Object(a.jsx)("a",{className:"text-blue-400 underline",href:"http://www.edrdg.org/edrdg/licence.html",children:"licence"}),"."]})}),Object(a.jsx)("div",{className:"mt-4 mx-auto w-11 h-px rounded-full md:hidden"}),Object(a.jsxs)("div",{className:"flex flex-1 items-center justify-center mt-4 border-gray-200 md:mt-0 md:border-r",children:[Object(a.jsxs)("a",{className:"hover:text-primary-gray-20",href:"mailto:japanesedb.contact@gmail.com",children:[Object(a.jsx)("span",{className:"sr-only",children:"Email"}),Object(a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"dark:hover:text-white hover:text-gray-800 text-xl transition-colors duration-200",viewBox:"0 0 20 20",children:[Object(a.jsx)("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),Object(a.jsx)("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]})]}),Object(a.jsxs)("a",{className:"hover:text-primary-gray-20 ml-4",target:"_blank",rel:"noreferrer",href:"https://github.com/HocusPucus",children:[Object(a.jsx)("span",{className:"sr-only",children:"GitHub"}),Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"dark:hover:text-white hover:text-gray-800 text-xl transition-colors duration-200",viewBox:"0 0 1792 1792",children:Object(a.jsx)("path",{d:"M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"})})]})]}),Object(a.jsx)("div",{className:"mt-4 mx-auto w-11 h-px rounded-full md:hidden"}),Object(a.jsxs)("div",{className:"flex flex-1 flex-col items-center justify-center mt-7 md:items-start md:mt-0 md:pl-5",children:[Object(a.jsx)("span",{className:"",children:"\xa9 2021"}),Object(a.jsx)("span",{className:"mt-7 md:mt-1",children:"Created by HocusPucus"})]})]})]})})}var N=function(e){var t=Object(s.useState)(!1),r=Object(x.a)(t,2),c=r[0],l=r[1];return Object(a.jsxs)("div",{className:"relative inline-block text-left z-10",children:[Object(a.jsx)("div",{children:Object(a.jsxs)("button",{type:"button",onClick:function(){return l(!c)},className:" ".concat(e.withBackground?"border border-gray-300 bg-white dark:bg-gray-800 shadow-sm":""," flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"),id:"options-menu",children:[e.label,e.icon||Object(a.jsx)("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{d:"M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"})})]})}),(e.forceOpen||c)&&Object(a.jsx)("div",{className:"origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5",children:Object(a.jsx)("div",{className:"py-1 ".concat(e.withDivider?"divide-y divide-gray-100":""),role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu",children:e.items.map((function(e){return Object(a.jsxs)("a",{href:e.link||"/",className:"".concat(e.icon?"flex items-center":"block"," block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"),role:"menuitem",children:[e.icon,Object(a.jsxs)("span",{className:"flex flex-col",children:[Object(a.jsx)("span",{children:e.label}),e.desc&&Object(a.jsx)("span",{className:"text-gray-400 text-xs",children:e.desc})]})]},e.label)}))})})]})};function k(){return Object(a.jsxs)(i.a,{children:[Object(a.jsx)("div",{children:Object(a.jsx)("nav",{className:"dark:bg-gray-800 bg-white shadow",children:Object(a.jsx)("div",{className:"mx-auto px-8 max-w-7xl",children:Object(a.jsxs)("div",{className:"flex items-center justify-between h-16",children:[Object(a.jsxs)("div",{className:"flex items-center justify-between w-full",children:[Object(a.jsx)("div",{children:Object(a.jsx)(i.b,{className:"flex-shrink-0",to:"/",children:Object(a.jsxs)("h1",{id:"navTitle",className:"font-heading text-blue-700 dark:text-white text-xl font-semibold",children:[Object(a.jsx)("img",{className:"inline-block mr-5 w-8 h-8 rounded-lg",src:"/logo192.png",alt:"Workflow"}),Object(a.jsx)("span",{className:"align-text-top",children:"JapaneseDB"})]})})}),Object(a.jsx)("div",{className:"hidden md:block",children:Object(a.jsxs)("div",{className:"flex items-baseline ml-10 space-x-4",children:[Object(a.jsx)(i.b,{className:"dark:hover:text-white px-3 py-2 dark:text-gray-400 text-gray-800 hover:text-gray-800 text-sm font-medium rounded-md",to:"/",children:"Home"}),Object(a.jsx)(i.b,{className:"dark:hover:text-white px-3 py-2 dark:text-gray-400 text-gray-800 hover:text-gray-800 text-sm font-medium rounded-md",to:"/sources",children:"Sources"}),Object(a.jsx)(i.b,{className:"dark:hover:text-white px-3 py-2 dark:text-gray-400 text-gray-800 hover:text-gray-800 text-sm font-medium rounded-md",to:"/contact",children:"Contact"})]})})]}),Object(a.jsx)("div",{className:"block",children:Object(a.jsx)("div",{className:"flex items-center ml-4 md:ml-6"})}),Object(a.jsx)("div",{className:"flex -mr-2 md:hidden",children:Object(a.jsx)(N,{withBackground:!1,icon:Object(a.jsx)("svg",{width:"20",height:"20",fill:"currentColor",className:"w-8 h-8",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{d:"M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"})}),label:"",withDivider:!0,items:[{label:"Home",link:"/"},{label:"Sources",link:"/sources"},{label:"Contact",link:"/contact"}]})})]})})})}),Object(a.jsxs)(d.c,{children:[Object(a.jsx)(d.a,{exact:!0,path:"/",children:Object(a.jsx)(p,{})}),Object(a.jsx)(d.a,{path:"/sources",children:Object(a.jsx)(O,{})}),Object(a.jsx)(d.a,{path:"/contact",children:Object(a.jsx)(w,{})}),Object(a.jsx)(d.a,{path:"*",children:Object(a.jsx)(y,{})})]}),Object(a.jsx)(v,{})]})}r(59);n.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.67b9445a.chunk.js.map