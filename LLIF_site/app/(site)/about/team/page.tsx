import type { Metadata } from 'next'
import UnderConstruction from '@/components/UnderConstruction'

export const metadata: Metadata = { title: 'Our Team' }

export default function Page() {
  return <UnderConstruction title="Our Team" section="About" />
}
