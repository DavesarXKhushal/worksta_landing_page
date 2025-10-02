import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        // write a default title for worksta a ai powered website builder suggest something unique and catchy don't use the same words of ai powered website builder give a unique name
        default: "Worksta - AI Powered Website Builder",
        template: `%s | Worksta`
    },
    description: "Worksta is an AI powered website builder that helps you create a website in minutes. No coding skills required. Get started for free!",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "Worksta - AI Powered Website Builder",
        description: "Worksta is an AI powered website builder that helps you create a website in minutes. No coding skills required. Get started for free!",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@shreyassihasane",
        title: "Worksta - AI Powered Website Builder",
        description: "Worksta is an AI powered website builder that helps you create a website in minutes. No coding skills required. Get started for free!",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("https://worksta-app.vercel.app"),
};
