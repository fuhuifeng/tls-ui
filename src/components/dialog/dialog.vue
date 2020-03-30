<template>
    <!-- 最外面的是背景遮罩层 -->
    <transition name="dialog-fade">
        <div class="tls-dialog-mask" v-if="visible" @click="handleClose">
            <!-- @click.self="handleClose" -->
            <!-- 主体 -->
            <div class="tls-dialog" :style="{width,marginTop:top}" @click.stop>
                <!-- 标题 -->
                <div class="tls-dialog-header">
                    <slot name="title">
                        <span class="tls-dialog-title">{{title}}</span>
                    </slot>
                    <button class="tls-dialog-closebtn" @click="handleClose">
                        <i class="tls-icon-close"></i>
                    </button>
                </div>
                <!-- 内容（默认插槽） -->
                <div class="tls-dialog-body">
                    <slot></slot>
                </div>
                <!-- 底部 -->
                <div class="tls-dialog-footer" v-if="$slots.footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </transition>
    <!-- 最外层的@click.self和主体的@click.stop选一个 -->
</template>

<script>
export default {
    name: "tlsDialog",
    data() {
        return {};
    },
    props: {
        title: {
            type: String,
            default: ""
        },
        width: {
            type: String,
            default: "50%"
        },
        top: {
            type: String,
            default: "15vh"
        },
        visible: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClose() {
            this.$emit("update:visible", false);
        }
    }
};
</script>

<style lang="scss" scoped>
.tls-dialog-mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2001;
    background-color: rgba(0, 0, 0, 0.5);
    .tls-dialog {
        position: relative;
        margin: 15vh auto 50px;
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
        width: 30%;
        .tls-dialog-header {
            padding: 20px 20px 10px;
            .tls-dialog-title {
                line-height: 24px;
                font-size: 18px;
                color: #303133;
            }
            .tls-dialog-closebtn {
                position: absolute;
                top: 20px;
                right: 20px;
                padding: 0;
                background: transparent;
                border: none;
                outline: none;
                cursor: pointer;
                font-size: 16px;
                .tls-icon-close {
                    color: #909399;
                }
            }
        }
        .tls-dialog-body {
            padding: 30px 20px;
            color: #606266;
            font-size: 14px;
            word-break: break-all;
        }
        .tls-dialog-footer {
            padding: 10px 20px 20px;
            text-align: right;
            box-sizing: border-box;
            /deep/ .hm-button:first-child {
                margin-right: 20px;
            }
        }
    }
}
.dialog-fade-enter-active {
    animation: fade 0.3s;
}
.dialog-fade-leave-active {
    animation: fade 0.3s reverse;
}
@keyframes fade {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}
</style>