export default {
    data: function () {
        return {
            message: ''
        }
    },
    methods: {
        handlerKeyUp() { 
            const value = this.message;

            if (!value.length){ 
                return false;
            }
            
            let newTodoItem = {
                text: value,
                isDone: false
            };
            
            this.$emit('addItem', newTodoItem);
            
            this.message = '';

        }
    }
}