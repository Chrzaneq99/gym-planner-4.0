# Skrypt automatycznego setupu dev/testów dla Gym App (Windows PowerShell)
# Instalacja Node.js przez Chocolatey jeśli nie jest dostępny, npm install, test składni

function Ensure-Node {
    if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
        Write-Host "Node.js nie znaleziony. Instaluję przez Chocolatey..."
        choco install nodejs-lts -y
        refreshenv
    } else {
        Write-Host "Node.js już zainstalowany."
    }
}

function Ensure-Npm {
    if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
        Write-Host "npm nie znaleziony. Upewnij się, że Node.js jest poprawnie zainstalowany."
        exit 1
    } else {
        Write-Host "npm już zainstalowany."
    }
}

Write-Host "--- Gym App: Setup Dev ---"
Ensure-Node
Ensure-Npm
Write-Host "Instaluję zależności npm..."
npm install
Write-Host "Uruchamiam test składni JS..."
npm run test:syntax
Write-Host "Gotowe. Jeśli pojawiły się błędy, wklej output tutaj."
