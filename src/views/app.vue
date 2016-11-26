<style lang="less" scoped></style>

<template>
  <section class="panel">
    <todo-header :todos="todos" @addItem="addNewItem"></todo-header>
    <todo-main :todos="todos" @todoChange="todoChange"></todo-main>
    <todo-footer :todos="todos"></todo-footer>
  </section>
</template>

<script src="./app.js"></script>