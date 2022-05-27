(this["webpackJsonpcoffee-client"]=this["webpackJsonpcoffee-client"]||[]).push([[0],{105:function(e,t,n){},129:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),a=n(35),i=n.n(a),c=(n(96),n(36)),o=n(9),d=n(10),l=n(12),h=n(11),j=n(16),u=n(136),m=n(2),b=n(3),p=n(0),O=["user","component","render"],g=function(e){var t=e.user,n=e.component,r=e.render,s=Object(b.a)(e,O);return t&&r?Object(p.jsx)(j.b,Object(m.a)(Object(m.a)({},s),{},{render:r})):Object(p.jsx)(j.b,Object(m.a)(Object(m.a)({},s),{},{render:function(e){return t?Object(p.jsx)(n,Object(m.a)({},e)):Object(p.jsx)(j.a,{to:"/"})}}))},f=n(77),x=(n(105),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).handleClose=function(){return r.setState({show:!1})},r.state={show:!0},r.timeoutId=null,r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,n=e.heading,r=e.message,s=e.deleteAlert,a=e.id;return this.state.show||setTimeout((function(){s(a)}),300),Object(p.jsx)(f.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(f.a.Heading,{children:n}),Object(p.jsx)("p",{className:"alert-body",children:r})]})})}}]),n}(s.a.Component)),v=n(90),k=n(60),w=n(89),C=n(15),y=Object(p.jsxs)(r.Fragment,{children:[Object(p.jsxs)(w.a,{title:"Account",id:"nav-dropdown",children:[Object(p.jsx)(C.c,{to:"/my-orders",className:"nav-link",children:"My Orders"}),Object(p.jsx)(C.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(p.jsx)(C.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"})]}),Object(p.jsx)(C.c,{to:"/create-order",className:"nav-link",children:"Order"})]}),N=Object(p.jsxs)(r.Fragment,{children:[Object(p.jsx)(C.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(p.jsx)(C.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),S=Object(p.jsxs)(r.Fragment,{children:[Object(p.jsx)(C.c,{exact:!0,to:"/",className:"nav-link",children:"Home"}),Object(p.jsx)(C.c,{exact:!0,to:"/menu",className:"nav-link",children:"Menu"})]}),A=function(e){var t=e.user;return Object(p.jsxs)(k.a,{className:"navbar",variant:"dark",expand:"md",children:[Object(p.jsx)(k.a.Brand,{children:Object(p.jsxs)(C.b,{to:"/",className:"logo",children:[Object(p.jsx)("img",{className:"icon-img",src:"/coffee-client/bean-icon.png"}),"The Coffee Bean"]})}),Object(p.jsx)(k.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(k.a.Collapse,{id:"basic-navbar-nav",children:Object(p.jsxs)(v.a,{className:"ml-auto",children:[t&&Object(p.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email]}),S,t?y:N]})})]})},D=n(6),P="https://infinite-river-90009.herokuapp.com",L="http://localhost:4741",z="localhost"===window.location.hostname?L:P,F=n(32),T=n.n(F),E=function(e){return T()({url:z+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},U=n(14),H=n(41),I=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).handleChange=function(e){return r.setState(Object(D.a)({},e.target.name,e.target.value))},r.onSignUp=function(e){e.preventDefault();var t,n=r.props,s=n.msgAlert,a=n.history,i=n.setUser;(t=r.state,T()({method:"POST",url:z+"/sign-up/",data:{credentials:{email:t.email,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return E(r.state)})).then((function(e){return i(e.data.user)})).then((function(){return s({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return a.push("/")})).catch((function(e){r.setState({email:"",password:"",passwordConfirmation:""}),s({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},r.state={email:"",password:"",passwordConfirmation:""},r}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,r=e.passwordConfirmation;return Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h3",{className:"auth-title",children:"Sign Up"}),Object(p.jsxs)(U.a,{onSubmit:this.onSignUp,children:[Object(p.jsxs)(U.a.Group,{className:"auth-form",controlId:"email",children:[Object(p.jsx)(U.a.Label,{children:"Email address"}),Object(p.jsx)(U.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(p.jsxs)(U.a.Group,{className:"auth-form",controlId:"password",children:[Object(p.jsx)(U.a.Label,{children:"Password"}),Object(p.jsx)(U.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(p.jsxs)(U.a.Group,{className:"auth-form",controlId:"passwordConfirmation",children:[Object(p.jsx)(U.a.Label,{children:"Password Confirmation"}),Object(p.jsx)(U.a.Control,{required:!0,name:"passwordConfirmation",value:r,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(p.jsx)(H.a,{className:"auth-btn",type:"submit",children:"Submit"})]})]})})}}]),n}(r.Component),M=Object(j.f)(I),q=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).handleChange=function(e){return r.setState(Object(D.a)({},e.target.name,e.target.value))},r.onSignIn=function(e){e.preventDefault();var t=r.props,n=t.msgAlert,s=t.history,a=t.setUser;E(r.state).then((function(e){return a(e.data.user)})).then((function(){return n({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){r.setState({email:"",password:""}),n({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},r.state={email:"",password:""},r}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h3",{className:"auth-title",children:"Sign In"}),Object(p.jsxs)(U.a,{onSubmit:this.onSignIn,children:[Object(p.jsxs)(U.a.Group,{className:"auth-form",controlId:"email",children:[Object(p.jsx)(U.a.Label,{children:"Email address"}),Object(p.jsx)(U.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(p.jsxs)(U.a.Group,{className:"auth-form",controlId:"password",children:[Object(p.jsx)(U.a.Label,{children:"Password"}),Object(p.jsx)(U.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(p.jsx)(H.a,{className:"auth-btn",type:"submit",children:"Submit"})]})]})})}}]),n}(r.Component),B=Object(j.f)(q),G=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,n=e.history,r=e.clearUser;(function(e){return T()({url:z+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return n.push("/")})).finally((function(){return r()}))}},{key:"render",value:function(){return""}}]),n}(r.Component),R=Object(j.f)(G),W=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).handleChange=function(e){return r.setState(Object(D.a)({},e.target.name,e.target.value))},r.onChangePassword=function(e){e.preventDefault();var t=r.props,n=t.msgAlert,s=t.history,a=t.user;(function(e,t){return T()({url:z+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(r.state,a).then((function(){return n({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){r.setState({oldPassword:"",newPassword:""}),n({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},r.state={oldPassword:"",newPassword:""},r}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,n=e.newPassword;return Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h3",{className:"auth-title",children:"Change Password"}),Object(p.jsxs)(U.a,{onSubmit:this.onChangePassword,children:[Object(p.jsxs)(U.a.Group,{className:"auth-form",controlId:"oldPassword",children:[Object(p.jsx)(U.a.Label,{children:"Old password"}),Object(p.jsx)(U.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(p.jsxs)(U.a.Group,{className:"auth-form",controlId:"newPassword",children:[Object(p.jsx)(U.a.Label,{children:"New Password"}),Object(p.jsx)(U.a.Control,{required:!0,name:"newPassword",value:n,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(p.jsx)(H.a,{className:"auth-btn",type:"submit",children:"Submit"})]})]})})}}]),n}(r.Component),_=Object(j.f)(W),$=n(37),Y=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("form",{onSubmit:this.props.handleSubmit,children:Object(p.jsxs)("div",{id:"order-section",className:"order-details",children:[Object(p.jsx)("h4",{children:"Order Details"}),this.props.order.drinks.map((function(t,n){return Object(p.jsx)("div",{children:Object(p.jsxs)("p",{children:[t.size," ",t.drinkType,", Milk: ",t.milk,", Sweetness Level: ",t.sugarLevel,"%",Object(p.jsx)("button",{className:"update-btn",onClick:e.props.handleEdit,id:n,children:Object(p.jsx)("img",{id:n,src:"/coffee-client/icon-edit.png"})}),Object(p.jsx)("button",{className:"remove-btn",onClick:e.props.handleRemove,id:n,children:Object(p.jsx)("img",{id:n,src:"/coffee-client/icon-remove.png"})})]})},n)})),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"order-price",children:"Total Price:"})," $",Number(this.props.order.price).toFixed(2)]}),Object(p.jsx)("button",{type:"button",className:"add-another-drink-btn",onClick:this.props.hideComponent,children:"Add Another Drink"}),Object(p.jsx)("hr",{}),Object(p.jsx)("div",{className:"order-name",children:Object(p.jsxs)("label",{children:[" Enter your name",Object(p.jsx)("input",{required:!0,type:"text",name:"name",placeholder:"name",value:this.props.order.name,onChange:this.props.handleChange})]})}),Object(p.jsx)("div",{className:"order-email",children:Object(p.jsxs)("label",{children:[" Enter your email",Object(p.jsx)("input",{required:!0,type:"text",name:"email",placeholder:"email",value:this.props.order.email,onChange:this.props.handleChange})]})}),Object(p.jsx)("button",{className:"order-detail-btn",type:"Submit",children:"Place Order"})]})})})}}]),n}(r.Component),J=n(88),K=n.n(J),Q=n(71),V=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{className:"page-title",children:"Lets order some coffee!"}),Object(p.jsxs)("form",{onSubmit:this.props.addDrink,children:[Object(p.jsxs)("div",{id:"drink-section",className:"drink-option",children:[Object(p.jsx)("h4",{children:"Drink Selection"}),Object(p.jsxs)("div",{className:"drink-grid",children:[Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{required:!0,type:"radio",name:"drinkType",value:"Coffee",onChange:this.props.onDrinkOption,checked:"Coffee"===this.props.drink.drinkType})," ",Object(p.jsx)("img",{src:"/coffee-client/drink-coffee.jpg"})," Coffee"]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"radio",name:"drinkType",value:"Latte",onChange:this.props.onDrinkOption,checked:"Latte"===this.props.drink.drinkType})," ",Object(p.jsx)("img",{src:"/coffee-client/drink-latte.jpg"})," Latte"]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"radio",name:"drinkType",value:"Americano",onChange:this.props.onDrinkOption,checked:"Americano"===this.props.drink.drinkType})," ",Object(p.jsx)("img",{src:"/coffee-client/drink-americano.jpg"})," Americano"]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"radio",name:"drinkType",value:"Capuccino",onChange:this.props.onDrinkOption,checked:"Capuccino"===this.props.drink.drinkType})," ",Object(p.jsx)("img",{src:"/coffee-client/drink-capp.jpg"})," Capuccino"]})]}),Object(p.jsx)("div",{className:"arrow-down",children:Object(p.jsx)("a",{href:"#milk-section",children:Object(p.jsx)("img",{src:"/coffee-client/arrow-down.png"})})})]}),Object(p.jsxs)("div",{id:"milk-section",className:"milk-option",children:[Object(p.jsx)("div",{className:"arrow-up",children:Object(p.jsx)("a",{href:"#drink-section",children:Object(p.jsx)("img",{src:"/coffee-client/arrow-up.png"})})}),Object(p.jsx)("h4",{children:"Milk Option"}),Object(p.jsxs)("div",{className:"milk-grid",children:[Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{required:!0,type:"radio",name:"milk",value:"Whole",onChange:this.props.onDrinkOption,checked:"Whole"===this.props.drink.milk})," ",Object(p.jsx)("img",{className:"milk-img",src:"/coffee-client/milk-whole.png"})," Whole"]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"radio",name:"milk",value:"Oat",onChange:this.props.onDrinkOption,checked:"Oat"===this.props.drink.milk})," ",Object(p.jsx)("img",{className:"milk-img",src:"/coffee-client/milk-oat.png"})," Oat"]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"radio",name:"milk",value:"Almond",onChange:this.props.onDrinkOption,checked:"Almond"===this.props.drink.milk})," ",Object(p.jsx)("img",{className:"milk-img",src:"/coffee-client/milk-almond.png"})," Almond"]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"radio",name:"milk",value:"None",onChange:this.props.onDrinkOption,checked:"None"===this.props.drink.milk})," ",Object(p.jsx)("img",{className:"milk-img",src:"/coffee-client/milk-none.png"})," None"]})]}),Object(p.jsx)("div",{className:"arrow-down",children:Object(p.jsx)("a",{href:"#sugar-section",children:Object(p.jsx)("img",{src:"/coffee-client/arrow-down.png"})})})]}),Object(p.jsxs)("div",{id:"sugar-section",className:"sugar-option",children:[Object(p.jsx)("div",{className:"arrow-up",children:Object(p.jsx)("a",{href:"#milk-section",children:Object(p.jsx)("img",{src:"/coffee-client/arrow-up.png"})})}),Object(p.jsx)("h4",{children:"Sweetness Level"}),Object(p.jsx)("div",{className:"d-flex align-items-center justify-content-center",children:Object(p.jsx)(Q.a,{className:"sugar-slider",xs:"6",children:Object(p.jsx)(K.a,{variant:"success",value:this.props.drink.sugarLevel,name:"sugarLevel",min:0,max:100,step:10,onChange:this.props.onDrinkOption,tooltip:"on",tooltipPlacement:"bottom",size:"lg"})})}),Object(p.jsx)("div",{className:"arrow-down",children:Object(p.jsx)("a",{href:"#size-section",children:Object(p.jsx)("img",{src:"/coffee-client/arrow-down.png"})})})]}),Object(p.jsxs)("div",{id:"size-section",className:"size-option",children:[Object(p.jsx)("div",{className:"arrow-up",children:Object(p.jsx)("a",{href:"#sugar-section",children:Object(p.jsx)("img",{src:"/coffee-client/arrow-up.png"})})}),Object(p.jsx)("h4",{children:"Drink Size"}),Object(p.jsxs)("div",{className:"size-grid",children:[Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{required:!0,type:"radio",name:"size",value:"Small",onChange:this.props.onDrinkOption,checked:"Small"===this.props.drink.size})," ",Object(p.jsx)("img",{className:"form-size-s-img",src:"/coffee-client/drink-size.png"})," Small"]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"radio",name:"size",value:"Medium",onChange:this.props.onDrinkOption,checked:"Medium"===this.props.drink.size})," ",Object(p.jsx)("img",{className:"form-size-m-img",src:"/coffee-client/drink-size.png"})," Medium"]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"radio",name:"size",value:"Large",onChange:this.props.onDrinkOption,checked:"Large"===this.props.drink.size})," ",Object(p.jsx)("img",{className:"form-size-l-img",src:"/coffee-client/drink-size.png"})," Large"]})]}),Object(p.jsx)("div",{className:"add-drink-btn",children:Object(p.jsx)("button",{type:"submit",children:"Add Drink"})})]})]})]})}}]),n}(r.Component),X=Object(j.f)(V),Z=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).onDrinkOption=function(e){var t=Object(m.a)(Object(m.a)({},r.state.drink),{},Object(D.a)({},e.target.name,e.target.value));r.setState({drink:t})},r.handleEdit=function(e){e.preventDefault();var t=e.target.getAttribute("id"),n=r.state.order.drinks[t];r.setState({drink:n,idx:t}),r.hideComponent()},r.handleRemove=function(e){e.preventDefault();var t=e.target.getAttribute("id"),n=r.state.order;n.drinks.splice(t,1),r.setState({order:n}),r.updatePrice()},r.updatePrice=function(){var e={Small:2,Medium:3,Large:4},t=r.state.order.drinks,n=0;t.forEach((function(t){n+=e[t.size]}));var s=Number.parseFloat(1.06*n).toFixed(2),a=Object(m.a)(Object(m.a)({},r.state.order),{},{price:s});r.setState({order:a})},r.addDrink=function(e){e.preventDefault();var t=r.state.order,n=r.state.idx;n?t.drinks[n]=r.state.drink:t.drinks.push(r.state.drink),r.setState({order:t});var s={Small:2,Medium:3,Large:4},a=r.state.order.drinks,i=0;a.forEach((function(e){i+=s[e.size]}));var c=(1.06*i).toFixed(2),o=Object(m.a)(Object(m.a)({},r.state.order),{},{price:c});r.setState({order:o,drink:{sugarLevel:0},idx:void 0}),r.hideComponent()},r.handleChange=function(e){var t=Object(m.a)(Object(m.a)({},r.state.order),{},Object(D.a)({},e.target.name,e.target.value));r.setState({order:t})},r.handleSubmit=function(e){e.preventDefault();var t=r.props,n=t.user,s=t.msgAlert,a=t.history;(function(e,t){return T()({method:"POST",url:z+"/orders",data:{order:e},headers:{Authorization:"Bearer ".concat(t.token)}})})(r.state.order,n).then((function(){return a.push("/my-orders")})).then((function(){return s({heading:"Order Placed!",message:"Coffee Time!",variant:"success"})})).catch((function(e){s({heading:"Order failed :(",message:"Something went wrong: "+e.message,variant:"danger"})}))},r.state={order:{price:"",name:"",email:"",drinks:[],owner:""},drink:{drinkType:"",milk:"",sugarLevel:0,size:""},idx:void 0,showHideForm:!0,showHideOrder:!1},r.onDrinkOption=r.onDrinkOption.bind(Object($.a)(r)),r.addDrink=r.addDrink.bind(Object($.a)(r)),r.handleChange=r.handleChange.bind(Object($.a)(r)),r.hideComponent=r.hideComponent.bind(Object($.a)(r)),r}return Object(d.a)(n,[{key:"hideComponent",value:function(){this.setState({showHideOrder:!this.state.showHideOrder,showHideForm:!this.state.showHideForm})}},{key:"render",value:function(){var e=this.state,t=e.showHideForm,n=e.showHideOrder;return Object(p.jsxs)(p.Fragment,{children:[t&&Object(p.jsx)(X,{order:this.state.order,drink:this.state.drink,onDrinkOption:this.onDrinkOption,addDrink:this.addDrink}),n&&Object(p.jsx)(Y,{order:this.state.order,handleEdit:this.handleEdit,handleRemove:this.handleRemove,hideComponent:this.hideComponent,handleChange:this.handleChange,handleSubmit:this.handleSubmit})]})}}]),n}(r.Component),ee=Object(j.f)(Z),te=n(61),ne=n(43),re=n.n(ne),se=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).handleCancel=function(e){e.preventDefault();var t=e.target.getAttribute("id"),n=r.props,s=n.user,a=n.msgAlert;(function(e,t){return T()({method:"DELETE",url:z+"/orders/"+e,headers:{Authorization:"Bearer ".concat(t.token)}})})(t,s).then((function(){return r.componentDidMount()})).then((function(){a({heading:"Order Canceled",message:"Your order has been canceled",variant:"success"})})).catch((function(e){a({heading:"Order cancelation failed",message:"Something went wrong: "+e.message,variant:"danger"})}))},r.state={orders:null},r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.user,r=t.msgAlert;(function(e){return T()({method:"GET",url:z+"/orders",headers:{Authorization:"Bearer ".concat(e.token)}})})(n).then((function(t){return e.setState({orders:t.data.orders})})).then((function(){r({heading:"Index Success",message:"Yippie indexed!",variant:"success"})})).catch((function(e){r({heading:"Index Failed",message:"Index Error: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){var e,t=this,n=this.state.orders,r=this.props.history,s=function(e){return re()(e).add(15,"m")};return null===n?e="You have no orders":(n.sort((function(e,t){return re()(e.createdAt)>re()(t.createdAt)?-1:1})),e=n.map((function(e){return Object(p.jsxs)(te.a.Item,{eventKey:e._id,children:[Object(p.jsxs)(te.a.Header,{children:[e.name," ",re()(e.createdAt).format("LLL")]}),Object(p.jsxs)(te.a.Body,{children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"order-view-title",children:"Order Date:"})," ",re()(e.createdAt).format("LLL")]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"order-view-title",children:"Pick Up Time:"})," ",s(e.createdAt).format("LT")," "]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"order-view-title",children:"Order Status:"})," ",s(e.createdAt)>re()()?"Pending":"Complete"," "]}),Object(p.jsx)("p",{children:Object(p.jsx)("span",{className:"order-view-title",children:"Order Details:"})}),e.drinks.map((function(e){return Object(p.jsxs)("p",{children:[e.size," ",e.drinkType,", Milk: ",e.milk,", Sweetness Level: ",e.sugarLevel,"%"]},e._id)})),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"order-view-title",children:"Price:"})," $",e.price.toFixed(2)]}),s(e.createdAt)>re()()&&Object(p.jsxs)("div",{className:"modify-cancel-btns",children:[Object(p.jsx)("button",{className:"modify-btn",onClick:function(){return r.push("/update-order/".concat(e._id))},children:"Modify"}),Object(p.jsx)("button",{className:"cancel-btn",id:e._id,onClick:t.handleCancel,children:"Cancel Order"})]})]})]},e._id)}))),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{className:"page-title",children:"My Orders"}),Object(p.jsx)("div",{id:"view-orders"}),Object(p.jsx)(te.a,{children:e})]})}}]),n}(r.Component),ae=Object(j.f)(se),ie=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"hero",style:{backgroundImage:"url(".concat("/coffee-client/coffee-resized.jpg",")")},children:Object(p.jsx)("h1",{className:"hero-msg",children:"Hey there, sleepy friend. Lets get you caffeinated."})})})}}]),n}(r.Component),ce=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).handleEdit=function(e){e.preventDefault();var t=e.target.getAttribute("id"),n=r.state.order.drinks[t];r.setState({drink:n,idx:t}),r.hideComponent()},r.handleRemove=function(e){e.preventDefault();var t=e.target.getAttribute("id"),n=r.state.order;n.drinks.splice(t,1),r.setState({order:n}),r.updatePrice()},r.onDrinkOption=function(e){var t=Object(m.a)(Object(m.a)({},r.state.drink),{},Object(D.a)({},e.target.name,e.target.value));r.setState({drink:t})},r.addDrink=function(e){e.preventDefault();var t=r.state.order,n=r.state.idx;n?t.drinks[n]=r.state.drink:t.drinks.push(r.state.drink),r.setState({order:t,drink:{sugarLevel:0},idx:void 0}),r.updatePrice(),r.hideComponent()},r.updatePrice=function(){var e={Small:2,Medium:3,Large:4},t=r.state.order.drinks,n=0;t.forEach((function(t){n+=e[t.size]}));var s=(1.06*n).toFixed(2),a=Object(m.a)(Object(m.a)({},r.state.order),{},{price:s});r.setState({order:a})},r.handleChange=function(e){var t=Object(m.a)(Object(m.a)({},r.state.order),{},Object(D.a)({},e.target.name,e.target.value));r.setState({order:t})},r.handleSubmit=function(e){e.preventDefault();var t=r.props,n=t.user,s=t.msgAlert,a=t.history;(function(e,t,n){return T()({method:"PATCH",url:z+"/orders/"+t,data:{order:e},headers:{Authorization:"Bearer ".concat(n.token)}})})(r.state.order,r.state.order._id,n).then((function(){return a.push("/my-orders")})).then((function(){return s({heading:"Order Updated!",message:"Coffee Time!",variant:"success"})})).catch((function(e){s({heading:"Order update failed :(",message:"Something went wrong: "+e.message,variant:"danger"})}))},r.state={order:null,drink:{drinkType:"",milk:"",sugarLevel:0,size:""},idx:void 0,showHideForm:!1,showHideOrder:!0},r.hideComponent=r.hideComponent.bind(Object($.a)(r)),r}return Object(d.a)(n,[{key:"hideComponent",value:function(){this.setState({showHideOrder:!this.state.showHideOrder,showHideForm:!this.state.showHideForm})}},{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.match,r=t.user,s=t.msgAlert;(function(e,t){return T()({method:"GET",url:z+"/orders/"+e,headers:{Authorization:"Bearer ".concat(t.token)}})})(n.params.id,r).then((function(t){return e.setState({order:t.data.order})})).then((function(){s({heading:"Show Order Success",message:"Check out your order",variant:"success"})})).catch((function(e){s({heading:"Show Order Failed",message:"Something went wrong: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){var e,t=this.state,n=t.showHideForm,r=t.showHideOrder,s=t.order;return null===s&&(e="Loading..."),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{className:"page-title",children:"Update Order"}),Object(p.jsx)("div",{children:e}),n&&Object(p.jsx)(X,{order:this.state.order,drink:this.state.drink,onDrinkOption:this.onDrinkOption,addDrink:this.addDrink}),s&&r&&Object(p.jsx)(Y,{order:this.state.order,hideComponent:this.hideComponent,handleChange:this.handleChange,handleSubmit:this.handleSubmit,handleEdit:this.handleEdit,handleRemove:this.handleRemove})]})}}]),n}(r.Component),oe=Object(j.f)(ce),de=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"menu-img-container",children:Object(p.jsx)("img",{className:"menu-img",src:"/coffee-client/coffee-shop.jpg"})}),Object(p.jsxs)("div",{className:"menu-section",children:[Object(p.jsx)("img",{className:"menu-icon",src:"/coffee-client/icon-fresh.png"}),Object(p.jsx)("img",{className:"menu-icon",src:"/coffee-client/icon-beans.png"}),Object(p.jsx)("img",{className:"menu-icon",src:"/coffee-client/icon-organic.png"}),Object(p.jsx)("h4",{children:"Organic Coffee. Roasted Daily. Fresh Ingredients."}),Object(p.jsx)("hr",{})]}),Object(p.jsxs)("div",{className:"menu",children:[Object(p.jsx)("h4",{children:"How about a cup of Joe?"}),Object(p.jsxs)("p",{children:["Small ",Object(p.jsx)("span",{children:"$2.00"})]}),Object(p.jsxs)("p",{children:["Medium ",Object(p.jsx)("span",{children:"$3.00"})]}),Object(p.jsxs)("p",{children:["Large ",Object(p.jsx)("span",{children:"$4.00"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"Drinks:"}),Object(p.jsx)("p",{children:"Coffee"}),Object(p.jsx)("p",{children:"Latte"}),Object(p.jsx)("p",{children:"Americano"}),Object(p.jsx)("p",{children:"Capuccino"})]}),Object(p.jsx)("p",{children:"Milk:"}),Object(p.jsx)("p",{children:"Whole"}),Object(p.jsx)("p",{children:"Oat"}),Object(p.jsx)("p",{children:"Almond"})]})]})}}]),n}(r.Component),le=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).setUser=function(e){return r.setState({user:e})},r.clearUser=function(){return r.setState({user:null})},r.deleteAlert=function(e){r.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},r.msgAlert=function(e){var t=e.heading,n=e.message,s=e.variant,a=Object(u.a)();r.setState((function(e){return{msgAlerts:[].concat(Object(c.a)(e.msgAlerts),[{heading:t,message:n,variant:s,id:a}])}}))},r.state={user:null,msgAlerts:[]},r}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.msgAlerts,s=t.user;return Object(p.jsxs)(r.Fragment,{children:[Object(p.jsx)(A,{user:s}),n.map((function(t){return Object(p.jsx)(x,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(p.jsxs)("main",{className:"container",children:[Object(p.jsx)(j.b,{path:"/sign-up",render:function(){return Object(p.jsx)(M,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(p.jsx)(j.b,{path:"/sign-in",render:function(){return Object(p.jsx)(B,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(p.jsx)(j.b,{exact:!0,path:"/",render:function(){return Object(p.jsx)(ie,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(p.jsx)(j.b,{exact:!0,path:"/menu",render:function(){return Object(p.jsx)(de,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(p.jsx)(g,{user:s,path:"/sign-out",render:function(){return Object(p.jsx)(R,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:s})}}),Object(p.jsx)(g,{user:s,path:"/change-password",render:function(){return Object(p.jsx)(_,{msgAlert:e.msgAlert,user:s})}}),Object(p.jsx)(g,{user:s,path:"/create-order",render:function(){return Object(p.jsx)(ee,{msgAlert:e.msgAlert,user:s})}}),Object(p.jsx)(g,{user:s,path:"/my-orders",render:function(){return Object(p.jsx)(ae,{msgAlert:e.msgAlert,user:s})}}),Object(p.jsx)(g,{user:s,path:"/update-order/:id",render:function(){return Object(p.jsx)(oe,{msgAlert:e.msgAlert,user:s})}})]})]})}}]),n}(r.Component),he=Object(p.jsx)(C.a,{basename:"/coffee-client",children:Object(p.jsx)(le,{})});i.a.render(he,document.getElementById("root"))},96:function(e,t,n){}},[[129,1,2]]]);
//# sourceMappingURL=main.ba70716e.chunk.js.map