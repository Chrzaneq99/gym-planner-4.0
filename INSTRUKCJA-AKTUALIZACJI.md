# 📱 INSTRUKCJA AKTUALIZACJI APLIKACJI NA TELEFONIE
## Szczegółowy przewodnik krok po kroku

---

# 🎯 CEL: Telefon ma pokazać najnowszą wersję aplikacji po kliknięciu w ikonę

---

## 🔹 KROK 1: WPROWADŹ ZMIANY W KODZIE

### Co robić:
1. Otwórz Visual Studio Code
2. Otwórz folder `gym-app`
3. Wprowadź zmiany w plikach (na przykład: zmiana kolorów w `style.css`, nowe funkcje w `script.js`, nowy tekst w `index.html`)
4. **ZAPISZ WSZYSTKIE PLIKI** (Ctrl+S lub File → Save All)

### ⚠️ Upewnij się:
- Wszystkie pliki są zapisane (nie ma białych kropek przy nazwach plików w VS Code)
- Sprawdź w przeglądarce na komputerze, czy zmiany działają

---

## 🔹 KROK 2: ZMIEŃ NUMER WERSJI (NAJWAŻNIEJSZE!)

### 📍 Dlaczego to jest ważne?
Telefon zapisuje w pamięci starą wersję plików. Zmiana numeru wersji **zmusza telefon** do pobrania nowych plików.

### 📝 Co dokładnie robić:

#### KROK 2A: Otwórz plik `index.html`
1. W VS Code kliknij na plik `index.html` w lewym panelu
2. Plik się otworzy

#### KROK 2B: Znajdź linijkę z CSS (około linii 7)
Użyj Ctrl+F (szukaj) i wpisz: `style.css`

**TERAZ WIDZISZ:**
```html
<link rel="stylesheet" href="style.css?v=1.0.1" />
```

#### KROK 2C: Zmień numer wersji CSS
**Kliknij na tę linijkę** i zmień `1.0.1` na wyższy numer:

**BYŁO:**
```html
<link rel="stylesheet" href="style.css?v=1.0.1" />
```

**MA BYĆ:**
```html
<link rel="stylesheet" href="style.css?v=1.0.2" />
```

**UWAGA:** Zmień tylko cyfrę! Cała reszta zostaje bez zmian!

#### KROK 2D: Znajdź linijkę z JavaScript (ostatnia linijka przed `</body>`)
Przewiń na sam dół pliku `index.html` lub użyj Ctrl+F i wpisz: `script.js`

**TERAZ WIDZISZ:**
```html
<script type="module" src="./script.js?v=1.0.1"></script>
```

#### KROK 2E: Zmień numer wersji JavaScript
**Kliknij na tę linijkę** i zmień `1.0.1` na ten sam wyższy numer co w CSS:

**BYŁO:**
```html
<script type="module" src="./script.js?v=1.0.1"></script>
```

**MA BYĆ:**
```html
<script type="module" src="./script.js?v=1.0.2"></script>
```

#### KROK 2F: Zapisz plik
1. Naciśnij **Ctrl+S** lub kliknij File → Save
2. Sprawdź, czy biała kropka przy nazwie pliku zniknęła

### 📊 Zasada numerowania wersji:
- **Mała zmiana:** 1.0.1 → 1.0.2 → 1.0.3 → 1.0.4 (itd.)
- **Średnia zmiana:** 1.0.9 → 1.1.0
- **Duża zmiana:** 1.9.0 → 2.0.0

**ZAWSZE ZWIĘKSZAJ NUMER!** Nigdy nie cofaj się do niższego numeru.

---

## 🔹 KROK 3: WGRAJ PLIKI NA SERWER

### 🌐 Wariant A: Przez program FTP (FileZilla, WinSCP, Total Commander)

#### KROK 3A-1: Uruchom program FTP
1. Otwórz FileZilla (lub inny program FTP)
2. Wpisz dane do połączenia:
   - **Host:** ftp.twojastrona.pl (dostaniesz od hostingu)
   - **Nazwa użytkownika:** twoj_login
   - **Hasło:** twoje_haslo
   - **Port:** 21 (lub 22 dla SFTP)
3. Kliknij **Połącz** lub **Quickconnect**

#### KROK 3A-2: Znajdź folder z aplikacją
1. **Po prawej stronie** (serwer) - przejdź do folderu, gdzie jest Twoja aplikacja
   - Zwykle: `/public_html/` lub `/www/` lub `/htdocs/`
