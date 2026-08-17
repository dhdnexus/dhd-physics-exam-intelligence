# DHD Physics Exam Intelligence (DHD PEI)

## Examination Database Specification v1.0

**Document ID:** DHD-PEI-DB-001

**Version:** 1.0

**Status:** Foundational Standard

---

# Purpose

This document defines the canonical structure of every examination question stored within DHD Physics Exam Intelligence (DHD PEI).

The specification ensures that questions from different universities, examination years, and countries remain searchable, comparable, and reusable across the DHD ecosystem.

**Core Principle:**

Questions are classified primarily by **physics knowledge**, not by institution.

---

# Database Philosophy

The database is organized in two dimensions:

1. **Knowledge Layer** (Primary)
2. **Source Layer** (Secondary)

Example:

- Mechanics
  - Kinematics
    - Velocity
    - Acceleration
    - SUVAT
    - Projectile Motion

Each question simply records where it originated (UNILAG, UI, UNN, etc.).

---

# Canonical Question Schema

## Identity

| Field           | Type    | Example                        |
| --------------- | ------- | ------------------------------ |
| question_id     | String  | PEI-NGA-UNILAG-2022-PHY101-001 |
| source_code     | String  | UNILAG-2022-PHY101             |
| question_number | Integer | 1                              |

---

## Institution

| Field      | Type   |
| ---------- | ------ |
| university | String |
| country    | String |
| faculty    | String |
| department | String |

---

## Academic Context

| Field         | Type    |
| ------------- | ------- |
| course_code   | String  |
| course_title  | String  |
| semester      | String  |
| academic_year | Integer |
| exam_type     | String  |

Values for `exam_type`:

- Mid-Semester
- First Semester
- Second Semester
- Resit

---

## Physics Classification

| Field            | Type   |
| ---------------- | ------ |
| module           | String |
| topic            | String |
| subtopic         | String |
| learning_outcome | String |

Example:

- Module: Mechanics
- Topic: Kinematics
- Subtopic: SUVAT

---

## Assessment Metadata

| Field               | Type                           |
| ------------------- | ------------------------------ |
| marks               | Integer                        |
| difficulty          | L1–L4                          |
| question_type       | Structured / Essay / Objective |
| calculator_required | Boolean                        |

Difficulty Rubric:

- **L1** — Direct application
- **L2** — Multi-step calculation
- **L3** — Conceptual reasoning
- **L4** — Integrated multi-topic problem

---

## Production Metadata

| Field            | Type                |
| ---------------- | ------------------- |
| diagram_required | Boolean             |
| manim_scene      | String              |
| narration_status | Draft / Final       |
| youtube_status   | Planned / Published |
| thumbnail_title  | String              |

These fields support the video production workflow.

---

## Verification Status

| Field           | Values             |
| --------------- | ------------------ |
| verification    | Pending / Verified |
| solution_review | Pending / Approved |
| publication     | Internal / Public  |

No question becomes public until **Verified**.

---

# Directory Mapping

Questions will eventually be stored as structured JSON files generated from verified datasets.

Example path:

`exams/nigeria/mechanics/kinematics/suvat/`

Each file references this specification.

---

# Naming Convention

Question IDs follow the format:

`PEI-COUNTRY-UNIVERSITY-YEAR-COURSE-NUMBER`

Example:

`PEI-NGA-UNILAG-2022-PHY101-001`

This identifier is permanent and must never change.

---

# Integration Standard

This schema is shared by:

- DHD PEI Database
- Pedagogy Engine
- Manim Animation Pipeline
- YouTube Production Workflow
- Future DHD Physics Academy Plugin

Any future module interacting with examination data must conform to **DHD-PEI-DB-001**.
