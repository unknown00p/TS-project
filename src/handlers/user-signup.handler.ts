import { signup_worker } from "../consumers/notification.consumer";
import { transporter } from "../services/email.service";
import nodemailer from 'nodemailer';

type signup_schema = {
  id: number;
  email: string;
};

signup_worker.on("completed", async (job) => {
  console.log(job.data);
  const jobData: signup_schema = await job.data;

  try {
    const info = await transporter.sendMail({
      from: '"Example Team" <team@example.com>', // sender address
      to: "alice@example.com, bob@example.com", // list of recipients
      subject: "Hello", // subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // HTML body
    });

    console.log("Message sent: %s", info.messageId);
    // Preview URL is only available when using an Ethereal test account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (err) {
    console.error("Error while sending mail:", err);
  }
});
