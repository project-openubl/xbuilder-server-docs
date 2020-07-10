(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{164:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(10),l=(a(0),a(179)),i={id:"configuration",title:"Configuration"},b={id:"configuration",isDocsHomePage:!1,title:"Configuration",description:"XBuilder Server allows you to change the default configuration of the server. For configuring the server, XBuilder Server uses variables.",source:"@site/docs/configuration.md",permalink:"/xbuilder-server-docs/docs/configuration",editUrl:"https://github.com/project-openubl/xbuilder-server/edit/master/docusaurus/docs/configuration.md",sidebar:"someSidebar",previous:{title:"Sign XMLs",permalink:"/xbuilder-server-docs/docs/sign_xmls"}},c=[{value:"Variables",id:"variables",children:[]},{value:"Override variables",id:"override-variables",children:[{value:"Docker example",id:"docker-example",children:[]},{value:"JVM example",id:"jvm-example",children:[]},{value:"Linux example",id:"linux-example",children:[]}]}],o={rightToc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"XBuilder Server")," allows you to change the default configuration of the server. For configuring the server, ",Object(l.b)("em",{parentName:"p"},"XBuilder Server")," uses variables."),Object(l.b)("h2",{id:"variables"},"Variables"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"variable"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"default value"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"openubl.igv"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0.18"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Value of the IGV tax")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"openubl.ivap"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0.04"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Value of the IVAP tax")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"openubl.icb"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0.20"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Value of the ICB tax")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"openubl.timezone"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"America/Lima"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Time zone in which automatic dates will be generated")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"openubl.server.keystore.location"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"null")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"(Optional) The location of the certificate you want to use if you'd like to sign all your certificates")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"openubl.server.keystore.password"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"null")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"(Optional) The password of the certificate you want to use if you'd like to sign all your certificates")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"openubl.defaults.moneda"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"PEN"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Default currency you want to use")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"openubl.defaults.unidad-medida"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"NIU"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Default Unit of Measure")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"openubl.defaults.tipo-igv"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GRAVADO_OPERACION_ONEROSA"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Default type of ",Object(l.b)("em",{parentName:"td"},"IGV")," taxes you want to apply")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"openubl.defaults.tipo-nota-credito"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ANULACION_DE_LA_OPERACION"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Default type of ",Object(l.b)("em",{parentName:"td"},"CreditNote"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"openubl.defaults.tipo-nota-debito"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"AUMENTO_EN_EL_VALOR"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Default type of ",Object(l.b)("em",{parentName:"td"},"DebitNote"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"openubl.defaults.regimen-percepcion"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"VENTA_INTERNA"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Default type of ",Object(l.b)("em",{parentName:"td"},"Perception"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"openubl.defaults.regimen-retencion"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"TASA_TRES"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Default type of ",Object(l.b)("em",{parentName:"td"},"Retention"))))),Object(l.b)("h2",{id:"override-variables"},"Override variables"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"XBuilder Server")," is based on Quarkus and you can take advantage of their system to override variables. For more information about how to override properties read ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://quarkus.io/guides/config#overriding-properties-at-runtime"}),"Quarkus Config")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"You can override these runtime properties with the following mechanisms (in decreasing priority):"),Object(l.b)("ol",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"using system properties:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"for a runner jar: java -Dquarkus.datasource.password=youshallnotpass -jar target/myapp-runner.jar"),Object(l.b)("li",{parentName:"ul"},"for a native executable: ./target/myapp-runner -Dquarkus.datasource.password=youshallnotpass"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"using environment variables:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"for a runner jar: export QUARKUS_DATASOURCE_PASSWORD=youshallnotpass ; java -jar target/myapp-runner.jar")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"for a native executable: export QUARKUS_DATASOURCE_PASSWORD=youshallnotpass ; ./target/myapp-runner")))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"using an environment file named .env placed in the current working directory containing the line QUARKUS_DATASOURCE_PASSWORD=youshallnotpass (for dev mode, this file can be placed in the root of the project, but it is advised to not check it in to version control)")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"using a configuration file placed in \\$PWD/config/application.properties"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"By placing an application.properties file inside a directory named config which resides in the directory where the application runs, any runtime properties defined in that file will override the default configuration. Furthermore any runtime properties added to this file that were not part of the original application.properties file will also be taken into account.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"This works in the same way for runner jar and the native executable"))))),Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},Object(l.b)("a",Object(r.a)({parentName:"strong"},{href:"https://quarkus.io/guides/config#overriding-properties-at-runtime"}),"https://quarkus.io/guides/config#overriding-properties-at-runtime")))),Object(l.b)("h3",{id:"docker-example"},"Docker example"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"docker run \\\n-e OPENUBL_ICB=0.9 \\\nprojectopenubl/xbuilder-server\n")),Object(l.b)("h3",{id:"jvm-example"},"JVM example"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"java -Dopenubl.icb=0.9 -jar xbuilder-*-runner.jar\n")),Object(l.b)("h3",{id:"linux-example"},"Linux example"),Object(l.b)("p",null,"Using system properties:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"./xbuilder-server-* -Dopenubl.icb=0.9\n")),Object(l.b)("p",null,"Using environment variables:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"export OPENUBL_ICB=0.9 ; ./xbuilder-server-*\n")))}p.isMDXComponent=!0},179:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},u=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(a),O=r,d=u["".concat(i,".").concat(O)]||u[O]||s[O]||l;return a?n.a.createElement(d,b(b({ref:t},o),{},{components:a})):n.a.createElement(d,b({ref:t},o))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=O;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,i[1]=b;for(var o=2;o<l;o++)i[o]=a[o];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);