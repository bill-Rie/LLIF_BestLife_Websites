import type { Metadata } from 'next'
import UnderConstruction from '@/components/UnderConstruction'

export const metadata: Metadata = { title: 'Platform Overview' }

export default function Page() {
  return <UnderConstruction title="Platform Overview" section="Platform" />
}
