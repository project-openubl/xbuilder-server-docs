(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var i=n(2),a=n(10),r=(n(0),n(184)),o={id:"peru_selling_price",title:"Selling price"},c={id:"peru_selling_price",isDocsHomePage:!1,title:"Selling price",description:"Whenever an item is selled and registered through an _InvoiceType_, _CreditNoteType_, or _DebitNoteType_ there are two different prices that must be included inside the XML file:",source:"@site/docs/peru_selling_price.md",permalink:"/xbuilder-server-docs/docs/peru_selling_price",editUrl:"https://github.com/project-openubl/xbuilder-server/edit/master/docusaurus/docs/peru_selling_price.md",sidebar:"someSidebar",previous:{title:"ICB",permalink:"/xbuilder-server-docs/docs/peru_icb"}},l=[{value:"Case 1 - Quantity and Price before taxes",id:"case-1---quantity-and-price-before-taxes",children:[{value:"<em>Invoice (boleta/factura)</em>",id:"invoice-boletafactura",children:[]},{value:"<em>CreditNote (nota de cr\xe9dito)</em>",id:"creditnote-nota-de-cr\xe9dito",children:[]},{value:"<em>DebitNote (nota de d\xe9bito)</em>",id:"debitnote-nota-de-d\xe9bito",children:[]}]},{value:"Case 2 - Quantity and Price after taxes",id:"case-2---quantity-and-price-after-taxes",children:[{value:"<em>Invoice (boleta/factura)</em>",id:"invoice-boletafactura-1",children:[]},{value:"<em>CreditNote (nota de cr\xe9dito)</em>",id:"creditnote-nota-de-cr\xe9dito-1",children:[]},{value:"<em>DebitNote (nota de d\xe9bito)</em>",id:"debitnote-nota-de-d\xe9bito-1",children:[]}]},{value:"How the third variable is calculated",id:"how-the-third-variable-is-calculated",children:[]}],d={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Whenever an item is selled and registered through an ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"InvoiceType"),", ",Object(r.b)("em",{parentName:"strong"},"CreditNoteType"),", or ",Object(r.b)("em",{parentName:"strong"},"DebitNoteType"))," there are two different prices that must be included inside the XML file:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Price before taxes"),Object(r.b)("li",{parentName:"ul"},"Price after taxes")),Object(r.b)("p",null,"Besides the ",Object(r.b)("em",{parentName:"p"},"pricing")," it is also required to have the ",Object(r.b)("em",{parentName:"p"},"quantity")," of the item you are selling so we are able to have a formula like:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"QUANTITY ","*"," PRICE BEFORE TAXES = SELLING PRICE")),Object(r.b)("p",null,"You only need 2 of the 3 variables defined in the formula above; the third variable will be calculated by ",Object(r.b)("inlineCode",{parentName:"p"},"XBuilder"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Case 1")," - You have ",Object(r.b)("inlineCode",{parentName:"li"},"Quantity")," and ",Object(r.b)("inlineCode",{parentName:"li"},"price before taxes"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Case 2")," - You have ",Object(r.b)("inlineCode",{parentName:"li"},"Quantity")," and ",Object(r.b)("inlineCode",{parentName:"li"},"price after taxes"),".")),Object(r.b)("h2",{id:"case-1---quantity-and-price-before-taxes"},"Case 1 - Quantity and Price before taxes"),Object(r.b)("p",null,"You have ",Object(r.b)("inlineCode",{parentName:"p"},"Quantity")," and ",Object(r.b)("inlineCode",{parentName:"p"},"price before taxes"),". This is the recommended set of variables you need to use."),Object(r.b)("p",null,"You need to use ",Object(r.b)("inlineCode",{parentName:"p"},"cantidad")," and ",Object(r.b)("inlineCode",{parentName:"p"},"precioUnitario"),"."),Object(r.b)("h3",{id:"invoice-boletafactura"},Object(r.b)("em",{parentName:"h3"},"Invoice (boleta/factura)")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"InvoiceInputModel pojo = InvoiceInputModel.Builder.anInvoiceInputModel()\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioUnitario(new BigDecimal(100))\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioUnitario(new BigDecimal(100))\n                        .build())\n        )\n        .build();\n")),Object(r.b)("h3",{id:"creditnote-nota-de-cr\xe9dito"},Object(r.b)("em",{parentName:"h3"},"CreditNote (nota de cr\xe9dito)")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"CreditNoteInputModel pojo = CreditNoteInputModel.Builder.aCreditNoteInputModel()\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioUnitario(new BigDecimal(100))\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioUnitario(new BigDecimal(100))\n                        .build())\n        )\n        .build();\n")),Object(r.b)("h3",{id:"debitnote-nota-de-d\xe9bito"},Object(r.b)("em",{parentName:"h3"},"DebitNote (nota de d\xe9bito)")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"DebitNoteInputModel pojo = DebitNoteInputModel.Builder.aDebitNoteInputModel()\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioUnitario(new BigDecimal(100))\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioUnitario(new BigDecimal(100))\n                        .build())\n        )\n        .build();\n")),Object(r.b)("h2",{id:"case-2---quantity-and-price-after-taxes"},"Case 2 - Quantity and Price after taxes"),Object(r.b)("p",null,"You have ",Object(r.b)("inlineCode",{parentName:"p"},"Quantity")," and ",Object(r.b)("inlineCode",{parentName:"p"},"price after taxes"),"."),Object(r.b)("p",null,"It is not easy to determine the ",Object(r.b)("em",{parentName:"p"},"price before taxes")," starting from the ",Object(r.b)("em",{parentName:"p"},"price after taxes")," because every single tax is applied in a different way and using a different formula and values. Having said that, ",Object(r.b)("inlineCode",{parentName:"p"},"XBuilder")," is able to determine the ",Object(r.b)("em",{parentName:"p"},"price before taxes")," starting from the ",Object(r.b)("em",{parentName:"p"},"price with IGV"),"."),Object(r.b)("p",null,"You need to use ",Object(r.b)("inlineCode",{parentName:"p"},"cantidad")," and ",Object(r.b)("inlineCode",{parentName:"p"},"precioConIgv"),"."),Object(r.b)("h3",{id:"invoice-boletafactura-1"},Object(r.b)("em",{parentName:"h3"},"Invoice (boleta/factura)")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"InvoiceInputModel pojo = InvoiceInputModel.Builder.anInvoiceInputModel()\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioConIgv(new BigDecimal(118))\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioConIgv(new BigDecimal(118))\n                        .build())\n        )\n        .build();\n")),Object(r.b)("h3",{id:"creditnote-nota-de-cr\xe9dito-1"},Object(r.b)("em",{parentName:"h3"},"CreditNote (nota de cr\xe9dito)")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"CreditNoteInputModel pojo = CreditNoteInputModel.Builder.aCreditNoteInputModel()\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioConIgv(new BigDecimal(118))\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioConIgv(new BigDecimal(118))\n                        .build())\n        )\n        .build();\n")),Object(r.b)("h3",{id:"debitnote-nota-de-d\xe9bito-1"},Object(r.b)("em",{parentName:"h3"},"DebitNote (nota de d\xe9bito)")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"DebitNoteInputModel pojo = DebitNoteInputModel.Builder.aDebitNoteInputModel()\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioConIgv(new BigDecimal(118))\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioConIgv(new BigDecimal(118))\n                        .build())\n        )\n        .build();\n")),Object(r.b)("h2",{id:"how-the-third-variable-is-calculated"},"How the third variable is calculated"),Object(r.b)("p",null,"Regarding of the way you are following ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"#case-1---quantity-and-price-before-taxes"}),"Case 1")," or ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"#case-2---quantity-and-price-after-taxes"}),"Case 2")," you need to know that the thrid variable, calculated out of the box by ",Object(r.b)("inlineCode",{parentName:"p"},"XBuilder"),", is affected by the value of ",Object(r.b)("inlineCode",{parentName:"p"},"igv")," within ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"./concepts#config"}),"Config")),Object(r.b)("p",null,"When creating the ",Object(r.b)("inlineCode",{parentName:"p"},"Config")," instance you should define also the value of ",Object(r.b)("inlineCode",{parentName:"p"},"igv"),". The interface ",Object(r.b)("inlineCode",{parentName:"p"},"Config")," defines a method ",Object(r.b)("inlineCode",{parentName:"p"},"getIgv")," which should be implemented by you."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"public interface Config {\n    BigDecimal getIgv();\n    ...\n}\n")))}b.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),b=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=i,s=u["".concat(o,".").concat(m)]||u[m]||p[m]||r;return n?a.a.createElement(s,c(c({ref:t},d),{},{components:n})):a.a.createElement(s,c({ref:t},d))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var d=2;d<r;d++)o[d]=n[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);