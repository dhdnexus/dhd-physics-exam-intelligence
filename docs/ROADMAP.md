# DHD-PEI Roadmap

Detailed session plan. See the root `README.md` for the summary table.

## Session 1 — Foundation & Architecture (complete)
Routing, layout system, sidebar/topbar navigation, design tokens, placeholder
pages for every module, custom 404. No examination data.

## Session 2 — Examination Corpus
Data model for papers (`ExamPaper`), corpus browser UI in `pages/Corpus`,
filtering by university / course / year, empty-state replaced with real
listing components in `components/exam`.

## Session 3 — Question Intelligence
Question extraction data model (`ExamQuestion`), question detail view in
`pages/Question`, tagging by topic.

## Session 4 — Worked Solutions
Solution data model (`WorkedSolution`), solution renderer in
`components/solution`, attached to the Question Detail page.

## Session 5 — Misconceptions
Misconception data model (`Misconception`), linking misconceptions to topics
and questions, surfaced on the Question Detail page.

## Session 6 — University Comparison
University data model (`University`), profile pages, cross-institution
comparison views in `pages/Universities`.

## Session 7 — Examination Analytics
Difficulty ranking, topic frequency, and trend charts in `pages/Analytics`
and `components/analytics`, replacing the Session 1 KPI placeholders with
real, computed values.

## Session 8 — Stabilization & Delivery
End-to-end verification across all modules, accessibility and performance
pass, final production build and release packaging.
