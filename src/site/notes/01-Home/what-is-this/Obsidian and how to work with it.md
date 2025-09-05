---
{"dg-publish":true,"permalink":"/01-home/what-is-this/obsidian-and-how-to-work-with-it/","noteIcon":"","created":"2025-09-05T15:58:08.348+02:00","updated":"2025-09-05T16:25:29.738+02:00"}
---

# Obsidian — How it works

> A single-file, long-term reference. Starts with the most common formatting and ends with rarer / plugin-driven features. Includes examples, use-cases and tips so you can copy/paste straight into your notes.

**File name suggestion:** `Obsidian — Complete Formatting & Embed Reference.md`

---

## Table of contents

1. Basic Markdown (the essentials)
    
2. Obsidian‑specific basics (links, tags, frontmatter)
    
3. Embeds & Transclusion (files, headings, blocks)
    
4. Images & media (importing, resizing, attributes)
    
5. Callouts & admonitions (core + plugin differences)
    
6. Lists, tasks & checkboxes (core + Tasks plugin)
    
7. Tables & table tips
    
8. Code blocks, syntax highlighting & special block types
    
9. Math (KaTeX), diagrams (Mermaid) and visual blocks
    
10. Inline fields, YAML frontmatter & Properties
    
11. Dynamic content: embedded queries, Dataview, Tasks queries
    
12. Interactivity: Templater, Buttons, Meta‑Bind (quick examples)
    
13. Styling and customisation: CSS snippets, classes, attributes
    
14. Canvas, Excalidraw & other visual formats
    
15. Rarer / plugin-driven features (definition lists, Pandoc, PlantUML, etc.)
    
16. Practical tips, pitfalls & quick reference table
    

---

# 1 — Basic Markdown (the essentials — **start here**)

These are the things you’ll use 90% of the time.

**Headings**

```md
# H1
## H2
### H3
```
# H1
## H2
### H3
**Use case:** pages, section titles, TOC anchor targets.

**Bold / Italic / Strikethrough / Highlight**

```md
**bold**  _italic_  ***bold+italic***  ~~strikethrough~~  ==highlight==
```

**bold**  _italic_  ***bold+italic***  ~~strikethrough~~  ==highlight==

**Use case:** emphasis, inline highlights for quick scanning.

**Paragraphs & line breaks**

- New paragraph = blank line.
    
- Line break inside paragraph: end a line with two spaces or use Shift+Enter in editor.
    

**Links**

```md
[External link text](https://example.com)
[[Internal note name\|Internal note name]]          # Obsidian wiki link
[[Page#Heading\|Page#Heading]]               # link to a heading inside another note
[[Page#^blockID\|Page#^blockID]]              # link to a specific block by block-id
[[Page\|Display text]]          # link with custom display text
```

