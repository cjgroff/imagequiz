(this.webpackJsonpimagequiz=this.webpackJsonpimagequiz||[]).push([[0],{21:function(e,t,a){e.exports=a(35)},26:function(e,t,a){},27:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),i=a.n(c),o=(a(26),a(27),a(28),a(7)),l=a(8),u=a(10),s=a(9),h=a(6),m=[["Quiz1","daffodil.png",[["apple.png",["banana","apple","watermelon","dog"],"apple"],["dog.jpeg",["cat","car","whale","dog"],"dog"],["cat.jpg",["cat","car","whale","dog"],"cat"],["car.jpeg",["cat","car","whale","dog"],"car"],["whale.jpg",["cat","car","whale","dog"],"whale"],["fish.jpeg",["cat","fish","whale","dog"],"fish"]]],["Quiz2","cherryblossom.png",[["pie.jpeg",["Banana","pie","watermelon","dog"],"pie"],["pancakes.jpeg",["cat","pancakes","whale","dog"],"pancakes"],["cat.jpg",["cat","car","whale","dog"],"cat"],["car.jpeg",["cat","car","whale","dog"],"car"],["whale.jpg",["cat","car","whale","dog"],"whale"],["fish.jpeg",["cat","fish","whale","dog"],"fish"]]],["Quiz3","daisy.jpg",[["pie.jpeg",["Banana","pie","watermelon","dog"],"pie"],["pancakes.jpeg",["cat","pancakes","whale","dog"],"pancakes"],["cat.jpg",["cat","car","whale","dog"],"cat"],["car.jpeg",["cat","car","whale","dog"],"car"],["whale.jpg",["cat","car","whale","dog"],"whale"],["fish.jpeg",["cat","fish","whale","dog"],"fish"]]]],g=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).clickchoice=function(e){var t=n.state.quiz;t[n.state.questionnumber];e.currentTarget.innerText==t[n.state.questionnumber][2]&&n.setState({correct:n.state.correct+1}),n.setState({questionnumber:n.state.questionnumber+1})},n.repeat=function(e){n.setState({questionnumber:0,correct:0})},n.state={quiz:m[e.location.state.quiznum][2],questionnumber:0,correct:0},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.quiz;if(this.state.questionnumber==e.length)return r.a.createElement("div",null,"Score : ",this.state.correct," / ",e.length,r.a.createElement("br",null),r.a.createElement(h.b,{to:this.props.location}," "),r.a.createElement("div",{onClick:this.repeat},"Repeat Quiz"),r.a.createElement("br",null),r.a.createElement(h.b,{to:"/imagesquiz"},"New Quiz "));for(var t=e[this.state.questionnumber],a=t[1],n=[],c=0;c<a.length;c++)n.push(r.a.createElement("div",{onClick:this.clickchoice},a[c]));return r.a.createElement("div",null,r.a.createElement("img",{src:"/imagequiz/image/"+t[0]}),r.a.createElement("br",null),"Which word matches the image?",n,r.a.createElement("br",null),"Correct ",this.state.correct," / ",e.length)}}]),a}(r.a.Component),p=a(1),d=(a(34),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).click=function(e){var t=e.currentTarget.getAttribute("quiz");console.log("click q ",t),n.setState({quiznum:parseInt(t)})},console.log("Imagesquiz ctor,props",e),console.log("Ready to fetch"),fetch("https://cjgroff-imagequiz.herokuapp.com/quizzes").then((function(e){return e.json()})).then((function(e){n.quizzes=e,console.log("Quizzes",e)})),console.log("Fetch complete"),n.state={quiznum:-1},n}return Object(l.a)(a,[{key:"render",value:function(){if(-1!=this.state.quiznum){console.log("redirect to quiz",this.state.quiznum);var e={pathname:"/quiz",state:{quiznum:this.state.quiznum}};return r.a.createElement(p.a,{to:e})}for(var t=[],a=0;a<this.quizzes.length;a++)t.push(r.a.createElement("div",{onClick:this.click,quiz:a},this.quizzes[a][0],r.a.createElement("br",null),r.a.createElement("img",{src:"/imagequiz/image/"+this.quizzes[a][1]})));return r.a.createElement("div",null,t)}}]),a}(r.a.Component)),f=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).login=function(){n.setState({showLoginForm:!1})},n.state={showLoginForm:!0},n}return Object(l.a)(a,[{key:"render",value:function(){var e="",t=this.props.location;return t&&(console.log(t),t.state&&t.state.user&&(e=t.state.user)),r.a.createElement("div",null,r.a.createElement("div",{className:"loginButton"},e.length>0?e:r.a.createElement(h.b,{to:"/login"},"Login")),r.a.createElement("div",null,0==e.length?"Please Login":r.a.createElement(d,null)))}}]),a}(r.a.Component),b=a(20),v=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){n.state.username.trim().length>0&&n.setState({authenticated:!0}),e.preventDefault()},n.onInputChnage=function(e){var t=e.target.value,a=e.target.name;n.setState(Object(b.a)({},a,t))},n.state={username:"",authenticated:!1},n}return Object(l.a)(a,[{key:"render",value:function(){var e={pathname:"/",state:{user:this.state.username}};return this.state.authenticated?r.a.createElement(p.a,{to:e}):r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("lable",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.onInputChnage}),r.a.createElement("button",{type:"submit"},"Login")))}}]),a}(r.a.Component);var z=function(){return r.a.createElement(h.a,{basename:"/imagequiz"},r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(f,e)}}),r.a.createElement(p.b,{path:"/login"},r.a.createElement(v,null)),r.a.createElement(p.b,{path:"/quiz",render:function(e){return r.a.createElement(g,e)}}),r.a.createElement(p.b,{path:"/imagesquiz",render:function(e){return r.a.createElement(d,e)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.b4b6ee4e.chunk.js.map