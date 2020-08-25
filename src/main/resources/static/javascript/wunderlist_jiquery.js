$(document).ready(function(){
    //show list theo id user
    var iduser = $('#iduser').text();
    // alert(iduser);
    $('#listicon').load("/showlist/"+iduser,function (){
        $.ajax({
            type: "GET",
            url: "/showlist/"+iduser,
            dataType: "json",
            success: function (response) {
                // var list = $('#listicon').clone();
                $('#listicon').html('');
                for (var i=0; i< response.length;i++)
                {
                    var list = $('.list-icon').eq(0).clone();
                    $(list).css("display","flex");
                    $(list).find('div').html(response[i].name);
                    $(list).find('p').html(response[i].id);
                    $('#listicon').append(list);
                }
            }
        });

    })
    //Đóng mở cửa sổ create -list
    $('.create-list').click(function(){
        $('#addacout').css("display","block");
        $('#create-new-list').attr("style","display:block");
    });
    $('.Cancel').click(function(){
        $('#addacout').css("display","none");
        $('#create-new-list').attr("style","display:none");
    });
    //thêm create list mới vào danh sách create list
    var a1=$('.list-icon').eq(0);
    $('.Save').click(function(){
        if($('#textlist').val()!='')
        {
            $.ajax({
                type: "POST",
                url: "/addlist/"+iduser,
                dataType: "json",
                data : {
                    name :$('#textlist').val(),
                },
                success: function (response) {
                    // alert(response.name);
                    var clr=$(a1).clone();
                    clr.css("display","flex");
                    clr.children('.namefoder').html(response.name);
                    clr.find('p').html(response.id);
                    $('#listicon').append(clr);
                    $('#textlist').val('');
                    $('#addacout').css("display","none");
                    $('#create-new-list').attr("style","display:none");

                }
            });

        }
    });
    $('#textlist').keypress(function(event){

        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
                if($('#textlist').val()!='')
            {

                $.ajax({
                    type: "POST",
                    url: "/addlist/"+iduser,
                    dataType: "json",
                    data : {
                        name :$('#textlist').val(),
                    },
                    success: function (response) {
                        // alert(response.name);
                        var clr=$(a1).clone();
                        clr.css("display","flex");
                        clr.children('.namefoder').html(response.name);
                        clr.find('p').html(response.id);
                        $('#listicon').append(clr);
                        $('#textlist').val('');
                        $('#addacout').css("display","none");
                        $('#create-new-list').attr("style","display:none");

                    }
                });
            }
        }
    });
    //bấm vào ibox hoặc stared thì tiêu đề ở giữa thay đổi theo,click list-icon nào thì màu nền của nó chuyển sang màu xanh dương
    $('.inbox').click(function(){
        $('#inbox1').html($('.inbox').children('text').html());
        $('.starred').removeClass("cssrow");
        $('.list-icon').removeClass("cssrow");
        $(this).addClass("cssrow");
    });
    $('.starred').click(function(){
        $('#inbox1').html($('.starred').children('text').html());
        $('.inbox').removeClass("cssrow");
        $('.list-icon').removeClass("cssrow");
        $(this).addClass("cssrow");
    });
    //show task
    $('#listicon').on('click','.list-icon',function(){
        $('.show').show();
        $('.right').hide();
        idlist1 =$(this).find('p').html();
        $('#inbox1').html($(this).children('div').html());
        $('.list-icon').removeClass("cssrow");
        $(this).addClass("cssrow");
        $('.starred').removeClass("cssrow");
        $('.inbox').removeClass("cssrow");
        $.ajax({
            url : "/showTask/"+$(this).find('p').html(),
            type : "get",
            dataType:"json",
            success : function (result){
                $('#listbody').html('');
                $('#showcompleted').html('');
                $.each (result, function (key, item){
                    if(item.status == 1)
                    {
                        var clr = $('.list-body').eq(0).clone();
                        $(clr).css('display','flex');
                        clr.find('span').html(item.name);
                        clr.find('p').html(item.id);
                        // alert(item.create_day);
                        if(item.create_day != null){
                        clr.find('div').html(item.create_day.slice(0,10));
                        }
                        if(item.star == 1)
                        {
                            var clrstar=$('.redsao').eq(0).clone();
                            clr.find('svg').eq(1).replaceWith(clrstar);
                        }
                        // alert(item.star);
                        $('#listbody').append(clr);
                    }
                    if(item.status == 0)
                    {
                        var clr = $('.showcompleted').eq(0).clone();
                        $(clr).css('display','flex');
                        clr.find('span').html(item.name);
                        clr.find('p').html(item.id);
                        if(result.create_day !=null){
                        clr.find('div').html(item.create_day.slice(0,10));}
                        if(item.star == 1)
                        {
                            var clrstar=$('.redsao').eq(0).clone();
                            clr.find('svg').eq(1).replaceWith(clrstar);
                        }
                        $('#showcompleted').append(clr);
                    }

                });
            }
        });
    });
    //bấm list-toggle để thu nhỏ phần bên trái
    var i=1;
    $('.list-toggle').click(function(){
        if(i==1)
        {$('.left').css("width","40px");
        i=2;}
        else{
            $('.left').css("width","280px");
            i=1;
        }
    });
    // bấm vào user để hiện thị hoặc ẩn cửa sổ acout setting
    $('.user').click(function(event){
        event.stopPropagation();
        $('.list-avarta').toggle();
        $('#bell1').css("display","none");
        $('#masage').css("display",'none');
    })
    var c2=document.getElementsByClassName('.list-avatar');
    $('body').click(function(e){
        if(e.target!=c2){
           $('.list-avarta').css("display",'none');
       }
    })
    //
    var c3=document.getElementsByClassName('bell')[0];
    $('body').click(function(e){
       if(e.target!=c3){
           $('#bell1').css("display",'none');
       }
    })
    //
    var c4=document.getElementsByClassName('conversationsrtl-flip')[0];
    $('body').click(function(e){
       if(e.target!=c4){
           $('#masage').css("display",'none');
       }
    })
    //bấm vào acount seting để hiện cửa sổ acount
    $('.list-avarta').children('ul').children('li:eq(2)').click(function(){
        $('.Account-Setting').css("display","flex");
        $('#create-new-list').css("display","flex");
        $('.list-avarta').css("display","none");
        $('.inner-account').css("display","block");
    });
    //bấm vào acount để hiện acount trên cửa sổ
    $('#acountss').click(function(){
        $('.inner-account').css("display","block");
        $('.inner-general').css("display","none")
    })
    //bấm vào general để hiện inner-general
    $('#Generals').click(function(){
        $('.inner-account').css("display","none");
        $('.inner-general').css("display","flex")
    })
    //bấm vào done để tắt màn hình acount
    $('#done').click(function(){
        $('.Account-Setting').css("display","none");
        $('#create-new-list').css("display","none");
    })
    //bấm vào show để ẩn phần xóa
    $('.show').click(function(){
        $('#showcompleted').toggle();
    })
    $('#showcompleted').html('');
    $('#listbody').html('');
    //bấm enter để tạo 1 list-body mới
    // var a=$('.list-body11');
    $('#inputadd').keypress(function(event){

        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
                if($('#inputadd').val()!='')
            {
                $.ajax({
                    url : "/createTask/"+idlist1,
                    type : "post",
                    dataType:"json",
                    data : {
                        name : $('#inputadd').val(),
                        star:0,
                        status:1
                    },
                    success : function (result){
                        var clr=$('.list-body').eq(0).clone();
                        clr.css('display','flex');
                        clr.children('span').html($('#inputadd').val());
                        clr.find('p').html(result.id);
                        $('#listbody').prepend(clr);
                        $('#inputadd').val('');
                    }
                });

            }
        }
    });
    //bấm vào task-check để chuyển list-body từ trên xuống dứoi
    // var b=$('.showcompleted:eq(0)')
    $('#listbody').on('click','.task-check',function(event){
        // event.stopPropagation();
        title1 = $(this).parent().children('span').html();
        $.ajax({
            url : "/updateTask/"+$(this).parent().find('p').html()+"/0",
            type : "put",
            dataType:"json",
            success : function (result){
                $('.title:eq(0)').children('div').html(title1);
                $('.title:eq(0)').children('span:eq(0)') .html($('#notich').html());
            }
        });
        var clr=$('.showcompleted').eq(0).clone();
        clr.css('display','flex');
        clr.find('div').html($(this).parent().find('div').html());
        $('#showcompleted').prepend(clr);
        $(this).parent().remove();
        clr.children('span').html($(this).parent().children('span').html());
        clr.find('p').html($(this).parent().find('p').html());
        clr.find('svg').eq(1).replaceWith($(this).parent().find('svg').eq(1));
    })
    //bấm vào task-checked để đẩy phần tử từ dưới lên
    var c=$('.list-body:eq(0)')
    $('#showcompleted').on('click','.task-checked',function(event){
        // event.stopPropagation();
        title1 = $(this).parent().children('span').html();
        $.ajax({
            url : "/updateTask/"+$(this).parent().find('p').html()+"/1",
            type : "put",
            dataType:"json",
            success : function (result){
                $('.title:eq(0)').children('div').html(title1);
                $('.title:eq(0)').children('span:eq(0)') .html($('#iddetail').html());
            }
        });
        var clr=$(c).clone();
        clr.css('display','flex');
        clr.find('div').html($(this).parent().find('div').html());
        $('#listbody').append(clr);
        $(this).parent().remove();
        clr.children('span').html($(this).parent().children('span').html());
        clr.find('p').html($(this).parent().find('p').html());
        clr.find('svg').eq(1).replaceWith($(this).parent().find('svg').eq(1));
    })
    //Đổi sao
    $('#listbody').on('click','.list-body .svg2,.redsao',function(event){
        // event.stopPropagation();
        star1 =$(this);
        $.ajax({
            url : "/updateStar/"+$(this).parent().find('p').html(),
            type : "put",
            dataType:"json",
            success : function (result){
                // alert(result);
                if(result.star == 1)
                {
                    var clr = $('.redsao').eq(0).clone();
                    star1.replaceWith(clr);
                    var clr1 = $('.redsao').eq(0).clone();
                    $('.title:eq(0)').find('span').eq(1).find('svg').replaceWith(clr1);
                    $('.title:eq(0)').find('span').eq(1).css('margin-top','auto');
                }
                if(result.star == 0) {
                    var clr = $('.svg2').eq(0).clone();
                    star1.replaceWith(clr);
                    var clr1 = $('.svg2').eq(0).clone();
                    $('.title:eq(0)').find('span').eq(1).find('svg').replaceWith(clr1);
                    $('.title:eq(0)').find('span').eq(1).css('margin-top','20px');
                }
            }
        });
        // alert("hello");
    })
    //đổi sao bên dưới
    $('#showcompleted').on('click','.showcompleted .svg2,.redsao',function(event){
        star1 =$(this);
        // $('.title:eq(0)').find('span').eq(1).find('svg').replaceWith($(this).clone());
        // event.stopPropagation();
        $.ajax({
            url : "/updateStar/"+$(this).parent().find('p').html(),
            type : "put",
            dataType:"json",
            success : function (result){
                // alert(result);
                if(result.star == 1)
                {
                    var clr = $('.redsao').eq(0).clone();
                    star1.replaceWith(clr);
                    var clr1 = $('.redsao').eq(0).clone();
                    $('.title:eq(0)').find('span').eq(1).find('svg').replaceWith(clr1);
                    $('.title:eq(0)').find('span').eq(1).css('margin-top','auto');
                }
                if(result.star == 0) {
                    var clr = $('.svg2').eq(0).clone();
                    star1.replaceWith(clr);
                    var clr1 = $('.svg2').eq(0).clone();
                    $('.title:eq(0)').find('span').eq(1).find('svg').replaceWith(clr1);
                    $('.title:eq(0)').find('span').eq(1).css('margin-top','20px');

                }
            }
        });
        // alert("hello");
    })

   //click vào list-body để thì nền chuyển màu xanh
   $('#listbody').on('click','.list-body',function(){
       // star_now = $(this).find('svg').eq(1);
       task_now = $(this);
       nameTask=$(this).find('span');
       $('#create_day').val($(this).find('div').html().slice(0,10));
       date1=$(this).find('div');
       idtask=$(this).find('p').html();
       $('.showcompleted').css("background-color","#FFF");
       $('.list-body').css("background-color","#FFF");
       $(this).css("background-color","#E0EEFA");
       $('.title:eq(0)').find('input').val($(this).children('span').html());
       $('.title:eq(0)').children('span:eq(0)') .html($('#iddetail').html());
       star2 = $('.title:eq(0)').find('span').eq(1).find('svg');
       $.ajax({
           url : "/getTask/"+$(this).find('p').html(),
           type : "get",
           dataType:"json",
           success : function (result){
               // alert(result);
               if(result.star == 1)
               {
                   var clr = $('.redsao').eq(0).clone();
                   star2.replaceWith(clr);
                   $('.title:eq(0)').find('span').eq(1).css('margin-top','auto');
               }
               if(result.star == 0) {
                   var clr = $('.svg2').eq(0).clone();
                   star2.replaceWith(clr);
                   // star2.parent().css('margin-top','20px');
                   $('.title:eq(0)').find('span').eq(1).css('margin-top','20px');
               }
               $('.addnote').val(result.note);
               // $('#create_day').val(result.create_day);
               if(result.remind !=null){
               $('#remind').val(result.remind.slice(0,10));}
               else $('#remind').val('');
           }
       });
       //
       $.ajax({
           url : "/showComment/"+$(this).find('p').html(),
           type : "get",
           dataType:"json",
           success : function (result){
               $('.spaceright').html('');
               $.each (result, function (key, item){
                   var copycoment=$('.addcoment:eq(0)').clone();
                   copycoment.css('display','flex');
                   copycoment.find('p').html(item.id);
                   $('.spaceright').append(copycoment);
                   $(copycoment).children('div').children('div').html(item.title);
               });
           }
       });
       //
       $.ajax({
           url : "/getFile/"+$(this).find('p').html(),
           type : "get",
           dataType:"json",
           success : function (result){
               $('#right_file').html('');
               $.each (result, function (key, item){
                   var copyfile=$('.right_file:eq(0)').clone();
                   copyfile.css('display','flex');
                   $('#right_file').append(copyfile);
                   $(copyfile).children('span').html(item['name']);
                   $(copyfile).children('div').html(item['id']);
               });
           }
       });
       //
       $.ajax({
           url : "/showSubTask/"+idtask,
           type : "get",
           dataType:"json",
           success : function (result){
               $('#right_subtask').css("display","flex");
               $('#right_subtask').html('');
               $.each (result, function (key, item){
                   var clr = $('.subtask').eq(0).clone();
                   if(item.status == 0)
                   {
                       var c = $('.detail-checked').eq(0).clone();
                       $(clr).find('.detail-check').replaceWith(c);
                   }
                   clr.css("display","flex");
                   clr.find('div').html(item.id);
                   clr.find('span').eq(1).html(item.name);
                   $('#right_subtask').append(clr);
               });
           }
       });

   });
   $('#showcompleted').on('click','.showcompleted',function(){
       task_now = $(this);
       nameTask=$(this).find('span');
       date1=$(this).find('div');
       $('#create_day').val($(this).find('div').html().slice(0,10));
       // alert($(this).find('div').html());
       idtask=$(this).find('p').html();
        $('.list-body').css("background-color","#FFF");
        $('.showcompleted').css("background-color","#FFF");
        $(this).css("background-color","#E4E9E4");
        $('.title:eq(0)').find('input').val($(this).children('span').html());
        $('.title:eq(0)').children('span:eq(0)') .html($('#notich').html());
        star2 = $('.title:eq(0)').find('span').eq(1).find('svg');
        $.ajax({
           url : "/getTask/"+$(this).find('p').html(),
           type : "get",
           dataType:"json",
           success : function (result){
               // alert(result);
               if(result.star == 1)
               {
                   var clr = $('.redsao').eq(0).clone();
                   star2.replaceWith(clr);
                   $('.title:eq(0)').find('span').eq(1).css('margin-top','auto');
               }
               if(result.star == 0) {
                   var clr = $('.svg2').eq(0).clone();
                   star2.replaceWith(clr);
                   // star2.parent().css('margin-top','20px');
                   $('.title:eq(0)').find('span').eq(1).css('margin-top','20px');
               }
               $('.addnote').val(result.note);
               if(result.remind != null){
               $('#remind').val(result.remind.slice(0,10));}
               else $('#remind').val('');

           }
        });
        //
       $.ajax({
           url : "/showComment/"+$(this).find('p').html(),
           type : "get",
           dataType:"json",
           success : function (result){
               $('.spaceright').html('');
               $.each (result, function (key, item){
                   var copycoment=$('.addcoment:eq(0)').clone();
                   copycoment.css('display','flex');
                   copycoment.find('p').html(item.id);
                   $('.spaceright').append(copycoment);
                   $(copycoment).children('div').children('div').html(item.title);
               });
           }
       });
       $.ajax({
           url : "/getFile/"+$(this).find('p').html(),
           type : "get",
           dataType:"json",
           success : function (result){
               $('#right_file').html('');
               $.each (result, function (key, item){
                   var copyfile=$('.right_file:eq(0)').clone();
                   copyfile.css('display','flex');
                   $('#right_file').append(copyfile);
                   $(copyfile).children('span').html(item['name']);
                   $(copyfile).children('div').html(item['id']);
               });
           }
       });
       //
       $.ajax({
                  url : "/showSubTask/"+idtask,
                  type : "get",
                  dataType:"json",
                  success : function (result){
                      $('#right_subtask').css("display","flex");
                      $('#right_subtask').html('');
                      $.each (result, function (key, item){
                          var clr = $('.subtask').eq(0).clone();
                          if(item.status == 0)
                          {
                              var c = $('.detail-checked').eq(0).clone();
                              $(clr).find('.detail-check').replaceWith(c);
                          }
                          clr.css("display","flex");
                          clr.find('div').html(item.id);
                          clr.find('span').eq(1).html(item.name);
                          $('#right_subtask').append(clr);
                      });
                  }
              });
   });
