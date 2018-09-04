<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{this.$store.state.name}}</p>
    <p @click="changeC">{{myName}}</p>
  </div>
</template>

<script>
export default {
  name: "about",
  computed: {
    myName: function() {
      return this.$store.state.name;
    }
  },
  methods: {
    changeC:function() {
      this.$store.commit("changeName",{name:"Aya"});
      console.log(this.$route.params.name);
    }
  }
}
</script>
