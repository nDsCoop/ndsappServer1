(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[6],{373:function(e,t,n){e.exports=n.p+"static/media/google.8fb2bc7a.svg"},395:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),i=n(14),c=n(307),l=n(51),r=n(59),u=n(8),s=n(324),g=n(325),d=n(326),m=n(2),p=(n(5),n(7)),h=n(83),f=o.forwardRef((function(e,t){return o.createElement(h.a,Object(m.a)({component:"p",variant:"body1",color:"textSecondary",ref:t},e))})),b=Object(p.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(f),y=n(328),I=n(329),E=n(373),v=n.n(E),w=window.gapi,A=function(){var e=a.a.useState(!1),t=Object(u.a)(e,2),n=t[0],i=t[1];Object(o.useEffect)((function(){function e(e){e?(console.log("Signed in"),m(!0),i(!1),w.client.setApiKey("AIzaSyDJHo6BZNDui-YvXPhb-U0DOUFGEWsWpvw"),w.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest").then((function(){console.log("GAPI client loaded for API"),w.client.youtube.videos.list({part:"snippet",myRating:"like"}).then((function(e){console.log(e)}))}),(function(e){console.error("Error loading GAPI client for API",e)})),console.log(w.auth2.getAuthInstance().currentUser.get().getAuthResponse().id_token)):(console.log("Signed out"),m(!1))}w.load("client:auth2",(function(){w.client.init({clientId:"304991981507-dtj026vui1dbrus032hksbnv8dk6m372.apps.googleusercontent.com",scope:"https://www.googleapis.com/auth/youtube.readonly"}).then((function(){w.auth2.getAuthInstance().isSignedIn.listen(e),e(w.auth2.getAuthInstance().isSignedIn.get())}))})),setTimeout((function(){i(!0)}),2e3)}),[]);var c=Object(o.useState)(!1),l=Object(u.a)(c,2),r=l[0],m=l[1];function p(){localStorage.setItem("signInClosed",!0),i(!1)}return a.a.createElement("div",null,a.a.createElement(s.a,{open:n,onClose:p},a.a.createElement(g.a,{id:"alert-dialog-title"},"Sign In with your Google account ?"),a.a.createElement(d.a,null,a.a.createElement(b,{id:"alert-dialog-description"},"After signing in you will be able to retrieve your liked songs and like or dislike a song on your YouTube account.")),a.a.createElement(y.a,null,a.a.createElement(I.a,{variant:"outlined",onClick:p,color:"primary"},"Later"),a.a.createElement(I.a,{variant:"outlined",color:"primary",onClick:function(e){r?w.auth2.getAuthInstance().signOut():w.auth2.getAuthInstance().signIn()}},a.a.createElement("img",{src:v.a,height:"25px",alt:"",style:{marginRight:"8px"}}),"Sign In"))))};t.default=function(e){var t=e.continueToHome;return a.a.createElement(r.a,null,a.a.createElement(c.a,{style:{height:"80vh"},container:!0,direction:"column",justify:"space-around",alignItems:"center"}," ",function(){if("true"!==localStorage.getItem("signInClosed"))return a.a.createElement(A,null)}(),a.a.createElement(l.a,{title:"nDsMusic",subtitle:"Enjoyable Music Experience Without ads"},a.a.createElement(i.b,{to:"/page1/home",className:"btn-primary",onClick:t},"Continue"))))}}}]);
//# sourceMappingURL=6.3ba9eb60.chunk.js.map