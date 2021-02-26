module.exports = {
    title: 'Java 技术栈体系',
    themeConfig: {
        sidebar: 'auto',
        searchMaxSuggestions: 10,
    },
    head: [
        ["link", {rel: "icon", href: `/favicon.ico`}],
        ["meta", {name: "robots", content: "all"}],
        ["meta", {name: "author", content: "frank zhao"}],
        ["meta", {name: "keywords", content: "frank zhao"}],
        ["meta", {name: "apple-mobile-web-app-capable", content: "yes"}],
    ],
    plugins: [
        [ 'autobar' ]
    ],
    markdown: {
        lineNumbers: true
    }
}