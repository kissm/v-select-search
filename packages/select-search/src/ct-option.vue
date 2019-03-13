<template>
    <li :class="[{'ct-option-li-active': itemSelected }, 'ct-option-li']" @mouseover="moveLi" @click="selectLi">
        {{label}}
    </li>
</template>
<script>
export default {
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
}
</script>

<style lang="less" scoped>
    .ct-option-li-active {
        background: #e4e4e4;
    }
    .ct-option-li {
        height: 32px;
        line-height: 32px;
        cursor: pointer;
        padding: 0 10px;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
</style>
