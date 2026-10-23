import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy - wishtoria" };

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="Placeholder date"
      sections={[
        {
          heading: "Overview",
          placeholder:
            "Placeholder. Replace with a short statement of what this policy covers and who it applies to.",
        },
        {
          heading: "Information we collect",
          placeholder:
            "Placeholder. List what you actually collect: account details, content entered into a surprise site, payment metadata, analytics, etc.",
        },
        {
          heading: "How we use it",
          placeholder:
            "Placeholder. Describe your actual use of that information: delivering the service, payments, support, product improvement.",
        },
        {
          heading: "Data retention",
          placeholder:
            "Placeholder. State how long content and account data is kept, and what happens to a surprise site after it expires or is deleted.",
        },
        {
          heading: "Your rights",
          placeholder:
            "Placeholder. Describe how someone can access, correct, or delete their data, and how to reach you to do so.",
        },
        {
          heading: "Contact us",
          placeholder: "Placeholder. Add a real support email or contact method.",
        },
      ]}
    />
  );
}
