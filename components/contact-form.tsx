"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import emailjs from 'emailjs-com'

export function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

    useEffect(() => {
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
        console.log('EmailJS Public Key loaded:', publicKey ? 'Yes' : 'No');
        console.log('Service ID loaded:', process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ? 'Yes' : 'No');
        console.log('Template ID loaded:', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ? 'Yes' : 'No');
        emailjs.init(publicKey);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionStatus(null);

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';

        console.log('Attempting to send email with:', {
            serviceId: serviceId ? 'Present' : 'Missing',
            templateId: templateId ? 'Present' : 'Missing',
            formData: formData
        });

        try {
            const result = await emailjs.send(
                serviceId,
                templateId,
                {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    phone: formData.phone,
                    subject: formData.subject,
                    message: formData.message,
                    to_email: 'hgccww@gmail.com',
                }
            );

            console.log('EmailJS Success:', result);
            setSubmissionStatus("success");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            setSubmissionStatus("error");
            console.error('EmailJS Full Error:', error);
            console.error('Error details:', JSON.stringify(error, null, 2));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] mb-6">Reach Out to Us</h2>
            <p className="text-muted-foreground mb-6">
                Whether you have a prayer request, a testimony, or an inquiry, we are here to listen.
            </p>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="Enter your first name" required value={formData.firstName} onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Enter your last name" required value={formData.lastName} onChange={handleChange} />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required value={formData.email} onChange={handleChange} />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="08057981311" value={formData.phone} onChange={handleChange} />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <select
                        id="subject"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                    >
                        <option value="">Select a subject</option>
                        <option value="prayer">Prayer Request</option>
                        <option value="testimony">Share a Testimony</option>
                        <option value="counseling">Counseling Appointment</option>
                        <option value="membership">Membership Inquiry</option>
                        <option value="general">General Inquiry</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" placeholder="How can we pray for you or help you?" rows={6} required value={formData.message} onChange={handleChange} />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                {submissionStatus === "success" && (
                    <p className="text-green-500">Message sent successfully! We will be in touch.</p>
                )}
                {submissionStatus === "error" && (
                    <p className="text-red-500">Failed to send message. Please try again.</p>
                )}
            </form>
        </div>
    )
}
