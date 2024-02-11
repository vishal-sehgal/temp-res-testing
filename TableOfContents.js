import{jsx as e,jsxs as t}from"react/jsx-runtime";import{addPropertyControls as o,ControlType as l}from"framer";import{useEffect as i,useState as r,useRef as n}from"react";import{motion as a,LayoutGroup as d}from"framer-motion";let p="abcdefghijklmnopqurstuvwxyz";/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight auto
 */export default function u(o){let{content:l,headingIdPrefix:p,topItem:u,includedHeadings:s,linking:c,fontColor:h,textMode:m,gap:y,labels:b,highlight:x}=o,w=x?x.paddingIsMixed?x.paddingTop:x.padding:0,v=x?x.paddingIsMixed?x.paddingLeft:x.padding:0,V=x?x.paddingIsMixed?x.paddingBottom:x.padding:0,T=x?x.paddingIsMixed?x.paddingRight:x.padding:0,C=Math.random().toString(),B=null==x?void 0:x.border,I=null==x?void 0:x.shadow,S=x?x.radiusIsMixed?`${x.radiusTopLeft}px ${x.radiusTopRight}px ${x.radiusBottomRight}px ${x.radiusBottomLeft}px`:`${x.radius}px`:"",$=n(0),L=n(0),[H,M]=r(0),R=n(H),N=null;if("undefined"!=typeof document){// In the preview, body does not have the correct height.
// This finds the first element with the actual height of the page.
let e=document.body.children;for(let t=0;t<e.length;t++)if("main"===e[t].tagName.toLowerCase()){N=e[t].firstChild;break;}// On the published site, body has the correct height.
N||(N=document.body);}i(()=>{let e=E.map(e=>document.querySelector(`#${e}`)),t=()=>{let t=e.findIndex(e=>e.getBoundingClientRect().top>100);if(window.scrollY<=0?// Top of page
t=0:Math.round(window.innerHeight+window.scrollY)>=N.offsetHeight?// Bottom of page
t=L.current-1:-1===t?t=L.current-1:t>0&&(t=t-1+$.current),t!==R.current){let e=t;M(e),R.current=e;}};return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t);};},[]);let j=[],E=[],k=l.props&&(Array.isArray(l.props.children)?l.props.children:[l.props.children]);if(k&&k.length){for(let e of k)if(!0==s[e.type]){let t=g(e),o=p+t.toLowerCase().trim().replace(/[^a-z0-9\s]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-");if(E.includes(o)){for(let e=2;e<100;e++)if(!E.includes(`${o}-${e}`)){o=`${o}-${e}`;break;}}j.push(t),E.push(o);}}let O=[],A=0;u.length>0&&(O.push({text:u,onButtonPress:function(){c&&window.scrollTo({top:0,behavior:"smooth"==c.scrollMode?"smooth":void 0});}}),// buttons.push(
//     <ListItem
//         {...props}
//         key={index}
//         index={index}
//         buttonText={topItem}
//         activeIndex={activeIndex}
//         onButtonPress={onTopItemButtonPress}
//     />
// )
A++,$.current=1);// for (const item of startItems) {
//     buttons.push(
//         <ListItem
//             {...props}
//             key={index}
//             index={index}
//             buttonText={item.name}
//             activeIndex={activeIndex}
//             onButtonPress={() => onItemButtonPress(item)}
//         />
//     )
//     index++
// }
for(let e=0;e<j.length;e++)O.push({text:j[e],onButtonPress:()=>(function(e){if(c){let t=document.getElementById(E[e]);t?t.scrollIntoView("smooth"==c.scrollMode?{behavior:"smooth"}:void 0):window.location.hash=E[e];}})(e)}),// buttons.push(
//     <ListItem
//         {...props}
//         key={index}
//         index={index}
//         buttonText={headingTitles[i]}
//         activeIndex={activeIndex}
//         onButtonPress={() => onHeadingButtonPress(i)}
//     />
// )
A++;return(// for (const item of endItems) {
//     buttons.push(
//         <ListItem
//             {...props}
//             key={index}
//             index={index}
//             buttonText={item.name}
//             activeIndex={activeIndex}
//             onButtonPress={() => onItemButtonPress(item)}
//         />
//     )
//     index++
// }
L.current=A,/*#__PURE__*/e("div",{style:{// display: "flex",
// flexDirection: "column",
display:"grid",gridTemplateColumns:b?"left"==b.position?"max-content auto":"auto max-content":"100%",rowGap:0,columnGap:null==b?void 0:b.gap,userSelect:o.textSelect?"auto":"none",...o.font,...o.style},children:/*#__PURE__*/e(d,{id:C,children:O.map((l,i)=>/*#__PURE__*/t(a.div,{onClick:l.onButtonPress,animate:{color:i==H?h.current:h.default},whileHover:{color:i==H?h.currentHover:h.defaultHover},style:{position:"relative",display:"grid",gridTemplateColumns:"subgrid",alignItems:"top",gridColumn:b?"span 2":void 0,// display: "flex",
    // flexDirection:
    //     labels?.position == "right"
    //         ? "row-reverse"
    //         : "row",
    // gap: labels?.gap,
    padding:`${0==i?w:y/2}px ${T}px ${i==L.current-1?V:y/2}px ${v}px`,cursor:c?"pointer":void 0},initial:!1,transition:o.transition,children:[i==H&&x&&/*#__PURE__*/t(a.div,{layoutId:"highlight",style:{position:"absolute",inset:0,top:0==i?0:-w+y/2,bottom:i==L.current-1?0:-V+y/2},children:[/*#__PURE__*/e("div",{style:{position:"absolute",inset:0,backgroundColor:x.fill,borderRadius:S,boxShadow:I&&`${I.x}px ${I.y}px ${I.blur}px ${I.spread}px ${I.color}`,backdropFilter:x.bgBlur>0?`blur(${x.bgBlur}px)`:void 0,pointerEvents:"none"}}),B&&/*#__PURE__*/e("div",{style:{position:"absolute",inset:0,borderColor:B.color,borderWidth:B.widthIsMixed?`${B.widthTop}px ${B.widthRight}px ${B.widthBottom}px ${B.widthLeft}px`:`${B.width}px`,borderStyle:B.style,borderRadius:S,pointerEvents:"none"}})]}),b&&/*#__PURE__*/e(f,{...b,index:i}),/*#__PURE__*/e("span",{style:{position:"relative",flex:1,overflow:"wrap"==m?"visible":"hidden",overflowWrap:"wrap"==m?"break-word":"none",textOverflow:"truncate"==m?"ellipsis":"none",whiteSpace:"truncate"==m?"nowrap":"none"},children:l.text})]}))})}));}function s(e){return{type:l.Boolean,defaultValue:!0,title:e};}u.displayName="Table of Contents";let c={fill:"rgba(0, 153, 255, 0.1)",padding:10,radius:8};function f(e){let{type:o,index:l}=e,i=!0,r="";switch(o){case"numbers":r=String(l+1);break;case"letters":r=l<p.length?p[l]:p[Math.floor(l/p.length)]+p[l%p.length],e.capitalized&&(r=r.toUpperCase());break;case"romanNumerals":r=h(l+1);break;case"character":r=e.character,i=!1;}return /*#__PURE__*/t("span",{style:{textAlign:e.alignment,order:"right"==e.position?1:0},children:[i&&e.prefix,r,i&&e.suffix]});}function g(e){if(!e||!e.props)return"";let{children:t}=e.props;return"string"==typeof t?t:Array.isArray(t)?t.map(g).join(""):"";}function h(e){if(e<=0||e>=4e3)return"Invalid input. Enter a number between 1 and 3999";let t=[1e3,900,500,400,100,90,50,40,10,9,5,4,1],o=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"],l="";for(let i=0;i<t.length;i++)for(;e>=t[i];)l+=o[i],e-=t[i];return l;}o(u,{content:{type:"richtext"},headingIdPrefix:{type:l.String,defaultValue:"",title:"Heading ID Prefix"},topItem:{type:l.String,defaultValue:""},includedHeadings:{type:l.Object,buttonTitle:"H1 - H6",controls:{h1:s("H1"),h2:s("H2"),h3:s("H3"),h4:s("H4"),h5:s("H5"),h6:s("H6")},title:"Headings"},linking:{type:l.Object,optional:!0,controls:{scrollMode:{type:l.Enum,defaultValue:"smooth",options:["smooth","instant"],optionTitles:["Smooth","Instant"],displaySegmentedControl:!0,title:"Scroll"}}},fontColor:{type:l.Object,buttonTitle:"Options",controls:{current:{type:l.Color,defaultValue:"#0099FF"},currentHover:{type:l.Color,defaultValue:"#0099FF"},default:{type:l.Color,defaultValue:"#000000"},defaultHover:{type:l.Color,defaultValue:"#000000"},transition:{type:l.Transition}}},font:{type:"font",controls:"extended"},textMode:{type:l.Enum,defaultValue:"wrap",options:["wrap","truncate","clip"],optionTitles:["Wrap","Truncate","Clip"]},labels:{type:l.Object,optional:!0,controls:{type:{type:l.Enum,defaultValue:"numbers",options:["numbers","letters","romanNumerals","character"],optionTitles:["Numbers","Letters","Roman Numerals","Character"]},capitalized:{type:l.Boolean,defaultValue:!1,hidden:e=>"letters"!=e.type},prefix:{type:l.String,defaultValue:"",hidden:e=>"character"==e.type},suffix:{type:l.String,defaultValue:".",hidden:e=>"character"==e.type},character:{type:l.String,defaultValue:"•",hidden:e=>"character"!=e.type},gap:{type:l.Number,defaultValue:4,min:0,step:1},position:{type:l.Enum,defaultValue:"left",options:["left","right"],optionTitles:["Left","Right"],displaySegmentedControl:!0},alignment:{type:l.Enum,defaultValue:"left",options:["left","center","right"],optionTitles:["Left","Center","Right"],displaySegmentedControl:!0}}},highlight:{type:l.Object,defaultValue:c,optional:!0,buttonTitle:"Styles",controls:{fill:{type:l.Color,optional:!0},padding:{type:l.FusedNumber,defaultValue:16,toggleKey:"paddingIsMixed",toggleTitles:["All","Individual"],valueKeys:["paddingTop","paddingRight","paddingBottom","paddingLeft"],valueLabels:["T","R","B","L"],min:0},radius:{type:l.FusedNumber,defaultValue:8,toggleKey:"radiusIsMixed",toggleTitles:["All","Individual"],valueKeys:["radiusTopLeft","radiusTopRight","radiusBottomRight","radiusBottomLeft"],valueLabels:["TL","TR","BR","BL"],min:0},border:{type:l.Object,optional:!0,controls:{color:{type:l.Color,defaultValue:"#222"},width:{type:l.FusedNumber,defaultValue:1,toggleKey:"widthIsMixed",toggleTitles:["All","Individual"],valueKeys:["widthTop","widthRight","widthBottom","widthLeft"],valueLabels:["T","R","B","L"],min:0},style:{type:l.Enum,defaultValue:"solid",options:["solid","dashed","dotted","double"],optionTitles:["Solid","Dashed","Dotted","Double"]}}},shadow:{type:l.Object,optional:!0,controls:{color:{type:l.Color,defaultValue:"rgba(0, 0, 0, 0.25)"},x:{type:l.Number,defaultValue:0,displayStepper:!0},y:{type:l.Number,defaultValue:2,displayStepper:!0},blur:{type:l.Number,defaultValue:4,displayStepper:!0},spread:{type:l.Number,defaultValue:0,displayStepper:!0}}},bgBlur:{type:l.Number,defaultValue:0,min:0,step:1,title:"BG Blur"},transition:{type:l.Transition}}},gap:{type:l.Number,defaultValue:4,min:0,step:1},textSelect:{type:l.Boolean,defaultValue:!1}});
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"TableOfContents","slots":[],"annotations":{"framerContractVersion":"1","framerSupportedLayoutWidth":"any","framerSupportedLayoutHeight":"auto"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./TableOfContents.map