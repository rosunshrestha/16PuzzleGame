$(document).ready(function(){
    $("button").click(function(){
            $('.main-wrapper').empty()
            a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
            winning_state = ["box1","box2","box3","box4","box5","box6","box7","box8","box9","box10","box11","box22","box13","box14","box15","box16"]
            current_state =[]
            for(var i=0;i<15;i++) {
                var box_no = a.splice(Math.floor(Math.random() * (15-i)),1)
                $(".main-wrapper").append("<div class='box' id='box"+box_no+"'>"+box_no+"</div>")
                current_state.push("box"+box_no);
            }
            current_state.push("box16");
            $(".main-wrapper").append("<div class='box box_none' id='box16'></div>")

            $(".box").click(function() {
                    selected = jQuery.inArray( this.id, current_state)
                    empty = jQuery.inArray( "box16", current_state)
                    if(checkEligilibility(selected,empty))
                    {
                        current_state[selected] = "box16"
                        current_state[empty] = this.id
                        $("#box16").empty()
                        $("#box16").removeClass("box_none")
                        $("#box16").text($("#"+this.id).text())
                        $("#"+this.id).empty()
                        $("#"+this.id).addClass("box_none")
                        var temp = this.id
                        $("#"+this.id).attr("id","box0")
                        $("#box16").attr("id",temp)
                        $("#box0").attr("id","box16")
                        if(current_state == winning_state)
                            alert("You Win")

                    }
                    else
                    {
                        alert("Illegal Move");
                    }

                }
            );
        }
    );



});


function checkEligilibility(moveElement,emptyElement)
{
    distance =Math.abs(parseInt(moveElement)-parseInt(emptyElement))
    if(distance==1 || distance==4)
        return true
    else
        false
}
