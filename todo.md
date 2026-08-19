# Project TODO

- [x] Propose and approve the Somasphere folder structure
- [x] Initialize the Somasphere web project scaffold
- [x] Initialize the Git repository in the SOMASPHERE root
- [x] Create and verify the root .gitignore
- [x] Preserve Manus OAuth for sign up, login, logout, and session handling
- [x] Enforce protected routes for every dashboard page
- [x] Build the polished responsive landing page with hero, feature highlights, and CTAs
- [x] Build the responsive dashboard shell with desktop sidebar and mobile bottom navigation
- [x] Build the dashboard home page with student progress summary and quick-access cards
- [x] Build interactive quizzes with multiple-choice questions and instant feedback
- [x] Build quiz results summary screen
- [x] Build flashcard study mode with flip animation and previous/next navigation
- [x] Add flashcard completion tracker
- [x] Build library page with past papers and learning materials
- [x] Add library subject and grade filters
- [x] Add library view and download links
- [x] Add database schema for quizzes, questions, answer options, flashcard decks, flashcards, and library materials
- [x] Connect feature data access to the project's database layer
- [x] Ensure mobile-first responsive behavior across public and dashboard screens
- [x] Add or update Vitest coverage for authentication, quiz, flashcard, and library behavior
- [x] Verify the project with type checking, tests, build checks, and responsive screenshots
- [x] Save the completed project checkpoint
- [x] Create the public GitHub repository named Somasphere and push the initial code

## Scope exclusions

- [x] Exclude leaderboard
- [x] Exclude portfolio
- [x] Exclude advanced gamification
- [x] Exclude dark mode
- [x] Exclude AI features

## Follow-up fixes identified during verification

- [x] Replace placeholder library view and download anchors with real material URLs backed by stored fileUrl data
- [x] Add feature-level database/query helpers and tRPC procedures for quizzes, flashcards, and library materials
- [x] Load quiz, flashcard, and library UI data through tRPC procedures instead of hardcoded local arrays
- [x] Add meaningful running Vitest coverage for quiz scoring, flashcard navigation/progress, and library filtering/link behavior

## Final verification gaps

- [x] Push and verify the current verified MVP commit in the public GitHub repository
- [x] Remove library URL fallbacks and require a real fileUrl for every rendered resource
- [x] Remove feature starter arrays and drive quiz, flashcard, and library screens entirely from tRPC data
- [x] Add meaningful tests for the implemented quiz, flashcard, library, and content procedures

- [x] Add Vitest coverage for server content procedures and DB-empty fallback responses

- [x] Mock empty database helpers to prove every tRPC content fallback branch
- [x] Mock non-empty database helpers to prove database rows take precedence over fallback content