[External link text](https://example.com)
[[Internal note name]]          # Obsidian wiki link
[[Page#Heading]]               # link to a heading inside another note
[[Page#^blockID]]              # link to a specific block by block-id
[[Page|Display text]]          # link with custom display text

**Use case:** connect notes; use pipe `|` to change the visible link label.

**Images** (basic)

```md
![](https://example.com/image.png)         # external
![[image.png\|image.png]]                             # embed a file from your vault (recommended)
```

![](https://example.com/image.png)         # external
![[image.png\|image.png]]                             # embed a file from your vault (recommended)

**Inline code & fenced code blocks**

```md
`inline()`
```

`inline()`

````js
```javascript
console.log('fenced code block')
````

```javascript
console.log('fenced code block')

````

**Use case:** code snippets, copyable examples.

**Blockquote**
```md
> Quoted text
> > Nested quote
````

> Quoted text
> > Nested quote

**Horizontal rule**

```md
---
```

---

**Task lists / checkboxes** (core)

```md
- [ ] todo item
- [x] done item
```

- [ ] todo item
- [x] done item

**Footnotes**

```md
This is a footnote.[^1]

[^1]: The footnote text.
```

This is a footnote.[^1]

[^1]: The footnote text.

**Comments**

- `<!-- HTML comment -->` — standard HTML comment, invisible in preview.
    
- `%% Obsidian comment %%` — additional inline comment style supported by Obsidian (useful in Live Preview / source).
    

---

# 2 — Obsidian‑specific basics

**Internal links / wiki links** — `[[Note Title]]` is the most powerful Obsidian primitive. Links create backlinks, suggestions, and graph edges.

**Aliases in frontmatter** (so `[[` autocompletes alternate titles)

```yaml
---
aliases: ["Main Page", "Home"]
---
```

aliases: ["Main Page", "Home"]

**Tags**

```md
#tag #topic/subtopic
```

#tag #topic/subtopic

- Tags are searchable and can be nested with `/`.
    

**Aliases in-line**: `[[Note Title|alias text]]` — only affects this link’s display.

**Block references** — create a block anchor by appending a caret id to a block:

```md
This is a paragraph I want to reference.
{ #myblock}

```

This is a paragraph I want to reference. ^myblock

Then elsewhere: `![[Note Name#^myblock]]` or `[[Note Name#^myblock]]` (link or transclude).

**Backlinks & graph** — creating links populates backlinks & the graph automatically.

**Properties panel (frontmatter editor)** — Obsidian can prompt you for frontmatter keys (`tags`, `aliases`, `cssclasses`) using its Properties / Frontmatter UI.

---

# 3 — Embeds & Transclusion (the '!' syntax)

Obsidian can embed whole files or specific parts.

**Embed a whole note (transclusion)**

```md
![[Some Note\|Some Note]]    # embeds the rendered content of Some Note inline
```

![[Some Note]]    # embeds the rendered content of Some Note inline

**Embed a heading or block**

```md
![[Some Note#Heading\|Some Note#Heading]]
![[Some Note#^blockID\|Some Note#^blockID]]
```

![[Some Note#Heading]]
![[Some Note#^blockID]]

**Notes & pitfalls**:

- When you transclude a note, that note’s content is rendered inline (and will show as backlinks / count as link target).
    
- When transcluding into a quote or table you may need to adjust formatting (block quotes `>` and table pipes `|` can interfere).
    

**Embedded search/query (core)** — show live search results inside a note (works with `Search` core plugin):

````md
```query
tag:#meeting "project x"
````

```query
tag:#meeting "project x"

````
(Results auto-update as your vault changes.)

---

# 4 — Images & media (how to import and control them)

**Ways to get images into a vault**
- Drag & drop an image into the editor — Obsidian copies it into the vault (folder depends on settings).
- Paste from clipboard — Obsidian can paste images directly to your configured attachment folder (great for screenshots).
- Save manually to attachments folder and reference with `![[path/to/file.png]]`.

**Embedding from the vault**
```md
![[image.png]]                  # embed
![[image.png\|200]]             # set width to 200 px (shortcut)
![[image.png\|200x100]]         # width x height (if supported)
````

![[image.png]]                  # embed
![[image.png|200]]             # set width to 200 px (shortcut)
![[image.png|200x100]]         # width x height (if supported)

**In tables**: escape vertical bars or use `\|` to avoid column splitting when using `![[...|200]]`.

**External images & web embeds**

```md
![](https://i.imgur.com/xyz.png)
```

![](https://i.imgur.com/xyz.png)

**Video/audio** — embed local files or remote links:

```md
![[video.mp4\|video.mp4]]                  # local video; plays inline if the format is supported
![](https://www.youtube.com/watch?v=VIDEOID)   # YouTube embed using markdown image syntax
<!-- or using iframe: -->
<iframe src="https://www.youtube.com/embed/VIDEOID" width="560" height="315"></iframe>
```

![[video.mp4]]                  # local video; plays inline if the format is supported
![](https://www.youtube.com/watch?v=VIDEOID)   # YouTube embed using markdown image syntax
<!-- or using iframe: -->
<iframe src="https://www.youtube.com/embed/VIDEOID" width="560" height="315"></iframe>

**Accepted file types & tips**

- Obsidian supports common images (PNG/JPG/SVG), audio, video and PDF embedding. Some file types display a native viewer (PDF, MP4, MP3).
    
- If an external site disallows embedding, use `iframe` embed may not work — check the site’s embed policy.
    

---

# 5 — Callouts & Admonitions (note boxes)

**Core (Obsidian) callout syntax** — create a callout by starting a blockquote with a `[!TYPE]` tag:

```md
> [!NOTE]
> This is a note callout.
>
> - It can contain lists and multiple lines.
```

> [!NOTE]
> This is a note callout.
>
> - It can contain lists and multiple lines.

**Common types:** `NOTE`, `TIP`, `WARNING`, `IMPORTANT`, `INFO`, `DANGER` (Obsidian renders icons and colours). Use uppercase but Obsidian is forgiving.

**Admonitions plugin (community)**

- Adds many more styles and features (collapsible admonitions, icons, custom styles) using code blocks such as:
    

````md
```ad-note
Some content
````

```ad-note
Some content

````
- Use plugin when you need an extended palette or custom CSS classes per block.

**Use cases:**
- UX tips, warnings, methodological notes, trivia boxes, exam-style examples, collapsible spoilers.

---

# 6 — Lists, tasks & checkboxes

**Standard lists**
```md
- item
* item
+ item
1. ordered
````

- item
* item
+ item
1. ordered

**Task lists**

```md
- [ ] This is an open task
- [x] Completed task
```

- [ ] This is an open task
- [x] Completed task

**Tasks plugin (community)** — enables querying and richer task metadata and interactive task queries inside notes:

````md
```tasks
not done
due before tomorrow
sort by due
````

```tasks
not done
due before tomorrow
sort by due

````
**Use case:** build dashboards of open tasks across your vault, toggle tasks from query results, schedule and recurring tasks.

**Nesting & subtasks**
- Indent `- [ ]` lines for nested tasks. Many task plugins support recognizing single-line subtasks only (check plugin docs).

---

# 7 — Tables & tips

**Markdown table**
```md
| Name | Value |
|------|-------|
| Foo  | 123   |
````

| Name | Value |
|------|-------|
| Foo  | 123   |

**Formatting tips**

- You can put markdown formatting inside cells, including `[[links]]` and `![[images|100]]` if you escape `|` correctly.
    
- Use Live Preview in Obsidian: right-click a table to insert or edit rows/columns.
    

**Large data and CSV**

- For CSV/large tables, embed as code block or use Dataview to create tables from metadata.
    

---

# 8 — Code blocks, syntax highlighting & special block languages

````md
```lang
code...
````

```lang
code...

````
- Replace `lang` with `javascript`, `python`, `bash`, etc. Obsidian uses highlight libraries to style code.

**Special codeblock languages (rendered)**
- `mermaid` — diagrams (graph, sequence, gantt). Example:
```md
```mermaid
graph TD
  A-->B
````

```mermaid
graph TD
  A-->B

````
- `math` / `latex` is often done with `$$ ... $$` blocks rather than code block.

**Plugin-defined block languages** (examples):
- `dataview` / `dataviewjs` — data queries (Dataview plugin)
- `tasks` — Tasks plugin queries
- `ad-...` or `admonition` — some admonition plugins
- `excalidraw` — Excalidraw JSON or embedding handled by the Excalidraw plugin

**Notes:**
- Code blocks are the hook plugins use to provide rendered content. If a plugin supports a codeblock language, it will render the result instead of rendering a plain code snippet.

---

# 9 — Math (KaTeX), diagrams (Mermaid) and visual blocks

**Inline math**
```md
Euler: $e^{i\pi} + 1 = 0$
````

Euler: $e^{i\pi} + 1 = 0$

**Block math**

```md
$
\int_0^1 x^2 dx = 1/3
$
```

$$
\int_0^1 x^2 dx = 1/3
$$

**Mermaid**

````md
```mermaid
sequenceDiagram
    Alice->>Bob: Hello Bob
````

```mermaid
sequenceDiagram
    Alice->>Bob: Hello Bob

````
**PlantUML / other diagram types**
- PlantUML or other diagram renderers are usually provided by community plugins — their block languages look like ```plantuml etc.

---

# 10 — Inline fields, YAML frontmatter & Properties

**YAML frontmatter** — put metadata at top of file inside `---` block:
```yaml
---
aliases: ["Main Page"]
tags: [project, draft]
date: 2024-01-02
author: "Jane"
---
````

**Use case:** publishing, Dataview queries, templates, note metadata.

**Inline fields (`key:: value`)** — widely used by Dataview and other tools:

```md
status:: todo
difficulty:: easy
```

- Inline fields are stored in the content (not only the YAML) and are convenient for quick metadata you edit in the note body.
    

**Properties UI** — Obsidian provides a Properties / Frontmatter editor that maps YAML to a GUI.

**Tip:** keep frontmatter minimal and consistent (same typed keys across notes) to use Dataview/Bases reliably.

---

# 11 — Dynamic content: embedded queries, Dataview, Tasks queries

**Embedded query (core)**

````md
```query
file:Notes folder
````

```query
file:Notes folder

````

**Dataview plugin** — treat your vault like a database. Examples:
```md
| File | status | file.mtime |
| ---- | ------ | ---------- |

{ .block-language-dataview}`

| File | status | file.mtime |
| ---- | ------ | ---------- |

{ .block-language-dataview}`

**Inline Dataview value**
```md
Obsidian and how to work with it   # dataview inline JavaScript-style evaluation
````

Obsidian and how to work with it   # dataview inline JavaScript-style evaluation

**Dataview JS** — full JS access:

````md
<div><table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>File</span><span class="dataview small-text">0</span></th><th class="table-view-th"><span>Title</span></th></tr></thead><tbody class="table-view-tbody"></tbody></table><div class="dataview dataview-error-box"><p class="dataview dataview-error-message">Dataview: No results to show for table query.</p></div></div>`

<div><table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>File</span><span class="dataview small-text">0</span></th><th class="table-view-th"><span>Title</span></th></tr></thead><tbody class="table-view-tbody"></tbody></table><div class="dataview dataview-error-box"><p class="dataview dataview-error-message">Dataview: No results to show for table query.</p></div></div>`

**Tasks plugin queries** — examples use ```tasks code block:
```md
```tasks
not done
path includes "Daily"
sort by created
````

```tasks
not done
path includes "Daily"
sort by created

```

**Use cases:** dashboards, weekly review pages, task rollups, dynamic tables of notes, automated reports.

---

# 12 — Interactivity: Templater, Buttons, Meta‑Bind (quick examples)

**Templater (community)**
- Insert dynamic templates, dates, system info and run JS inside templates.
- Example templater placeholder in template:
```

<% tp.date.now("YYYY-MM-DD") %>

````

**Use case:** daily notes with automated TODOs, insert title, unique IDs.

**Buttons plugin**
- Place clickable buttons in notes to run commands, insert templates, append text or open links.
- Button example (plugin-specific): use the button maker or an inline code block provided by plugin.

**Meta‑Bind / Inline fields editors**
- Plugins that provide UI inputs bound to frontmatter keys (e.g., Meta‑Bind) let you edit metadata inline with form-like controls.

**Important:** these interactive features depend on community plugins. Install from the Community Plugins gallery and read plugin docs for exact code syntax.

---

# 13 — Styling and customisation: CSS snippets, classes, attributes

**CSS snippets**
- Add `.css` files to `.obsidian/snippets` and enable them in Settings → Appearance → CSS snippets.
- Use them to change heading sizes, colours, table appearance, hide parts of the UI, etc.

**Custom classes / block classes**
- Core Obsidian supports `cssclasses` frontmatter and some plugins let you add `.class` to blocks. Example frontmatter usage:
```yaml
---
cssclasses: [compact, small-toc]
---
````

- Community plugins (Custom Classes, Custom Attributes) give per‑block class abilities.
    

**Markdown attributes** (rare / plugin-driven)

- Some plugins add support for `{: .class }` or `{.class #id}` style attributes after headings or blocks. If you rely on them, document the plugin in your vault.
    

**Tip:** prefer CSS snippets for consistent vault-level styling; use class-based styling when you need targeted formatting.

---

# 14 — Canvas, Excalidraw & other visual formats

**Canvas (core)**

- Infinite canvas for arranging notes, cards, images and web pages visually — use for ideation and dashboards.
    
- Canvas files are `.canvas` (JSON-based) and can be embedded as `![[file.canvas]]` in notes (embedding may show placeholder preview depending on UI).
    

**Excalidraw plugin**

- Create hand-drawn style diagrams that live in your vault and can be embedded or exported as PNG/SVG.
    
- Embeds can be either the native drawing object or a PNG that updates when the drawing changes (configurable).
    

**Use case:** concept maps, visual note summaries, workflows and architectural diagrams.

---

# 15 — Rarer / plugin-driven features (less common but powerful)

This section lists features usually provided by community plugins or by extended markdown parsers.

**Definition lists** (not core) — plugins or Pandoc-style extensions can add `Term\n: Definition` syntax.

**Pandoc extended markdown** — some plugins implement Pandoc features (superscript `^x^`, subscript `~x~`, extended list styles).

**PlantUML** — community plugin or external tool to render UML diagrams.

**Admonition / Advanced callouts** — plugins such as Admonition or enhanced callouts add collapsible, templated and CSS-targeted blocks.

**Custom block languages** — many plugins register code block languages (e.g., `dataview`, `tasks`, `ad-note`, `meta-bind-button`, `tldraw`, `excalidraw`), which turn code blocks into rendered UI.

**Sync & remote embedding restrictions** — some embedding features behave differently when using Obsidian Publish, sync services or mobile; test on target platform.

---

# 16 — Practical tips, pitfalls & quick reference

**Keep templates and frontmatter consistent** — consistent key names (status, tags, project) make queries predictable.

**Naming files** — use human-readable names and add aliases if you want machine-friendly IDs and human-friendly titles.

**Escaping characters** — in tables or when using pipe characters inside links/aliases, escape `|` with `\|`.

**Performance** — heavy Dataview / large queries across hundreds of thousands of notes can impact performance. Use `limit` and narrow `FROM` paths.

**When to use a plugin** — if your use-case involves dynamic queries (Dataview), automation (Templater, Buttons), or visual drawings (Excalidraw, Canvas), consider installing those community plugins.

---

## Quick syntax summary (copy/paste reference)

- Headings: `# H1` / `## H2`
    
- Bold/Italic: `**bold**` / `_italic_`
    
- Link: `[[Note|label]]` or `[external](https://)`
    
- Embed note: `![[Note Name]]`
    
- Embed block: `![[Note#^blockID]]`
    
- Callout: `> [!NOTE]` then `> content`
    
- Query: `query\nyour search\n`
    
- Dataview: `dataview\nTABLE ...\n`
    
- Tasks: `tasks\nnot done\n`
    
- Image embed: `![[image.png|200]]` or `![](https://...)`
    
- YAML frontmatter: `---\nkey: value\n---`
    

---

## Where to go next / plugin checklist

If you want to extend your Obsidian with the features described in later sections, the community plugins to inspect first are:

- Dataview (powerful queries)
    
- Tasks (task queries & recurring tasks)
    
- Templater (advanced templating)
    
- Admonition or Admonitions (enhanced callouts)
    
- Buttons or Meta‑Bind (interactive buttons/inputs)
    
- Excalidraw (visual sketches)
    

---
