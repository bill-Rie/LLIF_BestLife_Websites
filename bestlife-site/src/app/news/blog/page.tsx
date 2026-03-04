import type { Metadata } from 'next'
import UnderConstruction from '@/components/UnderConstruction'

export const metadata: Metadata = { title: 'Blog' }

export default function Page() {
  return <UnderConstruction title="Blog" section="News" />
}
