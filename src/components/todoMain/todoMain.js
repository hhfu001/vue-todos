import todoItem from '../todoItem/todoItem.vue';
// import LocalDB from '../localDB';


export default {
    props: ['todos'],
    components: {
        todoItem
    },
    mounted() {
        // this.db = new LocalDB('todos');

    },
    methods: {
        stateChange(index, item) {

            //改变一项值 不会像删除一样警告。。。。。

            // this.todos[index] = item; 

            // this.db.set('todos', this.todos);

            this.$emit('todoChange', index, item);

        },

        delTodoItem(index) {
            this.$emit('todoChange', index);

            //Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. 
            // Instead, use a data or computed property based on the prop's value.

            // this.todos = this.todos.splice(index, 1);

            // this.db.set('todos', this.todos);
        }
    }
}