2. **Po lewej stronie** (komputer) - przejdź do folderu `d:\VSCODE\gym-app\`

#### KROK 3A-3: Wgraj pliki
**OBOWIĄZKOWO wgraj:**
- `index.html` (z nowym numerem wersji)

**Jeśli zmieniałeś inne pliki, wgraj też:**
- `style.css` (jeśli zmieniałeś)
- `script.js` (jeśli zmieniałeś)
- `.htaccess` (jeśli go stworzyłeś)

**Jak wgrać:**
1. Zaznacz plik `index.html` po lewej stronie
2. **Przeciągnij** go na prawą stronę (na serwer)
3. Jeśli pyta "Czy nadpisać?" - kliknij **TAK** lub **Overwrite**
4. Poczekaj, aż pasek postępu się zakończy
5. Sprawdź, czy data modyfikacji pliku na serwerze się zmieniła

### 🌐 Wariant B: Przez panel hostingu (np. cPanel, DirectAdmin)

#### KROK 3B-1: Zaloguj się do panelu
1. Otwórz przeglądarkę
2. Wejdź na stronę Twojego hostingu (np. `panel.twojastrona.pl`)
3. Wpisz login i hasło
4. Kliknij **Zaloguj**

#### KROK 3B-2: Otwórz Menedżer Plików
1. Znajdź ikonę **"Menedżer Plików"** lub **"File Manager"**
2. Kliknij na nią
3. Przejdź do folderu z aplikacją (zwykle `public_html/`)

#### KROK 3B-3: Usuń stary index.html
1. Znajdź plik `index.html`
2. **Kliknij prawym przyciskiem** na niego
3. Wybierz **"Usuń"** lub **"Delete"**
4. Potwierdź usunięcie

#### KROK 3B-4: Wgraj nowy index.html
1. Kliknij przycisk **"Wgraj"** lub **"Upload"** (górny pasek)
2. Kliknij **"Wybierz plik"** lub **"Select File"**
3. Przejdź do folderu `d:\VSCODE\gym-app\`
4. Zaznacz plik `index.html`
5. Kliknij **"Otwórz"**
6. Poczekaj, aż pasek postępu się zakończy (100%)
7. Odśwież stronę w panelu - plik powinien się pojawić

#### KROK 3B-5: Wgraj inne zmienione pliki
Jeśli zmieniałeś `style.css` lub `script.js` - powtórz kroki 3B-3 i 3B-4 dla tych plików.

### ✅ Jak sprawdzić, czy pliki się wgrały?
1. Otwórz przeglądarkę na komputerze
2. Wejdź na swoją stronę: `http://twojastrona.pl`
3. Naciśnij **Ctrl+U** (pokaże kod źródłowy)
4. Sprawdź, czy widzisz **nowy numer wersji** (np. `?v=1.0.2`)
5. Jeśli TAK - pliki się wgrały ✅
6. Jeśli NIE - wróć do Kroku 3 i spróbuj ponownie

---

## 🔹 KROK 4: WYCZYŚĆ PAMIĘĆ CACHE NA TELEFONIE

### 📱 Co to jest cache i dlaczego go czyścimy?
Cache to "pamięć podręczna" - telefon zapisuje starą wersję aplikacji, żeby szybciej ją załadować. **Musimy wyczyścić tę pamięć**, żeby telefon pobrał nową wersję.

---

### 🤖 Wariant A: TELEFON Z ANDROIDEM (Chrome, Edge, Firefox)

#### SPOSÓB 1: Przez ustawienia Chrome (ZALECANY)

**KROK 4A-1:** Otwórz aplikację w Chrome
1. Otwórz przeglądarkę **Chrome** na telefonie
2. Wpisz adres swojej aplikacji (np. `twojastrona.pl`)
3. Poczekaj, aż strona się załaduje

**KROK 4A-2:** Otwórz menu strony
1. Dotknij **trzech kropek ⋮** w **prawym górnym rogu**
2. Menu się rozwinie

**KROK 4A-3:** Przejdź do informacji o witrynie
1. Znajdź opcję **"Informacje o stronie"** lub **"Ustawienia witryny"** (z ikoną ⓘ)
2. Dotknij jej

**KROK 4A-4:** Wyczyść dane
1. Znajdź przycisk **"Wyczyść i zresetuj"** lub **"Wyczyść dane witryny"**
2. Dotknij go
3. Potwierdź wybór (kliknij **"Wyczyść"** lub **"OK"**)
4. Poczekaj 2-3 sekundy

**KROK 4A-5:** Odśwież stronę
1. Wróć do strony (cofnij się)
2. **Pociągnij palcem w dół** od góry ekranu (gesture odświeżania)
3. Lub dotknij ikonę **↻** (odśwież)
4. Strona się przeładuje z nowymi plikami

