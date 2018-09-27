window.onload=function(){
    new Vue({
        el:'#my',
        data:{
          msg:"hollor work",
            html:'<span>123</span>'
        },
        methods:{
          show1() {
            console.log('111');
          },
            show2:function(){
            console.log('222');
        },
            show3(e) {
                console.log('333');
                //阻止时间冒泡
                e.stopPropagation();

            },
            open(e){
                console.log('open');
                //取消事件默认动作
                e.preventDefault();
                e.stopPropagation();
            }
        }
    });
}