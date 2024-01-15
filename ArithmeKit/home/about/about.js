function reload() {
	window.location.reload();
}

// JavaScript to toggle visibility of bug icon and "Suggestions" link
window.addEventListener("resize", function () {
	toggleElementsVisibility();
});

// Initial check on page load
window.addEventListener("DOMContentLoaded", function () {
	toggleElementsVisibility();
});
function toggleElementsVisibility() {
	const bugIcon = document.querySelector(".bx.bxs-bug");
	const suggestionsLink = document.querySelector(
		".navbar-nav .nav-item.d-lg-none .nav-link.text-white.text-opacity-50"
	);

	if (window.innerWidth >= 992) {
		// Uncollapsed state
		bugIcon.style.display = "inline-block";
		suggestionsLink.style.display = "none";
	} else {
		// Collapsed state
		bugIcon.style.display = "none";
		suggestionsLink.style.display = "inline-block";
	}
}
