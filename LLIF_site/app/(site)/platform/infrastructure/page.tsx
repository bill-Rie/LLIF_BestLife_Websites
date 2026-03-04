import type { Metadata } from 'next'
import UnderConstruction from '@/components/UnderConstruction'

export const metadata: Metadata = { title: 'Infrastructure' }

export default function Page() {
  return <UnderConstruction title="Infrastructure" section="Platform" />
}
