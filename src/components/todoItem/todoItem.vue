<template>
    <li>
        <input :checked="todo.isDone" type="checkbox" @change="handlerChange"/>
        <span :style="[todo.isDone ? done: '']">{{todo.text}}</span>
        <button class="fr" @click="delTodo">删除</button>
    </li>
</template>
<script src="./todoItem.js"></script>