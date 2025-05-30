import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { sendEmail } from "../services/emailService";

// Remove hardcoded email and use environment variable
const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;

const MentorApply = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    expertise: "",
    currentCompany: "",
    designation: "",
    linkedinProfile: "",
    resumeLink: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const applicationData = {
        ...formData,
        submittedAt: new Date().toISOString(),
        applicationId: `MENTOR-${Date.now()}`,
      };

      // Log the data being sent
      console.log("Submitting application data:", applicationData);

      const docRef = await addDoc(
        collection(db, "mentorApplications"),
        applicationData
      );
      console.log("Application submitted successfully with ID:", docRef.id);

      // Send email notification to admin
      if (ADMIN_EMAIL) {
        console.log("Sending admin notification email to:", ADMIN_EMAIL);
        const adminEmailResult = await sendEmail({
          to: ADMIN_EMAIL,
          type: "MENTOR_APPLICATION",
          data: {
            ...applicationData,
            submittedAt: new Date(applicationData.submittedAt).toLocaleString(),
          },
        });

        if (!adminEmailResult.success) {
          console.error(
            "Failed to send admin notification:",
            adminEmailResult.error
          );
        } else {
          console.log("Admin notification email sent successfully.");
        }
      } else {
        console.warn(
          "Admin notification email not sent: VITE_ADMIN_EMAIL not configured"
        );
      }

      setSubmitStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        experience: "",
        expertise: "",
        currentCompany: "",
        designation: "",
        linkedinProfile: "",
        resumeLink: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting application:", error);
      // Log more detailed error information
      if (error.code) {
        console.error("Firebase error code:", error.code);
      }
      if (error.message) {
        console.error("Error message:", error.message);
      }
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start py-12 pt-4 bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-tr from-orange-300 to-orange-200 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute top-1/3 right-12 w-6 h-6 bg-orange-300 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/4 w-10 h-10 border-4 border-orange-200 rounded-full opacity-20"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center mb-12 mt-8">
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
            Join Our Expert Mentor Team{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
              & Shape Future Tech Leaders
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Share your expertise and experience to help aspiring developers achieve their career goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Benefits */}
          <div className="h-full">
            <div className="bg-white backdrop-blur-lg rounded-2xl p-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-orange-100 h-full">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
                Why Become a Mentor?
              </h2>
              <div className="space-y-6">
                <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-orange-50/80 transition-all duration-300 border border-transparent hover:border-orange-100">
                  <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-orange-100 text-orange-600 group-hover:bg-orange-200 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-orange-600 transition-colors">
                      Make an Impact
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Shape the next generation of tech talent and help them achieve their career goals
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-orange-50/80 transition-all duration-300 border border-transparent hover:border-orange-100">
                  <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-orange-100 text-orange-600 group-hover:bg-orange-200 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-orange-600 transition-colors">
                      Competitive Compensation
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Earn attractive compensation while sharing your knowledge and expertise
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-orange-50/80 transition-all duration-300 border border-transparent hover:border-orange-100">
                  <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-orange-100 text-orange-600 group-hover:bg-orange-200 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-orange-600 transition-colors">
                      Join Elite Network
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Connect with fellow industry experts and expand your professional network
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Application Form */}
          <div className="h-full">
            <div className="h-full">
              <div className="relative h-full">
                {/* Form background decoration */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-orange-300 to-orange-200 rounded-full opacity-30 blur-xl"></div>

                {/* Form Card */}
                <div className="relative bg-white backdrop-blur-lg rounded-2xl p-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-orange-100 h-full">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                          placeholder="Your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                            setFormData((prev) => ({ ...prev, phone: value }));
                          }}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                          placeholder="10-digit mobile number"
                          pattern="[0-9]{10}"
                          maxLength="10"
                        />
                      </div>
                      <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                          Years of Experience *
                        </label>
                        <input
                          type="text"
                          id="experience"
                          name="experience"
                          required
                          value={formData.experience}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                          placeholder="Years of experience"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="expertise" className="block text-sm font-medium text-gray-700 mb-1">
                        Areas of Expertise *
                      </label>
                      <input
                        type="text"
                        id="expertise"
                        name="expertise"
                        required
                        value={formData.expertise}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                        placeholder="e.g., React, Node.js, Python"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="currentCompany" className="block text-sm font-medium text-gray-700 mb-1">
                          Current Company
                        </label>
                        <input
                          type="text"
                          id="currentCompany"
                          name="currentCompany"
                          value={formData.currentCompany}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                          placeholder="Company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-1">
                          Designation
                        </label>
                        <input
                          type="text"
                          id="designation"
                          name="designation"
                          value={formData.designation}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                          placeholder="Current role"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="linkedinProfile" className="block text-sm font-medium text-gray-700 mb-1">
                        LinkedIn Profile
                      </label>
                      <input
                        type="url"
                        id="linkedinProfile"
                        name="linkedinProfile"
                        value={formData.linkedinProfile}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                        placeholder="LinkedIn profile URL"
                      />
                    </div>

                    <div>
                      <label htmlFor="resumeLink" className="block text-sm font-medium text-gray-700 mb-1">
                        Resume Link
                      </label>
                      <input
                        type="url"
                        id="resumeLink"
                        name="resumeLink"
                        value={formData.resumeLink}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                        placeholder="Drive/Dropbox link to your resume"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Why do you want to be a mentor?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all resize-none"
                        placeholder="Tell us why you'd make a great mentor..."
                      ></textarea>
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors ${
                          isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                        }`}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                      </button>
                    </div>

                    {submitStatus === "success" && (
                      <div className="rounded-lg bg-green-50 p-4 text-sm text-green-800">
                        Application submitted successfully! We'll get back to you soon.
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="rounded-lg bg-red-50 p-4 text-sm text-red-800">
                        There was an error submitting your application. Please try again.
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorApply;
