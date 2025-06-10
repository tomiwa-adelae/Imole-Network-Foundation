import { emailAddress, WEBSITE_URL } from "@/constants";

export const userVolunteerMail = ({ name }: { name: string }) => `
    <!DOCTYPE html>
<html>
  <body style="font-family: Arial, sans-serif; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #007B5E;">Thank You for Volunteering!</h2>
      <p>Dear ${name},</p>

      <p>Thank you for applying to become a volunteer with <strong>Imọlẹ Progressive Network Foundation</strong>.</p>

      <p>We are thrilled that you're interested in joining our mission to serve communities through education, healthcare, and food outreach. Your passion and willingness to give back mean the world to us—and even more to those we help.</p>

      <p>Our team has received your application and will review it shortly. We may reach out to you soon for further steps or clarifications.</p>

      <p>In the meantime, if you have any questions or would like to update your application, feel free to reach out to us at <a href="mailto:${emailAddress}">${emailAddress}</a>.</p>

      <p>With gratitude,<br />
      <strong>The Imọlẹ Network Foundation Team</strong></p>

      <hr style="margin-top: 40px;" />
      <small style="color: #777;">This is a confirmation message regarding your volunteer application submitted via the Imole Network Foundation website.</small>
    </div>
  </body>
</html>

`;

export const adminVolunteerMail = ({
	name,
	email,
	area,
	message,
	phoneNumber,
}: {
	name: string;
	email: string;
	area: string;
	message: string;
	phoneNumber: string;
}) => `
    <!DOCTYPE html>
<html>
  <body style="font-family: Arial, sans-serif; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #007B5E;">New Contact Form Submission</h2>
      <p>A new message has been submitted through the contact form:</p>

      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone number:</strong> ${phoneNumber}</li>
        <li><strong>Subject:</strong> ${area}</li>
        <li><strong>Message:</strong><br />${message}</li>
      </ul>

      <p>Please follow up as soon as possible.</p>

      <p>--<br /><strong>Imọlẹ Progressive Network Foundation</strong><br />Contact Form Notification</p>

      <hr style="margin-top: 40px;" />
      <small style="color: #777;">This is an automated message sent from your website contact form.</small>
    </div>
  </body>
</html>

`;
