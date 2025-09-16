---
{"dg-publish":true,"permalink":"/06-streams/now/p2-k2-examen-study/","noteIcon":"","created":"2025-09-16T20:03:03.672+02:00","updated":"2025-09-16T20:14:15.894+02:00"}
---

# P2-K2 Security - MEMORIZATION GUIDE

_Voor perfecte examenprestatie - Alfa College_

---

## 🚨 THE GOLDEN 8 - MEMORIZE THESE FIRST

_Deze 8 vulnerabilities komen in 90% van de examens voor - leer ze uit je hoofd!_

1. **Guest Account = ALTIJD UIT**
2. **Firewall = ALTIJD AAN**
3. **Admin Users = ALLEEN ECHTE ADMINS**
4. **Services = TELNET & FTP UIT**
5. **Shares = GEEN C$ VOOR EVERYONE**
6. **Passwords = COMPLEXITY AAN**
7. **Antivirus = AAN EN UPDATED**
8. **Updates = AUTOMATISCH AAN**

---

## 📋 PART 1: THE 15-MINUTE SYSTEM SCAN

_Doe dit ALTIJD eerst - in deze volgorde!_

### Stap 1: Basis Info (2 minuten)

```cmd
whoami
hostname  
systeminfo | find "OS"
```

### Stap 2: Users Controleren (3 minuten)

```cmd
net user
net localgroup administrators
```

**ONTHOUD:** Schrijf alle usernames op papier!

### Stap 3: Services Scan (5 minuten)

```cmd
services.msc
```

**ZOEK NAAR:** Telnet, FTP, Remote Registry **STATUS MOET ZIJN:** Disabled/Stopped

### Stap 4: Network Check (3 minuten)

```cmd
netstat -an | find "LISTEN"
net share
```

### Stap 5: Firewall Status (2 minuten)

```cmd
netsh advfirewall show allprofiles
```

**MOET ZIJN:** State = ON voor alle profielen

---

## 🔧 PART 2: THE FIX SEQUENCE

_Volg deze volgorde EXACT - niet aanpassen!_

### FIX 1: Guest Account (1 minuut)

```cmd
net user guest /active:no
```

**VERIFICATIE:**

```cmd
net user guest
```

**MOET ZIEN:** Account active = No

### FIX 2: Firewall Aanzetten (2 minuten)

```cmd
netsh advfirewall set allprofiles state on
```

**VERIFICATIE:**

```cmd
netsh advfirewall show allprofiles | find "State"
```

**MOET ZIEN:** State = ON (alle 3 profielen)

### FIX 3: Admin Users Opruimen (5 minuten per user)

**Voor elke NIET-ADMIN user in Administrators groep:**

```cmd
net localgroup administrators [username] /delete
```

**Voor echte admins - password resetten:**

```cmd
net user [username] NewP@ssw0rd123!
net user [username] /passwordreq:yes
```

**NIEUWE ADMIN MAKEN (als nodig):**

```cmd
net user SecureAdmin NewP@ssw0rd123! /add
net localgroup administrators SecureAdmin /add
```

### FIX 4: Services Uitschakelen (3 minuten per service)

```cmd
sc stop Telnet
sc config Telnet start= disabled

sc stop FTPSVC  
sc config FTPSVC start= disabled

sc stop RemoteRegistry
sc config RemoteRegistry start= disabled
```

### FIX 5: Password Policy (5 minuten)

```cmd
secpol.msc
```

**NAVIGEER:** Account Policies > Password Policy **INSTELLEN:**

- Minimum length = 8
- Complexity = Enabled
- Maximum age = 90

### FIX 6: Shares Beveiligen (3 minuten per share)

**Via Windows Explorer:**

1. Rechtsklik op C:
2. Properties → Security → Advanced
3. Verwijder "Everyone" als die er staat
4. Alleen Administrators en System laten staan

### FIX 7: Windows Updates (2 minuten)

```cmd
# Open Windows Update settings
ms-settings:windowsupdate
```

**OF via Control Panel:**

```cmd
wuapp
```

**ZORG DAT:** Automatic updates = ON

### FIX 8: Antivirus Check (3 minuten)

```cmd
# Windows Defender controleren
windowsdefender:
```

**ZORG DAT:**

- Real-time protection = ON
- Definitions = Updated

---

## 📝 PART 3: DOCUMENTATION TEMPLATE

_Gebruik deze EXACTE structuur - leer uit je hoofd!_

```
SECURITY ASSESSMENT RAPPORT
===========================

GEVONDEN VULNERABILITIES:
1. Guest account actief - OPGELOST
2. Firewall uitgeschakeld - OPGELOST  
3. User [naam] heeft admin rechten - OPGELOST
4. Telnet service actief - OPGELOST
5. C$ share toegankelijk voor Everyone - OPGELOST
6. Geen password complexity - OPGELOST
7. Windows Updates uitgeschakeld - OPGELOST
8. Antivirus niet up-to-date - OPGELOST

GENOMEN MAATREGELEN:
- Guest account uitgeschakeld via 'net user guest /active:no'
- Firewall ingeschakeld voor alle profielen
- Onnodige admin rechten verwijderd
- Gevaarlijke services gestopt en disabled
- File shares beveiligd
- Password policy aangepast naar 8+ karakters met complexity
- Automatische updates ingeschakeld
- Antivirus definitions geüpdatet

VERIFICATIE:
- Alle fixes getest en werkend
- Systeem herstart en opnieuw gecontroleerd
- Geen nieuwe vulnerabilities gedetecteerd

AANBEVELINGEN:
- Regelmatige security audits
- User awareness training
- Monitoring van security logs
```

