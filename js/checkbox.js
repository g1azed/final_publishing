// $("#num0").prop("checked", true);   // 체크박스 체크 
// $("#num0").prop("checked", false);   // 체크박스 해제 

// // name이 number인 체크박스에서 체크된 요소 선택
// $("#num0").each(function() {
//     var checkVal = $(this).val(); // 체크된 값의 value값 가져오기
//     console.log(checkVal);
// });



let resultNum = 0;
let m1 = document.querySelectorAll('.b1');
let m0 = document.querySelectorAll('.b0');

var check = function () {
resultNum = resultNum + Number(this.value);
console.log(resultNum);
}

m1.forEach((target) => target.addEventListener("click", check));
m0.forEach((target) => target.addEventListener("click", check));

$(document).ready(function (){
    $("#b1").click(function () {
        var imageUrl = "./img/potato/face_2.png";
        $("#potato_face").css("background-image", "url(" + imageUrl + ") ")
        .css('background-repeat', 'no-repeat')
        .css("background-size", "contain");

    });
    $("#b2").click(function () {
        var imageUrl = "./img/potato/body_22.png";
        $("#potato_body").css("background-image", "url(" + imageUrl + ") ")
        .css('background-repeat', 'no-repeat')
        .css("background-size", "contain");

    });
    $("#b3").click(function () {
        var imageUrl = "./img/potato/face_3.png";
        $("#potato_face").css("background-image", "url(" + imageUrl + ") ")
        .css('background-repeat', 'no-repeat')
        .css("background-size", "contain");

    });
    $("#b4").click(function () {
        var imageUrl = "./img/potato/face_4.png";
        $("#potato_face").css("background-image", "url(" + imageUrl + ") ")
        .css('background-repeat', 'no-repeat')
        .css("background-size", "contain");

    });
    $("#b5").click(function () {
        var imageUrl = "./img/potato/body_33.png";
        $("#potato_body").css("background-image", "url(" + imageUrl + ") ")
        .css('background-repeat', 'no-repeat')
        .css("background-size", "cover");

    });
    $("#b6").click(function () {
        var imageUrl = "./img/potato/face_5.png";
        $("#potato_face").css("background-image", "url(" + imageUrl + ") ")
        .css('background-repeat', 'no-repeat')
        .css("background-size", "100%");

    });


})

