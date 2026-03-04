import type { Metadata } from 'next'
import UnderConstruction from '@/components/UnderConstruction'

export const metadata: Metadata = { title: 'Financials' }

export default function Page() {
  return <UnderConstruction title="Financial Transparency" section="About" />
}
