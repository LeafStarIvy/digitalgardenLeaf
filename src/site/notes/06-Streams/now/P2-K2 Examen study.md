---
{"dg-publish":true,"permalink":"/06-streams/now/p2-k2-examen-study/","noteIcon":"","created":"2025-09-16T20:03:03.672+02:00","updated":"2025-09-16T20:03:32.698+02:00"}
---

# P2-K2: Security Controle - Complete Exam Guide

_Alfa College Boumaboulevard - Expert IT Systems and Devices_

## 📋 Exam Overview

### Kerntaken (Core Tasks)

- **P2-K2-W1**: Geeft security advies en verbetert de security
- **P2-K2-W2**: Reageert op security incidenten

### Exam Format

- Praktisch examen met client PC en admin toegang
- Vulnerabilities identificeren, documenteren en oplossen
- Focus op Nederlandse AVG wetgeving (Artikelen 33 & 34)
- Tijdsduur: Enkele uren

---

## 🔍 1. Security Vulnerabilities Identificatie

### 1.1 Windows Security Vulnerabilities Checklist

#### A. Gebruikersaccounts en Toegang

- [ ] **Zwakke wachtwoorden controleren**
    - Geen wachtwoordvereisten
    - Standaard wachtwoorden (admin, password, 123456)
    - Lege wachtwoorden
- [ ] **Onnodige administrator accounts**
    - Gastaccount ingeschakeld
    - Meerdere admin accounts
    - Accounts zonder wachtwoordverloop
- [ ] **Groepslidmaatschappen controleren**
    - Users in Administrators groep
    - Onnodige privileges

```cmd
# Commands om te controleren:
net user
net localgroup administrators
net accounts
```

#### B. Services en Processen

- [ ] **Onnodige services**
    - Telnet service
    - FTP service zonder encryptie
    - Remote Desktop zonder restrictions
- [ ] **Malware/Verdachte processen**
    - Onbekende processen in Task Manager
    - Hoge CPU/Memory usage
    - Processen zonder digitale handtekening

```cmd
# Commands:
services.msc
taskmgr
msconfig
```

#### C. Netwerk Security

- [ ] **Firewall instellingen**
    - Windows Firewall uitgeschakeld
    - Alle poorten open
    - Geen uitgaande regels
- [ ] **Gedeelde mappen**
    - Onbeveiligde shares (Everyone - Full Control)
    - Administrative shares blootgesteld
    - Geen wachtwoord bescherming

```cmd
# Commands:
netstat -an
net share
ipconfig /all
```

#### D. Software Vulnerabilities

- [ ] **Verouderde software**
    - Oude browser versies
    - Geen automatische updates
    - Ongepatched OS
- [ ] **Antivirus/Anti-malware**
    - Geen antivirus geïnstalleerd
    - Verouderde definities
    - Real-time scanning uit

### 1.2 Meest Voorkomende Vulnerabilities in Examen

1. **Default Passwords** - Altijd eerste check
2. **Disabled Firewall** - Windows Defender Firewall uit
3. **Guest Account Enabled** - Gastaccount actief
4. **Unnecessary Admin Rights** - Users met admin rechten
5. **Open Shares** - C$ en andere shares toegankelijk
6. **Missing Updates** - Windows Updates uitgeschakeld
7. **Weak Password Policy** - Geen complexity vereisten
8. **Running Unnecessary Services** - Telnet, FTP, etc.

---

## 🛠️ 2. Security Fixes & Hardening

### 2.1 User Account Security

#### Wachtwoordbeleid Versterken

```powershell
# Via Group Policy of Security Policy
secpol.msc
```

**Instellingen:**

- Minimale lengte: 8 karakters
- Complexity vereisten: Ingeschakeld
- Password age: Max 90 dagen
- Account lockout: 3 pogingen

#### Accounts Beveiligen

```cmd
# Guest account uitschakelen
net user guest /active:no

# Onnodige users verwijderen
net user [username] /delete

# Admin account hernoemen
```

### 2.2 System Hardening

#### Windows Firewall Configureren

