export type LegalDocument = {
  id: string;
  shortTitle: string;
  title: string;
  content: string;
};

export const legalDocuments: LegalDocument[] = [
  {
    id: "eula",
    shortTitle: "EULA",
    title: "SDZ Modding — End User License Agreement",
    content: `
Effective Date: 03-05-2025
Last Updated: 27-01-2026

This **End User License Agreement** (“Agreement”) is a legal agreement between you (the “User”) and **SDZ Modding** (“SDZ,” "Squadron DayZ," "Squadron DayZ Modding," “we,” “our,” or “us”), **governing your access** and use of any SDZ-created software, modifications (“mods”), and related materials (collectively, the “**Content**”).

**By downloading, installing, or using any Content produced by SDZ Modding, you agree to be bound by the terms of this Agreement.**

## 1. License Grant
- All mods publicly released by SDZ Modding are **free to use** and distributed via the Steam Workshop and our official Discord server: https://squadrondayz.com/modding/invite.
- These mods are provided for **personal or server use only** and may not be redistributed, repackaged, or monetized without explicit permission.
- A separate, **paid open-source version** of our mods is available. This version is intended for **education, reference, and internal development** only, and may not be redistributed, monetized, or used to create derivative works that copy proprietary elements.
- Access to **paid open-source versions** is provided through the **SDZ Ticket System and a personal download page hosted on SDZ servers**, which requires **authentication via the Steam Web API** to verify the legitimate purchaser.

## 2. Intended Use and Permissions
### **Permitted**
- Use SDZ mods on personal or community servers in accordance with Bohemia Interactive’s EULA.
- Reference open-source variants (if purchased) for personal learning or private use.
- Include SDZ mods in server mod lists **without repacking or modifying the mod files**.

### **Strictly Prohibited Without Explicit Permission**
- **Repacking, reuploading, or redistributing SDZ** mods in any form.
- **Extracting or reusing** models, scripts, or assets from either the binarized or open-source versions for use in your own public or private projects.
- Selling, leasing, or otherwise **monetizing SDZ content**, directly or indirectly.
- **Claiming ownership** or authorship of SDZ-created works or derivatives.

## 3. Binarization & Repacking
- All standard SDZ mods are **binarized** to protect intellectual property and ensure mod integrity.
- Repacking or modifying these files is **expressly forbidden**, unless using a purchased open-source version **with written permission**.
- Unauthorized repacking will result in takedown procedures (including DMCA notices), bans from our community, and potential legal action.

## 4. Intellectual Property
- All SDZ mods and assets remain the **intellectual property of SDZ Modding or their respective creators**.
- Some individual components may be governed by third-party licenses. Users must respect and comply with those licenses where applicable.

## 5. Compliance with Bohemia Interactive Guidelines
- Users must fully comply with **Bohemia Interactive’s End User License Agreement** (BI-EULA), modding policies, and monetization rules.
- This EULA **does not override Bohemia's terms** but operates in conjunction with them.

## 6. No Warranty & Limitation of Liability
- SDZ mods are provided "**as is**" without warranties of any kind.
- SDZ Modding is **not responsible** for game crashes, server instability, performance issues, data loss, or other damages arising from use of the Content.

## 7. Data Compliance
- SDZ Modding does **not intentionally collect or store any personal data** through its mods.
- If any mod functionality interacts with user data (e.g., IP addresses for whitelisting), it is handled securely and solely for functional purposes. No data is sold or shared.
- We do **not** store or process personal payment data directly.
- All **payments** are processed via **secure third-party services** (e.g., PayPal, Ko-Fi).
- Any data collected during transactions is subject to those **third parties’ privacy policies**.
- We will only use Discord usernames, Discord User IDs, Steam IDs and Server IPs for **mod functionality, payment, or access purposes**.

Users agree to operate SDZ content in compliance with applicable data protection laws, including the **UK Data Protection Act 2018** and the **General Data Protection Regulation (GDPR)** where relevant.

## 8. Jurisdiction & Enforcement
- This Agreement shall be governed by and construed in accordance with the **Digital Millennium Copyright Act** (DMCA) and the **laws of the Netherlands**.
- Any disputes shall fall under the exclusive jurisdiction of the courts of the Netherlands.
- Violations may result in legal action, including but not limited to DMCA takedown notices and civil proceedings.

## 9. Termination
- Any breach of this Agreement **terminates the user's license** immediately.
- SDZ Modding reserves the right to revoke access to its content, remove you from community platforms, and pursue legal remedies as necessary.

## 10. Acceptance of Terms
- **By downloading, repacking, using, or requesting access to any Content, you confirm your full acceptance of this EULA.**
- **Continued use of Content after any updates to this Agreement constitutes renewed acceptance.**
`,
  },
  {
    id: "terms",
    shortTitle: "Terms of Service",
    title: "SDZ Modding — Terms of Service",
    content: `
Effective Date: 01-08-2025
Last Updated: 27-01-2026

## 1. Introduction
Welcome to SDZ Modding. These Terms of Service (“Terms”) govern your access and use of our website, Discord server, and any associated services or products provided by SDZ Modding (collectively referred to as “Services”). By using our Services, you agree to comply with these Terms as well as applicable laws, Discord's Terms of Service, and Bohemia Interactive's End User License Agreement (EULA).

## 2. Definitions
- **SDZ Modding**: The modding group providing custom DayZ mods, services, and digital products.
- **User**: Any individual accessing or using SDZ Modding Services.
- **SDZ Tokens**: The digital currency used within SDZ Modding for automated purchases of repack and open-source rights.
- **Mods**: Digital modifications for DayZ created or distributed by SDZ Modding.
- **EULA**: End User License Agreement outlining mod licensing and usage rights.

## 3. User Responsibilities
- Users must **act respectfully** towards other members, staff, and third parties.
- Users must not engage in harassment, hate speech, or unlawful behavior within SDZ Services.
- Users must not share illegal content, malware, or stolen intellectual property.
- Users must adhere to the **rules of each platform**, including designated channel purposes and bot command restrictions on Discord.

## 4. Prohibited Conduct
- **Spamming, unsolicited advertising, or server invites** to unrelated platforms.
- Impersonation of SDZ staff or other members.
- Unauthorized resale, redistribution, or repacking of SDZ mods without proper licensing.
- Random solicitation of paid services via direct messages.

## 5. Paid Services and SDZ Tokens
- SDZ Tokens are used as **virtual currency** for purchasing Open-Source Rights or Repack Rights to SDZ mods in accordance with the **applicable license type**.
- Under normal operation, all purchases made with SDZ Tokens are **non-refundable**. However, if SDZ Modding verifies that, despite a successful Token deduction, you did not receive access to the corresponding mod on your personal download page or were unable to obtain a working download due to an SDZ-side technical fault that could not be resolved within a reasonable timeframe after you contacted support, this will be treated as a **failed delivery** and may result in a **refund**, Token reversal, or re-delivery at SDZ Modding’s discretion.
- Tokens hold **no real-world monetary value** and cannot be exchanged for cash or non-SDZ products.
- Abuse of the payment system, chargebacks after successful delivery, or fraud will result in account suspension and possible legal action.

## 6. Licensing and Intellectual Property
- All mods are protected by SDZ Modding's EULA and individual mod sub-licenses (NONR, NOFR, LOSA, FODL, FOFR).
- Unauthorized use, repacking, or claiming ownership of SDZ content is strictly prohibited and may result in **DMCA takedown notices** or legal proceedings.
- Users must comply with **Bohemia Interactive’s modding guidelines** and **EULA** at all times.

## 7. Disclaimer and Limitation of Liability
- SDZ Modding provides Services **“as is”** without any guarantees regarding uptime, bug-free operation, or compatibility with other mods.
- SDZ Modding is not liable for damages, losses, or disputes arising from:
- User-to-user transactions or scams.
- Third-party mods or dependencies.
- Server outages, data loss, or external platform failures (Discord, Steam Workshop, etc.).

## 8. Enforcement and Actions
- Violations of these Terms may lead to:
- Temporary or permanent bans from SDZ Services.
- Revocation of purchased access or licenses.
- Reporting to Discord or legal authorities in severe cases.

## 9. Changes to the Terms
SDZ Modding reserves the right to **update or modify these Terms** at any time. Any changes will be posted on our website and announced via Discord. Continued use of Services after updates constitutes acceptance of the revised Terms.

## 10. Acceptance of Terms
- By downloading, repacking, using, or requesting access to any SDZ Content or Services, you acknowledge and agree to these Terms of Service in full.
- Continued use of SDZ Content or Services after any updates to this Agreement constitutes renewed acceptance.
`,
  },
  {
    id: "privacy",
    shortTitle: "Privacy Policy",
    title: "SDZ Modding — Privacy Policy",
    content: `
Effective Date: 03-08-2025
Last Updated: 27-01-2026

## 1. Introduction
**Your privacy matters to us.**
This Privacy Policy explains how SDZ Modding (“SDZ”, “we”, “our”, or “us”) collects, uses, and protects your information when you interact with our Discord server, website, and services. By using our services, you agree to the practices described in this policy.

## 2. Information We Collect
### Account Data
- Discord username, user ID, and linked Steam account information (if applicable).

### Transaction Data
- SDZ Token balances, purchase history, records of successful and failed purchase attempts, and open-source mod download entitlements associated with your account.

### Technical Data
- IP address, browser information, device type, authentication events via the Steam Web API, and usage logs for security and troubleshooting.
- This includes timestamps and records of access to your personal download page and completed downloads of purchased mods.

### Voluntary Data
- Information you choose to provide via tickets, support channels, or messages to our team.

## 3. How We Use Your Information
### To provide services
- Enable SDZ Token transactions and mod purchases.
- Deliver purchased content through our Ticket System and personal download page, including verifying your identity via the Steam Web API and maintaining records necessary to confirm delivery and entitlements.

### To improve functionality
- Analyze usage for bug fixes, updates, and better user experience.

### For security and legal compliance
- Detect fraud, protect server integrity, and comply with applicable laws and Bohemia Interactive’s EULA.

## 4. Sharing of Data
- **We do not sell your data.**
- Data may be shared:
- With **Discord or Steam** for integration and functionality.
- With **payment processors** to complete transactions.
- With **legal authorities** if required by law.

## 5. Data Retention
- We retain data only as long as necessary to:
- Provide services, including maintaining accurate records of SDZ Token transactions, purchase history, and downloads of purchased mods.
- Resolve disputes, including verifying delivery or non-delivery of purchased content using Ticket System records and download logs.
- Meet legal and accounting obligations.
- Upon account deletion or inactivity, we will anonymize or delete personal data within a reasonable timeframe, except where legally required to retain it.

## 6. Children's Data Privacy
### Minimum Age Requirement
- SDZ Modding follows **Discord's Terms of Service**, which require all users to be at least **13 years old** (or the minimum digital age of consent in their country, e.g., **16 years** in parts of the EU).
- We do not knowingly process personal data from children below these age limits.

### Unverified Age on Registration
- SDZ does not have a mechanism to independently verify a user’s age.
- Users may access our services without providing age-specific details, meaning data may be collected unknowingly.

### Action Upon Discovery
- If we become aware that we are processing data from a child under the applicable age of consent:
- We will **promptly delete any sensitive data** associated with that user account upon verification and/or parental request.
- General account data (such as non-sensitive activity logs or balances) may be retained only as necessary to comply with platform or legal requirements, unless a removal request is received.

### Parental Rights
- Parents or guardians may **contact SDZ Modding directly** to request data access or deletion for a child under the age of consent.
- These requests will be handled promptly, in line with applicable EU GDPR, UK, and US (COPPA) regulations.

## 7. Your Rights
- **Access and correction**: You may request to view or correct your data.
- **Deletion**: You may request data removal, subject to legal and operational requirements.
- **Portability**: You may request a copy of your personal data where applicable.
- **Withdraw consent**: If you withdraw consent, certain services may become unavailable.

## 8. Security
- We take reasonable measures to protect your information from unauthorized access, alteration, disclosure, or destruction.
- However, no system is completely secure, and you acknowledge this risk by using our services.

## 9. Third-Party Links
- Our services may link to **third-party websites or servers**.
- We are **not responsible** for the privacy practices of third parties. Please review their policies separately.

## 10. Updates to this Policy
- We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements.
- Significant changes will be announced on our Discord server or website.
`,
  },
  {
    id: "tokens",
    shortTitle: "Token System Terms",
    title: "SDZ Token System — Terms & Conditions",
    content: `
Effective Date: 31-07-2025
Last Updated: 27-01-2026

These Terms govern the use of **SDZ Tokens** (the “Currency”) within the **SDZ Modding Discord Server** and affiliated services (“SDZ Modding,” “we,” “our,” or “us”). By purchasing, holding, or using SDZ Tokens, you agree to these Terms, which operate alongside our **End User License Agreement (EULA)** and applicable Discord and payment platform terms.

## 1. Nature of SDZ Tokens
- SDZ Tokens are a **virtual currency** with no real-world monetary value.
- Tokens are **non-transferable**, have **no cash equivalent**, and are normally **non-refundable**, except in cases of confirmed failed delivery of purchased content as described in these Terms and the SDZ Modding Terms of Service.
- Tokens may **only be used within SDZ Modding Services**, specifically for purchasing mod repack rights or open-source access.

## 2. Obtaining SDZ Tokens
- Tokens can be acquired through:
- **Direct purchase** via approved payment processors on the SDZ Discord server.
- **Promotions or giveaways** authorized by SDZ Modding.
- Purchases of Tokens are **final and non-reversible** under normal operation, except where a refund or reversal is granted in connection with a confirmed failed delivery of purchased content or as otherwise required by applicable law.
- SDZ Modding is not responsible for delays or failures in processing due to third-party payment providers.

## 3. Using SDZ Tokens
- Tokens can be used to:
- Purchase **Open-Source Rights or Repack Rights** to SDZ mods (subject to license type).
- Access additional digital content as listed on the SDZ Discord server.
- **All purchases are final**. Once Tokens are spent, they cannot be refunded or transferred back to your balance.
- SDZ Modding reserves the right to **adjust pricing or availability** of items without prior notice.

## 4. Delivery of Purchased Content
- Upon confirming a purchase, SDZ Tokens are deducted only if the User has **sufficient balance**. In cases of insufficient balance, no Tokens will be deducted and the User will be notified of the failed attempt in the Ticket System.
- For **successful purchases**, the User receives access—via their **Ticket System**—to a **personal download page hosted on SDZ servers**. Access requires **authentication through the Steam Web API** to verify account ownership.
- The personal download page lists all purchased mods with per-mod download options. SDZ server records maintain logs of purchase activity, access events, and completed downloads.
- Delivery is considered **complete** once the purchased mod is made available on the User’s **personal download page**, as evidenced by SDZ server records.
- If, after a **successful purchase**, the User cannot access or download the purchased content due to an **SDZ-side technical fault** that cannot be resolved within a reasonable timeframe after contacting support, this constitutes a **failed delivery**. Failed deliveries may qualify for a **refund**, Token reversal, or re-delivery, in accordance with these Terms and the SDZ Modding Terms of Service.

## 5. Account & Security
- You are responsible for:
- Maintaining access to your **Steam-linked account** on the SDZ Discord server.
- Keeping your account secure against **unauthorized use**.
- SDZ Modding is **not responsible for lost Tokens** due to unauthorized access or account loss.

## 6. Expiration & Inactivity
- SDZ Tokens **do not expire** under normal operation.
- SDZ Modding reserves the right to **suspend or remove balances** if:
- The Discord account is banned or removed for violating rules.
- Fraudulent or chargeback-related activity is detected.

## 7. No Resale or Third-Party Trading
- Tokens **may not be sold, exchanged, or transferred** to other users for real money or outside services.
- Any unauthorized trading will result in **account suspension** and potential legal action.

## 8. Changes to the Token System
- SDZ Modding may **modify or terminate** the SDZ Token System at any time, with at least **14 calendar days’ notice** announced on the SDZ Discord server, except where earlier modification or suspension is required due to **security issues, fraud, legal obligations, or platform-related failures beyond SDZ’s control**.
- Any unused Tokens at the time of termination may **expire without refund**.

## 9. Legal & Jurisdiction
- These Terms are governed by the **laws of the Netherlands** and are subject to the **Digital Millennium Copyright Act (DMCA)** and other applicable copyright regulations.
- Any disputes arising out of or in connection with these Terms fall under the exclusive jurisdiction of the **courts of the Netherlands**.
`,
  },
  {
    id: "copyright",
    shortTitle: "Copyright Policy",
    title: "SDZ Modding — Copyright Policy",
    content: `
Effective Date: 03-08-2025
Last Updated: 27-01-2026

At **SDZ Modding**, we respect intellectual property rights and expect our community and customers to do the same. This **Copyright Policy** outlines how we handle content ownership, licensing, and potential infringements related to our services and products, in full compliance with **Bohemia Interactive’s EULA and Game Content Usage Rules**.

## 1. Ownership of Content
- All **original content** created and published by SDZ Modding, including but not limited to **custom scripts, 3D models, textures, sounds, documentation, and configuration files**, is protected under copyright law and remains the exclusive intellectual property of SDZ Modding or its respective authors.
- **Third-party assets** included in SDZ products are only used under valid licenses or with explicit permission from the rights holder. We maintain records of all such permissions and can provide evidence of licensing or ownership upon legitimate request.
- **Bohemia Interactive's proprietary content** (such as game models, textures, scripts, or other protected assets from DayZ or other BI titles) is **never sold, monetized, or redistributed outside of BI’s EULA-approved channels** (e.g., Steam Workshop for free mods).

## 2. Your Rights to Use SDZ Content
- When you purchase Open Source Rights or Repack Rights for any SDZ Content via **SDZ Tokens**, you are granted a **limited, non-exclusive, non-transferable license** to download and use the purchased content under the license type specified (NONR, NOFR, LOSA, FODL, FOFR).
- Purchase or access to open-source files **does not transfer ownership or copyright** to you. All rights remain with SDZ Modding or the original rights holder.
- Free versions of SDZ mods, when made available on Steam Workshop or other BI-compliant platforms, remain **free-to-use** in accordance with Bohemia Interactive's and SDZ's policies and licenses.

## 3. Prohibited Uses
- You may not **copy, reproduce, distribute, sell, sublicense, or otherwise exploit** SDZ content or derivative works outside the rights explicitly granted under the mod's license.
- Any attempt to **monetize Bohemia Interactive's proprietary assets** or redistribute SDZ products under your name without permission is strictly prohibited.
- Reverse engineering, removing license headers, or bypassing SDZ’s licensing restrictions is not allowed and may result in revocation of access and legal action.

## 4. Copyright Infringement Claims
We respect the rights of all creators. If you believe that SDZ Modding or any user of our services has infringed upon your copyright:
- Please contact us promptly at support@squadrondayz.com with the following details:
- Proof of ownership of the allegedly infringed content.
- A description of the material you believe has been infringed.
- A link or other identifying information where the material can be found.
- We will review all reports within a reasonable timeframe and take appropriate action, which may include:
- Temporarily or permanently removing the disputed material.
- Revoking user access to infringing content.
- Cooperating with **Bohemia Interactive** or relevant legal authorities as needed.

## 5. Copyright Protection for SDZ Brand Assets & Systems
- All SDZ brand elements—including logos, trademarks, imagery, the SDZ Token System, the SDZ Ticket System, and the SDZ personal download page and associated delivery infrastructure—are the exclusive intellectual property of SDZ Modding. **Unauthorized use, misrepresentation, or redistribution of these assets under the SDZ name or branding is strictly prohibited**.
- Reverse engineering or adaptation of SDZ systems (including the Ticket and Token systems) is permitted only if:
- The resulting work is **not affiliated** with SDZ.
- Does **not use SDZ branding, trademarks, or proprietary assets**.
- And complies with all applicable laws and third-party terms (including Bohemia Interactive’s EULA and Valve’s API Terms).
- The SDZ Ticket System and personal download page integrate with **Valve’s Steam Web API** for account authentication and verification purposes. We access only minimal data (e.g., Steam ID, username) required to provide services. No private Steam data is collected, stored, or monetized, and all usage remains fully compliant with Valve’s API Terms, GDPR, CCPA, and other applicable privacy regulations.

## 6. Enforcement & Penalties
Violations of this policy or of any other applicable policies including, but not limited to **SDZ EULA, Terms of Service, or Bohemia Interactive's EULA** may result in:
- Revocation of access to purchased or free content without refund.
- Permanent bans from the SDZ Discord, website, and associated services.
- Reporting to Bohemia Interactive or other rights holders.
- Legal action where infringement or damages are substantial.
`,
  },
  {
    id: "contact",
    shortTitle: "Contact",
    title: "SDZ Modding — Contact Information",
    content: `
Last Updated: 27-01-2026

- **Email**: support@squadrondayz.com
- **Discord**: Join SDZ Modding via https://squadrondayz.com/discord/invite
- Then create a Ticket in your personal **Ticket Forum** on the Discord server.

This Contact Information applies to **all SDZ Legal Documents**, including:
- **SDZ End User License Agreement (EULA)**
- **SDZ Terms of Service (ToS)**
- **SDZ Token System – Terms & Conditions**
- **SDZ Privacy Policy**
- **SDZ Copyright Policy**

All support requests, legal questions, reports of potential infringements and data or privacy inquiries must be submitted through one of the contact methods listed above.
`,
  },
];

export const legalDocumentMap = Object.fromEntries(
  legalDocuments.map((document) => [document.id, document]),
) as Record<string, LegalDocument>;
