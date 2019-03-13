module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "89fb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ct_option_vue_vue_type_style_index_0_id_1e6d2504_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b739");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ct_option_vue_vue_type_style_index_0_id_1e6d2504_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ct_option_vue_vue_type_style_index_0_id_1e6d2504_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ct_option_vue_vue_type_style_index_0_id_1e6d2504_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a28f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b739":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c1c2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ct_select_vue_vue_type_style_index_0_id_36d156e6_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a28f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ct_select_vue_vue_type_style_index_0_id_36d156e6_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ct_select_vue_vue_type_style_index_0_id_36d156e6_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ct_select_vue_vue_type_style_index_0_id_36d156e6_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"0096c51d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/select-search/src/ct-select.vue?vue&type=template&id=36d156e6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"input-search-box",on:{"click":function($event){$event.stopPropagation();$event.preventDefault();}}},[_c('div',{ref:"searchbox",staticClass:"search-box",style:({width: _vm.width + 'px'}),on:{"click":function($event){_vm.show =!_vm.show; _vm.textValue=''}}},[_c('span',{style:({color: _vm.title ? '#606266' : '#C0C4CC'})},[_vm._v(_vm._s(_vm.title|| _vm.placeholder))]),_c('i',{class:[{'icon':!_vm.show}, {'iconActive': _vm.show}]})]),_c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],ref:"inputbox",staticClass:"input-box",style:({width: _vm.width + 5 + 'px'})},[(_vm.visibleInput)?_c('div',{staticClass:"inputStyle"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.textValue),expression:"textValue"}],ref:"inputblur",attrs:{"spellcheck":"false","type":"input","placeholder":"请输入搜索内容"},domProps:{"value":(_vm.textValue)},on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.searchBtn($event)},"focus":function($event){_vm.isFlag = false;},"input":function($event){if($event.target.composing){ return; }_vm.textValue=$event.target.value}}})]):_vm._e(),_c('div',{staticClass:"data-list-box",style:({ 'height': (_vm.data.length > 10 ? _vm.scrollHeight : (_vm.data.length < 2 ? 160 : _vm.data.length * _vm.hLi)) + 'px' })},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.data.length),expression:"data.length"}],staticClass:"data-scroll"},[_c('ul',{ref:"ulbox",staticClass:"ul-box",style:({ 'height': (_vm.data.length * _vm.hLi) + 'px', 'width': _vm.width + 'px' }),on:{"mouseleave":_vm.leaveUl}},[_vm._t("default")],2),(_vm.data.length > 10)?_c('div',{staticClass:"scroll-box",style:({ 'height': (_vm.data.length > 10 ? _vm.scrollHeight : _vm.data.length * _vm.hLi) + 'px' })},[_c('scroll-into-view',{ref:"scrollInto"})],1):_vm._e()]),(!_vm.data.length)?_c('div',{staticClass:"tiptxt"},[_vm._v("暂无数据")]):_vm._e()])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/select-search/src/ct-select.vue?vue&type=template&id=36d156e6&scoped=true&

