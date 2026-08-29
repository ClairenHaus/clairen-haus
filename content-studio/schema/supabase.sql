-- Clairen Content Studio v0.2
-- Run in a dedicated Supabase project or schema after review.

create extension if not exists pgcrypto;

create type public.content_status as enum ('idea','draft','ready','published','archived');
create type public.subscription_status as enum ('trialing','active','past_due','canceled','unpaid','incomplete');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.brand_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  business_name text not null,
  website_url text,
  industry text,
  business_description text,
  ideal_customer text,
  audience_problems text[] not null default '{}',
  desired_outcomes text[] not null default '{}',
  voice_traits text[] not null default '{}',
  avoid_language text[] not null default '{}',
  default_goals text[] not null default '{}',
  website_scan jsonb,
  scan_confirmed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.offers (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  brand_profile_id uuid not null references public.brand_profiles(id) on delete cascade,
  name text not null,
  description text,
  price_label text,
  url text,
  is_primary boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.ctas (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  brand_profile_id uuid not null references public.brand_profiles(id) on delete cascade,
  label text not null,
  action_type text not null,
  destination text,
  keyword text,
  created_at timestamptz not null default now()
);

create table public.content_plans (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  brand_profile_id uuid not null references public.brand_profiles(id) on delete cascade,
  month_start date not null,
  monthly_focus text,
  goals text[] not null default '{}',
  posting_frequency text not null default 'daily',
  strategy_summary text,
  status text not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(user_id, month_start)
);

create table public.content_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  content_plan_id uuid not null references public.content_plans(id) on delete cascade,
  day_number int not null check(day_number between 1 and 31),
  scheduled_for date,
  pillar text not null,
  goal text,
  format text,
  platforms text[] not null default '{}',
  title text not null,
  hook text,
  key_point text,
  caption text,
  cta text,
  image_concept text,
  image_prompt text,
  alt_text text,
  status public.content_status not null default 'idea',
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(content_plan_id, day_number)
);

create table public.content_versions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  content_item_id uuid not null references public.content_items(id) on delete cascade,
  version_type text not null,
  platform text,
  payload jsonb not null,
  model text,
  created_at timestamptz not null default now()
);

create table public.generated_images (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  content_item_id uuid references public.content_items(id) on delete cascade,
  storage_path text,
  provider text not null default 'openai',
  model text,
  prompt text not null,
  width int,
  height int,
  provider_cost_cents numeric(12,4) not null default 0,
  customer_cost_cents numeric(12,4) not null default 0,
  created_at timestamptz not null default now()
);

create table public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references public.profiles(id) on delete cascade,
  stripe_customer_id text unique,
  stripe_subscription_id text unique,
  stripe_price_id text,
  status public.subscription_status not null default 'incomplete',
  current_period_start timestamptz,
  current_period_end timestamptz,
  cancel_at_period_end boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.usage_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  content_item_id uuid references public.content_items(id) on delete set null,
  action text not null,
  provider text not null,
  model text not null,
  input_tokens int,
  output_tokens int,
  provider_cost_cents numeric(12,4) not null default 0,
  markup_multiplier numeric(6,3) not null default 2.000,
  customer_cost_cents numeric(12,4) not null default 0,
  stripe_meter_event_id text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index content_items_plan_idx on public.content_items(content_plan_id, day_number);
create index usage_events_user_created_idx on public.usage_events(user_id, created_at desc);

alter table public.profiles enable row level security;
alter table public.brand_profiles enable row level security;
alter table public.offers enable row level security;
alter table public.ctas enable row level security;
alter table public.content_plans enable row level security;
alter table public.content_items enable row level security;
alter table public.content_versions enable row level security;
alter table public.generated_images enable row level security;
alter table public.subscriptions enable row level security;
alter table public.usage_events enable row level security;

create policy "profiles own row" on public.profiles for all using (auth.uid() = id) with check (auth.uid() = id);
create policy "brand profiles own rows" on public.brand_profiles for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "offers own rows" on public.offers for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "ctas own rows" on public.ctas for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "content plans own rows" on public.content_plans for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "content items own rows" on public.content_items for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "content versions own rows" on public.content_versions for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "generated images own rows" on public.generated_images for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "subscriptions read own row" on public.subscriptions for select using (auth.uid() = user_id);
create policy "usage events read own rows" on public.usage_events for select using (auth.uid() = user_id);

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data ->> 'full_name', ''));
  return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();
