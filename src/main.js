const syntax = require("./syntax");
const ui = require("./ui");
const fs = require("fs");

const colors = {
    blue: "#3090D1",
    green: "#39B261",
    greenalt: "#7E9E2D",
    grey: "#808080",
    orange: "#D1711D",
    pink: "#D64AD3",
    purple: "#A15DEF",
    red: "#C13838",
    salmon: "#E8476F",
    transparent: "#00000000",
    turquoize: "#24B5A8",
    yellow: "#C48519"
};

const vividColors = {
    blue: "#28A9FF",
    green: "#42DD76",
    greenalt: "#b7d175",
    grey: "#808080",
    orange: "#FF7135",
    pink: "#E66DFF",
    purple: "#A95EFF",
    red: "#D62C2C",
    salmon: "#FF478D",
    transparent: "#00000000",
    turquoize: "#14E5D4",
    yellow: "#FFB638"
};

const solarizedColors = {
    yellow: "#b58900",
    red: "#cb4b16",
    purple: "#6c71c4",
    blue: "#268bd2",
    green: "#859900",
    turquoize: "#2aa198",
    salmon: "#d33682"
};

function makeTheme(name, themeColors) {
    let theme = Object.assign(themeColors);
    let base = {
        $schema: "vscode://schemas/color-theme",
        name: "BeardedTheme " + name.charAt(0).toUpperCase() + name.slice(1),
        colors: ui.body(theme),
        tokenColors: syntax.body(theme)
    };

    fs.writeFile("themes/bearded-theme-" + name + ".json", JSON.stringify(base), err => {
        if (err) console.log("error", err);
    });
}

makeTheme(
    "anthracite",
    Object.assign(
        {
            primary: "#798CA8",
            primaryalt: "#3B434F",
            uiborder: "#272c33",
            uibackground: "#1b1d22",
            uibackgroundalt: "#141519",
            default: "#bbbbbb"
        },
        colors
    )
);
makeTheme(
    "vivid",
    Object.assign(
        {
            primary: "#8551FF",
            primaryalt: "#28225B",
            uiborder: "#1E193A",
            uibackground: "#191130",
            uibackgroundalt: "#110A23",
            default: "#eeeeee"
        },
        colors,
        vividColors
    )
);

makeTheme(
    "arc",
    Object.assign(
        {
            primary: "#95b0de",
            primaryalt: "#3C495E",
            uiborder: "#323A49",
            uibackground: "#222A38",
            uibackgroundalt: "#1B222D",
            default: "#bbbbbb"
        },
        colors
    )
);

makeTheme(
    "purple",
    Object.assign(
        {
            primary: "#9947EF",
            primaryalt: "#36224C",
            uiborder: "#2A1D38",
            uibackground: "#181121",
            uibackgroundalt: "#100C16",
            default: "#bbbbbb"
        },
        colors
    )
);

makeTheme(
    "blue",
    Object.assign(
        {
            primary: "#3A7FFF",
            primaryalt: "#162C54",
            uiborder: "#141E30",
            uibackground: "#0D1321",
            uibackgroundalt: "#0A0D16",
            default: "#bbbbbb"
        },
        colors
    )
);

makeTheme(
    "light",
    Object.assign(
        {
            primary: "#798999",
            primaryalt: "#c3d3e0",
            uiborder: "#cccccc",
            uibackground: "#ffffff",
            uibackgroundalt: "#f4f4f4",
            default: "#444444"
        },
        colors
    )
);
makeTheme(
    "solarized",
    Object.assign(
        {
            primary: "#1996bf",
            primaryalt: "#0E4456",
            uiborder: "#133E4C",
            uibackground: "#002b36",
            uibackgroundalt: "#00212B",
            default: "#cedbdb"
        },
        colors,
        solarizedColors
    )
);

makeTheme(
    "solarized-light",
    Object.assign(
        {
            primary: "#857f71",
            primaryalt: "#D6CDB8",
            uiborder: "#E0D9C9",
            uibackground: "#fdf6e3",
            uibackgroundalt: "#eee8d5",
            default: "#073642"
        },
        colors,
        solarizedColors
    )
);

makeTheme(
    "earth",
    Object.assign(
        {
            primary: "#705A58",
            primaryalt: "#382D2C",
            uiborder: "#281D1C",
            uibackground: "#1E1615",
            uibackgroundalt: "#16100F",
            default: "#C6BEAB"
        },
        {
            blue: "#BA9D6F",
            green: "#639E29",
            greenalt: "#7E9E2D",
            grey: "#7F7070",
            orange: "#D1711D",
            pink: "#A8547A",
            purple: "#BAB13B",
            red: "#C13838",
            salmon: "#D65151",
            transparent: "#00000000",
            turquoize: "#4EAAA4",
            yellow: "#C48519"
        }
    )
);
