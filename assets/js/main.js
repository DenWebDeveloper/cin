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


		if (navigator.userAgent.search(/Safari/) > 0 & $(window).width() < 768) {
			console.log("safari");
			document.querySelector("#services .swiper-slide").classList.add("swiper-slide-none-transform-style")
		};

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
