<template>
    <div>
        <img :src="path" alt="image">
    </div>
</template>

<script>
    import img from "../../../../sample.jpg";
export default {
    name: "sample",
    data: function() {
        return {
            path: img
        }
    }
}
</script>

<style lang="scss">
img {
    width: 300px;
    height: 300px;
}
</style>
