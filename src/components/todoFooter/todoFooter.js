export default {
    props: ['todos', 'isAllChecked'],
    data() { 

        return {
            dones: ''
        }
    },
    methods: {
        handlerClick() { 
            // console.log(this.todos, 123)
            this.$emit('cleanDone');
        },
        
        isAllChecked() { 
            this.$emit('isAllChecked');
        }
    },
    computed: { 
        // dones() {
        //     console.log(this.todos, 123)
        //     this.dones = this.todos? this.todos.filter(todo => todo.isDone) : [];
        //     // console.log(this.todos);
        //     return this.dones;
        // }
    },
    watch: { 
        todos() { 
            // todos 值的变化无法监听
            this.dones = this.todos.filter(todo => todo.isDone);
        }
    },
    mounted() {
        console.log(this.todos, 'mounted')
        // this.dones = this.todos.map(function(item) { 
        //     return item.isDone
        // })
        // console.log(this.dones.length);
    }
};