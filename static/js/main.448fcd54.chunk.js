(this.webpackJsonp2_weatherapp=this.webpackJsonp2_weatherapp||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(3),c=a.n(o),i=(a(15),a(1)),u=a.n(i),s=a(4),p=a(5),m=a(6),l=a(8),d=a(7),h=a(9);function y(){return n.a.createElement("div",{className:"app-header"},n.a.createElement("div",{className:"app-header-opacity"},n.a.createElement("h1",null,"Weather Finder"),n.a.createElement("p",null,"It was such a lovely day, that it seemed a pity to get up.")))}function v(e){var t=e.getWeather;return n.a.createElement("div",{className:"app-form-container"},n.a.createElement("form",{onSubmit:t,className:"app-form"},n.a.createElement("input",{type:"text",name:"city",placeholder:"City..",required:!0,className:"input-text",autoComplete:"off"}),n.a.createElement("input",{type:"text",name:"country",placeholder:"Country...",required:!0,className:"input-text",autoComplete:"off"}),n.a.createElement("button",{type:"submit",className:"submit-button"},"Get Weather")))}function f(e){var t=e.temperature,a=e.city,r=e.country,o=e.humidity,c=e.description,i=e.error;return n.a.createElement("div",{className:"app-data"},a&&r&&n.a.createElement("p",null,"Location: ".concat(a,", ").concat(r)),t&&n.a.createElement("p",null,"Temperature: ".concat(t)),o&&n.a.createElement("p",null,"Humidity: ".concat(o)),c&&n.a.createElement("p",null,"Weather: ".concat(c)),i&&n.a.createElement("p",{className:"error"},"ERROR: ".concat(i.toUpperCase())))}f.defaultProps={temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:""};var E="d9c07d4512624f3440e47cbed4c175b4",w=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).getWeather=function(){var e=Object(s.a)(u.a.mark((function e(t){var r,n,o,c,i,s,p,m,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=t.target.elements.city.value,n=r.charAt(0).toUpperCase()+r.slice(1),o=t.target.elements.country.value.toLowerCase(),"https://cors-anywhere.herokuapp.com/",c="".concat("https://cors-anywhere.herokuapp.com/","api.openweathermap.org/data/2.5/weather?q=").concat(n,",").concat(o,"&APPID=").concat(E),e.next=8,fetch(c);case 8:return i=e.sent,e.next=11,i.json();case 11:s=e.sent,console.log(s),s.message?a.setState({temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:s.message}):(p=s.main.temp,m=(p-273.15).toFixed(2),l=(1.8*(p-273.15)+32).toFixed(2),a.setState({temperature:"".concat(m," \xb0C / ").concat(l," \xb0F"),city:s.name,country:s.sys.country,humidity:s.main.humidity,description:s.weather[0].description,error:""}));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:void 0},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.temperature,a=e.city,r=e.country,o=e.humidity,c=e.description,i=e.error;return n.a.createElement("div",{className:"app-container"},n.a.createElement(y,null),n.a.createElement(v,{getWeather:this.getWeather}),n.a.createElement(f,{temperature:t,city:a,country:r,humidity:o,description:c,error:i}))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.448fcd54.chunk.js.map