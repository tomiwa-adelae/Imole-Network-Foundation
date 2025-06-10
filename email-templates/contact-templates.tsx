import { WEBSITE_URL } from "@/constants";

export const userContactMail = ({
	name,
	email,
	subject,
	message,
	phoneNumber,
}: {
	name: string;
	email: string;
	subject: string;
	message: string;
	phoneNumber: string;
}) => `
    <!DOCTYPE html>
<html>
  <body style="font-family: Arial, sans-serif; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #007B5E;">Thank You for Reaching Out</h2>
      <p>Dear ${name},</p>

      <p>Thank you for contacting <strong>Imọlẹ Progressive Network Foundation</strong>. We have received your message and appreciate you taking the time to reach out.</p>

      <p>Here’s a summary of what you submitted:</p>

      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone number:</strong> ${phoneNumber}</li>
        <li><strong>Subject:</strong> ${subject}</li>
        <li><strong>Message:</strong> ${message}</li>
      </ul>

      <p>Our team will review your message and get back to you as soon as possible. We value every inquiry and do our best to respond within 24–48 hours.</p>

      <p>In the meantime, feel free to explore our <a href="${WEBSITE_URL}" style="color: #007B5E;">website</a> to learn more about our work and ongoing projects.</p>

      <p>Warm regards,<br />
      <strong>The Imọlẹ Progressive Network Foundation Team</strong></p>

      <hr style="margin-top: 40px;" />
      <small style="color: #777;">This is an automated message. Please do not reply directly to this email.</small>
    </div>
  </body>
</html>
`;

export const adminContactMail = ({
	name,
	email,
	subject,
	message,
	phoneNumber,
}: {
	name: string;
	email: string;
	subject: string;
	message: string;
	phoneNumber: string;
}) => `
    <!DOCTYPE html>
<html>
  <body style="font-family: Arial, sans-serif; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #007B5E;">New Contact Form Submission</h2>
      <p>Dear ${name},</p>

      <p>A new message has been submitted through the contact form:</p>

      <p>Here’s a summary of what you submitted:</p>

      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone number:</strong> ${phoneNumber}</li>
        <li><strong>Subject:</strong> ${subject}</li>
        <li><strong>Message:</strong> ${message}</li>
      </ul>

      <p>Please follow up as soon as possible.</p>

     <p>--<br /><strong>Imole Network Foundation</strong><br />Contact Form Notification</p>

      <hr style="margin-top: 40px;" />
      <small style="color: #777;">This is an automated message sent from your website contact form.</small>
    </div>
  </body>
</html>
`;
