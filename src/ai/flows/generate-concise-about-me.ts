'use server';
/**
 * @fileOverview A Genkit flow for generating a concise 'About Me' section using GenAI.
 *
 * - generateConciseAboutMe - A function that generates a concise 'About Me' section based on a prompt.
 * - GenerateConciseAboutMeInput - The input type for the generateConciseAboutMe function.
 * - GenerateConciseAboutMeOutput - The return type for the generateConciseAboutMe function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateConciseAboutMeInputSchema = z.object({
  prompt: z
    .string()
    .describe('A prompt to generate a concise About Me section.'),
});
export type GenerateConciseAboutMeInput = z.infer<
  typeof GenerateConciseAboutMeInputSchema
>;

const GenerateConciseAboutMeOutputSchema = z.object({
  aboutMe: z.string().describe('The generated concise About Me section.'),
});
export type GenerateConciseAboutMeOutput = z.infer<
  typeof GenerateConciseAboutMeOutputSchema
>;

export async function generateConciseAboutMe(
  input: GenerateConciseAboutMeInput
): Promise<GenerateConciseAboutMeOutput> {
  return generateConciseAboutMeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateConciseAboutMePrompt',
  input: {schema: GenerateConciseAboutMeInputSchema},
  output: {schema: GenerateConciseAboutMeOutputSchema},
  prompt: `You are a professional content writer specializing in crafting concise and engaging "About Me" sections for personal portfolios.

  Based on the following prompt, generate a compelling and brief summary of the individual's background, experience, and motivations. Keep it under 150 words.

  Prompt: {{{prompt}}}`,
});

const generateConciseAboutMeFlow = ai.defineFlow(
  {
    name: 'generateConciseAboutMeFlow',
    inputSchema: GenerateConciseAboutMeInputSchema,
    outputSchema: GenerateConciseAboutMeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
