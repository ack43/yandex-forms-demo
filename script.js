window.yandexFormsDemo = {
	initYandexIframe(iframe) {
		if(iframe){
			var fallback = document.getElementById(`yandex-form-${iframe.dataset.formid}-fallback`);
			if (fallback) fallback.style.display = 'none';
			console.log(iframe);
			iframe.style.height = '650px';
		} else {
			var fallback = document.getElementById('yandex-form-fallback');
			if (fallback) fallback.style.display = 'none';
		}
	},
}