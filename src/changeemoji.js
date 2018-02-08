(function () {
	window.addEventListener("message", receiveMessage, false);
		function receiveMessage(event)
		{
			console.log(event);

			if (event.origin !== window.origin)
				return;

			if (typeof event.data.slack_emoji_style !== "undefined") {
				// To access window
				// https://stackoverflow.com/a/12396221
				var elt = document.createElement("script");
				elt.innerHTML = 'window.emoji.img_set = "' + event.data.slack_emoji_style +'";';
				document.head.appendChild(elt);

				setTimeout(function(){
					document.head.removeChild(elt);
				}, 1000);	
			}
		}
})();