#### SPOSÓB 2: Tryb incognito (SZYBSZY, ALE TYMCZASOWY)

**KROK 4A-6:** Otwórz tryb incognito
1. W Chrome dotknij **trzech kropek ⋮**
2. Wybierz **"Nowa karta incognito"** (ikona kapelusza 🕶️)
3. Wpisz adres swojej aplikacji
4. Sprawdź, czy zmiany są widoczne

**⚠️ UWAGA:** Tryb incognito to tylko test! Po zamknięciu karty, normalna aplikacja nadal będzie pokazywać starą wersję. Musisz wyczyścić cache normalnie (Sposób 1).

---

### 🍎 Wariant B: iPHONE (Safari)

#### SPOSÓB 1: Wyczyść całą historię Safari (NAJPROSTSZY)

**KROK 4B-1:** Otwórz Ustawienia iPhone
1. Wyjdź z Safari
2. Dotknij ikony **"Ustawienia"** (szara ikona z trybami ⚙️)
3. Ustawienia się otworzą

**KROK 4B-2:** Znajdź Safari
1. **Przewiń w dół** listę aplikacji
2. Znajdź **"Safari"** (niebieska ikona kompasu)
3. Dotknij "Safari"

**KROK 4B-3:** Wyczyść dane
1. **Przewiń w dół** w ustawieniach Safari
2. Znajdź opcję **"Wyczyść historię i dane witryn"** (niebieska opcja)
3. Dotknij jej
4. Potwierdź - dotknij **"Wyczyść historię i dane"** (czerwony przycisk)
5. Poczekaj 2-3 sekundy

**KROK 4B-4:** Otwórz aplikację ponownie
1. Wyjdź z Ustawień
2. Otwórz **Safari**
3. Wpisz adres swojej aplikacji
4. Strona załaduje się z nowymi plikami

#### SPOSÓB 2: Wyczyść tylko dla jednej strony (BARDZIEJ PRECYZYJNY)

**KROK 4B-5:** Otwórz aplikację w Safari
1. Otwórz Safari
2. Wpisz adres aplikacji
3. Strona się załaduje

**KROK 4B-6:** Otwórz ustawienia strony
1. Dotknij ikony **"aA"** po lewej stronie paska adresu
2. Menu się rozwinie

**KROK 4B-7:** Przejdź do ustawień witryny
1. Wybierz **"Ustawienia witryny"** lub **"Website Settings"**
2. Nowe okno się otworzy

**KROK 4B-8:** Wyczyść dane strony
1. Znajdź opcję **"Wyczyść historię i dane"** lub podobną
2. Dotknij jej
3. Potwierdź wybór

**KROK 4B-9:** Odśwież stronę
1. Dotknij ikonę **↻** (odświeżanie) w pasku adresu
2. Lub pociągnij stronę w dół
3. Strona się przeładuje

#### SPOSÓB 3: Tryb prywatny (DO TESTOWANIA)

**KROK 4B-10:** Włącz tryb prywatny
1. W Safari dotknij ikony **kart** (dwa kwadraty) na dole
2. Dotknij **"Prywatna"** lub **"Private"** (lewy dolny róg)
3. Dotknij **"+"** (nowa karta)
4. Wpisz adres aplikacji
5. Sprawdź zmiany

---

## 🔹 KROK 5: SPRAWDŹ, CZY WSZYSTKO DZIAŁA

### ✅ Jak sprawdzić?

**KROK 5-1:** Otwórz aplikację na telefonie
1. Otwórz przeglądarkę (Chrome/Safari)
2. Wejdź na swoją stronę
3. **DOKŁADNIE SPRAWDŹ** zmiany, które wprowadziłeś

**KROK 5-2:** Lista kontrolna
Sprawdź, czy widzisz:
- ✅ Nowy tekst (jeśli zmieniałeś)
- ✅ Nowe kolory (jeśli zmieniałeś)
- ✅ Nowe funkcje (jeśli dodawałeś)
- ✅ Wszystko działa poprawnie

**KROK 5-3:** Jeśli wszystko OK
🎉 **GRATULACJE!** Aktualizacja zakończona sukcesem!

**KROK 5-4:** Jeśli nadal widzisz STARĄ wersję
❌ Przejdź do **KROKU 6** (rozwiązywanie problemów)

---

## 🔹 KROK 6: CO ROBIĆ, GDY NADAL WIDAĆ STARĄ WERSJĘ? 🆘

### 🔍 Problem 1: Telefon nadal pokazuje starą wersję po wyczyszczeniu cache

