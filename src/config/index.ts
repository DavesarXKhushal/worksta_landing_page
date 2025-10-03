import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        // write a default title for worksta a ai powered website builder suggest something unique and catchy don't use the same words of ai powered website builder give a unique name
        default: "Worksta — F&B Shift Staffing & Gig Marketplace",
        template: `%s | Worksta`
    },
    description: "Connect gig workers with F&B venues to fill shifts fast. Smart scheduling, vetted Pros, and weekly payouts.",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "Worksta — F&B Shift Staffing & Gig Marketplace",
        description: "Connect gig workers with F&B venues to fill shifts fast. Smart scheduling, vetted Pros, and weekly payouts.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@shreyassihasane",
        title: "Worksta — F&B Shift Staffing & Gig Marketplace",
        description: "Connect gig workers with F&B venues to fill shifts fast. Smart scheduling, vetted Pros, and weekly payouts.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("https://worksta-app.vercel.app"),
};
