# Clairen Content Studio v0.3

The MVP for the $9/month 30-Day Content Builder.

## Current product loop

1. Create an account or sign in.
2. Complete the persistent Brand Profile.
3. Start a month and complete the Monthly Brief.
4. Generate/review the content strategy.
5. Generate individual posts only when needed.

## Included now

- Next.js 16.3.3 app shell
- Supabase SSR email/password authentication
- Session refresh through Next.js `proxy.ts`
- Persistent personal Profile
- Persistent Brand Profile with RLS ownership
- Monthly Brief separated from permanent Brand Profile data
- Dashboard, 30-day calendar, Content Library, content editor
- AI Usage inside the account menu rather than the main workspace
- Facebook, Instagram, and LinkedIn output model
- Stripe subscription + metered usage data model
- Demo mode when Supabase credentials are not present

## Local setup

Use Node.js 22 or later.

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and add the connected service credentials.

Supabase now recommends publishable keys for new apps. Do not place a secret or service-role key in any `NEXT_PUBLIC_` variable.

## Supabase Auth configuration

For SSR email confirmation, configure the Supabase Auth Confirm signup template so the confirmation link sends the token hash to the app endpoint:

```html
<a href="{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=email">Confirm email address</a>
```

Also configure the project's Site URL and allowed redirect URLs for the production Content Studio domain.

## Database

`schema/supabase.sql` is designed for a dedicated Content Studio Supabase project and includes:

- RLS on all exposed application tables
- authenticated owner policies
- explicit Data API grants for 2026 Supabase exposure defaults
- no public `SECURITY DEFINER` user-creation trigger

Do not run it against an existing production database without reviewing table/type name collisions.

## Dependency security

Runtime dependencies are pinned to exact versions in `package.json`. Generate and commit a lockfile in an environment with npm registry access before production merge.

## Next build phase

1. Connect a dedicated Supabase project and run/verify the schema.
2. Persist the Monthly Brief and generated plan.
3. Feed Brand Profile + Monthly Brief into generation.
4. Save generated content items and versions.
5. Add Stripe subscription checkout and usage metering.
