/*! For license information please see components-Title-Title-stories.c06e186d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkjadid_ui_test=self.webpackChunkjadid_ui_test||[]).push([[319],{"./src/components/Title/Title.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{H1:()=>H1,H2:()=>H2,H3:()=>H3,H4:()=>H4,H5:()=>H5,H6:()=>H6,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Title_stories});__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Title=({order=1,className,children})=>{const styles={1:"text-4xl font-bold",2:"text-3xl font-bold",3:"text-2xl font-bold",4:"text-xl font-bold",5:"text-lg font-bold",6:"text-base font-bold"}[order],Tag=`h${order}`;return(0,jsx_runtime.jsx)(Tag,{className:classnames_default()(styles,className),children})};Title.displayName="Title";const Title_Title=Title;try{Title.displayName="Title",Title.__docgenInfo={description:"",displayName:"Title",props:{order:{defaultValue:{value:"1"},description:"",name:"order",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Title/Title.tsx#Title"]={docgenInfo:Title.__docgenInfo,name:"Title",path:"src/components/Title/Title.tsx#Title"})}catch(__react_docgen_typescript_loader_error){}const Title_stories={title:"General/Title",component:Title_Title},Template=args=>(0,jsx_runtime.jsx)(Title_Title,{...args});Template.displayName="Template";const H1=Template.bind({});H1.args={order:1,children:"This is h1 title"};const H2=Template.bind({});H2.args={order:2,children:"This is h2 title"};const H3=Template.bind({});H3.args={order:3,children:"This is h3 title"};const H4=Template.bind({});H4.args={order:4,children:"This is h4 title"};const H5=Template.bind({});H5.args={order:5,children:"This is h5 title"};const H6=Template.bind({});H6.args={order:6,children:"This is h6 title"},H1.parameters={...H1.parameters,docs:{...H1.parameters?.docs,source:{originalSource:"args => <Title {...args} />",...H1.parameters?.docs?.source}}},H2.parameters={...H2.parameters,docs:{...H2.parameters?.docs,source:{originalSource:"args => <Title {...args} />",...H2.parameters?.docs?.source}}},H3.parameters={...H3.parameters,docs:{...H3.parameters?.docs,source:{originalSource:"args => <Title {...args} />",...H3.parameters?.docs?.source}}},H4.parameters={...H4.parameters,docs:{...H4.parameters?.docs,source:{originalSource:"args => <Title {...args} />",...H4.parameters?.docs?.source}}},H5.parameters={...H5.parameters,docs:{...H5.parameters?.docs,source:{originalSource:"args => <Title {...args} />",...H5.parameters?.docs?.source}}},H6.parameters={...H6.parameters,docs:{...H6.parameters?.docs,source:{originalSource:"args => <Title {...args} />",...H6.parameters?.docs?.source}}};const __namedExportsOrder=["H1","H2","H3","H4","H5","H6"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);