<template>
    <li>
        <input :checked="todo.isDone" type="checkbox" @change="handlerChange"/>
        
        <span :style="[todo.isDone ? doneStyle: '']" v-if="!isEdit"  @click="edit" >{{todo.text}}</span>
        <span v-else><input autofocus v-model="todo.text" @keyup.enter="save" type="text" /><button @click="cancle">取消</button></span>


        <button class="fr" @click="delTodo">删除</button>
    </li>
</template>
<script src="./todoItem.js"></script>