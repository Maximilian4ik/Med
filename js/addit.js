$(document).ready(function () {
	document.addEventListener('fetchit:after', (e) => {
	  const { response } = e.detail;

	  if (response.success) {
		  prWrap1.classList.toggle("active");
		  prWrap2.classList.toggle("active");
	  }
	})

	$('.lk-dock-top').on('click', '.order-tab', function() {
		if ($(this).attr('data-tab') == 'a-selected-cards') $('.start-clear').attr('data-data-list', 'analys');
		else if ($(this).attr('data-tab') == 's-service') $('.start-clear').attr('data-data-list', 'service');
		else $('.start-clear').attr('data-data-list', 'doctor');
	});
});