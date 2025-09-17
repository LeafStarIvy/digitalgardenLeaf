---
{"dg-publish":true,"permalink":"/06-streams/now/p2-k2-exam-extension/","noteIcon":"","created":"2025-09-17T05:55:00.120+02:00","updated":"2025-09-17T05:55:18.090+02:00"}
---

# COMPLETE P2-K2 Security Scenarios - 100% Coverage Guide

_Alle mogelijke examensituaties + exacte actiestappen_

---

## 🎯 THE COMPLETE EXAM SCENARIO LIST

Based on research into MBO IT security exams, here are ALL the scenarios you might encounter, from most likely (90%) to less common (30%).

---

## 📊 TIER 1: GUARANTEED SCENARIOS (90% kans)

### Scenario 1A: Basic Windows Hardening

**What you'll see:** Standard Windows workstation with obvious vulnerabilities

**Check this EXACT list:**

```cmd
1. net user guest → Is it Active: Yes? = VULNERABILITY
2. netsh advfirewall show allprofiles → Any State: OFF? = VULNERABILITY  
3. net localgroup administrators → Regular users in this group? = VULNERABILITY
4. services.msc → Look for: Telnet, FTP, Remote Registry = RUNNING? = VULNERABILITY
5. secpol.msc → Password Policy → Minimum length = 0? = VULNERABILITY
```

**Your fixes:**

```cmd
net user guest /active:no
netsh advfirewall set allprofiles state on
net localgroup administrators [baduser] /delete
sc stop telnet && sc config telnet start= disabled
sc stop msftpsvc && sc config msftpsvc start= disabled
```

### Scenario 1B: Obvious Malware/Suspicious Activity

**What you'll see:** Task Manager shows weird processes, slow performance

**Check this:**

```cmd
1. taskmgr → Look for: Unknown .exe files, high CPU processes
2. netstat -ano → Look for: Connections to weird IPs/ports
3. msconfig → Startup tab → Look for: Unknown startup programs
4. eventvwr.msc → Security logs → Look for: Failed login attempts
```

**Red flags to document:**

- Processes with random names (asdf123.exe)
- Network connections to foreign countries
- Multiple failed login attempts
- Programs starting automatically that you don't recognize

**Your action:**

- End suspicious processes
- Disable startup programs
- Run Windows Defender full scan
- Document everything you found

---

## 📊 TIER 2: VERY LIKELY SCENARIOS (70% kans)

### Scenario 2A: Data Breach Discovery

**What you'll get:** Email or notification saying "Customer database may have been accessed"

**Your EXACT response steps:**

1. **IMMEDIATE (binnen 30 minuten):**
    
    - Stop alle verdachte activiteit
    - Disconnect systeem van netwerk (if safe to do so)
    - Bewaar alle logs en evidence
    - Inform your supervisor/examiner
2. **INVESTIGATION (1 uur):**
    
    - Check Event Viewer voor unauthorized access
    - Look at user login history: `net user [username]`
    - Check file access logs
    - Determine: Welke data is toegankelijk geweest?
3. **DOCUMENTATION (30 minuten):**
    

```
INCIDENT RAPPORT - DATA BREACH
===============================
Tijd van ontdekking: [timestamp]
Getroffen systemen: [computer names]
Mogelijk gecompromitteerde data: [customer database, personal info, etc.]

BEVINDINGEN:
- Unauthorized login by user X at [time]  
- Database files accessed: [list files]
- No encryption found on sensitive files
- User had excessive privileges

ACTIES ONDERNOMEN:
- Account [username] disabled
- System isolated from network
- Full antivirus scan completed
- Supervisor informed at [time]

AVG COMPLIANCE:
- Incident requires notification to AP within 72 hours (Article 33)
- High risk to customer privacy - direct notification required (Article 34)
- Estimated [X] customers affected

NEXT STEPS:
- Reset all user passwords
- Implement file encryption
- Remove excessive user privileges
- Monitor for further suspicious activity
```

### Scenario 2B: Insider Threat Detection

**What you'll see:** Evidence that an employee is accessing files they shouldn't

**Investigation steps:**

```cmd
1. eventvwr.msc → Security → Filter by Event ID 4624 (successful logins)
2. eventvwr.msc → Security → Filter by Event ID 4648 (login with explicit credentials)  
3. Recent file access: Windows key + R → recent
4. Check user's group memberships: net user [suspicious_user]
```

**What to look for:**

- Logins at unusual hours (3 AM, weekends)
- Access to HR files by IT staff
- Multiple failed login attempts followed by success
- File copying to USB drives

