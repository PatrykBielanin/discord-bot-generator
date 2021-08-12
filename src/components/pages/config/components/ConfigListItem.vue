<template>
    <li class="listItem">
        <p>{{option[0].toUpperCase() + option.slice(1)}}: <span>{{value ? value : '----'}}</span></p>
    </li>
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