//Bấm phải chuột vào list-body để hiện click-right3;
$("#listbody").contextmenu(function(event){
    event.preventDefault();
    $('.Mouse-right1').css("display","none");
    $('.Mouse-right2').css("display","none");
    $('.Mouse-right4').css("display","none");
    $('.list-avarta').css('display','none');
    $('.Mouse-right3').css("display","block");
    var x=event.pageX;
    var y=event.pageY;
    $('.Mouse-right3').css("top",y+"px");
    $('.Mouse-right3').css("left",x+"px");
})
//bấm body để ẩn các chuột phải
$('body').click(function(){
    // $('.list-avarta').css('display','none');
    $('.Mouse-right3').css("display","none");
    $('.Mouse-right1').css("display","none");
    $('.Mouse-right2').css("display","none");
    $('.Mouse-right4').css("display","none");
});
//click phải hiển thị mouse right 2
$("#listicon").contextmenu(function(event){
    $('.list-avarta').css('display','none');
    $('.Mouse-right4').css("display","none");
    $('.Mouse-right3').css("display","none");
    $('.Mouse-right1').css("display","none");
    event.preventDefault();
    $('.Mouse-right2').css("display","block");
    var x=event.pageX;
    var y=event.pageY;
    $('.Mouse-right2').css("top",y+"px");
    $('.Mouse-right2').css("left",x+"px");
})
//click phải hiển thị mouse right 1
$("#ibox_starred").contextmenu(function(event){
    $('.list-avarta').css('display','none');
    $('.Mouse-right4').css("display","none");
    $('.Mouse-right3').css("display","none");
    $('.Mouse-right2').css("display","none");
    $('.Mouse-right1').css("display","block");
    var x=event.pageX;
    var y=event.pageY;
    $('.Mouse-right1').css("top",y+"px");
    $('.Mouse-right1').css("left",x+"px");
    event.preventDefault();
})
//click phải hiển thị mouse right 4
$("#showcompleted").contextmenu(function(event){
    event.preventDefault();
    $('.list-avarta').css('display','none');
    $('.Mouse-right3').css("display","none");
    $('.Mouse-right2').css("display","none");
    $('.Mouse-right1').css("display","none");
    $('.Mouse-right4').css("display","block");
    var x=event.pageX;
    var y=event.pageY;
    $('.Mouse-right4').css("top",y+"px");
    $('.Mouse-right4').css("left",x+"px");
})
//click để xóa 1 create list
$('#listicon').on('contextmenu','.list-icon',function(){
    dele2=$(this);
    idlist=$(dele2).find('p').html();
    $('#delete3').click(function(){
        $.ajax({
            type: "DELETE",
            url: "/deletelist/"+idlist,
            dataType: "json",
            success: function (response) {
                // dele2.remove();
            }
        });
        dele2.remove();
    });
})  
//click để xóa 1 list-body
$('#listbody').on("contextmenu",".list-body",function(){
    dele3=$(this);
    $('#delete1').click(function(){
        $.ajax({
            url : "/deleteTask/" + dele3.find('p').html(),
            type : "delete",
            dataType:"text",
            success : function (result){
            }
        });
        dele3.remove();
    });
})
//click để xóa 1 showcompleted
$("#showcompleted").on("contextmenu",".showcompleted",function(){
    dele4=$(this);
    $('#delete2').click(function(){
            $.ajax({
                url : "/deleteTask/" + dele4.find('p').html(),
                type : "delete",
                dataType:"text",
                success : function (result){
                }
            });
        dele4.remove();
    });
})
//bấm close-right để ẩn cửa sổ phải
$('.close-right').click(function(){
    $('.right').css("display","none");
});
//click đúp vào list-body để hiển thị cột bên phải
$('#listbody').on("dblclick",".list-body",function(){
    $('.right').css("display","flex");
});
//click đúp vào  showcompleted để hiển thị cột bên phải
$("#showcompleted").on("dblclick",".showcompleted",function(){
    $('.right').css("display","flex");
});
//bấm inputright tạo avatacoment
$('.inputright').keypress(function(event){

    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
            if($('.inputright').val()!='')
        {
            $.ajax({
                url : "/addComment/"+ idtask,
                type : "post",
                dataType:"json",
                data : {
                    title :$('.inputright').val() ,
                },
                success : function (result){
                    var copycoment=$('.addcoment:eq(0)').clone();
                    copycoment.css("display","flex");
                    copycoment.find('p').html(result.id);
                    $('.spaceright').append(copycoment);
                    $(copycoment).children('div').children('div').html(result.title);
                    $('.inputright').val('');
                }
            });
        }
    }
});
// update subtask
    $('.addnote').eq(0).keypress(function(event){

        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            if($('.addnote').val()!='')
            {
                $.ajax({
                    url : "/updateNote/"+idtask,
                    type : "put",
                    dataType:"json",
                    data : {
                        note : $(this).val(),
                    },
                    success : function (result){
                        $('.addnote').eq(0).val(result.note);
                    }
                });
            }
        }
    });
    //update nameTask
    $('#change_task').eq(0).keypress(function(event){

        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            if($('#change_task').val()!='')
            {
                $.ajax({
                    url : "/updateName/"+idtask,
                    type : "put",
                    dataType:"json",
                    data : {
                        name : $(this).val(),
                    },
                    success : function (result){
                        $(nameTask).html(result.name);
                        $('#change_task').val('');
                        $('#change_task').blur();
                    }
                });
            }
        }
    });
