import { Api, CssColor } from "./interfaces";
const constants = {
  kelvins: [2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 9000],
  brightness: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0],
};

export const COLORS: CssColor[] = [
  { name: "Alice Blue", value: "#f0f8ff" },
  { name: "Antique White", value: "#faebd7" },
  { name: "Aqua", value: "#00ffff" },
  { name: "Aqua Marine", value: "#7fffd4" },
  { name: "Azure", value: "#f0ffff" },
  { name: "Beige", value: "#f5f5dc" },
  { name: "Bisque", value: "#ffe4c4" },
  { name: "Blanched Almond", value: "#ffebcd" },
  { name: "Blue", value: "#0000ff" },
  { name: "Blue Violet", value: "#8a2be2" },
  { name: "Brown", value: "#a52a2a" },
  { name: "Burlywood", value: "#deb887" },
  { name: "Cadet Blue", value: "#5f9ea0" },
  { name: "Chartreuse", value: "#7fff00" },
  { name: "Chocolate", value: "#d2691e" },
  { name: "Coral", value: "#ff7f50" },
  { name: "Cornflower Blue", value: "#6495ed" },
  { name: "Cornsilk", value: "#fff8dc" },
  { name: "Crimson", value: "#dc143c" },
  { name: "Cyan", value: "#00ffff" },
  { name: "Dark Blue", value: "#00008b" },
  { name: "Dark Cyan", value: "#008b8b" },
  { name: "Dark Goldenrod", value: "#b8860b" },
  { name: "Dark Green", value: "#006400" },
  { name: "Dark Khaki", value: "#bdb76b" },
  { name: "Dark Magenta", value: "#8b008b" },
  { name: "Dark Olive Green", value: "#556b2f" },
  { name: "Dark Orange", value: "#ff8c00" },
  { name: "Dark Orchid", value: "#9932cc" },
  { name: "Dark Red", value: "#8b0000" },
  { name: "Dark Salmon", value: "#e9967a" },
  { name: "Dark Sea Green", value: "#8fbc8f" },
  { name: "Dark Slate Blue", value: "#483d8b" },
  { name: "Dark Turquoise", value: "#00ced1" },
  { name: "Dark Violet", value: "#9400d3" },
  { name: "Deep Pink", value: "#ff1493" },
  { name: "Deep Sky Blue", value: "#00bfff" },
  { name: "Dodger Blue", value: "#1e90ff" },
  { name: "Fire Brick", value: "#b22222" },
  { name: "Floral White", value: "#fffaf0" },
  { name: "Forest Green", value: "#228b22" },
  { name: "Fuchsia", value: "#ff00ff" },
  { name: "Gainsboro", value: "#dcdcdc" },
  { name: "Ghost White", value: "#f8f8ff" },
  { name: "Goldenrod", value: "#daa520" },
  { name: "Gold", value: "#ffd700" },
  { name: "Green", value: "#008000" },
  { name: "Green Yellow", value: "#adff2f" },
  { name: "Honey Dew", value: "#f0fff0" },
  { name: "Hot Pink", value: "#ff69b4" },
  { name: "Indian Red", value: "#cd5c5c" },
  { name: "Indigo", value: "#4b0082" },
  { name: "Ivory", value: "#fffff0" },
  { name: "Khaki", value: "#f0e68c" },
  { name: "Lavender Blush", value: "#fff0f5" },
  { name: "Lavender", value: "#e6e6fa" },
  { name: "Lawn Green", value: "#7cfc00" },
  { name: "Lemon Chiffon", value: "#fffacd" },
  { name: "Light Blue", value: "#add8e6" },
  { name: "Light Coral", value: "#f08080" },
  { name: "Light Cyan", value: "#e0ffff" },
  { name: "Light Goldenrod Yellow", value: "#fafad2" },
  { name: "Light Green", value: "#90ee90" },
  { name: "Light Pink", value: "#ffb6c1" },
  { name: "Light Salmon", value: "#ffa07a" },
  { name: "Light Sea Green", value: "#20b2aa" },
  { name: "Light Sky Blue", value: "#87cefa" },
  { name: "Light Steel Blue", value: "#b0c4de" },
  { name: "Light Yellow", value: "#ffffe0" },
  { name: "Lime", value: "#00ff00" },
  { name: "Lime Green", value: "#32cd32" },
  { name: "Linen", value: "#faf0e6" },
  { name: "Magenta", value: "#ff00ff" },
  { name: "Maroon", value: "#800000" },
  { name: "Medium Aqua Marine", value: "#66cdaa" },
  { name: "Medium Blue", value: "#0000cd" },
  { name: "Medium Orchid", value: "#ba55d3" },
  { name: "Medium Purple", value: "#9370db" },
  { name: "Medium Sea Green", value: "#3cb371" },
  { name: "Medium Slate Blue", value: "#7b68ee" },
  { name: "Medium Spring Green", value: "#00fa9a" },
  { name: "Medium Turquoise", value: "#48d1cc" },
  { name: "Medium Violet Red", value: "#c71585" },
  { name: "Midnight Blue", value: "#191970" },
  { name: "Mint Cream", value: "#f5fffa" },
  { name: "Misty Rose", value: "#ffe4e1" },
  { name: "Moccasin", value: "#ffe4b5" },
  { name: "Navajo White", value: "#ffdead" },
  { name: "Navy", value: "#000080" },
  { name: "Oldlace", value: "#fdf5e6" },
  { name: "Olive", value: "#808000" },
  { name: "Olive Drab", value: "#6b8e23" },
  { name: "Orange", value: "#ffa500" },
  { name: "Orange Red", value: "#ff4500" },
  { name: "Orchid", value: "#da70d6" },
  { name: "Pale Goldenrod", value: "#eee8aa" },
  { name: "Pale Green", value: "#98fb98" },
  { name: "Pale Turquoise", value: "#afeeee" },
  { name: "Pale Violet Red", value: "#db7093" },
  { name: "Papaya Whip", value: "#ffefd5" },
  { name: "Peach Puff", value: "#ffdab9" },
  { name: "Peru", value: "#cd853f" },
  { name: "Pink", value: "#ffc0cb" },
  { name: "Plum", value: "#dda0dd" },
  { name: "Powder Blue", value: "#b0e0e6" },
  { name: "Purple", value: "#800080" },
  { name: "Rebecca Purple", value: "#663399" },
  { name: "Red", value: "#ff0000" },
  { name: "Rosy Brown", value: "#bc8f8f" },
  { name: "Royal Blue", value: "#4169e1" },
  { name: "Saddle Brown", value: "#8b4513" },
  { name: "Salmon", value: "#fa8072" },
  { name: "Sandy Brown", value: "#f4a460" },
  { name: "Sea Green", value: "#2e8b57" },
  { name: "Sea Shell", value: "#fff5ee" },
  { name: "Sienna", value: "#a0522d" },
  { name: "Silver", value: "#c0c0c0" },
  { name: "Sky Blue", value: "#87ceeb" },
  { name: "Slate Blue", value: "#6a5acd" },
  { name: "Snow", value: "#fffafa" },
  { name: "Spring Green", value: "#00ff7f" },
  { name: "Steel Glue", value: "#4682b4" },
  { name: "Tan", value: "#d2b48c" },
  { name: "Teal", value: "#008080" },
  { name: "Thistle", value: "#d8bfd8" },
  { name: "Tomato", value: "#ff6347" },
  { name: "Turquoise", value: "#40e0d0" },
  { name: "Violet", value: "#ee82ee" },
  { name: "Wheat", value: "#f5deb3" },
  { name: "White", value: "#ffffff" },
  { name: "White Smoke", value: "#f5f5f5" },
  { name: "Yellow", value: "#ffff00" },
  { name: "Yellow Green", value: "#9acd32" },
];

export const effects = [
  //{ name: "Breathe", icon: "", value: Api.effectType.breathe },
  { name: "Move", icon: "", value: Api.effectType.move },
  //{ name: "Morph", icon: "", value: Api.effectType.morph },
  //{ name: "Flame", icon: "", value: Api.effectType.flame },
  //{ name: "Pulse", icon: "", value: Api.effectType.pulse },
];

export default constants;
