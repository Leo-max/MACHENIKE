
define(["jquery"], function($){
    //通过ajax下载数据加载到页面上
    function download(){
        $.ajax({
            url: "../data/data.json",
            success: function(obj){
                var navArr = obj.navArr;
                // alert(navArr.length);
                for(var i = 0; i < navArr.length; i++){
                    var childArr = navArr[i].childs;
                    var col = Math.ceil(childArr.length / 6)
                    var node = $(`<li class="footer-li">
                    <a href="#" id = "boxid">${navArr[i].title}</a>
                    <div class="nav-box">
                        <div class="cintainer" >
                        </div>
                    </div>
                </li>`);
                    node.appendTo($(".nav-footer-menu"));
                    for(var j = 0; j < childArr.length; j++){
                            var cols = $(`
                            <ul class="childs-list">
                                
                        </ul>`);
                        $(`
                            <li class="first">
                                <div class="imgbox">
                                    <a href="#"><img src="${childArr[j].pic}" alt=""></a>
                                </div>
                                <div class="title"><a href="#">${childArr[j].title}</a></div>
                                <p class="pirce">${childArr[j].pirce}</p>
                            </li>`).appendTo(cols);
                        cols.appendTo(node.find(".cintainer"))
                    }
                }
            }
        })
    }

    function topNav(){
        $("#boxid").on("mouseenter", function(){
            
        })
    }
   
    return {
        download: download,
        topNav: topNav,
    }
})