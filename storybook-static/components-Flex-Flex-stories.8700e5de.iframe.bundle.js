/*! For license information please see components-Flex-Flex-stories.8700e5de.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkjadid_ui_test=self.webpackChunkjadid_ui_test||[]).push([[619],{"./src/components/Flex/Flex.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AlignEnd:()=>AlignEnd,CustomFlex:()=>CustomFlex,Default:()=>Default,JustifyCenter:()=>JustifyCenter,Vertical:()=>Vertical,Wrapped:()=>Wrapped,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Flex_stories});__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Flex=({children,className="",vertical=!1,wrap="nowrap",justify="normal",align="normal",flex="initial",gap="0",as:Component="div"})=>{const directionClass=vertical?"flex-col":"flex-row",wrapClass="boolean"==typeof wrap?wrap?"flex-wrap":"flex-nowrap":`flex-${wrap}`,justifyClass="normal"!==justify?`justify-${justify}`:"",alignClass="normal"!==align?`items-${align}`:"",gapClass=classnames_default()({"gap-2":"small"===gap,"gap-4":"middle"===gap,"gap-6":"large"===gap,[`gap-${gap}`]:"string"==typeof gap||"number"==typeof gap}),flexClass=classnames_default()("flex",directionClass,wrapClass,justifyClass,alignClass,gapClass,className);return(0,jsx_runtime.jsx)(Component,{className:flexClass,style:{flex},children})};Flex.displayName="Flex";const Flex_Flex=Flex;try{Flex.displayName="Flex",Flex.__docgenInfo={description:"",displayName:"Flex",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},vertical:{defaultValue:{value:"false"},description:"",name:"vertical",required:!1,type:{name:"boolean"}},wrap:{defaultValue:{value:"nowrap"},description:"",name:"wrap",required:!1,type:{name:'boolean | "wrap" | "nowrap" | "wrap-reverse"'}},justify:{defaultValue:{value:"normal"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"between"'},{value:'"around"'},{value:'"evenly"'},{value:'"normal"'}]}},align:{defaultValue:{value:"normal"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"baseline"'},{value:'"normal"'},{value:'"stretch"'}]}},flex:{defaultValue:{value:"initial"},description:"",name:"flex",required:!1,type:{name:"string"}},gap:{defaultValue:{value:"0"},description:"",name:"gap",required:!1,type:{name:"string | number"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ComponentType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Flex/Flex.tsx#Flex"]={docgenInfo:Flex.__docgenInfo,name:"Flex",path:"src/components/Flex/Flex.tsx#Flex"})}catch(__react_docgen_typescript_loader_error){}const Flex_stories={title:"Layout/Flex",component:Flex_Flex,argTypes:{children:{control:"text"},className:{control:"text"},vertical:{control:"boolean"},wrap:{control:"select",options:["nowrap","wrap","wrap-reverse"]},justify:{control:"select",options:["start","center","end","between","around","evenly","normal"]},align:{control:"select",options:["start","center","end","baseline","stretch","normal"]},flex:{control:"text"},gap:{control:"select",options:["small","middle","large"]}}},Template=args=>(0,jsx_runtime.jsx)(Flex_Flex,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:"p-4 bg-blue-500 text-white",children:"Item 1"}),(0,jsx_runtime.jsx)("div",{className:"p-4 bg-green-500 text-white",children:"Item 2"}),(0,jsx_runtime.jsx)("div",{className:"p-4 bg-red-500 text-white",children:"Item 3"})]}),vertical:!1,wrap:"nowrap",justify:"start",align:"center",gap:"middle"};const Vertical=Template.bind({});Vertical.args={children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:"p-4 bg-blue-500 text-white",children:"Item 1"}),(0,jsx_runtime.jsx)("div",{className:"p-4 bg-green-500 text-white",children:"Item 2"}),(0,jsx_runtime.jsx)("div",{className:"p-4 bg-red-500 text-white",children:"Item 3"})]}),vertical:!0,wrap:"wrap",justify:"center",align:"center",gap:"large"};const Wrapped=Template.bind({});Wrapped.args={children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:"p-4 bg-blue-500 text-white",children:"Item 1"}),(0,jsx_runtime.jsx)("div",{className:"p-4 bg-green-500 text-white",children:"Item 2"}),(0,jsx_runtime.jsx)("div",{className:"p-4 bg-red-500 text-white",children:"Item 3"}),(0,jsx_runtime.jsx)("div",{className:"p-4 bg-yellow-500 text-white",children:"Item 4"}),(0,jsx_runtime.jsx)("div",{className:"p-4 bg-purple-500 text-white",children:"Item 5"})]}),vertical:!1,wrap:"wrap",justify:"around",align:"center",gap:"small"};const JustifyCenter=Template.bind({});JustifyCenter.args={children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:"p-4 bg-blue-500 text-white",children:"Item 1"}),(0,jsx_runtime.jsx)("div",{className:"p-4 bg-green-500 text-white",children:"Item 2"}),(0,jsx_runtime.jsx)("div",{className:"p-4 bg-red-500 text-white",children:"Item 3"})]}),vertical:!1,wrap:"nowrap",justify:"center",align:"center",gap:"middle"};const AlignEnd=Template.bind({});AlignEnd.args={children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:"p-4 bg-blue-500 text-white",children:"Item 1"}),(0,jsx_runtime.jsx)("div",{className:"p-4 bg-green-500 text-white",children:"Item 2"}),(0,jsx_runtime.jsx)("div",{className:"p-4 bg-red-500 text-white",children:"Item 3"})]}),vertical:!1,wrap:"nowrap",justify:"start",align:"end",gap:"middle"};const CustomFlex=Template.bind({});CustomFlex.args={children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:"p-4 bg-blue-500 text-white",children:"Item 1"}),(0,jsx_runtime.jsx)("div",{className:"p-4 bg-green-500 text-white",children:"Item 2"}),(0,jsx_runtime.jsx)("div",{className:"p-4 bg-red-500 text-white",children:"Item 3"})]}),vertical:!1,wrap:"nowrap",justify:"between",align:"stretch",flex:"1",gap:"large"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Flex {...args} />",...Default.parameters?.docs?.source}}},Vertical.parameters={...Vertical.parameters,docs:{...Vertical.parameters?.docs,source:{originalSource:"args => <Flex {...args} />",...Vertical.parameters?.docs?.source}}},Wrapped.parameters={...Wrapped.parameters,docs:{...Wrapped.parameters?.docs,source:{originalSource:"args => <Flex {...args} />",...Wrapped.parameters?.docs?.source}}},JustifyCenter.parameters={...JustifyCenter.parameters,docs:{...JustifyCenter.parameters?.docs,source:{originalSource:"args => <Flex {...args} />",...JustifyCenter.parameters?.docs?.source}}},AlignEnd.parameters={...AlignEnd.parameters,docs:{...AlignEnd.parameters?.docs,source:{originalSource:"args => <Flex {...args} />",...AlignEnd.parameters?.docs?.source}}},CustomFlex.parameters={...CustomFlex.parameters,docs:{...CustomFlex.parameters?.docs,source:{originalSource:"args => <Flex {...args} />",...CustomFlex.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Vertical","Wrapped","JustifyCenter","AlignEnd","CustomFlex"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);