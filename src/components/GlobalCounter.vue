<script setup lang="ts">
    import { useCounterStore } from '@/stores/counter'
    import { storeToRefs } from 'pinia'
    import { onMounted } from 'vue'

    const counterStore = useCounterStore()
    const { counter } = storeToRefs(counterStore)

    function getDefatulCount(): Promise<number> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 1000)
        })
    }

    onMounted(async () => {
        counter.value = await getDefatulCount();
    })
</script>

<template>
    <div class="counter">
        <button @click="counterStore.decrement">-</button>
        <span>{{ counter }}</span>
        <button @click="counterStore.increment">+</button>
    </div>
</template>

<style scoped>
    .counter {
        display: flex;
        
    }
</style>