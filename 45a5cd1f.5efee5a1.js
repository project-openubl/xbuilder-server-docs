(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(10),o=(n(0),n(175)),c={id:"concepts",title:"Concepts"},i={id:"concepts",isDocsHomePage:!1,title:"Concepts",description:"XBuilder creates XML files based on 3 objects:",source:"@site/docs/concepts.md",permalink:"/xbuilder-server-docs/docs/concepts",editUrl:"https://github.com/project-openubl/xbuilder-server/edit/master/docusaurus/docs/concepts.md"},l=[{value:"Config",id:"config",children:[{value:"Create your own Config",id:"create-your-own-config",children:[]}]},{value:"SystemClock",id:"systemclock",children:[]},{value:"POJO",id:"pojo",children:[]}],u={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"XBuilder creates XML files based on 3 objects:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Config")," - Default values to apply in case those values are not defined by the user."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"System clock")," - A clock which should give the current system time and the time zone."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"POJO"),"- The POJO which contains the data to be used to create the XML file.")),Object(o.b)("p",null,"Those 3 objects are later used when creating a XML file. E.g."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"DocumentWrapper<InvoiceOutputModel> result = DocumentManager.createXML(pojo, config, systemClock);\n")),Object(o.b)("h2",{id:"config"},"Config"),Object(o.b)("p",null,"You have two options for creating instances of ",Object(o.b)("inlineCode",{parentName:"p"},"Config"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Use the ",Object(o.b)("inlineCode",{parentName:"li"},"DefaultConfig")," Class which implements ",Object(o.b)("inlineCode",{parentName:"li"},"Config"),"."),Object(o.b)("li",{parentName:"ul"},"Implement your own version using the inheritance features of Java.")),Object(o.b)("h3",{id:"create-your-own-config"},"Create your own Config"),Object(o.b)("p",null,"Implement the interface ",Object(o.b)("inlineCode",{parentName:"p"},"Config"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class MyCustomConfig implements Config {\n\n    private BigDecimal igv;\n    private BigDecimal ivap;\n    private String defaultMoneda;\n    private String defaultUnidadMedida;\n    private Catalog9 defaultTipoNotaCredito;\n    private Catalog10 defaultTipoNotaDebito;\n    private BigDecimal defaultIcb;\n    private Catalog7 defaultTipoIgv;\n\n    public DefaultConfig() {\n        this.defaultMoneda = "PEN";\n        this.defaultUnidadMedida = "NIU";\n        this.igv = new BigDecimal("0.18");\n        this.ivap = new BigDecimal("0.04");\n        this.defaultIcb = new BigDecimal("0.2");\n        ...\n    }\n}\n')),Object(o.b)("h2",{id:"systemclock"},"SystemClock"),Object(o.b)("p",null,"To create a SystemClock class you need to implement ",Object(o.b)("inlineCode",{parentName:"p"},"SystemClock")," interface:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),' public class MyCustomClock implements SystemClock {\n    @Override\n    public TimeZone getTimeZone() {\n        return TimeZone.getTimeZone("America/Lima");\n    }\n\n    @Override\n    public Calendar getCalendarInstance() {\n        return Calendar.getInstance();\n    }\n}\n')),Object(o.b)("h2",{id:"pojo"},"POJO"),Object(o.b)("p",null,"The POJO is the Input Data that will be used to create the XML file based on UBL standards."),Object(o.b)("p",null,"There are different types of POJOs depending of which type of XML you want to create. You can always take advantage of the POJO's Builder available for every case. E.g."),Object(o.b)("p",null,"If you want to create an ",Object(o.b)("em",{parentName:"p"},"invoice"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"InvoiceInputModel pojo = InvoiceInputModel.Builder.anInvoiceInputModel().build();\n")),Object(o.b)("p",null,"If you want to create a ",Object(o.b)("em",{parentName:"p"},"credit note"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"CreditNoteInputModel pojo = CreditNoteInputModel.Builder.aCreditNoteInputModel()\n")),Object(o.b)("p",null,"You will be familiarized with every single POJO as you go through the docs."))}p.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,m=s["".concat(c,".").concat(d)]||s[d]||b[d]||o;return n?r.a.createElement(m,i(i({ref:t},u),{},{components:n})):r.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);