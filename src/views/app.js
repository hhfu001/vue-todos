import todoHeader from '../components/todoHeader/todoHeader.vue';
import todoMain from '../components/todoMain/todoMain.vue';
import todoFooter from '../components/todoFooter/todoFooter.vue';
import LocalDB from '../components/localDB';

export default {
    data: function() {
        return {
            todos: '',
            isAllDone: false
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
            //按照index删除item
            if (!item) {
                this.deleteTodo(index);

                return;
            }

            this.todos[index] = item;

            this.save();
            
            this.checkAllDone();
        },

        checkAllDone() {

            if (this.todos.every(todo => todo.isDone)) {
                this.isAllDone = true;
            } else {
                this.isAllDone = false;
            }

        },

        toggleAllChecked() {

            this.checkAllDone();
            
            //isDone 取相反值
            this.todos.map((todo) => {
                todo.isDone = !this.isAllDone;

                return todo;
            });

            this.save();

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