#### ROZWIĄZANIE A: Wymuś "twarde" odświeżenie

**Android:**
1. Otwórz aplikację w Chrome
2. **Dotknij i przytrzymaj** ikonę odświeżania ↻ przez 2 sekundy
3. Wybierz **"Odśwież mimo to"** lub **"Hard refresh"**

**iPhone:**
1. Zamknij Safari całkowicie (podwójne kliknięcie przycisku Home → przesuń Safari w górę)
2. **WYŁĄCZ telefon** (przytrzymaj przycisk zasilania)
3. **WŁĄCZ telefon** ponownie
4. Otwórz Safari i wejdź na stronę

#### ROZWIĄZANIE B: Usuń aplikację z ekranu głównego i dodaj na nowo

**KROK 6B-1:** Usuń ikonę aplikacji
1. Znajdź ikonę aplikacji na ekranie głównym telefonu
2. **Dotknij i przytrzymaj** ikonę
3. Wybierz **"Usuń"** lub **"Remove"**
4. Potwierdź usunięcie

**KROK 6B-2:** Wyczyść cache (powtórz KROK 4)
Wróć do **KROKU 4** i wyczyść cache jeszcze raz.

**KROK 6B-3:** Dodaj aplikację na nowo
1. Otwórz przeglądarkę
2. Wejdź na stronę aplikacji
3. **Android:** Menu ⋮ → "Dodaj do ekranu głównego"
4. **iPhone:** Przycisk "Udostępnij" ⬆️ → "Dodaj do ekranu głównego"

---

### 🔍 Problem 2: Nie wiem, czy pliki się wgrały na serwer

#### ROZWIĄZANIE: Sprawdź kod źródłowy strony

**KROK 6C-1:** Otwórz stronę na komputerze
1. Otwórz przeglądarkę na **komputerze** (nie telefonie!)
2. Wpisz adres: `http://twojastrona.pl`
3. Strona się załaduje

**KROK 6C-2:** Pokaż kod źródłowy
1. Naciśnij **Ctrl+U** (Windows) lub **Cmd+Option+U** (Mac)
2. Otworzy się nowa karta z kodem HTML

**KROK 6C-3:** Znajdź numer wersji
1. Naciśnij **Ctrl+F** (szukaj)
2. Wpisz: `style.css`
3. Sprawdź, czy widzisz:
   ```html
   <link rel="stylesheet" href="style.css?v=1.0.2" />
   ```

**KROK 6C-4:** Oceń wynik
- ✅ **Widzisz nowy numer (1.0.2)?** - Pliki są na serwerze! Problem jest w cache telefonu - wróć do KROKU 4.
- ❌ **Widzisz stary numer (1.0.1)?** - Pliki NIE są na serwerze! Wróć do KROKU 3 i wgraj je ponownie.

---

### 🔍 Problem 3: Wgrałem pliki, ale nadal stary numer w kodzie źródłowym

#### ROZWIĄZANIE: Sprawdź, czy naprawdę zmieniłeś numer wersji

**KROK 6D-1:** Otwórz index.html w VS Code
1. Wróć do VS Code
2. Otwórz plik `index.html`

**KROK 6D-2:** Sprawdź numer wersji
Naciśnij **Ctrl+F** i wpisz `?v=` - sprawdź, czy oba numery są nowe (1.0.2):
```html
<link rel="stylesheet" href="style.css?v=1.0.2" />
<script type="module" src="./script.js?v=1.0.2"></script>
```

**KROK 6D-3:** Jeśli są stare numery
1. Zmień je na nowe (KROK 2)
2. **Zapisz plik** (Ctrl+S)
3. Wgraj na serwer ponownie (KROK 3)

---

### 🔍 Problem 4: Wszystko zrobiłem, a nadal stara wersja

#### ROZWIĄZANIE: OSTATECZNE ROZWIĄZANIE (zawsze działa)

**KROK 6E-1:** Zmień numer wersji na DUŻO wyższy
Zamiast 1.0.2, użyj:
```html
<link rel="stylesheet" href="style.css?v=2.0.0" />
<script type="module" src="./script.js?v=2.0.0"></script>
```

**KROK 6E-2:** Wgraj na serwer

**KROK 6E-3:** Wyczyść WSZYSTKO na telefonie
1. **Android:** Ustawienia → Aplikacje → Chrome → Pamięć → Wyczyść pamięć podręczną
2. **iPhone:** Ustawienia → Safari → Wyczyść historię i dane

**KROK 6E-4:** Zrestartuj telefon
1. Wyłącz telefon całkowicie
2. Włącz po 10 sekundach
3. Otwórz aplikację

