"use strict";(self.webpackChunkgithub_repositories_explorer=self.webpackChunkgithub_repositories_explorer||[]).push([[401],{"./node_modules/@mui/material/List/List.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return List_List}});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),ListContext=__webpack_require__("./node_modules/@mui/material/List/ListContext.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getListUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiList",slot)}(0,generateUtilityClasses.Z)("MuiList",["root","padding","dense","subheader"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","className","component","dense","disablePadding","subheader"],ListRoot=(0,styled.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState:ownerState}=props;return[styles.root,!ownerState.disablePadding&&styles.padding,ownerState.dense&&styles.dense,ownerState.subheader&&styles.subheader]}})((({ownerState:ownerState})=>(0,esm_extends.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!ownerState.disablePadding&&{paddingTop:8,paddingBottom:8},ownerState.subheader&&{paddingTop:0})));var List_List=react.forwardRef((function List(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiList"}),{children:children,className:className,component:component="ul",dense:dense=!1,disablePadding:disablePadding=!1,subheader:subheader}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),context=react.useMemo((()=>({dense:dense})),[dense]),ownerState=(0,esm_extends.Z)({},props,{component:component,dense:dense,disablePadding:disablePadding}),classes=(ownerState=>{const{classes:classes,disablePadding:disablePadding,dense:dense,subheader:subheader}=ownerState,slots={root:["root",!disablePadding&&"padding",dense&&"dense",subheader&&"subheader"]};return(0,composeClasses.Z)(slots,getListUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(ListContext.Z.Provider,{value:context,children:(0,jsx_runtime.jsxs)(ListRoot,(0,esm_extends.Z)({as:component,className:(0,clsx.Z)(classes.root,className),ref:ref,ownerState:ownerState},other,{children:[subheader,children]}))})}))},"./node_modules/@mui/material/List/ListContext.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){const ListContext=__webpack_require__("./node_modules/react/index.js").createContext({});__webpack_exports__.Z=ListContext},"./node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return ListItemAvatar_ListItemAvatar}});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),ListContext=__webpack_require__("./node_modules/@mui/material/List/ListContext.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getListItemAvatarUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiListItemAvatar",slot)}(0,generateUtilityClasses.Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className"],ListItemAvatarRoot=(0,styled.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState:ownerState}=props;return[styles.root,"flex-start"===ownerState.alignItems&&styles.alignItemsFlexStart]}})((({ownerState:ownerState})=>(0,esm_extends.Z)({minWidth:56,flexShrink:0},"flex-start"===ownerState.alignItems&&{marginTop:8})));var ListItemAvatar_ListItemAvatar=react.forwardRef((function ListItemAvatar(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiListItemAvatar"}),{className:className}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),context=react.useContext(ListContext.Z),ownerState=(0,esm_extends.Z)({},props,{alignItems:context.alignItems}),classes=(ownerState=>{const{alignItems:alignItems,classes:classes}=ownerState,slots={root:["root","flex-start"===alignItems&&"alignItemsFlexStart"]};return(0,composeClasses.Z)(slots,getListItemAvatarUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(ListItemAvatarRoot,(0,esm_extends.Z)({className:(0,clsx.Z)(classes.root,className),ownerState:ownerState,ref:ref},other))}))},"./node_modules/@mui/material/ListItemButton/ListItemButton.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return ListItemButton_ListItemButton}});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),ButtonBase=__webpack_require__("./node_modules/@mui/material/ButtonBase/ButtonBase.js"),useEnhancedEffect=__webpack_require__("./node_modules/@mui/material/utils/useEnhancedEffect.js"),useForkRef=__webpack_require__("./node_modules/@mui/material/utils/useForkRef.js"),ListContext=__webpack_require__("./node_modules/@mui/material/List/ListContext.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getListItemButtonUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiListItemButton",slot)}var ListItemButton_listItemButtonClasses=(0,generateUtilityClasses.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],ListItemButtonRoot=(0,styled.ZP)(ButtonBase.Z,{shouldForwardProp:prop=>(0,styled.FO)(prop)||"classes"===prop,name:"MuiListItemButton",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState:ownerState}=props;return[styles.root,ownerState.dense&&styles.dense,"flex-start"===ownerState.alignItems&&styles.alignItemsFlexStart,ownerState.divider&&styles.divider,!ownerState.disableGutters&&styles.gutters]}})((({theme:theme,ownerState:ownerState})=>(0,esm_extends.Z)({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:theme.transitions.create("background-color",{duration:theme.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(theme.vars||theme).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${ListItemButton_listItemButtonClasses.selected}`]:{backgroundColor:theme.vars?`rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})`:(0,colorManipulator.Fq)(theme.palette.primary.main,theme.palette.action.selectedOpacity),[`&.${ListItemButton_listItemButtonClasses.focusVisible}`]:{backgroundColor:theme.vars?`rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))`:(0,colorManipulator.Fq)(theme.palette.primary.main,theme.palette.action.selectedOpacity+theme.palette.action.focusOpacity)}},[`&.${ListItemButton_listItemButtonClasses.selected}:hover`]:{backgroundColor:theme.vars?`rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))`:(0,colorManipulator.Fq)(theme.palette.primary.main,theme.palette.action.selectedOpacity+theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:theme.vars?`rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})`:(0,colorManipulator.Fq)(theme.palette.primary.main,theme.palette.action.selectedOpacity)}},[`&.${ListItemButton_listItemButtonClasses.focusVisible}`]:{backgroundColor:(theme.vars||theme).palette.action.focus},[`&.${ListItemButton_listItemButtonClasses.disabled}`]:{opacity:(theme.vars||theme).palette.action.disabledOpacity}},ownerState.divider&&{borderBottom:`1px solid ${(theme.vars||theme).palette.divider}`,backgroundClip:"padding-box"},"flex-start"===ownerState.alignItems&&{alignItems:"flex-start"},!ownerState.disableGutters&&{paddingLeft:16,paddingRight:16},ownerState.dense&&{paddingTop:4,paddingBottom:4})));var ListItemButton_ListItemButton=react.forwardRef((function ListItemButton(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiListItemButton"}),{alignItems:alignItems="center",autoFocus:autoFocus=!1,component:component="div",children:children,dense:dense=!1,disableGutters:disableGutters=!1,divider:divider=!1,focusVisibleClassName:focusVisibleClassName,selected:selected=!1,className:className}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),context=react.useContext(ListContext.Z),childContext=react.useMemo((()=>({dense:dense||context.dense||!1,alignItems:alignItems,disableGutters:disableGutters})),[alignItems,context.dense,dense,disableGutters]),listItemRef=react.useRef(null);(0,useEnhancedEffect.Z)((()=>{autoFocus&&listItemRef.current&&listItemRef.current.focus()}),[autoFocus]);const ownerState=(0,esm_extends.Z)({},props,{alignItems:alignItems,dense:childContext.dense,disableGutters:disableGutters,divider:divider,selected:selected}),classes=(ownerState=>{const{alignItems:alignItems,classes:classes,dense:dense,disabled:disabled,disableGutters:disableGutters,divider:divider,selected:selected}=ownerState,slots={root:["root",dense&&"dense",!disableGutters&&"gutters",divider&&"divider",disabled&&"disabled","flex-start"===alignItems&&"alignItemsFlexStart",selected&&"selected"]},composedClasses=(0,composeClasses.Z)(slots,getListItemButtonUtilityClass,classes);return(0,esm_extends.Z)({},classes,composedClasses)})(ownerState),handleRef=(0,useForkRef.Z)(listItemRef,ref);return(0,jsx_runtime.jsx)(ListContext.Z.Provider,{value:childContext,children:(0,jsx_runtime.jsx)(ListItemButtonRoot,(0,esm_extends.Z)({ref:handleRef,href:other.href||other.to,component:(other.href||other.to)&&"div"===component?"button":component,focusVisibleClassName:(0,clsx.Z)(classes.focusVisible,focusVisibleClassName),ownerState:ownerState,className:(0,clsx.Z)(classes.root,className)},other,{classes:classes,children:children}))})}))},"./node_modules/@mui/material/ListItemText/ListItemText.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return ListItemText_ListItemText}});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),ListContext=__webpack_require__("./node_modules/@mui/material/List/ListContext.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getListItemTextUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiListItemText",slot)}var ListItemText_listItemTextClasses=(0,generateUtilityClasses.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],ListItemTextRoot=(0,styled.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState:ownerState}=props;return[{[`& .${ListItemText_listItemTextClasses.primary}`]:styles.primary},{[`& .${ListItemText_listItemTextClasses.secondary}`]:styles.secondary},styles.root,ownerState.inset&&styles.inset,ownerState.primary&&ownerState.secondary&&styles.multiline,ownerState.dense&&styles.dense]}})((({ownerState:ownerState})=>(0,esm_extends.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},ownerState.primary&&ownerState.secondary&&{marginTop:6,marginBottom:6},ownerState.inset&&{paddingLeft:56})));var ListItemText_ListItemText=react.forwardRef((function ListItemText(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiListItemText"}),{children:children,className:className,disableTypography:disableTypography=!1,inset:inset=!1,primary:primaryProp,primaryTypographyProps:primaryTypographyProps,secondary:secondaryProp,secondaryTypographyProps:secondaryTypographyProps}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),{dense:dense}=react.useContext(ListContext.Z);let primary=null!=primaryProp?primaryProp:children,secondary=secondaryProp;const ownerState=(0,esm_extends.Z)({},props,{disableTypography:disableTypography,inset:inset,primary:!!primary,secondary:!!secondary,dense:dense}),classes=(ownerState=>{const{classes:classes,inset:inset,primary:primary,secondary:secondary,dense:dense}=ownerState,slots={root:["root",inset&&"inset",dense&&"dense",primary&&secondary&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,composeClasses.Z)(slots,getListItemTextUtilityClass,classes)})(ownerState);return null==primary||primary.type===Typography.Z||disableTypography||(primary=(0,jsx_runtime.jsx)(Typography.Z,(0,esm_extends.Z)({variant:dense?"body2":"body1",className:classes.primary,component:null!=primaryTypographyProps&&primaryTypographyProps.variant?void 0:"span",display:"block"},primaryTypographyProps,{children:primary}))),null==secondary||secondary.type===Typography.Z||disableTypography||(secondary=(0,jsx_runtime.jsx)(Typography.Z,(0,esm_extends.Z)({variant:"body2",className:classes.secondary,color:"text.secondary",display:"block"},secondaryTypographyProps,{children:secondary}))),(0,jsx_runtime.jsxs)(ListItemTextRoot,(0,esm_extends.Z)({className:(0,clsx.Z)(classes.root,className),ownerState:ownerState,ref:ref},other,{children:[primary,secondary]}))}))},"./src/components/UserListItem/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{All:function(){return All},Basic:function(){return Basic},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return index_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),List=__webpack_require__("./node_modules/@mui/material/List/List.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getDividerUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiDivider",slot)}(0,generateUtilityClasses.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],DividerRoot=(0,styled.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState:ownerState}=props;return[styles.root,ownerState.absolute&&styles.absolute,styles[ownerState.variant],ownerState.light&&styles.light,"vertical"===ownerState.orientation&&styles.vertical,ownerState.flexItem&&styles.flexItem,ownerState.children&&styles.withChildren,ownerState.children&&"vertical"===ownerState.orientation&&styles.withChildrenVertical,"right"===ownerState.textAlign&&"vertical"!==ownerState.orientation&&styles.textAlignRight,"left"===ownerState.textAlign&&"vertical"!==ownerState.orientation&&styles.textAlignLeft]}})((({theme:theme,ownerState:ownerState})=>(0,esm_extends.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(theme.vars||theme).palette.divider,borderBottomWidth:"thin"},ownerState.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},ownerState.light&&{borderColor:theme.vars?`rgba(${theme.vars.palette.dividerChannel} / 0.08)`:(0,colorManipulator.Fq)(theme.palette.divider,.08)},"inset"===ownerState.variant&&{marginLeft:72},"middle"===ownerState.variant&&"horizontal"===ownerState.orientation&&{marginLeft:theme.spacing(2),marginRight:theme.spacing(2)},"middle"===ownerState.variant&&"vertical"===ownerState.orientation&&{marginTop:theme.spacing(1),marginBottom:theme.spacing(1)},"vertical"===ownerState.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},ownerState.flexItem&&{alignSelf:"stretch",height:"auto"})),(({ownerState:ownerState})=>(0,esm_extends.Z)({},ownerState.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})),(({theme:theme,ownerState:ownerState})=>(0,esm_extends.Z)({},ownerState.children&&"vertical"!==ownerState.orientation&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(theme.vars||theme).palette.divider}`}})),(({theme:theme,ownerState:ownerState})=>(0,esm_extends.Z)({},ownerState.children&&"vertical"===ownerState.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(theme.vars||theme).palette.divider}`}})),(({ownerState:ownerState})=>(0,esm_extends.Z)({},"right"===ownerState.textAlign&&"vertical"!==ownerState.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===ownerState.textAlign&&"vertical"!==ownerState.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),DividerWrapper=(0,styled.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(props,styles)=>{const{ownerState:ownerState}=props;return[styles.wrapper,"vertical"===ownerState.orientation&&styles.wrapperVertical]}})((({theme:theme,ownerState:ownerState})=>(0,esm_extends.Z)({display:"inline-block",paddingLeft:`calc(${theme.spacing(1)} * 1.2)`,paddingRight:`calc(${theme.spacing(1)} * 1.2)`},"vertical"===ownerState.orientation&&{paddingTop:`calc(${theme.spacing(1)} * 1.2)`,paddingBottom:`calc(${theme.spacing(1)} * 1.2)`}))),Divider=react.forwardRef((function Divider(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiDivider"}),{absolute:absolute=!1,children:children,className:className,component:component=(children?"div":"hr"),flexItem:flexItem=!1,light:light=!1,orientation:orientation="horizontal",role:role=("hr"!==component?"separator":void 0),textAlign:textAlign="center",variant:variant="fullWidth"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{absolute:absolute,component:component,flexItem:flexItem,light:light,orientation:orientation,role:role,textAlign:textAlign,variant:variant}),classes=(ownerState=>{const{absolute:absolute,children:children,classes:classes,flexItem:flexItem,light:light,orientation:orientation,textAlign:textAlign,variant:variant}=ownerState,slots={root:["root",absolute&&"absolute",variant,light&&"light","vertical"===orientation&&"vertical",flexItem&&"flexItem",children&&"withChildren",children&&"vertical"===orientation&&"withChildrenVertical","right"===textAlign&&"vertical"!==orientation&&"textAlignRight","left"===textAlign&&"vertical"!==orientation&&"textAlignLeft"],wrapper:["wrapper","vertical"===orientation&&"wrapperVertical"]};return(0,composeClasses.Z)(slots,getDividerUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(DividerRoot,(0,esm_extends.Z)({as:component,className:(0,clsx.Z)(classes.root,className),role:role,ref:ref,ownerState:ownerState},other,{children:children?(0,jsx_runtime.jsx)(DividerWrapper,{className:classes.wrapper,ownerState:ownerState,children:children}):null}))}));Divider.muiSkipListHighlight=!0;var Divider_Divider=Divider,ListItemText=__webpack_require__("./node_modules/@mui/material/ListItemText/ListItemText.js"),ListItemAvatar=__webpack_require__("./node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js"),Avatar=__webpack_require__("./node_modules/@mui/material/Avatar/Avatar.js"),ListItemButton=__webpack_require__("./node_modules/@mui/material/ListItemButton/ListItemButton.js"),StyledListItemButton=(0,styled.ZP)(ListItemButton.Z)((function(_ref){var theme=_ref.theme;return{padding:theme.spacing(2),minWidth:theme.spacing(45),"& .MuiListItemAvatar-root":{marginTop:0},"& .MuiListItemText-root":{marginTop:0,marginBottom:0}}}));function UserListItem(_ref){var avatarSrc=_ref.avatarSrc,name=_ref.name,selectedUserId=_ref.selectedUserId,onClick=_ref.onClick,listItemButtonProps={key:name,component:"li",selected:selectedUserId===name,onClick:function handleClick(){onClick(name)}};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(StyledListItemButton,(0,objectSpread2.Z)((0,objectSpread2.Z)({"data-testid":"user-list-item"},listItemButtonProps),{},{children:[(0,jsx_runtime.jsx)(ListItemAvatar.Z,{children:(0,jsx_runtime.jsx)(Avatar.Z,{alt:name,src:avatarSrc})}),(0,jsx_runtime.jsx)(ListItemText.Z,{primary:name})]})),(0,jsx_runtime.jsx)(Divider_Divider,{})]})}try{UserListItem.displayName="UserListItem",UserListItem.__docgenInfo={description:"Display the searched github user content",displayName:"UserListItem",props:{avatarSrc:{defaultValue:null,description:"",name:"avatarSrc",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},selectedUserId:{defaultValue:null,description:"",name:"selectedUserId",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(userId: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/UserListItem/index.tsx#UserListItem"]={docgenInfo:UserListItem.__docgenInfo,name:"UserListItem",path:"src/components/UserListItem/index.tsx#UserListItem"})}catch(__react_docgen_typescript_loader_error){}var _Basic$parameters,_Basic$parameters2,_Basic$parameters2$do,_All$parameters,_All$parameters2,_All$parameters2$docs,_1=__webpack_require__("./src/assets/images/avatar/1.png"),_2_namespaceObject=__webpack_require__.p+"5646bb7597665d3a7a88.png",_3_namespaceObject=__webpack_require__.p+"0659345c3af622fdd521.png",_4_namespaceObject=__webpack_require__.p+"91b7dea9ec474219cd1f.png",_5_namespaceObject=__webpack_require__.p+"5f1926e0116a1483e6e5.png",index_stories={title:"Components/UserListItem",component:UserListItem,parameters:{layout:"centered"},tags:["autodocs"]},mockUsers=[{name:"tom",avatarSrc:_1},{name:"mojombo",avatarSrc:_2_namespaceObject},{name:"tmcw",avatarSrc:_3_namespaceObject},{name:"h2non",avatarSrc:_4_namespaceObject},{name:"tomnomnom",avatarSrc:_5_namespaceObject}],Basic={render:function render(){return(0,jsx_runtime.jsx)(UserListItem,{avatarSrc:_1,name:"gaearon",onClick:function onClick(){}},"gaearon")}},UserList=function UserList(){return(0,jsx_runtime.jsx)(List.Z,{sx:{width:"100%",minWidth:360,bgcolor:"background.paper"},children:mockUsers.map((function(_ref){var avatarSrc=_ref.avatarSrc,name=_ref.name;return(0,jsx_runtime.jsx)(UserListItem,{avatarSrc:avatarSrc,name:name,onClick:function onClick(){}},name)}))})},All={render:function render(){return(0,jsx_runtime.jsx)(UserList,{})}};Basic.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Basic.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Basic$parameters=Basic.parameters)||void 0===_Basic$parameters?void 0:_Basic$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  render: () => <UserListItem avatarSrc={avatar1} key="gaearon" name="gaearon" onClick={() => {}} />\n}'},null===(_Basic$parameters2=Basic.parameters)||void 0===_Basic$parameters2||null===(_Basic$parameters2$do=_Basic$parameters2.docs)||void 0===_Basic$parameters2$do?void 0:_Basic$parameters2$do.source)})}),All.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},All.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_All$parameters=All.parameters)||void 0===_All$parameters?void 0:_All$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  render: () => <UserList />\n}"},null===(_All$parameters2=All.parameters)||void 0===_All$parameters2||null===(_All$parameters2$docs=_All$parameters2.docs)||void 0===_All$parameters2$docs?void 0:_All$parameters2$docs.source)})});var __namedExportsOrder=["Basic","All"]},"./src/assets/images/avatar/1.png":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"a81a949bbe744d0b1c30.png"}}]);