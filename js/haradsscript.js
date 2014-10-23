
    

        $(document).ready(function() {
            $(function() {
    FastClick.attach(document.body);
});
                $menuLeft = $('.pushmenu-left');
                $nav_list = $('#nav_list');
                 
                $nav_list.click(function() {
                        $(this).toggleClass('active');
                        $('.pushmenu-push').toggleClass('pushmenu-push-toright');
                        $menuLeft.toggleClass('pushmenu-open');
                });
            
            $("#appkarta").css("height", ($(window).height() - 42) + "px");
+		$("#appkarta").css("width", $(window).width() + "px");

            
            
            $('.slider').css("top", $("#header_image").height() + 42 + "px");
   
            $("#ruta1").css("top", $("#header_image").height() + $('.slider').height() +42+ "px");
            
        });

function fixPicSize()
{
var p1 = document.getElementById('left_pic');
var picHeight = p1.height + "px";
var bildHeight = p1.height + 6 + "px";
p1.style.height = picHeight;
p1 = document.getElementById('middle_pic');
p1.style.height = picHeight;
p1 = document.getElementById('right_pic');
p1.style.height = picHeight;
p1 = document.getElementById('bild1');
p1.style.height = bildHeight;
p1 = document.getElementById('bild2');
p1.style.height = bildHeight;
p1 = document.getElementById('bild3');
p1.style.height = bildHeight;
p1 = document.getElementById('slider');
p1.style.height = picHeight;

}
