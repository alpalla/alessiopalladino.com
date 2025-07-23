;(function initTheme() {
	const storedTheme = localStorage.getItem("theme")

	const applyTheme = (theme) => {
		document.documentElement.setAttribute("data-theme", theme)

		const disabledTheme = theme === "dark" ? "light" : "dark"

		document
			.getElementById(`${disabledTheme}-css`)
			?.setAttribute("disabled", "true")

		document.getElementById(`${theme}-css`)?.removeAttribute("disabled")
	}

	if (storedTheme) {
		applyTheme(storedTheme)

		return
	}

	window
		.matchMedia(`(prefers-color-scheme: dark)`)
		.addEventListener("change", ({ matches }) => {
			if (localStorage.getItem("theme")) {
				return
			}

			applyTheme(matches ? "dark" : "light")
		})

	const prefersDarkColorScheme = matchMedia(
		"(prefers-color-scheme: dark)",
	).matches

	prefersDarkColorScheme && applyTheme("dark")
})()
