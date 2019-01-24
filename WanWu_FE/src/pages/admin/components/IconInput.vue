<template>
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text span-icon" :id="bind_id"><i :class="icon_class" aria-hidden="true"></i></span>
        </div>
        <slot></slot>
    </div>
</template>

<script>
/* eslint-disable */
export default {
	name:"iconinput",
	props:["bind_id","icon_class"]
}
</script>
<style scoped>
    .span-icon{
        height: 46px;
        width: 46px;
        display: inline-block;
    }
</style>