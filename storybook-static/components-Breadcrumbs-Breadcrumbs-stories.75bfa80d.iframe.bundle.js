/*! For license information please see components-Breadcrumbs-Breadcrumbs-stories.75bfa80d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkjadid_ui_test=self.webpackChunkjadid_ui_test||[]).push([[763],{"./src/components/Breadcrumbs/Breadcrumbs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultBreadcrumbs:()=>DefaultBreadcrumbs,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Breadcrumbs_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Breadcrumbs=({items,itemRender,params={},separator="/",className})=>(0,jsx_runtime.jsx)("nav",{className:`flex items-center text-sm ${className}`,children:items.map(((item,index)=>{if("type"in item&&"separator"===item.type)return(0,jsx_runtime.jsx)("span",{className:"mx-2 text-gray-400",children:item.separator||separator},index);const{title,href,onClick,icon}=item;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[itemRender?itemRender(item,params,items,[]):(0,jsx_runtime.jsxs)("span",{className:"flex items-center",children:[icon&&(0,jsx_runtime.jsx)("span",{className:"mr-1",children:icon}),href?(0,jsx_runtime.jsx)("a",{href,className:`flex items-center ${className}`,children:title}):(0,jsx_runtime.jsx)("button",{onClick,className:`flex items-center ${className}`,children:title})]}),index<items.length-1&&(0,jsx_runtime.jsx)("span",{className:"mx-2 text-gray-400",children:separator})]},index)}))});Breadcrumbs.displayName="Breadcrumbs";const Breadcrumbs_Breadcrumbs=Breadcrumbs;try{Breadcrumbs.displayName="Breadcrumbs",Breadcrumbs.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}},itemRender:{defaultValue:null,description:"",name:"itemRender",required:!1,type:{name:"(route: RouteItemType, params: any, routes: BreadcrumbItem[], paths: string[]) => ReactNode"}},params:{defaultValue:{value:"{}"},description:"",name:"params",required:!1,type:{name:"object"}},separator:{defaultValue:{value:"/"},description:"",name:"separator",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Breadcrumbs/Breadcrumbs.tsx#Breadcrumbs"]={docgenInfo:Breadcrumbs.__docgenInfo,name:"Breadcrumbs",path:"src/components/Breadcrumbs/Breadcrumbs.tsx#Breadcrumbs"})}catch(__react_docgen_typescript_loader_error){}var svgIcons=__webpack_require__("./src/assets/svgs/svgIcons.tsx");const Breadcrumbs_stories={title:"Navigation/Breadcrumbs",component:Breadcrumbs_Breadcrumbs,argTypes:{items:{control:"object",description:"Array of breadcrumb items"},itemRender:{control:"function",description:"Custom renderer for breadcrumb items"},separator:{control:"text",description:"Separator between items"},className:{control:"text",description:"Additional CSS class"}}},Template=args=>(0,jsx_runtime.jsx)(Breadcrumbs_Breadcrumbs,{items:[],...args});Template.displayName="Template";const DefaultBreadcrumbs=Template.bind({});DefaultBreadcrumbs.args={items:[{title:(0,jsx_runtime.jsx)(svgIcons.JG,{}),href:"/"},{title:"Application Center",href:"/app-center"},{title:"Application List",href:"/app-center"},{title:"An Application",onClick:()=>alert("Clicked!")}]},DefaultBreadcrumbs.parameters={...DefaultBreadcrumbs.parameters,docs:{...DefaultBreadcrumbs.parameters?.docs,source:{originalSource:"args => <Breadcrumbs items={[]} {...args} />",...DefaultBreadcrumbs.parameters?.docs?.source}}};const __namedExportsOrder=["DefaultBreadcrumbs"]},"./src/assets/svgs/svgIcons.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{JG:()=>ChevronLeft,X5:()=>XClose,aG:()=>IconStar,c_:()=>ChevronRight});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const IconStar=({filled=!1,halfFilled=!1,size=24,color="#f0f0f0"})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{viewBox:"64 64 896 896",focusable:"false",width:size,height:size,fill:filled?color:"#f0f0f0",stroke:filled||halfFilled?color:"#f0f0f0",strokeWidth:halfFilled?"1":"0","aria-hidden":"true",className:halfFilled?"half-filled-star":"",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"})});IconStar.displayName="IconStar";const ChevronRight=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-chevron-right",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"m9 18 6-6-6-6"})});ChevronRight.displayName="ChevronRight";const ChevronLeft=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-chevron-left",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"m15 18-6-6 6-6"})});ChevronLeft.displayName="ChevronLeft";const XClose=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-x",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M18 6 6 18"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"m6 6 12 12"})]});XClose.displayName="XClose";try{IconStar.displayName="IconStar",IconStar.__docgenInfo={description:"",displayName:"IconStar",props:{filled:{defaultValue:{value:"false"},description:"",name:"filled",required:!1,type:{name:"boolean"}},halfFilled:{defaultValue:{value:"false"},description:"",name:"halfFilled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"24"},description:"",name:"size",required:!1,type:{name:"number"}},color:{defaultValue:{value:"#f0f0f0"},description:"",name:"color",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/assets/svgs/svgIcons.tsx#IconStar"]={docgenInfo:IconStar.__docgenInfo,name:"IconStar",path:"src/assets/svgs/svgIcons.tsx#IconStar"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);