```cmd
# Firewall inschakelen voor alle profielen
netsh advfirewall set allprofiles state on

# Onnodige regels verwijderen
netsh advfirewall firewall show rule name=all
```

#### Services Uitschakelen

```cmd
# Onnodige services stoppen en uitschakelen
sc stop Telnet
sc config Telnet start= disabled

sc stop FTPSVC
sc config FTPSVC start= disabled
```

#### Registry Hardening (Voorzichtig!)

```reg
# UAC inschakelen
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System
EnableLUA = 1
```

### 2.3 Network Security

#### Shares Beveiligen

```cmd
# Onnodige shares verwijderen (behalve admin shares die nodig zijn)
net share [sharename] /delete

# Permissions wijzigen via Windows Explorer
# Rechtsklik > Properties > Security > Edit
```

#### Remote Access Beperken

```cmd
# RDP uitschakelen als niet nodig
# System Properties > Remote > Disable Remote Desktop
```

---

## 📊 3. Security Assessment Tools

### 3.1 Ingebouwde Windows Tools

#### Event Viewer

```cmd
eventvwr.msc
```

**Waar naar kijken:**

- Security logs voor failed logins
- System logs voor errors
- Application logs voor crashes

#### Security Configuration Analysis

```cmd
# Security templates controleren
%SystemRoot%\security\templates\
```

#### Windows Security Center

```cmd
wscui.cpl
```

### 3.2 Command Line Tools

#### Network Analysis

```cmd
# Actieve verbindingen
netstat -ano

# Open poorten
netstat -an | find "LISTENING"

# ARP tabel
arp -a
```

#### File System Security

```cmd
# NTFS permissions controleren
cacls C:\folder
icacls C:\folder

# File integrity
sfc /scannow
```

### 3.3 PowerShell Security Commands

```powershell
# Execution policy controleren
Get-ExecutionPolicy

# Lokale users en groepen
Get-LocalUser
Get-LocalGroup
Get-LocalGroupMember Administrators

# Services controleren
Get-Service | Where-Object {$_.Status -eq "Running"}

# Processen met network verbindingen
Get-NetTCPConnection | Select LocalAddress,LocalPort,RemoteAddress,RemotePort,State,OwningProcess
```

---

## 🚨 4. Incident Response (P2-K2-W2)

### 4.1 Incident Response Process

#### Stap 1: Identificatie

- **Symptoms herkennen**
    - Langzame performance
    - Ongewone network traffic
    - Onbekende accounts
    - Gewijzigde files

#### Stap 2: Containment

- **Immediate actions**
    - Verdachte accounts uitschakelen
    - Network isolation
    - Services stoppen
    - System backup maken

#### Stap 3: Eradication

- **Oorzaak verwijderen**
    - Malware scannen en verwijderen
    - Vulnerable software patchen
    - Compromised accounts resetten

#### Stap 4: Recovery

- **System herstellen**
    - Services herstarten
    - Monitoring intensiveren
    - Functionality testen

#### Stap 5: Documentation

- **Incident rapportage**
    - Timeline van events
    - Getroffen systemen
    - Genomen maatregelen
    - Preventieve aanbevelingen

### 4.2 Common Security Incidents

#### Malware Infectie

```cmd
# Tools gebruiken:
# - Windows Defender
# - Malwarebytes (als beschikbaar)
# - System File Checker
sfc /scannow
```

#### Unauthorized Access

```cmd
# Logs controleren
eventvwr.msc
# Security > Logon Events
```

#### Data Breach

- Onmiddellijk alle toegang blokkeren
- Scope van breach bepalen
- AVG melding voorbereiden

---

## 📋 5. AVG/GDPR Compliance (Artikelen 33 & 34)

### 5.1 Artikel 33 - Melding aan Toezichthouder

#### Wanneer Melden?

- **Binnen 72 uur** na ontdekking
- **Tenzij** geen risico voor rechten en vrijheden betrokkenen
- **Vertraging** moet gemotiveerd worden

#### Wat Melden?

1. **Aard van de inbreuk**
    
    - Categorieën betrokkenen
    - Aantal getroffen personen
    - Categorieën persoonsgegevens
