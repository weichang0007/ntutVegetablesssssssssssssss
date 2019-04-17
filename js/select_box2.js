var temp = Array();

$(document).ready(function(){

	function make_select_opt() {

		var sel ='                <div id="sec" class="seClass">                    <ul class="A" id="ss">                        <li >                            享用菜色：                            <select name="select_plate" class="cs-select cs-skin-border">                                <option value="0">無</option>                                <optgroup label="-----夏季菜單-----">                                <option value="2">薑黃花椰菜</option>                                <option value="3">低油薑絲清炒菠菜</option>                                <option value="4">炒空心菜</option>                                <option value="5">麻油甜椒龍鬚菜</option>                                <option value="6">辣油涼拌茄子</option>                                <option value="7">干煸四季豆</option>                                <optgroup label="-----冬季菜單-----">                                <option value="9">滑炒大白菜</option>                                <option value="10">百合綠時蔬</option>                                <option value="11">青椒炒甜不辣</option>                                <option value="12">炒油菜花</option>                                <option value="13">素炒蘿蔔</option>                                <option value="14">日式芥末拌芥蘭菜</option>                                <optgroup label="-----四季菜單-----">                                <option value="15">韭菜炒甜不辣</option>                                <option value="16">橙香烤地瓜</option>                                <option value="17">奶香豆芽菜</option>                                <option value="18">清炒山蘇</option>                                <option value="19">玉米粑粑</option>                                <option value="20">燙炒地瓜葉</option>                            </select>                        </li>                        <li >                            評價：                            <select name="select_number" class="cs-select cs-skin-border">                                <option value="0">無</option>                                <option value="1">1分</option>                                <option value="2">2分</option>                                <option value="3">3分</option>                                <option value="4">4分</option>                                <option value="5">5分</option>                                <option value="6">6分</option>                                <option value="7">7分</option>                                <option value="8">8分</option>                                <option value="9">9分</option>                                <option value="10">10分</option>                            </select>                            <br>                        </li>                    </ul>                </div>';
		$("#btn1").before("<div class='seClass'>"+ sel +"</div>");

		$('select[class*="cs-select"]').each(function(i, item)
        {
			temp.push(new SelectFx(item));
		});
		
		$("select[name*='select_plate']").each(function(i, item)
        {
			$(item).removeClass();
        });

		$("select[name*='select_number']").each(function(i, item)
        {
			$(item).removeClass();
        });
	}

	$("#btn1").click(function(){
		make_select_opt();
	});

	make_select_opt();

});