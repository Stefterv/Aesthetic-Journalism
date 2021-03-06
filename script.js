$(document).ready(function($) {
	$(".cycle").each(function(index, el) {
		$(this).html("");
		$(this).attr("level",1);
		for(var i = 1; i<10; i++){
			var elContent = $(this).attr("level-"+i);
			if(elContent!=undefined){
				var newEl = $("<span></span>");
				newEl.addClass('cycleElement');
				newEl.addClass('level'+i);
				if(i==1)newEl.addClass('show');
				newEl.html(elContent);
				newEl.appendTo(this);
			}
		}
	});


	$(".cycle").click(function(event) {
		var level = parseInt($(this).attr('level'));
		var maxLevel = parseInt($(this).children().length);
		console.log(maxLevel);
		level += 1;
		if(level>maxLevel)level = 1;
		$(this).attr('level',level);
		
		$(this).children('').each(function(index, el) {
			if($(this).hasClass('level'+level)){
				$(this).addClass('show');
			}else{
				$(this).removeClass('show');
			}
		});
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
			$("body").scrollTop($(this));
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
			level = maxLevel;
		}
		$(this).attr("show",level);
	});
	$("a:not(.trigger)").on('click', function(event) {
		event.preventDefault();
		$("body").addClass('animate');
		var href = $(this).attr("href");
		setTimeout(function(){
			location.href=href;
		},500);

		/* Act on the event */
	});
});
function highlight(el){
	el.addClass('highlight');
	el.addClass('highlight');
	// el.closest('context').addClass('highlight');
	$("context"+"[relation="+el.attr("id")+"]").addClass('highlight');
}
function removeHighlight(el){
	el.removeClass('highlight');
	// el.closest('context').removeClass('highlight');
	$("context"+"[relation="+el.attr("id")+"]").removeClass('highlight');
}