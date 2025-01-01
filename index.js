const archivos = {
    'blox-fruits_redz-hub': 'loadstring(game:HttpGet("https://raw.githubusercontent.com/xielbers/scripts/refs/heads/main/blox-fruits_blacktrap.lua"))()',
    'evade': 'loadstring(game:HttpGet("https://raw.githubusercontent.com/xielbers/scripts/refs/heads/main/evade.lua"))()',
    'evade-key': 'KINGKEYar6sD4TxdwAygGFmMeXR3HpVvJWnf7cjYL58btNuqUzCPSZBKh',
    'universal': 'loadstring(game:HttpGet("https://raw.githubusercontent.com/xielbers/scripts/refs/heads/main/universal.lua"))()',
    'universal-key': 'UCrvd63k',
    'jailbreak': 'loadstring(game:HttpGet("https://raw.githubusercontent.com/xielbers/scripts/refs/heads/main/jailbreak.lua"))()',
};

function copy(archivo) {
    navigator.clipboard.writeText(archivos[archivo]);
    alert("Copiado");
}