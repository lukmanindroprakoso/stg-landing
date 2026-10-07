import type { Metadata } from "next";
import { LegalPage } from "../_components/LegalPage";
import { privacy } from "../_lib/legal";

export const metadata: Metadata = { title: "Privacy Policy | STG" };

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Your privacy matters to us. This policy describes how STG handles your personal information."
      sections={privacy}
    />
  );
}
