<template>
  <div class="panel-header">
    <input required="required" pattern="\s+" @keyup.enter="handlerKeyUp" v-model="message" type="text" placeholder="what's your task ?"/>
</div>
</template>


<script src="./todoHeader.js"></script>
