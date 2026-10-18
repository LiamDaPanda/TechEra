// Scroll reveal (IntersectionObserver, no scroll listeners) and the latest-release download link.
(() => {
	const io = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
		for (const e of entries) if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
	}, { threshold: 0.15 }) : null;
	document.querySelectorAll(".reveal").forEach((el) => io ? io.observe(el) : el.classList.add("in"));

	const button = document.getElementById("dl-button");
	if (!button) return;
	const version = document.getElementById("dl-version");
	const size = document.getElementById("dl-size");
	fetch("https://api.github.com/repos/LiamDaPanda/TechEra/releases/latest")
		.then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
		.then((release) => {
			const jar = (release.assets || []).find((a) => a.name.endsWith(".jar"));
			version.textContent = release.tag_name.replace(/^v/, "");
			if (jar) {
				button.href = jar.browser_download_url;
				size.textContent = jar.name + ", " + (jar.size / 1024 / 1024).toFixed(1) + " MB";
			}
		})
		.catch(() => { version.textContent = "see the releases page"; });
})();
