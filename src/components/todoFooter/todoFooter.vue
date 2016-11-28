<template>
    <div class="todo-footer">
        <input type="checkbox" @click="isAllChecked" />
        <span>{{dones.length}}已完成 /{{todos.length}}总数</span>
        <button class="fr" @click="handlerClick">清除已完成</button>
    </div>
</template>
<script src="./todoFooter.js"></script>