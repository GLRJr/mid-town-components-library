"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("react"));function n({type:e}){return t.default.createElement("div",{className:"container"},t.default.createElement("div",{className:"Description-Style"},t.default.createElement("h1",null,"What It Do"),t.default.createElement("p",null,"Black T-shirt with Design Printed on chest",t.default.createElement("br",null),"100% Cotton, Made in America"),t.default.createElement("h4",null,"Purchase on Amazon!")))}function o(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var r="styles-module_container__2DVjN";o(".styles-module_container__2DVjN{display:flex;flex-direction:row}.styles-module_descriptionBox__2FCmY{display:flex}");o(".main{width:318px;overflow:hidden;transition:.4s;animation:ease-in-out;background:#fff}.main,.main:hover{box-shadow:0 0 15px -5px}.main:hover{transform:scale(1.1)}.imageContainer{overflow:hidden;height:200px}.cardContent{margin:.5rem 1rem 1rem}h3,p{margin:0;padding:0}.cardTitle{margin-bottom:.5rem}.btn{display:flex;justify-content:center}.btn button{padding:.5rem;background-color:#fff;border:none;transition:.2s;margin-top:.5rem;margin-bottom:.5rem;border-radius:3px}.btn button:hover{background:#b1e6e6;transform:scale(1)}a{text-transform:uppercase;color:teal;text-decoration:none;font-weight:700}");o(".pressContainer{display:flex;flex-direction:row}.buttonstyle{background-color:#f15060;width:170px;height:58px;border:none;box-shadow:0 4px 10px rgba(0,0,0,.08);color:#fff;font-weight:500;font-style:normal;font-size:18px;font-family:monospace}.pressContainer button:hover{background:#b1e6e6;transition:.7s;box-shadow:0 0 15px -5px}");o(".cardDescription{width:463px;height:73px;left:374px;top:486px;font-family:Inter;font-style:normal;font-weight:400;font-size:18px}"),exports.GenericButton=(e,n)=>t.default.createElement("div",{className:"pressContainer"},t.default.createElement("button",{className:"buttonstyle",onClick:e.onClick},e.text)),exports.ProductDescriptionComponent=n,exports.ProductListerComponent=function({type:e}){return t.default.createElement("div",{className:r},t.default.createElement("div",{className:"Listing-Style"},t.default.createElement("img",{src:e,className:"App-logo",alt:"logo"})),t.default.createElement("div",{className:"descriptionBox"},t.default.createElement(n,null)))},exports.Requirements=()=>React.createElement(React.Fragment,null,"Hello World");
