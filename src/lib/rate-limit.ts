const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

const FREE_DAILY_LIMIT = 3;

export function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    rateLimitMap.set(ip, { count: 1, resetAt: midnight.getTime() });
    return { allowed: true, remaining: FREE_DAILY_LIMIT - 1 };
  }

  if (entry.count >= FREE_DAILY_LIMIT) {
    return { allowed: false, remaining: 0 };
  }

  entry.count++;
  return { allowed: true, remaining: FREE_DAILY_LIMIT - entry.count };
}
