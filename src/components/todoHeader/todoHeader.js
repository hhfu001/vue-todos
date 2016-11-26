export default {
    data: function () {
        return {
            message: ''
        }
    },
    methods: {
        handlerKeyUp() { 
            const value = this.message;
            
            let newTodoItem = {
                text: value,
                isDone: false
            };
            
            this.$emit('addItem', newTodoItem);
            // console.log(newTodoItem, 123);
            this.message = '';

        }
    }
}