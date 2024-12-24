const archivos = {
    'blox-fruits_redz-hub': 'loadstring(game:HttpGet("https://raw.githubusercontent.com/xielbers/scripts/refs/heads/main/blox-fruits_redz-hub.lua"))()',
    'blox-fruits_hutao': 'loadstring(game:HttpGet("https://raw.githubusercontent.com/xielbers/scripts/refs/heads/main/blox-fruits_hutao.lua"))()',
    'evade': 'loadstring(game:HttpGet("https://raw.githubusercontent.com/xielbers/scripts/refs/heads/main/evade.lua"))()',
    'universal': 'loadstring(game:HttpGet("https://raw.githubusercontent.com/xielbers/scripts/refs/heads/main/universal.lua"))()',
};

function copy(archivo) {
    navigator.clipboard.writeText(archivos[archivo]);
    alert("Copiado");
}