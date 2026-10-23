import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Terms of Service - wishtoria" };

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="Placeholder date"
      sections={[
        {
          heading: "Overview",
          placeholder:
            "Placeholder. Replace with a short statement of what using wishtoria means agreeing to.",
        },
        {
          heading: "Using wishtoria",
          placeholder:
            "Placeholder. Describe what the service does (building and sharing a personalized surprise site) and any usage limits.",
        },
        {
          heading: "Accounts",
          placeholder:
            "Placeholder. State what, if anything, is required to create and use an account or a purchased link.",
        },
        {
          heading: "Payments",
          placeholder:
            "Placeholder. Describe pricing, what a purchase includes, and how payments are processed.",
        },
        {
          heading: "Acceptable use",
          placeholder:
            "Placeholder. State what content or behavior is not allowed on a surprise site created through the service.",
        },
        {
          heading: "Limitation of liability",
          placeholder:
            "Placeholder. Add your actual liability terms. This needs real legal review before launch, not placeholder text.",
        },
        {
          heading: "Changes to these terms",
          placeholder: "Placeholder. State how you will notify users of changes.",
        },
        {
          heading: "Contact us",
          placeholder: "Placeholder. Add a real support email or contact method.",
        },
      ]}
    />
  );
}
