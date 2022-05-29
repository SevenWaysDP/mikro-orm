"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[154],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54140:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"Usage with Babel"},s=void 0,u={unversionedId:"usage-with-babel",id:"version-5.2/usage-with-babel",title:"Usage with Babel",description:"When compiling TS via babel, decorators are by default handled different implementation",source:"@site/versioned_docs/version-5.2/usage-with-babel.md",sourceDirName:".",slug:"/usage-with-babel",permalink:"/docs/usage-with-babel",draft:!1,editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-5.2/usage-with-babel.md",tags:[],version:"5.2",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1656963182,formattedLastUpdatedAt:"7/4/2022",frontMatter:{title:"Usage with Babel"},sidebar:"docs",previous:{title:"Usage with Vanilla JS",permalink:"/docs/usage-with-js"},next:{title:"Usage with AdminJS",permalink:"/docs/usage-with-adminjs"}},p={},c=[],m={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When compiling TS via babel, decorators are by default handled different implementation\nthan what ",(0,o.kt)("inlineCode",{parentName:"p"},"tsc")," uses. To make the metadata extraction from decorators via Babel work,\nwe need to do use following plugins:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "plugins": [\n    "babel-plugin-transform-typescript-metadata",\n    ["@babel/plugin-proposal-decorators", { "legacy": true }],\n    ["@babel/plugin-proposal-class-properties", { "loose": true  }]\n  ]\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Make sure to install the plugins first: ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn add -D babel-plugin-transform-typescript-metadata @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties"))),(0,o.kt)("p",null,"Lastly we need to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"BABEL_DECORATORS_COMPAT")," environment variable to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," to\nadjust the return value of decorators. "),(0,o.kt)("p",null,"More information about this topic can be found here:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/issues/840"},"https://github.com/mikro-orm/mikro-orm/issues/840")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://jonahallibonetech.medium.com/next-js-9-mikroorm-eb6f6e08e1a1"},"https://jonahallibonetech.medium.com/next-js-9-mikroorm-eb6f6e08e1a1"))))}d.isMDXComponent=!0}}]);