<template>
    <ul>
        <li>
            消息编号：{{$route.query.id}}
        </li>
        <li>
            消息标题：{{$route.query.title}}
        </li>
    </ul>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
    name: 'Detail',
}
</script>