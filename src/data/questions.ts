export interface Question {
  id: number
  course: string
  topic: string
  year: number
  board: string
  difficulty: "L1" | "L2" | "L3" | "L4"
  marks: number
  time: number
  question: string
  institution: string
}

export const questions: Question[] = [
  {
    id: 1,
    course: "PHY101",
    topic: "Mechanics",
    year: 2023,
    board: "WAEC",
    difficulty: "L3",
    marks: 5,
    time: 8,
    institution: "University of Lagos",
    question:
      "A particle of mass 2.0 kg is projected vertically upward with an initial velocity of 20 m/s. Find the maximum height reached."
  }
]
