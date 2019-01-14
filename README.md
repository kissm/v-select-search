# 基于vue2.x的下拉选择搜索插件
![Markdown](https://wanghuatong1988.github.io/v-select-search/examples/assets/demo.gif)
- npm下载地址
```
npm install --save v-select-search
```

- 引用
```
import 'v-select-search/lib/v-select-search.css';
import vSelectSearch from 'v-select-search';

Vue.use(vSelectSearch);
```

- demo
```

<template>
  <div style="width:250px;overflow:hidden;margin:250px auto;">
    <ct-select
      v-model="text"
      @getSearchName="getName">
      <ct-option
        v-for="(item, index) of dataList"
        :key="index"
        :value="item.value"
        :label="item.label">
      </ct-option>
    </ct-select>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios';
  export default {
      name: '',
      data() {
          return{
              text: '',
              dataList:[],
          }
      },
      mounted() {
        axios.get('/v2/book/search?q=vue&alt=json&start=1&count=45')
        .then((data)=>{
            this.dataList = [];
            for(let v of data.data.books) {
              this.dataList.push({
                value: v.id,
                label: v.title
              })
            }
        })
        .catch(function(error){
            console.log(error);
        });
      },
      methods: {
        getTextHandler() {
          console.log(this.text);
        },
        getName(val) {
            axios({
              method:'POST',
              url:'/v2/book/search',
              data:{
                  q: val,
                  alt:'json',
                  start: 1,
                  count: 15
              }
            }).then((data)=>{
                this.dataList = [];
                for(let v of data.data.books) {
                  this.dataList.push({
                    value: v.id,
                    label: v.title
                  })
                }
            })
            .catch(function(error){
                console.log(error);
            });
        },
      }
  }
</script>

```
- 基本配置


| 参数   |  功能  | 默认值|
| --------  | :----:  |:----:  |
| getSearchName     |   获取搜索文本    |  |
| data     |   数据格式 [{label: '飞机', value: 1}]    |  |
| visibleInput     |   是否隐藏搜索框   | false |
| autoQuery     |   是否输入后就触发    | true |
| width     |   设置输入框宽度值    | 210 |
| delay     |   请求延时间隔(autoQuery为false时)    | 500 |