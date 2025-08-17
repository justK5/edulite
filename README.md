# EduLite Monorepo Skeleton (Battle-Tested)

## Apps
- `apps/landing` — Landing/marketing site
- `apps/portal` — Portal Lembaga (Operator)
- `apps/internal` — Portal Internal (Tim EduLite)

## Jalankan Lokal
```bash
pnpm install
pnpm dev:all
# atau per-app:
pnpm dev:landing
pnpm dev:portal
pnpm dev:internal
```

## ENV
Salin `.env.example` di masing-masing app menjadi `.env.local` lalu isi nilai-nilainya di Vercel.