//hover lên addcoment để hiện dấu x để xóa
// $('.spaceright').on('click','.addcoment',function(){
//     $('.deletespace').css("display","block");
//})
$('.spaceright').on('click','.addcoment .deletespace',function(){
    $.ajax({
        url : "/deleteComment/"+$(this).parent().find('p').html(),
        type : "delete",
        dataType:"json",
        success : function (result){
        }
    });
    $(this).parent().remove();
})
//bấm chuông
$('.bell').click(function(){
    $('#bell1').toggle();
   
})
//bấm vào masage
$('.conversationsrtl-flip').click(function(){
    $('#masage').toggle();
})
//bấm vào sort
$('#iconsorrt').click(function(){
    $('#sort1').slideToggle();
    $('#more1').css("display","none");
})
//bấm vào more
$('#moreicon').click(function(e){
    $('#more1').slideToggle();
    $('#sort1').css("display","none");
})
//them create_day
    $('#create_day').change(function (){
        var d= new Date($(this).val());
        // alert(d);
        $.ajax({
            url : "/updateCreate_day/"+idtask,
            type : "put",
            dataType:"json",
            data : {
                create_day: d,
            },
            success : function (result){
            }
        });
        $(date1).html($(this).val());
    })
//them remind
    $('#remind').change(function (){
        var d= new Date($(this).val());
        // alert(d);
        $.ajax({
            url : "/updateRemind/"+idtask,
            type : "put",
            dataType:"json",
            data : {
                remind: d,
            },
            success : function (result){
            }
        });
    })
    //tìm kiếm
    $('#searchTask').change(function (){
        // alert("hello");
        $('.right').hide();
        $('.show').hide();
        $('#showcompleted').html('');
        $.ajax({
            url : "/Search/"+$(this).val(),
            type : "get",
            dataType:"json",
            success : function (result){
                $('#listbody').html('');
                $.each (result, function (key, item){
                    if(item.status == 1)
                    {
                        var clr = $('.list-body').eq(0).clone();
                        $(clr).css('display','flex');
                        clr.find('span').html(item.name);
                        clr.find('p').html(item.id);
                        if(item.create_day != null){
                        clr.find('div').html(item.create_day.slice(0,10));}
                        if(item.star == 1)
                        {
                            var clrstar=$('.redsao').eq(0).clone();
                            clr.find('svg').eq(1).replaceWith(clrstar);
                        }
                        $('#listbody').append(clr);
                    }
                });
            }
        });
        $(this).val('');
    })
