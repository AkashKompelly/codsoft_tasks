function add(num) {
  $(".display").val($(".display").val() + num);
}

function claculate(){
    $(".display").val(eval($(".display").val()));
}

function c(){
    $(".display").val('');
}

function cut(){
    let val = $(".display").val();

    $(".display").val(val.substring(0, val.length -1))
}