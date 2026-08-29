# Clairen Content Studio v0.2

A focused MVP for the $9/month 30-Day Content Builder.

## Included now

- Responsive Next.js 16.3.3 app shell
- Dashboard and 30-day calendar
- Individual post editor UI
- Brand-profile + monthly-brief onboarding
- Facebook, Instagram, and LinkedIn output model
- Copy Image Prompt / Generate Image workflow separation
- Repurpose controls
- AI usage dashboard
- OpenAI structured-output plan endpoint
- Supabase client/server scaffolding
- Full PostgreSQL schema with RLS
- Subscription + usage-event data model for Stripe metered billing
- 2x AI cost markup helper
- Demo mode with 30 sample posts and no secrets required

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Connect services

Copy `.env.example` to `.env.local` and add credentials.

Do not run `schema/supabase.sql` against an existing production database without reviewing table/type name collisions. The preferred setup is a dedicated Supabase project for Content Studio.

## Build order from here

1. Supabase Auth + persistent brand profiles
2. Website scanner and confirmation screen
3. Save generated plans/items to Supabase
4. Caption rewrite + repurpose endpoints with per-action usage records
5. Stripe $9 subscription checkout + webhook sync
6. Stripe meter event reporting for marked-up AI usage
7. Image generation endpoint + Supabase Storage
8. Production deployment to Railway

## Pricing logic

Base subscription: $9/month.

AI actions are metered. `lib/usage.ts` currently computes the customer charge as provider cost x 2. Provider pricing must be stored/configured server-side before this becomes production billing logic.

## Important

The first-pass generator uses `gpt-5.6-terra`, the balanced GPT-5.6 model. The usage helper includes current text-rate constants for Terra and Luna; re-check provider pricing before production billing is enabled.