//Xoa file
    $('#right_file').on('click','.deletespace_file',function() {
        $.ajax({
            url: "/DeleteFile/"+ $(this).parent().find('div').html(),
            dataType: 'json',
            type: 'delete',

        });
        $(this).parent().remove();
    })
//Them file
    $('.dropbox').click(function (){
        var file_data = $('.addtype').prop('files')[0];
        console.log(file_data.name);
        $.ajax({
            url: "/addFile/"+ idtask,
            dataType: 'json',
            data : {
                name: file_data.name,
            },
            type: 'post',
            success: function (res) {
                var copyfile=$('.right_file:eq(0)').clone();
                copyfile.css('display','flex');
                // copyfile.css('justify-content','space-between');
                $('#right_file').append(copyfile);
                $(copyfile).children('span').html(res['name']);
                $(copyfile).children('div').html(res['id']);
                $('.addtype').val('');
            }
        });
    })
    //bams detail-check
    $('.title:eq(0)').on('click','.detail-check',function() {
        $.ajax({
            url : "/updateTask/"+idtask+"/0",
            type : "put",
            dataType:"json",
            success : function (result){
            }
        });
        var clr = $('.showcompleted').eq(0).clone();
        task_now.attr('class','showcompleted');
        console.log(clr);
        $(task_now).find('svg').eq(0).replaceWith(clr.find('svg').eq(0));
        $('#showcompleted').prepend(task_now);
        var c =$('.detail-checked').eq(0).clone();
        $(this).replaceWith(c);
        // alert("hello");
    })
    $('.title:eq(0)').on('click','.detail-checked',function() {
        $.ajax({
            url : "/updateTask/"+idtask+"/1",
            type : "put",
            dataType:"json",
            success : function (result){
            }
        });
        var clr = $('.list-body').eq(0).clone();
        task_now.attr('class','list-body');
        $(task_now).find('svg').eq(0).replaceWith(clr.find('svg').eq(0));
        $('#listbody').append(task_now);
        var c =$('.detail-check').eq(0).clone();
        $(this).replaceWith(c);
        // alert("hello");
    })
    //change_star right
    $('.title:eq(0)').on('click','.svg2',function() {
        // alert("hello");
        $.ajax({
            url : "/updateStar/"+idtask,
            type : "put",
            dataType:"json",
            success : function (result){

            }
        });
        var c1 = $('.redsao').eq(0).clone();
        $(task_now).find('svg').eq(1).replaceWith(c1);
        var c = $('.redsao').eq(0).clone();
        $(this).replaceWith(c);
        $('#change_star').css('margin-top','auto');
    })
    $('.title:eq(0)').on('click','.redsao',function() {
        $.ajax({
            url : "/updateStar/"+idtask,
            type : "put",
            dataType:"json",
            success : function (result){

            }
        });
        var c1 = $('.svg2').eq(0).clone();
        $(task_now).find('svg').eq(1).replaceWith(c1);
        var c = $('.svg2').eq(0).clone();
        $(this).replaceWith(c);
        $('#change_star').css('margin-top','20px');
    })
    // add task
    $('.addname').keypress(function(event){

        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            if($('.addname').val()!='')
            {
                $.ajax({
                    url : "/createSubTask/"+idtask,
                    type : "post",
                    dataType:"json",
                    data : {
                        name : $('.addname').val(),
                        status:1
                    },
                    success : function (result){
                        $('#right_subtask').css("display","flex")
                        // var clr = $('.subtask').eq(0).clone();
                        clr.css("display","flex");
                        clr.find('div').html(result.id);
                        $('#right_subtask').append(clr);
                        $('.addname').val('');
                    }
                });
                // $('#right_subtask').css("display","flex")
                // var clr = $('.subtask').eq(0).clone();
                // clr.css("display","flex");
                var clr = $('.subtask').eq(0).clone();
                clr.find('span').eq(1).html($(this).val());
                // $('#right_subtask').append(clr);
                // $('.addname').val('');
            }
        }
    })
    //delete subtask
    $('#right_subtask').on('click','.deletespace_file',function() {
        $.ajax({
            url : "/deleteSubTask/"+$(this).parent().find('div').html(),
            type : "delete",
            dataType:"json",
        });
        $(this).parent().remove();
    })
    //doi status subtask
    $('#right_subtask').on('click','.detail-checked',function() {
        var c=$('.detail-check').eq(0).clone();
        $.ajax({
            url : "/updateSubTask/"+$(this).parent().parent().find('div').html()+"/1",
            type : "put",
            dataType:"json",
        });
        $(this).replaceWith(c);
    })
    $('#right_subtask').on('click','.detail-check',function() {
        var c=$('.detail-checked').eq(0).clone();
        $.ajax({
            url : "/updateSubTask/"+$(this).parent().parent().find('div').html()+"/0",
            type : "put",
            dataType:"json",
        });
        $(this).replaceWith(c);

    })

        $('.right').hide();
$('#showcompleted').hide();

});//đóng load
