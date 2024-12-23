const archivos = {
    'blox-fruits': 'loadstring(game:HttpGet("https://raw.githubusercontent.com/xielbers/Archivos/refs/heads/main/Scripts/blox-fruits.lua"))()',
    'evade': 'loadstring(game:HttpGet("https://raw.githubusercontent.com/xielbers/Archivos/refs/heads/main/Scripts/evade.lua"))()'
};

function copy(archivo) {
    navigator.clipboard.writeText(archivos[archivo]);
    alert("Copiado");
}