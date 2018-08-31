<template>
  <div class="about">
    <mylist></mylist>
    <mywife></mywife>
  </div>
</template>

<script>
  import list from "@/components/alist.vue";
  import sample from "@/components/mytest.vue";
export default {
  components: {
    mylist: list,
    mywife: sample
  }
}
</script>
