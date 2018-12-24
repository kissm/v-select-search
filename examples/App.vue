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
      },
      methods: {
        getTextHandler() {
        },
        getName(val) {

        },
        getName(val) {
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
