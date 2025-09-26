---
{"dg-publish":true,"permalink":"/look-back/06-streams/now/p2-k2-examen-study/","noteIcon":"","created":"2025-09-16T20:03:03.672+02:00","updated":"2025-09-16T20:42:51.375+02:00"}
---

# P2-K2 Security - REALISTIC Exam Strategy

_Eerlijke gids voor iemand die gestrest is en weinig tijd heeft_

---

## 🎯 REALITY CHECK - Let's Be Honest

Listen, I was overwhelming you. You DON'T need to memorize hundreds of commands. You DON'T need to be a security expert overnight. You just need to understand the BASICS and know WHERE to find what you need during the exam.

**The truth:** Most IT security exams test the SAME 5-7 vulnerabilities over and over. If you understand those + know how to Google the commands, you'll pass.

---

## 🔍 WHAT THE EXAM ACTUALLY TESTS

Based on MBO IT security exams, you'll get a Windows PC with these **PREDICTABLE** problems:

### The "Big 5" (appear in 90% of exams):

1. **Guest account is enabled** ← Always check this first
2. **Windows Firewall is turned off** ← Always check this second
3. **A regular user has admin rights** ← Look in Administrator group
4. **Dangerous services running** (Telnet, FTP) ← Check services.msc
5. **Weak/no password requirements** ← Check password policy

### Maybe Also (50% chance):

- File shares accessible to "Everyone"
- Windows Updates disabled
- No antivirus or outdated
- Suspicious running programs

**That's it.** Seriously. The exam isn't trying to trick you with advanced threats.

---

## 🛠️ YOUR PRACTICAL STRATEGY

### Step 1: The 10-Minute Discovery (What's wrong?)

You need to check these 5 things in order:

```
1. Open Command Prompt as Administrator
   Type: net user
   Look for: Is "Guest" account active? Write it down.

2. Type: net localgroup administrators  
   Look for: Any users that shouldn't be admin? Write them down.

3. Type: services.msc
   Look for: Telnet, FTP services - are they running? Write it down.

4. Type: netsh advfirewall show allprofiles
   Look for: Is firewall OFF for any profile? Write it down.

5. Type: secpol.msc → Account Policies → Password Policy
   Look for: Minimum password length = 0? Write it down.
```

**That's your vulnerability list!** Write everything on paper.

### Step 2: The Fixes (How to solve them?)

For each problem you found, here's the solution:

**Problem: Guest account active**

```cmd
net user guest /active:no
```

