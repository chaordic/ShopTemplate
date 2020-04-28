$(function(){
	var show_overlay = 0,
		campaign_id = Number( $('[data-id]').attr('data-id') );

	setTimeout(function(){
		$(window.top).mouseout(function(event){
			if(
				event.clientY < 0
				&& top.spl.active == false
				&& show_overlay == 0
			){
				top.spl.cid = campaign_id;
				top.spl.view(top.spl.cid);
				top.spl.show_overlay( top.spl.events['custom_' + campaign_id] );
				$('#f-content-' + campaign_id, window.top.document).css('height','100vh');
				show_overlay = 1;
			};
		});
	}, 1000);
});