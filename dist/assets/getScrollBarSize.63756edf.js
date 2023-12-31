import{p as l,r as s,_ as p,ag as d}from"./index.60223ae1.js";var h=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,m=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,f="".concat(h," ").concat(m).split(/[\s\n]+/),g="aria-",v="data-";function c(a,e){return a.indexOf(e)===0}function E(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n;e===!1?n={aria:!0,data:!0,attr:!0}:e===!0?n={aria:!0}:n=l({},e);var o={};return Object.keys(a).forEach(function(t){(n.aria&&(t==="role"||c(t,g))||n.data&&c(t,v)||n.attr&&f.includes(t))&&(o[t]=a[t])}),o}function b(){var a=s.exports.useReducer(function(o){return o+1},0),e=p(a,2),n=e[1];return n}function x(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,e=s.exports.useRef({}),n=b();return s.exports.useEffect(function(){var o=d.subscribe(function(t){e.current=t,a&&n()});return function(){return d.unsubscribe(o)}},[]),e.current}var i;function y(a){if(typeof document=="undefined")return 0;if(a||i===void 0){var e=document.createElement("div");e.style.width="100%",e.style.height="200px";var n=document.createElement("div"),o=n.style;o.position="absolute",o.top="0",o.left="0",o.pointerEvents="none",o.visibility="hidden",o.width="200px",o.height="150px",o.overflow="hidden",n.appendChild(e),document.body.appendChild(n);var t=e.offsetWidth;n.style.overflow="scroll";var r=e.offsetWidth;t===r&&(r=n.clientWidth),document.body.removeChild(n),i=t-r}return i}function u(a){var e=a.match(/^(.*)px$/),n=Number(e==null?void 0:e[1]);return Number.isNaN(n)?y():n}function w(a){if(typeof document=="undefined"||!a||!(a instanceof Element))return{width:0,height:0};var e=getComputedStyle(a,"::-webkit-scrollbar"),n=e.width,o=e.height;return{width:u(n),height:u(o)}}export{y as a,b,w as g,E as p,x as u};