2. **Contactgegevens**
    
    - DPO of contactpunt naam
    - Waar meer informatie te verkrijgen
3. **Waarschijnlijke gevolgen**
    
    - Impact assessment
    - Risico inschatting
4. **Genomen maatregelen**
    
    - Reeds uitgevoerd
    - Nog te nemen stappen
    - Mitigerende maatregelen

### 5.2 Artikel 34 - Melding aan Betrokkenen

#### Wanneer Communiceren?

- **Hoog risico** voor rechten en vrijheden
- **Zonder onnodige vertraging**
- **In duidelijke en begrijpelijke taal**

#### Uitzonderingen (Geen melding nodig):

1. **Technische beschermingsmaatregelen**
    
    - Encryptie was actief
    - Data onleesbaar voor onbevoegden
2. **Maatregelen genomen**
    
    - Hoog risico niet meer waarschijnlijk
    - Follow-up acties hebben risico weggenomen
3. **Onevenredige inspanning**
    
    - Publieke communicatie als alternatief
    - Betrokkenen op gelijkwaardige wijze informeren

### 5.3 Praktische Implementatie

#### Documentation Vereisten

```
Inbreuk Register moet bevatten:
- Feiten betreffende inbreuk
- Gevolgen van de inbreuk  
- Genomen herstelmaatregelen
```

#### Response Team

- **Data Protection Officer (DPO)**
- **IT Security Officer**
- **Legal/Compliance team**
- **Management/Leadership**

---

## 🔧 6. Praktische Exam Tips

### 6.1 Systematische Aanpak

#### Phase 1: Reconnaissance (15 min)

1. **System Information**

```cmd
systeminfo
whoami
hostname
ipconfig /all
```

2. **Current Status Check**

```cmd
net user
net localgroup administrators
services.msc (quick scan)
taskmgr (running processes)
```

#### Phase 2: Vulnerability Assessment (45 min)

**Use this checklist systematically:**

```
□ Password Policy weak/disabled
□ Guest account enabled  
□ Unnecessary admin users
□ Windows Firewall disabled
□ Antivirus missing/disabled
□ Windows Updates disabled
□ Unnecessary services running (Telnet, FTP)
□ Open network shares
□ Weak file permissions
□ Missing security patches
□ Suspicious running processes
□ Open network ports
□ Event logs showing attacks
□ Registry security issues
□ Browser security settings
```

#### Phase 3: Documentation (20 min)

- **Vulnerability Report Template**
- **Risk Assessment**
- **Remediation Steps**
- **Verification Testing**

#### Phase 4: Implementation (60 min)

- **Fix vulnerabilities systematically**
- **Test each fix**
- **Document changes made**
- **Verify fixes work**

### 6.2 Documentation Template

```markdown
# Security Assessment Report

## Executive Summary
- [Aantal] vulnerabilities gevonden
- [Risico niveau] overall risk rating
- [Aantal] critical issues requiring immediate attention

## Vulnerabilities Found

### Critical Risk
1. **[Vulnerability Name]**
   - **Locatie:** [Where found]
   - **Risico:** [Impact description]
   - **Oplossing:** [Remediation steps]
   - **Status:** [Fixed/Pending]

### High Risk
[Same format]

### Medium Risk
[Same format]

## Remediation Summary
- [X] vulnerabilities resolved
- [X] vulnerabilities remaining
- [X] additional recommendations

## Verification
- [Test beschrijving]
- [Results]

## Recommendations
- [Future security improvements]
- [Preventive measures]
```

### 6.3 Time Management

**Total: ~3 hours**

- Assessment: 1 hour
- Fixes: 1.5 hours
- Documentation: 30 minutes

**Priority Order:**

