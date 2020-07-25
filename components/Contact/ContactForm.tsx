import React from "react";
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";
import { useContactUsMutation } from "generated/graphql";

const ContactForm = () => {
  const [ContactUs, { loading }] = useContactUsMutation();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    ContactUs({
      variables: { ...data },
    })
      .then(() => {
        toast.success("Success: Your Message Has been Sent");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="contact-from contact-shadow">
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="contact-form"
        action="assets/mail.php"
        method="post"
      >
        <input name="name" type="text" placeholder="Name" ref={register} />
        <input name="email" type="email" placeholder="Email" ref={register} />
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          ref={register}
        />
        <textarea name="message" placeholder="Your Message" ref={register} />
        <button className="submit" type="submit">
          Send{loading ? "ing Your" : ""} Message
        </button>
      </form>
      <p className="form-messege">You Can Expect reply within 48 hours</p>
    </div>
  );
};
export default ContactForm;
