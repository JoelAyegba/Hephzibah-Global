import { ReactNode } from "react"

export const metadata = {
    title: "Giving - Hephzibah Global Christian Centre Church",
    description: "Support the vision of Hephzibah Global Christian Centre Church through your tithes, offerings, and special donations.",
    openGraph: {
        title: "Giving - Hephzibah Global Christian Centre Church",
        description: "Support the vision of Hephzibah Global Christian Centre Church through your tithes, offerings, and special donations.",
        image: "/choir ministration.jpg",
    },
}

export default function GivingLayout({ children }: { children: ReactNode }) {
    return <>{children}</>
}
