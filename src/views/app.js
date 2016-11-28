import todoHeader from '../components/todoHeader/todoHeader.vue';
import todoMain from '../components/todoMain/todoMain.vue';
import todoFooter from '../components/todoFooter/todoFooter.vue';
import LocalDB from '../components/localDB';

// var Bus = new Vue();


export default {
    data: function() {
        return {
            todos: '',
            isAllChecked: false
        }
    },
    components: {
        todoHeader,
        todoMain,
        todoFooter
    },

    mounted() {
        this.db = new LocalDB('todos');

        this.todos = this.db.get('todos');
        // console.log(this.todos)

        // Bus.$on('stateChange')
    },

    // watch: { 
    //     todos(){
    //         console.log('data changed!!')

    //         this.db.set('todos', this.todos);
    //     }
    // },
    methods: {
        addNewItem(item) {
            this.todos.push(item);

            this.save();

            // console.log('item', item, this.todos)
        },

        deleteTodo(index) {

            this.todos.splice(index, 1);

            this.save();

        },

        todoStatusChange(index, item) {

            if (!item) {
                this.deleteTodo(index);

                return;
            }

            this.todos[index] = item;

            this.save();
            this.checkChanged();
        },

        checkChanged() {

            if (this.todos.every(todo => todo.isDone)) {
                this.isAllChecked = true;
            } else {
                this.isAllChecked = false;
            }

            console.log(this.isAllChecked);

        },

        toggleAllChecked() {

            this.checkChanged();
            
            this.todos.map((todo) => {
                todo.isDone = !this.isAllChecked;

                return todo;
            })

        },

        cleanDone() {
            this.todos = this.todos.filter(todo => !todo.isDone);
            this.save();
        },

        save() {

            this.db.set('todos', this.todos);
        }
    }
}