// CONCATENATED MODULE: ./packages/select-search/src/scroll-into-view.js
/* harmony default export */ var scroll_into_view = ({
    data() {
        return {
            el: '',
            ulbox: '',
            timer: null,
            isShow: 0,
            li_scrollH: 32, //和外面的li高度一致
            minHeight: 10, //滚动条最小高度
        }
    },
    render(h) {

        const scroll = h(
            'div', {
                ref: 'scroll',
                class: 'scroll',
                style: {
                    width: '60%',
                    background: '#ccc',
                    borderRadius: '4px',
                    position: 'absolute',
                    left: '20%',
                    opacity: this.isShow,
                    transition: 'opacity 0.8s ease-out',
                    '-moz-transition': 'opacity 0.8s ease-out',
                    '-webkit-transition': 'opacity 0.8s ease-out',
                    '-o-transition': 'opacity 0.8s ease-out',
                },
                on: {
                    mousedown: ev => {
                        let e = ev || window.event,
                            scrollH;

                        if (e.preventDefault) {
                            e.preventDefault();
                        } else {
                            e.returnValue = false;
                        }

                        scrollH = ev.clientY - this.el.offsetTop; //计算出滚动条到网页顶部的距离

                        document.onmousemove = ev => {
                            clearTimeout(this.timer);
                            this.isShow = 1;
                            let e = ev || window.event,
                                top = e.clientY - scrollH; //计算拖动后的距离

                            if (top <= 0) { //最上面
                                top = 0;
                            }

                            if (top >= this.$parent.scrollHeight - this.el.scrollHeight) { //移动最下面
                                top = this.$parent.scrollHeight - this.el.scrollHeight;
                            }
                            let scale = top / (this.$parent.scrollHeight - this.el.scrollHeight), //获取一个系数,系数(0到1的过程)
                                cony = scale * (this.ulbox.clientHeight - this.$parent.scrollHeight); //再用系数乘于要滚动的距离范围

                            this.el.style.top = top + 'px';
                            this.ulbox.style.top = -cony + 'px';
                        }

                        document.onmouseup = _ => {
                            this.isShow = 0;
                            document.onmousemove = null;
                            document.onmouseup = null;
                        }
                    },
                }
            },
            this.$slots.default
        )
        return ('div', { class: 'scroll-into-view' }, scroll);
    },
    mounted() {

        this.el = this.$refs.scroll; //当前滚动条
        this.ulbox = this.$parent.$refs.ulbox; // 元素ul

        let e = window.navigator.userAgent.toLowerCase();
        if (e.indexOf('firefox') != -1) {
            this.ulbox.addEventListener('DOMMouseScroll', e => {
                e.preventDefault();
                let t = 0;
                if (e.detail < 0) {
                    t = this.ulbox.offsetTop + this.li_scrollH;
                } else {
                    t = this.ulbox.offsetTop - this.li_scrollH;
                }
                this.directionFn(t);
            }, false);
        } else {
            this.ulbox.onmousewheel = ev => {
                let e = ev || window.event,
                    t = 0;

                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                };

                if (e.wheelDelta > 0) {
                    t = this.ulbox.offsetTop + this.li_scrollH;
                } else {
                    t = this.ulbox.offsetTop - this.li_scrollH;
                }

                this.directionFn(t);
            }
        }
    },
    methods: {
        directionFn(t) {
            clearTimeout(this.timer);
            this.isShow = 1;

            if (t >= 0) {
                t = 0;
            }
            if (t <= -(this.ulbox.clientHeight - this.$parent.scrollHeight)) {
                t = -(this.ulbox.clientHeight - this.$parent.scrollHeight);
            };

            let scale = t / (this.ulbox.clientHeight - this.$parent.scrollHeight),
                top = scale * (this.$parent.scrollHeight - this.el.clientHeight),
                elH = this.$parent.scrollHeight - ((this.ulbox.clientHeight - this.$parent.scrollHeight) * 0.5);

            this.el.style.height = (elH <= 0 ? this.minHeight : elH) + 'px';
            this.ulbox.style.top = t + 'px';
            this.el.style.top = -top + 'px';

            this.timer = setTimeout(_ => {
                this.isShow = 0;
            }, 1000)
        }
    }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/select-search/src/ct-select.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 *   https://www.npmjs.com/package/v-select-search
 *   @params getSearchName      获取搜索文本
 *   @params data               数据格式 [{label: '飞机', value: 1}]
 *   @params visibleInput       是否隐藏搜索框
 *   @params autoQuery          是否输入后就触发
 *   @params width              设置输入框宽度值
 *   @params delay              请求延时间隔(autoQuery为false时)
*/


/* harmony default export */ var ct_selectvue_type_script_lang_js_ = ({
    name: 'ct-select',
    components: {
        scrollIntoView: scroll_into_view,
    },
    props: {
        width: {//设置选择框长度
            type: [String, Number],
            default: 213,
        },
        value: {
            type: [String, Number],
            default: ''
        },
        visibleInput: {
            type: Boolean,
            default: true
        },
        autoQuery: {
            type: Boolean,
            default: false
        },
        delay: {
            type: Number,
            default: 500,
        },
        placeholder: {
            type: String,
        }
    },
    data() {
        return {
            show: false,
            itemIndex: -1, //是否选中列表
            textValue: '',
            title:'',
            isCode_40_38: false, //是否按了上下键
            scrollHeight: 320, //可见高度
            isMousemove: false, //是否在移动范围内
            hLi: 32,
            isFlag: true,
            timer: null,
            data: [],
        }
    },
    provide() {
      return {
        'select': this
      };
    },
    mounted() {
        //全局监听上下键
        document.onkeydown = ev => {
            this.keyupChange(ev);
        }

        document.onclick = ev => {
            this.show = false;
        }

        window.addEventListener('resize', _=>{
            this.throttle(this.setStyle, 300, 1000)
        })

        this.setStyle();
    },
    methods: {
        //鼠标离开时清空
        leaveUl() {
            if(this.$refs && this.$refs.scrollInto) {
                this.$refs.scrollInto.isShow = 0;
            }
            this.isCode_40_38 = false;
            this.isMousemove = false;
        },
        keyupChange(ev) {
            const e = ev || window.event;

            if(this.data.length) {
                if(e.keyCode === 40) { //向下

                    if(this.itemIndex === this.data.length - 1) {
                        this.itemIndex = this.data.length - 1;
                    } else {
                        this.itemIndex++;
                    }
                    //带到ui的top值改变
                    if((this.itemIndex + 1) * this.hLi - Math.abs(this.$refs.ulbox.offsetTop) > this.scrollHeight) {
                        this.$refs.ulbox.style.top = -((this.itemIndex + 1) * this.hLi - this.scrollHeight) + 'px';
                    }
                    this.operationKey(e);
                }

                if(e.keyCode === 38) { // 向上
                    this.isFlag = true;
                    this.isCode_40_38 = true;
                    this.$refs.inputblur.blur();
                    if(this.itemIndex === 0) {
                        this.itemIndex = 0;
                    } else {
                        this.itemIndex--;
                    }
                    //带到ui的top值改变
                    if((this.itemIndex + 1) * this.hLi - Math.abs(this.$refs.ulbox.offsetTop) <= 0) {
                        this.$refs.ulbox.style.top = -(Math.abs(this.$refs.ulbox.offsetTop) - this.hLi) + 'px';
                    }
                    this.operationKey(e);
                }

                //选中下拉列表内容触发
                if(e.keyCode === 13 && this.itemIndex !== -1 && this.isCode_40_38 && this.isFlag) {
                    this.selectLiHandler();
                }
            }
        },
        //设置滚动条可见、高度、及top值
        operationKey(e){

            if(e.preventDefault){
                e.preventDefault();
            }else{
                e.returnValue = false;
            }

            this.isFlag = true;
            this.isCode_40_38 = true;
            this.$refs.inputblur.blur();

            if(this.isMousemove && this.data.length > 10) {

                this.$refs.scrollInto.isShow = 1;

                let elH = this.scrollHeight - ((this.$refs.ulbox.clientHeight - this.scrollHeight) * 0.5), //计算滚动条高度
                    scale = (this.itemIndex * this.hLi) / this.$refs.ulbox.clientHeight,
                    h = elH <= 0 ? this.$refs.scrollInto.minHeight : elH,
                    top = ((this.data.length - 1) * this.hLi == this.itemIndex * this.hLi) ? -(this.scrollHeight - h) : -scale * (this.scrollHeight - h);

                this.$refs.scrollInto.el.style.height = h + 'px';
                this.$refs.scrollInto.el.style.top =- top + 'px';
            }

        },
        selectLiHandler() {
            this.$emit('input', this.data[this.itemIndex]['value']);
            this.title = this.data[this.itemIndex]['label'];
            this.textValue = '';
            this.show = false;
            this.isCode_40_38 = false;
        },
        searchBtn(){
            this.isFlag = false;
            if(this.textValue && this.autoQuery) {
                this.reductionEmitVal();
            }
        },
        reductionEmitVal() {
            this.itemIndex = -1;
            if(this.data.length) {
                this.$refs.ulbox.style.top = '0';
            }
            this.$emit('getSearchName', this.textValue);
        },
        setStyle() {
            if(this.$refs.inputbox) {
                this.$refs.inputbox.style.top = this.$refs.searchbox.offsetTop + this.hLi + 8 + 'px';
                this.$refs.inputbox.style.left = this.$refs.searchbox.offsetLeft + 'px';
            }
        },
        //函数节流
        throttle(fn, delay, mustApplyTime) {
            clearTimeout(fn.timer);
            fn._cur = Date.now();

            if(!fn._start){
                fn._start = fn._cur;
            }
            if(fn._cur - fn._start > mustApplyTime) {
                fn.apply(null, arguments);
                fn._start = fn._cur;
            }else{
                fn.timer = setTimeout(_=>{
                    fn.apply(null, arguments);
                },delay);
            }
        },
        onOptionDestroy(index) {
            if(index > -1) {
                this.data.splice(index, 1);
            }
        }
    },
    watch: {
        textValue(val) {
            if(val && !this.autoQuery) {
                clearTimeout(this.timer);
                this.timer = setTimeout(_=>{
                    this.reductionEmitVal();
                },this.delay);
            }
            if(!val) {
                this.reductionEmitVal();
            }
        },
    }
});

// CONCATENATED MODULE: ./packages/select-search/src/ct-select.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_ct_selectvue_type_script_lang_js_ = (ct_selectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/select-search/src/ct-select.vue?vue&type=style&index=0&id=36d156e6&lang=less&scoped=true&
var ct_selectvue_type_style_index_0_id_36d156e6_lang_less_scoped_true_ = __webpack_require__("c1c2");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/select-search/src/ct-select.vue






/* normalize component */

var component = normalizeComponent(
  src_ct_selectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "36d156e6",
  null
  
)

component.options.__file = "ct-select.vue"
/* harmony default export */ var ct_select = (component.exports);
// CONCATENATED MODULE: ./packages/select-search/index.js


ct_select.install = function(Vue) {
    Vue.component(ct_select.name, ct_select);
}
/* harmony default export */ var select_search = (ct_select);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"0096c51d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/select-search/src/ct-option.vue?vue&type=template&id=1e6d2504&scoped=true&
var ct_optionvue_type_template_id_1e6d2504_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{class:[{'ct-option-li-active': _vm.itemSelected }, 'ct-option-li'],on:{"mouseover":_vm.moveLi,"click":_vm.selectLi}},[_vm._v("\n    "+_vm._s(_vm.label)+"\n")])}
var ct_optionvue_type_template_id_1e6d2504_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/select-search/src/ct-option.vue?vue&type=template&id=1e6d2504&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/select-search/src/ct-option.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var ct_optionvue_type_script_lang_js_ = ({
    name: 'ct-option',
    inject: ['select'],
    props: {
        value: {
            required: true
        },
        label: [String, Number],
    },
    created() {
        this.select.data.push(this);
    },
    methods: {
        moveLi(index) {
            //防止正在操作键盘时鼠标不在范围内导致isCode_40_38值不正确
            if(this.select.isCode_40_38 && !this.select.isMousemove) {
                this.select.isCode_40_38 = false;
            }
            this.select.isMousemove = true;
            if(!this.select.isCode_40_38) {
                this.select.itemIndex = this.select.data.indexOf(this);
            }
        },
        selectLi() {
            this.select.selectLiHandler();
        }
    },
    computed: {
        itemSelected() {
            return this.select.data.indexOf(this) == this.select.itemIndex;
        }
    },
    beforeDestroy() {
      this.select.onOptionDestroy(this.select.data.indexOf(this));
    }
});

