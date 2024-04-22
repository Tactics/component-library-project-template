const config = {
    standard: {
        alternate: [
            { name: "Button", style: {"background" : "red"} },
        ],
        typography: {
            resources:
                [
                    "@font-face { font-family: \"Antwerpen Small\"; font-style: \"normal\"; font-weight: 500; src: url(https://cdn.antwerpen.be/core_branding_scss/4.2.2/assets/fonts/AntwerpenSmallCaps-Regular.woff) format(\"woff\"); }",
                    "@font-face { font-family: \"Antwerpen Regular\"; font-style: \"normal\"; font-weight: 500; src: url(https://cdn.antwerpen.be/core_branding_scss/4.2.2/assets/fonts/Antwerpen-Regular.woff) format(\"woff\"); }",
                    "@font-face { font-family: \"Antwerpen Tall\"; font-style: \"normal\"; font-weight: 500; src: url(https://cdn.antwerpen.be/core_branding_scss/4.2.2/assets/fonts/AntwerpenTall-Tall.woff) format(\"woff\"); }",
                    "@font-face { font-family: \"Sun Antwerpen\"; font-style: \"normal\"; font-weight: 300; src: url(https://cdn.antwerpen.be/core_branding_scss/4.2.2/assets/fonts/SunAntwerpen-Light.woff) format(\"woff\"); }",
                    "@font-face { font-family: \"Sun Antwerpen\"; font-style: \"italic\"; font-weight: 300; src: url(https://cdn.antwerpen.be/core_branding_scss/4.2.2/assets/fonts/SunAntwerpen-Light-Italic.woff) format(\"woff\"); }",
                    "@font-face { font-family: \"Sun Antwerpen\"; font-style: \"normal\"; font-weight: 500; src: url(https://cdn.antwerpen.be/core_branding_scss/4.2.2/assets/fonts/SunAntwerpen-Regular.woff) format(\"woff\"); }",
                    "@font-face { font-family: \"Sun Antwerpen\"; font-style: \"italic\"; font-weight: 500; src: url(https://cdn.antwerpen.be/core_branding_scss/4.2.2/assets/fonts/SunAntwerpen-Regular-Italic.woff) format(\"woff\"); }",
                    "@font-face { font-family: \"Sun Antwerpen\"; font-style: \"normal\"; font-weight: 700; src: url(https://cdn.antwerpen.be/core_branding_scss/4.2.2/assets/fonts/SunAntwerpen-Bold.woff) format(\"woff\"); }",
                    "@font-face { font-family: \"Sun Antwerpen\"; font-style: \"italic\"; font-weight: 700; src: url(https://cdn.antwerpen.be/core_branding_scss/4.2.2/assets/fonts/SunAntwerpen-Bold-Italic.woff) format(\"woff\"); }",
                    "@font-face { font-family: \"Sun Antwerpen\"; font-style: \"normal\"; font-weight: 800; src: url(https://cdn.antwerpen.be/core_branding_scss/4.2.2/assets/fonts/SunAntwerpen-ExtraBold.woff) format(\"woff\"); }",
                    "@font-face { font-family: \"Sun Antwerpen\"; font-style: \"italic\"; font-weight: 800 src: url(https://cdn.antwerpen.be/core_branding_scss/4.2.2/assets/fonts/SunAntwerpen-ExtraBold-Italic.woff) format(\"woff\"); }"
                ],
            fonts: {
                family: {
                    primary: 'Antwerpen Regular, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
                }
            }
        },
    },
    inverted : {},
    contrast : {
        colors: {
            primary: {
                tint_50: '#FFE3EC',
                tint_100: '#FFE3EC',
                tint_200: '#FFB8D2',
                tint_300: '#FF8CBA',
                tint_400: '#F364A2',
                tint_500: '#E8368F',
                tint_600: '#DA127D',
                tint_700: '#BC0A6F',
                tint_800: '#A30664',
                tint_900: '#870557',
                tint_950: '#620042'
            },
            additional: [
                { name: "bg_ui", color: "#FFE019" },
            ]
        }
    }
};

export default config;