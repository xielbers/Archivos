const archivos = {
    'blox-fruits_redz-hub': 'loadstring(game:HttpGet("https://raw.githubusercontent.com/xielbers/Archivos/refs/heads/main/Scripts/blox-fruits_redz-hub.lua"))()',
    'blox-fruits_hutao': 'loadstring(game:HttpGet("https://raw.githubusercontent.com/xielbers/Archivos/refs/heads/main/Scripts/blox-fruits_hutao.lua"))()',
    'evade': 'loadstring(game:HttpGet("https://raw.githubusercontent.com/xielbers/Archivos/refs/heads/main/Scripts/evade.lua"))()'
};

function copy(archivo) {
    navigator.clipboard.writeText(archivos[archivo]);
    alert("Copiado");
}