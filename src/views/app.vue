<style lang="less" scoped></style>

<template>
  <section class="panel">
    <todo-header :todos="todos" @addItem="addNewItem"></todo-header>
    <todo-main :todos="todos" @todoChange="todoStatusChange"></todo-main>
    <todo-footer :isAllChecked="isAllChecked" :todos="todos" @isAllChecked="toggleAllChecked" @cleanDone="cleanDone" ></todo-footer>
  </section>
</template>

<script src="./app.js"></script>