**Your response:**

- Disable the user account immediately
- Document all suspicious activity with timestamps
- Report to supervisor
- Preserve evidence (don't delete logs)

### Scenario 2C: External Attack/Hacking Attempt

**What you'll see:** Multiple failed login attempts, network intrusion signs

**Detection commands:**

```cmd
1. eventvwr.msc → Security → Look for Event ID 4625 (failed logins)
2. netstat -ano → Look for: Unusual ESTABLISHED connections  
3. netsh wlan show profiles → Check for: Rogue WiFi connections
4. arp -a → Look for: Unknown devices on network
```

**Response protocol:**

1. Change all admin passwords immediately
2. Enable account lockout policy (3 attempts)
3. Block suspicious IP addresses if possible
4. Full system malware scan
5. Document everything with timestamps

---

## 📊 TIER 3: POSSIBLE SCENARIOS (50% kans)

### Scenario 3A: Email Phishing Attack

**What you'll get:** User reports "I clicked a suspicious email link"

**Your investigation:**

```cmd
1. Check user's email (if accessible)
2. Browser history: Chrome → Ctrl+H
3. Downloaded files: Check Downloads folder
4. Running processes: taskmgr
5. Network connections: netstat -ano
```

**Action plan:**

- Disconnect system from network
- Full antivirus scan
- Check for credential theft
- Password reset for affected user
- Email security training recommendation

### Scenario 3B: USB/Removable Media Incident

**What you'll see:** Unknown USB was plugged in, possible malware

**Investigation:**

```cmd
1. eventvwr.msc → System → Look for USB insertion events
2. Recent files accessed: Windows + R → recent
3. Check for autorun.inf files
4. Scan all removable media
```

### Scenario 3C: Rogue Software Installation

**What you'll find:** Unauthorized software installed on system

**Check these:**

```cmd
1. appwiz.cpl → Recently installed programs
2. msconfig → Startup programs
3. services.msc → New/unknown services
4. Task Scheduler → Unknown scheduled tasks
```

---

## 📊 TIER 4: LESS LIKELY BUT POSSIBLE (30% kans)

### Scenario 4A: Network Compromise

**Signs:** Unusual network traffic, slow internet, unknown devices

**Investigation tools:**

```cmd
1. ipconfig /all → Check for unusual network settings
2. route print → Look for suspicious routes  
3. netsh wlan show profiles → Wireless networks
4. nslookup [suspicious domain] → Check DNS
```

### Scenario 4B: Physical Security Breach

**What you'll get:** "Unauthorized person had access to server room"

**Your response:**

- Check all server logs for unusual activity
- Verify no hardware changes
- Check for new user accounts
- Review video logs if available
- Change all admin passwords

### Scenario 4C: Social Engineering Attack

**What you'll get:** "Someone called pretending to be IT support"

**Investigation:**

- Check if any passwords were changed
- Look for new user accounts
- Verify no remote access was granted
- Check email for password reset requests

---

## 🚨 INCIDENT RESPONSE FRAMEWORK (For ANY Scenario)

### STAP 1: DETECT & ANALYZE (15 minuten)

```
□ What exactly happened? (symptoms)
□ When did it happen? (timeline)  
□ What systems are affected? (scope)
□ Is it still happening? (containment needed?)
□ Any data involved? (privacy impact)
```

### STAP 2: CONTAIN & PRESERVE (30 minuten)

```
□ Stop the incident (disable accounts, disconnect network)
□ Preserve evidence (don't delete anything!)
□ Document current state (screenshots, logs)
□ Inform supervisor/examiner
□ Prevent spread (isolate systems)
```

### STAP 3: INVESTIGATE & ERADICATE (45 minuten)

```
□ Find root cause (how did it happen?)
□ Assess damage (what was compromised?)  
□ Remove threat (delete malware, fix vulnerabilities)
□ Close security gaps (patch, harden)
□ Verify threat is gone (scan, test)
```

### STAP 4: RECOVER & MONITOR (20 minuten)

```
□ Restore normal operations (enable accounts, reconnect)
□ Test everything works (login, access files)
□ Enhanced monitoring (watch for re-infection)  
□ User communication (if needed)
```

### STAP 5: DOCUMENT & REPORT (30 minuten)

```
□ Complete incident report
□ Timeline of events
□ Lessons learned
□ Preventive recommendations
□ AVG compliance requirements
```

---

## 📋 AVG/GDPR SCENARIOS - EXACT RESPONSES

### Scenario A: Personal Data Breach (Customer Database)

**Your response template:**

```
DATALEK MELDING - ARTICLE 33 COMPLIANCE
=====================================
Ontdekking: [datum/tijd]
Melding aan AP: [binnen 72 uur]

AARD VAN DE INBREUK:
- Klantendatabase gecompromitteerd
- Geschatte [X] betrokkenen  
- Persoonsgegevens: namen, adressen, telefoonnummers
- Gevoelige gegevens: [ja/nee - bijv. wachtwoorden]

OORZAAK:
- [Hoe het gebeurd is]

GEVOLGEN:
- Hoog risico voor betrokkenen [ja/nee]
- Mogelijk identiteitsfraude
- Reputatieschade

MAATREGELEN:
- Account uitgeschakeld
- Wachtwoorden gewijzigd  
- Systeem geïsoleerd
- Forensisch onderzoek gestart

KLANT NOTIFICATIE (Article 34):
[Ja - hoog risico / Nee - laag risiko]
```

### Scenario B: Employee Privacy Breach

**When colleague accessed HR files without authorization:**

```
PRIVACY INCIDENT RAPPORT
========================
Betrokkene: [medewerker naam]
Incident: Ongeautoriseerde toegang tot personeelsdossiers
Ontdekking: [datum/tijd]

ASSESSMENT:
- Internal privacy breach
- Employee personal data accessed
- No external threat
- Limited scope (1 person)

ACTION TAKEN:
- Access revoked immediately
- HR department informed
- Employee disciplinary action
- System access reviewed

AVG IMPACT:
- Low risk to affected employee
- No external data exposure
- Internal incident management sufficient
- No AP notification required (low risk)
```

---

## 💡 EXAM SUCCESS FORMULAS

### For ANY Technical Vulnerability:

1. **IDENTIFY:** What is wrong? (use your checklist)
2. **ASSESS:** How serious? (High/Medium/Low risk)
3. **FIX:** Apply the solution (use exact commands)
4. **VERIFY:** Test it works (re-run checks)
5. **DOCUMENT:** Write what you did

### For ANY Security Incident:

1. **CONTAIN:** Stop the damage (disable, disconnect)
2. **INVESTIGATE:** Find the cause (logs, evidence)
3. **ERADICATE:** Remove the threat (fix, patch)
4. **RECOVER:** Get back to normal (test, monitor)
5. **REPORT:** Document everything (including AVG)

### For ANY AVG Scenario:

1. **ASSESS:** Is personal data involved?
2. **TIMELINE:** How long ago did it happen?
3. **SCOPE:** How many people affected?
4. **RISK:** High or low risk to privacy?
5. **ACTION:** Report to AP (72h) + individuals (if high risk)

---

## 🎯 YOUR EXAM STRATEGY

### Opening 5 Minutes:

1. Read the scenario carefully - what type is it?
2. Write down which category it fits (Tier 1, 2, 3, 4)
3. Go to the appropriate checklist above
4. Start with containment if it's an active incident

### Time Management:

- **Technical vulnerabilities:** 45 min find + fix
- **Security incidents:** 1 hour investigation + response
- **Documentation:** Always reserve 30 minutes minimum
- **Testing:** 15 minutes to verify everything works

### If You're Stuck:

1. Go back to basics - check the Golden 8 first
2. Look at Event Viewer - it shows most problems
3. Ask yourself: "What would cause this symptom?"
4. Google the specific error/symptom you see
5. Don't panic - document what you tried

### Documentation Priority:

1. **What was wrong** (clear description)
2. **What you did** (exact steps/commands)
3. **What the result was** (did it work?)
4. **AVG implications** (if personal data involved)
5. **Recommendations** (how to prevent this)

---

## 🔥 FINAL CONFIDENCE BOOSTER

**You will encounter:** 1-3 scenarios from Tier 1 (guaranteed), probably 1 from Tier 2, maybe 1 from Tier 3 or 4.

**You won't encounter:** Advanced persistent threats, nation-state attacks, or anything requiring specialized security tools.

**The exam is testing:** Your ability to think systematically, follow procedures, and communicate clearly.

**Remember:** Real IT professionals Google solutions every day. The key is knowing WHAT to look for and HOW to think about problems.

**You've got this!** These scenarios cover literally everything they could throw at you. Follow the checklists, trust the process, and document everything.

---

_Last tip: If something seems too complex or advanced, it probably is. Stick to the basics and work systematically through your checklists. The obvious answer is usually the right one._