1. **Critical vulnerabilities** (guest account, firewall off)
2. **High impact fixes** (admin rights, services)
3. **Medium priorities** (updates, hardening)
4. **Documentation** (don't skip this!)

---

## 🎯 7. Mock Exam Scenarios

### Scenario 1: Basic Corporate Workstation

**Typical Issues:**

- Guest account enabled
- User has admin rights
- Windows Firewall disabled
- No password complexity
- Antivirus disabled
- Several unnecessary services running

### Scenario 2: Server Environment

**Typical Issues:**

- Default administrator password
- Open file shares
- Telnet service running
- No audit logging
- Missing security updates
- Weak service permissions

### Scenario 3: Compromised System

**Typical Issues:**

- Suspicious processes running
- Unknown user accounts
- Modified system files
- Network connections to suspicious IPs
- Event logs showing attack patterns
- Disabled security features

---

## 📚 8. Quick Reference Commands

### Essential Commands

```cmd
# User Management
net user                           # List all users
net user [username]               # User details
net localgroup administrators     # Admin group members
net user guest /active:no         # Disable guest

# Service Management  
services.msc                      # Services console
sc query                          # List all services
sc stop [service]                 # Stop service
sc config [service] start=disabled # Disable service

# Network Security
netstat -ano                      # Network connections
net share                         # Shared folders
netsh advfirewall set allprofiles state on # Enable firewall

# System Security
eventvwr.msc                      # Event viewer
secpol.msc                        # Security policy
gpedit.msc                        # Group policy
msconfig                          # System configuration

# File Security
icacls [path]                     # File permissions
sfc /scannow                      # System file check
```

### PowerShell Quick Commands

```powershell
Get-LocalUser                     # Local users
Get-LocalGroup                    # Local groups  
Get-Service | Where-Object {$_.Status -eq "Running"}
Get-Process | Sort-Object CPU -Descending
Get-NetTCPConnection | Where-Object {$_.State -eq "Listen"}
```

---

## ⚠️ 9. Common Exam Mistakes to Avoid

### Technical Mistakes

1. **Not checking basic settings first** (guest account, firewall)
2. **Missing services review** (Telnet, FTP always check)
3. **Forgetting to test fixes** (verify changes work)
4. **Not checking event logs** (evidence of attacks)
5. **Overlooking file shares** (network permissions)

### Documentation Mistakes

1. **Poor documentation** (not detailed enough)
2. **Missing risk assessment** (no impact analysis)
3. **No verification steps** (didn't test fixes)
4. **Incomplete remediation** (not all issues fixed)
5. **No recommendations** (future preventive measures)

### Time Management Mistakes

1. **Too much time on minor issues** (focus on critical first)
2. **Not enough time for documentation** (plan 30 min minimum)
3. **Not testing fixes** (broken system worse than vulnerable)
4. **Getting stuck on one problem** (move on, come back)

---

## 🚀 10. Last Minute Study Tips

### Tonight's Study Plan (7PM - 12AM)

- **7-8 PM:** Read through this guide completely
- **8-9 PM:** Practice command line tools
- **9-10 PM:** Review AVG articles 33 & 34
- **10-11 PM:** Work through mock scenarios
- **11-12 AM:** Final review of checklist and commands

### Morning Review (30 min before exam)

- **Vulnerability checklist** (memorize top 10)
- **Essential commands** (quick reference)
- **Documentation template** (know the structure)
- **AVG requirements** (72-hour rule, high risk criteria)

### During the Exam

1. **Read instructions carefully** (understand what's expected)
2. **Use systematic approach** (don't jump around randomly)
3. **Document as you go** (don't leave documentation to end)
4. **Verify each fix** (test that it works)
5. **Manage time wisely** (don't get stuck on one issue)

---

## 📞 Emergency Reference

### If You Get Stuck

1. **Check Event Viewer** (often shows what's wrong)
2. **Use built-in help** (`command /?` for help)
3. **Go back to basics** (guest account, firewall, admin users)
4. **Look at running services** (disable unnecessary ones)
5. **Check network connections** (`netstat -ano`)

### Critical Success Factors

- ✅ **Find the obvious vulnerabilities first**
- ✅ **Document everything clearly**
- ✅ **Test your fixes**
- ✅ **Know AVG requirements**
- ✅ **Manage your time**

---

_Good luck with your exam! Remember: systematic approach, clear documentation, and thorough testing are key to success._

## Tags

#P2K2 #Security #AVG #GDPR #Windows #MBO #ExpertIT #AlfaCollege #Cybersecurity #Vulnerability #Assessment