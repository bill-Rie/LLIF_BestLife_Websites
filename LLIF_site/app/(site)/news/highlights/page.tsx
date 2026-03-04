import type { Metadata } from 'next'
import UnderConstruction from '@/components/UnderConstruction'

export const metadata: Metadata = { title: 'Highlights' }

export default function Page() {
  return <UnderConstruction title="Highlights" section="News" />
}
