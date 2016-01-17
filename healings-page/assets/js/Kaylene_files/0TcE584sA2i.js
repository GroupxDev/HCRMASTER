/*!CK:90844080!*//*1451891101,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Iqlcg"]); }

__d('EmbeddedVideoQualityControl.react',['AbstractButton.react','Image.react','React','ReactDOM','cx','fbt','shallowCompare'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o,p,q=j.PropTypes;o=babelHelpers.inherits(r,j.Component);p=o&&o.prototype;r.prototype.shouldComponentUpdate=function(s,t){'use strict';return n(this,s,t);};r.prototype.onMouseOut=function(s){'use strict';k.findDOMNode(this.refs.button).blur();};r.prototype.render=function(){'use strict';var s=j.createElement(i,{className:"_5i0o",src:'/images/video/player/embedded_controls/icons/hd.svg'}),t="_3u33"+(!this.props.isHD?' '+"_17bp":''),u=this.props.isHD?m._("Toggle HD off"):m._("Toggle HD on");return (j.createElement(h,{'aria-label':u,className:t,image:s,onClick:this.props.onToggleHD,onMouseOut:this.onMouseOut.bind(this),ref:'button',tabIndex:this.props.tabIndex,type:'button'}));};function r(){'use strict';o.apply(this,arguments);}r.propTypes={isHD:q.bool,onToggleHD:q.func,tabIndex:q.string};f.exports=r;},null);
__d('EmbeddedVideoSettingsMenu.react',['React','URI','cx','fbt','shallowCompare'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m,n,o=h.PropTypes;m=babelHelpers.inherits(p,h.Component);n=m&&m.prototype;p.prototype.shouldComponentUpdate=function(q,r){'use strict';return l(this,q,r);};p.prototype.createCheckboxItem=function(q,r,s,t){'use strict';var u=null;if(r&&s)u=h.createElement('div',{className:"_25d1"});var v=function(){};if(r)v=function(x){t();x.preventDefault();};var w="_4v8v"+(!r?' '+"_5rk-":'');return (h.createElement('a',{href:'#',className:w,onBlur:this.props.onBlurMenuItem,onClick:v,onFocus:this.props.onFocusMenuItem,tabIndex:this.props.tabIndex},h.createElement('div',{className:"_4v8w"},u),h.createElement('div',{className:"_4v8x"},q)));};p.prototype.render=function(){'use strict';var q=this.createCheckboxItem(k._("HD"),this.props.hasHD,this.props.isHD,this.props.onToggleHD),r=this.createCheckboxItem(k._("Captions"),this.props.hasSubtitles,this.props.areSubtitlesActive,this.props.onToggleSubtitles),s=k._("More Settings"),t=new i('/settings/?tab=videos'),u=h.createElement('a',{href:t,target:'_blank',className:"_5rl2",onBlur:this.props.onBlurMenuItem,onFocus:this.props.onFocusMenuItem,tabIndex:this.props.tabIndex},s);return (h.createElement('div',{className:"_4v8y"},h.createElement('div',{className:"_28h1"},q,r,u)));};function p(){'use strict';m.apply(this,arguments);}p.propTypes={areSubtitlesActive:o.bool,hasHD:o.bool,hasSubtitles:o.bool,isHD:o.bool,onToggleHD:o.func,onToggleSubtitles:o.func,tabIndex:o.string};p.defaultProps={tabIndex:'-1'};f.exports=p;},null);
__d('EmbeddedVideoSettingsControl.react',['AbstractButton.react','Image.react','React','ReactDOM','EmbeddedVideoSettingsMenu.react','cx','fbt','ix','setImmediate','shallowCompare'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();var r,s,t=j.PropTypes;r=babelHelpers.inherits(u,j.Component);s=r&&r.prototype;function u(v){'use strict';s.constructor.call(this,v);this.state={isFocus:false,isFocusMenuItem:false};}u.prototype.shouldComponentUpdate=function(v,w){'use strict';return q(this,v,w);};u.prototype.onMouseOut=function(v){'use strict';k.findDOMNode(this.refs.button).blur();};u.prototype.onButtonFocus=function(v){'use strict';this.setState({isFocus:true});};u.prototype.onButtonBlur=function(){'use strict';this.setState({isFocusMenuItem:false});p((function(){if(!this.state.isFocusMenuItem)this.setState({isFocus:false});}).bind(this));};u.prototype.render=function(){'use strict';var v=j.createElement(i,{className:"_5i0o",src:o('/images/video/player_redesign/gear.png')}),w=n._("Additional Visual Settings"),x=j.createElement('div',{className:"_42fl"+(this.state.isFocus?' '+"_4v4":'')},j.createElement(l,{areSubtitlesActive:this.props.areSubtitlesActive,hasHD:this.props.hasHD,hasSubtitles:this.props.hasSubtitles,isHD:this.props.isHD,onBlurMenuItem:this.onButtonBlur.bind(this),onFocusMenuItem:(function(){this.setState({isFocusMenuItem:true});}).bind(this),onToggleHD:this.props.onToggleHD,onToggleSubtitles:this.props.onToggleSubtitles})),y=j.createElement(h,{'aria-label':w,className:"_3u33",image:v,onBlur:this.onButtonBlur.bind(this),onFocus:this.onButtonFocus.bind(this),onMouseOut:this.onMouseOut.bind(this),tabIndex:this.props.tabIndex,type:'button',ref:'button'});return (j.createElement('div',{className:"_1esn"},x,y));};u.propTypes={hasHD:t.bool,hasSubtitles:t.bool,isHD:t.bool,areSubtitlesActive:t.bool,onToggleHD:t.func,onToggleSubtitles:t.func,tabIndex:t.string};u.defaultProps={tabIndex:'-1'};f.exports=u;},null);