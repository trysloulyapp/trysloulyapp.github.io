import type { Metadata } from "next";
import {
  A,
  Address,
  EFFECTIVE_DATE,
  Email,
  LEGAL_ADDRESS,
  LEGAL_NAME,
  LegalPage,
  Note,
  OL,
  P,
  Section,
  Title,
} from "../legal";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for Slouly - Music Speed Changer.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <LegalPage>
      <Title>Terms of Use</Title>
      <P>Slouly - Music Speed Changer (“Slouly”, “the app”)</P>
      <Note>Effective date: {EFFECTIVE_DATE}</Note>

      <Section>1. Who we are and what these terms cover</Section>
      <P>
        1.1 Slouly is provided by {LEGAL_NAME}, {LEGAL_ADDRESS.join(", ")},{" "}
        <Email /> (“we”, “us”).
      </P>
      <P>
        1.2 These Terms of Use (“Terms”) apply to your use of the
        Slouly app for iPhone and iPad and the website tryslouly.app. By
        downloading or using Slouly, you agree to these Terms. If you do not
        agree, please do not use Slouly.
      </P>
      <P>
        1.3 Slouly is licensed to you through Apple’s App Store.
        Apple’s Licensed Application End User License Agreement (
        <A href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" />
        ) applies in addition to these Terms. Where these Terms and Apple’s
        agreement differ, these Terms apply, except for Section 10 (Apple),
        which always applies.
      </P>
      <P>
        1.4 How we handle personal data is explained in our Privacy Policy at{" "}
        <A href="/privacy">https://tryslouly.app/privacy</A>.
      </P>

      <Section>2. What Slouly is</Section>
      <P>
        2.1 Slouly is an app for changing songs. You import a song or take the
        audio from a video, change its tempo, pitch, reverb, bass and panning,
        and export the result as an audio file.
      </P>
      <P>
        2.2 Slouly works without an account. Your songs, settings and exports
        are stored only on your device. We do not store copies, and we cannot
        restore lost files. Please keep your own backups of work that matters to
        you.
      </P>
      <P>
        2.3 You can import songs, change them and listen to the result for free.
        Exporting a file needs Slouly Premium (see Section 5).
      </P>

      <Section>3. Your license to use Slouly</Section>
      <P>
        3.1 We grant you a non-exclusive, non-transferable, revocable license to
        use Slouly on Apple devices that you own or control, as allowed by the
        App Store Usage Rules.
      </P>
      <P>
        3.2 You may use Slouly for personal and commercial purposes, as long as
        you have the rights to the audio you put into it (see Section 4).
      </P>
      <P>3.3 You may not:</P>
      <OL>
        <li>
          copy, sell, rent, sublicense or distribute the app or parts of it,
        </li>
        <li>
          decompile, reverse engineer or modify the app, except where the law
          expressly allows this (for example Section 69e of the German Copyright
          Act),
        </li>
        <li>
          bypass, disable or interfere with in-app purchases, license checks or
          other technical protections,
        </li>
        <li>
          use Slouly in a way that breaks the law or infringes the rights of
          others.
        </li>
      </OL>

      <Section>4. Your content and your responsibility</Section>
      <P>
        4.1 <strong>You own what you make.</strong> Songs and videos you import,
        and the files you export, belong to you (or to whoever owns them). We do
        not receive them and claim no rights to them.
      </P>
      <P>
        4.2 <strong>Slouly does not give you rights to music.</strong> Slouly is
        a tool. It does not license any song or other content that you import.
        A sped up, slowed down or otherwise changed version of a song is still
        based on the original, and publishing it usually needs permission from
        the owners of the music (songwriters, labels and collecting societies).
        Before you publish or share an exported file, make sure you have all
        necessary rights. Many platforms have their own rules for copyrighted
        music.
      </P>
      <P>
        4.3 You must not use Slouly to create or share content that is illegal,
        infringes copyright, trademarks or personality rights, or is harassing,
        hateful, violent, sexually exploitative or otherwise harmful.
      </P>
      <P>
        4.4 If a third party makes a claim against us because content you
        created with Slouly infringes their rights, and you are at fault, you
        will compensate us for the damage this causes us, including reasonable
        legal costs. You may prove that less damage was caused.
      </P>

      <Section>5. Slouly Premium</Section>
      <P>
        5.1 <strong>What it is.</strong> Slouly Premium is a one-time purchase
        that unlocks exporting, as shown in the app. The price is shown before
        you buy and includes any taxes Apple charges. It is not a subscription
        and does not renew.
      </P>
      <P>
        5.2 <strong>Apple is the seller.</strong> All purchases are made through
        the App Store and are subject to Apple’s Media Services Terms and
        Conditions (
        <A href="https://www.apple.com/legal/internet-services/itunes/" />
        ). Payment is charged to your Apple ID at confirmation of purchase.
      </P>
      <P>
        5.3 <strong>How long it lasts.</strong> Slouly Premium stays unlocked
        for the Apple ID that bought it, for as long as we offer Slouly and it
        is available on the App Store. You can restore it on your other devices
        with “Restore Purchases”.
      </P>
      <P>
        5.4 <strong>Refunds and right of withdrawal.</strong> Because Apple
        sells Slouly Premium, refunds and any statutory right of withdrawal are
        handled by Apple under its terms. You can request a refund at{" "}
        <A href="https://reportaproblem.apple.com" />. We cannot issue refunds
        ourselves.
      </P>
      <P>
        5.5 <strong>Changes to Slouly.</strong> We continue to develop Slouly and
        may add, change or remove features. We will not remove exporting from
        Slouly Premium, unless this is needed for legal, security or technical
        reasons outside our control. Your statutory rights for digital products
        remain unaffected.
      </P>

      <Section>6. Availability and updates</Section>
      <P>
        6.1 We try to keep Slouly working well, but we cannot promise that it is
        always available, free of errors or compatible with every device, iOS
        version, file format or third-party app. Importing or exporting can take
        time and may fail, for example with protected files or if your device is
        low on storage.
      </P>
      <P>
        6.2 We may release updates to fix bugs, improve security, add features
        or keep Slouly compatible with new iOS versions. Some updates may be
        needed to keep using the app.
      </P>
      <P>
        6.3 Services from others that Slouly connects to, such as the App Store,
        are provided by those companies under their own terms. We are not
        responsible for them, and they may change or stop at any time.
      </P>

      <Section>7. Our liability</Section>
      <P>
        7.1 We are liable without limitation for damage caused intentionally or
        through gross negligence, for injury to life, body or health, under the
        German Product Liability Act, and where we have given a guarantee.
      </P>
      <P>
        7.2 For slight negligence, we are only liable if we breach an essential
        obligation, meaning an obligation that makes the proper use of Slouly
        possible in the first place and on which you may regularly rely. In that
        case our liability is limited to the damage that is typical and
        foreseeable for this kind of contract.
      </P>
      <P>
        7.3 In all other cases, our liability for slight negligence is excluded.
      </P>
      <P>
        7.4 <strong>Loss of data.</strong> If you lose data, we are only liable
        for the effort that would have been needed to restore it if you had made
        regular backups appropriate to its importance.
      </P>
      <P>
        7.5 <strong>Free use.</strong> If you use Slouly without paying, we are
        only liable for intent and gross negligence, and in the cases of Section
        7.1.
      </P>
      <P>
        7.6 These limitations also apply to anyone who works for us or on our
        behalf.
      </P>

      <Section>8. Ending use</Section>
      <P>
        8.1 You can stop using Slouly at any time by deleting the app.
      </P>
      <P>
        8.2 We may end your license if you seriously breach these Terms, for
        example under Section 3.3 or Section 4.3. Your statutory rights remain
        unaffected.
      </P>

      <Section>9. Changes to these Terms</Section>
      <P>
        9.1 We may update these Terms, for example when we add features, change
        Slouly Premium or when the law changes. We will publish the new version
        on <A href="/terms">tryslouly.app/terms</A> and tell you about important
        changes in the app or on the website before they take effect.
      </P>
      <P>
        9.2 Changes do not affect purchases you have already made to your
        disadvantage, unless you agree. If you do not agree with a change, you
        can stop using Slouly.
      </P>

      <Section>10. Apple</Section>
      <P>
        10.1 These Terms are between you and us only, not with Apple. We, not
        Apple, are solely responsible for Slouly and its content.
      </P>
      <P>
        10.2 Apple has no obligation to provide any maintenance or support for
        Slouly.
      </P>
      <P>
        10.3 If Slouly fails to conform to any applicable warranty, you may
        notify Apple, and Apple will refund the purchase price (if any) for
        Slouly to you. To the maximum extent permitted by law, Apple has no
        other warranty obligation for Slouly.
      </P>
      <P>
        10.4 We, not Apple, are responsible for addressing any claims by you or
        any third party relating to Slouly or your possession and use of it,
        including product liability claims, claims that Slouly fails to meet any
        legal or regulatory requirement, and claims under consumer protection,
        privacy or similar laws.
      </P>
      <P>
        10.5 If a third party claims that Slouly or your possession and use of
        it infringes their intellectual property rights, we, not Apple, are
        solely responsible for the investigation, defense, settlement and
        discharge of that claim.
      </P>
      <P>
        10.6 You confirm that you are not located in a country that is subject
        to a U.S. Government embargo or that has been designated by the U.S.
        Government as a “terrorist supporting” country, and that you
        are not listed on any U.S. Government list of prohibited or restricted
        parties.
      </P>
      <P>
        10.7 Apple and its subsidiaries are third-party beneficiaries of these
        Terms. When you accept these Terms, Apple has the right to enforce them
        against you as a third-party beneficiary.
      </P>

      <Section>11. Law and disputes</Section>
      <P>
        11.1 These Terms are governed by the laws of the Federal Republic of
        Germany, excluding the UN Convention on Contracts for the International
        Sale of Goods. If you are a consumer, this choice of law does not take
        away the protection of mandatory laws of the country where you usually
        live.
      </P>
      <P>
        11.2 If you are a merchant, a legal entity under public law or a special
        fund under public law, the exclusive place of jurisdiction is our place
        of residence. If you are a consumer, you may bring claims in the courts
        where you live, and the statutory rules on jurisdiction apply.
      </P>
      <P>
        11.3 We are not willing or obliged to take part in dispute resolution
        proceedings before a consumer arbitration board.
      </P>

      <Section>12. Final provisions</Section>
      <P>
        12.1 If any part of these Terms is invalid or unenforceable, the rest
        remains in effect, and the statutory provisions apply in place of the
        invalid part.
      </P>
      <P>
        12.2 These Terms are written in English. If we provide a translation,
        the English version applies in case of differences, unless mandatory law
        says otherwise.
      </P>

      <Section>13. Contact</Section>
      <P>
        <Address />
        <br />
        <Email />
      </P>
    </LegalPage>
  );
}
