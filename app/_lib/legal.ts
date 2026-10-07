// Draft legal copy. TODO: have counsel review before launch (governing law, entity details, retention periods).

export type LegalSection = { title: string; body: string[] };

export const LEGAL_UPDATED = "October 7, 2026";

export const terms: LegalSection[] = [
  {
    title: "1. About STG",
    body: [
      'STG is a software platform operated by STG Global LLC ("STG", "we", "us"). It lets clients and service providers create, negotiate, approve and track service agreements online. By creating an account or using STG, you agree to these Terms of Service.',
    ],
  },
  {
    title: "2. STG is not a party to your agreements",
    body: [
      "STG provides software only. We do not provide, perform, supervise or guarantee the services agreed between users, and we are not a party to any agreement created on the platform.",
      "Clients and service providers are solely responsible for the services they offer, accept and deliver, for the accuracy of the terms they enter, and for any payments made between them. STG does not hold, transfer or guarantee funds between users.",
    ],
  },
  {
    title: "3. Accounts and eligibility",
    body: [
      "You must be at least 18 years old and able to enter a binding contract. You must provide accurate information and keep your credentials secure. You are responsible for activity under your account.",
      "We may ask you to verify your phone number or government ID. Some features, such as earning Street Cred points, may require verification.",
    ],
  },
  {
    title: "4. Service agreements",
    body: [
      "A draft agreement uses no credits. An agreement becomes active only after both parties approve it, and expires after 48 hours if not approved.",
      "STG records the terms, status, comments and files you add so both parties share one history. STG does not review the legal sufficiency of any agreement and does not provide legal advice.",
    ],
  },
  {
    title: "5. Disputes",
    body: [
      "STG provides tools to raise a dispute, communicate, and record an outcome. These tools are a convenience. STG does not act as arbitrator or judge, and does not decide or enforce the outcome of any dispute between users.",
    ],
  },
  {
    title: "6. Credits and memberships",
    body: [
      "Credits are required to activate a service agreement and are deducted only after both parties approve. If an agreement is canceled before approval, the credits are refunded.",
      "Trial Credits are included with the free Novice plan and reset every month; unused Trial Credits do not carry over. Owned Credits come with paid memberships or top-ups and never reset. Credits have no cash value and cannot be transferred or exchanged for money.",
      "Credits are non-refundable once deducted. Paid memberships are billed monthly in US dollars through our payment processor and renew automatically until canceled. You can cancel at any time; cancellation takes effect at the end of the current billing period.",
    ],
  },
  {
    title: "7. Acceptable use",
    body: [
      "You agree not to use STG for unlawful purposes, to impersonate others, to upload malicious content, to interfere with the platform, or to circumvent credit, verification or security controls. We may suspend or terminate accounts that violate these Terms or that we reasonably believe are abusive or fraudulent.",
    ],
  },
  {
    title: "8. Your content",
    body: [
      "You keep ownership of the content you submit. You grant STG a limited license to host, process and display that content to operate the platform, including showing it to the other party to your agreement.",
    ],
  },
  {
    title: "9. Disclaimers and limitation of liability",
    body: [
      'STG is provided "as is" and "as available" without warranties of any kind, to the fullest extent permitted by law. We do not warrant that the platform will be uninterrupted or error-free.',
      "To the fullest extent permitted by law, STG is not liable for indirect, incidental or consequential damages, or for any loss arising from services, payments or disputes between users. Our total liability for any claim is limited to the amount you paid to STG in the 12 months before the claim.",
    ],
  },
  {
    title: "10. Changes and termination",
    body: [
      "We may update these Terms from time to time. Continued use after changes take effect means you accept them. You may stop using STG and close your account at any time.",
    ],
  },
  {
    title: "11. Governing law",
    body: [
      // TODO: confirm jurisdiction
      "These Terms are governed by the laws of the jurisdiction in which STG Global LLC is organized, without regard to conflict-of-law rules.",
    ],
  },
];

export const privacy: LegalSection[] = [
  {
    title: "1. Overview",
    body: [
      'This Privacy Policy explains what personal information STG Global LLC ("STG", "we", "us") collects when you use STG, how we use it, and the choices you have.',
    ],
  },
  {
    title: "2. Information we collect",
    body: [
      "Account information: name, email address, password (stored in hashed form), profile photo, language preference and phone number.",
      "Verification information: results of phone and government ID verification, handled with our verification providers.",
      "Agreement content: titles, descriptions, timelines, compensation, payment method, comments, files and dispute records that you or the other party add.",
      "Transaction information: membership, credit and invoice records. Card details are collected and processed by our payment processor and are not stored by STG.",
      "Technical information: IP address, device and browser type, and cookies or similar technologies needed to keep you signed in and secure the service.",
    ],
  },
  {
    title: "3. How we use information",
    body: [
      "To provide and operate the platform, including creating agreements and sharing them with the invited party; to process memberships and credits; to verify accounts and prevent fraud and abuse; to send service emails and one-time verification codes; to provide support; and to improve and secure STG.",
    ],
  },
  {
    title: "4. How we share information",
    body: [
      "With the other party to an agreement: they can see the agreement content and the profile details needed to identify you.",
      "With service providers that help us run STG, such as payment processing, email and SMS delivery, sign-in, bot protection, identity verification and hosting. They may only use the data to provide services to us.",
      "When required by law or to protect rights, safety and security. If STG is involved in a merger or sale, information may be transferred as part of that transaction. We do not sell your personal information.",
    ],
  },
  {
    title: "5. Retention",
    body: [
      "We keep your information while your account is active and as needed to meet legal, accounting and dispute-resolution obligations. You can ask us to delete your account; some records may be kept where the law requires it.",
    ],
  },
  {
    title: "6. Security",
    body: [
      "We use reasonable technical and organizational safeguards to protect your information. No system is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    title: "7. Your choices and rights",
    body: [
      "You can access and update your profile in Settings. Depending on where you live, you may have the right to access, correct, delete or export your personal information, or to object to certain processing. To make a request, contact us using the details below.",
    ],
  },
  {
    title: "8. Children",
    body: [
      "STG is not intended for anyone under 18, and we do not knowingly collect information from children.",
    ],
  },
  {
    title: "9. International users",
    body: [
      "STG may process and store information in countries other than your own. By using STG you understand that your information may be transferred to those countries.",
    ],
  },
  {
    title: "10. Changes to this policy",
    body: [
      "We may update this policy from time to time. The date at the top shows when it was last changed.",
    ],
  },
];
