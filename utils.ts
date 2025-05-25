/**
 * Decode base64 string to ArrayBuffer
 */
export function decode(base64: string): ArrayBuffer {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

/**
 * Decode audio data into an AudioBuffer
 */
export async function decodeAudioData(
  audioData: ArrayBuffer,
  audioContext: AudioContext,
  sampleRate: number,
  channelCount: number
): Promise<AudioBuffer> {
  // Try to decode the audio data
  try {
    return await audioContext.decodeAudioData(audioData);
  } catch (error) {
    // If decoding fails, create a silent buffer as fallback
    console.error('Failed to decode audio data:', error);
    const duration = audioData.byteLength / (sampleRate * channelCount * 2); // 16-bit audio
    const buffer = audioContext.createBuffer(channelCount, sampleRate * duration, sampleRate);
    return buffer;
  }
}
