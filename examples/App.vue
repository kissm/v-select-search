<template>
  <div id="app">
    <div style="width:250px;overflow:hidden;margin:250px auto;">
      <ct-select
        v-model="text"
        :data="dataList"
        @getSearchName="getName">
        <ct-option
          v-for="(item, index) of dataList"
          :key="index"
          :value="item.value"
          :label="item.label"
          :index="index">
        </ct-option>
      </ct-select>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
      name: 'app',
      data() {
          return{
              text: '',
              dataList:[{
                value: '11',
                label: '学学'
              },{
                value: '22',
                label: '学学'
              }],
          }
      },
      mounted() {
        
        // axios.get('/v2/book/search?q=vue&alt=json&start=1&count=45')
        // .then((data)=>{
        //     this.dataList = [];
        //     for(let v of data.data.books) {
        //       this.dataList.push({
        //         value: v.id,
        //         label: v.title
        //       })
        //     }
        // })
        // .catch(function(error){
        //     console.log(error);
        // });
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
