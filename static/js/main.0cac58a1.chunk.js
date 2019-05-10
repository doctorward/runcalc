(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(e,t,a){},239:function(e,t,a){"use strict";a.r(t);var n=a(33),l=a(34),c=a(36),i=a(35),s=a(17),r=a(37),o=a(1),d=a.n(o),h=a(15),u=a.n(h),v=a(91),f=a.n(v),m=a(90),b=a.n(m),g=a(89),p=a.n(g),C=a(56),j=a.n(C),k=a(92),O=a(55),E=a(54),y=a.n(E),w=a(32),x=a.n(w);var M=Object(O.withStyles)(function(e){return{root:Object(k.a)({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit})}})(function(e){var t=e.classes;return d.a.createElement("div",null,d.a.createElement(y.a,{className:t.root,elevation:1},d.a.createElement(x.a,{variant:"h5",component:"h3"},e.title),d.a.createElement(x.a,{component:"p"},e.body)))}),S=a(88),H=a.n(S),A=(a(159),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(s.a)(a)),a}return Object(r.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.props.change(e.target.value,this.props.index)}},{key:"render",value:function(){var e=this.props.value;return d.a.createElement("div",null,d.a.createElement(j.a,{label:this.props.label,value:e,onChange:this.handleChange,margin:"normal",variant:"outlined",fullWidth:!0}))}}]),t}(d.a.Component)),N=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(s.a)(a)),a.handleChange=a.handleChange.bind(Object(s.a)(a)),a.state={distance:e.distance},a}return Object(r.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e){this.props.onClick(this.state.distance)}},{key:"handleChange",value:function(e){this.setState({distance:e.target.value})}},{key:"render",value:function(){return d.a.createElement("div",{class:"adder"},d.a.createElement(j.a,{label:"Distance to Add",value:this.state.distance,onChange:this.handleChange,margin:"normal",variant:"outlined",fullWidth:!1}),d.a.createElement(H.a,{variant:"outlined",onClick:this.handleClick},"Add ",this.state.distance,"km"))}}]),t}(d.a.Component),P=function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).calclets=[{distance:1,label:"Pace 1km"},{distance:1.60934,label:"Pace 1 mile"},{distance:.8,label:"800m"},{distance:10},{distance:21.0975,label:"Half Marathon"},{distance:42.195,label:"Marathon"}],a.change=a.change.bind(Object(s.a)(a)),a.addCalclet=a.addCalclet.bind(Object(s.a)(a)),a.state={calclets:[]};for(var l=0;l<a.calclets.length;l++){var r=a.calclets[l];a.state.calclets[l]={index:l,distance:r.distance,value:""}}return a}return Object(r.a)(t,e),Object(l.a)(t,[{key:"addCalclet",value:function(e){var t=this.state.calclets.slice();t.push({distance:e,index:t.length,value:""}),this.calclets.push({distance:e}),this.setState({calclets:t})}},{key:"change",value:function(e,t){var a=this.state.calclets.slice();a[t].value=e;var n=function(e){var t=e.split(":");if(t.length>3)return;if(3==t.length)return 60*+t[0]*60+60*+t[1]+ +t[2];if(2==t.length)return 60*+t[0]+ +t[1];if(3==t.length)return+t[0]}(e)/a[t].distance;for(var l in a)l!=t&&(isNaN(n)?a[l].value="":a[l].value=T(n*a[l].distance));this.setState({calclets:a})}},{key:"renderCalclet",value:function(e){return d.a.createElement(A,{distance:this.calclets[e].distance,change:this.change,value:this.state.calclets[e].value,index:e,key:e,label:this.calclets[e].label?this.calclets[e].label:this.calclets[e].distance+"km"})}},{key:"renderCalclets",value:function(){console.log(this.state.calclets);for(var e=[],t=0;t<this.state.calclets.length;t++)e.push(d.a.createElement(p.a,null," ",this.renderCalclet(t)));return d.a.createElement(b.a,{cols:3,cellHeight:80}," ",e)}},{key:"render",value:function(){return d.a.createElement("div",{class:"full-outer"},d.a.createElement("div",{class:"full-inner"},d.a.createElement(f.a,{container:!0,justify:"left"},d.a.createElement(M,{title:"Dr. Ward's famous multi-directional Pace Calculator",body:"Type in the time in any field, all of the rest will calculate. All fields are live! Times should follow the format HH:MM:SS. Examples of valid times: 5:30, 45:20 or 1:59:59"})),this.renderCalclets(),d.a.createElement(N,{onClick:this.addCalclet,distance:9})))}}]),t}(d.a.Component);function T(e){var t=Math.floor(e/3600),a=Math.floor((e-3600*t)/60),n=(e=Math.round(e-3600*t-60*a),"");return t>0&&(n=t+":"),(t>0||a>0)&&(a<10&&t>0&&(a="0"+a),n=n+a+":"),e<10&&(e="0"+e),n+=e}u.a.render(d.a.createElement(P,null),document.getElementById("root"))},93:function(e,t,a){e.exports=a(239)}},[[93,1,2]]]);
//# sourceMappingURL=main.0cac58a1.chunk.js.map