<template>
    <div>
        <h1>Testando component</h1>
        <input type="text" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            val: ""
        }
    },
    props: [
        'test'
    ]
}
</script>

<style scoped>
    div {
        border: 1px solid;
        color: green;
    }
</style>