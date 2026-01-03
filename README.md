# Gym Planner 💪

Aplikacja do planowania treningów siłowych z synchronizacją w chmurze.

🌐 **Demo:** [https://twoja-nazwa.github.io/gym-app](https://twoja-nazwa.github.io/gym-app)

## ✨ Funkcje

- 🏋️ Tworzenie personalizowanych planów treningowych
- 📊 Śledzenie postępów i ciężarów
- ☁️ Automatyczna synchronizacja między urządzeniami
- 👤 Każdy użytkownik ma swój własny plan
- 📱 Działa na telefonach, tabletach i komputerach

## 🚀 Jak używać

1. Otwórz aplikację w przeglądarce
2. Utwórz konto lub zaloguj się
3. Stwórz swój plan treningowy
4. Dodaj ćwiczenia z gotowej listy
5. Zapisuj postępy i zwiększaj ciężary!

## 🛠️ Lokalne uruchomienie

```powershell
cd d:\VSCODE\gym-app
.\start-server.ps1
```

Otwórz http://localhost:8000 w przeglądarce.

## Testy składni
- Skrypt `tools/parse-js.js` sprawdza wszystkie pliki `.js` w projekcie pod kątem błędów składniowych (ECMAScript 2020, typ: module).
- Jeśli pojawią się błędy, wklej output tutaj — poprawię kod i podpowiem co dalej.

## Konfiguracja Supabase
- W pliku `supabase.config.js` wstaw:
  - `url` — URL Twojego projektu Supabase (np. https://abc123.supabase.co)
  - `anonKey` — klucz publiczny (anon/public) z Supabase Dashboard
- W Supabase Dashboard:
  - Utwórz tabelę `user_plans` z kolumnami: `username` (text), `plan_data` (jsonb)
  - Włącz Row Level Security i dodaj polityki dostępu
  - Opcjonalnie: włącz Email Auth w Authentication > Settings

## Automatyczny setup (Windows)
Możesz użyć skryptu `setup-dev.ps1`:
```powershell
./setup-dev.ps1
```
- Skrypt instaluje Node (jeśli trzeba), uruchamia `npm install` i testy.
