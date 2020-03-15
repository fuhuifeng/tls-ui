<template>
    <button
        class="tls-button"
        :class="[`tls-button-${type}`,{'is-plain':plain,'is-round':round,'is-circle':circle,'is-disabled':disabled}]"
        @click="handleClick"
        :disabled="disabled"
    >
        <i v-if="icon" :class="icon"></i>
        <span v-if="$slots.default">
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
    name: "tlsButton",
    /* 这里进行属性校验 */
    props: {
        type: {
            type: String, //数据类型
            default: "default" //默认值
        },
        plain: {
            type: Boolean,
            default: false
        },
        round: {
            type: Boolean,
            default: false
        },
        circle: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: ""
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClick(e) {
            this.$emit("click", e);
        }
    }
};
</script>

<style scoped lang="scss">
/* 基础样式 */
.tls-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    color: #606266;
    /* 禁止元素的文字被选中 */
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    padding: 11px 18px;
    &:hover,
    &:focus {
        color: #409eff;
        background-color: #ecf5ff;
        border-color: #c6e2ff;
    }
}
/* 主要 */
.tls-button-primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &:hover,
    &:focus {
        background: #66b1ff;
        border-color: #66b1ff;
        color: #fff;
    }
}
/* 成功 */
.tls-button-success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &:hover,
    &:focus {
        background: #85ce61;
        border-color: #85ce61;
        color: #fff;
    }
}
/* 提示 */
.tls-button-info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
    &:hover,
    &:focus {
        background: #a6a9ad;
        border-color: #a6a9ad;
        color: #fff;
    }
}
/* 警告 */
.tls-button-warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &:hover,
    &:focus {
        background: #ebb563;
        border-color: #ebb563;
        color: #fff;
    }
}
/* 错误/危险 */
.tls-button-error {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:hover,
    &:focus {
        background: #f78989;
        border-color: #f78989;
        color: #fff;
    }
}
/* 朴素（没有默认背景色） */
.tls-button.is-plain {
    &:hover,
    &:focus {
        background-color: #fff;
        border-color: #409eff;
        color: #409eff;
    }
}
.tls-button-primary.is-plain {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;
    &:hover,
    &:focus {
        background-color: #409eff;
        border-color: #409eff;
        color: #ffffff;
    }
}
.tls-button-success.is-plain {
    color: #67c23a;
    background: #ecf5ff;
    border-color: #c2e7b0;
    &:hover,
    &:focus {
        background-color: #67c23a;
        border-color: #67c23a;
        color: #ffffff;
    }
}
.tls-button-info.is-plain {
    color: #909399;
    background: #ecf5ff;
    border-color: #d3d4d6;
    &:hover,
    &:focus {
        background-color: #909399;
        border-color: #909399;
        color: #ffffff;
    }
}
.tls-button-warning.is-plain {
    color: #e6a23c;
    background: #ecf5ff;
    border-color: #f5dab1;
    &:hover,
    &:focus {
        background-color: #e6a23c;
        border-color: #e6a23c;
        color: #ffffff;
    }
}
.tls-button-error.is-plain {
    color: #f56c6c;
    background: #ecf5ff;
    border-color: #fbc4c4;
    &:hover,
    &:focus {
        background-color: #f56c6c;
        border-color: #f56c6c;
        color: #ffffff;
    }
}
/* 不可点击 */
.tls-button.is-disabled {
    color: #c0c4cc;
    background-color: #fff;
    border-color: #ebeef5;
    &:hover,
    &:focus {
        color: #c0c4cc;
        background-color: #fff;
        border-color: #ebeef5;
        cursor: not-allowed;
        background-image: none;
    }
}
.tls-button-primary.is-disabled {
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
    &:hover,
    &:focus {
        color: #fff;
        background-color: #a0cfff;
        border-color: #a0cfff;
        cursor: not-allowed;
        background-image: none;
    }
}
.tls-button-success.is-disabled {
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d;
    &:hover,
    &:focus {
        color: #fff;
        background-color: #b3e19d;
        border-color: #b3e19d;
        cursor: not-allowed;
        background-image: none;
    }
}
.tls-button-info.is-disabled {
    color: #fff;
    background-color: #c8c9cc;
    border-color: #c8c9cc;
    &:hover,
    &:focus {
        color: #fff;
        background-color: #c8c9cc;
        border-color: #c8c9cc;
        cursor: not-allowed;
        background-image: none;
    }
}
.tls-button-warning.is-disabled {
    color: #fff;
    background-color: #f3d19e;
    border-color: #f3d19e;
    &:hover,
    &:focus {
        color: #fff;
        background-color: #f3d19e;
        border-color: #f3d19e;
        cursor: not-allowed;
        background-image: none;
    }
}
.tls-button-error.is-disabled {
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6;
    &:hover,
    &:focus {
        color: #fff;
        background-color: #fab6b6;
        border-color: #fab6b6;
        cursor: not-allowed;
        background-image: none;
    }
}
/* 圆角 */
.tls-button.is-round {
    border-radius: 20px;
    padding: 12px 23px;
}
/* 圆形 */
.tls-button.is-circle {
    border-radius: 50%;
    padding: 12px;
}
.tls-button [class*="tls-icon-"] + span {
    margin-left: 5px;
}
</style>
