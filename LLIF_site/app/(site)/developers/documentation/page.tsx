import type { Metadata } from 'next'
import UnderConstruction from '@/components/UnderConstruction'

export const metadata: Metadata = { title: 'Developer Documentation' }

export default function Page() {
  return <UnderConstruction title="Developer Documentation" section="Developers" />
}
