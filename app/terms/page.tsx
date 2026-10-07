import type { Metadata } from "next";
import { LegalPage } from "../_components/LegalPage";
import { terms } from "../_lib/legal";

export const metadata: Metadata = { title: "Terms of Service | STG" };

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="Please read these terms carefully. They govern your use of the STG platform."
      sections={terms}
    />
  );
}
