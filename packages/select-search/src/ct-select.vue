<template>
    <div class="input-search-box"  @click.stop.prevent>
        <div ref="searchbox" class="search-box" @click="show =!show; textValue=''" :style="{width: width + 'px'}">
            <span :style="{color: title ? '#606266' : '#C0C4CC'}">{{ title|| placeholder}}</span>
            <i :class="[{'icon':!show}, {'iconActive': show}]"></i>
        </div>
        <transition name="fade">
            <div ref="inputbox" class="input-box" v-show="show" :style="{width: width + 5 + 'px'}">
                <div class="inputStyle" v-if="visibleInput">
                    <input ref="inputblur" spellcheck="false" type="input" v-model="textValue" @keyup.enter="searchBtn" @focus="isFlag = false;" placeholder="请输入搜索内容"/>
                </div>
                <div class="data-list-box" :style="{ 'height': (data.length > 10 ? scrollHeight : (data.length < 2 ? 160 : data.length * hLi)) + 'px' }">
                    <div class="data-scroll" v-show="data.length">
                        <ul class="ul-box" ref="ulbox" :style="{ 'height': (data.length * hLi) + 'px', 'width': width + 'px' }" @mouseleave="leaveUl">
                            <slot></slot>
                        </ul>
                        <div class="scroll-box" v-if="data.length > 10" :style="{ 'height': (data.length > 10 ? scrollHeight : data.length * hLi) + 'px' }">
                            <scroll-into-view ref="scrollInto"/>
                        </div>
                    </div>
                    <div v-if="!data.length" class="tiptxt">暂无数据</div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
/**
 *   https://www.npmjs.com/package/v-select-search
 *   @params getSearchName      获取搜索文本
 *   @params data               数据格式 [{label: '飞机', value: 1}]
 *   @params visibleInput       是否隐藏搜索框
 *   @params autoQuery          是否输入后就触发
 *   @params width              设置输入框宽度值
 *   @params delay              请求延时间隔(autoQuery为false时)
*/

import scrollIntoView from './scroll-into-view.js';
export default {
    name: 'ct-select',
    components: {
        scrollIntoView,
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
}
</script>
<style lang="less" scoped>
    .input-search-box {
        ::-webkit-input-placeholder {color:#C0C4CC;}
    　　:-moz-placeholder {color:#C0C4CC;}
    　　::-moz-placeholder {color:#C0C4CC;}
    　　:-ms-input-placeholder {color:#C0C4CC;}

        .fade-enter-active,
        .fade-leave-active {
            -webkit-transition: all .5s;
            -moz-transition: all .5s;
            transition: all  .5s;
        }
        .fade-enter,
        .fade-leave-active {
            opacity: 0;
        }

        font-size: 12px;
        .search-box{
            height: 35px;
            border: 1px solid #DCDFE6;
            border-radius: 3px;
            background: #fff;
            line-height: 35px;
            padding: 0 10px 0 15px;
            position: relative;
            text-align: left;
            &:hover{
                border: 1px solid #C0C4CC;
                cursor: pointer;
            }
            span {
                width: -webkit-calc(100% - 15px);
                width: calc(100% - 15px);
                display: block;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
                float: left;
            }
            i {
                width: 0;
                height: 0;
                border: 6px solid transparent;
                position: relative;
                display: block;
                float: right;
                &::before {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 0;
                    border: 4px solid transparent;
                }
            }
            .icon {
                border-color:#ccc transparent transparent transparent;
                margin: 15px 0 0 0;
                &::before{
                    border-color:#fff transparent transparent transparent;
                    top: -6px;
                    left: -4px;
                }
            }
            .iconActive {
                border-color: transparent transparent #ccc transparent;
                margin: 8px 0 0 0px;
                &::before{
                    border-color: transparent transparent #fff transparent;
                    top: -2px;
                    left: -4px;
                }
            }
        }
        .input-box {
            background: #fff;
            border: 1px solid #C0C4CC;
            border-radius: 3px;
            position: absolute;
            padding: 10px;
            overflow: hidden;
            z-index: 99999999;
            .data-list-box {
                border: 1px solid #C0C4CC;
                border-radius: 4px;
                width: 100%;
                margin: 0 auto;
                overflow: hidden;
                position: relative;
                .ul-box {
                    text-align:left;
                    margin:0;
                    padding:0;
                    overflow: hidden;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
                .scroll-box {
                    width: 6px;
                    overflow: hidden;
                    position: absolute;
                    top: 0;
                    right: 0;
                    z-index: 6;
                }
                .tiptxt {
                    color: #C0C4CC;
                    text-align: center;
                    height: 160px;
                    line-height: 35px;
                }
            }
        }
        .inputStyle {
            width: 100%;
            height: 35px;
            border: 1px solid #409EFF;
            border-radius: 4px;
            margin: 0 0 5px 0;
            input[type="input"] {
                font-size: 12px;
                width: 96%;
                outline: none;
                border: 0;
                height: 33px;
                line-height: 33px;
                margin: 0 auto;
                display: block;
                padding: 0 5px;
                box-sizing: border-box;
            }
        }
    }

</style>
