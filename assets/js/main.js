//Check off todo items by clicking
$("ul").on ("click", "li", function(){
    $(this).toggleClass("checkedOff");
});

//Click on x to delete an entry
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(400, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//add new items to list
$("input[type ='text']").keypress(function(event){
    if(event.which === 13){
        //store new todo text from input
        var newTodoText = $(this).val();
        //clear input
        $(this).val("");
        //add to todo list
        $("ul").append("<li><span><i class=\"far fa-trash-alt\"></i></span> "+ newTodoText + "</li>"); 
    }
});

$("#addNew").click(function(){
    $("input[type ='text']").fadeToggle();
});