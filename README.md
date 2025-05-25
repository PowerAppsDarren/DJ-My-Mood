# DJ-My-Mood

Control real-time music generation with a MIDI controller.

## Current Status

This app is designed to work with Google's Gemini Live Music API (model: `lyria-realtime-exp`), which is not yet publicly available. The current implementation includes a mock audio generator for testing purposes.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file with your Gemini API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:5173 in your browser

## Features

- 4x4 grid of music style prompts
- MIDI controller support with CC learning
- Mouse/touch control for knobs
- Visual feedback with colored halos
- Prompt weight adjustment (0-2 range)
- Custom prompt editing

## Notes

- The app currently plays test tones instead of generated music
- Once the Gemini Live Music API becomes available, update the `ai` object in `index.tsx`
- MIDI support requires browser permission for Web MIDI API