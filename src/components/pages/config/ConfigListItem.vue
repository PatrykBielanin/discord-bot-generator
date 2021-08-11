<template>
    <div class="listItem" v-if="option.length > 1">
        <p>{{option}} <span>{{value ? value : 'empty'}}</span></p>
    </div>
</template>

<script>
    export default {
        name: "ConfigListItem",
        props: ['option', 'value']
    }
</script>

<style lang="sass" scoped>
    @import '@/assets/sass/pages/configListItem.sass'
</style>