**Problem: User has admin rights (but shouldn't)**

```cmd
net localgroup administrators [username] /delete
```

**Problem: Firewall is off**

```cmd
netsh advfirewall set allprofiles state on
```

**Problem: Telnet service running**

```cmd
sc stop telnet
sc config telnet start= disabled
```

**Problem: No password policy**

```cmd
secpol.msc
Navigate to: Account Policies > Password Policy
Set: Minimum password length = 8
Set: Password must meet complexity requirements = Enabled
```

### Step 3: Document What You Did

Write a simple report:

```
SECURITY VULNERABILITIES FOUND AND FIXED:

1. Guest account was enabled
   - Fixed by: net user guest /active:no
   - Verified: Account now shows "No" for Active

2. User "john" had administrator privileges  
   - Fixed by: net localgroup administrators john /delete
   - Verified: User no longer in administrators group

3. Windows Firewall was disabled
   - Fixed by: netsh advfirewall set allprofiles state on
   - Verified: All profiles now show "ON"

[Continue for each issue you found...]

CONCLUSION: All identified vulnerabilities have been resolved.
```

---

## 🌐 YOUR LIFELINE WEBSITES (Use during exam!)

### For Commands You Forget:

- **ss64.com/nt/** ← Windows command reference (BOOKMARK THIS!)
- **docs.microsoft.com** ← Official Microsoft documentation

### For Security Settings:

- Search: "Windows security checklist site:microsoft.com"
- Search: "disable windows services security"
- Search: "windows firewall command line"

### For AVG/GDPR:

- **autoriteitpersoonsgegevens.nl** ← Dutch privacy authority
- Search: "AVG datalek melden 72 uur"

**PRO TIP:** During exam, open these sites in browser tabs FIRST thing!

---

## 📋 AVG SIMPLE EXPLANATION

You just need to understand these 2 scenarios:

### Scenario 1: Data breach happens

**Article 33:** Report to authorities (Autoriteit Persoonsgegevens) within 72 hours

**What to report:**

- What happened (hacker got customer database)
- How many people affected (500 customers)
- What data was stolen (names, emails, addresses)
- What you're doing about it (changed passwords, improved security)

### Scenario 2: High risk to people

**Article 34:** Also tell the people directly (customers)

**When NOT to tell people:**

- Data was encrypted (hackers can't read it)
- You fixed it so no more danger
- Too expensive to contact everyone (then make public announcement)

**Example for exam:** _"Company database hacked, 1000 customer records stolen including passwords. Must report to AP within 72 hours (Article 33) AND inform customers directly (Article 34) because passwords = high risk."_

---

## ⏰ REALISTIC TIME PLAN FOR TONIGHT

### 2 Hours Max - Don't Burn Out!

**Hour 1: Understand the Basics**

- Read through "The Big 5" vulnerabilities
- Practice opening: cmd, services.msc, secpol.msc
- Bookmark the websites above

**Hour 2: Practice Once**

- Check your own PC for these 5 issues
- Try fixing one or two (safely!)
- Write a simple practice report

**That's enough.** Get sleep. Tired brain = more mistakes.

---

## 🚨 EXAM DAY REALITY

### What Will Actually Happen:

1. You get a PC, probably Windows 10/11
2. You have 2-3 hours (plenty of time!)
3. They want you to find security problems and fix them
4. Document what you found and fixed

### Your Game Plan:

1. **First 5 minutes:** Bookmark your websites, open cmd as admin
2. **Next 30 minutes:** Go through "The Big 5" checklist
3. **Next 60 minutes:** Fix what you found (Google commands if needed!)
4. **Next 30 minutes:** Write your report
5. **Last 15 minutes:** Double-check everything works

### If You Get Stuck:

- Check Event Viewer (eventvwr.msc) - shows problems
- Google: "windows security vulnerability [whatever you see]"
- Look at Task Manager for weird running programs
- Don't panic - most problems are obvious

---

## 💡 ACTUAL SUCCESS TIPS (From Someone Who Gets It)

### What Examiners Want to See:

1. **You found the obvious problems** (guest account, firewall, etc.)
2. **You fixed them properly** (and they actually work)
3. **You documented clearly** (what was wrong, what you did)
4. **You understand why it matters** (security risk explanation)

### What They DON'T Expect:

- Perfect memorization of commands
- Finding super advanced vulnerabilities
- Being a cybersecurity expert
- Speed - they give you enough time

### Red Flags to Avoid:

- Breaking the system while "fixing" it
- Not testing your fixes work
- Poor documentation
- Missing the obvious problems

---

## 📝 SIMPLE DOCUMENTATION TEMPLATE

Use this structure - fill in your specific findings:

```
SECURITY ASSESSMENT REPORT
Date: [exam date]
System: [computer name/IP]

EXECUTIVE SUMMARY:
Found [X] security vulnerabilities on the target system. All issues have been resolved and verified.

VULNERABILITIES IDENTIFIED:
1. [Problem description]
   Risk Level: [High/Medium/Low]
   Impact: [What could happen]
   Solution Applied: [Command you used]
   Status: RESOLVED

2. [Next problem]
   [Same format...]

VERIFICATION:
All fixes have been tested and confirmed working.
System restart performed successfully.
No additional vulnerabilities detected.

AVG COMPLIANCE:
[If data breach scenario] This incident would require notification to AP within 72 hours per Article 33, and direct customer notification per Article 34 due to high risk.

RECOMMENDATIONS:
- Regular security audits
- User training on password security  
- Enable automatic Windows updates
```

---

## 🎯 BOTTOM LINE SUMMARY

### What You NEED to Know:

1. **The Big 5 vulnerabilities** (guest account, firewall, admin users, services, passwords)
2. **How to check for them** (cmd commands and GUI tools)
3. **How to fix them** (specific commands or settings)
4. **AVG basics** (72 hours to report, notify people if high risk)

### What You DON'T Need:

- Perfect command memorization
- Advanced security knowledge
- Stress about complex scenarios

### Your Safety Net:

- **ss64.com/nt/** for any command you forget
- **Google** for any security setting you need
- **Common sense** - most problems are obvious

### Confidence Booster:

This exam tests BASIC security hygiene, not advanced hacking. You're looking for the digital equivalent of "Did you lock the front door?" not "Can you defeat a nation-state cyber attack?"

**You've got this. Really.**

---

## 🚀 FINAL ADVICE

Stop overthinking. The exam is testing if you can:

- Spot common security mistakes
- Fix them properly
- Explain what you did

That's it. Get some sleep, trust your instincts tomorrow, and remember - you're not expected to be perfect, just competent.

Good luck! 🍀

---

_P.S. - If you find something weird you don't recognize, Google it. That's what real IT professionals do every day._