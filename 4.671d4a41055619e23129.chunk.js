webpackJsonp([4],{LCU7:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=e("WT6e"),t=function(){},o=e("7DMc"),r=e("Xjw4"),i=function(){},a=u["\u0275crt"]({encapsulation:0,styles:[[".help-block[_ngcontent-%COMP%]{color:red}"]],data:{}});function d(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,7,"div",[["class","help-block"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275eld"](2,0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["(error)"])),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275eld"](5,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u["\u0275ted"](6,null,["\n    ","\n  "])),(l()(),u["\u0275ted"](-1,null,["\n"]))],null,function(l,n){l(n,6,0,n.component.errorMsg)})}function s(l){return u["\u0275vid"](0,[(l()(),u["\u0275and"](16777216,null,null,1,null,d)),u["\u0275did"](1,16384,null,0,r.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275ted"](-1,null,["\n"]))],function(l,n){l(n,1,0,n.component.displayError)},null)}var c=e("dmam"),m=this&&this.__awaiter||function(l,n,e,u){return new(e||(e=Promise))(function(t,o){function r(l){try{a(u.next(l))}catch(l){o(l)}}function i(l){try{a(u.throw(l))}catch(l){o(l)}}function a(l){l.done?t(l.value):new e(function(n){n(l.value)}).then(r,i)}a((u=u.apply(l,n||[])).next())})},g=this&&this.__generator||function(l,n){var e,u,t,o,r={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;r;)try{if(e=1,u&&(t=u[2&o[0]?"return":o[0]?"throw":"next"])&&!(t=t.call(u,o[1])).done)return t;switch(u=0,t&&(o=[0,t.value]),o[0]){case 0:case 1:t=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,u=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!(t=(t=r.trys).length>0&&t[t.length-1])&&(6===o[0]||2===o[0])){r=0;continue}if(3===o[0]&&(!t||o[1]>t[0]&&o[1]<t[3])){r.label=o[1];break}if(6===o[0]&&r.label<t[1]){r.label=t[1],t=o;break}if(t&&r.label<t[2]){r.label=t[2],r.ops.push(o);break}t[2]&&r.ops.pop(),r.trys.pop();continue}o=n.call(l,r)}catch(l){o=[6,l],u=0}finally{e=t=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},p=function(){function l(l){this.afs=l,this.loading=!1,this.success=!1}return l.prototype.submitHandler=function(l){return m(this,void 0,void 0,function(){var n;return g(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,this.afs.collection("contacts").add(l)];case 1:return e.sent(),this.success=!0,[3,3];case 2:return n=e.sent(),console.error(n),[3,3];case 3:return this.loading=!1,[2]}})})},l}(),v=function(){function l(l){this.sendMailService=l}return l.prototype.ngOnInit=function(){this.contactForm=new o.FormGroup({name:new o.FormControl(null,o.Validators.required),email:new o.FormControl(null,[o.Validators.required,o.Validators.email]),message:new o.FormControl(null,o.Validators.required),shouldAddToNewsletter:new o.FormControl(!1)})},l.prototype.isFieldValid=function(l){return!this.contactForm.get(l).valid&&this.contactForm.get(l).touched},l.prototype.validateFields=function(){var l=this;Object.keys(this.contactForm.controls).forEach(function(n){l.contactForm.get(n).markAsTouched({onlySelf:!0})})},l.prototype.onSubmit=function(){this.contactForm.valid?(this.submitSuccess=!0,this.sendMailService.submitHandler(this.contactForm.value)):this.validateFields()},l.prototype.onReset=function(){this.contactForm.reset(),this.submitSuccess=!1},l}(),f=u["\u0275crt"]({encapsulation:0,styles:[['input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}.centered[_ngcontent-%COMP%]{text-align:center}.centered[_ngcontent-%COMP%]   .control-label[_ngcontent-%COMP%]{text-align:left}.form-group.required[_ngcontent-%COMP%]   .control-label[_ngcontent-%COMP%]:after{content:" * ";color:red}']],data:{}});function C(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,75,"div",[["class","justify-content-center"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275eld"](2,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Contact Us"])),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275eld"](5,0,null,null,69,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,e){var t=!0,o=l.component;return"submit"===n&&(t=!1!==u["\u0275nov"](l,7).onSubmit(e)&&t),"reset"===n&&(t=!1!==u["\u0275nov"](l,7).onReset()&&t),"ngSubmit"===n&&(t=!1!==o.onSubmit()&&t),t},null,null)),u["\u0275did"](6,16384,null,0,o["\u0275bf"],[],null,null),u["\u0275did"](7,540672,null,0,o.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),u["\u0275prd"](2048,null,o.ControlContainer,null,[o.FormGroupDirective]),u["\u0275did"](9,16384,null,0,o.NgControlStatusGroup,[o.ControlContainer],null,null),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275eld"](11,0,null,null,14,"div",[["class","form-group required"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n    "])),(l()(),u["\u0275eld"](13,0,null,null,1,"label",[["class","control-label"],["for","name"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Name"])),(l()(),u["\u0275ted"](-1,null,["\n    "])),(l()(),u["\u0275eld"](16,0,null,null,5,"input",[["class","form-control"],["formControlName","name"],["id","name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,e){var t=!0;return"input"===n&&(t=!1!==u["\u0275nov"](l,17)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,17).onTouched()&&t),"compositionstart"===n&&(t=!1!==u["\u0275nov"](l,17)._compositionStart()&&t),"compositionend"===n&&(t=!1!==u["\u0275nov"](l,17)._compositionEnd(e.target.value)&&t),t},null,null)),u["\u0275did"](17,16384,null,0,o.DefaultValueAccessor,[u.Renderer2,u.ElementRef,[2,o.COMPOSITION_BUFFER_MODE]],null,null),u["\u0275prd"](1024,null,o.NG_VALUE_ACCESSOR,function(l){return[l]},[o.DefaultValueAccessor]),u["\u0275did"](19,671744,null,0,o.FormControlName,[[3,o.ControlContainer],[8,null],[8,null],[2,o.NG_VALUE_ACCESSOR]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,o.NgControl,null,[o.FormControlName]),u["\u0275did"](21,16384,null,0,o.NgControlStatus,[o.NgControl],null,null),(l()(),u["\u0275ted"](-1,null,["\n    "])),(l()(),u["\u0275eld"](23,0,null,null,1,"app-field-error",[["errorMsg","Your name is required!"]],null,null,null,s,a)),u["\u0275did"](24,49152,null,0,i,[],{errorMsg:[0,"errorMsg"],displayError:[1,"displayError"]},null),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275eld"](27,0,null,null,14,"div",[["class","form-group required"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n    "])),(l()(),u["\u0275eld"](29,0,null,null,1,"label",[["class","control-label"],["for","email"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Email"])),(l()(),u["\u0275ted"](-1,null,["\n    "])),(l()(),u["\u0275eld"](32,0,null,null,5,"input",[["class","form-control"],["formControlName","email"],["id","email"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,e){var t=!0;return"input"===n&&(t=!1!==u["\u0275nov"](l,33)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,33).onTouched()&&t),"compositionstart"===n&&(t=!1!==u["\u0275nov"](l,33)._compositionStart()&&t),"compositionend"===n&&(t=!1!==u["\u0275nov"](l,33)._compositionEnd(e.target.value)&&t),t},null,null)),u["\u0275did"](33,16384,null,0,o.DefaultValueAccessor,[u.Renderer2,u.ElementRef,[2,o.COMPOSITION_BUFFER_MODE]],null,null),u["\u0275prd"](1024,null,o.NG_VALUE_ACCESSOR,function(l){return[l]},[o.DefaultValueAccessor]),u["\u0275did"](35,671744,null,0,o.FormControlName,[[3,o.ControlContainer],[8,null],[8,null],[2,o.NG_VALUE_ACCESSOR]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,o.NgControl,null,[o.FormControlName]),u["\u0275did"](37,16384,null,0,o.NgControlStatus,[o.NgControl],null,null),(l()(),u["\u0275ted"](-1,null,["\n    "])),(l()(),u["\u0275eld"](39,0,null,null,1,"app-field-error",[["errorMsg","Please enter a valid email!"]],null,null,null,s,a)),u["\u0275did"](40,49152,null,0,i,[],{errorMsg:[0,"errorMsg"],displayError:[1,"displayError"]},null),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275eld"](43,0,null,null,14,"div",[["class","form-group required"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n    "])),(l()(),u["\u0275eld"](45,0,null,null,1,"label",[["class","control-label"],["for","message"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Message"])),(l()(),u["\u0275ted"](-1,null,["\n    "])),(l()(),u["\u0275eld"](48,0,null,null,5,"textarea",[["class","form-control"],["formControlName","message"],["id","message"],["name","message"],["rows","3"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,e){var t=!0;return"input"===n&&(t=!1!==u["\u0275nov"](l,49)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,49).onTouched()&&t),"compositionstart"===n&&(t=!1!==u["\u0275nov"](l,49)._compositionStart()&&t),"compositionend"===n&&(t=!1!==u["\u0275nov"](l,49)._compositionEnd(e.target.value)&&t),t},null,null)),u["\u0275did"](49,16384,null,0,o.DefaultValueAccessor,[u.Renderer2,u.ElementRef,[2,o.COMPOSITION_BUFFER_MODE]],null,null),u["\u0275prd"](1024,null,o.NG_VALUE_ACCESSOR,function(l){return[l]},[o.DefaultValueAccessor]),u["\u0275did"](51,671744,null,0,o.FormControlName,[[3,o.ControlContainer],[8,null],[8,null],[2,o.NG_VALUE_ACCESSOR]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,o.NgControl,null,[o.FormControlName]),u["\u0275did"](53,16384,null,0,o.NgControlStatus,[o.NgControl],null,null),(l()(),u["\u0275ted"](-1,null,["\n    "])),(l()(),u["\u0275eld"](55,0,null,null,1,"app-field-error",[["errorMsg","Please enter a message!"]],null,null,null,s,a)),u["\u0275did"](56,49152,null,0,i,[],{errorMsg:[0,"errorMsg"],displayError:[1,"displayError"]},null),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275eld"](59,0,null,null,11,"div",[["class","form-check"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n    "])),(l()(),u["\u0275eld"](61,0,null,null,5,"input",[["class","form-check-input"],["formControlName","shouldAddToNewsletter"],["id","shouldAddToNewsletter"],["name","shouldAddToNewsletter"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,e){var t=!0;return"change"===n&&(t=!1!==u["\u0275nov"](l,62).onChange(e.target.checked)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,62).onTouched()&&t),t},null,null)),u["\u0275did"](62,16384,null,0,o.CheckboxControlValueAccessor,[u.Renderer2,u.ElementRef],null,null),u["\u0275prd"](1024,null,o.NG_VALUE_ACCESSOR,function(l){return[l]},[o.CheckboxControlValueAccessor]),u["\u0275did"](64,671744,null,0,o.FormControlName,[[3,o.ControlContainer],[8,null],[8,null],[2,o.NG_VALUE_ACCESSOR]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,o.NgControl,null,[o.FormControlName]),u["\u0275did"](66,16384,null,0,o.NgControlStatus,[o.NgControl],null,null),(l()(),u["\u0275ted"](-1,null,["\n    "])),(l()(),u["\u0275eld"](68,0,null,null,1,"label",[["for","shouldAddToNewsletter"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Would you like to subscribe to our newsletter?"])),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275eld"](72,0,null,null,1,"button",[["class","btn btn-primary mt-3"],["type","submit"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Submit"])),(l()(),u["\u0275ted"](-1,null,["\n"])),(l()(),u["\u0275ted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,7,0,e.contactForm),l(n,19,0,"name"),l(n,24,0,"Your name is required!",e.isFieldValid("name")),l(n,35,0,"email"),l(n,40,0,"Please enter a valid email!",e.isFieldValid("email")),l(n,51,0,"message"),l(n,56,0,"Please enter a message!",e.isFieldValid("message")),l(n,64,0,"shouldAddToNewsletter")},function(l,n){l(n,5,0,u["\u0275nov"](n,9).ngClassUntouched,u["\u0275nov"](n,9).ngClassTouched,u["\u0275nov"](n,9).ngClassPristine,u["\u0275nov"](n,9).ngClassDirty,u["\u0275nov"](n,9).ngClassValid,u["\u0275nov"](n,9).ngClassInvalid,u["\u0275nov"](n,9).ngClassPending),l(n,16,0,u["\u0275nov"](n,21).ngClassUntouched,u["\u0275nov"](n,21).ngClassTouched,u["\u0275nov"](n,21).ngClassPristine,u["\u0275nov"](n,21).ngClassDirty,u["\u0275nov"](n,21).ngClassValid,u["\u0275nov"](n,21).ngClassInvalid,u["\u0275nov"](n,21).ngClassPending),l(n,32,0,u["\u0275nov"](n,37).ngClassUntouched,u["\u0275nov"](n,37).ngClassTouched,u["\u0275nov"](n,37).ngClassPristine,u["\u0275nov"](n,37).ngClassDirty,u["\u0275nov"](n,37).ngClassValid,u["\u0275nov"](n,37).ngClassInvalid,u["\u0275nov"](n,37).ngClassPending),l(n,48,0,u["\u0275nov"](n,53).ngClassUntouched,u["\u0275nov"](n,53).ngClassTouched,u["\u0275nov"](n,53).ngClassPristine,u["\u0275nov"](n,53).ngClassDirty,u["\u0275nov"](n,53).ngClassValid,u["\u0275nov"](n,53).ngClassInvalid,u["\u0275nov"](n,53).ngClassPending),l(n,61,0,u["\u0275nov"](n,66).ngClassUntouched,u["\u0275nov"](n,66).ngClassTouched,u["\u0275nov"](n,66).ngClassPristine,u["\u0275nov"](n,66).ngClassDirty,u["\u0275nov"](n,66).ngClassValid,u["\u0275nov"](n,66).ngClassInvalid,u["\u0275nov"](n,66).ngClassPending)})}function h(l){return u["\u0275vid"](0,[(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275eld"](1,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Thank You Very Much!"])),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275eld"](4,0,null,null,1,"div",[["class","alert alert-success"],["role","alert"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["We've received your submission!"])),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275eld"](7,0,null,null,1,"button",[["class","btn btn-primary mt-3"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.onReset()&&u),u},null,null)),(l()(),u["\u0275ted"](-1,null,["\xab Go Back"])),(l()(),u["\u0275ted"](-1,null,["\n"]))],null,null)}function b(l){return u["\u0275vid"](0,[(l()(),u["\u0275and"](16777216,null,null,1,null,C)),u["\u0275did"](1,16384,null,0,r.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),u["\u0275ted"](-1,null,["\n"])),(l()(),u["\u0275and"](0,[["successMessage",2]],null,0,null,h)),(l()(),u["\u0275ted"](-1,null,["\n"]))],function(l,n){l(n,1,0,!n.component.submitSuccess,u["\u0275nov"](n,3))},null)}var y=function(){},N=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function _(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,11,"div",[["class","container fill"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275eld"](2,0,null,null,8,"div",[["class","row fill justify-content-center align-items-center"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n    "])),(l()(),u["\u0275eld"](4,0,null,null,5,"div",[["class","col-xs-12 justify-content-center align-items-center"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n      "])),(l()(),u["\u0275eld"](6,0,null,null,2,"app-contactform",[],null,null,null,b,f)),u["\u0275prd"](512,null,p,p,[c.a]),u["\u0275did"](8,114688,null,0,v,[p],null,null),(l()(),u["\u0275ted"](-1,null,["\n    "])),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275ted"](-1,null,["\n"])),(l()(),u["\u0275ted"](-1,null,["\n"]))],function(l,n){l(n,8,0)},null)}var F=u["\u0275ccf"]("app-contact",y,function(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-contact",[],null,null,null,_,N)),u["\u0275did"](1,49152,null,0,y,[],null,null)],null,null)},{},{},[]),E=e("54PK"),M=e("bfOx"),R=function(){},S=e("7gRN"),A=e("nD62"),O=e("aat6");e.d(n,"ContactModuleNgFactory",function(){return P});var P=u["\u0275cmf"](t,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[F]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[u.LOCALE_ID,[2,r["\u0275a"]]]),u["\u0275mpd"](4608,o["\u0275i"],o["\u0275i"],[]),u["\u0275mpd"](4608,o.FormBuilder,o.FormBuilder,[]),u["\u0275mpd"](4608,E.RecaptchaLoaderService,E.RecaptchaLoaderService,[u.PLATFORM_ID,[2,E.RECAPTCHA_LANGUAGE],[2,E.RECAPTCHA_BASE_URL],[2,E.RECAPTCHA_NONCE]]),u["\u0275mpd"](512,r.CommonModule,r.CommonModule,[]),u["\u0275mpd"](512,M.m,M.m,[[2,M.r],[2,M.k]]),u["\u0275mpd"](512,o["\u0275ba"],o["\u0275ba"],[]),u["\u0275mpd"](512,o.FormsModule,o.FormsModule,[]),u["\u0275mpd"](512,o.ReactiveFormsModule,o.ReactiveFormsModule,[]),u["\u0275mpd"](512,R,R,[]),u["\u0275mpd"](512,S.RecaptchaCommonModule,S.RecaptchaCommonModule,[]),u["\u0275mpd"](512,A.RecaptchaModule,A.RecaptchaModule,[]),u["\u0275mpd"](512,O.RecaptchaFormsModule,O.RecaptchaFormsModule,[]),u["\u0275mpd"](512,t,t,[]),u["\u0275mpd"](1024,M.i,function(){return[[{path:"",component:y}]]},[])])})}});