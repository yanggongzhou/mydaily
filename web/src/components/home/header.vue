<template>
  <div class="header clearfix">
    <div class="float_left">MYGZ</div>
    <div class="float_right">
      <el-autocomplete
        v-model="searchValue"
        :fetch-suggestions="querySearch"
        placeholder=""
        @select="handleSelect">
        <i slot="prefix" class="el-icon-search"></i>
      </el-autocomplete>
      
    </div>
  </div>
</template>
<script lang="ts">
  import {Component,Vue} from "vue-property-decorator"
  import { ListData } from '@/types'
  @Component
  export default class Header extends Vue{
    private searchValue:string='';
    private restaurants:Array<any> = [];
    mounted(): void {
      this.getSearchList()
    }
    public handleSelect(val: string): void {
      console.log(val)
    }
    private querySearch(queryString:string, cb:any) {
      let restaurants = this.restaurants;
      let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    }
    private createFilter(queryString:string): any{
      return (restaurant:any) => {
        console.log(restaurant)
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      }
    }
    private getSearchList():void {
      this.$https.SearchList().then((res:any)=>{
        this.restaurants = res.data
      })
    }
  }
</script>
<style lang="less" scoped>
  .header{

  }
</style>
