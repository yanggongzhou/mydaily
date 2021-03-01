<template>
  <div class="home">
    <el-container class="container">
      <el-header class="home_header">
        <m-header></m-header>
      </el-header>
      <el-container>
        <el-aside width="300px">
          <m-nav></m-nav>
        </el-aside>
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
  import mHeader from "@/components/home/header.vue"
  import mNav from "@/components/home/nav.vue"
  @Component({
    components: {
      mHeader,
      mNav
    }
  })
  export default class Home extends Vue{
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
    background: #6a84ab;
    .container{
      height: 100vh;
    }
    .home_header{
      position: fixed;
      top: 0px;
      z-index: 10;
      width: 100%;
      height: 3.6rem;
      padding: .7rem 1.5rem;
      background: #ffffff;
      box-sizing: border-box;
      border-bottom: 1px solid #eaecef;
    }
  }
</style>
