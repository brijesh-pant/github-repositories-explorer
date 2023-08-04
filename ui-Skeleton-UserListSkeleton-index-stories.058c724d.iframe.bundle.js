"use strict";(self.webpackChunkgithub_repositories_explorer=self.webpackChunkgithub_repositories_explorer||[]).push([[966],{"./node_modules/@mui/material/Skeleton/Skeleton.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Skeleton_Skeleton}});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js");function getUnit(input){return String(input).match(/[\d.\-+]*\s*(.*)/)[1]||""}function toUnitless(length){return parseFloat(length)}var colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getSkeletonUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiSkeleton",slot)}(0,generateUtilityClasses.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["animation","className","component","height","style","variant","width"];let _t,_t2,_t3,_t4,_=t=>t;const pulseKeyframe=(0,emotion_react_browser_esm.F4)(_t||(_t=_`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),waveKeyframe=(0,emotion_react_browser_esm.F4)(_t2||(_t2=_`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),SkeletonRoot=(0,styled.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState:ownerState}=props;return[styles.root,styles[ownerState.variant],!1!==ownerState.animation&&styles[ownerState.animation],ownerState.hasChildren&&styles.withChildren,ownerState.hasChildren&&!ownerState.width&&styles.fitContent,ownerState.hasChildren&&!ownerState.height&&styles.heightAuto]}})((({theme:theme,ownerState:ownerState})=>{const radiusUnit=getUnit(theme.shape.borderRadius)||"px",radiusValue=toUnitless(theme.shape.borderRadius);return(0,esm_extends.Z)({display:"block",backgroundColor:theme.vars?theme.vars.palette.Skeleton.bg:(0,colorManipulator.Fq)(theme.palette.text.primary,"light"===theme.palette.mode?.11:.13),height:"1.2em"},"text"===ownerState.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${radiusValue}${radiusUnit}/${Math.round(radiusValue/.6*10)/10}${radiusUnit}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===ownerState.variant&&{borderRadius:"50%"},"rounded"===ownerState.variant&&{borderRadius:(theme.vars||theme).shape.borderRadius},ownerState.hasChildren&&{"& > *":{visibility:"hidden"}},ownerState.hasChildren&&!ownerState.width&&{maxWidth:"fit-content"},ownerState.hasChildren&&!ownerState.height&&{height:"auto"})}),(({ownerState:ownerState})=>"pulse"===ownerState.animation&&(0,emotion_react_browser_esm.iv)(_t3||(_t3=_`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),pulseKeyframe)),(({ownerState:ownerState,theme:theme})=>"wave"===ownerState.animation&&(0,emotion_react_browser_esm.iv)(_t4||(_t4=_`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),waveKeyframe,(theme.vars||theme).palette.action.hover)));var Skeleton_Skeleton=react.forwardRef((function Skeleton(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiSkeleton"}),{animation:animation="pulse",className:className,component:component="span",height:height,style:style,variant:variant="text",width:width}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{animation:animation,component:component,variant:variant,hasChildren:Boolean(other.children)}),classes=(ownerState=>{const{classes:classes,variant:variant,animation:animation,hasChildren:hasChildren,width:width,height:height}=ownerState,slots={root:["root",variant,animation,hasChildren&&"withChildren",hasChildren&&!width&&"fitContent",hasChildren&&!height&&"heightAuto"]};return(0,composeClasses.Z)(slots,getSkeletonUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(SkeletonRoot,(0,esm_extends.Z)({as:component,ref:ref,className:(0,clsx.Z)(classes.root,className),ownerState:ownerState},other,{style:(0,esm_extends.Z)({width:width,height:height},style)}))}))},"./src/ui/Skeleton/UserListSkeleton/index.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:function(){return Basic},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return index_stories}});var _Basic$parameters,_Basic$parameters2,_Basic$parameters2$do,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),Skeleton=__webpack_require__("./node_modules/@mui/material/Skeleton/Skeleton.js"),ListItemButton=__webpack_require__("./node_modules/@mui/material/ListItemButton/ListItemButton.js"),ListItemText=__webpack_require__("./node_modules/@mui/material/ListItemText/ListItemText.js"),ListItemAvatar=__webpack_require__("./node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UserListSkeleton(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:Array(5).fill(1).map((function(_,index){return(0,jsx_runtime.jsxs)(ListItemButton.Z,{"data-testid":"user-list-item-skeleton",sx:{minWidth:350,m:2},children:[(0,jsx_runtime.jsx)(ListItemAvatar.Z,{children:(0,jsx_runtime.jsx)(Skeleton.Z,{animation:"wave",variant:"circular",width:40,height:40})}),(0,jsx_runtime.jsx)(ListItemText.Z,{primary:(0,jsx_runtime.jsx)(Skeleton.Z,{animation:"wave",height:20,width:"80%",style:{marginBottom:6}})})]},index)}))})}UserListSkeleton.__docgenInfo={description:"Display a placeholder preview of Github UserList content before the data gets loaded.",methods:[],displayName:"UserListSkeleton"};var index_stories={title:"UI/Skeleton/UserListSkeleton",component:UserListSkeleton,parameters:{layout:"centered"},tags:["autodocs"]},Basic={render:function render(){return(0,jsx_runtime.jsx)(UserListSkeleton,{})}};Basic.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Basic.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Basic$parameters=Basic.parameters)||void 0===_Basic$parameters?void 0:_Basic$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  render: () => <UserListSkeleton />\n}"},null===(_Basic$parameters2=Basic.parameters)||void 0===_Basic$parameters2||null===(_Basic$parameters2$do=_Basic$parameters2.docs)||void 0===_Basic$parameters2$do?void 0:_Basic$parameters2$do.source)})});var __namedExportsOrder=["Basic"]}}]);
//# sourceMappingURL=ui-Skeleton-UserListSkeleton-index-stories.058c724d.iframe.bundle.js.map