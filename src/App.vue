<template>
    <div id="app">
        <tls-button @click="visible = true">耶耶耶</tls-button>
        <tls-dialog title="哈哈哈哈" width="40%" top="300px" :visible.sync="visible">
            <template v-slot:title>
                <h1>喂喂喂</h1>
            </template>
            <div>你好吗</div>
            <template v-slot:footer>
                <tls-button type="primary" @click="visible=false">确定</tls-button>
                <tls-button @click="visible=false">取消</tls-button>
            </template>
        </tls-dialog>
    </div>
</template>

<script>
export default {
    name: "App",
    components: {},
    data() {
        return {
            visible:false
        };
    },
    methods: {
        test(e) {
            console.log(e);
        }
    }
};
</script>

<style lang="scss">
#app {
}
</style>
