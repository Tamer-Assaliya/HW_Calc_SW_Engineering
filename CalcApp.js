//View
var view = document;


//Modal
var model = { controller:controller,opr1:undefined , opr2:undefined, rst:undefined, flag:0,arra:["0","1","2","3","4","5","6","7","8","9","+","-","x","/","√","=",".","⇦","Clear Data"],
    numbers:[1,2,3,4,5,6,7,8,9,0],operators:["+","-","x","/","√","=",".","⇦","Clear Data"], text:"",operand1_flag:true,
    operator_flag:false,
    operand2_flag:false,
    sqrt_flag:false,
    sqrt_flag1:false,
    operand1:[],
    operand2:[],
    operand_for_sqrt :[],
    operator:"",
    result:"",
    count:1,
    string_before_sqrt:"",



    process: function (x) {


        if(x=="√"&&this.sqrt_flag1==false){

            // this. string_before_sqrt =view.getElementById("show").innerText;
            this.text+=String(x);
            this. string_before_sqrt = this.text;
            controller.putToSpan(this.text);                     //   view.getElementById("show").innerText+=x;
            this.sqrt_flag=true;
        }
        else if(this.sqrt_flag==true && (!isNaN((x))||x==".")){
            this.text+=String(x);
            this.count++;
            this.operand_for_sqrt.push(x);
            controller.putToSpan(this.text);
            // view.getElementById("show").innerText+=x;
            //view.getElementById("show").innerText+=x;


        }
        else if(this.sqrt_flag==true && (isNaN((x))&&x!="."&&x!="Clear Data")){
            this.text+=String(x);
            this.operator=String(x);
            var n_s=this.operand_for_sqrt.join("");
            var n=parseFloat(n_s);

            n=Math.sqrt(n);


            while(this.count>0) {
                this. count--;
                this.   operand_for_sqrt.pop();
            }

            this.sqrt_flag=false;



            var n1_s=this.operand1.join("");
            var n1=parseFloat(n1_s);
            switch (this.operator) {
                case "+":this.result=n1+n;break;
                case "-":this.result=n1-n;break;
                case "x":this.result=n1*n;break;
                case "/":this.result=n1/n;break;
                case "=":this.result=n;break;


            }
            this.text=String(this.result);
            controller.putToSpan(this.text);
            // view.getElementById("show").innerText=this.result;
            this.operand2_flag=false;
            this. operand1_flag=true;
            var arr=this.result.toString().split("");
            this. operand1=arr;

        }
        else if(this.operand1_flag==true&&(!isNaN((x))||x==".")){
            this.text+=String(x);
            this. operand1.push(x);
            controller.putToSpan(this.text);
            this.operand1_flag==false;
            // view.getElementById("show").innerText+=x;

        }
        else if(this.operand1_flag==true&&(x=="+"||x=="-"||x=="x"||x=="/")){
            this.text+=String(x);
            this.operand1_flag=false;
            this. operand2_flag=true;
            this. operator=x;
            controller.putToSpan(this.text);
            //  view.getElementById("show").innerText+=x;
        }
        else if(this.operand2_flag==true&&(!isNaN((x))||x==".")){
            this.text+=String(x);
            this.operand2.push((x));
            controller.putToSpan(this.text);
            this.operand2_flag==false;
            // view.getElementById("show").innerText+=x;


        }
        else if(this.operand2_flag==true&&x=="="){

            this.text+=String(x);

            var n1_s=this.operand1.join("");
            var n2_s=this.operand2.join("");

            var n1=parseFloat(n1_s);
            var n2=parseFloat(n2_s);
            switch (this.operator) {
                case "+":this.result=n1+n2;break;
                case "-":this.result=n1-n2;break;
                case "x":this.result=n1*n2;break;
                case "/":this.result=n1/n2;break;

            }


            //    view.getElementById("show").innerText=this.result;
            this.text=String(this.result);
            controller.putToSpan(this.text);

            this. operand2_flag=false;
            this. operand1_flag=true;

            this.clearData();



            var arry=this.result.toString().split("");

            this. operand1=arry;

        }
        else if(x=="Clear Data"){

            this.clear();

            // view.getElementById("show").innerText="";
            this.  operand2_flag=false;
            this.  operand1_flag=true;


        }
        else if(x=="⇦"){

        }







    }, clearData:function () {

        while(this.operand1.length > 0) {
            this.  operand1.pop();
        }
        while(this.operand2.length > 0) {
            this.  operand2.pop();
        }

    }, clear:function(){
        this.clearData();
        this.text="";
        controller.putToSpan(this.text);
    }


};



//Controller
var controller = { view:view, model:model,
    listen:function(){


        var arra=["0","1","2","3","4","5","6","7","8","9","+","-","x","/","√","=",".","Clear Data"];


        document.getElementById(arra[0]).addEventListener('click', function(){model.process(arra[0])});
        document.getElementById(arra[1]).addEventListener('click', function(){model.process(arra[1])});
        document.getElementById(arra[2]).addEventListener('click', function(){model.process(arra[2])});
        document.getElementById(arra[3]).addEventListener('click', function(){model.process(arra[3])});
        document.getElementById(arra[4]).addEventListener('click', function(){model.process(arra[4])});
        document.getElementById(arra[5]).addEventListener('click', function(){model.process(arra[5])});
        document.getElementById(arra[6]).addEventListener('click', function(){model.process(arra[6])});
        document.getElementById(arra[7]).addEventListener('click', function(){model.process(arra[7])});
        document.getElementById(arra[8]).addEventListener('click', function(){model.process(arra[8])});
        document.getElementById(arra[9]).addEventListener('click', function(){model.process(arra[9])});
        document.getElementById(arra[10]).addEventListener('click', function(){model.process(arra[10])});
        document.getElementById(arra[11]).addEventListener('click', function(){model.process(arra[11])});
        document.getElementById(arra[12]).addEventListener('click', function(){model.process(arra[12])});
        document.getElementById(arra[13]).addEventListener('click', function(){model.process(arra[13])});
        document.getElementById(arra[14]).addEventListener('click', function(){model.process(arra[14])});
        document.getElementById(arra[15]).addEventListener('click', function(){model.process(arra[15])});
        document.getElementById(arra[16]).addEventListener('click', function(){model.process(arra[16])});
        document.getElementById(arra[17]).addEventListener('click', function(){model.process(arra[17])});



    },

    putToSpan:function (x) {
        view.getElementById("show").innerText=x;

    }



}
controller.listen();