export async function GET() {
  return Response.json({
    ok: true,
    vercelEnv: process.env.VERCEL_ENV ?? 'local',
    node: process.version,
    ts: Date.now()
  })
}