---

## 📋 SZYBKA CHECKLIST (do wydruku)

Przed każdą aktualizacją zaznacz:

```
□ KROK 1: Wprowadziłem zmiany w kodzie
□ KROK 1: Zapisałem wszystkie pliki (Ctrl+S)
□ KROK 2: Otworzyłem index.html
□ KROK 2: Zmieniłem numer w style.css?v=X.X.X
□ KROK 2: Zmieniłem numer w script.js?v=X.X.X
□ KROK 2: OBA numery są takie same
□ KROK 2: Zapisałem index.html
□ KROK 3: Połączyłem się z serwerem (FTP/panel)
□ KROK 3: Wgrałem index.html na serwer
□ KROK 3: Sprawdziłem kod źródłowy na komputerze (Ctrl+U)
□ KROK 3: Widzę nowy numer wersji w kodzie źródłowym
□ KROK 4: Wyczyściłem cache na telefonie
□ KROK 5: Sprawdziłem aplikację na telefonie
□ KROK 5: ✅ WSZYSTKO DZIAŁA!
```

---

## 💡 NAJWAŻNIEJSZE ZASADY

### ⭐ ZŁOTA ZASADA #1:
**ZAWSZE ZWIĘKSZAJ NUMER WERSJI** - bez tego telefon nie pobierze nowych plików!

### ⭐ ZŁOTA ZASADA #2:
**OBA NUMERY MUSZĄ BYĆ TAKIE SAME** - style.css i script.js muszą mieć ten sam numer wersji!

### ⭐ ZŁOTA ZASADA #3:
**NAJPIERW SPRAWDŹ NA KOMPUTERZE** - zanim będziesz czyścić cache na telefonie, sprawdź kod źródłowy (Ctrl+U) i upewnij się, że nowy numer jest na serwerze!

### ⭐ ZŁOTA ZASADA #4:
**ZAPISZ AKTUALNY NUMER** - zapisz sobie, jaki numer wersji aktualnie używasz (np. w notatniku: "Aktualna wersja: 1.0.5")

---

## 📝 PRZYKŁAD KOMPLETNEJ AKTUALIZACJI

### Sytuacja: Chcę zmienić kolor przycisku na zielony

**1.** Otwieram `style.css`, zmieniam kolor: `background: green;`  
**2.** Zapisuję `style.css` (Ctrl+S)  
**3.** Otwieram `index.html`  
**4.** Zmieniam `style.css?v=1.0.1` → `style.css?v=1.0.2`  
**5.** Zmieniam `script.js?v=1.0.1` → `script.js?v=1.0.2`  
**6.** Zapisuję `index.html` (Ctrl+S)  
**7.** Otwieram FileZilla, łączę się z serwerem  
**8.** Wgrywam `index.html` (przeciągam → nadpisuję)  
**9.** Wgrywam `style.css` (przeciągam → nadpisuję)  
**10.** Sprawdzam na komputerze w przeglądarce  
**11.** Wciskam Ctrl+U - widzę `?v=1.0.2` ✅  
**12.** Otwieram telefon → Chrome → Moja aplikacja  
**13.** Menu ⋮ → Informacje o stronie → Wyczyść dane  
**14.** Odświeżam stronę (pociągnięcie w dół)  
**15.** Przycisk jest zielony! ✅ SUKCES!

---

## 🎓 CZĘSTE PYTANIA (FAQ)

**Q: Czy muszę za każdym razem zwiększać numer wersji?**  
A: TAK! Bez tego telefon nie pobierze nowych plików.

**Q: Co jeśli zapomnę zmienić numer wersji?**  
A: Telefon będzie pokazywać starą wersję. Musisz wrócić, zmienić numer i wgrać pliki ponownie.

**Q: Czy mogę użyć tego samego numeru dwa razy?**  
A: NIE! Zawsze zwiększaj numer. Telefon pamięta poprzednie wersje.

**Q: Jak sprawdzić, jaki numer wersji jest aktualnie na telefonie?**  
A: Nie da się sprawdzić bezpośrednio. Dlatego zapisuj sobie aktualny numer w notatniku.

**Q: Czy wystarczy wyczyścić cache tylko raz?**  
A: TAK, ale jeśli nie zadziała, spróbuj ponownie lub użyj trybu incognito.

**Q: Czy muszę wgrywać style.css i script.js jeśli ich nie zmieniałem?**  
A: NIE, wystarczy wgrać `index.html` z nowym numerem wersji.

---

**Ostatnia aktualizacja:** 22 grudnia 2025  
**Wersja instrukcji:** 2.0 (Ultra szczegółowa)
