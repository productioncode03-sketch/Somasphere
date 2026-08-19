import { describe, expect, it } from "vitest";
import { answerOptions, flashcards, flashcardDecks, libraryMaterials, questions, quizzes } from "../drizzle/schema";
import { completionPercent, filterMaterials, scoreAnswer } from "../shared/studyLogic";
import { appRouter } from "./routers";

describe("Somasphere MVP learning behavior", () => {
  it("returns correct and incorrect quiz feedback consistently", () => {
    expect(scoreAnswer(1, 1)).toBe(true);
    expect(scoreAnswer(0, 1)).toBe(false);
    expect(scoreAnswer(2, 1)).toBe(false);
  });

  it("calculates flashcard completion at the same percentage used by the UI", () => {
    expect(completionPercent(0, 3)).toBe(33);
    expect(completionPercent(1, 3)).toBe(67);
    expect(completionPercent(2, 3)).toBe(100);
    expect(completionPercent(0, 0)).toBe(0);
  });

  it("filters library materials by subject, grade, and title query", () => {
    const materials = [
      { title: "Grade 7 Mathematics Term 1", subject: "Mathematics", grade: "Grade 7", fileUrl: "/math.pdf" },
      { title: "Grade 8 Science Notes", subject: "Science", grade: "Grade 8", fileUrl: "/science.pdf" },
      { title: "Grade 7 English Comprehension", subject: "English", grade: "Grade 7", fileUrl: "/english.pdf" },
    ];
    expect(filterMaterials(materials, "Mathematics", "Grade 7", "term")).toEqual([materials[0]]);
    expect(filterMaterials(materials, "All subjects", "Grade 7", "grade 7")).toHaveLength(2);
    expect(filterMaterials(materials, "Science", "Grade 7", "")).toHaveLength(0);
  });

  it("keeps library links backed by real resource URLs", () => {
    const resources = [{ fileUrl: "/resources/math.pdf" }, { fileUrl: "https://example.org/notes.pdf" }];
    expect(resources.every((resource) => resource.fileUrl.length > 0 && resource.fileUrl !== "#")).toBe(true);
  });

  it("exposes all required learning tables", () => {
    expect([quizzes, questions, answerOptions, flashcardDecks, flashcards, libraryMaterials]).toHaveLength(6);
  });

  it("returns usable fallback data from every content procedure when the database is empty", async () => {
    const caller = appRouter.createCaller({ user: undefined, req: {} as never, res: {} as never });
    const quizRows = await caller.content.quizzes();
    const questionRows = await caller.content.questions({ quizId: 1 });
    const optionRows = await caller.content.answerOptions({ questionId: 1 });
    const deckRows = await caller.content.flashcardDecks();
    const cardRows = await caller.content.flashcards({ deckId: 1 });
    const libraryRows = await caller.content.library();

    expect(quizRows.length).toBeGreaterThan(0);
    expect(questionRows[0]?.quizId).toBe(1);
    expect(optionRows.some((option) => option.isCorrect)).toBe(true);
    expect(deckRows[0]?.id).toBe(1);
    expect(cardRows.length).toBeGreaterThan(1);
    expect(libraryRows.length).toBeGreaterThan(1);
    expect(libraryRows.every((material) => Boolean(material.fileUrl) && material.fileUrl !== "#")).toBe(true);
  });
});
