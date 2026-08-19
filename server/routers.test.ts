import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("./db", () => ({
  getQuizzes: vi.fn(),
  getQuizQuestions: vi.fn(),
  getAnswerOptions: vi.fn(),
  getFlashcardDecks: vi.fn(),
  getFlashcards: vi.fn(),
  getLibraryMaterials: vi.fn(),
}));

import { appRouter } from "./routers";
import { getAnswerOptions, getFlashcardDecks, getFlashcards, getLibraryMaterials, getQuizQuestions, getQuizzes } from "./db";

const caller = () => appRouter.createCaller({ user: undefined, req: {} as never, res: {} as never });

describe("content router database fallback behavior", () => {
  beforeEach(() => {
    vi.mocked(getQuizzes).mockResolvedValue([]);
    vi.mocked(getQuizQuestions).mockResolvedValue([]);
    vi.mocked(getAnswerOptions).mockResolvedValue([]);
    vi.mocked(getFlashcardDecks).mockResolvedValue([]);
    vi.mocked(getFlashcards).mockResolvedValue([]);
    vi.mocked(getLibraryMaterials).mockResolvedValue([]);
  });

  it("returns usable fallbacks when all database helpers are empty", async () => {
    const api = caller();
    const quizzes = await api.content.quizzes();
    const questions = await api.content.questions({ quizId: 1 });
    const options = await api.content.answerOptions({ questionId: 1 });
    const decks = await api.content.flashcardDecks();
    const cards = await api.content.flashcards({ deckId: 1 });
    const materials = await api.content.library();

    expect(quizzes[0]?.title).toBe("Mixed subjects");
    expect(questions[0]?.prompt).toContain("green plants");
    expect(options.some((option) => option.isCorrect)).toBe(true);
    expect(decks[0]?.title).toBe("Foundations");
    expect(cards.length).toBe(3);
    expect(materials.every((material) => Boolean(material.fileUrl) && material.fileUrl !== "#")).toBe(true);
  });

  it("prefers non-empty database rows over fallback content", async () => {
    const databaseQuiz = { id: 42, title: "Stored Biology Quiz", subject: "Biology", grade: "Grade 8", description: "Stored", published: true };
    const databaseQuestion = { id: 42, quizId: 42, prompt: "Stored question", explanation: "Stored explanation", position: 1 };
    const databaseOption = { id: 42, questionId: 42, optionText: "Stored option", isCorrect: true, position: 1 };
    const databaseDeck = { id: 42, title: "Stored deck", subject: "Biology", grade: "Grade 8", description: "Stored", published: true };
    const databaseCard = { id: 42, deckId: 42, front: "Stored front", back: "Stored back", position: 1 };
    const databaseMaterial = { id: 42, title: "Stored material", description: "Stored", subject: "Biology", grade: "Grade 8", materialType: "learning_material" as const, fileUrl: "/stored.pdf", published: true };
    vi.mocked(getQuizzes).mockResolvedValue([databaseQuiz]);
    vi.mocked(getQuizQuestions).mockResolvedValue([databaseQuestion]);
    vi.mocked(getAnswerOptions).mockResolvedValue([databaseOption]);
    vi.mocked(getFlashcardDecks).mockResolvedValue([databaseDeck]);
    vi.mocked(getFlashcards).mockResolvedValue([databaseCard]);
    vi.mocked(getLibraryMaterials).mockResolvedValue([databaseMaterial]);

    const api = caller();
    expect((await api.content.quizzes())[0]).toEqual(databaseQuiz);
    expect((await api.content.questions({ quizId: 42 }))[0]).toEqual(databaseQuestion);
    expect((await api.content.answerOptions({ questionId: 42 }))[0]).toEqual(databaseOption);
    expect((await api.content.flashcardDecks())[0]).toEqual(databaseDeck);
    expect((await api.content.flashcards({ deckId: 42 }))[0]).toEqual(databaseCard);
    expect((await api.content.library())[0]).toEqual(databaseMaterial);
  });
});
