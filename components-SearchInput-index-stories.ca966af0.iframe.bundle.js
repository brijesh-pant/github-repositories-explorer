"use strict";(self.webpackChunkgithub_repositories_explorer=self.webpackChunkgithub_repositories_explorer||[]).push([[280],{"./src/components/SearchInput/index.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:function(){return Basic},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return index_stories}});var _Basic$parameters,_Basic$parameters2,_Basic$parameters2$do,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react_final_form_es=__webpack_require__("./node_modules/react-final-form/dist/react-final-form.es.js"),Stack=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),useMediaQuery=__webpack_require__("./node_modules/@mui/material/useMediaQuery/useMediaQuery.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),TextField=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),StyledTextField=(0,styled.ZP)(TextField.Z)((function(_ref){var theme=_ref.theme;return{"& .MuiOutlinedInput-input":{padding:theme.spacing(1,2),borderRadius:theme.spacing(.75),height:theme.spacing(4),color:theme.palette.custom[100],background:theme.palette.custom[200]},"& .MuiOutlinedInput-notchedOutline":{border:"none"}}})),StyledSubmitButton=(0,styled.ZP)(Button.Z)((function(_ref2){var theme=_ref2.theme;return(0,defineProperty.Z)({boxShadow:"none",fontSize:"14px",lineHeight:theme.spacing(2.5),marginLeft:theme.spacing(2),minWidth:theme.spacing(15),width:theme.spacing(15),paddingTop:theme.spacing(1.75),paddingBottom:theme.spacing(1.75)},theme.breakpoints.down("md"),{width:"100%"})})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),required=function required(value){return value?void 0:"Required"};function SearchInput(_ref){var helperText=_ref.helperText,onSubmit=_ref.onSubmit,direction=(0,useMediaQuery.Z)((function(theme){return theme.breakpoints.up("md")}))?"row":"column",testId="row"===direction?"search-input-desktop":"search-input-mobile";return(0,jsx_runtime.jsx)(react_final_form_es.l0,{onSubmit:onSubmit,render:function render(_ref2){var handleSubmit=_ref2.handleSubmit,submitting=_ref2.submitting,pristine=_ref2.pristine;return(0,jsx_runtime.jsx)("form",{onSubmit:handleSubmit,children:(0,jsx_runtime.jsxs)(Stack.Z,{"data-testid":testId,spacing:2,direction:direction,alignItems:"baseline",children:[(0,jsx_runtime.jsx)(react_final_form_es.gN,{name:"username",validate:required,children:function children(_ref3){var input=_ref3.input;_ref3.meta;return(0,jsx_runtime.jsx)(StyledTextField,(0,objectSpread2.Z)((0,objectSpread2.Z)({},input),{},{id:"username-input",autoComplete:"off",fullWidth:!0,autoFocus:!0,placeholder:"Enter username…",InputLabelProps:{shrink:!1,disableUnderline:!0},helperText:helperText}))}}),(0,jsx_runtime.jsx)(StyledSubmitButton,{"data-testid":"search-button",fullWidth:!0,variant:"contained",type:"submit",disabled:submitting||pristine,children:"Search"})]})})}})}SearchInput.__docgenInfo={description:"",methods:[],displayName:"SearchInput",props:{helperText:{description:"",type:{name:"union",value:[{name:"string"},{name:"bool"}]},required:!1},onSubmit:{description:"",type:{name:"func"},required:!1}}};var index_stories={title:"Components/SearchInput",component:SearchInput,tags:["autodocs"]},Basic={render:function render(){return(0,jsx_runtime.jsx)(SearchInput,{onSubmit:function onSubmit(){}})}};Basic.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Basic.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Basic$parameters=Basic.parameters)||void 0===_Basic$parameters?void 0:_Basic$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  render: () => <SearchInput onSubmit={() => {}} />\n}"},null===(_Basic$parameters2=Basic.parameters)||void 0===_Basic$parameters2||null===(_Basic$parameters2$do=_Basic$parameters2.docs)||void 0===_Basic$parameters2$do?void 0:_Basic$parameters2$do.source)})});var __namedExportsOrder=["Basic"]}}]);