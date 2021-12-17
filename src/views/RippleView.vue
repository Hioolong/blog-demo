<script setup lang="ts">
    
</script>

<template>
    <div class="wrapper">
        <div class="ripple" v-ripple-step-one>默认位置</div>
        <div class="ripple" v-ripple-overflow>看球儿怎么动</div>
        <div class="ripple" v-ripple>快点我</div>
    </div>
</template>

<style scoped>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-bottom: 200px;
    }
    .ripple {
        margin-top: 500px;
        width: 360px;
        height: 80px;
        border: 1px solid #666;
        border-radius: 8px;
        box-sizing: border-box;
        text-align: center;
        line-height: 80px;
        user-select: none;
    }
    .ripple:first-child {
        margin-top: 50px;
    }
    .ripple:hover {
        cursor: pointer;
    }
</style>