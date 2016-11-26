<template>
    <ul class="todo-list">
        <li is="todo-item" :todo="todo" :index="index" v-for="(todo, index) in todos" 
        @stateChange="stateChange"
        @delTodo="delTodoItem"
        ></li>
    </ul>
</template>
<script src="./todoMain.js"></script>