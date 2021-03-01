<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  @Component({
  })
  export default class Start extends Vue {
    private msg: string = "测试";
    mounted():void {
      console.log(this.$https)
      this.ceshi()
    }
    private ceshi(): void {
      this.$https.getCategoryList({username:1,password:123});
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
