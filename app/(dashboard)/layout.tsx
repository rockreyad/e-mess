import SiteLayout from '@/components/layout'
// import dynamic from "next/dynamic";
import { ReactNode } from 'react'

// const SiteLayout = dynamic(() => import("@/components/layout"));

export default function DashboardLayout({ children }: { children: ReactNode }) {
	return (
		<div>
			<SiteLayout>
				{/* Content */}
				{children}
			</SiteLayout>
		</div>
	)
}
