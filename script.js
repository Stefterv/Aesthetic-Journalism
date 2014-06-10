$(document).ready(function($) {
	$(".cycle").click(function(event) {
		var level = 0;
		var maxLevel = 0;
		for(var i = 1; i<10; i++){
			var levelValue = $(this).attr('level-'+i);
			if(levelValue!=null)maxLevel = i;
			if(levelValue==$(this).html())level = i;
		}
		if(level>0 && maxLevel>0){
			level += 1;
			if(level>maxLevel)level = 1;
			$(this).html($(this).attr('level-'+level));
		}
	});	
	$(".gonext").click(function(event) {
			event.preventDefault();
			var level = $("article").attr("show");
			level++;
			if(level>$("article").attr("maxLevel")){
				level = 1;
			}
			$("article").attr('show', level);
	});
	$(".relation").each(function(index, el) {
		$(this).attr('href', $(this).attr('href')+"#"+$(this).attr('id'));
		if("#"+$(this).attr('id')==location.hash){
			highlight($(this));
		}
	});
	$(".relation").hover(function() {
		/* Stuff to do when the mouse enters the element */
		highlight($(this));
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		removeHighlight($(this));
	});
	$(".trigger").on("click",function(event){
		event.preventDefault();
		$(".context[trigger="+$(this).attr("id")+"]").hide();
		$(".replace[trigger="+$(this).attr("id")+"]").show();
	});
	$(".reality").on("click",function(){
		var level = $(this).attr("show");
		var maxLevel = 3;
		level++;
		if(level>maxLevel){
			level = 0;
		}
		$(this).attr("show",level);
	});
});
function highlight(el){
	el.closest('context').addClass('highlight');
	$("context"+"[relation="+el.attr("id")+"]").addClass('highlight');
}
function removeHighlight(el){
	el.closest('context').removeClass('highlight');
	$("context"+"[relation="+el.attr("id")+"]").removeClass('highlight');
}