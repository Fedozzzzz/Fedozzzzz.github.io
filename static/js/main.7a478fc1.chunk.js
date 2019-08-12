(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t(18)},16:function(e,a,t){},17:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(8),c=t.n(r),l=(t(16),t(17),t(1)),i=t(2),m=t(5),o=t(4),p=t(3),d=t(6),u="https://api.coincap.io/v2/assets";var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50;return fetch(u+"?limit="+e.toString()).then(function(e){return e.json()})},f=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={tempData:void 0,isLoaded:!1,timestamp:"",size:50},t.setData=t.setData.bind(Object(p.a)(t)),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"setData",value:function(){var e=this;this.setState({size:this.state.size+50}),v(this.state.size).then(function(a){var t=new Map;a.data.forEach(function(e){var a={};a.rank=e.rank,a.priceUsd=e.priceUsd,a.marketCapUsd=e.marketCapUsd,a.vwap24Hr=e.vwap24Hr,a.name=e.name,t.set(e.id,a)}),e.setState({tempData:t,isLoaded:!0})})}},{key:"componentDidMount",value:function(){var e=this;this.setData(),new WebSocket("wss://ws.coincap.io/prices?assets=ALL").addEventListener("message",function(a){var t=JSON.parse(a.data),n=e.state.tempData;for(var s in t)if(n.get(s)){var r=n.get(s);r.priceUsd=t[s],n.set(s,r)}e.setState({tempData:n})})}},{key:"renderTable",value:function(){var e=[];return this.state.tempData.forEach(function(t){e.push(s.a.createElement("tr",{key:t.id},s.a.createElement("td",{className:"app-table__rank"},t.rank),s.a.createElement("td",{className:"app-table__name"},t.name),s.a.createElement("td",{className:"app-table__fields"},a.formatUsd(t.priceUsd)),s.a.createElement("td",{className:"app-table__fields"},a.formatUsd(t.marketCapUsd)),s.a.createElement("td",{className:"app-table__fields"},a.formatUsd(t.vwap24Hr))))}),e}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"app-table",tabIndex:0},s.a.createElement("table",{cellPadding:10},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{className:"app-table__rank"},"Rank"),s.a.createElement("th",{className:"app-table__name"},"Name"),s.a.createElement("th",{className:"app-table__rank"},"Price"),s.a.createElement("th",{className:"app-table__fields"},"Market Cap"),s.a.createElement("th",{className:"app-table__fields"},"VWAP (24h)"))),s.a.createElement("div",{className:"scroll"},s.a.createElement("tbody",null,this.state.isLoaded?this.renderTable():s.a.createElement("div",null,"loading...")))))),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"app-btn"},s.a.createElement("button",{className:"app-btn__view",onClick:this.setData},"View more"))))}}],[{key:"formatUsd",value:function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:e>1?2:8}).format(e)}}]),a}(s.a.Component),E=t(9),b=t.n(E),h=function(){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"app-logo"},s.a.createElement("div",{className:"app-logo__img"},s.a.createElement("a",{href:"/"},s.a.createElement("img",{src:b.a,alt:"logo"})))))};s.a.Component;var _=function(){return s.a.createElement("div",{className:"app"},s.a.createElement(h,null),s.a.createElement(f,null))};c.a.render(s.a.createElement(_,null),document.getElementById("root"))},9:function(e,a,t){e.exports=t.p+"static/media/black.792189d6.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.7a478fc1.chunk.js.map