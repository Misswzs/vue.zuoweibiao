new Vue({
    el:'#pp',
    data:{
        lists:'',
        lists1:'',
        lists2:'',
        lists3:'',
        color:{border:'1px solid #e6e6e6'}


    },
    methods:{
        ao:function(){
            this.color.border='1px solid black'
        }
    },
    mounted:function(){
        //发送get请求
        this.$http.get('data.json').then(function(res){
            /* document.write(res.body);*/
            this.lists=res.body[0];
            this.lists1=res.body[1];
            this.lists2=res.body[2];
            this.lists3=res.body[3];
            console.log(this.lists);
        },function(){
            console.log('请求失败处理');
        });
    }
})


//new Vue({
//    el:'#pp',
//    data:{
//        lists:'',
//        color:{border:'1px solid #e6e6e6'}
//
//
//    },
//    methods:{
//        ao:function(i,n){
//            this.color.border='1px solid black';
//            this.lists[i][n].bool=!this.lists[i][n].bool;
//        }
//    },
//    mounted:function(){
//        //发送get请求
//        this.$http.get('data.json').then(function(res){
//            /* document.write(res.body);*/
//            this.lists=res.body;
//
//            console.log(res.body);
//        },function(){
//            console.log('请求失败处理');
//        });
//    }
//})

