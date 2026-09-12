# AlitUs Development Rules

## Working Style

- Work incrementally.
- Inspect existing implementation before modifying it.
- Preserve correct existing behavior.
- Do not redesign unrelated areas.
- Do not introduce dependencies without a clear need.
- Follow the existing HTML5 + Bootstrap 5 + custom CSS + vanilla JavaScript architecture.
- Maintain the established AlitUs design system.
- Maintain WCAG 2.1 AA accessibility.
- Maintain responsive behavior.
- Do not fabricate user/business/project information.
- Do not create fake links, screenshots, statistics, testimonials, clients or credentials.
- Preserve SEO metadata unless the task specifically requires changing it.
- Check git status before and after implementation.

## Git

- Do not reset or discard unrelated changes.
- Commit completed tasks with a descriptive commit message unless explicitly told not to.
- Never force-push.
- Report the final commit hash.
- Report whether the working tree is clean.

## Required Final Report

After EVERY implementation task, end the response with a COPYABLE REPORT.

The report must:
- be plain Markdown
- be concise but complete
- contain no ANSI terminal formatting
- contain no decorative Unicode that makes copying difficult
- avoid unnecessary tables
- be contained inside ONE fenced text block
- be ready for Patrick to copy directly into ChatGPT

Use exactly this structure:

COPYABLE REPORT

Task:
<short description>

Status:
Completed / Partially completed / Blocked

Files changed:
- <file>
- <file>

Implementation:
- <important change>
- <important change>

Validation:
- <test/check>
- <test/check>

Accessibility / responsive:
- <relevant result>

Git:
- Branch: <branch>
- Commit: <hash or "not committed">
- Working tree: clean / modified

Issues / pending:
- None
OR
- <remaining issue>

Important:
The COPYABLE REPORT must always be the final section of the agent response.

If a task fails or is interrupted, still produce the report with:
Status: Blocked
and explain exactly what remains.