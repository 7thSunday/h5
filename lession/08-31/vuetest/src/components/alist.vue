<template>
    <div>
        <ul>
            <li :key="index" v-for="(item,index) in list" @click="change(index)">{{item}}</li>
        </ul>
        <div class="content">{{contentlist[i]}}</div>
    </div>
</template>

<script>
export default {
    name: "alist",
    data: function() {
        return {
            list: ["team","products","contact us"],
            contentlist: [
                "this is the card 1",
                "this is the card 2",
                "this is the card 3"
            ],
            i: 0        
        }
    },
    methods: {
        change: function($i) {
            this.i = $i;
        }
    }
}
</script>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
ul {
    width: 100%;
    overflow: hidden;
    li {
        line-height: 35px;
        float: left;
        width: 33.33%;
        &:active {
            color: #42b983;
        }
    }
}
</style>
