(function (appConfig) {

window.addEventListener('load', function(){
	document.addEventListener( 'keydown', announceContent, false );

		var statusDiv =  document.getElementById( 'aria-status-div' );
		// console.log(statusDiv)

		var hintText =	{
							'fragments':'slide has fragments, Hit the next arrow to step through. ' , 
							'notes' : 'slide has notes, press n to view notes. ' , 
							'nested':'slide has nested slides, press space key to navigate this slide. '
						};

		getScreenContent();



	function announceContent(ev){

			switch( ev.keyCode ) {
					// p, page up
					case 37: case 38: case 39: case 40: getScreenContent(ev.keyCode); break;
			}
	}


	function getScreenContent(keyCode){
		setTimeout(function(){
			var nested='';
			var curSlide = document.querySelectorAll( 'section.present' );
			if(curSlide.length > 0){
				nested = curSlide[0].querySelectorAll( 'section');
			}

			curSlide = curSlide[curSlide.length - 1];
			var fragments = curSlide.querySelectorAll( '.fragment' );
			
			var notes = curSlide.querySelectorAll( 'aside' );

			if(fragments.length>0){
				statusDiv.innerHTML = hintText.fragments + statusDiv.innerHTML;
			}
			if(nested.length>0){
				statusDiv.innerHTML  = hintText.nested + statusDiv.innerHTML;
			}
			if(notes.length>0){
				statusDiv.innerHTML = hintText.notes + statusDiv.innerHTML;
			}			

		} , 200)
	}

}, false);		

}({}));