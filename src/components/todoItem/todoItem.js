export default {
    props: ['todo', 'index'],
    data() { 
        return {
            done: {
                'text-decoration': 'line-through',
                'color': '#666'
            }
        }
    },
    
    methods: {
        handlerChange() { 
            this.todo.isDone = !this.todo.isDone; 

            this.$emit('stateChange', this.index, this.todo);
        },

        delTodo() { 
            this.$emit('delTodo', this.index);
        }
    }
}
