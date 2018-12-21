export default {
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
}