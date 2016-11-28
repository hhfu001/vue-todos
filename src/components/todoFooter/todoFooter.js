export default {
    props: ['todos'],
    data() { 

        return {
            isAllChecked: false
        }
    },
    methods: {
        handlerClick() { 
            
            this.$emit('cleanDone');
        },
        
        toggleAllChecked() { 
            this.$emit('allCheckChanged');
        }
    },
    computed: { 
        dones() {

            const arr = this.todos? this.todos.filter(todo => todo.isDone) : [];
            
            this.isAllChecked = arr.length && arr.length === this.todos.length;
            
            return arr;
        }
    }
    // watch: { 
    //     todos() { 
    //         // todos 值的变化无法监听
    //         this.dones = this.todos.filter(todo => todo.isDone);
    //     }
    // },
    // mounted() {
    //     console.log(this.todos, 'mounted')
    //     // this.dones = this.todos.map(function(item) { 
    //     //     return item.isDone
    //     // })
    //     // console.log(this.dones.length);
    // }
};