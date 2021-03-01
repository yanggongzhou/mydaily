<template>
  <div class="">
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
<!--    <el-menu-->
<!--      :default-active="activeIndex2"-->
<!--      class="el-menu-demo"-->
<!--      mode="horizontal"-->
<!--      @select="handleSelect"-->
<!--      background-color="#545c64"-->
<!--      text-color="#fff"-->
<!--      active-text-color="#ffd04b">-->
<!--      <el-menu-item index="1">处理中心</el-menu-item>-->
<!--      <el-submenu index="2">-->
<!--        <template #title>我的工作台</template>-->
<!--        <el-menu-item index="2-1">选项1</el-menu-item>-->
<!--        <el-menu-item index="2-2">选项2</el-menu-item>-->
<!--        <el-menu-item index="2-3">选项3</el-menu-item>-->
<!--        <el-submenu index="2-4">-->
<!--          <template #title>选项4</template>-->
<!--          <el-menu-item index="2-4-1">选项1</el-menu-item>-->
<!--          <el-menu-item index="2-4-2">选项2</el-menu-item>-->
<!--          <el-menu-item index="2-4-3">选项3</el-menu-item>-->
<!--        </el-submenu>-->
<!--      </el-submenu>-->
<!--      <el-menu-item index="3">消息中心</el-menu-item>-->
<!--      <el-menu-item index="4">订单管理</el-menu-item>-->
<!--    </el-menu>-->
  </div>
</template>
<script lang="ts">
  import {Component,Vue} from "vue-property-decorator"
  import { ListData } from '@/types'
  @Component
  export default class List extends Vue{
    private activeIndex2:string='1';
    private listData:ListData = {
      page:1,
      pageSize:5
    }
    private tableData:Array<object>=[];

    mounted(): void {
      this.getJsonList(this.listData)
    };

    private async getJsonList(listData: ListData): Promise<void> {
      await this.$https.getJsonList(listData)
      .then((res : any)=>{
        console.log(res)
      })
    }

    private handleSelect(val: string): void {
      console.log(val)
    }
  }
</script>
