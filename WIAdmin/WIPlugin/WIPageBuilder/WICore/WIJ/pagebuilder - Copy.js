
!function(e){function t(r){
	if(o[r])return o[r].exports;
	var n=o[r]={i:r,l:!1,exports:{}
};
return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports
}
var o={};
t.m=e,t.c=o,t.i=function(e){
	return e
},t.d=function(e,o,r){
	t.o(e,o)||Object.defineProperty(e,o,{
		configurable:!1,enumerable:!0,get:r
	})
},t.n=function(e){
	var o=e&&e.__esModule?function(){
		return e.default
	}:function(){
		return e
	};
	return t.d(o,"a",o),o},t.o=function(e,t){
		return Object.prototype.hasOwnProperty.call(e,t)
	},t.p="/assets/",t(t.s=24)
}([function(module,exports,__webpack_require__){"use strict";
	function _interopRequireDefault(e){
		return e&&e.__esModule?e:{default:e}
	}
	function _objectWithoutProperties(e,t){
		var o={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(o[r]=e[r]);
		return o
	}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
}Object.defineProperty(exports,"__esModule",{value:!0}
	);
var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){
	return typeof e
}:function(e){
	return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e
},_createClass=function(){
	function e(e,t){
		for(var o,r=0;r<t.length;r++)o=t[r],
			o.enumerable=o.enumerable||!1,
		o.configurable=!0,
		"value"in o&&(o.writable=!0),
		Object.defineProperty(e,o.key,o)
	}return function(t,o,r){
		return o&&e(t.prototype,o),r&&e(t,r),t}
	}(),_helpers=__webpack_require__(1),_helpers2=_interopRequireDefault(_helpers),_events=__webpack_require__(5)
	,_events2=_interopRequireDefault(_events),
	_row=__webpack_require__(15),
	_row2=_interopRequireDefault(_row),
	_column=__webpack_require__(12),
	_column2=_interopRequireDefault(_column),
	_field=__webpack_require__(14),_field2=_interopRequireDefault(_field),
	_animation=__webpack_require__(8),
	_animation2=_interopRequireDefault(_animation),
	_data2=__webpack_require__(2),
	_utils=__webpack_require__(3),
	DOM=function(){
		function DOM(){
			_classCallCheck(this,DOM),
			this.stages=new Map,
			this.rows=new Map,
			this.columns=new Map,
			this.fields=new Map,
			this.styleSheet=function(){
				var e=document.createElement("style");
				return e.setAttribute("media","screen"),e.setAttribute("type","text/css"),
				e.appendChild(document.createTextNode("")),
				document.head.appendChild(e),e.sheet}
				()
			}
			return DOM.prototype.processTagName=function(e){
				var t;if("string"==typeof e&&(t=e,e={tag:t}),e.attrs){
					var o=e.attrs.tag;if(o){
						var r=o.filter(function(e){return!0===e.selected});
		r.length&&(t=r[0].value)}}return e.tag=t||e.tag,e},DOM.prototype.create=function(elem){
			var isPreview=1<arguments.length&&void 0!==arguments[1]&&arguments[1];
			elem=this.processTagName(elem);
			var contentType,i,_this=this,_elem=elem,tag=_elem.tag,processed=[],wrap={
				tag:"div",
				attrs:{},
				className:[_helpers2.default.get(elem,"config.inputWrap")||"f-field-group"],
				content:[],
				config:{}},
				requiredMark={
					tag:"span",
					className:"text-error",
					content:"*"
				},
				element=document.createElement(tag),
				required=_helpers2.default.get(elem,"attrs.required"),
				appendContent={
						string:function(e){
							element.innerHTML+=e
						},object:function(e){
							return element.appendChild(_this.create(e))
						},node:function(e){
							return element.appendChild(e)
						},array:function(e){
							for(var t=0;t<e.length;t++)contentType=_this.contentType(e[t]),
								appendContent[contentType](e[t])
						},function:function(e){
							e=e(),
							contentType=_this.contentType(e),
							appendContent[contentType](e)
						},undefined:function(){
							return null
						}
					};
if(processed.push("tag"),elem.className){
	var _elem2=elem,
	className=_elem2.className;
	elem.attrs=Object.assign({

	},
		elem.attrs,{
		className:className}),delete elem.className
}if(elem.options){
	var _elem3=elem,
	options=_elem3.options;
	if(options=this.processOptions(options,elem,isPreview),
		!this.holdsContent(element)||"button"===tag)return _helpers2.default.forEach(options,function(e){
		wrap.content.push(_this.create(e,isPreview))
	}),elem.attrs.className&&(wrap.className=elem.attrs.className),
		wrap.config=Object.assign({},elem.config),
		wrap.className.push=_helpers2.default.get(elem,"attrs.className"),
		required&&(wrap.attrs.required=required),
		this.create(wrap,isPreview);
		appendContent.array.call(this,options),
		delete elem.content,
		processed.push("options")
	}if(elem.attrs&&(_this.processAttrs(elem,element,isPreview),
		processed.push("attrs")),elem.config){
		var editablePreview=elem.config.editable&&isPreview;
		if(elem.config.label&&"button"!==tag){
			var label;
			label=isPreview?_this.label(elem,"config.label"):_this.label(elem),
			elem.config.hideLabel?editablePreview&&(element.contentEditable=!0):_this.labelAfter(elem)?(wrap.className="f-"+elem.attrs.type,
				label.insertBefore(element,label.firstChild),
				wrap.content.push(label),
				required&&wrap.content.push(requiredMark)):(wrap.content.push(label),
				required&&wrap.content.push(requiredMark),wrap.content.push(element))
		}else editablePreview&&(element.contentEditable=!0);
		processed.push("config")
	}if(elem.content&&(contentType=_this.contentType(elem.content),
		appendContent[contentType].call(this,elem.content),
		processed.push("content")),elem.dataset){
		for(var _data in elem.dataset)elem.dataset.hasOwnProperty(_data)&&(element.dataset[_data]=elem.dataset[_data]);
			processed.push("dataset")
	}if(elem.action){
		var actions=Object.keys(elem.action),
		_loop=function(){
			var event=actions[i],
			action=elem.action[event];
			"string"==typeof action&&(action=eval("("+elem.action[event]+")"));
			var useCaptureEvts=["focus","blur"];
			if("onRender"===event)setTimeout(function(){
				action(element)},10);
				else{
					var useCapture=_helpers2.default.inArray(event,useCaptureEvts);
					element.addEventListener(event,action,useCapture)
				}
			};
for(i=actions.length-1;0<=i;i--)_loop();
	processed.push("action")}
var fieldDataBindings=["stage","row","column","field"];
if(_helpers2.default.inArray(elem.fType,fieldDataBindings)){
	var dataType=elem.fType+"Data";
	element[dataType]=elem,
	"fieldData"==dataType&&(element.panelNav=elem.panelNav),
	processed.push(dataType)
}
var remaining=_helpers2.default.subtract(processed,Object.keys(elem));
for(i=remaining.length-1;0<=i;i--)element[remaining[i]]=elem[remaining[i]];
	return wrap.content.length&&(element=this.create(wrap)),element
},DOM.prototype.icon=function(e){
	var t=document.getElementById("icon-"+e);
	return t?'<svg class="svg-icon icon-'+e+'"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-'+e+'"></use></svg>':'<span class="glyphicon glyphicon-'+e+'" aria-hidden="true"></span>'},
	DOM.prototype.processAttrs=function(e,t,o){
		var r=e.attrs,
		n=void 0===r?{

		}:r;
		delete n.tag,o||n.name||!this.isInput(e.tag)||t.setAttribute("name",(0,_utils.uuid)(e)),
		Object.keys(n).forEach(function(e){
			var o=_helpers2.default.safeAttrName(e),r=n[e]||"";
			if(Array.isArray(r))if("object"===_typeof(r[0])){
				var i=r.filter(function(e){
					return!0===e.selected
				});
				r=i.length?i[0].value:r[0].value}else r=r.join(" ");r&&t.setAttribute(o,r)})
	},DOM.prototype.checkbox=function(e){
		return{
			tag:"label",
			attrs:{},
			content:[e,
			{
				tag:"span",
			className:"checkable",
			content:_helpers2.default.get(e,"elem.config.label")||""}]}
		},DOM.prototype.processOptions=function(e,t,o){
			var r=t.action,
			n=t.attrs,
			i=n.type||t.tag,
			a=n.id||t.id;
			return e.map(function(e,n){
				var l=function(){
					var l={
						tag:"input",
						attrs:{
							id:a,
							type:i,
							value:e.value||""
						},
						action:r
					},
					s={
						tag:"span",
						className:"checkable",
						content:e.label
					},
					d={
						tag:"label",
						attrs:{},
						config:{
							inputWrap:"form-check"
						},
						content:[e.label]
					},
					f={
						tag:"div",
						content:[d],
						className:["f-"+i]
					};
		if(t.attrs.className&&(t.config.inputWrap=t.attrs.className),
			t.config.inline&&f.className.push("f-${fieldType}-inline"),
			e.selected&&(l.attrs.checked=!0),o){
			l.fMap="options["+n+"].selected",
		d.attrs.contenteditable=!0,
		d.fMap="options["+n+"].label",
		s.content=void 0;
			var c={
				tag:"label",
				content:[l,s]};
				f.content.unshift(c)
			}else 
			l.attrs.name=a,
			d.content=s,
			d=dom.create(d),
			l=dom.create(l),
			d.insertBefore(l,d.firstChild),
			f.content=d;
			return f
		};
		return{
			select:function(){
				return{
					tag:"option",
					attrs:e,
					content:e.label
				}
			},button:function(e){
				var o=e.type,
				r=e.label,
				n=e.className,
				i=e.id;
				return Object.assign({},t,
				{
					attrs:{type:o},
					className:n,
					id:i||(0,_utils.uuid)(),
					options:void 0,
					content:r,
					action:t.action
				})
			},checkbox:l,radio:l}
			[i](e)})
		},DOM.prototype.holdsContent=function(e){
			return-1!==e.outerHTML.indexOf("/")
		},DOM.prototype.isBlockInput=function(e){
			return!this.isInput(e)&&this.holdsContent(e)
		},DOM.prototype.isInput=function(e){
			return"string"!=typeof e&&(e=e.tagName),
			-1!==["input","textarea","select"].indexOf(e)
		},DOM.prototype.parsedHtml=function(e){
			var t=document.createElement("textarea");
			return t.innerHTML=e,
			t.textContent
		},DOM.prototype.labelAfter=function(e){
			var t=_helpers2.default.get(e,"attrs.type");
			return"checkbox"===t||"radio"===t||_helpers2.default.get(e,"config.labelAfter")
		},DOM.prototype.label=function(e,t){
			var o={
				tag:"label",
				attrs:{},
				className:[],
				content:e.config.label,
				action:{}
			};
		if(this.labelAfter(e)){
			var r={
				tag:"span",
				className:"checkable",
				content:e.config.label
			};
				o.content=r}
				return e.id&&(o.attrs.for=e.id),
				t&&(delete o.attrs.for,
					o.attrs.contenteditable=!0,
					o.fMap=t),dom.create(o)
			},DOM.prototype.contentType=function(e){
				var t=void 0===e?"undefined":_typeof(e);
				return e instanceof Node||e instanceof HTMLElement?t="node":Array.isArray(e)&&(t="array"),
				t
			},DOM.prototype.getStyle=function(e){
				var t,
				o=1<arguments.length&&void 0!==arguments[1]&&arguments[1];
				return window.getComputedStyle?t=window.getComputedStyle(e,null):e.currentStyle&&(t=e.currentStyle),
				o?t[o]:t
			},DOM.prototype.getElement=function(e){
				var t=this.contentType(e);
				return{node:function(){
					return e
			},object:function(){
				return document.getElementById(e.id)
			},string:function(){
				return document.getElementById(e)}
			}[t]()},DOM.prototype.empty=function(e){
				for(;e.firstChild;)this.remove(e.firstChild);
					return e
			},DOM.prototype.actionButtons=function(e){
				var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"column",
				o=this,
				r="column"===t?"li":"div",
				n={
					tag:"div",
					className:"action-btn-wrap"
				},
				i={tag:r,className:t+"-actions group-actions",
				action:{
					mouseenter:function(o){
						var r=document.getElementById(e);
						r.classList.add("hovering-"+t),
						o.target.parentReference=r
					},mouseleave:function(e){
						e.target.parentReference.classList.remove("hovering-"+t)
					},onRender:function(e){
						var r=e.getElementsByTagName("button"),
						n=parseInt(o.getStyle(r[0],"width"))+1,
						i=r.length*n+"px",
						a="row"===t?"height":"width";
						o.insertRule([[".hovering-"+t+" ."+t+"-actions",
							[a,i,!0]]])}}
					};
			return n.content=this.config[t+"s"].actionButtons.buttons,i.content=n,i
		},DOM.prototype.clone=function(e,t){
			var o=this,
			r=e.id,
			n=e.fType,
			i=(0,_utils.clone)(_data2.formData[n].get(r)),
			a=_helpers2.default.indexOfNode(e)+1,
			l=!1;
			return i.id=(0,_utils.uuid)(),
			_data2.formData[n].set(i.id,i),
			t||(t=e.parentElement,l=!0),{
				rows:function(){i.columns=[];
					var t=o.activeStage,r=o.addRow(null,i.id),
					n=e.getElementsByClassName("stage-columns");
					return t.insertBefore(r,t.childNodes[a]),
					_helpers2.default.forEach(n,function(e){
						return o.clone(e,r)}),
					_data2.data.saveRowOrder(),
					r},columns:function(){
						i.fields=[];
						var r=o.addColumn(t.id,i.id);
						t.insertBefore(r,t.childNodes[a]);
						var n=e.getElementsByClassName("stage-fields");
						return l&&dom.columnWidths(t),
						_helpers2.default.forEach(n,function(e){
							return o.clone(e,r)
						}),
						r},
						fields:function(){
						var e=o.addField(t.id,i.id);
						return t.insertBefore(e,t.childNodes[a]),
						e}
					}[n]()
				},DOM.prototype.removeEmpty=function(e){
							var t,
							o=this,
							r=e.parentElement,
							n=e.fType;
							if(o.remove(e),
								t=r.getElementsByClassName("stage-"+n),!t.length){
								if("stages"!==r.fType)return o.removeEmpty(r);
								this.emptyClass(r)
							}
							return"columns"===n&&o.columnWidths(r),
							_data2.data.save()},
							DOM.prototype.remove=function(e){
								var t=e.fType,
								o=e.id;
								if(t){
									var r=e.parentElement,
									n=_data2.formData[r.fType].get(r.id);
									_data2.data.empty(t,o),
									this[t].delete(o),
									_data2.formData[t].delete(o),
									(0,_utils.remove)(n[t],o)
								}
								return e.parentElement.removeChild(e)},
								DOM.prototype.removeClasses=function(e,t){
									var o=this,
									r={string:function(e){
										e.className=e.className.replace(t,"")
									},
									array:function(e){
										for(var o=t.length-1;
											0<=o;
											o--)e.classList.remove(t[o])}
									};
								r.object=r.string,
								_helpers2.default.forEach(e,r[o.contentType(t)])
							},
							DOM.prototype.addClasses=function(e,t){
								var o=this;
								_helpers2.default.forEach(e,{
									string:function(e){
										e.classList.add(t)
									},
									array:function(e){
										for(var o=t.length-1;0<=o;o--)e.classList.add(t[o])}
									}[o.contentType(t)])
							},
							DOM.prototype.fieldOrderClass=function(e){
								var t=e.querySelectorAll(".stage-fields");
								t.length&&(this.removeClasses(t,["first-field","last-field"]),
									t[0].classList.add("first-field"),
									t[t.length-1].classList.add("last-field"))
							},
							DOM.prototype.columnWidths=function(e){
								var t=this,
								o=[],
								r=e.getElementsByClassName("stage-columns");
								if(r.length){
									var n=parseFloat((100/r.length).toFixed(1))/1;
									t.removeClasses(r,/\bcol-\w+-\d+/g),
									_helpers2.default.forEach(r,function(e){
										var t=_data2.formData.columns.get(e.id);
										o.push.apply(o,t.fields);
										var r=(0,_utils.numToPercent)(n);
										e.style.width=r,
										e.style.float="left",
										t.config.width=r,
										e.dataset.colWidth=r,
										document.dispatchEvent(_events2.default.columnResized)}),
									setTimeout(function(){
										o.forEach(function(e){
										var t=dom.fields.get(e);
										t.instance.panels&&t.instance.panels.nav.refresh()
									})

									},
									250),
									dom.updateColumnPreset(e)}
								},
								DOM.prototype.formGroup=function(e){
									return{
										tag:"div",
										className:["f-field-group",
										1<arguments.length&&void 0!==arguments[1]?arguments[1]:""],
										content:e}
									},
									DOM.prototype.columnPresetControl=function(e){
										var t=this,
										o=this,
										r=_data2.formData.rows.get(e),
										n={
											tag:"select",
										attrs:{ariaLabel:"Define a column layout",className:"column-preset"},
										action:{
											change:function(r){
											var n=t.rows.get(e);
											o.setColumnWidths(n.row,r.target.value),
											_data2.data.save()}}},
											i=new Map,
											a={
												value:"custom",
												label:"Custom"
											};
											if(i.set(1,[{value:"100.0",label:"100%"}]),
												i.set(2,[{value:"50.0,50.0",label:"50 | 50"},
													{
														value:"33.3,66.6",
														label:"33 | 66"},
														{
															value:"66.6,33.3",label:"66 | 33"
														},
														a]),
												i.set(3,[{value:"33.3,33.3,33.3",label:"33 | 33 | 33"},
													{value:"25.0,25.0,50.0",label:"25 | 25 | 50"},
													{value:"50.0,25.0,25.0",label:"50 | 25 | 25"},
													{value:"25.0,50.0,25.0",label:"25 | 50 | 25"},a]),
												i.set(4,[{value:"25.0,25.0,25.0,25.0",label:"25 | 25 | 25 | 25"},a])
												,i.set("custom",[a]),r&&r.columns.length){
												var l=r.columns,
											s=i.get(l.length);
											n.options=s||i.get("custom");
											var d=l.map(function(e){
												return _data2.formData.columns.get(e).config.width.replace("%","")}).join(",");
											s&&s.forEach(function(e,t){
												var o=n.options;
												e.value===d?o[t].selected=!0:(delete o[t].selected,o[o.length-1].selected=!0)
											})

										}else 
										n.options=i.get(1);
										return n
									},
									DOM.prototype.setColumnWidths=function(e,t){
										if("custom"!==t){
											t=t.split(",");
											var o=e.getElementsByClassName("stage-columns");
											_helpers2.default.forEach(o,function(e,o){
												var r=t[o]+"%";e.dataset.colWidth=r,
												e.style.width=r,
												_data2.formData.columns.get(e.id).config.width=r}
												)}
										},DOM.prototype.updateColumnPreset=function(e){
											var t=this,
											o=e.querySelector(".column-preset"),
											r=o.parentElement,
											n=t.columnPresetControl(e.id),
											i=t.create(n);
											return r.replaceChild(i,o),
											n
										},
											DOM.prototype.coords=function(e){
												var t=e.getBoundingClientRect(),
												o=document.body.getBoundingClientRect();
												return{pageX:t.left+t.width/2,pageY:t.top-o.top-t.height/2}
											},
											DOM.prototype.loadRows=function(e){
												var t=this;
												return e||(e=this.activeStage),
												_data2.formData.stages.get(e.id).rows.forEach(function(o){
													var r=t.addRow(e.id,o);
													t.loadColumns(r),
													dom.updateColumnPreset(r),
													e.appendChild(r)
												}
													)},
												DOM.prototype.loadColumns=function(e){
													var t=this;
													_data2.formData.rows.get(e.id).columns.forEach(function(o){
														var r=t.addColumn(e.id,o);
														t.loadFields(r)
													}
													)},
													DOM.prototype.loadFields=function(e){
														var t=this;
														_data2.formData.columns.get(e.id).fields.forEach(function(o){
															return t.addField(e.id,o)
														}),
														this.fieldOrderClass(e)
													},
													DOM.prototype.createColumn=function(e){
														var t=e.from.fType,
														o="columns"===t?e.item:new _field2.default(e.item.id),
														r=new _column2.default;
														return o.classList.add("first-field"),
														r.appendChild(o),
														_data2.formData.columns.get(r.id).fields.push(o.id),r},
														DOM.prototype.processColumnConfig=function(e){
															e.className&&e.className.push("f-render-column");
															var t=e.config.width||"100%";
															return e.style="width: "+t,e},
															DOM.prototype.renderForm=function(e){
																var t=this;
																this.empty(e);
																var o=_data2.data.prepData,
																r=document.getElementsByClassName("formeo-render").length,
																n=Object.values(o.stages).map(function(e){
																	var r=e.rows,
																	n=_objectWithoutProperties(e,["rows"]);
																	return r=r.map(function(e){
																		var r=o.rows[e],
																		n=r.columns,
																		i=_objectWithoutProperties(r,["columns"]),
																		a=n.map(function(e){
																			var r=t.processColumnConfig(o.columns[e]),
																			n=r.fields.map(function(e){
																				return o.fields[e]
																			});
																			return r.tag="div",
																			r.content=n,
																			r});
																		i.tag="div",
																		i.content=[a];
																		var l=(0,_utils.clone)(i);
																		if(i.config.inputGroup){
																			var s={
																				tag:"button",
																				className:"remove-input-group",
																				content:dom.icon("remove"),
																				action:{
																					mouseover:function(e){
																						e.target.parentElement.classList.add("will-remove")
																					},
																						mouseleave:function(e){
																							e.target.parentElement.classList.remove("will-remove")},
																							click:function(e){
																								var t=e.target.parentElement;
																								1<t.parentElement.getElementsByClassName("f-input-group").length?dom.remove(t):console.log("Need at least 1 group")}
																							}};
																							l.content.unshift(s);
																							var d={
																								tag:"div",
																								id:(0,_utils.uuid)(),
																								className:"f-input-group-wrap"
																							};
																							l.attrs.className&&("string"==typeof l.attrs.className?l.attrs.className+=" f-input-group":l.attrs.className.push("f-input-group"));
				                                var f={
				                                	tag:"button",
				                                	attrs:{className:"add-input-group btn pull-right",
				                                	type:"button"},
				                                	content:"Add +",
				                                	action:{
				                                		click:function(e){
				                                			var t=e.target.parentElement,
				                                			o=dom.create(l);
				                                			t.insertBefore(o,t.lastChild)
				                                		}
				                                	}};
				                                			i.content.unshift(s),
				                                			d.content=[l,f],i=d}
				                                			return i}),
																	n.tag="div",
																	n.content=r,
																	n.className="f-stage",n
																});
																e.appendChild(this.create({
																	tag:"div",
																	id:"formeo-rendered-"+r,
																	className:"formeo-render formeo",
																	content:n
																}))
															},
															DOM.prototype.clearForm=function(){
																var e=this;
																this.stages.forEach(function(t){
																	return e.clearStage(t.stage)
																})
															},
																DOM.prototype.clearStage=function(e){
																	e.classList.add("removing-all-fields"),
																	_animation2.default.slideUp(e,600,function(){
																		dom.empty(e),
																		e.classList.remove("removing-all-fields"),
																		_data2.data.save(),
																		dom.emptyClass(e),
																		_animation2.default.slideDown(e,300)
																	}
																		)},
																	DOM.prototype.addRow=function(e,t){
																		var o=new _row2.default(t),
																		r=e?this.stages.get(e).stage:this.activeStage;
																		return r.appendChild(o),
																		_data2.data.saveRowOrder(r),
																		this.emptyClass(r),
																		_events2.default.formeoUpdated=new CustomEvent("formeoUpdated",
																			{data:{
																				updateType:"added",
																				changed:"row",
																				oldValue:void 0,
																				newValue:_data2.formData.rows.get(o.id)}
																			}),
																		document.dispatchEvent(_events2.default.formeoUpdated),o
																	},
																	DOM.prototype.addColumn=function(e,t){
																		var o=new _column2.default(t),
																		r=this.rows.get(e).row;
																		return r.appendChild(o),
																		_data2.data.saveColumnOrder(r),
																		this.emptyClass(r),
																		_events2.default.formeoUpdated=new CustomEvent("formeoUpdated",{
																			data:{
																				updateType:"added",
																				changed:"column",
																				oldValue:void 0,
																				newValue:_data2.formData.columns.get(o.id)
																			}
																		}),
																		document.dispatchEvent(_events2.default.formeoUpdated),o},
																		DOM.prototype.toggleSortable=function(e,t){
																			var o=e.fType;
																			if(o){
																				var r=e.parentElement.fType,
																				n=dom[o].get(e.id).sortable;
																				void 0===t&&(t=!n.option("disabled")),
																				n.option("disabled",t),
																				r&&_helpers2.default.inArray(r,["rows","columns","stages"])&&this.toggleSortable(e.parentElement,t)}
																			},
																			DOM.prototype.addField=function(e,t){
																				var o=new _field2.default(t);
																				if(e){
																					var r=this.columns.get(e).column;
																					r.appendChild(o),
																					_data2.data.saveFieldOrder(r),
																					this.emptyClass(r)}return _events2.default.formeoUpdated=new CustomEvent("formeoUpdated",{data:{
																						updateType:"add",
																						changed:"field",
																						oldValue:void 0,
																						newValue:_data2.formData.fields.get(o.id)
																					}
																					}),
																					document.dispatchEvent(_events2.default.formeoUpdated),o
																				},
																				DOM.prototype.emptyClass=function(e){
																					var t=e.fType;
																					if(t){
																						var o=new Map;
																						o.set("rows","columns"),
																						o.set("columns","fields"),
																						o.set("stages","rows");
																						var r=e.getElementsByClassName("stage-"+o.get(t));
																						e.classList.toggle("empty-"+t,!r.length)}},
																						DOM.prototype.h=function(e,t,o){
																							return this.create({tag:e,attrs:t,content:o})},
																							DOM.prototype.insertRule=function(e){
																								for(var t=this.styleSheet,
																									o=t.cssRules.length,
																									r=0,
																									n=e.length;
																									r<n;
																									r++
																									)
																									{
																										var i=1,
																										a=e[r],
																										l=e[r][0],
																										s="";
																										"[object Array]"===Object.prototype.toString.call(a[1][0])&&(a=a[1],i=0);
																										for(var d=a.length;
																											i<d;
																											i++
																											)
																											{
																												var f=a[i],c=f[2]?" !important":"";
																												s+=f[0]+":"+f[1]+c+";"
																											}
																											return t.insertRule(l+" { "+s+" }",o)}},_createClass(DOM,[{key:"setConfig",set:function(e){
																												var t=this,
																												o=t.icon,
																												r={tag:"button",
																												content:[],
																												attrs:{className:["btn"],
																												type:"button"}},
																												n=_helpers2.default.merge(Object.assign({},r),
																													{content:[o("move"),o("handle")],attrs:{className:["item-handle"]},meta:{id:"handle"}}),i=_helpers2.default.merge(Object.assign({},r),{content:o("edit"),attrs:{className:["item-edit-toggle"]},meta:{id:"edit"},action:{click:function(e){var t=(0,_utils.closestFtype)(e.target),o=t.fType;o=o.replace(/s$/,"");var r="editing-"+o,n=t.querySelector("."+o+"-edit");_animation2.default.slideToggle(n,333),"field"===o&&(_animation2.default.slideToggle(n.nextSibling,333),t.parentElement.classList.toggle("column-"+r)),t.classList.toggle(r)}}}),a=_helpers2.default.merge(Object.assign({},r),{content:o("remove"),attrs:{className:["item-remove"]},meta:{id:"remove"},action:{click:function(e){var o=(0,_utils.closestFtype)(e.target);_animation2.default.slideUp(o,250,function(e){t.removeEmpty(e)})}}}),l=_helpers2.default.merge(Object.assign({},r),{content:o("copy"),attrs:{className:["item-clone"]},meta:{id:"clone"},action:{click:function(e){t.clone((0,_utils.closestFtype)(e.target)),_data2.data.save()}}}),s={rows:{actionButtons:{buttons:[(0,_utils.clone)(n),i,l,a],order:[],disabled:[]}},columns:{actionButtons:{buttons:[(0,_utils.clone)(l),(0,_utils.clone)(n),a],order:[],disabled:[]}},fields:{actionButtons:{buttons:[n,i,l,a],order:[],disabled:[]}}};s.rows.actionButtons.buttons[0].content=[o("move-vertical"),o("handle")],s.columns.actionButtons.buttons[0].content=[o("copy"),o("handle")];var d=_helpers2.default.merge(s,e);return Object.keys(d).forEach(function(e){if(d[e].actionButtons){var t=d[e].actionButtons,o=t.disabled,r=t.buttons;t.buttons=_helpers2.default.orderObjectsBy(r,t.order,"meta.id"),t.buttons=t.buttons.filter(function(e){var t=_helpers2.default.get(e,"meta.id");return!_helpers2.default.inArray(t,o)})}}),d.dir&&(this.dir=d.dir),this.config=d,this.config}}]),DOM}(),dom=new DOM;exports.default=dom},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=o(0),i=function(e){return e&&e.__esModule?e:{default:e}}(n),a=o(3),l=function(e){var t=[];return Array.isArray(e)?t=e:e.replace(/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(\.|\[\])(?:\4|$))/g,function(e,o,r,n){var i;i=r?n.replace(/\\(\\)?/g,"$1"):o||e,t.push(i)}),t},s={hyphenCase:function(e){return e=e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()}),e.replace(/\s/g,"-").replace(/^-+/g,"")},safeAttrName:function(e){return{className:"class"}[e]||s.hyphenCase(e)},ajax:function(e,t){return new window.Promise(function(o,r){var n=new XMLHttpRequest;n.open("GET",e,!0),n.onload=function(){200<=this.status&&300>this.status?(t(n),o(n.response)):r({status:this.status,statusText:n.statusText})},n.onerror=function(){r({status:this.status,statusText:n.statusText})},n.send()})},insertIcons:function(e){var t="formeo-sprite",o=i.default.create({tag:"div",content:e.responseText,id:t});o.style.display="none";var r=document.getElementById(t);r?r.parentElement.replaceChild(o,r):document.body.insertBefore(o,document.body.childNodes[0])},insertStyle:function(e){var t=i.default.create({tag:"style",content:e.responseText});document.head.appendChild(t)},capitalize:function(e){return e.replace(/\b\w/g,function(e){return e.toUpperCase()})},inArray:function(e,t){return-1!==t.indexOf(e)},forEach:function(e,t,o){for(var r=0;r<e.length;r++)t.call(o,e[r],r)},copyObj:function(e){return window.JSON.parse(window.JSON.stringify(e))},map:function(e,t){var o=[];return s.forEach(e,function(e,r){return o.push(t(r))}),o},subtract:function(e,t){return t.filter(function(e){return!~this.indexOf(e)},e)},indexOfNode:function(e,t){var o=t||e.parentElement;return Array.prototype.slice.call(o.childNodes).indexOf(e)},isInt:function(e){return+e===e&&0==e%1},get:function(e,t){t=l(t);for(var o=0,r=t.length;null!=e&&o<r;)e=e[t[o++]];return o&&o===r?e:void 0},set:function(e,t,o,n){t=l(t);for(var i,a=-1,s=t.length,d=e;null!==d&&++a<s;){if(i=t[a],"object"===(void 0===d?"undefined":r(d))){var f=o;if(a!=s-1){var c=d[i];void 0===(f=n?n(c,i,d):void 0)&&(f=null===c?[]:c)}hasOwnProperty.call(d,i)&&d[i]===f&&(void 0!==f||i in d)||(d[i]=f)}d=d[i]}return e},merge:function(e,t){var o=Object.assign({},e,t);for(var n in t)o.hasOwnProperty(n)&&(o[n]=Array.isArray(t[n])?e&&Array.isArray(e[n])?e[n].concat(t[n]):t[n]:"object"===r(t[n])?s.merge(e[n],t[n]):t[n]);return o},orderObjectsBy:function(e,t,o){var r=(0,a.unique)(t),n=r.map(function(t){return e.filter(function(e){return s.get(e,o)===t})[0]}).filter(Boolean),i=n.concat(e);return(0,a.unique)(i)},toggleElementsByStr:function(e,t){var o=[];return s.forEach(e,function(e){-1===e.textContent.toLowerCase().indexOf(t.toLowerCase())?e.style.display="none":(e.style.display="block",o.push(e))}),o}};t.default=s},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.registeredFields=t.formData=t.data=void 0;var n,i=o(5),a=r(i),l=o(1),s=r(l),d=o(0),f=r(d),c=o(3),u={},p={init:function(e,o){var r={id:(0,c.uuid)(),settings:new Map,stages:new Map,rows:new Map,columns:new Map,fields:new Map};u.opts=e;var i=function(e){"string"==typeof e&&(e=window.JSON.parse(e)),e.settings=(0,c.objToStrMap)(e.settings),e.stages=(0,c.objToStrMap)(e.stages),e.rows=(0,c.objToStrMap)(e.rows),e.columns=(0,c.objToStrMap)(e.columns),e.fields=(0,c.objToStrMap)(e.fields),t.formData=n=Object.assign({},r,e)};if(o)i(o);else if(window.sessionStorage&&u.opts.sessionStorage){var a=window.sessionStorage.getItem("formData");a&&i(a)}return n||(t.formData=n=r),n},saveColumnOrder:function(e){var t=e.getElementsByClassName("stage-columns"),o=s.default.map(t,function(e){return t[e].id});return n.rows.get(e.id).columns=o,o},saveFieldOrder:function(e){var t=e.getElementsByClassName("stage-fields"),o=s.default.map(t,function(e){return t[e].id});return n.columns.get(e.id).fields=o,o},saveRowOrder:function(e){e||(e=f.default.activeStage);var t=n.stages.get(e.id).rows.slice(),o=e.getElementsByClassName("stage-rows"),r=s.default.map(o,function(e){return o[e].id});return n.stages.get(e.id).rows=r,new CustomEvent("formeoUpdated",{data:{updateType:"sort",changed:"rows",oldValue:t,newValue:r}}),document.dispatchEvent(a.default.formeoUpdated),r},saveOptionOrder:function(e){var t=e.getElementsByClassName("prop-wrap"),o=s.default.map(t,function(e){return t[e].propData});return n.fields.get(e.fieldID)[e.editGroup]=o,o},saveOrder:function(e,t){return{row:p.saveRowOrder,column:p.saveColumnOrder,field:p.saveFieldOrder,options:p.saveOptionOrder}[e](t)},saveType:function(e,t){return{settings:function(){return n.settings},stages:function(){},rows:function(){return n.rows},columns:function(){return n.columns},fields:function(){return n.fields},field:function(e){return n.fields.get(e)},attrs:function(e){var t=n.fields.get(e.fieldID),o=t.attrs;return a.default.formeoUpdated=new CustomEvent("formeoUpdated",{data:{changed:"field.attrs",updateType:"update",attrValues:o}}),document.dispatchEvent(a.default.formeoUpdated),o},options:function(e){var t=n.fields.get(e.fieldID).options,o=p.saveOrder("options",e);return a.default.formeoUpdated=new CustomEvent("formeoUpdated",{data:{changed:"field.options",updateType:"sort",oldValue:t,newValue:o}}),document.dispatchEvent(a.default.formeoUpdated),o}}[e](t)},empty:function(e,t){var o={},r={stages:function(e){e||(e=f.default.activeStage.id);var t=n.stages.get(e),i=t.rows;o.rows=i.map(function(e){return r.rows(e),n.rows.delete(e),e}),t.rows=[]},rows:function(e){var t=n.rows.get(e);if(t){var i=t.columns;o.columns=i.map(function(e){return r.columns(e),n.columns.delete(e),e}),i=[]}},columns:function(e){var t=n.columns.get(e);if(t){var r=t.fields;o.fields=r.map(function(e){return n.fields.delete(e),e}),r=[]}},fields:function(e){var t=f.default.fields.get(e);if(t){t=t.field;var o=n.columns.get(t.parentElement.id),r=o.fields.slice();(0,c.remove)(o.fields,e),a.default.formeoUpdated=new CustomEvent("formeoUpdated",{data:{updateType:"removed",changed:"column.fields",oldValue:r,newValue:o.fields}}),document.dispatchEvent(a.default.formeoUpdated)}}};return r[e](t),o},saveThrottle:!1,saveThrottled:!1,save:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"stages",t=arguments[1],o=2<arguments.length&&void 0!==arguments[2]&&arguments[2];o&&(p.saveThrottle=o);var r=function(){p.saveType(e,t);var o=window.sessionStorage;return o&&u.opts.sessionStorage&&o.setItem("formData",p.json),u.opts.debug&&console.log("Saved: "+e),a.default.formeoSaved=new CustomEvent("formeoSaved",{detail:{formData:p.js}}),document.dispatchEvent(a.default.formeoSaved),n};return p.saveThrottle?p.saveThrottled=!0:(r(),p.saveThrottle=!0,setTimeout(function(){p.saveThrottled&&(r(),p.saveThrottled=!1),p.saveThrottle=!1},500)),n},get js(){var e={};return Object.keys(n).forEach(function(t){e[t]="string"==typeof n[t]?n[t]:(0,c.strMapToObj)(n[t])}),e},get prepData(){var e=p.js;return Object.keys(e).forEach(function(t){Object.keys(e[t]).forEach(function(o){var r=e[t][o];r.action&&Object.keys(r.action).forEach(function(e){r.action[e]=r.action[e].toString()})})}),e},get json(){var e=p.prepData;return window.JSON.stringify(e,null,"\t")}};t.data=p,t.formData=n,t.registeredFields={}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.memoize=t.clicked=t.cleanObj=t.numberBetween=t.numToPercent=t.clone=t.uuid=t.strMapToObj=t.objToStrMap=t.unique=t.closestFtype=t.closest=t.remove=t.match=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=o(22),i=function(e){return e&&e.__esModule?e:{default:e}}(n),a=(t.match=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];if(!t)return console.warn("utils.match missing argument 2."),!1;var o="string"==typeof t?[t]:t;o=o.map(function(e){return"*"===e?"":e.replace(/[|\\{}()[\]^*$+?.]/g,"\\$&")});var r=!0;return o.length&&(r=!e.match(new RegExp(o.join("|"),"i"))),r},t.remove=function(e,t){var o=e.indexOf(t);-1<o&&e.splice(o,1)},t.closest=function(e,t){for(var o=t.replace(".","");(e=e.parentElement)&&!e.classList.contains(o););return e},t.closestFtype=function(e){for(;(e=e.parentElement)&&!e.fType;);return e},t.unique=function(e){return e.filter(function(e,t,o){return o.indexOf(e)===t})},t.objToStrMap=function(e){for(var t=new Map,o=Object.keys(e),r=Array.isArray(o),n=0,o=r?o:o[Symbol.iterator]();;){var i;if(r){if(n>=o.length)break;i=o[n++]}else{if(n=o.next(),n.done)break;i=n.value}var a=i;t.set(a,e[a])}return t},t.strMapToObj=function(e){var t=Object.create(null);return e.forEach(function(e,o){t[o]=e}),t},t.uuid=function(e){var t;if(e){var o=e.attrs;t=(void 0===o?{}:o).id||e.id||(0,i.default)(),e.id=t}else t=(0,i.default)();return t},t.clone=function e(t){var o;if(null===t||"object"!==(void 0===t?"undefined":r(t)))return t;if(t instanceof Date)return o=new Date,o.setTime(t.getTime()),o;if(t instanceof Array){o=[];for(var n=0,i=t.length;n<i;n++)o[n]=e(t[n]);return o}if(t instanceof Object){for(var a in o={},t)t.hasOwnProperty(a)&&(o[a]=e(t[a]));return o}throw new Error("Unable to copy Object, type not supported.")},t.numToPercent=function(e){return e.toString()+"%"},t.numberBetween=function(e,t,o){return e>t&&e<o});t.cleanObj=function(e){var t=Object.assign({},e);return Object.keys(e).forEach(function(o){"string"==typeof e[o]?t[o]="":"boolean"==typeof e[o]&&(t[o]=!1)}),t},t.clicked=function(e,t,o,r){var n=o.x-5,i=o.x+5,l=o.y-5,s=o.y+5,d=a(e,n,i),f=a(t,l,s);return d&&f&&2!==r};(t.memoize=function e(t,o){if("function"!=typeof t||o&&"function"!=typeof o)throw new TypeError("memoize: First argument must be a function");var r=function e(){for(var r=arguments.length,n=Array(r),i=0;i<r;i++)n[i]=arguments[i];var a=o?o.apply(e,n):n[0],l=e.cache;if(l.has(a))return l.get(a);var s=t.apply(e,n);return e.cache=l.set(a,s),s};return r.cache=new e.Cache,r}).Cache=Map},function(e){e.exports=function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var o={};return t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t){"use strict";function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,o){function r(n,i){try{var a=t[n](i),l=a.value}catch(e){return void o(e)}return a.done?void e(l):Promise.resolve(l).then(function(e){r("next",e)},function(e){r("throw",e)})}return r("next")})}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var o,r=0;r<t.length;r++)o=t[r],o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),a=function(){function e(){var t=this;r(this,e);var o={extension:".lang",location:"assets/lang/",langs:["en-US"],locale:"en-US",preloaded:{}};this.init=function(e){return t.config=Object.assign({},o,e),t.langs=Object.assign({},t.config.preloaded),t.locale=t.config.locale||t.config.langs[0],t.setCurrent(t.locale)}}return e.prototype.getValue=function(e){return this.current&&this.current[e]||e},e.prototype.makeSafe=function(e){var t={"{":"\\{","}":"\\}","|":"\\|"};return e=e.replace(/\{|\}|\|/g,function(e){return t[e]}),new RegExp(e,"g")},e.prototype.put=function(e,t){return this.current[e]=t},e.prototype.get=function(e,t){var o,r=this,i=this.getValue(e),a=i.match(/\{[^\}]+?\}/g);if(t&&a)if("object"===(void 0===t?"undefined":n(t)))for(var l=0;l<a.length;l++)o=a[l].substring(1,a[l].length-1),i=i.replace(r.makeSafe(a[l]),t[o]||"");else i=i.replace(/\{[^\}]+?\}/g,t);return i},e.prototype.fromFile=function(e){for(var t,o=e.split("\n"),r={},n=0;n<o.length;n++)if(t=o[n].match(/^(.+?) *?= *?([^\n]+)/)){var i=t[2].replace(/^\s+|\s+$/,"");r[t[1]]=i}return r},e.prototype.processFile=function(e){var t=e.replace(/\n\n/g,"\n");return this.fromFile(t)},e.prototype.loadLang=function(e){var t=this;return new Promise(function(o,r){if(t.langs[e])o(t.langs[e]);else{var n=new XMLHttpRequest,i=t.config.location+e+t.config.extension;n.open("GET",i,!0),n.onload=function(){if(304>=this.status){var i=t.processFile(n.responseText);t.langs[e]=i,o(i)}else r({status:this.status,statusText:n.statusText})},n.onerror=function(){r({status:this.status,statusText:n.statusText})},n.send()}})},e.prototype.setCurrent=function(){var e=o(regeneratorRuntime.mark(function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"en-US";return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadLang(t);case 2:return this.locale=t,this.current=this.langs[t],e.abrupt("return",this.current);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),i(e,[{key:"getLangs",get:function(){return this.config.langs}}]),e}();t.default=new a}])},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={formeoLoaded:function(){},onAdd:function(){},onUpdate:function(e){r.opts.debug&&console.log(e)},onSave:function(){},confirmClearAll:function(e){window.confirm(e.confirmationMessage)&&e.clearAllAction(e)}},r={init:function(e){return this.opts=Object.assign({},o,e),this},formeoSaved:new CustomEvent("formeoSaved",{}),formeoUpdated:new CustomEvent("formeoUpdated",{})};document.addEventListener("formeoUpdated",function(e){var t=e.timeStamp,o=e.type,n=e.data;r.opts.onUpdate({timeStamp:t,type:o,data:n})}),document.addEventListener("confirmClearAll",function(e){e={timeStamp:e.timeStamp,type:e.type,rowCount:e.detail.rows.length,confirmationMessage:e.detail.confirmationMessage,clearAllAction:e.detail.clearAllAction,btnCoords:e.detail.btnCoords},r.opts.confirmClearAll(e)}),document.addEventListener("formeoSaved",function(e){e={timeStamp:e.timeStamp,type:e.type,formData:e.detail.formData},r.opts.onSave(e)}),document.addEventListener("formeoLoaded",function(e){r.opts.formeoLoaded(e.detail.formeo)}),t.default=r},function(e,t,o){var r,n;!function(i){"use strict";r=i,void 0!==(n="function"==typeof r?r.call(t,o,t,e):r)&&(e.exports=n)}(function(){"use strict";function e(e,t){if(!e||!e.nodeType||1!==e.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(e);this.el=e,this.options=t=b({},t),e[R]=this;var o={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(e.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",ignore:"a, img",filter:null,animation:0,setData:function(e,t){
																											e.setData("Text",t.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1};for(var r in o)r in t||(t[r]=o[r]);for(var i in V(t),this)"_"===i.charAt(0)&&(this[i]=this[i].bind(this));this.nativeDraggable=!t.forceFallback&&W,n(e,"mousedown",this._onTapStart),n(e,"touchstart",this._onTapStart),this.nativeDraggable&&(n(e,"dragover",this),n(e,"dragenter",this)),H.push(this._onDragOver),t.store&&this.sort(t.store.get(this))}function t(e){x&&x.state!==e&&(l(x,"display",e?"none":""),!e&&x.state&&_.insertBefore(x,v),x.state=e)}function o(e,t,o){if(e){o=o||z,t=t.split(".");var r=t.shift().toUpperCase(),n=new RegExp("\\s("+t.join("|")+")(?=\\s)","g");do{if(">*"===r&&e.parentNode===o||(""===r||e.nodeName.toUpperCase()==r)&&(!t.length||((" "+e.className+" ").match(n)||[]).length==t.length))return e}while(e!==o&&(e=e.parentNode))}return null}function r(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.preventDefault()}function n(e,t,o){e.addEventListener(t,o,!1)}function i(e,t,o){e.removeEventListener(t,o,!1)}function a(e,t,o){if(e)if(e.classList)e.classList[o?"add":"remove"](t);else{var r=(" "+e.className+" ").replace(P," ").replace(" "+t+" "," ");e.className=(r+(o?" "+t:"")).replace(P," ")}}function l(e,t,o){var r=e&&e.style;if(r){if(void 0===o)return z.defaultView&&z.defaultView.getComputedStyle?o=z.defaultView.getComputedStyle(e,""):e.currentStyle&&(o=e.currentStyle),void 0===t?o:o[t];t in r||(t="-webkit-"+t),r[t]=o+("string"==typeof o?"":"px")}}function s(e,t,o){if(e){var r=e.getElementsByTagName(t),n=0,i=r.length;if(o)for(;n<i;n++)o(r[n],n);return r}return[]}function d(e,t,o,r,n,i,a){var l=z.createEvent("Event"),s=(e||t[R]).options,d="on"+o.charAt(0).toUpperCase()+o.substr(1);l.initEvent(o,!0,!0),l.to=t,l.from=n||t,l.item=r||t,l.clone=x,l.oldIndex=i,l.newIndex=a,t.dispatchEvent(l),s[d]&&s[d].call(e,l)}function f(e,t,o,r,n,i){var a,l,s=e[R],d=s.options.onMove;return a=z.createEvent("Event"),a.initEvent("move",!0,!0),a.to=t,a.from=e,a.dragged=o,a.draggedRect=r,a.related=n||t,a.relatedRect=i||t.getBoundingClientRect(),e.dispatchEvent(a),d&&(l=d.call(s,a)),l}function c(e){e.draggable=!1}function u(){G=!1}function p(e,t){var o=e.lastElementChild,r=o.getBoundingClientRect();return(5<t.clientY-(r.top+r.height)||5<t.clientX-(r.right+r.width))&&o}function m(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,o=t.length,r=0;o--;)r+=t.charCodeAt(o);return r.toString(36)}function g(e){var t=0;if(!e||!e.parentNode)return-1;for(;e&&(e=e.previousElementSibling);)"TEMPLATE"!==e.nodeName.toUpperCase()&&t++;return t}function h(e,t){var o,r;return function(){void 0==o&&(o=arguments,r=this,setTimeout(function(){1===o.length?e.call(r,o[0]):e.apply(r,o),o=void 0},t))}}function b(e,t){if(e&&t)for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);return e}var v,y,w,x,_,E,D,k,C,O,T,S,N,M,L,A,j,I={},P=/\s+/g,R="Sortable"+(new Date).getTime(),B=window,z=B.document,F=B.parseInt,W=!!("draggable"in z.createElement("div")),U=function(e){return e=z.createElement("x"),e.style.cssText="pointer-events:auto","auto"===e.style.pointerEvents}(),G=!1,q=Math.abs,H=([].slice,[]),X=h(function(e,t,o){if(o&&t.scroll){var r,n,i,a,l=t.scrollSensitivity,s=t.scrollSpeed,d=e.clientX,f=e.clientY,c=window.innerWidth,u=window.innerHeight;if(k!==o&&(D=t.scroll,k=o,!0===D)){D=o;do{if(D.offsetWidth<D.scrollWidth||D.offsetHeight<D.scrollHeight)break}while(D=D.parentNode)}D&&(r=D,n=D.getBoundingClientRect(),i=(q(n.right-d)<=l)-(q(n.left-d)<=l),a=(q(n.bottom-f)<=l)-(q(n.top-f)<=l)),i||a||(i=(c-d<=l)-(d<=l),a=(u-f<=l)-(f<=l),(i||a)&&(r=B)),(I.vx!==i||I.vy!==a||I.el!==r)&&(I.el=r,I.vx=i,I.vy=a,clearInterval(I.pid),r&&(I.pid=setInterval(function(){r===B?B.scrollTo(B.pageXOffset+i*s,B.pageYOffset+a*s):(a&&(r.scrollTop+=a*s),i&&(r.scrollLeft+=i*s))},24)))}},30),V=function(e){var t=e.group;t&&"object"==typeof t||(t=e.group={name:t}),["pull","put"].forEach(function(e){e in t||(t[e]=!0)}),e.groups=" "+t.name+(t.put.join?" "+t.put.join(" "):"")+" "};return e.prototype={constructor:e,_onTapStart:function(e){var t=this,r=this.el,n=this.options,i=e.type,a=e.touches&&e.touches[0],l=(a||e).target,s=l,f=n.filter;if(!("mousedown"===i&&0!==e.button||n.disabled||!(l=o(l,n.draggable,r)))){if(S=g(l),"function"==typeof f){if(f.call(this,e,l,this))return d(t,s,"filter",l,r,S),void e.preventDefault()}else if(f&&(f=f.split(",").some(function(e){if(e=o(s,e.trim(),r))return d(t,e,"filter",l,r,S),!0})))return void e.preventDefault();n.handle&&!o(s,n.handle,r)||this._prepareDragStart(e,a,l)}},_prepareDragStart:function(e,t,o){var r,i=this,l=i.el,d=i.options,f=l.ownerDocument;o&&!v&&o.parentNode===l&&(L=e,_=l,v=o,y=v.parentNode,E=v.nextSibling,M=d.group,r=function(){i._disableDelayedDrag(),v.draggable=!0,a(v,i.options.chosenClass,!0),i._triggerDragStart(t)},d.ignore.split(",").forEach(function(e){s(v,e.trim(),c)}),n(f,"mouseup",i._onDrop),n(f,"touchend",i._onDrop),n(f,"touchcancel",i._onDrop),d.delay?(n(f,"mouseup",i._disableDelayedDrag),n(f,"touchend",i._disableDelayedDrag),n(f,"touchcancel",i._disableDelayedDrag),n(f,"mousemove",i._disableDelayedDrag),n(f,"touchmove",i._disableDelayedDrag),i._dragStartTimer=setTimeout(r,d.delay)):r())},_disableDelayedDrag:function(){var e=this.el.ownerDocument;clearTimeout(this._dragStartTimer),i(e,"mouseup",this._disableDelayedDrag),i(e,"touchend",this._disableDelayedDrag),i(e,"touchcancel",this._disableDelayedDrag),i(e,"mousemove",this._disableDelayedDrag),i(e,"touchmove",this._disableDelayedDrag)},_triggerDragStart:function(e){e?(L={target:v,clientX:e.clientX,clientY:e.clientY},this._onDragStart(L,"touch")):this.nativeDraggable?(n(v,"dragend",this),n(_,"dragstart",this._onDragStart)):this._onDragStart(L,!0);try{z.selection?z.selection.empty():window.getSelection().removeAllRanges()}catch(e){}},_dragStarted:function(){_&&v&&(a(v,this.options.ghostClass,!0),e.active=this,d(this,_,"start",v,_,S))},_emulateDragOver:function(){if(A){if(this._lastX===A.clientX&&this._lastY===A.clientY)return;this._lastX=A.clientX,this._lastY=A.clientY,U||l(w,"display","none");var e=z.elementFromPoint(A.clientX,A.clientY),t=e,o=" "+this.options.group.name,r=H.length;if(t)do{if(t[R]&&-1<t[R].options.groups.indexOf(o)){for(;r--;)H[r]({clientX:A.clientX,clientY:A.clientY,target:e,rootEl:t});break}e=t}while(t=t.parentNode);U||l(w,"display","")}},_onTouchMove:function(t){if(L){e.active||this._dragStarted(),this._appendGhost();var o=t.touches?t.touches[0]:t,r=o.clientX-L.clientX,n=o.clientY-L.clientY,i=t.touches?"translate3d("+r+"px,"+n+"px,0)":"translate("+r+"px,"+n+"px)";j=!0,A=o,l(w,"webkitTransform",i),l(w,"mozTransform",i),l(w,"msTransform",i),l(w,"transform",i),t.preventDefault()}},_appendGhost:function(){if(!w){var e,t=v.getBoundingClientRect(),o=l(v),r=this.options;w=v.cloneNode(!0),a(w,r.ghostClass,!1),a(w,r.fallbackClass,!0),l(w,"top",t.top-F(o.marginTop,10)),l(w,"left",t.left-F(o.marginLeft,10)),l(w,"width",t.width),l(w,"height",t.height),l(w,"opacity","0.8"),l(w,"position","fixed"),l(w,"zIndex","100000"),l(w,"pointerEvents","none"),r.fallbackOnBody&&z.body.appendChild(w)||_.appendChild(w),e=w.getBoundingClientRect(),l(w,"width",2*t.width-e.width),l(w,"height",2*t.height-e.height)}},_onDragStart:function(e,t){var o=e.dataTransfer,r=this.options;this._offUpEvents(),"clone"==M.pull&&(x=v.cloneNode(!0),l(x,"display","none"),_.insertBefore(x,v)),t?("touch"===t?(n(z,"touchmove",this._onTouchMove),n(z,"touchend",this._onDrop),n(z,"touchcancel",this._onDrop)):(n(z,"mousemove",this._onTouchMove),n(z,"mouseup",this._onDrop)),this._loopId=setInterval(this._emulateDragOver,50)):(o&&(o.effectAllowed="move",r.setData&&r.setData.call(this,o,v)),n(z,"drop",this),setTimeout(this._dragStarted,0))},_onDragOver:function(e){var r,n,i,a=this.el,s=this.options,d=s.group,c=d.put,m=M===d,g=s.sort;if(void 0!==e.preventDefault&&(e.preventDefault(),!s.dragoverBubble&&e.stopPropagation()),j=!0,M&&!s.disabled&&(m?g||(i=!_.contains(v)):M.pull&&c&&(M.name===d.name||c.indexOf&&~c.indexOf(M.name)))&&(void 0===e.rootEl||e.rootEl===this.el)){if(X(e,s,this.el),G)return;if(r=o(e.target,s.draggable,a),n=v.getBoundingClientRect(),i)return t(!0),void(x||E?_.insertBefore(v,x||E):!g&&_.appendChild(v));if(0===a.children.length||a.children[0]===w||a===e.target&&(r=p(a,e))){if(r){if(r.animated)return;b=r.getBoundingClientRect()}t(m),!1!==f(_,a,v,n,r,b)&&(!v.contains(a)&&(a.appendChild(v),y=a),this._animate(n,v),r&&this._animate(b,r))}else if(r&&!r.animated&&r!==v&&void 0!==r.parentNode[R]){C!==r&&(C=r,O=l(r),T=l(r.parentNode));var h,b=r.getBoundingClientRect(),D=b.right-b.left,k=b.bottom-b.top,S=/left|right|inline/.test(O.cssFloat+O.display)||"flex"==T.display&&0===T["flex-direction"].indexOf("row"),N=r.offsetWidth>v.offsetWidth,L=r.offsetHeight>v.offsetHeight,A=.5<(S?(e.clientX-b.left)/D:(e.clientY-b.top)/k),I=r.nextElementSibling,P=f(_,a,v,n,r,b);if(!1!==P){if(G=!0,setTimeout(u,30),t(m),1===P||-1===P)h=1===P;else if(S){var B=v.offsetTop,z=r.offsetTop;h=B===z?r.previousElementSibling===v&&!N||A&&N:z>B}else h=I!==v&&!L||A&&L;v.contains(a)||(h&&!I?a.appendChild(v):r.parentNode.insertBefore(v,h?I:r)),y=v.parentNode,this._animate(n,v),this._animate(b,r)}}}},_animate:function(e,t){var o=this.options.animation;if(o){var r=t.getBoundingClientRect();l(t,"transition","none"),l(t,"transform","translate3d("+(e.left-r.left)+"px,"+(e.top-r.top)+"px,0)"),t.offsetWidth,l(t,"transition","all "+o+"ms"),l(t,"transform","translate3d(0,0,0)"),clearTimeout(t.animated),t.animated=setTimeout(function(){l(t,"transition",""),l(t,"transform",""),t.animated=!1},o)}},_offUpEvents:function(){var e=this.el.ownerDocument;i(z,"touchmove",this._onTouchMove),i(e,"mouseup",this._onDrop),i(e,"touchend",this._onDrop),i(e,"touchcancel",this._onDrop)},_onDrop:function(t){var o=this.el,r=this.options;clearInterval(this._loopId),clearInterval(I.pid),clearTimeout(this._dragStartTimer),i(z,"mousemove",this._onTouchMove),this.nativeDraggable&&(i(z,"drop",this),i(o,"dragstart",this._onDragStart)),this._offUpEvents(),t&&(j&&(t.preventDefault(),!r.dropBubble&&t.stopPropagation()),w&&w.parentNode.removeChild(w),v&&(this.nativeDraggable&&i(v,"dragend",this),c(v),a(v,this.options.ghostClass,!1),a(v,this.options.chosenClass,!1),_===y?(x&&x.parentNode.removeChild(x),v.nextSibling!==E&&0<=(N=g(v))&&(d(this,_,"update",v,_,S,N),d(this,_,"sort",v,_,S,N))):0<=(N=g(v))&&(d(null,y,"sort",v,_,S,N),d(this,_,"sort",v,_,S,N),d(null,y,"add",v,_,S,N),d(this,_,"remove",v,_,S,N)),e.active&&((null===N||-1===N)&&(N=S),d(this,_,"end",v,_,S,N),this.save())),_=v=y=w=E=x=D=k=L=A=j=N=C=O=M=e.active=null)},handleEvent:function(e){var t=e.type;"dragover"===t||"dragenter"===t?v&&(this._onDragOver(e),r(e)):("drop"===t||"dragend"===t)&&this._onDrop(e)},toArray:function(){for(var e,t=[],r=this.el.children,n=0,i=r.length,a=this.options;n<i;n++)e=r[n],o(e,a.draggable,this.el)&&t.push(e.getAttribute(a.dataIdAttr)||m(e));return t},sort:function(e){var t={},r=this.el;this.toArray().forEach(function(e,n){var i=r.children[n];o(i,this.options.draggable,r)&&(t[e]=i)},this),e.forEach(function(e){t[e]&&(r.removeChild(t[e]),r.appendChild(t[e]))})},save:function(){var e=this.options.store;e&&e.set(this)},closest:function(e,t){return o(e,t||this.options.draggable,this.el)},option:function(e,t){var o=this.options;return void 0===t?o[e]:(o[e]=t,void("group"===e&&V(o)))},destroy:function(){var e=this.el;e[R]=null,i(e,"mousedown",this._onTapStart),i(e,"touchstart",this._onTapStart),this.nativeDraggable&&(i(e,"dragover",this),i(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(e){e.removeAttribute("draggable")}),H.splice(H.indexOf(this._onDragOver),1),this._onDrop(),this.el=e=null}},e.utils={on:n,off:i,css:l,find:s,is:function(e,t){return!!o(e,t,e)},extend:b,throttle:h,closest:o,toggleClass:a,index:g},e.create=function(t,o){return new e(t,o)},e.version="1.4.2",e})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={add:{attr:function(e){var t,o=window.prompt(e.message.attr);o&&(t=window.prompt(e.message.value,"")+"",e.addAction(o,t))},option:function(e){e.addAction()}},click:{btn:function(e){e.action()}},save:function(){}},r={init:function(e){return this.opts=Object.assign({},o,e),this},add:{attrs:function(e){r.opts.add.attr(e)},options:function(e){r.opts.add.option(e)}},click:{btn:function(e){r.opts.click.btn(e)}},save:function(){}};t.default=r},function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=(t.Throttle=function(){function e(){o(this,e)}return e.prototype.add=function(e,t){var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:window,r=this;r[e]=r[e]||{callbacks:[]},r.addCallback(e,t);var n=function(t){r.throttle(r[e],t)};return o.addEventListener(e,n),n},e.prototype.addCallback=function(e,t){var o=this;t&&o[e].callbacks.push(t)},e.prototype.runCallbacks=function(e,t){e.callbacks.forEach(function(e){e(t)}),e.running=!1},e.prototype.throttle=function(e,t){var o=this;e.running||(e.running=!0,window.requestAnimationFrame?window.requestAnimationFrame(function(){o.runCallbacks(e,t)}):setTimeout(o.runCallbacks.bind(e),66))},e}(),{getStyle:function(e){var t,o=1<arguments.length&&void 0!==arguments[1]&&arguments[1];return window.getComputedStyle?t=window.getComputedStyle(e,null):e.currentStyle&&(t=e.currentStyle),o?t[o]:t},fadeOut:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:250;e.style.opacity=1,function o(){var r=+e.style.opacity-1/(t/60);0<r?(e.style.opacity=r,requestAnimationFrame(o)):e.remove()}()},slideDown:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:250,o=2<arguments.length&&void 0!==arguments[2]&&arguments[2];e.style.display="block";var n=r.getStyle(e),i=n.overflow;e.style.overflow="hidden";var a=parseInt(n.height,10);e.style.height="0px",function r(){var n=parseFloat(e.style.height);n<a?(e.style.height=n+a/(t/60)+"px",requestAnimationFrame(r)):(e.style.overflow=i,e.style.height="auto",o&&o(e))}()},slideUp:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:250,o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=r.getStyle(e),i=parseInt(n.height),a=n.overflow;e.style.overflow="hidden",e.style.height=i+"px";var l=n.minHeight;e.style.minHeight="auto";var s=parseFloat(i/(t/60)).toFixed(2);!function t(){var r=parseInt(e.style.height,10),n=r-s;0<n?(e.style.height=n+"px",requestAnimationFrame(t)):(e.style.overflow=a,e.style.display="none",e.style.minHeight=l,delete e.style.height,o&&o(e))}()},slideToggle:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:250;"none"===r.getStyle(e,"display")?r.slideDown(e,t):r.slideUp(e,t)}});t.default=r},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=o(4),a=r(i),l=o(6),s=r(l),d=o(1),f=r(d),c=o(0),u=r(c),p=o(2),m={type:"field"},g=function(){function e(t){n(this,e);var o=this;o.opts=Object.assign({},m,t),o.labels=o.panelNav();var r=o.panelsWrap();return o.panels=r.childNodes,o.currentPanel=o.panels[0],o.nav=o.navActions(),"field"===o.opts.type&&setTimeout(o.setPanelsHeight.bind(o),100),o.panelDisplay="slider",{content:[o.labels,r],nav:o.nav,actions:{resize:o.resizePanels.bind(o)}}}return e.prototype.resizePanels=function(){var e=this.panelsWrap,t=e.parentElement.parentElement,o=parseInt(u.default.getStyle(t,"width")),r=390<o;this.panelDisplay=r?"tabbed":"slider",e.parentElement.classList.toggle("tabbed-panels",r);var n=e.style,i=u.default.getStyle(this.currentPanel,"height");return n.height=i},e.prototype.setPanelsHeight=function(){var e=document.getElementById(this.opts.id);this.slideToggle=e.querySelector(".field-edit"),this.slideToggle.style.display="block",this.slideToggle.style.position="absolute",this.slideToggle.style.opacity=0,this.resizePanels(),this.slideToggle.style.display="none",this.slideToggle.style.position="relative",this.slideToggle.style.opacity=1,this.slideToggle.style.height="auto"},e.prototype.panelsWrap=function(){return this.panelsWrap=u.default.create({tag:"div",attrs:{className:"panels"},content:this.opts.panels}),this.panelsWrap=this.panelsWrap,"field"===this.opts.type&&this.sortableProperties(this.panelsWrap),this.panelsWrap},e.prototype.sortableProperties=function(e){var t=this,o=e.getElementsByClassName("field-edit-group");return f.default.forEach(o,function(e){e.fieldID=t.opts.id,e.isSortable&&s.default.create(e,{animation:150,group:{name:"edit-"+e.editGroup,pull:!0,put:["properties"]},sort:!0,handle:".prop-order",onSort:function(e){t.propertySave(e.to),t.resizePanels()}})})},e.prototype.propertySave=function(e){var t=u.default.fields.get(this.opts.id);return p.data.save(e.editGroup,e,!1),t.instance.updatePreview()},e.prototype.panelNav=function(){for(var e,t=this,o=this,r={tag:"div",attrs:{className:"panel-labels"},content:{tag:"div",content:[]}},n=this.opts.panels,i=0;i<n.length;i++)e={tag:"h5",action:{click:function(e){var t=f.default.indexOfNode(e.target,e.target.parentElement);o.currentPanel=o.panels[t];var r=e.target.parentElement.childNodes;o.nav.refresh(t),u.default.removeClasses(r,"active-tab"),e.target.classList.add("active-tab")}},content:n[i].config.label},delete n[i].config.label,0===i&&(e.className="active-tab"),r.content.content.push(e);var l={tag:"button",attrs:{className:"next-group",title:a.default.get("controlGroups.nextGroup"),type:"button"},dataset:{toggle:"tooltip",placement:"top"},action:{click:function(e){return t.nav.nextGroup(e)}},content:u.default.icon("triangle-right")},s={tag:"button",attrs:{className:"prev-group",title:a.default.get("controlGroups.prevGroup"),type:"button"},dataset:{toggle:"tooltip",placement:"top"},action:{click:function(e){return t.nav.prevGroup(e)}},content:u.default.icon("triangle-left")};return u.default.create({tag:"nav",attrs:{className:"panel-nav"},content:[s,r,l]})},e.prototype.navActions=function(){var e=this,t=this,o={},r=this.currentPanel.parentElement,n=this.labels.querySelector(".panel-labels").firstChild,i=this.currentPanel.parentElement.childNodes,a=f.default.indexOfNode(this.currentPanel,r),l={},s=function(t){return e.currentPanel=i[t],e.panelsWrap.style.height=u.default.getStyle(e.currentPanel,"height"),"field"===e.opts.type&&(e.slideToggle.style.height="auto"),e.currentPanel},d=function(e){"tabbed"===t.panelDisplay?n.removeAttribute("style"):n.style.transform="translateX(-"+e.nav+"px)",r.style.transform="translateX(-"+e.panel+"px)"};return o.refresh=function(e){void 0!==e&&(a=e,s(e)),t.resizePanels(),l={nav:n.offsetWidth*a,panel:r.offsetWidth*a},d(l)},o.nextGroup=function(){var t=a+1;if(t!==i.length)l={nav:n.offsetWidth*t,panel:r.offsetWidth*t},d(l),s(t),a++;else{var o={nav:n.style.transform,panel:r.style.transform};l={nav:n.offsetWidth*a+10,panel:r.offsetWidth*a+10},d(l),setTimeout(function(){n.style.transform=o.nav,r.style.transform=o.panel},150)}return e.currentPanel},o.prevGroup=function(){if(0!==a){var e=a-1;l={nav:n.offsetWidth*e,panel:r.offsetWidth*e},d(l),s(e),a--}else{var t=[n.style.transform,r.style.transform],o="translateX(10px)";n.style.transform=o,r.style.transform=o,setTimeout(function(){n.style.transform=t[0],r.style.transform=t[1]},150)}},o},e}();t.default=g},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,o){function r(n,i){try{var a=t[n](i),l=a.value}catch(e){return void o(e)}return a.done?void e(l):Promise.resolve(l).then(function(e){r("next",e)},function(e){r("throw",e)})}return r("next")})}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),o(19);var a=o(4),l=r(a),s=o(1),d=r(s),f=o(2),c=o(5),u=r(c),p=o(7),m=r(p),g=o(0),h=r(g),b=o(13),v=o(16),y=r(v),w={get formData(){return f.data.json}},x={},_=function(){function e(t,o){i(this,e);var r={allowEdit:!0,dataType:"json",debug:!1,sessionStorage:!1,container:".formeo-wrap",prefix:"formeo-",iconFontFallback:null,events:{},actions:{},controls:{},config:{rows:{},columns:{},fields:{}},i18n:{locale:"en-US",langs:["en-US"],preloaded:{"en-US":{"action.add.attrs.attr":"What attribute would you like to add?","action.add.attrs.value":"Default Value",addOption:"Add Option",allFieldsRemoved:"All fields were removed.",allowSelect:"Allow Select",attribute:"Attribute",attributes:"Attributes","attrs.class":"Class","attrs.className":"Class","attrs.required":"Required Field","attrs.type":"Type","attrs.id":"Id","attrs.title":"Title","attrs.style":"Style","attrs.dir":"Direction",autocomplete:"Autocomplete",button:"Button",cannotBeEmpty:"This field cannot be empty",checkbox:"Checkbox",checkboxes:"Checkboxes",checkboxGroup:"Checkbox Group",className:"Class",class:"Class",clear:"Clear",clearAllMessage:"Are you sure you want to clear all fields?",close:"Close",column:"Column",commonFields:"Common Fields",confirmClearAll:"Are you sure you want to remove all fields?",content:"Content",control:"Control","controlGroups.nextGroup":"Next Group","controlGroups.prevGroup":"Previous Group",copy:"Copy To Clipboard",danger:"Danger",description:"Help Text",descriptionField:"Description",devMode:"Developer Mode",divider:"Divider","editing.row":"Editing Row",editNames:"Edit Names",editorTitle:"Form Elements",editXML:"Edit XML","en-US":"English",field:"Field",fieldNonEditable:"This field cannot be edited.",fieldRemoveWarning:"Are you sure you want to remove this field?",fileUpload:"File Upload",formUpdated:"Form Updated",getStarted:"Drag a field from the right to this area",group:"Group",grouped:"Grouped",header:"Header",hidden:"Hidden Input",hide:"Edit",htmlElements:"HTML Elements",info:"Info","input.date":"Date","input.text":"Text",label:"Label",labelCount:"{label} {count}",labelEmpty:"Field Label cannot be empty",layout:"Layout",limitRole:"Limit access to one or more of the following roles:",mandatory:"Mandatory",maxlength:"Max Length","meta.group":"Group","meta.icon":"Ico","meta.label":"Label",minOptionMessage:"This field requires a minimum of 2 options",name:"Name",no:"No",number:"Number",off:"Off",on:"On",option:"Option",optional:"optional",optionEmpty:"Option value required",optionLabel:"Option {count}",options:"Options","panelEditButtons.attrs":"+ Attribute","panelEditButtons.options":"+ Option","panelLabels.attrs":"Attrs","panelLabels.config":"Config","panelLabels.meta":"Meta","panelLabels.options":"Options",paragraph:"Paragraph",placeholder:"Placeholder","placeholder.className":"space separated classes","placeholder.email":"Enter you email","placeholder.label":"Label","placeholder.password":"Enter your password","placeholder.placeholder":"Placeholder","placeholder.text":"Enter some Text","placeholder.textarea":"Enter a lot of text","placeholder.value":"Value",preview:"Preview",primary:"Primary",radio:"Radio",radioGroup:"Radio Group",remove:"Remove",removeMessage:"Remove Element",required:"Required",reset:"Reset",richText:"Rich Text Editor",roles:"Access",row:"Row","row.makeInputGroup":"Make this row an input group.","row.makeInputGroupDesc":"Input Groups enable users to add sets of inputs at a time.","row.settings.fieldsetWrap":"Wrap row in a &lt;fieldset&gt; tag","row.settings.fieldsetWrap.aria":"Wrap Row in Fieldset",save:"Save",secondary:"Secondary",select:"Select",selectColor:"Select Color",selectionsMessage:"Allow Multiple Selections",selectOptions:"Options",separator:"Separator",settings:"Settings",size:"Size",sizes:"Sizes","sizes.lg":"Large","sizes.m":"Default","sizes.sm":"Small","sizes.xs":"Extra Small",style:"Style",styles:"Styles","styles.btn":"Button Style","styles.btn.danger":"Danger","styles.btn.default":"Default","styles.btn.info":"Info","styles.btn.primary":"Primary","styles.btn.success":"Success","styles.btn.warning":"Warning",subtype:"Type",success:"Success",text:"Text Field",textarea:"Textarea",toggle:"Toggle",ungrouped:"Un-Grouped",viewXML:"</>",warning:"Warning",yes:"Yes"}}}},n=window.sessionStorage.getItem("formeo-locale");n&&(r.i18n.locale=n);var a=this;return a.container=t.container||r.container,"string"==typeof a.container&&(a.container=document.querySelector(a.container)),delete t.container,x=d.default.merge(r,t),f.data.init(x,o),u.default.init(x.events),m.default.init(x.actions),a.loadResources().then(function(){h.default.setConfig=x.config,w.render=function(e){return h.default.renderForm.call(h.default,e)},x.allowEdit&&(w.edit=a.init.bind(a),a.init.call(a))}),w}return e.prototype.loadResources=function(){var e=[];return x.style&&e.push(d.default.ajax(x.style,d.default.insertStyle)),x.svgSprite&&e.push(d.default.ajax(x.svgSprite,d.default.insertIcons)),window.Promise.all(e)},e.prototype.init=function(){var e=n(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,e.next=3,l.default.init(x.i18n);case 3:return t.formID=f.formData.id,w.controls=new b.Controls(x.controls,t.formID),t.stages=t.buildStages(),w.i18n={setLang:function(e){window.sessionStorage.setItem("formeo-locale",e),l.default.setCurrent.call(l.default,e).then(function(){t.stages=t.buildStages(),w.controls=new b.Controls(x.controls,t.formID),t.render()},function(e){e.message="There was an error retrieving the language files",console.error(e)})}},t.render(),e.abrupt("return",w);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),e.prototype.buildStages=function(){var e=[],t=function(e){return new y.default(x,e)};return f.formData.stages.size?f.formData.stages.forEach(function(o,r){e.push(t(r))}):e.push(t()),e},e.prototype.render=function(){var e=this,t=w.controls.element,o={tag:"div",attrs:{className:"formeo formeo-editor",id:e.formID},content:[e.stages,t]};l.default.current.dir&&(o.attrs.dir=l.default.current.dir,h.default.dir=l.default.current.dir);var r=h.default.create(o);e.container.innerHTML="",e.container.appendChild(r),e.stages.forEach(function(e){e.childNodes[0].style.minHeight=h.default.getStyle(t,"height")}),u.default.formeoLoaded=new CustomEvent("formeoLoaded",{detail:{formeo:w}}),document.dispatchEvent(u.default.formeoLoaded)},e}();void 0!==window&&(window.Formeo=_),t.default=_},function(e,t,o){(function(t,o){!function(t){"use strict";function r(e,t,o,r){var n=Object.create((t||i).prototype),a=new m(r||[]);return n._invoke=c(e,o,a),n}function n(e,t,o){try{return{type:"normal",arg:e.call(t,o)}}catch(e){return{type:"throw",arg:e}}}function i(){}function a(){}function l(){}function s(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function d(e){this.arg=e}function f(e){function t(t,o){var r=e[t](o),a=r.value;return a instanceof d?Promise.resolve(a.arg).then(n,i):Promise.resolve(a).then(function(e){return r.value=e,r})}"object"==typeof o&&o.domain&&(t=o.domain.bind(t));var r,n=t.bind(e,"next"),i=t.bind(e,"throw");t.bind(e,"return");this._invoke=function(e,o){function n(){return t(e,o)}return r=r?r.then(n,n):new Promise(function(e){e(n())})}}function c(e,t,o){var r=_;return function(i,a){if(r==D)throw new Error("Generator is already running");if(r==k){if("throw"===i)throw a;return h()}for(;;){var l=o.delegate;if(l){if("return"===i||"throw"===i&&l.iterator[i]===b){o.delegate=null;var s=l.iterator.return;if(s){var d=n(s,l.iterator,a);if("throw"===d.type){i="throw",a=d.arg;continue}}if("return"===i)continue}var d=n(l.iterator[i],l.iterator,a);if("throw"===d.type){o.delegate=null,i="throw",a=d.arg;continue}i="next",a=b;var f=d.arg;if(!f.done)return r=E,f;o[l.resultName]=f.value,o.next=l.nextLoc,o.delegate=null}if("next"===i)o._sent=a,o.sent=r==E?a:b;else if("throw"===i){if(r==_)throw r=k,a;o.dispatchException(a)&&(i="next",a=b)}else"return"===i&&o.abrupt("return",a);r=D;var d=n(e,t,o);if("normal"===d.type){r=o.done?k:E;var f={value:d.arg,done:o.done};if(d.arg!==C)return f;o.delegate&&"next"===i&&(a=b)}else"throw"===d.type&&(r=k,i="throw",a=d.arg)}}}function u(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function p(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function m(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(u,this),this.reset(!0)}function g(e){if(e){var t=e[y];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,r=function t(){for(;++o<e.length;)if(v.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=b,t.done=!0,t};return r.next=r}}return{next:h}}function h(){return{value:b,done:!0}}var b,v=Object.prototype.hasOwnProperty,y="function"==typeof Symbol&&Symbol.iterator||"@@iterator",w="object"==typeof e,x=t.regeneratorRuntime;if(x)return void(w&&(e.exports=x));x=t.regeneratorRuntime=w?e.exports:{},x.wrap=r;var _="suspendedStart",E="suspendedYield",D="executing",k="completed",C={},O=l.prototype=i.prototype;a.prototype=O.constructor=l,l.constructor=a,a.displayName="GeneratorFunction",x.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===a||"GeneratorFunction"===(t.displayName||t.name))},x.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,l):e.__proto__=l,e.prototype=Object.create(O),e},x.awrap=function(e){return new d(e)},s(f.prototype),x.async=function(e,t,o,n){var i=new f(r(e,t,o,n));return x.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},s(O),O[y]=function(){return this},O.toString=function(){return"[object Generator]"},x.keys=function(e){var t=[];for(var o in e)t.push(o);return t.reverse(),function o(){for(;t.length;){var r=t.pop();if(r in e)return o.value=r,o.done=!1,o}return o.done=!0,o}},x.values=g,m.prototype={constructor:m,reset:function(e){if(this.prev=0,this.next=0,this.sent=b,this.done=!1,this.delegate=null,this.tryEntries.forEach(p),!e)for(var t in this)"t"===t.charAt(0)&&v.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=b)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,r){return i.type="throw",i.arg=e,o.next=t,!!r}if(this.done)throw e;for(var o=this,r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r],i=n.completion;if("root"===n.tryLoc)return t("end");if(n.tryLoc<=this.prev){var a=v.call(n,"catchLoc"),l=v.call(n,"finallyLoc");if(a&&l){if(this.prev<n.catchLoc)return t(n.catchLoc,!0);if(this.prev<n.finallyLoc)return t(n.finallyLoc)}else if(a){if(this.prev<n.catchLoc)return t(n.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return t(n.finallyLoc)}}}},abrupt:function(e,t){for(var o,r=this.tryEntries.length-1;0<=r;--r)if(o=this.tryEntries[r],o.tryLoc<=this.prev&&v.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var n=o;break}n&&("break"===e||"continue"===e)&&n.tryLoc<=t&&t<=n.finallyLoc&&(n=null);var i=n?n.completion:{};return i.type=e,i.arg=t,n?this.next=n.finallyLoc:this.complete(i),C},complete:function(e,t){if("throw"===e.type)throw e.arg;"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=e.arg,this.next="end"):"normal"===e.type&&t&&(this.next=t)},finish:function(e){for(var t,o=this.tryEntries.length-1;0<=o;--o)if(t=this.tryEntries[o],t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),p(t),C},catch:function(e){for(var t,o=this.tryEntries.length-1;0<=o;--o)if(t=this.tryEntries[o],t.tryLoc===e){var r=t.completion;if("throw"===r.type){var n=r.arg;p(t)}return n}throw new Error("illegal catch attempt")},delegateYield:function(e,t,o){return this.delegate={iterator:g(e),resultName:t,nextLoc:o},C}}}("object"==typeof t?t:"object"==typeof window?window:"object"==typeof self?self:this)}).call(t,o(23),o(20))},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=o(4),a=r(i),l=o(6),s=r(l),d=o(2),f=o(1),c=r(f),u=o(5),p=r(u),m=o(0),g=r(m),h=o(3),b=function(){function e(t){n(this,e);var o,r=this,i=r.columnID=t||(0,h.uuid)();r.columnData=d.formData.columns.get(i),o={fields:[],id:i,config:{},className:[]},d.formData.columns.set(i,c.default.merge(o,r.columnData));var l={tag:"li",className:"resize-x-handle",action:{mousedown:r.resize,touchstart:r.resize},content:[g.default.icon("triangle-down"),g.default.icon("triangle-up")]},f={tag:"ul",className:["stage-columns","empty-columns"],dataset:{hoverTag:a.default.get("column")},action:{mouseup:function(e){var t=e.target.parentElement;t.resizing&&(t.resizing=!1,t.parentElement.classList.remove("resizing-columns"))}},id:r.columnID,content:[g.default.actionButtons(r.columnID),{tag:"li",className:"column-edit group-config"},l],fType:"columns"};f=g.default.create(f),this.processConfig(f),p.default.columnResized=new CustomEvent("columnResized",{detail:{column:f,instance:r}});var u=this.sortable=s.default.create(f,{animation:150,fallbackClass:"field-moving",forceFallback:!0,group:{name:"columns",pull:!0,put:["columns","controls"],revertClone:!0},sort:!0,onEnd:r.onEnd,onAdd:r.onAdd,onSort:r.onSort,onRemove:r.onRemove,onMove:function(e){e.from!==e.to&&e.from.classList.remove("hovering-column"),"columns"===e.related.parentElement.fType&&e.related.parentElement.classList.add("hovering-column")},draggable:".stage-fields"});return g.default.columns.set(i,{column:f,sortable:u}),f}return e.prototype.onSort=function(e){return d.data.saveFieldOrder(e.target)},e.prototype.processConfig=function(e){var t=this,o=d.formData.columns.get(t.columnID);o.config.width&&(e.dataset.colWidth=o.config.width,e.style.width=o.config.width,e.style.float="left")},e.prototype.onAdd=function(e){var t=e.from,o=e.item,r=e.to,n="columns"===t.fType;if("controlGroup"===t.fType){var i=c.default.get(d.registeredFields[o.id],"meta");if("layout"!==i.group){var a=g.default.addField(r.id,o.id);r.insertBefore(a,r.childNodes[e.newIndex]),d.data.saveFieldOrder(r),d.data.save("fields",r.id)}else if("layout-column"===i.id){var l=r.parentElement;g.default.addColumn(l.id),g.default.columnWidths(l)}g.default.remove(e.item)}g.default.fieldOrderClass(r),n&&g.default.fieldOrderClass(t),g.default.emptyClass(e.to),d.data.save(),r.classList.remove("hovering-column")},e.prototype.onRemove=function(e){e.from.parent&&(g.default.columnWidths(e.from.parentElement),d.data.saveColumnOrder(e.from.parentElement)),g.default.emptyClass(e.from)},e.prototype.onEnd=function(e){var t=e.to,o=e.from;return o.classList.contains("empty-columns")?void g.default.removeEmpty(e.from):(g.default.fieldOrderClass(t),g.default.fieldOrderClass(o),o.parent&&g.default.columnWidths(o.parentElement),d.data.save(),void(t&&t.classList.remove("hovering-column")))},e.prototype.resize=function(e){function t(e){var t="touchmove"===e.type?e.touches[0].clientX:e.clientX,l=n.colStartWidth+t-n.startX,s=n.sibStartWidth-t+n.startX,d=function(e){return e/n.rowWidth*100};o=parseFloat(d(l)),r=parseFloat(d(s)),i.dataset.colWidth=(0,h.numToPercent)(o.toFixed(1)),a.dataset.colWidth=(0,h.numToPercent)(r.toFixed(1)),i.style.width=(0,h.numToPercent)(o),a.style.width=(0,h.numToPercent)(r)}var o,r,n={},i=e.target.parentElement,a=i.nextSibling||i.previousSibling,l=i.parentElement,s=g.default.getStyle(l),f=parseFloat(s.paddingLeft)+parseFloat(s.paddingRight);n.move=function(e){t(e),n.resized=!0},n.stop=function(){if(window.removeEventListener("mousemove",n.move),window.removeEventListener("mouseup",n.stop),window.removeEventListener("touchmove",n.move),window.removeEventListener("touchend",n.stop),!!n.resized){var e=d.formData.columns.get(i.id),t=d.formData.columns.get(a.id),o=i.parentElement;o.querySelector(".column-preset").value="custom",o.classList.remove("resizing-columns"),e.config.width=i.dataset.colWidth,t.config.width=a.dataset.colWidth,n.resized=!1,d.data.save()}},n.start=function(e){n.startX="touchstart"===e.type?e.touches[0].clientX:e.clientX,l.classList.add("resizing-columns");var t=/\bcol-\w+-\d+/g;i.className.replace(t,""),a.className.replace(t,""),n.colStartWidth=i.offsetWidth||g.default.getStyle(i,"width"),n.sibStartWidth=a.offsetWidth||g.default.getStyle(a,"width"),n.rowWidth=l.offsetWidth-f,window.addEventListener("mouseup",n.stop,!1),window.addEventListener("mousemove",n.move,!1),window.addEventListener("touchend",n.stop,!1),window.addEventListener("touchmove",n.move,!1)}(e)},e}();t.default=b},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.Controls=void 0;var i=o(6),a=r(i),l=o(4),s=r(l),d=o(2),f=o(1),c=r(f),u=o(5),p=r(u),m=o(3),g=o(0),h=r(g),b=o(9),v=r(b),y={};t.Controls=function(){function e(t,o){n(this,e);var r=this;this.formID=o;var i=t.groupOrder,a=void 0===i?[]:i;this.groupOrder=(0,m.unique)(a.concat(["common","html","layout"])),this.cPosition={};var l=[{tag:"div",config:{label:s.default.get("column")},meta:{group:"layout",icon:"columns",id:"layout-column"}},{tag:"div",config:{label:s.default.get("row")},meta:{group:"layout",icon:"rows",id:"layout-row"}},{tag:"input",attrs:{type:"text",required:!1,className:""},config:{disabledAttrs:["type"],label:s.default.get("input.text")},meta:{group:"common",icon:"text-input",id:"text-input"},fMap:"attrs.value"},{tag:"input",attrs:{type:"date",required:!1,className:""},config:{disabledAttrs:["type"],label:s.default.get("input.date")},meta:{group:"common",icon:"calendar",id:"date-input"}},{tag:"button",attrs:{className:[{label:s.default.get("grouped"),value:"f-btn-group"},{label:s.default.get("ungrouped"),value:"f-field-group"}]},config:{label:s.default.get("button"),hideLabel:!0,disabledAttrs:["type"]},meta:{group:"common",icon:"button",id:"button"},options:[{label:s.default.get("button"),type:[{label:s.default.get("button"),value:"button",selected:!0},{label:s.default.get("reset"),value:"reset"},{label:s.default.get("submit"),value:"submit"}],className:[{label:s.default.get("default"),value:"",selected:!0},{label:s.default.get("primary"),value:"primary"},{label:s.default.get("danger"),value:"error"},{label:s.default.get("success"),value:"success"},{label:s.default.get("warning"),value:"warning"}]}]},{tag:"select",config:{label:s.default.get("select")},attrs:{required:!1,className:""},meta:{group:"common",icon:"select",id:"select"},options:[1,2,3,4].map(function(e){return{label:s.default.get("labelCount",{label:s.default.get("option"),count:e}),value:"option-"+e,selected:!1}})},{tag:"textarea",config:{label:s.default.get("textarea")},meta:{group:"common",icon:"textarea",id:"textarea"},attrs:{required:!1}},{tag:"input",attrs:{type:"checkbox",required:!1},config:{label:s.default.get("checkbox")+"/"+s.default.get("group"),disabledAttrs:["type"]},meta:{group:"common",icon:"checkbox",id:"checkbox"},options:[{label:s.default.get("labelCount",{label:s.default.get("checkbox"),count:1}),value:"checkbox-1",selected:!0}]},{tag:"input",attrs:{type:"radio",required:!1},config:{label:s.default.get("radioGroup"),disabledAttrs:["type"]},meta:{group:"common",icon:"radio-group",id:"radio"},options:[1,2,3].map(function(e){return{label:s.default.get("labelCount",{label:s.default.get("radio"),count:e}),value:"radio-"+e,selected:!1}})},{tag:"h1",attrs:{tag:[{value:"h1",label:"H1"},{value:"h2",label:"H2"},{value:"h3",label:"H3"},{value:"h4",label:"H4"}],className:""},config:{label:s.default.get("header"),editable:!0,hideLabel:!0},meta:{group:"html",icon:"header",id:"header"},content:s.default.get("header")},{tag:"p",attrs:{className:""},config:{label:s.default.get("paragraph"),hideLabel:!0,editable:!0},meta:{group:"html",icon:"paragraph",id:"paragraph"},content:"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."},{tag:"hr",config:{label:s.default.get("separator"),hideLabel:!0},meta:{group:"html",icon:"divider",id:"divider"}},{tag:"input",attrs:{type:"file",required:!1},config:{disabledAttrs:["type"],label:s.default.get("fileUpload")},meta:{group:"common",icon:"upload",id:"upload"},fMap:"attrs.value"},{tag:"input",attrs:{type:"number",required:!1,className:""},config:{label:s.default.get("number"),disabledAttrs:["type"]},meta:{group:"common",icon:"hash",id:"number"},fMap:"attrs.value"},{tag:"input",attrs:{type:"hidden",value:""},config:{label:s.default.get("hidden"),hideLabel:!0},meta:{group:"common",icon:"hidden",id:"hidden"},fMap:"attrs.value"}];this.defaults={sortable:!0,elementOrder:{},groups:[{id:"layout",label:s.default.get("layout"),elementOrder:["row","column"]},{id:"common",label:s.default.get("commonFields"),elementOrder:["button","checkbox"]},{id:"html",label:s.default.get("htmlElements"),elementOrder:["header","block-text"]}],disable:{groups:[],elements:[]},elements:[]},y=c.default.merge(this.defaults,t),y.elements=y.elements.concat(l),this.controlEvents={focus:function(e){var t=(0,m.closestFtype)(e.target);r.panels.nav.refresh(c.default.indexOfNode(t))},click:function(e){return r.addElement(e.target.parentElement.id)}},this.buildDOM()}return e.prototype.applyControlEvents=function(e){for(var t,o=e.item,r=document.getElementById(o.id),n=r.querySelector("button"),i=Object.keys(this.controlEvents),a=i.length-1;0<=a;a--)t=i[a],n.addEventListener(t,this.controlEvents[t])},e.prototype.prepElement=function(e){var t=this,o=(0,m.uuid)(),r={tag:"button",attrs:{type:"button"},content:[e.config.label],action:t.controlEvents},n={tag:"li",className:["field-control",e.meta.group+"-control",e.meta.id+"-control"],id:o,cPosition:{},content:r};return e.meta.icon&&r.content.unshift(h.default.icon(e.meta.icon)),d.registeredFields[o]=d.registeredFields[e.meta.id]=e,n},e.prototype.groupElements=function(){var e=this,t=this,o=y.groups.slice(),r=y.elements.slice(),n=[];return o=c.default.orderObjectsBy(o,this.groupOrder,"id"),o=o.filter(function(e){return(0,m.match)(e.id,y.disable.groups)}),c.default.map(o,function(i){var a={tag:"ul",attrs:{className:"control-group",id:t.formID+"-"+o[i].id+"-control-group"},fType:"controlGroup",config:{label:o[i].label||""}};if(y.elementOrder[o[i].id]){var l=y.elementOrder[o[i].id],s=(0,m.unique)(l.concat(o[i].elementOrder));o[i].elementOrder=s}return r=c.default.orderObjectsBy(r,o[i].elementOrder,"meta.id"),a.content=r.filter(function(e){var t=e.meta.id||"",r=[(0,m.match)(t,y.disable.elements),e.meta.group===o[i].id,!c.default.inArray(e.meta.id,n)],a=!0;return a=r.every(function(e){return!0===e}),a&&n.push(t),a}).map(function(o){return t.prepElement.call(e,o)}),a})},e.prototype.formActions=function(){var e={tag:"button",attrs:{type:"button"}};return{tag:"div",className:"form-actions f-btn-group",content:[c.default.merge(e,{content:[h.default.icon("bin"),s.default.get("clear")],className:["clear-form"],attrs:{title:s.default.get("clearAll")},action:{click:function(e){d.formData.rows.size?(p.default.confirmClearAll=new CustomEvent("confirmClearAll",{detail:{confirmationMessage:s.default.get("confirmClearAll"),clearAllAction:h.default.clearForm.bind(h.default),btnCoords:h.default.coords(e.target),rows:h.default.rows,rowCount:h.default.rows.size}}),document.dispatchEvent(p.default.confirmClearAll)):alert("There are no fields to clear")}}}),c.default.merge(e,{content:[h.default.icon("floppy-disk"),s.default.get("save")],attrs:{title:s.default.get("save")},className:["save-form"],action:{click:function(){d.data.save()}}})]}},e.prototype.buildDOM=function(){
																												if(this.element)return this.element;
																												var e=this,
																												t=this.groupElements()
																												,o=this.formActions();
										e.panels=new v.default({panels:t,type:"controls"});
										var r=["control-groups","panels-wrap","panel-count-"+t.length],
										n=h.default.create({tag:"div",className:r,content:e.panels.content}),
										i=h.default.create({tag:"div",className:this.formID+"-controls formeo-controls",content:[n,o]}),l=i.getElementsByClassName("control-group");
										this.element=i,this.groups=l,this.currentGroup=l[0],
										this.actions={filter:function(t){
											var o=e.panels.content[1],r=n.querySelector(".filtered-term"),
											a=o.querySelectorAll(".field-control");
										if(c.default.toggleElementsByStr(a,t),""!==t){
											var l="Filtering '"+t+"'";
										i.classList.add("filtered"),r?r.textContent=l:(r=h.default.create({tag:"h5",className:"filtered-term",content:l}),
											n.insertBefore(r,n.firstChild)
											)}else r&&(i.classList.remove("filtered"),r.remove())},
										addElement:e.addElement,addGroup:function(e){
											return console.log(e)}};
										for(var s=l.length-1;
											0<=s;s--)!function(t){
											var o="formeo-controls-"+l[t];
											y.sortable||localStorage.removeItem(o),
											a.default.create(l[t],{animation:150,forceFallback:!0,fallbackClass:"control-moving",fallbackOnBody:!0,group:{name:"controls",pull:"clone",put:!1},onRemove:e.applyControlEvents.bind(e),sort:y.sortable,store:{get:function(){
												var e=localStorage.getItem(o);
												return e?e.split("|"):[]},set:function(e){var t=e.toArray();
													localStorage.setItem(o,t.join("|"))}}})}(s);
										return i},e.prototype.addElement=function(e){
											var t=h.default.addRow(),o=c.default.get(d.registeredFields[e],"meta");
										if("layout"!==o.group){
											var r=h.default.addColumn(t.id);
											h.default.addField(r.id,e)}
											else"layout-column"===o.id&&h.default.addColumn(t.id);
											d.data.saveColumnOrder(t),h.default.columnWidths(t),d.data.save()},e}()},function(e,t,o){
												"use strict";
												function r(e){
													return e&&e.__esModule?e:{
														default:e
													}}function n(e,t){
														var o={};
														for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(o[r]=e[r]);return o}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=o(4),l=r(a),s=o(2),d=o(8),f=r(d),c=o(1),u=r(c),p=o(7),m=r(p),g=o(0),h=r(g),b=o(9),v=r(b),y=o(3),w=function(){function e(t){i(this,e);var o=this,r=s.formData.fields.get(t)||(0,y.clone)(s.registeredFields[t]);o.fieldID=r.id||(0,y.uuid)(),o.metaID=r.meta.id,r.id=o.fieldID,s.formData.fields.set(o.fieldID,r),this.fieldData=r;var n={tag:"li",attrs:{className:"stage-fields field-type-"+r.meta.id},id:o.fieldID,content:[h.default.actionButtons(o.fieldID,"field"),o.fieldEdit()],panelNav:o.panelNav,dataset:{hoverTag:l.default.get("field")},fType:"fields",action:{mouseenter:function(){document.getElementById(o.fieldID).classList.add("hovering-field")},mouseleave:function(){document.getElementById(o.fieldID).classList.remove("hovering-field")}}};return n=h.default.create(n),h.default.fields.set(o.fieldID,{field:n,instance:o}),o.preview=h.default.create(o.fieldPreview()),n.appendChild(o.preview),n}return e.prototype.updatePreview=function(){var e=this,t=u.default.copyObj(s.formData.fields.get(e.fieldID)),o=h.default.create(t,!0);return h.default.empty(e.preview),e.preview.appendChild(o),o},e.prototype.editPanel=function(e){var t,o,r=this,n=s.formData.fields.get(r.fieldID),i={tag:"div",className:"f-panel-wrap",content:[]};if(n[e]){o={tag:"ul",attrs:{className:["field-edit-group","field-edit-"+e]},editGroup:e,isSortable:"options"===e,content:[]},t=h.default.contentType(n[e]),i.content.push(o);var a;a="array"===t?n[e]:Object.keys(n[e]),u.default.forEach(a,function(i,a){var l={i:a,dataProp:i,fieldData:n,panelType:e,propType:t};o.content.push(r.panelContent(l))})}return i},e.prototype.panelContent=function(e){var t=this,o=e.panelType,r=e.dataProp,n=s.formData.fields.get(t.fieldID);r="string"==typeof r?r:e.i;var i=(0,y.uuid)(),a=n[o][r],l={tag:"div",className:["prop-inputs"],content:t.editPanelInputs(r,a,o,i)},d={tag:"li",className:[o+"-"+r+"-wrap","prop-wrap"],id:i,content:[]},c={tag:"button",attrs:{type:"button",className:"prop-order prop-control"},content:h.default.icon("move-vertical")},u={tag:"button",attrs:{type:"button",className:"prop-remove prop-control"},action:{click:function(){f.default.slideUp(document.getElementById(d.id),250,function(e){var n=e.parentElement,i=s.formData.fields.get(t.fieldID),a=i[o];h.default.remove(e),Array.isArray(a)?a.splice(r,1):a[r]=void 0,s.data.save(o,n),h.default.empty(t.preview);var l=h.default.create(i,!0);t.preview.appendChild(l),t.resizePanelWrap()})}},content:h.default.icon("remove")},p={tag:"div",className:"prop-controls",content:[u]};return"array"===e.propType&&(l.className.push("f-input-group"),p.content.unshift(c)),d.propData=n[o][r],this.isAllowedAttr(r)&&d.content.push(p,l),d.className.push("control-count-"+p.content.length),d},e.prototype.editPanelInputs=function(e,t,o,r){var i=this,a=[],d=s.formData.fields.get(i.fieldID),f="options"===o;return a.push(function t(a,c){var p=h.default.contentType(c),m="number"==typeof e,g=o+"."+a;m&&(g=o+"["+e+"]."+a);var b=function(e,t,o){return{string:{type:"text",value:t,placeholder:l.default.get("placeholder."+e)||u.default.capitalize(e)},boolean:{get type(){var t="checkbox";return i.fieldData.attrs&&"radio"===i.fieldData.attrs.type&&"selected"===e&&(t="radio"),t},value:t},number:{type:"number",value:t},array:{className:""}}[o]},v=function(e){return l.default.get(o+"."+e)||u.default.capitalize(e)},y={array:function(t,a){return{fMap:g,tag:"select",id:e+"-"+r,attrs:b(t,a,"array"),config:{label:v(t),hideLabel:f},content:a.map(function(e){return{tag:"option",attrs:{value:e.value,selected:e.selected},content:e.label}}),action:{change:function(r){var a=[],l=d[o][e],c=f?l[t]:l,p=c.map(function(e){var t=(e.selected,n(e,["selected"]));return a.push(t.value),t});p[a.indexOf(r.target.value)].selected=!0,u.default.set(d,g,p),s.data.save(),i.updatePreview()}}}},string:function(t,o){var n={fMap:g,tag:"input",id:e+"-"+r,attrs:b(t,o,"string"),action:{change:function(e){u.default.set(d,g,e.target.value),i.updatePreview(),s.data.save()}}};return m||(n.config={label:v(t)}),n},boolean:function(t,o){var n={tag:"input",attrs:b(t,o,"boolean"),fMap:g,id:e+"-"+r,name:i.fieldID+"-selected",action:{change:function(e){u.default.set(d,g,e.target.checked),i.updatePreview()}}};if(o&&(n.attrs.checked=o),m){n={tag:"span",className:"f-addon",content:h.default.checkbox(n)}}else n.config={label:v(t)};return n},object:function(e,o){var r=[];for(var n in o)o.hasOwnProperty(n)&&r.push(t(n,o[n]));return r}};return y.number=y.string,y[p](a,c)}(e,t)),a},e.prototype.isAllowedAttr=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"type",t=this,o=!0,r=s.registeredFields[t.metaID].config.disabledAttrs;return r&&(o=!u.default.inArray(e,r)),o},e.prototype.addAttribute=function(e,t){this.isAllowedAttr(e)||window.alert('Attribute "'+e+'": not permitted');var o=this,r=document.getElementById(o.fieldID),n=r.querySelector(".field-edit-attrs"),i=u.default.hyphenCase(e),a=s.formData.fields.get(o.fieldID),d="attrs."+i;l.default.current[d]||l.default.put(d,u.default.capitalize(e)),"string"==typeof t&&u.default.inArray(t,["true","false"])&&(t=JSON.parse(t)),a.attrs[i]=t;var f={dataObj:a,dataProp:i,i:Object.keys(a.attrs).length,panelType:"attrs"},c=n.querySelector(".attrs-"+i+"-wrap"),p=h.default.create(o.panelContent(f));c?n.replaceChild(p,c):n.appendChild(p),s.data.save(f.panelType,n),o.updatePreview(),o.resizePanelWrap()},e.prototype.addOption=function(){var e=this,t=h.default.fields.get(e.fieldID).field,o=s.formData.fields.get(e.fieldID),r=o.options,n=t.querySelector(".field-edit-options"),i=(0,y.cleanObj)(r[r.length-1]);o.options.push(i);var a={i:n.childNodes.length,dataProp:i,dataObj:o,panelType:"options",propType:"array"};n.appendChild(h.default.create(e.panelContent(a))),e.resizePanelWrap(),s.data.save(),h.default.empty(e.preview);var l=h.default.create(s.formData.fields.get(e.fieldID),!0);e.preview.appendChild(l)},e.prototype.panelEditButtons=function(e){var t=this;return{tag:"div",attrs:{className:"panel-action-buttons"},content:[{tag:"button",attrs:{type:"button",className:"add-"+e},content:l.default.get("panelEditButtons."+e),action:{click:function(o){var r={btnCoords:h.default.coords(o.target)};"attrs"===e?(r.addAction=t.addAttribute.bind(t),r.message={attr:l.default.get("action.add.attrs.attr"),value:l.default.get("action.add.attrs.value")}):"options"===e&&(r.addAction=t.addOption.bind(t));var n=u.default.capitalize(e),i=new CustomEvent("onAdd"+n,{detail:r});m.default.add[e](r),document.dispatchEvent(i)}}}]}},e.prototype.fieldEdit=function(){var e=this,t=[],o=["object","array"],r=["config","meta","action"],n=s.formData.fields.get(e.fieldID),i=Object.keys(n).filter(function(e){return!u.default.inArray(e,r)}),a={tag:"div",className:["field-edit","slide-toggle","panels-wrap"]};u.default.forEach(i,function(r){var i=h.default.contentType(n[r]);if(u.default.inArray(i,o)){var a={tag:"div",attrs:{className:"f-panel "+r+"-panel"},config:{label:l.default.get("panelLabels."+r)||""},content:[e.editPanel(r),e.panelEditButtons(r)],action:{}};t.push(a)}});var d={panels:t,id:e.fieldID};if(t.length){var f=e.panels=new v.default(d);a.className.push("panel-count-"+t.length),a.content=f.content,e.panelNav=f.nav,e.resizePanelWrap=f.actions.resize}else setTimeout(function(){var t=h.default.fields.get(e.fieldID).field,o=t.querySelector(".item-edit-toggle"),r=t.querySelector(".field-actions"),n=r.getElementsByTagName("button");r.style.maxWidth=24*n.length+"px",h.default.remove(o)},0);return a},e.prototype.fieldPreview=function(){var e=this,t=(0,y.clone)(s.formData.fields.get(e.fieldID)),o=h.default.fields.get(e.fieldID).field,r=function(e){var t=o.parentElement;if("true"===e.target.contentEditable)if(u.default.inArray(e.type,["focus","blur"])){var r=document.activeElement===e.target;t.classList.toggle("editing-field-preview",r),h.default.toggleSortable(o.parentElement,"focus"===e.type)}else u.default.inArray(e.type,["mousedown","mouseup"])&&h.default.toggleSortable(o.parentElement,"mousedown"===e.type)};return t.id="prev-"+e.fieldID,{tag:"div",attrs:{className:"field-preview"},content:h.default.create(t,!0),action:{focus:r,blur:r,mousedown:r,mouseup:r,change:function(t){var o=t.target;if(o.fMap){var r=s.formData.fields.get(e.fieldID),n=o.checked,i=o.type,a=o.fMap;if(u.default.inArray(i,["checkbox","radio"])){var l=r.options;"radio"===i&&l.forEach(function(e){return e.selected=!1}),u.default.set(r,a,n),s.data.save()}}},click:function(e){"true"===e.target.contentEditable&&e.preventDefault()},input:function(t){var o=s.formData.fields.get(e.fieldID),r="content";t.target.fMap&&(r=t.target.fMap),"true"===t.target.contentEditable?u.default.set(o,r,t.target.innerHTML):u.default.set(o,r,t.target.value),s.data.save("field",e.fieldID)}}}},e}();t.default=w},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var o,r=0;r<t.length;r++)o=t[r],o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),a=o(4),l=r(a),s=o(6),d=r(s),f=o(0),c=r(f),u=o(1),p=r(u),m=o(2),g=o(3),h=function(){function e(t){n(this,e);var o,r,i=this,a=i.rowID=t||(0,g.uuid)();o={columns:[],id:i.rowID,config:{fieldset:!1,legend:"",inputGroup:!1},attrs:{className:"f-row"}};var s=m.formData.rows.get(a);m.formData.rows.set(a,p.default.merge(o,s)),r={tag:"li",className:"stage-rows empty-rows",dataset:{hoverTag:l.default.get("row"),editingHoverTag:l.default.get("editing.row")},id:a,content:[c.default.actionButtons(a,"row"),i.editWindow],fType:"rows"},r=c.default.create(r);var f=d.default.create(r,{animation:150,fallbackClass:"column-moving",forceFallback:!0,group:{name:"rows",pull:!0,put:["rows","controls","columns"]},sort:!0,onRemove:i.onRemove,onEnd:i.onEnd,onAdd:i.onAdd,onSort:i.onSort,draggable:".stage-columns",filter:".resize-x-handle"});return c.default.rows.set(a,{row:r,sortable:f}),r}return e.prototype.onSort=function(e){m.data.saveColumnOrder(e.target),m.data.save()},e.prototype.onRemove=function(e){c.default.columnWidths(e.from),m.data.saveColumnOrder(e.target),c.default.emptyClass(e.from)},e.prototype.onEnd=function(e){e.from.classList.contains("empty-rows")&&c.default.removeEmpty(e.from),m.data.save()},e.prototype.onAdd=function(e){var t,o=e.from,r=e.item,n=e.to,i="rows"===o.fType,a="columns"===o.fType,l="controlGroup"===o.fType;if(i)t=r;else if(a||l){var s=p.default.get(m.registeredFields[r.id],"meta");"layout"===s.group?"layout-column"===s.id&&c.default.addColumn(n.id):(t=c.default.addColumn(n.id),c.default.addField(t.id,r.id))}(a||l)&&c.default.remove(r),m.data.saveColumnOrder(n),c.default.columnWidths(n),c.default.emptyClass(n),m.data.save()},i(e,[{key:"editWindow",get:function(){var e=this,t=m.formData.rows.get(e.rowID),o={tag:"div",className:"row-edit group-config"},r={tag:"label",content:l.default.get("row.settings.fieldsetWrap")},n={tag:"input",id:e.rowID+"-fieldset",attrs:{type:"checkbox",checked:t.config.fieldset,ariaLabel:l.default.get("row.settings.fieldsetWrap.aria")},action:{click:function(e){t.config.fieldset=e.target.checked,m.data.save()}}},i={tag:"input",id:e.rowID+"-inputGroup",attrs:{type:"checkbox",checked:t.config.inputGroup,ariaLabel:l.default.get("row.settings.inputGroup.aria")},action:{click:function(e){t.config.inputGroup=e.target.checked,m.data.save()}},config:{label:l.default.get("row.makeInputGroup"),description:l.default.get("row.makeInputGroupDesc")}},a={tag:"input",attrs:{type:"text",ariaLabel:"Legend for fieldset",value:t.config.legend,placeholder:"Legend"},action:{input:function(e){t.config.legend=e.target.value,m.data.save()}},className:""},s=[r,{tag:"div",className:"input-group",content:[{tag:"span",className:"input-group-addon",content:n},a]}];s=c.default.formGroup(s);var d=Object.assign({},r,{content:"Define column widths"}),f=Object.assign({},r,{content:"Layout Preset",className:"col-sm-4 form-control-label"}),u={tag:"div",className:"col-sm-8",content:c.default.columnPresetControl(e.rowID)},p=c.default.formGroup([f,u],"row");return o.content=[i,c.default.create("hr"),s,c.default.create("hr"),d,p],o}}]),e}();t.default=h},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var o,r=0;r<t.length;r++)o=t[r],o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),a=o(6),l=r(a),s=o(4),d=r(s),f=o(2),c=o(1),u=r(c),p=o(0),m=r(p),g=o(3),h={},b=function(){function e(t,o){n(this,e),this.stageID=o||(0,g.uuid)();var r={formSettings:[{tag:"input",id:"form-title",attrs:{className:"form-title",placeholder:d.default.get("Untitled Form"),value:d.default.get("Untitled Form"),type:"text"},config:{label:d.default.get("Form Title")}},{tag:"input",id:"form-novalidate",attrs:{className:"form-novalidate",value:!1,type:"checkbox"},config:{label:d.default.get("Form novalidate")}},{tag:"input",id:"form-tags",attrs:{className:"form-tags",type:"text"},config:{label:d.default.get("Tags")}}]};if(h=Object.assign(h,r,t),!f.formData.stages.get(this.stageID)){var i={id:this.stageID,settings:{},rows:[]};f.formData.stages.set(this.stageID,i)}return this.loadStage()}return e.prototype.loadStage=function(){var e=this,t=this.dom,o=l.default.create(t.firstChild,{animation:150,fallbackClass:"row-moving",forceFallback:!0,fallbackTolerance:0,group:{name:"stages",pull:!0,put:["controls","rows","columns"]},onAdd:e.onAdd.bind(e),onRemove:e.onRemove.bind(e),sort:!0,onStart:function(){m.default.activeStage=e.stage},onUpdate:function(){f.data.saveRowOrder(),f.data.save()},onSort:e.onSort,draggable:".stage-rows",handle:".item-handle"});return m.default.stages.set(this.stageID,{stage:this.stage,sortable:o}),m.default.activeStage=this.stage,f.formData.stages.get(this.stageID).rows.length&&m.default.loadRows(this.stage),t},e.prototype.elementConfigs=function(){var e=this,t={stage:{tag:"ul",attrs:{className:["stage","empty-stages"],id:e.stageID},fType:"stages"},settings:{tag:"div",attrs:{className:"formeo-settings",id:e.stageID+"-settings"},fType:"settings"}};return t.settings.content=h.formSettings.slice(),t},e.prototype.onSort=function(){f.data.save()},e.prototype.onAdd=function(e){var t=this;m.default.activeStage=t.stage;var o,r=e.from,n=e.item,i=e.to,a=u.default.indexOfNode(n,i),l="stages"===r.fType?n:m.default.addRow(),s="columns"===r.fType,d="rows"===r.fType;if("controlGroup"===r.fType){var c=f.registeredFields[n.id].meta;"layout"===c.group?"layout-column"===c.id&&m.default.addColumn(l.id):(o=m.default.addColumn(l.id),m.default.addField(o.id,n.id)),m.default.remove(n)}else if(s){var p=m.default.addColumn(l.id);p.appendChild(n),f.data.saveFieldOrder(p),m.default.emptyClass(p)}else d&&(l.appendChild(n),f.data.saveColumnOrder(l),m.default.emptyClass(l));return i.insertBefore(l,i.children[a]),m.default.columnWidths(l),f.data.saveRowOrder(i),f.data.save()},e.prototype.onRemove=function(){return f.data.save()},i(e,[{key:"dom",get:function(){if(this.stage)return this.stage;var e=this.elementConfigs(),t=m.default.create({tag:"div",attrs:{className:"stage-wrap"},content:[e.stage,e.settings]});return this.stage=t.firstChild,t}}]),e}();t.default=b},function(e,t,o){t=e.exports=o(18)(),t.push([e.i,'@keyframes PLACEHOLDER{0%{height:1px}to{height:15px}}@keyframes DRAG_GHOST{0%{box-shadow:0 0 0 0 #999}to{box-shadow:0 0 30px 0 #999}}@keyframes EDIT_PULSE{0%,to{border-color:#66afe9}50%{border-color:#bfdef6}}.formeo .f-input-group,.formeo.formeo-editor .stage-rows{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:stretch;align-items:stretch}.formeo .f-addon,.formeo input,.formeo select,.formeo textarea{font-size:100%;font-family:inherit;height:2.1em;line-height:1.5;margin:0;border:1px solid #ccc;border-radius:3px;background-color:#fff;width:100%;padding:.3em .6em;box-sizing:border-box}.formeo .f-addon:focus,.formeo input:focus,.formeo select:focus,.formeo textarea:focus{border:1px solid #66afe9;outline:none}.formeo.formeo-editor .field-edit-group,.formeo.formeo-editor .formeo-controls ul,.formeo.formeo-editor .panels-wrap ul,.formeo.formeo-editor .stage-columns,.formeo.formeo-editor .stage-wrap .stage{margin:0;padding:0;list-style:none}.formeo input[type=checkbox],.formeo input[type=radio]{opacity:0;width:0;position:absolute;display:inline-block;height:auto}.formeo input[type=checkbox]+.checkable,.formeo input[type=radio]+.checkable{padding-left:1.5em;cursor:pointer;position:relative}.formeo input[type=checkbox]+.checkable:after,.formeo input[type=checkbox]+.checkable:before,.formeo input[type=radio]+.checkable:after,.formeo input[type=radio]+.checkable:before{content:"";position:absolute;display:inline-block;left:0;top:50%;transform:translateY(-50%);font-size:1em;line-height:1em;color:transparent;font-family:sans;text-align:center;width:1em;height:1em;border-radius:2px}.formeo input[type=checkbox]+.checkable:before,.formeo input[type=radio]+.checkable:before{background:#fff;border:1px solid #666}.formeo input[type=checkbox]:focus+.checkable:before,.formeo input[type=radio]:focus+.checkable:before{border:1px solid #66afe9}.formeo input[type=checkbox]+.checkable:after,.formeo input[type=radio]+.checkable:after{content:"\\2714";background:none;visibility:hidden;opacity:0;font-size:1.15em;color:#000}.formeo input[type=checkbox]:checked+.checkable:after,.formeo input[type=radio]:checked+.checkable:after{color:#666;background:none;visibility:visible;opacity:1}.formeo.formeo-editor .stage-columns:before,.formeo.formeo-editor .stage-fields:before,.formeo.formeo-editor .stage-rows:before{font-size:12px;position:absolute;top:0;width:0;padding:0;height:22px;line-height:24px;text-align:center;overflow:hidden;z-index:100;transition-property:width;transition-duration:.15s;content:attr(data-hover-tag);background-color:#fff}.field-control,.formeo.formeo-editor .formeo-controls .field-control{cursor:move;list-style:none;margin:-1px 0 0;border:1px solid #ccc;text-align:left;background:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.control-moving.field-control,.formeo.formeo-editor .formeo-controls .control-moving.field-control{border-radius:6px;animation:DRAG_GHOST .5s forwards}.field-control:before,.formeo.formeo-editor .formeo-controls .field-control:before{margin-right:10px;font-size:16px}.field-control:hover,.formeo.formeo-editor .formeo-controls .field-control:hover{background-color:#f2f2f2}.field-control button,.formeo.formeo-editor .formeo-controls .field-control button{box-sizing:border-box;font-size:1em;line-height:1.8em;display:block;height:100%;width:100%;background:transparent;border:0 none;text-align:left;padding:10px;border-radius:0}.field-control button:focus,.formeo.formeo-editor .formeo-controls .field-control button:focus{outline:0 none;background-color:#f2f2f2;box-shadow:inset 0 0 0 1px #66afe9;border-radius:0!important}.field-control button:active,.formeo.formeo-editor .formeo-controls .field-control button:active{transform:none}.field-control button:hover,.formeo.formeo-editor .formeo-controls .field-control button:hover{filter:none}.field-control .glyphicon,.field-control svg,.formeo.formeo-editor .formeo-controls .field-control .glyphicon,.formeo.formeo-editor .formeo-controls .field-control svg{float:left;margin-right:10px}.field-control .glyphicon,.formeo.formeo-editor .formeo-controls .field-control .glyphicon{display:inline-block;text-align:center;width:24px;height:24px;line-height:20px}.formeo.formeo-editor .formeo-controls [dir=rtl] .field-control button,[dir=rtl] .field-control button,[dir=rtl] .formeo.formeo-editor .formeo-controls .field-control button{text-align:right!important}.formeo.formeo-editor .formeo-controls [dir=rtl] .field-control svg,[dir=rtl] .field-control svg,[dir=rtl] .formeo.formeo-editor .formeo-controls .field-control svg{float:right!important;margin:0 0 0 10px!important}.formeo button{border-radius:3px;border:1px solid #666;color:#333;background-color:#fff;padding:.5em 1em}.formeo button:active{transform:scale(.97)}.formeo button:hover{filter:brightness(.9)}.svg-icon{display:inline-block;width:24px;height:24px;pointer-events:none}.icon-remove:hover{fill:#d9534f}button[class*=-remove]:hover{background-color:#d9534f!important}button[class*=-remove]:hover .svg-icon{fill:#fff}button[class*=-clone]:hover{background-color:#93c54b!important}button[class*=-clone]:hover .svg-icon{fill:#fff}.item-edit-toggle:hover{background-color:#325d88!important}.item-edit-toggle:hover .svg-icon{fill:#fff}.formeo *{box-sizing:inherit}.formeo .pill-buttons>button{border-radius:50px}.formeo hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid #ccc}.formeo .f-field-group{-ms-flex-wrap:wrap;flex-wrap:wrap}.formeo .f-field-group label+.badge{margin-left:10px}.formeo .f-field-group>label{display:inline-block;margin-bottom:10px}.formeo .f-field-group button{margin-right:5px}.formeo input[type=date]{max-width:280px;display:block}.formeo input[type=radio]+.checkable:before{border-radius:2em}.formeo input[type=radio]:checked+.checkable:after{content:"";background:#666;transform:scale(.5) translateY(-100%);border-radius:50%}.formeo textarea{height:auto}.formeo button{line-height:1.5em}.formeo button.error,.formeo button.primary,.formeo button.success,.formeo button.warning{color:#fff}.formeo button.primary{background-color:#325d88;border-color:#244463}.formeo button.success{background-color:#93c54b;border-color:#79a736}.formeo button.warning{background-color:#f47c3c;border-color:#ef5c0e}.formeo button.error{background-color:#d9534f;border-color:#c9302c}.formeo button[disabled]{background-color:#ccc;color:#fff}.formeo button:focus{border:1px solid #66afe9}.formeo button:focus,.formeo button:hover{outline:0 none}.formeo .f-addon{width:auto}.formeo .f-addon label{margin:1px 0 0 3px}.formeo .f-addon:last-child{margin-left:-1px}.formeo .f-btn-group{display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}.formeo .f-btn-group>button{-ms-flex:0 1 auto;flex:0 1 auto}.formeo .f-btn-group>button:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.formeo .f-btn-group>button:last-child:not(:first-child):not(.dropdown-toggle){border-bottom-left-radius:0;border-top-left-radius:0}.formeo .f-btn-group>button:first-child{margin-left:0}.formeo .f-btn-group>button:first-child:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-top-right-radius:0}.formeo .f-btn-group .f-btn-group+.f-btn-group,.formeo .f-btn-group .f-btn-group+button,.formeo .f-btn-group .f-btn-group-vertical .f-btn-group+.f-btn-group,.formeo .f-btn-group .f-btn-group-vertical .f-btn-group+button,.formeo .f-btn-group .f-btn-group-vertical button+.f-btn-group,.formeo .f-btn-group .f-btn-group-vertical button+button,.formeo .f-btn-group button+.f-btn-group,.formeo .f-btn-group button+button{margin-left:-1px}.formeo .f-checkbox,.formeo .f-radio{margin-bottom:5px}.formeo .f-input-group{display:-ms-inline-flexbox;display:inline-flex;vertical-align:bottom}.formeo .f-input-group input+input,.formeo .f-input-group input+select,.formeo .f-input-group select+select{margin-left:-1px}.formeo .f-input-group select{-webkit-appearance:none;background-image:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyNCIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDMyIj4KPHBhdGggZmlsbD0iIzQ0NCIgZD0iTTAgMTJsMTEuOTkyIDExLjk5MiAxMS45OTItMTEuOTkyaC0yMy45ODR6Ij48L3BhdGg+Cjwvc3ZnPgo=");background-position:right 10px top 2px;background-repeat:no-repeat;background-size:16px}.formeo .f-input-group .f-addon,.formeo .f-input-group input,.formeo .f-input-group select{-ms-flex:0 1 auto;flex:0 1 auto;border-radius:0}.formeo .f-input-group .f-addon:last-child,.formeo .f-input-group input:last-child,.formeo .f-input-group select:last-child{border-right-width:1px;border-radius:0 3px 3px 0}.formeo .f-input-group .f-addon:first-child,.formeo .f-input-group input:first-child,.formeo .f-input-group select:first-child{border-radius:3px 0 0 3px;border-left-width:1px}.formeo .f-input-group .f-addon:focus+input,.formeo .f-input-group .f-addon:focus+select,.formeo .f-input-group input:focus+input,.formeo .f-input-group input:focus+select,.formeo .f-input-group select:focus+input,.formeo .f-input-group select:focus+select{border-left:1px solid #66afe9}.formeo .text-primary{color:#325d88}.formeo .text-success{color:#93c54b}.formeo .text-warning{color:#f47c3c}.formeo .text-error{color:#d9534f}.formeo:after{content:"";display:table;clear:both}.formeo.formeo-editor .group-actions{min-width:24px;width:24px;height:24px;overflow:hidden;position:absolute;top:0;line-height:0;z-index:1}.formeo.formeo-editor .group-actions button{width:24px;height:24px;padding:6px;border:0 none;line-height:0;overflow:hidden;background-color:#fff}.formeo.formeo-editor .group-actions button:focus{border:0 none;outline:0 none;box-shadow:none}.formeo.formeo-editor .group-actions .svg-icon{width:12px;height:12px}.formeo.formeo-editor .group-actions .icon-handle{opacity:.5}.last-field .formeo.formeo-editor .group-actions button:last-child{border-radius:0}.formeo.formeo-editor .column-editing-field .column-actions,.formeo.formeo-editor .group-actions .icon-copy,.formeo.formeo-editor .group-actions .icon-menu,.formeo.formeo-editor .group-actions .icon-move,.formeo.formeo-editor .group-actions .icon-move-vertical{display:none}.formeo.formeo-editor .stage-fields.editing-field .field-actions,.formeo.formeo-editor .stage-fields.hovering-field .field-actions{box-shadow:-1px 1px 1px #ccc;border-color:#93c54b;border-width:1px 1px 0 0;border-style:solid}.formeo.formeo-editor .hovering-column .field-actions,.formeo.formeo-editor .hovering-row .field-actions{display:none}.formeo.formeo-editor .hovering-column .row-actions,.formeo.formeo-editor .hovering-row .row-actions{z-index:10}.formeo.formeo-editor .field-actions{right:0;text-align:right;transition:width .15s;border-bottom-left-radius:3px;border-bottom-right-radius:0;will-change:width}.formeo.formeo-editor .field-actions button{border-radius:0;position:absolute}.formeo.formeo-editor .field-actions button:first-of-type{right:0}.formeo.formeo-editor .field-actions button:nth-of-type(2){right:24px}.formeo.formeo-editor .field-actions button:nth-of-type(3){right:48px}.formeo.formeo-editor .field-actions button:nth-of-type(4){right:72px}.formeo.formeo-editor .field-actions button:nth-of-type(5){right:96px}.formeo.formeo-editor .field-actions button:nth-of-type(6){right:120px}.formeo.formeo-editor .field-actions button:first-child{right:0}.formeo.formeo-editor .group-config{display:none;padding:.5rem}.formeo.formeo-editor .editing-row .column-actions{display:none}.formeo.formeo-editor .column-actions{width:24px;height:24px;padding:0;right:50%;transform:translateX(12px);z-index:1;transition:width .15s}.formeo.formeo-editor .column-actions .action-btn-wrap{position:relative;white-space:nowrap}.formeo.formeo-editor .column-actions button{position:absolute;background-color:transparent;border-radius:0}.formeo.formeo-editor .column-actions button:first-of-type{right:0}.formeo.formeo-editor .column-actions button:nth-of-type(2){right:24px}.formeo.formeo-editor .column-actions button:nth-of-type(3){right:48px}.formeo.formeo-editor .column-actions button:nth-of-type(4){right:72px}.formeo.formeo-editor .column-actions button:nth-of-type(5){right:96px}.formeo.formeo-editor .column-actions button:nth-of-type(6){right:120px}.formeo.formeo-editor .column-actions button:first-child{border-bottom-right-radius:0;right:0}.hovering-column .formeo.formeo-editor .column-actions button:first-child{border-bottom-right-radius:0;border-bottom-left-radius:0}.hovering-column .formeo.formeo-editor .column-actions button:last-child{border-bottom-left-radius:3px}.formeo.formeo-editor .editing-column .column-actions,.formeo.formeo-editor .hovering-column .column-actions{transform:translateX(50%);width:auto;border-bottom-right-radius:0;border-bottom-left-radius:3px}.formeo.formeo-editor .editing-column .column-actions button:first-child,.formeo.formeo-editor .hovering-column .column-actions button:first-child{border-bottom-right-radius:3px;right:0}.formeo.formeo-editor .editing-column .column-actions button:last-child,.formeo.formeo-editor .hovering-column .column-actions button:last-child{border-bottom-left-radius:3px}.formeo.formeo-editor .row-actions{width:24px;height:24px;left:-23px;text-align:right;border-top-left-radius:6px;border-bottom-left-radius:6px;transition:height .15s ease-in-out;white-space:normal;border:1px solid #ccc;border-right:1px solid #fff}.formeo.formeo-editor .row-actions .item-handle .icon-handle{transform:rotate(90deg)}.formeo.formeo-editor .row-actions button{border-radius:0}.formeo.formeo-editor .editing-row .row-actions,.formeo.formeo-editor .hovering-row .row-actions{border:1px solid #325d88}.formeo.formeo-editor .editing-row .row-actions button:first-child,.formeo.formeo-editor .hovering-row .row-actions button:first-child{border-bottom-left-radius:0}.formeo.formeo-editor [class*=hovering-]>.group-actions .svg-icon.icon-copy,.formeo.formeo-editor [class*=hovering-]>.group-actions .svg-icon.icon-menu,.formeo.formeo-editor [class*=hovering-]>.group-actions .svg-icon.icon-move,.formeo.formeo-editor [class*=hovering-]>.group-actions .svg-icon.icon-move-vertical{display:inline-block!important}.formeo.formeo-editor [class*=hovering-]>.group-actions .svg-icon.icon-handle{display:none!important}.formeo.formeo-editor .stage-rows{transition:background-color 125ms ease-in-out;position:relative;clear:both;margin-left:0;margin-bottom:6px;background-color:#fff;padding:5px;min-height:34px;box-shadow:inset 0 0 0 1px #ccc}.formeo.formeo-editor .stage-rows:after{content:"";display:table}.formeo.formeo-editor .stage-rows:before{border-bottom-right-radius:6px;border:1px solid #325d88;border-width:1px 0;left:0}.formeo.formeo-editor .stage-rows:after{clear:both}.formeo.formeo-editor .stage-rows.control-ghost{padding:10px}.formeo.formeo-editor .stage-rows:first-child{border-top-right-radius:5px;border-top-left-radius:0}.formeo.formeo-editor .stage-rows:last-child{border-bottom-right-radius:5px;border-bottom-left-radius:5px}.formeo.formeo-editor .stage-rows.hovering-row:first-child{border-top-left-radius:0}.formeo.formeo-editor .stage-rows.hovering-row:before{width:100px}.formeo.formeo-editor .stage-rows.hovering-row .stage-columns{opacity:.5}.formeo.formeo-editor .stage-rows.editing-row,.formeo.formeo-editor .stage-rows.editing-row .row-edit{display:block}.formeo.formeo-editor .stage-rows.resizing-columns .stage-columns{transition:none}.formeo.formeo-editor .stage-rows.editing-row.hovering-row .stage-columns{opacity:1}.formeo.formeo-editor .stage-rows.editing-row{box-shadow:inset 0 0 0 1px #325d88}.formeo.formeo-editor .stage-rows.editing-row:before{border-width:1px 0 0;width:80px!important;content:attr(data-editing-hover-tag)}.formeo.formeo-editor .stage-rows.hovering-row{box-shadow:inset 0 0 0 1px #325d88}.formeo.formeo-editor .stage-rows.hovering-row.editing-row:before{border-right-width:0}.formeo.formeo-editor .stage-rows.hovering-row:before{box-shadow:1px 1px 1px #ccc;border-right-width:1px;width:80px!important}.formeo.formeo-editor .stage-rows.row-moving{box-shadow:inset 0 0 0 1px #325d88,0 0 30px 0 #999}.formeo.formeo-editor .stage-rows.empty-rows:after{left:0;transform:translate(10px,-50%)}.formeo.formeo-editor .stage-rows .layout-row-control{display:none}.formeo.formeo-editor .row-edit{padding-top:2rem}.formeo.formeo-editor .input-group-addon label{margin-bottom:0}.formeo.formeo-editor .stage-columns{transition:background-color 125ms ease-in-out,box-shadow 125ms,width .25s;position:relative;background-color:#fff;max-width:none;-ms-flex-direction:column;flex-direction:column;-ms-flex:auto;flex:auto;will-change:width}.formeo.formeo-editor .stage-columns[class*=col-]{padding:0}.formeo.formeo-editor .stage-columns:first-of-type{border-top-right-radius:5px}.formeo.formeo-editor .stage-columns:last-of-type{border-bottom-right-radius:5px;border-bottom-left-radius:5px}.formeo.formeo-editor .stage-columns:last-of-type .resize-x-handle{display:none!important}.formeo.formeo-editor .stage-columns .resize-x-handle{display:none;position:absolute;right:-8px;top:0;bottom:0;width:16px;z-index:2;cursor:ew-resize}.formeo.formeo-editor .stage-columns .resize-x-handle:before{width:0;right:6px;border:1px dashed #29abe0;border-width:0 2px;display:block;top:0;position:absolute;height:100%;content:""}.formeo.formeo-editor .stage-columns .resize-x-handle svg{fill:#29abe0;position:absolute;right:1px;width:14px}.formeo.formeo-editor .stage-columns .resize-x-handle svg.icon-triangle-down{top:-14px}.formeo.formeo-editor .stage-columns .resize-x-handle svg.icon-triangle-up{bottom:-14px}.formeo.formeo-editor .stage-columns:before{transition-property:height;transition-duration:.15s;padding:0 10px;left:50%;top:1px;transform:translate(-50%,-100%);width:auto;height:0;border-top-left-radius:5px;border-top-right-radius:5px}.formeo.formeo-editor .stage-columns.hovering-column:first-child{border-top-left-radius:0}.formeo.formeo-editor .stage-columns.hovering-column .stage-fields{opacity:.5}.formeo.formeo-editor .stage-columns.hovering-column:after{opacity:0}.formeo.formeo-editor .stage-columns.editing-column,.formeo.formeo-editor .stage-columns.hovering-column{box-shadow:inset 0 0 0 1px #29abe0}.formeo.formeo-editor .stage-columns.editing-column:before,.formeo.formeo-editor .stage-columns.hovering-column:before{height:23px;border-right:1px solid #29abe0;border-left:1px solid #29abe0;border-top:1px solid #29abe0}.formeo.formeo-editor .stage-columns.column-moving{box-shadow:inset 0 0 0 1px #29abe0,0 0 30px 0 #999}.formeo.formeo-editor .stage-columns.editing-column{overflow:hidden}.formeo.formeo-editor .stage-columns.editing-column .column-edit{display:block}.formeo.formeo-editor .editing-row .empty-columns,.formeo.formeo-editor .editing-row .stage-columns{display:table-cell;border-radius:5px;height:60px;background-color:#e6e6e6}.formeo.formeo-editor .editing-row .empty-columns.empty-columns,.formeo.formeo-editor .editing-row .stage-columns.empty-columns{min-height:0}.formeo.formeo-editor .editing-row .empty-columns .stage-fields,.formeo.formeo-editor .editing-row .stage-columns .stage-fields{display:none}.formeo.formeo-editor .editing-row .empty-columns .resize-x-handle,.formeo.formeo-editor .editing-row .stage-columns .resize-x-handle{display:block}.formeo.formeo-editor .editing-row .empty-columns:after,.formeo.formeo-editor .editing-row .stage-columns:after{color:#333!important;line-height:1em;opacity:1;font-size:1.1em;content:attr(data-col-width)!important;display:block;width:100%;text-align:center;position:absolute;left:50%;margin-top:0;top:50%;transform:translate(-50%,-50%)}.formeo.formeo-editor .editing-field-preview .column-actions{display:none}.formeo.formeo-editor .stage-fields{min-height:26px;position:relative;padding:5px;transition:background-color 125ms ease-in-out}.formeo.formeo-editor .stage-fields.first-field,.formeo.formeo-editor .stage-fields.first-field .field-actions{border-top-right-radius:3px}.formeo.formeo-editor .stage-fields.last-field{border-bottom-right-radius:3px;border-bottom-left-radius:3px}.formeo.formeo-editor .stage-fields [contenteditable]{padding:1px 1px 0;transition:border-color .25s;border-bottom:1px dashed #ccc;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.formeo.formeo-editor .stage-fields [contenteditable]:focus{border:1px solid #66afe9;outline:none;padding:0}.formeo.formeo-editor .stage-fields .form-check{margin-left:1.25em}.formeo.formeo-editor .stage-fields .form-check-input:only-child{position:absolute}.formeo.formeo-editor .stage-fields:before{display:none;position:absolute;top:0;padding:0 10px;right:0;transform:translateX(-72px);border-bottom-right-radius:0;border-bottom-left-radius:6px}.formeo.formeo-editor .stage-fields.editing-field,.formeo.formeo-editor .stage-fields.hovering-field{box-shadow:inset 0 0 0 1px #93c54b}.formeo.formeo-editor .stage-fields.editing-field:before,.formeo.formeo-editor .stage-fields.hovering-field:before{line-height:23px!important;border-left:1px solid #93c54b;border-bottom:1px solid #93c54b}.formeo.formeo-editor .stage-fields.field-moving{box-shadow:inset 0 0 0 1px #93c54b,0 0 30px 0 #999;background-color:#fff}.formeo.formeo-editor .stage-fields.editing-field{background-color:#e6e6e6;z-index:1}.formeo.formeo-editor .stage-fields.field-type-hidden{border:1px dashed #ccc}.formeo.formeo-editor .editing-field-preview .field-actions{display:none}.formeo.formeo-editor .field-preview p{white-space:normal}.formeo.formeo-editor .field-edit{margin-top:23px;display:none;overflow:hidden}.formeo.formeo-editor .field-edit label{font-size:.85em}.formeo.formeo-editor .field-edit .panel-nav{margin-bottom:0;padding:0;overflow:hidden}.formeo.formeo-editor .field-edit.field-edit-options{list-style:decimal}.formeo.formeo-editor .field-edit .prop-controls{width:28px;height:28px;text-align:right;position:absolute;right:0;bottom:0;overflow:hidden;white-space:nowrap}.formeo.formeo-editor .field-edit .prop-controls .svg-icon{width:14px;height:14px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.formeo.formeo-editor .field-edit .prop-controls:hover .prop-control:first-child{border-radius:0 3px 3px 0}.formeo.formeo-editor .field-edit .prop-controls:hover .prop-control:last-child{display:inline-block}.formeo.formeo-editor .field-edit .prop-control{width:28px;height:28px;right:0;bottom:0;position:absolute;padding:0}.formeo.formeo-editor .field-edit .prop-control:first-of-type{right:0}.formeo.formeo-editor .field-edit .prop-control:nth-of-type(2){right:28px}.formeo.formeo-editor .field-edit .prop-control:nth-of-type(3){right:56px}.formeo.formeo-editor .field-edit .prop-control:nth-of-type(4){right:84px}.formeo.formeo-editor .field-edit .prop-control:first-child{right:0}:not(.control-count-1) .formeo.formeo-editor .field-edit .prop-control:last-child{border-radius:3px 0 0 3px;margin-right:-1px;display:none}:not(.control-count-1) .formeo.formeo-editor .field-edit .prop-control:first-child{border-radius:3px}.formeo.formeo-editor .field-edit .prop-control:hover:first-child{border-radius:0 3px 3px 0}.formeo.formeo-editor .field-edit .prop-control:hover:first-child:last-child{border-radius:3px}.formeo.formeo-editor .field-edit .prop-control:hover:last-child{display:inline-block}.formeo.formeo-editor .field-edit .prop-control:last-child:first-child{display:inline-block;border-radius:3px;margin-right:0}.formeo.formeo-editor .field-edit .prop-wrap{position:relative;padding-right:31px;margin-bottom:10px;min-height:28px}.formeo.formeo-editor .field-edit .prop-wrap:last-child{margin-bottom:0}.formeo.formeo-editor .field-edit .field-edit-group{padding:10px}.formeo.formeo-editor .field-edit .prop-controls,.formeo.formeo-editor .field-edit .prop-inputs{transition:width .15s;will-change:width}.formeo.formeo-editor .field-edit .prop-controls .f-addon,.formeo.formeo-editor .field-edit .prop-controls input,.formeo.formeo-editor .field-edit .prop-controls select,.formeo.formeo-editor .field-edit .prop-controls textarea,.formeo.formeo-editor .field-edit .prop-inputs .f-addon,.formeo.formeo-editor .field-edit .prop-inputs input,.formeo.formeo-editor .field-edit .prop-inputs select,.formeo.formeo-editor .field-edit .prop-inputs textarea{font-size:.825em}.formeo.formeo-editor .field-edit .prop-inputs,.formeo.formeo-editor .field-edit .prop-inputs .f-field-group{width:100%;display:-ms-inline-flexbox;display:inline-flex;vertical-align:bottom}.formeo.formeo-editor .field-edit .prop-inputs .f-field-group{margin-bottom:0}.formeo.formeo-editor .field-edit .prop-inputs .f-checkbox{margin-top:7px;margin-bottom:0}.formeo.formeo-editor .field-edit .prop-inputs label{display:block}.formeo.formeo-editor .field-edit .control-count-2 .prop-controls:hover{width:56px}.formeo.formeo-editor .field-edit .control-count-2 .prop-controls:hover+.prop-inputs{width:calc(100% - 28px)}.formeo.formeo-editor .field-edit.panel-count-1 .panel-nav{border-bottom:1px solid #999}.formeo.formeo-editor .field-edit.panel-count-1 .panel-nav button{display:none}.formeo.formeo-editor .field-edit.panel-count-1 .panel-labels{background-color:transparent}.formeo.formeo-editor .options-panel .prop-wrap{margin-bottom:10px}.formeo.formeo-editor .options-panel .input-group-addon{line-height:0}.formeo.formeo-editor .options-panel .prop-labels{padding:10px 34px 10px 10px}.formeo.formeo-editor .options-panel .prop-labels .input-group-addon{font-size:12px}.formeo.formeo-editor .options-panel .prop-labels label{font-size:12px;width:50%;position:relative;display:table-cell}.formeo.formeo-editor .options-panel .prop-label-disabled,.formeo.formeo-editor .options-panel .prop-label-selected{width:1%!important;white-space:nowrap;vertical-align:middle;border:0 none;background-color:transparent}.formeo.formeo-editor .panel-action-buttons{padding:0 10px 10px}.formeo.formeo-editor .panel-action-buttons:after{content:"";display:table;clear:both}.formeo.formeo-editor .panel-action-buttons [class^=add-]{float:right}.formeo.formeo-editor .panels-wrap h5{margin:0;padding:.55em 0;color:#666;font-weight:400;display:inline-block;width:100%}.formeo.formeo-editor .panels-wrap nav{position:relative;padding:0;overflow:hidden}.formeo.formeo-editor .panels-wrap nav button{position:absolute;width:24px;color:#000;height:100%;padding:0;line-height:0;z-index:1}.formeo.formeo-editor .panels-wrap nav button:focus{outline:none;border:1px solid #66afe9;box-shadow:none}.formeo.formeo-editor .panels-wrap nav button .svg-icon{width:20px;height:20px}.formeo.formeo-editor .panels-wrap nav button.next-group{right:0;top:0;border-top-left-radius:0;border-bottom-left-radius:0}.formeo.formeo-editor .panels-wrap nav button.prev-group{left:0;top:0;border-top-right-radius:0;border-bottom-right-radius:0}.formeo.formeo-editor .panels-wrap .f-panel{vertical-align:top;display:inline-block;width:100%;-ms-flex-direction:column;flex-direction:column;-ms-flex:1 0 100%;flex:1 0 100%}.formeo.formeo-editor .panels-wrap .f-panel>li:last-child{border-radius:0 0 5px 5px}.formeo.formeo-editor .panels-wrap .panels{white-space:nowrap;transition-property:transform,height;transition-duration:.15s;transition-timing-function:ease-in-out;will-change:transform;-ms-flex-direction:row;flex-direction:row}.formeo.formeo-editor .panels-wrap .panel-labels{height:100%;background:#fff;overflow:hidden;text-align:center}.formeo.formeo-editor .panels-wrap .panel-labels div{transition:transform .15s ease-in-out;will-change:transform;white-space:nowrap}.formeo.formeo-editor .tabbed-panels .panel-nav{height:auto}.formeo.formeo-editor .tabbed-panels .panel-nav button{display:none}.formeo.formeo-editor .tabbed-panels .panels{transition:none}.formeo.formeo-editor .tabbed-panels .f-panel{background-color:#fff}.formeo.formeo-editor .tabbed-panels .panel-labels div{-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex}.formeo.formeo-editor .tabbed-panels .panel-labels h5{-ms-flex-direction:column;flex-direction:column;-ms-flex:1;flex:1;cursor:pointer;background-color:#ccc;box-shadow:inset 0 -1px 6px #999}.formeo.formeo-editor .tabbed-panels .panel-labels h5.active-tab{color:#000;box-shadow:none;background-color:#fff}.formeo.formeo-editor .stage-wrap{position:relative;float:left;width:calc(74% - 5px);box-sizing:border-box;transition:width .25s;margin-right:5px}@media (max-width:481px){.formeo.formeo-editor .stage-wrap{width:calc(100% - 50px)}}.formeo.formeo-editor .stage-wrap .stage{min-height:450px;transition-property:background-color,border-color;transition-duration:.5s,333ms;border:0 dashed transparent;background-color:hsla(0,0%,100%,0);padding-left:23px;padding-bottom:15px;overflow:visible}.formeo.formeo-editor .stage-wrap .stage.empty-stages{border:3px dashed #ccc;background-color:hsla(0,0%,100%,.25)}.formeo.formeo-editor .stage-wrap .stage.removing-all-fields .stage-rows{transition:margin-top .25s ease-in}.formeo.formeo-editor .stage-wrap.editing-stage .formeo-settings{display:block}.formeo.formeo-editor .stage-wrap.editing-stage .stage{display:none}.formeo.formeo-editor .stage-wrap .f-field-group{margin-bottom:0}.formeo.formeo-editor [class*=empty-][class*=editing-]:after{opacity:0}.formeo.formeo-editor [class*=empty-]:after{opacity:1;font-size:24px;position:absolute;top:50%;left:50%;color:#999;transition:opacity .2s ease-in-out;will-change:opacity;text-align:center;transform:translate(-50%,-50%);content:attr(data-hover-tag)}.formeo.formeo-editor .formeo-settings{display:none}.formeo.formeo-editor .formeo-controls{float:right;width:26%;overflow:hidden}.formeo.formeo-editor .formeo-controls.pull-left .form-actions{float:left}.formeo.formeo-editor .formeo-controls .filtered-term{background-color:#fff;text-align:center;border-radius:3px 3px 0 0;border:1px solid #ccc;border-bottom:0 none;width:calc(100% - 2px)}.formeo.formeo-editor .formeo-controls nav{position:relative;padding:0 24px;overflow:hidden}.formeo.formeo-editor .formeo-controls nav h5{font-size:13px;line-height:22px}.formeo.formeo-editor .formeo-controls nav button{position:absolute;width:24px;color:#000;height:calc(100% + 1px);padding:0;line-height:0;margin:0;border-color:#ccc}.formeo.formeo-editor .formeo-controls nav button.next-group{right:0;top:0;border-top-left-radius:0;border-top-right-radius:6px;border-bottom-left-radius:0;border-bottom-right-radius:0}.formeo.formeo-editor .formeo-controls nav button.prev-group{border-top-left-radius:6px;border-bottom-left-radius:0}.formeo.formeo-editor .formeo-controls .panels-wrap{font-size:.85em;line-height:1.8em}.formeo.formeo-editor .formeo-controls .panel-labels{border-top:1px solid #ccc}.formeo.formeo-editor .formeo-controls .panel-count-1{border-bottom-left-radius:0}.formeo.formeo-editor .formeo-controls .panel-count-1 .panel-nav{display:none}.formeo.formeo-editor .formeo-controls .panel-count-1 .control-group li:first-child{border-radius:6px 6px 0 0}.formeo.formeo-editor .formeo-controls .control-group{vertical-align:top;display:inline-block;width:100%;border-top:1px solid #ccc}.formeo.formeo-editor .formeo-controls .control-group>li:first-child{border-top-right-radius:0}.formeo.formeo-editor .formeo-controls .control-group>li:last-child{border-radius:0 0 6px 6px}.formeo.formeo-editor .formeo-controls.filtered .panel-nav{display:none}.formeo.formeo-editor .formeo-controls.filtered .control-group{display:block}.formeo.formeo-editor .formeo-controls.filtered .control-group>li{border-radius:0}.formeo.formeo-editor .formeo-controls.filtered .control-group:last-child>li:last-child{border-radius:0 0 0 3px}.formeo.formeo-editor .formeo-controls .control-groups{white-space:nowrap}.formeo.formeo-editor .formeo-controls .control-group-labels{height:100%;background:#fff;overflow:hidden}.formeo.formeo-editor .formeo-controls .control-group-labels div{white-space:nowrap}.formeo.formeo-editor .formeo-controls .control-group-labels h4{display:inline-block;width:100%}.formeo.formeo-editor .formeo-controls .form-actions{float:right;margin-top:5px}.formeo.formeo-editor .formeo-controls .form-actions .svg-icon{fill:#666;display:none}.formeo.formeo-editor .formeo-controls .form-actions .svg-icon:hover{fill:#000}.formeo.formeo-editor .formeo-controls .form-actions .clear-form:hover,.formeo.formeo-editor .formeo-controls .form-actions .save-form:hover{color:#fff}.formeo.formeo-editor .formeo-controls .form-actions .save-form:hover{background-color:#325d88}.formeo.formeo-editor .formeo-controls .form-actions .clear-form:hover{background-color:#d9534f}@media (max-width:481px){.formeo.formeo-editor .formeo-controls{width:45px}.formeo.formeo-editor .formeo-controls .control-group{text-indent:-9999px}.formeo.formeo-editor .formeo-controls .form-actions{display:inline-block;width:100%;position:relative;vertical-align:middle;float:none;margin-top:10px}.formeo.formeo-editor .formeo-controls .form-actions>button+button{margin-top:-1px;margin-left:0}.formeo.formeo-editor .formeo-controls .form-actions>button{max-width:100%;padding:10px;border-radius:0;line-height:0;width:100%;float:none;position:relative;display:block}.formeo.formeo-editor .formeo-controls .form-actions>button:not(:first-child):not(:last-child){border-radius:0}.formeo.formeo-editor .formeo-controls .form-actions>button:first-child:not(:last-child){border-top-right-radius:3px;border-top-left-radius:3px;border-bottom-right-radius:0;border-bottom-left-radius:0}.formeo.formeo-editor .formeo-controls .form-actions>button:last-child:not(:first-child){border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top-right-radius:0;border-top-left-radius:0}.formeo.formeo-editor .formeo-controls .form-actions .glyphicon,.formeo.formeo-editor .formeo-controls .form-actions .svg-icon{display:inline-block;margin-right:10px}}.formeo.formeo-editor .formeo-controls .field-control .svg-icon{pointer-events:none}.formeo.formeo-editor[dir=rtl] input[type=checkbox]+.checkable:after,.formeo.formeo-editor[dir=rtl] input[type=checkbox]+.checkable:before,.formeo.formeo-editor[dir=rtl] input[type=radio]+.checkable:after,.formeo.formeo-editor[dir=rtl] input[type=radio]+.checkable:before{right:0;left:auto}.formeo.formeo-editor[dir=rtl] .f-btn-group{display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}.formeo.formeo-editor[dir=rtl] .f-btn-group>button{-ms-flex:0 1 auto;flex:0 1 auto}.formeo.formeo-editor[dir=rtl] .f-btn-group>button:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.formeo.formeo-editor[dir=rtl] .f-btn-group>button:last-child:not(:first-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-top-right-radius:0;border-bottom-left-radius:3px;border-top-left-radius:3px}.formeo.formeo-editor[dir=rtl] .f-btn-group>button:first-child{margin-left:0}.formeo.formeo-editor[dir=rtl] .f-btn-group>button:first-child:not(:last-child):not(.dropdown-toggle){border-bottom-left-radius:0;border-top-left-radius:0;border-bottom-right-radius:3px;border-top-right-radius:3px}.formeo.formeo-editor[dir=rtl] .f-btn-group .f-btn-group+.f-btn-group,.formeo.formeo-editor[dir=rtl] .f-btn-group .f-btn-group+button,.formeo.formeo-editor[dir=rtl] .f-btn-group .f-btn-group-vertical .f-btn-group+.f-btn-group,.formeo.formeo-editor[dir=rtl] .f-btn-group .f-btn-group-vertical .f-btn-group+button,.formeo.formeo-editor[dir=rtl] .f-btn-group .f-btn-group-vertical button+.f-btn-group,.formeo.formeo-editor[dir=rtl] .f-btn-group .f-btn-group-vertical button+button,.formeo.formeo-editor[dir=rtl] .f-btn-group button+.f-btn-group,.formeo.formeo-editor[dir=rtl] .f-btn-group button+button{margin-right:-1px}.formeo.formeo-editor[dir=rtl] .formeo-controls,.formeo.formeo-editor[dir=rtl] .formeo-controls .form-actions{float:left}.formeo.formeo-editor[dir=rtl] .stage-wrap{float:right}.formeo.formeo-editor[dir=rtl] .stage-wrap .stage{padding-left:5px;padding-right:23px}.formeo.formeo-editor[dir=rtl] .stage-rows:before{border-bottom-left-radius:6px;border-bottom-right-radius:0;right:0;left:auto}.formeo.formeo-editor[dir=rtl] .stage-rows:first-child{border-top-left-radius:5px;border-top-right-radius:0}.formeo.formeo-editor[dir=rtl] .stage-rows:last-child{border-bottom-left-radius:5px;border-bottom-right-radius:5px}.formeo.formeo-editor[dir=rtl] .stage-rows.hovering-row:first-child{border-top-left-radius:0}.formeo.formeo-editor[dir=rtl] .stage-rows.hovering-row.editing-row:before{border-left-width:0;border-right-width:auto}.formeo.formeo-editor[dir=rtl] .stage-rows.hovering-row:before{border-left-width:1px}.formeo.formeo-editor[dir=rtl] .stage-rows.empty-rows:after{left:0;right:auto}.formeo.formeo-editor[dir=rtl] .row-actions{right:-23px;left:auto;border-top-right-radius:6px;border-bottom-right-radius:6px;border-top-left-radius:0;border-bottom-left-radius:0;border-left:1px solid #fff}.formeo.formeo-editor[dir=rtl] .field-actions{text-align:left;left:0;right:auto;border-bottom-right-radius:3px;border-bottom-left-radius:0}.formeo.formeo-editor[dir=rtl] .field-actions button:first-of-type{left:0;right:auto}.formeo.formeo-editor[dir=rtl] .field-actions button:nth-of-type(2){left:24px;right:auto}.formeo.formeo-editor[dir=rtl] .field-actions button:nth-of-type(3){left:48px;right:auto}.formeo.formeo-editor[dir=rtl] .field-actions button:nth-of-type(4){left:72px;right:auto}.formeo.formeo-editor[dir=rtl] .field-actions button:nth-of-type(5){left:96px;right:auto}.formeo.formeo-editor[dir=rtl] .field-actions button:nth-of-type(6){left:120px;right:auto}.formeo.formeo-editor[dir=rtl] .field-actions button:first-child{left:0}.formeo.formeo-editor[dir=rtl] .stage-fields.editing-field .field-actions,.formeo.formeo-editor[dir=rtl] .stage-fields.hovering-field .field-actions{box-shadow:1px 1px 1px #ccc;border-width:1px 0 0 1px}.formeo.formeo-render .f-row{margin-bottom:1em;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;background-color:transparent;border-radius:6px;transition:background-color .2s}.formeo.formeo-render .f-row.will-remove{background-color:rgba(217,83,79,.5);box-shadow:inset 0 0 3px 1px #d9534f}.formeo.formeo-render .f-input-group-wrap:after{content:"";display:table;clear:both}.formeo.formeo-render .f-input-group{position:relative}.formeo.formeo-render .f-input-group:first-child .remove-input-group{display:none}.formeo.formeo-render .add-input-group{float:right;margin-top:10px}.formeo.formeo-render .remove-input-group{position:absolute;left:-32px;transform:translateY(-50%);width:32px;height:32px;top:50%;border:0 none;background:transparent;outline:0 none;line-height:0}.formeo.formeo-render .remove-input-group:hover .svg-icon{fill:#d9534f}.formeo.formeo-render .remove-input-group .svg-icon{pointer-events:none}.formeo.formeo-render .form-check-input:only-child{position:absolute}.formeo.formeo-render .svg-icon{max-width:100%;max-height:100%}.formeo.formeo-render .f-render-column{padding:0 5px;float:left;display:inline-block;max-width:none;-ms-flex-direction:column;flex-direction:column;-ms-flex:auto;flex:auto}.field-control .svg-icon{pointer-events:none}',""])},function(e){e.exports=function(){var e=[];return e.toString=function(){for(var e,t=[],o=0;o<this.length;o++)e=this[o],e[2]?t.push("@media "+e[2]+"{"+e[1]+"}"):t.push(e[1]);return t.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var r,n={},i=0;i<this.length;i++)"number"==typeof(r=this[i][0])&&(n[r]=!0);for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&n[a[0]]||(o&&!a[2]?a[2]=o:o&&(a[2]="("+a[2]+") and ("+o+")"),e.push(a))}},e}},function(e,t,o){var r=o(17);"string"==typeof r&&(r=[[e.i,r,""]]),o(21)(r,{}),r.locals&&(e.exports=r.locals)},function(e){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(d===setTimeout)return setTimeout(e,0);if((d===t||!d)&&setTimeout)return d=setTimeout,setTimeout(e,0);try{return d(e,0)}catch(t){try{return d.call(null,e,0)}catch(t){return d.call(this,e,0)}}}function n(e){if(f===clearTimeout)return clearTimeout(e);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function i(){m&&u&&(m=!1,u.length?p=u.concat(p):g=-1,p.length&&a())}function a(){if(!m){var e=r(i);m=!0;for(var t=p.length;t;){for(u=p,p=[];++g<t;)u&&u[g].run();g=-1,t=p.length}u=null,m=!1,n(e)}}function l(e,t){this.fun=e,this.array=t}function s(){}var d,f,c=e.exports={};!function(){try{d="function"==typeof setTimeout?setTimeout:t}catch(e){d=t}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var u,p=[],m=!1,g=-1;c.nextTick=function(e){var t=Array(arguments.length-1);if(1<arguments.length)for(var o=1;o<arguments.length;o++)t[o-1]=arguments[o];p.push(new l(e,t)),1!==p.length||m||r(a)},l.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=s,c.addListener=s,c.once=s,c.off=s,c.removeListener=s,c.removeAllListeners=s,c.emit=s,c.binding=function(){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},function(e){function t(e,t){for(var o=0;o<e.length;o++){var r=e[o],n=c[r.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](r.parts[i]);for(;i<r.parts.length;i++)n.parts.push(l(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(l(r.parts[i],t));c[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){for(var t=[],o={},r=0;r<e.length;r++){var n=e[r],i=n[0],a=n[1],l=n[2],s=n[3],d={css:a,media:l,sourceMap:s};o[i]?o[i].parts.push(d):t.push(o[i]={id:i,parts:[d]})}return t}function r(e,t){var o=m(),r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?o.insertBefore(t,r.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");o.appendChild(t)}}function n(e){e.parentNode.removeChild(e);var t=b.indexOf(e);0<=t&&b.splice(t,1)}function i(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function a(e){var t=document.createElement("link");return t.rel="stylesheet",r(e,t),t}function l(e,t){var o,r,l;if(t.singleton){var c=h++;o=g||(g=i(t)),r=s.bind(null,o,c,!1),l=s.bind(null,o,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=a(t),r=f.bind(null,o),l=function(){n(o),o.href&&URL.revokeObjectURL(o.href)}):(o=i(t),r=d.bind(null,o),l=function(){n(o)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else l()}}function s(e,t,o,r){var n=o?"":r.css;if(e.styleSheet)e.styleSheet.cssText=v(t,n);else{var i=document.createTextNode(n),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function d(e,t){var o=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}function f(e,t){var o=t.css,r=t.sourceMap;r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var n=new Blob([o],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(n),i&&URL.revokeObjectURL(i)}var c={},u=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}},p=u(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),m=u(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,h=0,b=[];e.exports=function(e,r){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");r=r||{},void 0===r.singleton&&(r.singleton=p()),void 0===r.insertAt&&(r.insertAt="bottom");var n=o(e);return t(n,r),function(e){for(var i=[],a=0;a<n.length;a++){var l=n[a],s=c[l.id];s.refs--,i.push(s)}if(e){t(o(e),r)}for(var s,a=0;a<i.length;a++)if(s=i[a],0===s.refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete c[s.id]}}};var v=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}()},function(e,t){t=e.exports=function(){for(var e,o="",r=0;32>r;r++)e=0|16*t.random(),4<r&&21>r&&!(r%4)&&(o+="-"),o+=(12===r?4:16===r?8|3&e:e).toString(16);return o};var o=/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;t.isUUID=function(e){return o.test(e)},t.random=function(){return Math.random()}},function(e){
						var t=function(){return this}();
					try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}e.exports=t},function(e,t,o){o(11),e.exports=o(10)}]);