<template>
    <div class="todo-footer" v-show="todos.length">
        <input :checked="isAllChecked" type="checkbox" @click="toggleAllChecked" />
        <span>{{dones.length}}已完成 /{{todos.length}}总数</span>
        <button class="fr" @click="handlerClick">清除已完成</button>
    </div>
</template>
<script src="./todoFooter.js"></script>