/*! For license information please see components-Row-Row-stories.46fd784b.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkjadid_ui_test=self.webpackChunkjadid_ui_test||[]).push([[323],{"./src/components/Row/Row.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomGutter:()=>CustomGutter,Default:()=>Default,NestedColumns:()=>NestedColumns,ResponsiveColumns:()=>ResponsiveColumns,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Row_stories});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Row=({gutter=[0,0],children,className,style,...restProps})=>{const rowClass=classnames_default()("flex flex-wrap",className),gutterStyle={marginLeft:`-${gutter[0]/2}px`,marginRight:`-${gutter[0]/2}px`,rowGap:`${gutter[1]}px`,...style};return(0,jsx_runtime.jsx)("div",{className:rowClass,style:gutterStyle,...restProps,children:react.Children.map(children,(child=>(0,jsx_runtime.jsx)("div",{style:{paddingLeft:gutter[0]/2+"px",paddingRight:gutter[0]/2+"px"},children:child})))})};Row.displayName="Row";const Row_Row=Row;try{Row.displayName="Row",Row.__docgenInfo={description:"",displayName:"Row",props:{gutter:{defaultValue:{value:"[0, 0]"},description:"",name:"gutter",required:!1,type:{name:"[number, number]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Row/Row.tsx#Row"]={docgenInfo:Row.__docgenInfo,name:"Row",path:"src/components/Row/Row.tsx#Row"})}catch(__react_docgen_typescript_loader_error){}const Col=({span=6,offset=0,order,pull,push,flex,children,className,style,...restProps})=>{const colClass=classnames_default()(span?`w-full sm:w-${2*span}/12`:"hidden",offset?`ml-${2*offset}/12`:"",push?`order-${push}`:"",pull?`-order-${pull}`:"",className),colStyle={...style,order,flex};return(0,jsx_runtime.jsx)("div",{className:colClass,style:colStyle,...restProps,children})};Col.displayName="Col";const Col_Col=Col;try{Col.displayName="Col",Col.__docgenInfo={description:"",displayName:"Col",props:{span:{defaultValue:{value:"6"},description:"",name:"span",required:!1,type:{name:"number"}},offset:{defaultValue:{value:"0"},description:"",name:"offset",required:!1,type:{name:"number"}},order:{defaultValue:null,description:"",name:"order",required:!1,type:{name:"number"}},pull:{defaultValue:null,description:"",name:"pull",required:!1,type:{name:"number"}},push:{defaultValue:null,description:"",name:"push",required:!1,type:{name:"number"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string | number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Col/Col.tsx#Col"]={docgenInfo:Col.__docgenInfo,name:"Col",path:"src/components/Col/Col.tsx#Col"})}catch(__react_docgen_typescript_loader_error){}const Row_stories={title:"Layout/Row and Col",component:Row_Row},Template=args=>(0,jsx_runtime.jsxs)(Row_Row,{...args,children:[(0,jsx_runtime.jsx)(Col_Col,{span:8,children:(0,jsx_runtime.jsx)("div",{className:"bg-blue-300 p-4",children:"Column 1"})}),(0,jsx_runtime.jsx)(Col_Col,{span:8,children:(0,jsx_runtime.jsx)("div",{className:"bg-green-300 p-4",children:"Column 2"})}),(0,jsx_runtime.jsx)(Col_Col,{span:8,children:(0,jsx_runtime.jsx)("div",{className:"bg-red-300 p-4",children:"Column 3"})})]});Template.displayName="Template";const Default=Template.bind({});Default.args={gutter:[16,16]};const CustomGutter=Template.bind({});CustomGutter.args={gutter:[32,16]};const NestedColumns=()=>(0,jsx_runtime.jsxs)(Row_Row,{gutter:[16,16],children:[(0,jsx_runtime.jsxs)(Col_Col,{span:12,children:[(0,jsx_runtime.jsx)("div",{className:"bg-blue-300 p-4",children:"Column 1"}),(0,jsx_runtime.jsxs)(Row_Row,{gutter:[16,16],children:[(0,jsx_runtime.jsx)(Col_Col,{span:12,children:(0,jsx_runtime.jsx)("div",{className:"bg-yellow-300 p-4",children:"Nested Column 1"})}),(0,jsx_runtime.jsx)(Col_Col,{span:12,children:(0,jsx_runtime.jsx)("div",{className:"bg-purple-300 p-4",children:"Nested Column 2"})})]})]}),(0,jsx_runtime.jsx)(Col_Col,{span:12,children:(0,jsx_runtime.jsx)("div",{className:"bg-green-300 p-4",children:"Column 2"})})]});NestedColumns.displayName="NestedColumns";const ResponsiveColumns=()=>(0,jsx_runtime.jsxs)(Row_Row,{gutter:[16,16],children:[(0,jsx_runtime.jsx)(Col_Col,{span:24,className:"sm:span-12",children:(0,jsx_runtime.jsx)("div",{className:"bg-blue-300 p-4",children:"Column 1 (sm: span-12)"})}),(0,jsx_runtime.jsx)(Col_Col,{span:24,className:"sm:span-12",children:(0,jsx_runtime.jsx)("div",{className:"bg-green-300 p-4",children:"Column 2 (sm: span-12)"})})]});ResponsiveColumns.displayName="ResponsiveColumns",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => <Row {...args}>\r\n    <Col span={8}>\r\n      <div className="bg-blue-300 p-4">Column 1</div>\r\n    </Col>\r\n    <Col span={8}>\r\n      <div className="bg-green-300 p-4">Column 2</div>\r\n    </Col>\r\n    <Col span={8}>\r\n      <div className="bg-red-300 p-4">Column 3</div>\r\n    </Col>\r\n  </Row>',...Default.parameters?.docs?.source}}},CustomGutter.parameters={...CustomGutter.parameters,docs:{...CustomGutter.parameters?.docs,source:{originalSource:'args => <Row {...args}>\r\n    <Col span={8}>\r\n      <div className="bg-blue-300 p-4">Column 1</div>\r\n    </Col>\r\n    <Col span={8}>\r\n      <div className="bg-green-300 p-4">Column 2</div>\r\n    </Col>\r\n    <Col span={8}>\r\n      <div className="bg-red-300 p-4">Column 3</div>\r\n    </Col>\r\n  </Row>',...CustomGutter.parameters?.docs?.source}}},NestedColumns.parameters={...NestedColumns.parameters,docs:{...NestedColumns.parameters?.docs,source:{originalSource:'() => <Row gutter={[16, 16]}>\r\n    <Col span={12}>\r\n      <div className="bg-blue-300 p-4">Column 1</div>\r\n      <Row gutter={[16, 16]}>\r\n        <Col span={12}>\r\n          <div className="bg-yellow-300 p-4">Nested Column 1</div>\r\n        </Col>\r\n        <Col span={12}>\r\n          <div className="bg-purple-300 p-4">Nested Column 2</div>\r\n        </Col>\r\n      </Row>\r\n    </Col>\r\n    <Col span={12}>\r\n      <div className="bg-green-300 p-4">Column 2</div>\r\n    </Col>\r\n  </Row>',...NestedColumns.parameters?.docs?.source}}},ResponsiveColumns.parameters={...ResponsiveColumns.parameters,docs:{...ResponsiveColumns.parameters?.docs,source:{originalSource:'() => <Row gutter={[16, 16]}>\r\n    <Col span={24} className="sm:span-12">\r\n      <div className="bg-blue-300 p-4">Column 1 (sm: span-12)</div>\r\n    </Col>\r\n    <Col span={24} className="sm:span-12">\r\n      <div className="bg-green-300 p-4">Column 2 (sm: span-12)</div>\r\n    </Col>\r\n  </Row>',...ResponsiveColumns.parameters?.docs?.source}}};const __namedExportsOrder=["Default","CustomGutter","NestedColumns","ResponsiveColumns"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);