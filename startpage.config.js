const defaultConfig = {
	username: "Indra",
	theme: {
		backgroundColor: "#121317",
		windowColor: "#1e212b",
		glowColor: "#6b5cb157",
		white: "#e2e2e2",
		gray: "#97989d",
		black: "#16161e",
		red: "#ec6183",
		green: "#2ed8a2",
		yellow: "#e8b195",
		blue: "#2bc3de",
		cyan: "#62e0e2",
		magenta: "#e069aa",
		violet: "#d1aff8",
		orange: "#ff8800"
	},
	wallpaper: {
		url: "",
		easing: "ease-in-out",
		fadeIn: true,
		blur: true
	},
	terminal: {
		fixedHeight: true,
		windowGlow: true,
		textGlow: false
	},
	prompt: {
		ctrlC: true,
		placeholder: "command...",
		placeholderColor: "gray",
		userColor: "green",
		atColor: "gray",
		hostColor: "magenta",
		promptColor: "magenta",
		promptSymbol: "❯",
		caretColor: "green",
		selectionBg: "yellow",
		selectionFg: "black"
	},
	fetch: {
		timeFormat: "HH:mm",
		dateFormat: "DD/MM/YYYY",
		titleColor: "yellow",
		image: "icon.svg",
		data: [
			"Time: {time}",
			"Date: {date}",
			"{seperator}",
			"OS: {osName} {osVersion}",
			"Browser: {browser} {browserVersion}",
			"Engine: {engineName}",
			"{seperator}",
			"{colors}"
		]
	},
	urlLaunch: {
		target: "_self",
		defaultColor: "white",
		hoverColor: "violet"
	},
	search: {
		default: "https://google.com/search?q=",
		target: "_self",
		shortcutRegex: "([A-Za-z0-9]+) (.*)",
		shortcuts: [
			{
				alias: "g",
				name: "Google Search",
				url: "https://google.com/search?q={}"
			},
			{
				alias: "d",
				name: "DuckDuckGo Search",
				url: "https://duckduckgo.com/?q={}"
			},
			{
				alias: "b",
				name: "Brave Search",
				url: "https://search.brave.com/search?q={}"
			},
			{
				alias: "gh",
				name: "Github Search",
				url: "https://github.com/search?q={}"
			},
			{
				alias: "s",
				name: "Stack Overflow Search",
				url: "https://stackoverflow.com/search?q={}"
			},
			{
				alias: "r",
				name: "Subreddit Search",
				url: "https://reddit.com/r/{}"
			},
			{
				alias: "w",
				name: "Wikipedia Search",
				url: "https://en.wikipedia.org/wiki/{}"
			}
		]
	},
	sections: {
		list: [
			{
				title: "General",
				color: "green",
				links: [
					{
						name: "Deepl",
						url: "https://www.deepl.com/translator#ru/en/",
						icon: "mdi:web"
					},
					{
						name: "Music",
						url: "https://free-mp3-download.net",
						icon: "material-symbols:library-music"
					},
					{
						name: "GPT",
						url: "https://chat.openai.com/",
						icon: "simple-icons:openai"
					},
					{
						name: "OCI",
						url: "https://www.oracle.com/cloud/",
						icon: "simple-icons:oracle"
					},
					{
						name: "Youtube",
						url: "https://www.youtube.com/",
						icon: "mdi:youtube"
					}
				]
			},
			{
				title: "Dev",
				color: "magenta",
				links: [
					{
						name: "GitHub",
						url: "https://github.com",
						icon: "mdi:github"
					},
					{
						name: "GitLab",
						url: "https://gitlab.com",
						icon: "ph:gitlab-logo-simple-fill"
					},
					{
						name: "Dev.to",
						url: "https://dev.to",
						icon: "material-symbols:logo-dev"
					},
					{
						name: "Stack Overflow",
						url: "https://stackoverflow.com/",
						icon: "mdi:stack-overflow"
					},
					{
						name: "Mdn",
						url: "https://developer.mozilla.org/en-US/",
						icon: "mdi:mozilla-firefox"
					}
				]
			},
			{
				title: "Social",
				color: "purple",
				links: [
					{
						name: "Twitter",
						url: "https://twitter.com",
						icon: "mdi:twitter"
					},
					{
						name: "Instagram",
						url: "https://instagram.com",
						icon: "basil:comment-solid"
					},
					{
						name: "Reddit",
						url: "https://reddit.com",
						icon: "mdi:reddit"
					},
					{
						name: "Mastodon",
						url: "https://mastodon.social/",
						icon: "ri:mastodon-fill"
					},
					{
						name: "Polywork",
						url: "https://polywork.com",
						icon: "simple-icons:polywork"
					}
				]
			},
			{
				title: "Interesting",
				color: "cyan",
				links: [
					{
						name: "Tailwind",
						url: "https://v2.tailwindcss.com/docs",
						icon: "mdi:tailwind"
					},
					{
						name: "Leetcode",
						url: "https://leetcode.com",
						icon: "simple-icons:leetcode"
					},
					{
						name: "RPS",
						url: "https://rockpapershotgun.com/",
						icon: "ph:toilet-paper-bold"
					},
					{
						name: "80lv",
						url: "https://80.lv/",
						icon: "tabler:hand-rock"
					}
				]
			},
			{
			  title: "Science",
			  color: "blue",
			  links: [
				  {
					  name: "Sicpjs",
					  url: "https://sourceacademy.org/sicpjs/foreword02",
					  icon: "material-symbols:book"
				  },
				  {
					  name: "Space",
					  url: "fa6-solid:user-astronaut",
					  icon: "mdi:reddit"
				  },
				  {
					  name: "NASA",
					  url: "https://blogs.nasa.gov/",
					  icon: "simple-icons:nasa"
				  },
				  {
					  name: "ESA",
					  url: "https://blogs.esa.int/",
					  icon: "mdi:black-mesa"
				  }
			  ]
			},
			{
				title: "Subreddits",
				color: "yellow",
				links: [
					{
						name: "Firefoxcss",
						url: "https://www.reddit.com/r/FirefoxCSS/",
						icon: "mdi:reddit"
					},
					{
						name: "React",
						url: "https://www.reddit.com/r/reactjs/",
						icon: "mdi:reddit"
					},
					{
						name: "Unixporn",
						url: "https://www.reddit.com/r/unixporn/",
						icon: "mdi:reddit"
					},
					{
						name: "Typescript",
						url: "https://www.reddit.com/r/typescript/",
						icon: "mdi:reddit"
					},
					{
						name: "Awesomewm",
						url: "https://www.reddit.com/r/awesomewm/",
						icon: "mdi:reddit"
					}
				]
			}
		]
	}
}

export default defaultConfig
