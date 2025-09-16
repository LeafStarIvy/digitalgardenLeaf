---
{"dg-publish":true,"permalink":"/06-streams/now/p2-k2-examen-study/","noteIcon":"","created":"2025-09-16T20:03:03.672+02:00","updated":"2025-09-16T20:34:04.058+02:00"}
---

# P2-K2 Security - REALISTIC EXAM GUIDE

_Alfa College - Let's be honest about what you actually need_

---

## 🎯 STRAIGHT TALK: What This Exam Really Is

Listen, this isn't about memorizing 50 commands. Based on what you've told me, this is a **practical security assessment** where you get a Windows PC and need to:

1. **Find obvious security problems** (they're not hiding them deep)
2. **Fix the problems** (using Windows GUI mostly, not complex commands)
3. **Document what you found and fixed**
4. **Show you understand AVG breach notification**

The examiners want to see you can **think systematically** and **document properly** - not that you're a command-line wizard.

---

## 🔍 WHAT YOU'LL ACTUALLY FIND (Based on Typical MBO Exams)

### The "Classic 5" Problems They Always Use:

1. **Guest account is enabled** (they love this one)
2. **Windows Firewall is turned off**
3. **A regular user has admin rights** (usually called "TestUser" or similar)
4. **Dangerous services are running** (Telnet is their favorite)
5. **File shares are wide open** (C$ accessible to Everyone)

**Reality Check:** These aren't hidden. They're obvious when you know where to look.

---

## 🖥️ YOUR PRACTICAL GAME PLAN

### Step 1: The 10-Minute "What's Wrong Here?" Check

**Use Windows GUI - forget complex commands for now:**

1. **Check Users:**
    
    - Start → Settings → Accounts → Family & other users
    - OR Control Panel → User Accounts → Manage another account
    - **Look for:** Guest account enabled, users who shouldn't be admins
2. **Check Firewall:**
    
    - Start → Settings → Update & Security → Windows Security → Firewall
    - **Should see:** Green checkmarks, not red X's
3. **Check Services:**
    
    - Press Windows + R, type `services.msc`
    - **Look for these running services:** Telnet, FTP (File Transfer Protocol)
    - **These should be:** Stopped and Disabled
4. **Check Shares:**
    
    - Press Windows + R, type `fsmgmt.msc`
    - **Look for:** Folders shared with Everyone having Full Control
5. **Check for Obvious Malware:**
    
    - Task Manager (Ctrl+Shift+Esc) → Processes tab
    - **Look for:** Weird process names, high CPU usage from unknown programs

### Step 2: Fix What You Found (GUI Methods)

**Guest Account:**

- Control Panel → User Accounts → Manage another account → Guest → Turn off guest account

**Firewall:**

- Windows Security → Firewall & network protection → Turn on for each network type

**Remove Admin Rights:**

- Control Panel → User Accounts → Manage another account → [Username] → Change account type → Standard user

**Disable Services:**

- services.msc → Right-click service → Properties → Startup type: Disabled → Stop

**Fix Shares:**

- Right-click shared folder → Properties → Security → Remove "Everyone" or change permissions

### Step 3: Basic Documentation

```
SECURITY ASSESSMENT - [Your Name] - [Date]

PROBLEMS FOUND:
1. Guest account was enabled
   - Risk: Unauthorized access without password
   - Fix: Disabled guest account via User Accounts

2. Windows Firewall disabled
   - Risk: No protection against network attacks  
   - Fix: Enabled firewall for all network profiles

3. User "TestUser" had administrator privileges
   - Risk: Unnecessary elevated access
   - Fix: Changed to standard user account

[Continue for each problem...]

VERIFICATION:
- Checked all fixes work after restart
- No new security warnings in Windows Security
- System stable and functional

AVG COMPLIANCE NOTE:
If personal data breach occurs:
- Notify authorities within 72 hours (Article 33)
- Notify affected individuals if high risk (Article 34)
```

---

## 🌐 WEBSITES YOU CAN USE DURING THE EXAM

### For Windows Commands/Procedures:

- **docs.microsoft.com** (official Windows documentation)
- **support.microsoft.com** (step-by-step guides)

**Search terms that work:**

- "disable guest account windows 10"
- "turn on windows firewall"
- "disable telnet service windows"
- "remove user admin rights windows"

### For AVG/GDPR Information:

- **autoriteitpersoonsgegevens.nl** (Dutch data protection authority)
- **gdpr.eu** (GDPR guidance)

**Search terms:**

- "AVG artikel 33 datalek melden"
- "GDPR data breach notification 72 hours"

---

## 🚨 THE UGLY TRUTH ABOUT WHAT YOU NEED TO MEMORIZE

**Only 3 things you MUST know by heart:**

1. **72-hour rule** - Data breaches must be reported to authorities within 72 hours
2. **High risk = notify individuals** - If breach creates high risk, tell the people affected
3. **Basic Windows navigation** - How to get to User Accounts, Services, Firewall settings

**Everything else you can look up during the exam.**

---

## 💡 REALISTIC STUDY PLAN FOR TONIGHT

### Hour 1: Understanding, Not Memorizing

- Read through this guide
- Open your Windows PC and find where these settings are:
    - User Accounts (practice navigating there)
    - Windows Security/Firewall
    - Services (run services.msc once)
    - Control Panel locations

### Hour 2: Practice One Complete Scenario

- Pretend your PC has problems
- Walk through: Find → Fix → Document
- Don't worry about being fast, focus on being thorough

### Hour 3: AVG Articles Understanding

- Read Articles 33 & 34 again (they're in your original document)
- Understand the concepts, not word-for-word
- Practice writing one simple data breach notification

### Hours 4-5: Rest!

- You need sleep more than cramming
- Review your handwritten notes before bed
- Trust that you understand the concepts

---

## 🎯 WHAT SUCCESS ACTUALLY LOOKS LIKE

**You DON'T need to:**

- Memorize every command
- Find incredibly hidden vulnerabilities
- Write perfect technical documentation
- Be faster than everyone else

**You DO need to:**

- Show systematic thinking (check the obvious places)
- Fix problems completely (not just identify them)
- Document clearly (what you found, what you did, that it works)
- Demonstrate AVG knowledge (when to report, to whom, how fast)

---

## 🔧 YOUR EXAM SURVIVAL KIT

### What to Write Down First Thing:

```
CHECK LIST:
□ Guest account status
□ Firewall on/off  
□ Admin users (who has rights?)
□ Services (Telnet, FTP running?)
□ File shares (Everyone access?)
□ Task Manager (suspicious processes?)

AVG RULES:
- 72 hours to report breach
- High risk = notify individuals too
- Document everything
```

### If You Get Stuck:

1. **Go back to basics** - check the "Classic 5" again
2. **Use Windows built-in help** - many dialogs have "?" buttons
3. **Try the opposite** - if something seems wrong, try turning it off/on
4. **Document what you tried** - partial credit is better than nothing

---

## 💪 THE CONFIDENCE BUILDER

**Here's what I know about you already:**

- You can navigate Windows (you're using a computer right now)
- You can follow step-by-step instructions
- You understand the concept of security (that's why you're worried)
- You can write clearly (your message to me was perfectly clear)

**That's literally 80% of what you need for this exam.**

The other 20% is just knowing where Windows hides these settings, and you can figure that out with some clicking around or a quick Google search.

---

## 🎪 FINAL REALITY CHECK

This exam is designed for MBO students, not cybersecurity experts. They want to see:

1. **Can you spot obvious problems?** (Guest account on = bad)
2. **Can you fix them systematically?** (Turn things off/on properly)
3. **Can you explain what you did?** (Write it down clearly)
4. **Do you know the legal requirements?** (72-hour rule)

**You already understand these concepts.** Tomorrow is just about applying them systematically.

**The secret nobody tells you:** Most of your classmates are just as nervous and will make basic mistakes like forgetting to check the guest account or not documenting properly. If you're systematic and thorough, you'll stand out.

---

## 📋 SUMMARY - EVERYTHING YOU NEED TO KNOW

### What You'll Do Tomorrow:

1. **Get the PC, look around for 10 minutes** (Guest account? Firewall? Admin users? Services? Shares?)
2. **Fix what's obviously wrong** (Turn things off/on, remove unnecessary access)
3. **Test your fixes work** (Restart if needed, check everything still works)
4. **Write down what you found and fixed** (Simple list format is fine)
5. **Add AVG compliance note** (72-hour rule, high-risk notifications)

### Websites to Bookmark:

- **docs.microsoft.com** (for Windows procedures)
- **autoriteitpersoonsgegevens.nl** (for AVG info)

### What You Must Remember:

- **72 hours** to report data breaches
- **High risk** = notify affected people too
- **Guest account = always bad**
- **Firewall off = always bad**
- **Regular users with admin rights = usually bad**

### If You Panic:

- Take a breath
- Go back to checking the obvious stuff
- Remember: systematic beats fast
- Document what you tried, even if it didn't work

**You've got this. Really. The fact that you're this concerned about doing well means you'll put in the effort to be thorough, which is exactly what they're looking for.**

Sleep well tonight. Tomorrow you're going to show them you can think like a security professional. 🚀