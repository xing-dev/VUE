let Vue;

class router {
    constructor(options){
        this.$options=options;
    }
}
//外层vue.use  执行install，传入vue的构造函数
router.install = function (_vue){
    Vue=_vue;
    Vue.minix({
        beforeCreate(){

        }
    })
}

export default router