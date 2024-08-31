const archivos = {
    'blox-fruits': 'loadstring(game:HttpGet("https://raw.githubusercontent.com/REDzHUB/BloxFruits/main/redz9999"))()',
    'evade': 'loadstring(game:HttpGet("https://raw.githubusercontent.com/KinetPhoenix/evade-script/main/evade.lua"))()'
};

function copy(archivo) {
    navigator.clipboard.writeText(archivos[archivo]);
    alert("Copiado");
}