// "use server";
// import emailjs from "emailjs/browser";

import emailjs from "emailjs-com";
export const sendEmail = async (formData) => {
  const data = {
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  const templateParams = {
    from_name: `${data.firstname} ${data.lastname}`,
    from_email: data.email,
    to_name: "Leandro De Leon",
    message: data.message,
  };

  await emailjs.send(
    process.env.SEND_EMAIL_SERVICE_ID,
    process.env.SEND_EMAIL_TEMPLATE_ID,
    templateParams,
    process.env.SEND_EMAIL_PUBLIC_KEY
  );
};
