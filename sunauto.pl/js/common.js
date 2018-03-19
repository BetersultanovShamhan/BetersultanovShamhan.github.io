$(document).ready(function() {


	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();
	
//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#сonsultation").submit(function() {
		$.ajax({
			type: "GET",
			url: "сonsultation.php",
			data: $("#сonsultation").serialize()
		}).done(function() {
			alert("Dziękujemy za zgłoszenie!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
	$("#callback").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("Dziękujemy za zgłoszenie!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
	$("#application-rent").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("Dziękujemy za zgłoszenie!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
	$("#forrent").submit(function() {
		$.ajax({
			type: "GET",
			url: "forrent.php",
			data: $("#forrent").serialize()
		}).done(function() {
			alert("Dziękujemy za zgłoszenie!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});
$(document).ready(function() {
	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 1,
		autoHeight : true
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next").click(function() {
		owl.trigger("owl.next");
	});
	$(".prev").click(function() {
		owl.trigger("owl.prev");
	});
});
$(document).ready(function() {
	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel2");
	owl.owlCarousel({
		items : 1,
		autoHeight : true
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next2").click(function() {
		owl.trigger("owl.next");
	});
	$(".prev2").click(function() {
		owl.trigger("owl.prev");
	});
});
$(document).ready(function() {
	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel3");
	owl.owlCarousel({
		items : 1,
		autoHeight : true
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next3").click(function() {
		owl.trigger("owl.next");
	});
	$(".prev3").click(function() {
		owl.trigger("owl.prev");
	});
});