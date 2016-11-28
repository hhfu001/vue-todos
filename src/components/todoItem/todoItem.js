export default {
    props: ['todo', 'index'],
    data() { 
        return {
            doneStyle: {
                'text-decoration': 'line-through',
                'color': '#666'
            },
            isEdit: false
        }
    },
    
    methods: {
        handlerChange() { 
            this.todo.isDone = !this.todo.isDone; 

            this.$emit('stateChange', this.index, this.todo);
        },
        edit() { 
            this.isEdit = true;
            this.originText = this.todo.text;
        },
        cancle() { 
            this.isEdit = false;
            this.todo.text = this.originText;
        },

        save() { 
            this.isEdit = false;

            this.$emit('stateChange', this.index, this.todo);
        },

        delTodo() { 
            this.$emit('delTodo', this.index);
        }
    }
}
