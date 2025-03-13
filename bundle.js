(()=>{"use strict";var n={56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},i=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=r[d]||0,p="".concat(d," ").concat(l);r[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=a(m,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var r=o(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var c=t(r[i]);e[c].references--}for(var s=o(n,a),d=0;d<r.length;d++){var l=t(r[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=s}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},365:(n,e,t)=>{t.d(e,{A:()=>c});var o=t(601),a=t.n(o),r=t(314),i=t.n(r)()(a());i.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Segoe UI', 'Arial', sans-serif;\n  background-color: #f7f7f7;\n  color: #333;\n  line-height: 1.6;\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  overflow-x: hidden;\n}\n\n.app-container {\n  display: flex;\n  height: 100vh;\n}\n\n/* Sidebar Styles */\n.sidebar {\n  width: 280px;\n  background-color: #2c3e50;\n  color: white;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n\n.logo i {\n  font-size: 24px;\n  color: #f9ca24;\n}\n\n.search-box {\n  display: flex;\n  gap: 8px;\n}\n\n.search-box input {\n  flex: 1;\n  padding: 10px 15px;\n  border: none;\n  border-radius: 5px;\n  background-color: #34495e;\n  color: white;\n  outline: none;\n}\n\n.search-box input::placeholder {\n  color: #becbd8;\n}\n\n.search-box button, .location-btn button {\n  background-color: #3498db;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  padding: 8px 12px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.search-box button:hover, .location-btn button:hover {\n  background-color: #2980b9;\n}\n\n.location-btn button {\n  width: 100%;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n\n/* Main Content Styles */\n.main-content {\n  flex: 1;\n  padding: 30px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n\n/* Current Weather Card */\n.current-weather {\n  background-color: white;\n  border-radius: 15px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);\n  padding: 25px;\n}\n\n.weather-header {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  align-items: center;\n}\n\n#location {\n  font-size: 28px;\n  font-weight: bold;\n}\n\n#date {\n  font-size: 16px;\n  color: #666;\n}\n\n.weather-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 25px;\n}\n\n.temp-container {\n  display: flex;\n  flex-direction: column;\n}\n\n#temperature {\n  font-size: 48px;\n  font-weight: bold;\n}\n\n#feels-like {\n  font-size: 16px;\n  color: #666;\n}\n\n.weather-details {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#icon img {\n  width: 100px;\n  height: 100px;\n}\n\n#description {\n  font-size: 18px;\n  text-transform: capitalize;\n}\n\n.weather-stats {\n  display: flex;\n  justify-content: space-between;\n  background-color: #f8f9fa;\n  border-radius: 10px;\n  padding: 15px;\n}\n\n.stat {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n\n.stat i {\n  font-size: 22px;\n  color: #3498db;\n}\n\n/* Forecast Section */\n.forecast-section {\n  background-color: white;\n  border-radius: 15px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);\n  padding: 25px;\n}\n\n.forecast-section h3 {\n  margin-bottom: 20px;\n  color: #333;\n}\n\n.forecast-container {\n  display: flex;\n  overflow-x: auto;\n  gap: 20px;\n  padding-bottom: 10px;\n}\n\n.forecast-item {\n  min-width: 120px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 15px 10px;\n  background-color: #f8f9fa;\n  border-radius: 10px;\n  transition: transform 0.3s;\n}\n\n.forecast-item:hover {\n  transform: translateY(-5px);\n}\n\n.forecast-day {\n  font-weight: bold;\n  margin-bottom: 8px;\n}\n\n.forecast-icon img {\n  width: 60px;\n  height: 60px;\n  margin: 5px 0;\n}\n\n.forecast-temp {\n  font-weight: bold;\n}\n\n.forecast-desc {\n  font-size: 12px;\n  text-align: center;\n  color: #666;\n  text-transform: capitalize;\n}\n\n/* Charts Section */\n.charts-section {\n  display: flex;\n  gap: 30px;\n  flex-wrap: wrap;\n}\n\n.chart-container {\n  flex: 1;\n  min-width: 300px;\n  background-color: white;\n  border-radius: 15px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);\n  padding: 25px;\n}\n\n.chart-container h3 {\n  margin-bottom: 20px;\n  color: #333;\n}\n\ncanvas {\n  width: 100% !important;\n  height: 250px !important;\n}\n\n/* Responsive Design */\n@media (max-width: 768px) {\n  .app-container {\n    flex-direction: column;\n    height: auto;\n  }\n  \n  .sidebar {\n    width: 100%;\n    padding: 15px;\n  }\n  \n  .main-content {\n    padding: 20px;\n  }\n  \n  .charts-section {\n    flex-direction: column;\n  }\n  \n  .chart-container {\n    width: 100%;\n  }\n}",""]);const c=i},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},601:n=>{n.exports=function(n){return n[1]}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var o=t(72),a=t.n(o),r=t(825),i=t.n(r),c=t(659),s=t.n(c),d=t(56),l=t.n(d),p=t(540),u=t.n(p),m=t(113),f=t.n(m),h=t(365),g={};g.styleTagTransform=f(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=u(),a()(h.A,g),h.A&&h.A.locals&&h.A.locals;const x="5f472b7acba333cd8a035ea85a0d4d4c",b=document.getElementById("location"),y=document.getElementById("date"),v=document.getElementById("temperature"),w=document.getElementById("feels-like"),C=document.getElementById("description"),k=document.getElementById("icon"),E=document.getElementById("wind"),I=document.getElementById("humidity"),S=document.getElementById("pressure"),$=document.getElementById("forecast"),M=document.getElementById("city-search"),T=document.getElementById("search-btn"),A=document.getElementById("get-location");let L,D;function B(){navigator.geolocation?(b.textContent="Getting your location...",navigator.geolocation.getCurrentPosition(N,R)):b.textContent="Geolocation is not supported by this browser."}function R(n){switch(n.code){case n.PERMISSION_DENIED:b.textContent="User denied the request for geolocation.";break;case n.POSITION_UNAVAILABLE:b.textContent="Location information is unavailable.";break;case n.TIMEOUT:b.textContent="The request to get user location timed out.";break;case n.UNKNOWN_ERROR:b.textContent="An unknown error occurred."}v.textContent="Cannot retrieve temperature"}function j(n){Promise.all([fetch(`https://api.openweathermap.org/data/2.5/weather?q=${n}&units=metric&appid=${x}`).then((n=>{if(!n.ok)throw new Error("City not found");return n.json()})),fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${n}&units=metric&appid=${x}`).then((n=>{if(!n.ok)throw new Error("Forecast not available");return n.json()}))]).then((([n,e])=>{O(n),z(e),P(e),U(e)})).catch((n=>{b.textContent="Error",v.textContent=n.message}))}function N(n){var e,t;e=n.coords.latitude,t=n.coords.longitude,Promise.all([fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${t}&units=metric&appid=${x}`).then((n=>n.json())),fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${e}&lon=${t}&units=metric&appid=${x}`).then((n=>n.json()))]).then((([n,e])=>{O(n),z(e),P(e),U(e)})).catch((n=>{b.textContent="Failed to fetch weather data",v.textContent=n.message}))}function O(n){const e=n.name,t=n.sys.country,o=Math.round(n.main.temp),a=Math.round(n.main.feels_like),r=n.weather[0].description,i=`https://openweathermap.org/img/wn/${n.weather[0].icon}@2x.png`,c=Math.round(3.6*n.wind.speed),s=n.main.humidity,d=n.main.pressure,l=(p=n.dt,new Date(1e3*p).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}));var p;b.textContent=`${e}, ${t}`,y.textContent=l,v.textContent=`${o}°C`,w.textContent=`Feels like: ${a}°C`,C.textContent=r,E.textContent=`${c} km/h`,I.textContent=`${s}%`,S.textContent=`${d} hPa`;const u=document.createElement("img");u.src=i,u.alt=r,k.innerHTML="",k.appendChild(u)}function z(n){$.innerHTML="",n.list.filter(((n,e)=>e%8==0)).slice(0,5).forEach((n=>{const e=(t=n.dt,new Date(1e3*t).toLocaleDateString("en-US",{weekday:"short"}));var t;const o=Math.round(n.main.temp),a=n.weather[0].description,r=`https://openweathermap.org/img/wn/${n.weather[0].icon}.png`,i=document.createElement("div");i.className="forecast-item",i.innerHTML=`\n      <div class="forecast-day">${e}</div>\n      <div class="forecast-icon"><img src="${r}" alt="${a}"></div>\n      <div class="forecast-temp">${o}°C</div>\n      <div class="forecast-desc">${a}</div>\n    `,$.appendChild(i)}))}function P(n){const e=document.getElementById("temp-chart").getContext("2d"),t=n.list.slice(0,40),o=t.map((n=>{const e=new Date(1e3*n.dt);return e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!0})+" "+e.toLocaleDateString([],{month:"short",day:"numeric"})})),a=t.map((n=>Math.round(n.main.temp))),r=t.map((n=>Math.round(n.main.feels_like)));L&&L.destroy(),L=new Chart(e,{type:"line",data:{labels:o,datasets:[{label:"Temperature (°C)",data:a,borderColor:"#e74c3c",backgroundColor:"rgba(231, 76, 60, 0.1)",tension:.4,fill:!0},{label:"Feels Like (°C)",data:r,borderColor:"#3498db",backgroundColor:"rgba(52, 152, 219, 0.1)",tension:.4,fill:!0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top"},tooltip:{mode:"index",intersect:!1}},scales:{x:{ticks:{maxRotation:45,minRotation:45},display:!0,title:{display:!0,text:"Date & Time"}},y:{display:!0,title:{display:!0,text:"Temperature (°C)"}}}}})}function U(n){const e=document.getElementById("conditions-chart").getContext("2d"),t=n.list.slice(0,40),o=t.map((n=>{const e=new Date(1e3*n.dt);return e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!0})+" "+e.toLocaleDateString([],{month:"short",day:"numeric"})})),a=t.map((n=>n.main.humidity)),r=t.map((n=>Math.round(3.6*n.wind.speed))),i=t.map((n=>n.clouds.all));D&&D.destroy(),D=new Chart(e,{type:"line",data:{labels:o,datasets:[{label:"Humidity (%)",data:a,borderColor:"#3498db",backgroundColor:"rgba(52, 152, 219, 0.1)",tension:.4,yAxisID:"y",fill:!0},{label:"Wind Speed (km/h)",data:r,borderColor:"#2ecc71",backgroundColor:"rgba(46, 204, 113, 0.1)",tension:.4,yAxisID:"y1",fill:!0},{label:"Cloudiness (%)",data:i,borderColor:"#9b59b6",backgroundColor:"rgba(155, 89, 182, 0.1)",tension:.4,yAxisID:"y",fill:!0}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},stacked:!1,plugins:{legend:{position:"top"},tooltip:{mode:"index",intersect:!1}},scales:{x:{ticks:{maxRotation:45,minRotation:45},display:!0,title:{display:!0,text:"Date & Time"}},y:{type:"linear",display:!0,position:"left",title:{display:!0,text:"Percentage (%)"},min:0,max:100},y1:{type:"linear",display:!0,position:"right",title:{display:!0,text:"Wind Speed (km/h)"},grid:{drawOnChartArea:!1}}}}})}document.addEventListener("DOMContentLoaded",(function(){B(),T.addEventListener("click",(function(){const n=M.value.trim();n&&j(n)})),M.addEventListener("keyup",(function(n){if("Enter"===n.key){const n=M.value.trim();n&&j(n)}})),A.addEventListener("click",B)}))})();