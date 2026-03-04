import type { Metadata } from 'next'
import UnderConstruction from '@/components/UnderConstruction'

export const metadata: Metadata = { title: 'Research News' }

export default function Page() {
  return <UnderConstruction title="Research News" section="News" />
}
