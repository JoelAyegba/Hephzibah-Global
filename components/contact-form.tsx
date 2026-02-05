"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import emailjs from 'emailjs-com'
import { cn } from "@/lib/utils"

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

        try {
            await emailjs.send(
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
            console.error('EmailJS Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="space-y-10">
            <div className="space-y-4">
                <p className="text-sm font-light text-muted-foreground leading-relaxed">
                    Whether you have a prayer request, a testimony, or an inquiry, we are here to listen.
                    Every message is a sacred trust.
                </p>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                        <Label htmlFor="firstName" className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">First Name *</Label>
                        <Input
                            id="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            className="rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary transition-all placeholder:text-muted-foreground/30 font-light"
                        />
                    </div>
                    <div className="space-y-3">
                        <Label htmlFor="lastName" className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Last Name *</Label>
                        <Input
                            id="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            className="rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary transition-all placeholder:text-muted-foreground/30 font-light"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                        <Label htmlFor="email" className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Email Address *</Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary transition-all placeholder:text-muted-foreground/30 font-light"
                        />
                    </div>
                    <div className="space-y-3">
                        <Label htmlFor="phone" className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Phone Number</Label>
                        <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary transition-all placeholder:text-muted-foreground/30 font-light"
                        />
                    </div>
                </div>

                <div className="space-y-3">
                    <Label htmlFor="subject" className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Subject *</Label>
                    <select
                        id="subject"
                        className="flex w-full rounded-none border-0 border-b border-border bg-transparent px-0 py-2 text-sm focus:outline-none focus:border-primary transition-all font-light"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                    >
                        <option value="" className="bg-background">Select a subject</option>
                        <option value="prayer" className="bg-background">Prayer Request</option>
                        <option value="testimony" className="bg-background">Share a Testimony</option>
                        <option value="counseling" className="bg-background">Counseling Appointment</option>
                        <option value="membership" className="bg-background">Membership Inquiry</option>
                        <option value="general" className="bg-background">General Inquiry</option>
                    </select>
                </div>

                <div className="space-y-3">
                    <Label htmlFor="message" className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Message *</Label>
                    <Textarea
                        id="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary transition-all placeholder:text-muted-foreground/30 font-light resize-none"
                    />
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        className="bg-primary text-primary-foreground px-12 py-5 text-xs font-bold tracking-[0.4em] uppercase hover:bg-black hover:text-white transition-all duration-500 rounded-none w-full md:w-auto"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "TRANSMITTING..." : "SEND PETITION"}
                    </button>
                </div>

                {submissionStatus === "success" && (
                    <p className="text-[10px] font-bold tracking-widest uppercase text-primary animate-pulse">PETITION RECEIVED. WE WILL RESPOND SHORTLY.</p>
                )}
                {submissionStatus === "error" && (
                    <p className="text-[10px] font-bold tracking-widest uppercase text-red-500">TRANSMISSION FAILED. PLEASE TRY AGAIN.</p>
                )}
            </form>
        </div>
    )
}