// CONCATENATED MODULE: ./packages/select-search/src/ct-option.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_ct_optionvue_type_script_lang_js_ = (ct_optionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/select-search/src/ct-option.vue?vue&type=style&index=0&id=1e6d2504&lang=less&scoped=true&
var ct_optionvue_type_style_index_0_id_1e6d2504_lang_less_scoped_true_ = __webpack_require__("89fb");

// CONCATENATED MODULE: ./packages/select-search/src/ct-option.vue






/* normalize component */

var ct_option_component = normalizeComponent(
  src_ct_optionvue_type_script_lang_js_,
  ct_optionvue_type_template_id_1e6d2504_scoped_true_render,
  ct_optionvue_type_template_id_1e6d2504_scoped_true_staticRenderFns,
  false,
  null,
  "1e6d2504",
  null
  
)

ct_option_component.options.__file = "ct-option.vue"
/* harmony default export */ var ct_option = (ct_option_component.exports);
// CONCATENATED MODULE: ./packages/ct-option/index.js


ct_option.install = function(Vue) {
    Vue.component(ct_option.name, ct_option);
}
/* harmony default export */ var packages_ct_option = (ct_option);
// CONCATENATED MODULE: ./packages/index.js




const components = [
    select_search,
    packages_ct_option
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
    // 判断是否安装
    if (install.installed) return
        // 遍历注册全局组件
    components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
/* harmony default export */ var packages_0 = ({
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    // 以下是具体的组件列表
    ctSelect: select_search,
    ctOption: packages_ct_option
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
//# sourceMappingURL=v-select-search.common.js.map