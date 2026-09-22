import type { Metadata } from "next";
import {
  A,
  Address,
  EFFECTIVE_DATE,
  Email,
  LegalPage,
  Note,
  OL,
  P,
  Section,
  Title,
  UL,
} from "../legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Slouly - Music Speed Changer.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <LegalPage>
      <Title>Privacy Policy</Title>
      <P>Slouly - Music Speed Changer (“Slouly”, “the app”)</P>
      <Note>Effective date: {EFFECTIVE_DATE}</Note>
      <P>
        This policy explains what happens to your data when you use the Slouly
        app for iPhone and iPad, the website tryslouly.app and our support. It
        is written to be complete: if something is not described here, Slouly
        does not do it.
      </P>

      <Section>1. Who is responsible</Section>
      <P>
        The controller under the EU General Data Protection Regulation (GDPR)
        is:
      </P>
      <P>
        <Address />
        <br />
        Email: <Email />
      </P>
      <P>
        Slouly is made by one independent developer. There is no company behind
        it, no advertising partner and no data broker. We have not appointed a
        data protection officer, because the law does not require one for us.
      </P>

      <Section>2. Short version</Section>
      <OL>
        <li>
          <strong>No account.</strong> You never sign up, log in or give us your
          name to use the app.
        </li>
        <li>
          <strong>Your music stays on your device.</strong> Songs, videos you
          take audio from, your effect settings and exported files are stored
          only on your iPhone or iPad. We never upload them and we cannot see
          them.
        </li>
        <li>
          <strong>No ads, no tracking, no selling.</strong> The app contains no
          advertising, no analytics and no tracking across other apps or
          websites. We do not sell or rent your data to anyone.
        </li>
        <li>
          <strong>Crash reports only.</strong> If the app crashes, a technical
          crash report is sent so we can fix the bug. You can turn this off in
          Settings.
        </li>
        <li>
          <strong>Payments go through Apple.</strong> We never see your name,
          email address or payment details when you buy Slouly Premium.
        </li>
      </OL>

      <Section>3. Data that stays on your device</Section>
      <P>Everything you do in Slouly is processed on your device only:</P>
      <UL>
        <li>songs and audio files you import from the Files app,</li>
        <li>videos you pick from your photo library to take their audio,</li>
        <li>
          your effect settings (tempo, pitch, reverb, bass boost and panning),
          which the app remembers for next time,
        </li>
        <li>the audio files you export.</li>
      </UL>
      <P>
        Exported files are saved in the Slouly folder of the Files app on your
        device. They are not sent to us or to anyone else. You can delete them
        at any time in the Files app, or delete everything at once by deleting
        the app. Please note that we have no copy: if you delete the app or lose
        your device, your files cannot be restored by us.
      </P>
      <P>
        If your device is set to back up to iCloud or a computer, Apple’s
        backup may include the app’s storage. This backup is controlled by
        you and Apple, under Apple’s privacy policy, not by us.
      </P>

      <Section>4. Permissions the app asks for</Section>
      <P>
        <strong>Photo library.</strong> When you choose Extract From Video,
        Slouly asks for access to your photo library so you can pick a video and
        take its audio. You can allow access to all photos, to selected photos
        only, or deny it, and change this at any time in the iOS Settings app.
        Videos are read on your device only.
      </P>
      <P>
        <strong>Files.</strong> When you import a song through the Files app,
        the app only reads the file you pick.
      </P>
      <P>
        Slouly does <strong>not</strong> access your microphone, camera,
        contacts, location, calendar, health data or music library, and does not
        ask for permission to track you (App Tracking Transparency). The app
        does not read the advertising identifier (IDFA).
      </P>

      <Section>5. Crash reports (Firebase Crashlytics)</Section>
      <P>
        <strong>What.</strong> When the app crashes, it sends a crash report to
        Firebase Crashlytics, a service of Google Ireland Limited, Gordon House,
        Barrow Street, Dublin 4, Ireland (“Google”). A report
        contains:
      </P>
      <UL>
        <li>
          the technical crash details (which part of the app code failed and
          why),
        </li>
        <li>device model, iOS version, app version and build number,</li>
        <li>
          technical state at the time of the crash (for example free memory and
          storage, device orientation, whether the app was in the foreground),
        </li>
        <li>
          a random installation ID created by Crashlytics, so repeated crashes
          on the same device can be counted as one affected user,
        </li>
        <li>
          your IP address, which is technically needed to send the report over
          the internet.
        </li>
      </UL>
      <P>
        A crash report never contains your songs, videos, exported files or any
        other content. It does not contain your name, email address or Apple
        ID. We cannot use it to find out who you are.
      </P>
      <P>
        <strong>Why.</strong> To find and fix bugs that make the app crash.
      </P>
      <P>
        <strong>Legal basis.</strong> Our legitimate interest in providing an
        app that works reliably (Article 6(1)(f) GDPR). Storing and reading the
        installation ID on your device is strictly necessary for the crash
        reporting you can control in the app (Section 25(2) no. 2 of the German
        Telecommunications Digital Services Data Protection Act, TDDDG).
      </P>
      <P>
        <strong>Your choice.</strong> You can turn crash reports off at any time
        in the app under Menu (•••) {">"} Settings {">"} Privacy {">"} Share
        Crash Reports. When you turn it off, reports that were not sent yet are
        deleted and no further reports are sent. You can also object at any time
        (see Section 11).
      </P>
      <P>
        <strong>How long.</strong> Google keeps crash reports for 90 days, then
        deletes them.
      </P>
      <P>
        <strong>Processor.</strong> Google processes this data on our behalf
        under the Google Cloud and Firebase data processing terms. More
        information: <A href="https://firebase.google.com/support/privacy" />
      </P>

      <Section>6. Purchases (Slouly Premium)</Section>
      <P>
        Slouly Premium is a one-time purchase sold and processed by Apple
        through the App Store. Apple handles payment, billing, refunds and your
        Apple ID. We never receive your name, email address, Apple ID, address
        or payment details.
      </P>
      <P>
        To unlock Premium, the app asks Apple’s StoreKit system on your
        device which purchases your Apple ID owns. This check happens between
        your device and Apple. From Apple, we only receive anonymous, aggregated
        sales reports (for example how many purchases were made in a country),
        which do not identify you.
      </P>
      <P>
        Apple’s privacy policy applies to purchases:{" "}
        <A href="https://www.apple.com/legal/privacy/" />
      </P>

      <Section>7. Sharing and other apps</Section>
      <P>
        <strong>Exported files.</strong> You decide where your files go. When
        you open an exported file in the Files app or share it from there, it
        goes where you send it. We receive nothing.
      </P>
      <P>
        <strong>Recommend Slouly.</strong> This opens the iOS share sheet with a
        link to Slouly on the App Store. You choose whether and with whom to
        share it.
      </P>
      <P>
        <strong>App Store links.</strong> Leave Review and the link to our other
        app Vibely open the App Store. Apple’s privacy policy applies there.
      </P>

      <Section>8. Website and in-app links</Section>
      <P>
        <strong>Hosting.</strong> The website tryslouly.app, including the
        Privacy, Terms and Support pages that the app opens, is hosted by GitHub
        Pages, a service of GitHub, Inc., 88 Colin P. Kelly Jr. Street, San
        Francisco, CA 94107, USA. When you open a page, your browser sends
        technical data, including your IP address, the page requested, the date
        and time and your browser type, to GitHub. GitHub uses this data to
        deliver the website and to keep it secure, and may store it in log files
        for security purposes. Legal basis: our legitimate interest in a secure,
        working website (Article 6(1)(f) GDPR). GitHub’s privacy statement:{" "}
        <A href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" />
      </P>
      <P>
        <strong>No cookies, no analytics.</strong> The website sets no cookies,
        uses no analytics or tracking tools, and loads no fonts or scripts from
        other servers.
      </P>
      <P>
        <strong>Support link.</strong> When you open Get Support from the app,
        the link includes your app version and iOS version (for example
        “app_version=v1.0.6 (1)&os_version=iOS 26.1”), so we can see
        which version you are asking about if you contact us. This contains no
        personal information.
      </P>

      <Section>9. Contacting support</Section>
      <P>
        If you email us, we receive your email address, your name if you include
        it, your message and anything you attach. We use this only to answer you
        and to fix the problem you report.
      </P>
      <P>
        Legal basis: answering your request (Article 6(1)(b) GDPR, where it is
        about a contract, otherwise Article 6(1)(f) GDPR, our legitimate
        interest in answering). We use Gmail, a service of Google, to receive
        and send email.
      </P>
      <P>
        We delete support conversations when they are no longer needed, and at
        the latest two years after the conversation ends, unless we must keep
        them longer by law.
      </P>

      <Section>10. International transfers</Section>
      <P>
        Some of the providers above are based in the USA or send data there
        (Google LLC, GitHub, Inc.). Where a provider is certified under the
        EU-U.S. Data Privacy Framework, the transfer is based on the European
        Commission’s adequacy decision (Article 45 GDPR). Otherwise, it is
        based on the European Commission’s Standard Contractual Clauses
        (Article 46(2)(c) GDPR).
      </P>

      <Section>11. Your rights</Section>
      <P>Under the GDPR you have the right to:</P>
      <UL>
        <li>
          <strong>access</strong> the data we hold about you (Article 15),
        </li>
        <li>
          <strong>correct</strong> incorrect data (Article 16),
        </li>
        <li>
          <strong>delete</strong> your data (Article 17),
        </li>
        <li>
          <strong>restrict</strong> processing (Article 18),
        </li>
        <li>
          <strong>data portability</strong> (Article 20),
        </li>
        <li>
          <strong>withdraw consent</strong> at any time, with effect for the
          future, where processing is based on consent (Article 7(3)).
        </li>
      </UL>
      <P>
        <strong>Right to object (Article 21 GDPR).</strong> Where we process
        your data based on our legitimate interest (Article 6(1)(f) GDPR), you
        can object at any time for reasons arising from your particular
        situation. For crash reports, simply turn off Share Crash Reports in the
        app’s Settings.
      </P>
      <P>
        To use your rights, email <Email />. Please note: because crash reports
        and App Store data do not identify you, we usually cannot link them to
        you (Article 11 GDPR). Data that exists only on your device is fully in
        your control and can be deleted by you at any time.
      </P>
      <P>
        You also have the right to lodge a complaint with a data protection
        supervisory authority, in particular in the EU member state where you
        live or work, or where you think a violation took place (Article 77
        GDPR).
      </P>

      <Section>12. What Slouly does not do</Section>
      <UL>
        <li>no advertising and no ad networks,</li>
        <li>no analytics or usage tracking in the app or on the website,</li>
        <li>
          no tracking across apps or websites and no advertising identifier,
        </li>
        <li>no selling, renting or trading of personal data,</li>
        <li>
          no profiling and no automated decisions with legal or similarly
          significant effect,
        </li>
        <li>
          no user accounts, no cloud storage of your content, no access to your
          contacts, location, microphone or camera.
        </li>
      </UL>

      <Section>13. Children</Section>
      <P>
        The app does not require any personal data, so it can be used by anyone
        the App Store age rating allows. We do not knowingly collect personal
        data from children. If you believe a child has sent us personal data,
        please contact us and we will delete it.
      </P>

      <Section>14. Security</Section>
      <P>
        Data sent to Crashlytics and our website is encrypted in transit
        (HTTPS). Access to the support email is limited to the developer.
        Content in the app stays on your device and is protected by your
        device’s own security, such as your passcode and iOS data
        protection.
      </P>

      <Section>15. Changes to this policy</Section>
      <P>
        We update this policy when Slouly changes how it handles data, for
        example if we add a new feature or service provider. The effective date
        at the top always shows the current version. If a change affects data we
        already hold, we will tell you in the app or on the website before it
        takes effect.
      </P>

      <Section>16. Contact</Section>
      <P>
        <Address />
        <br />
        <Email />
      </P>
    </LegalPage>
  );
}
