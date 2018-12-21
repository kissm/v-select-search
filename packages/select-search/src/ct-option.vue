<template>
    <li :class="[{'ct-option-li-active': index == $parent.itemIndex}, 'ct-option-li']" @mouseover="moveLi(index)" @click="selectLi">
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
        index: [String, Number],
    },
    data() {
        return {
        }
    },
    mounted() {
    },
    methods: {
        moveLi(index) {
            //防止正在操作键盘时鼠标不在范围内导致isCode_40_38值不正确
            if(this.select.isCode_40_38 && !this.select.isMousemove) {
                this.select.isCode_40_38 = false;
            }
            this.select.isMousemove = true;
            if(!this.select.isCode_40_38) {
                this.select.itemIndex = index;
            }
        },
        selectLi() {
            this.select.selectLiHandler();
        }
    },
}
</script>

<style scoped>
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
