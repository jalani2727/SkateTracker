(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(69)},42:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(10),o=a.n(c),r=(a(41),a(42),a(11)),l=a(12),s=a(14),m=a(13),u=a(15),d=a(17),h=a(9),p=a(78),v=a(70),f=a(71),g=a(72),k=a(73),E=a(74),b=a(75),w=a(76),C=a(77),I=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,i=t.value;"checkbox"===e.target.type&&(i=e.target.checked);var c=Object(h.a)({},a.state.activeItem,Object(d.a)({},n,i));a.setState({activeItem:c})},a.state={activeItem:a.props.activeItem},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.toggle,n=t.onSave;console.log(this.props);var c=this.state.activeItem.title.length>0&&this.state.activeItem.description.length>0;return i.a.createElement(p.a,{isOpen:!0,toggle:a},i.a.createElement(v.a,{toggle:a},"Trick"),i.a.createElement(f.a,null,i.a.createElement(g.a,null,i.a.createElement(k.a,null,i.a.createElement(E.a,{for:"title"},"Name"),i.a.createElement(b.a,{type:"text",name:"title",value:this.state.activeItem.title,onChange:this.handleChange,placeholder:"Enter Trick Name"})),i.a.createElement(k.a,null,i.a.createElement(E.a,{for:"description"},"Description"),i.a.createElement(b.a,{type:"text",name:"description",value:this.state.activeItem.description,onChange:this.handleChange,placeholder:"Enter Trick description"})),i.a.createElement(k.a,{check:!0},i.a.createElement(E.a,{for:"completed"},i.a.createElement(b.a,{type:"checkbox",name:"completed",checked:this.state.activeItem.completed,onChange:this.handleChange}),"Completed")))),i.a.createElement(w.a,null,i.a.createElement(C.a,{disabled:!c,color:"success",onClick:function(){return n(e.state.activeItem)}},"Save")))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={activeItem:a.props.activeItem},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.toggle,n=t.wikiLink;return i.a.createElement(p.a,{isOpen:!0,toggle:a},i.a.createElement(v.a,{toggle:a},this.state.activeItem.title),i.a.createElement(f.a,null,this.state.activeItem.description),i.a.createElement(w.a,null,i.a.createElement(C.a,{color:"info",onClick:function(){return n(e.state.activeItem.title)}},"Wikipedia")))}}]),t}(n.Component),N=a(16),O=a.n(N);O.a.defaults.withCredentials=!0;var j=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).refreshList=function(){O.a.get("http://localhost:8000/api/tricks/").then(function(e){return a.setState({trickList:e.data})}).catch(function(e){return console.log(e)})},a.displayCompleted=function(e){return e?a.setState({viewCompleted:!0}):a.setState({viewCompleted:!1})},a.renderTabList=function(){return i.a.createElement("div",{className:"my-5 tab-list"},i.a.createElement("span",{onClick:function(){return a.displayCompleted(!0)},className:a.state.viewCompleted?"active":""},"Performed"),i.a.createElement("span",{onClick:function(){return a.displayCompleted(!1)},className:a.state.viewCompleted?"":"active"},"Yet to Perform"))},a.renderItems=function(){var e=a.state.viewCompleted;return a.state.trickList.filter(function(t){return t.completed===e}).map(function(e){return i.a.createElement("li",{key:e.id,className:"list-group-item d-flex justify-content-between align-items-center"},i.a.createElement("span",{className:"trick-title mr-2 ".concat(a.state.viewCompleted?"completed-trick":""),title:e.description},i.a.createElement("button",{className:"btn btn-link",onClick:function(){return a.showDescription(e)}},e.title)),i.a.createElement("span",null,i.a.createElement("button",{onClick:function(){return a.editItem(e)},className:"btn btn-secondary mr-2"}," ","Edit"," "),i.a.createElement("button",{onClick:function(){return a.handleDelete(e)},className:"btn btn-danger"},"Delete"," ")))})},a.toggle=function(){a.setState({modal:!a.state.modal})},a.descriptionToggle=function(){a.setState({descriptionModal:!a.state.descriptionModal})},a.wikiSearch=function(e){return window.location.href="https://en.wikipedia.org/wiki/Flip_trick",alert("You are about to be re-directed to https://en.wikipedia.org "),!1},a.handleSubmit=function(e){a.toggle(),e.id?O.a.put("http://localhost:8000/api/tricks/".concat(e.id,"/"),e).then(function(e){a.refreshList(),console.log("response",e)}).catch(function(e){return console.log(e)}):O.a.post("http://localhost:8000/api/tricks/",e).then(function(e){a.refreshList(),console.log("response",e)}).catch(function(e){return console.log(e)})},a.handleDelete=function(e){O.a.delete("http://localhost:8000/api/tricks/".concat(e.id,"/"),e).then(function(e){return a.refreshList()}).catch(function(e){return console.log(e)})},a.showDescription=function(e){a.setState({activeItem:e,descriptionModal:!a.state.descriptionModal})},a.createItem=function(){a.setState({activeItem:{title:"",description:"",completed:!1},modal:!a.state.modal})},a.editItem=function(e){a.setState({activeItem:e,modal:!a.state.modal})},a.state={modal:!1,descriptionModal:!1,viewCompleted:!1,activeItem:{title:"",description:"",completed:!1},trickList:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.refreshList()}},{key:"render",value:function(){return i.a.createElement("main",{className:"content"},i.a.createElement("h1",{className:"text-white text-center my-4"},"SkateTracker"),i.a.createElement("div",{className:"row "},i.a.createElement("div",{className:"col-md-6 col-sm-10 mx-auto p-0"},i.a.createElement("div",{className:"card p-3"},i.a.createElement("div",{className:""},i.a.createElement("button",{onClick:this.createItem,className:"btn btn-primary"},"New Trick")),this.renderTabList(),i.a.createElement("ul",{className:"list-group list-group-flush"},this.renderItems())))),this.state.modal?i.a.createElement(I,{activeItem:this.state.activeItem,toggle:this.toggle,onSave:this.handleSubmit}):null,this.state.descriptionModal?i.a.createElement(y,{activeItem:this.state.activeItem,toggle:this.descriptionToggle,wikiLink:this.wikiSearch}):null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.fbbe0eeb.chunk.js.map