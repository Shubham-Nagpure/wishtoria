import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Refund Policy - wishtoria" };

export default function RefundPage() {
  return (
    <LegalPage
      title="Refund Policy"
      updated="Placeholder date"
      sections={[
        {
          heading: "Overview",
          placeholder:
            "Placeholder. Replace with a short statement of when a refund is available.",
        },
        {
          heading: "Eligibility",
          placeholder:
            "Placeholder. State your actual eligibility window and conditions. Do not guess a number here; this is a real commercial commitment.",
        },
        {
          heading: "How to request a refund",
          placeholder:
            "Placeholder. Describe the actual steps: where to request one and what information is needed.",
        },
        {
          heading: "Processing time",
          placeholder:
            "Placeholder. State how long a refund actually takes to reach the original payment method.",
        },
        {
          heading: "Non-refundable cases",
          placeholder:
            "Placeholder. List what is not eligible, for example a surprise site that has already been shared or viewed.",
        },
        {
          heading: "Contact us",
          placeholder: "Placeholder. Add a real support email or contact method.",
        },
      ]}
    />
  );
}
