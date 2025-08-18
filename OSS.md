# Kebijakan OSS EduLite

## Prinsip
- Gunakan paket via pnpm; jangan vendor/commit source upstream.
- Fork hanya bila patch jangka panjang diperlukan; dokumentasikan di bagian "Fork".
- Penuhi kewajiban lisensi & atribusi.

## Lisensi yang diizinkan (allowlist)
MIT, Apache-2.0, BSD-2/3-Clause, ISC, MPL-2.0.
Dihindari di klien: GPL-3.0, AGPL-3.0.

## Proses menambah dependensi
1) Pastikan lisensi cocok allowlist.
2) `pnpm add <pkg>` atau `pnpm add -D <pkg>`.
3) Jalankan `pnpm sbom` dan `pnpm licenses:gen`.
4) Tambahkan atribusi wajib ke `NOTICE` bila diperlukan.

## Fork yang dipertahankan
- (kosong)

## Atribusi pihak ketiga
- Font/ikon, dsb — dirangkum di `THIRD_PARTY_LICENSES.md`.
