// function img(){
//     if( i == 1){
//         i++;
//         document.getElementById("img"+ i).src = "./img/photo_gallery/IMG_0003.jpeg";
//     }

// }

// $(document).ready(function (){
//     var bigPic = document.querySelector("#main_img");            //큰 사진
//     var smallPics = document.querySelectorAll(".img1");    //작은 사진(여러개)

//     for (var i = 0; i < smallPics.length; i++) {
//         smallPics[i].addEventListener("click", changepic);  //이벤트 처리
//         /* 
//         onclick으로 하면 하나의 요소에 하나의 이벤트만 사용가능
//         smallPics[i].onclick = changepic;
//         */
//     }

//     function changepic() {   //사진 바꾸는 함수
//         var smallPicAttribute = this.getAttribute("src");
//         bigPic.setAttribute("src", smallPicAttribute);
//     }
// })


// document.getElementsByClassName("img1") = function(){

// }

// var img1 = document.getElementsByClassName("");
// function change(){
//     $(".img1").click(function(){
//         $("#move_left") = $(".img1");
//     })

// }
// $(document).ready(function(){
//     function click(){
//         document.getElementById("move_left").src = "./img/photo_gallery/IMG_0739.jpeg";
//     }
// })

$('.small').click(function(){
	$("#move_left").src = $(".img1").src;
});



// function change(){
//     document.getElementsByClassName("small").onclick(function(){
//         document.getElementById("move_left").src = "./img/photo_gallery/IMG_0739.jpeg";
//     });
//     // console.log(document.getElementsByClassName("img1"));

// }

// $(document).ready(function(){
//     $(".img1").click(function(){
//         $("#move_left") == $(".img1"); 
//     });
// });