---

## 🚨 AVG ARTICLES 33 & 34 - MEMORIZE THIS!

### Artikel 33 (Melding aan toezichthouder)

**WANNEER:** Binnen 72 uur na ontdekking **TENZIJ:** Geen risico voor rechten en vrijheden **WAT MELDEN:**

1. Aard van de inbreuk + aantal betrokkenen
2. Contactgegevens DPO
3. Waarschijnlijke gevolgen
4. Genomen maatregelen

### Artikel 34 (Melding aan betrokkenen)

**WANNEER:** Hoog risico voor rechten en vrijheden **TENZIJ:**

- Data was encrypted/onleesbaar
- Maatregelen genomen waardoor geen hoog risico meer
- Onevenredige inspanning (dan publieke melding)

**PRAKTISCH VOORBEELD:** _"Bij een databreach met 500 klantgegevens moet binnen 72 uur melding bij de AP (Autoriteit Persoonsgegevens). Als er hoog risico is (bijv. wachtwoorden gelekt), ook klanten direct informeren."_

---

## ⚡ EMERGENCY CHEAT SHEET - LEER UIT JE HOOFD!

### Als je VAST ZIT - doe dit:

1. **Kijk in Event Viewer** - `eventvwr.msc`
2. **Check running processes** - `taskmgr`
3. **Scan for malware** - Windows Defender
4. **Check registry** - `regedit` (voorzichtig!)
5. **System file check** - `sfc /scannow`

### MOST COMMON COMMANDS - DRILL THESE!

```cmd
net user                    # Alle users
net user guest /active:no   # Guest uit
net localgroup administrators # Admin groep
services.msc               # Services console
netsh advfirewall set allprofiles state on # Firewall aan
net share                  # Shares bekijken
eventvwr.msc              # Event logs
secpol.msc                # Security policy
taskmgr                   # Task manager
systeminfo                # System info
netstat -an               # Network connections
```

---

## 🎯 MEMORIZATION STRATEGY FOR TONIGHT

### HOUR 1 (7-8 PM): THE GOLDEN 8

- Leer de 8 vulnerabilities uit je hoofd
- Oefen ze 10 keer opzeggen zonder kijken
- Schrijf ze 5 keer over zonder kijken

### HOUR 2 (8-9 PM): COMMANDS DRILL

- Type elk commando 10 keer
- Test elke command op je PC
- Oefen de volgorde: scan → fix → verify

### HOUR 3 (9-10 PM): FIX SEQUENCE

- Oefen de hele fix sequence 3 keer
- Time jezelf - moet binnen 45 minuten
- Controleer elke verificatie stap

### HOUR 4 (10-11 PM): DOCUMENTATION

- Schrijf het rapport template 3 keer over
- Oefen het invullen met fictieve problemen
- Leer de AVG artikelen woordelijk

### HOUR 5 (11-12 AM): FINAL DRILL

- Complete run-through zonder hulp
- Time management oefenen
- Checklist maken voor morgen

---

## 🚀 EXAM DAY STRATEGY

### FIRST 5 MINUTES:

1. Schrijf de Golden 8 op papier
2. Schrijf de command list op papier
3. Schrijf de fix sequence op papier **DIT IS JE BACKUP ALS JE STRESS KRIJGT!**

### TIME ALLOCATION (3 uur = 180 min):

- **Assessment:** 45 minuten
- **Fixes:** 90 minuten
- **Documentation:** 30 minuten
- **Buffer:** 15 minuten

### PANIC PROTOCOL:

Als je vastloopt:

1. Stop, adem diep
2. Kijk naar je papier met de Golden 8
3. Check of je alle basic fixes hebt gedaan
4. Ga naar de volgende vulnerability
5. Kom later terug als je tijd hebt

---

## 🔥 PRACTICE TONIGHT - DO THIS 3 TIMES!

### MOCK SCENARIO:

_"Je krijgt een Windows 10 werkstation. De gebruiker klaagt over trage prestaties en verdachte activiteit."_

**JOUW ACTIE PLAN:**

1. Start met de 15-minute scan
2. Noteer alle gevonden issues
3. Volg de fix sequence exact
4. Documenteer alles
5. Verificeer elke fix
6. Schrijf eindrapport

**OEFEN DIT TOT HET AUTOMATISCH GAAT!**

---

## 💪 SUCCESS MANTRAS - ONTHOUD DEZE!

1. **"GOLDEN 8 FIRST, ALTIJD!"**
2. **"GUEST UIT, FIREWALL AAN!"**
3. **"FIX, VERIFY, DOCUMENT!"**
4. **"72 UUR REGEL BIJ AVG!"**
5. **"SYSTEMATISCH WERKEN WINT!"**

---

## 🎪 INTERNET RESOURCES YOU CAN USE DURING EXAM:

### Allowed Searches:

- "Windows security commands"
- "netsh firewall commands"
- "Windows services disable"
- "GDPR data breach notification"
- "Windows password policy"

### Quick Reference Sites:

- **Microsoft Docs** (docs.microsoft.com)
- **Windows Command Reference**
- **GDPR.eu** (for AVG info)

### NEVER SEARCH FOR:

- "P2-K2 exam answers"
- "Security vulnerabilities list"
- AI assistants or automated tools

---

**FINAL MESSAGE:** Je kunt dit! De sleutel is HERHALING. Doe vanavond 3 complete run-throughs. Morgen schrijf je eerst alles op papier, dan werk je systematisch de lijst af. Geen paniek, gewoon je plan volgen!

**JE GAAT SLAGEN! 🏆**