<template>
    <div id="app">
        <div>
            <tls-button @click="test" disabled>正常</tls-button>
            <tls-button type="primary">主要</tls-button>
            <tls-button type="success">成功</tls-button>
            <tls-button type="info">信息</tls-button>
            <tls-button type="warning">警告</tls-button>
            <tls-button type="error">错误</tls-button>
        </div>
        <div>
            <tls-button plain>正常</tls-button>
            <tls-button plain type="primary">主要</tls-button>
            <tls-button plain type="success">成功</tls-button>
            <tls-button plain type="info">信息</tls-button>
            <tls-button plain type="warning">警告</tls-button>
            <tls-button plain type="error">错误</tls-button>
        </div>
        <div>
            <tls-button disabled round icon="tls-icon-search">正常</tls-button>
            <tls-button disabled round icon="tls-icon-search" type="primary">主要</tls-button>
            <tls-button disabled round icon="tls-icon-search" type="success">成功</tls-button>
            <tls-button disabled round icon="tls-icon-search" type="info">信息</tls-button>
            <tls-button disabled round icon="tls-icon-search" type="warning">警告</tls-button>
            <tls-button disabled round icon="tls-icon-search" type="error">错误</tls-button>
        </div>
        <div>
            <tls-button circle>正常</tls-button>
            <tls-button circle type="primary">主要</tls-button>
            <tls-button circle type="success">成功</tls-button>
            <tls-button circle type="info">信息</tls-button>
            <tls-button circle type="warning">警告</tls-button>
            <tls-button circle type="error">错误</tls-button>
        </div>
        <div>
            <tls-button disabled circle>正常</tls-button>
            <tls-button disabled circle type="primary">主要</tls-button>
            <tls-button disabled circle type="success">成功</tls-button>
            <tls-button disabled circle type="info">信息</tls-button>
            <tls-button disabled circle type="warning">警告</tls-button>
            <tls-button disabled circle type="error">错误</tls-button>
        </div>
        <div>
            <tls-button circle icon="tls-icon-search"></tls-button>
            <tls-button circle icon="tls-icon-search" type="primary"></tls-button>
            <tls-button circle icon="tls-icon-search" type="success"></tls-button>
            <tls-button circle icon="tls-icon-search" type="info"></tls-button>
            <tls-button circle icon="tls-icon-search" type="warning"></tls-button>
            <tls-button circle icon="tls-icon-search" type="error"></tls-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
    components: {},
    data() {
        return {};
    },
    methods:{
        test(e){
            console.log(e)
        }
    }
};
</script>

<style lang="scss">
#app {
    div {
        margin: 20px 0;
    }
}
</style>
