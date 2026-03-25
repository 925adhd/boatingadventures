import { NextRequest, NextResponse } from 'next/server'

const rateLimitMap = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS = 5

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now - entry.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, timestamp: now })
    return false
  }

  entry.count++
  return entry.count > MAX_REQUESTS
}

function sanitize(input: string, maxLength: number = 500): string {
  return input.slice(0, maxLength).replace(/<[^>]*>/g, '').trim()
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown'

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, phone, service, message } = body

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      )
    }

    const sanitizedData = {
      name: sanitize(name, 100),
      phone: sanitize(phone, 20),
      service: sanitize(service || '', 100),
      message: sanitize(message || '', 1000),
    }

    // TODO: Replace with actual email service (SendGrid, Resend, etc.)
    console.log('Contact form submission:', sanitizedData)

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}
