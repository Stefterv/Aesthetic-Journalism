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
});