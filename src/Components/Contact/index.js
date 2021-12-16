import React from "react";
import { ContactSection, ContactTitle, Span, Form, FormInput, InputEmail, InputSub, InputText, Textarea, Button } from "./style.js";

const Contact = () => {
    return (
        <ContactSection>
            <div className="container">
                <ContactTitle>Contact <Span>Me</Span></ContactTitle>
                <Form>
                    <FormInput>
                        <InputText placeholder="Your Name" />
                        <InputEmail placeholder="Your Email" />
                    </FormInput>
                    <InputSub type="text" placeholder="Your Subject" />
                    <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                    <Button type="submit">Send Message</Button>
                </Form>
            </div>

        </ContactSection>
    )
}
export default Contact;