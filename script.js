const palettes = [
    { name: "Material UI Colors", colors: [
        "#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", 
        "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", 
        "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B"
    ] },
    { name: "Flat UI Colors v1", colors: [
        "#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", 
        "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", 
        "#e74c3c", "#ecf0f1", "#95a5a6", "#f39c12", "#d35400", "#c0392b", 
        "#bdc3c7", "#7f8c8d"
    ] },
    { name: "Flat UI Colors Dutch", colors: [
        "#FFC312", "#C4E538", "#12CBC4", "#FDA7DF", "#ED4C67", "#F79F1F", 
        "#A3CB38", "#1289A7", "#D980FA", "#B53471", "#EE5A24", "#009432", 
        "#0652DD", "#9980FA", "#833471", "#EA2027", "#006266", "#1B1464", 
        "#5758BB", "#6F1E51"
    ] },
    { name: "Flat UI Colors American", colors: [
        "#55efc4", "#81ecec", "#74b9ff", "#a29bfe", "#dfe6e9", "#00b894", 
        "#00cec9", "#0984e3", "#6c5ce7", "#b2bec3", "#ffeaa7", "#fab1a0", 
        "#ff7675", "#fd79a8", "#636e72", "#fdcb6e", "#e17055", "#d63031", 
        "#e84393", "#2d3436"
    ] },
    { name: "Flat UI Colors Aussie", colors: [
        "#f6e58d", "#ffbe76", "#ff7979", "#badc58", "#dff9fb", "#f9ca24", 
        "#f0932b", "#eb4d4b", "#6ab04c", "#c7ecee", "#7ed6df", "#e056fd", 
        "#686de0", "#30336b", "#95afc0", "#22a6b3", "#be2edd", "#4834d4", 
        "#130f40", "#535c68"
    ] },
    { name: "Flat UI Colors British", colors: [
        "#00a8ff", "#9c88ff", "#fbc531", "#4cd137", "#487eb0", "#0097e6", 
        "#8c7ae6", "#e1b12c", "#44bd32", "#40739e", "#e84118", "#f5f6fa", 
        "#7f8fa6", "#273c75", "#353b48", "#c23616", "#dcdde1", "#718093", 
        "#192a56", "#2f3640"
    ] },
    { name: "Flat UI Colors Spanish", colors: [
        "#40407a", "#706fd3", "#f7f1e3", "#34ace0", "#33d9b2", "#2c2c54", 
        "#474787", "#aaa69d", "#227093", "#218c74", "#ff5252", "#ff793f", 
        "#d1ccc0", "#ffb142", "#ffda79", "#b33939", "#cd6133", "#84817a", 
        "#cc8e35", "#ccae62"
    ] },
    { name: "Flat UI Colors Indian", colors: [
        "#FEA47F", "#25CCF7", "#EAB543", "#55E6C1", "#CAD3C8", "#F97F51", 
        "#1B9CFC", "#F8EFBA", "#58B19F", "#2C3A47", "#B33771", "#3B3B98", 
        "#FD7272", "#9AECDB", "#D6A2E8", "#6D214F"
    ] },
    {
        "name": "Flat UI Colors French",
        "colors": [
          "#fad390", "#f8c291", "#6a89cc", "#82ccdd", "#b8e994", "#f6b93b",
          "#e55039", "#4a69bd", "#60a3bc", "#78e08f", "#fa983a", "#eb2f06",
          "#1e3799", "#3c6382", "#38ada9", "#e58e26", "#b71540", "#0c2461",
          "#0a3d62", "#079992"
        ]
      }
];

const paletteSelection = document.getElementById("palette-selection");
const colorSelection = document.getElementById("color-selection");
const colorGrid = document.getElementById("color-grid");

function loadPalettes() {
    paletteSelection.innerHTML = palettes
        .map(
            (palette, index) => `
            <div class="palette-box" style="background-color: ${palette.colors[0]}" onclick="showColors(${index})">
                ${palette.name}
            </div>
        `
        )
        .join("");
}

function showColors(index) {
    const palette = palettes[index];
    colorGrid.innerHTML = palette.colors
        .map(
            (color) => `
            <div class="color-box" style="background-color: ${color}" onclick="selectColor('${color}')">
                ${color}
            </div>
        `
        )
        .join("");
    paletteSelection.classList.add("hidden");
    colorSelection.classList.remove("hidden");
}

function showPalettes() {
    paletteSelection.classList.remove("hidden");
    colorSelection.classList.add("hidden");
}

function selectColor(color) {
    document.body.style.backgroundColor = color;
    navigator.clipboard.writeText(color);
    const audio = new Audio("src_notify.mp3");
    audio.play();
}

loadPalettes();
