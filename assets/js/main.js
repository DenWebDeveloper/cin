$(function() {
	$.cookie("firstVisit") ||
		($("#cookies").modal("show"),
		$.cookie("firstVisit", "false", { expires: 365 })),
		$('.navbar-nav a[href^="#"]').click(function() {
			var e = $(this).attr("href");
			return (
				0 != $(e).length &&
					$("html, body").animate(
						{ scrollTop: $(e).offset().top - 50 },
						500
					),
				!1
			);
		});

	function addStyle3D() {
	$(".swiper-container-3d .swiper-wrapper").css({
		"transform-style:": "preserve-3d"})
	 
	$(".swiper-container-3d .swiper-slide-shadow-left").css({
		"transform-style:": "preserve-3d"
	});
	$(".swiper-container-3d .swiper-slide-shadow-right").css({
		"transform-style:": "preserve-3d"
	});
	$(".swiper-container-3d .swiper-slide-shadow-top").css({
		"transform-style:": "preserve-3d"
	});
	$(".swiper-container-3d .swiper-slide-shadow-bottom").css({
		"transform-style:": "preserve-3d"
	});
	$(".swiper-container-3d .swiper-cube-shadow").css({
		"transform-style:": "preserve-3d"
	});
	};

	var browser;
	if (navigator.userAgent.search(/Safari/) > 0) {
		browser = "Safari";
		$(".swiper-container-3d .swiper-wrapper").css({
			"transform-style:": ""
		});
		$(".swiper-container-3d .swiper-slide").css({
			"transform-style:": ""
		});
		$(".swiper-container-3d .swiper-slide-shadow-left").css({
			"transform-style:": ""
		});
		$(".swiper-container-3d .swiper-slide-shadow-right").css({
			"transform-style:": ""
		});
		$(".swiper-container-3d .swiper-slide-shadow-top").css({
			"transform-style:": ""
		});
		$(".swiper-container-3d .swiper-slide-shadow-bottom").css({
			"transform-style:": ""
		});
		$(".swiper-container-3d .swiper-cube-shadow").css({
			"transform-style:": ""
		});
	}
	if (navigator.userAgent.search(/Firefox/) > 0) {
		browser = "MozillaFirefox";
		addStyle3D() 
	}
	if (
		navigator.userAgent.search(/MSIE/) > 0 ||
		navigator.userAgent.search(/NET CLR /) > 0
	) {
		browser = "Internet Explorer";
	addStyle3D() 
	}
	if (navigator.userAgent.search(/Chrome/) > 0) {
		browser = "Google Chrome";
		addStyle3D() 
	}
	if (navigator.userAgent.search(/YaBrowser/) > 0) {
		browser = "Яндекс браузер";
		addStyle3D() 
	}
	if (navigator.userAgent.search(/OPR/) > 0) {
		browser = "Opera";
		addStyle3D() 
	}
	if (navigator.userAgent.search(/Konqueror/) > 0) {
		browser = "Konqueror";
		addStyle3D() 
	}
	if (navigator.userAgent.search(/Iceweasel/) > 0) {
		browser = "Debian Iceweasel";
		addStyle3D() 
	}
	if (navigator.userAgent.search(/SeaMonkey/) > 0) {
		browser = "SeaMonkey";
		addStyle3D() 
	}
	if (navigator.userAgent.search(/Edge/) > 0) {
		browser = "Microsoft Edge";
		addStyle3D() 
	}
	console.log(browser);

	new Swiper("#services .swiper-container", {
		effect: "coverflow",
		parallax: !0,
		grabCursor: !0,
		initialSlide: 5,
		centeredSlides: !0,
		slidesPerView: "auto",
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: !0
		},
		pagination: { el: ".swiper-pagination" }
	}),
		new Swiper("#about .swiper-container", {
			pagination: { el: ".swiper-pagination", type: "progressbar" },
			grabCursor: !0,
			slideToClickedSlide: !0,
			autoplay: { delay: 6e3 }
		});
	$("#feedback").width() > 768 &&
		particlesJS("feedback", {
			particles: {
				number: {
					value: 50,
					density: { enable: !0, value_area: 1100 }
				},
				color: { value: "#ffffff" },
				shape: {
					stroke: { width: 0, color: "#000000" },
					polygon: { nb_sides: 5 },
					image: { src: "img/github.svg", width: 100, height: 100 }
				},
				opacity: {
					value: 0.5,
					random: !1,
					anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 }
				},
				size: {
					value: 2,
					random: !0,
					anim: { enable: !1, speed: 30, size_min: 0.1, sync: !1 }
				},
				line_linked: {
					enable: !0,
					distance: 150,
					color: "#ffffff",
					opacity: 0.4,
					width: 1
				},
				move: {
					enable: !0,
					speed: 2,
					direction: "none",
					random: !1,
					straight: !1,
					out_mode: "out",
					bounce: !1,
					attract: { enable: !1, rotateX: 600, rotateY: 1200 }
				}
			},
			interactivity: {
				detect_on: "canvas",
				events: {
					onhover: { enable: !0, mode: "grab" },
					onclick: { enable: !0, mode: "push" },
					resize: !0
				},
				modes: {
					grab: { distance: 140, line_linked: { opacity: 1 } },
					snow: {
						distance: 400,
						size: 40,
						duration: 2,
						opacity: 8,
						speed: 3
					},
					repulse: { distance: 200, duration: 0.4 },
					push: { particles_nb: 4 },
					remove: { particles_nb: 2 }
				}
			},
			retina_detect: !0
		});
});
