const archivos = {
    'blox-fruits': 'loadstring(game:HttpGet("https://xielbers.github.io/Archivos/Scripts/blox-fruits.lua"))()',
    'evade': 'loadstring(game:HttpGet("https://xielbers.github.io/Archivos/Scripts/evade.lua"))()'
};

function copy(archivo) {
    navigator.clipboard.writeText(archivos[archivo]);
    alert("Copiado");
}