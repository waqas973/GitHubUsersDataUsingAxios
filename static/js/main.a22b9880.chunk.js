(this["webpackJsonpaxios-githubuser-data"]=this["webpackJsonpaxios-githubuser-data"]||[]).push([[0],{22:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),a=c(15),r=c.n(a),i=(c(22),c(4)),j=c.n(i),l=c(16),d=c(5),o=(c(6),c(24),c(0));var h=function(e){var t=e.avatar_url,c=e.login,n=e.type;return t&&Object(o.jsx)("div",{className:"col-lg-4 col-md-6 mb-4",children:Object(o.jsxs)("div",{className:"card__container",children:[Object(o.jsx)("div",{className:"img__container",children:Object(o.jsx)("img",{src:t,alt:""})}),Object(o.jsxs)("div",{className:"info__container",children:[Object(o.jsx)("h3",{children:c}),Object(o.jsx)("p",{children:n}),Object(o.jsxs)("div",{className:"bio",children:[Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)("h4",{children:"follower"}),Object(o.jsx)("p",{children:"345"})]}),Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)("h4",{children:"following"}),Object(o.jsx)("p",{children:"45"})]}),Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)("h4",{children:"Glists"}),Object(o.jsx)("p",{children:"80"})]})]})]})]})})},b=c(17),u=c.n(b);var O=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!0),r=Object(d.a)(a,2),i=r[0],b=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://api.github.com/users");case 2:t=e.sent,s(t.data),b(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(c),Object(o.jsx)("div",{className:"app",children:i?Object(o.jsx)("h1",{children:"Loading...."}):Object(o.jsxs)(o.Fragment,{children:[" ",Object(o.jsx)("h1",{children:"Git Users Data Fetching using Axios"}),Object(o.jsx)("div",{className:"container-fluid",children:Object(o.jsx)("div",{className:"row",children:c.map((function(e){var t=e.avatar_url,c=e.id,n=e.login,s=e.type;return Object(o.jsx)(h,{login:n,type:s,avatar_url:t},c)}))})})]})})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,45)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),x()},6:function(e,t,c){}},[[44,1,2]]]);
//# sourceMappingURL=main.a22b9880.chunk.js.map