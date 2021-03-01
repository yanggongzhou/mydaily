<template>
  <div class="home">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
  import {Component,Vue} from "vue-property-decorator"
  import { ListData } from '@/types'
  @Component
  export default class Nav extends Vue{
    private activeIndex2:string='1';
    mounted(): void {

    };



    private handleSelect(val: string): void {
      console.log(val)
    }
  }
</script>
<style lang="less" scoped>
  .home{
    height: 100vh;
    background: red;
  }
</style>
