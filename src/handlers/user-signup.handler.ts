import { signup_worker } from "../consumers/notification.consumer";
import { transporter } from "../services/email.service";
import nodemailer from 'nodemailer';

type signup_schema = {
  id: number;
  email: string;
};

signup_worker.on("completed", async (job) => {
    const jobData: signup_schema = await job.data;
    console.log(job.data);

  try {
    const info = await transporter.sendMail({
      from: '"Explorar Team" <araj68144@gmail.com>', // sender address
      to: jobData.email, // list of recipients
      subject: "Hello", // subject line
      text: "Hello From TS-notifiction-system", // plain text body
      html: "<b>Welcome to the TS-notifiction-service</b>", // HTML body
    });

    console.log("Message sent: %s", info.messageId);
    // Preview URL is only available when using an Ethereal test account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (err) {
    console.error("Error while sending mail:", err);
  }
});