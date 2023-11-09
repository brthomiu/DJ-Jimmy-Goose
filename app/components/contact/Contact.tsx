import React from "react";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";

type Props = {};

export default function Contact({}: Props) {
  return (
    <section id="contact" className="flex xl:pt-24 xl:-mt-24 2xl:pt-48 2xl:-mt-48 flex-col gap-20 justify-center items-center text-center">
      <ContactHeader />
      <ContactForm />
    </section>
  );
}
