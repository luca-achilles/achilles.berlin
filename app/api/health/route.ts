export function GET() {
  return Response.json({
    status: 'OK',
    uptime: Math.round(process.uptime()),
    timestamp: Date.now(),
  });
}
