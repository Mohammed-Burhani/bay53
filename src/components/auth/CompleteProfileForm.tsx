"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Building2, MapPin, Phone, Upload, ChevronLeft, ChevronRight, Check } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

interface ProfileFormData {
  companyName: string;
  country: string;
  address: string;
  phone: string;
  contactPerson: string;
  gstNumber: string;
  state: string;
  pinCode: string;
  currency: string;
  logo?: FileList;
  natureOfBusiness: string;
}

const NATURE_OF_BUSINESS = [
  "Retail",
  "Wholesale",
  "Distribution",
  "Trading",
  "Manufacturing",
  "Fabrication",
];

const CURRENCIES = [
  { code: "INR", symbol: "₹", name: "Indian Rupee" },
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "AED", symbol: "د.إ", name: "UAE Dirham" },
];

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

export default function CompleteProfileForm() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
  } = useForm<ProfileFormData>({
    defaultValues: {
      currency: "INR",
      country: "India",
    },
  });

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast.error("File too large", {
          description: "Logo must be less than 2MB",
        });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const nextStep = async () => {
    const fieldsToValidate: (keyof ProfileFormData)[] = [
      "companyName", "country", "address", "phone", "contactPerson"
    ];

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep(2);
    }
  };

  const prevStep = () => {
    setStep(1);
  };

  const onSubmit = async (data: ProfileFormData) => {
    setIsSubmitting(true);
    try {
      console.log("Profile data:", data);
      // Handle form submission - send to API
      toast.success("Profile completed successfully!", {
        description: "Welcome to BAY53 ERP",
      });
      router.push("/dashboard");
    } catch (error) {
      toast.error("Failed to complete profile", {
        description: "Please try again",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Brand & Progress */}
      <div className="hidden lg:flex lg:w-[45%] relative overflow-hidden bg-gradient-to-br from-orange-50 via-teal-50 to-blue-50 border-r-2 border-gray-200">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-30 blur-3xl animate-float"
            style={{ background: "radial-gradient(circle, var(--bay-coral) 0%, transparent 70%)" }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-30 blur-3xl animate-float-delayed"
            style={{ background: "radial-gradient(circle, var(--bay-teal) 0%, transparent 70%)" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          {/* Logo */}
          <div className="space-y-2">
            <Image 
              src="/logo.png" 
              alt="BAY53 Logo" 
              width={200} 
              height={100}
              className="w-48 h-auto drop-shadow-lg"
            />
          </div>

          {/* Progress Steps */}
          <div className="space-y-6 max-w-lg">
            <h2 className="text-2xl font-bold text-gray-900">Complete Your Profile</h2>
            <div className="space-y-4">
              {[
                { num: 1, title: "Company Information", desc: "Basic details about your business" },
                { num: 2, title: "Business Details", desc: "GST, location, and business type" },
              ].map((item) => (
                <div 
                  key={item.num}
                  className={`flex items-start gap-4 p-4 rounded-xl border transition-all duration-200 ${
                    step === item.num
                      ? "bg-white shadow-md border-gray-300"
                      : step > item.num
                      ? "bg-white/60 border-gray-200"
                      : "bg-white/40 border-gray-200/50"
                  }`}
                >
                  <div 
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                      step > item.num
                        ? "bg-gradient-to-br from-green-400 to-green-600 text-white"
                        : step === item.num
                        ? "text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                    style={step === item.num ? { 
                      background: "linear-gradient(135deg, var(--bay-coral), var(--bay-teal), var(--bay-violet))" 
                    } : undefined}
                  >
                    {step > item.num ? <Check className="w-4 h-4" /> : item.num}
                  </div>
                  <div>
                    <h3 className={`font-semibold text-sm ${step >= item.num ? "text-gray-900" : "text-gray-500"}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm mt-0.5 ${step >= item.num ? "text-gray-600" : "text-gray-400"}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tagline */}
          <div className="text-gray-600 text-sm font-medium">
            Your business, fully connected.
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-[55%] flex items-center justify-center p-6 bg-white overflow-y-auto">
        <div className="w-full max-w-2xl space-y-6 py-8">
          {/* Mobile Logo */}
          <div className="lg:hidden flex justify-center mb-6">
            <Image 
              src="/logo.png" 
              alt="BAY53 Logo" 
              width={150} 
              height={75}
              className="w-36 h-auto"
            />
          </div>

          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-gray-900">Complete Your Profile</h1>
            <p className="text-sm text-gray-600">Step {step} of 2 - {
              step === 1 ? "Company Information" : "Business Details"
            }</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Step 1: Company Information */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Company Name */}
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="companyName" className="text-gray-700 font-medium flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      Company Name *
                    </Label>
                    <Input
                      id="companyName"
                      placeholder="Enter company name"
                      className="h-11 rounded-xl"
                      {...register("companyName", { required: "Company name is required" })}
                    />
                    {errors.companyName && (
                      <p className="text-sm text-red-600">{errors.companyName.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700 font-medium flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="h-11 rounded-xl"
                      {...register("phone", { required: "Phone number is required" })}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Contact Person */}
                  <div className="space-y-2">
                    <Label htmlFor="contactPerson" className="text-gray-700 font-medium">
                      Contact Person *
                    </Label>
                    <Input
                      id="contactPerson"
                      placeholder="Full name"
                      className="h-11 rounded-xl"
                      {...register("contactPerson", { required: "Contact person is required" })}
                    />
                    {errors.contactPerson && (
                      <p className="text-sm text-red-600">{errors.contactPerson.message}</p>
                    )}
                  </div>

                  {/* Country */}
                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-gray-700 font-medium flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Country *
                    </Label>
                    <Input
                      id="country"
                      placeholder="Country"
                      className="h-11 rounded-xl"
                      {...register("country", { required: "Country is required" })}
                    />
                    {errors.country && (
                      <p className="text-sm text-red-600">{errors.country.message}</p>
                    )}
                  </div>

                  {/* Address */}
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="address" className="text-gray-700 font-medium">
                      Address *
                    </Label>
                    <Input
                      id="address"
                      placeholder="Complete address"
                      className="h-11 rounded-xl"
                      {...register("address", { required: "Address is required" })}
                    />
                    {errors.address && (
                      <p className="text-sm text-red-600">{errors.address.message}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Business Details */}
            {step === 2 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* GST Number */}
                  <div className="space-y-2">
                    <Label htmlFor="gstNumber" className="text-gray-700 font-medium">
                      GST Number *
                    </Label>
                    <Input
                      id="gstNumber"
                      placeholder="22AAAAA0000A1Z5"
                      className="h-11 rounded-xl uppercase"
                      {...register("gstNumber", { 
                        required: "GST number is required",
                        pattern: {
                          value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
                          message: "Invalid GST number format"
                        }
                      })}
                    />
                    {errors.gstNumber && (
                      <p className="text-sm text-red-600">{errors.gstNumber.message}</p>
                    )}
                  </div>

                  {/* State */}
                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-gray-700 font-medium">
                      State *
                    </Label>
                    <Select onValueChange={(value) => setValue("state", value)}>
                      <SelectTrigger className="h-11 rounded-xl">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        {INDIAN_STATES.map((state) => (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.state && (
                      <p className="text-sm text-red-600">{errors.state.message}</p>
                    )}
                  </div>

                  {/* Pin Code */}
                  <div className="space-y-2">
                    <Label htmlFor="pinCode" className="text-gray-700 font-medium">
                      Pin Code *
                    </Label>
                    <Input
                      id="pinCode"
                      placeholder="400001"
                      maxLength={6}
                      className="h-11 rounded-xl"
                      {...register("pinCode", { 
                        required: "Pin code is required",
                        pattern: {
                          value: /^[0-9]{6}$/,
                          message: "Invalid pin code"
                        }
                      })}
                    />
                    {errors.pinCode && (
                      <p className="text-sm text-red-600">{errors.pinCode.message}</p>
                    )}
                  </div>

                  {/* Currency */}
                  <div className="space-y-2">
                    <Label htmlFor="currency" className="text-gray-700 font-medium">
                      Currency *
                    </Label>
                    <Select defaultValue="INR" onValueChange={(value) => setValue("currency", value)}>
                      <SelectTrigger className="h-11 rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {CURRENCIES.map((curr) => (
                          <SelectItem key={curr.code} value={curr.code}>
                            {curr.symbol} {curr.code} - {curr.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Nature of Business */}
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="natureOfBusiness" className="text-gray-700 font-medium">
                      Nature of Business *
                    </Label>
                    <Select onValueChange={(value) => setValue("natureOfBusiness", value)}>
                      <SelectTrigger className="h-11 rounded-xl">
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        {NATURE_OF_BUSINESS.map((nature) => (
                          <SelectItem key={nature} value={nature}>
                            {nature}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.natureOfBusiness && (
                      <p className="text-sm text-red-600">{errors.natureOfBusiness.message}</p>
                    )}
                  </div>

                  {/* Logo Upload */}
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="logo" className="text-gray-700 font-medium flex items-center gap-2">
                      <Upload className="w-4 h-4" />
                      Company Logo (Optional)
                    </Label>
                    <div className="flex items-center gap-4">
                      {logoPreview && (
                        <div className="w-20 h-20 rounded-xl border-2 border-gray-200 overflow-hidden">
                          <img src={logoPreview} alt="Logo preview" className="w-full h-full object-cover" />
                        </div>
                      )}
                      <Input
                        id="logo"
                        type="file"
                        accept="image/*"
                        className="h-11 rounded-xl"
                        {...register("logo")}
                        onChange={handleLogoChange}
                      />
                    </div>
                    <p className="text-xs text-gray-500">Max size: 2MB. Formats: JPG, PNG, SVG</p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-3 pt-4">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  className="flex-1 h-11 rounded-xl border-gray-300"
                  disabled={isSubmitting}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
              )}
              
              {step < 2 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 h-11 rounded-xl text-white"
                  style={{ 
                    background: "linear-gradient(135deg, var(--bay-coral), var(--bay-teal), var(--bay-violet))" 
                  }}
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 h-11 rounded-xl text-white"
                  style={{ 
                    background: "linear-gradient(135deg, var(--bay-coral), var(--bay-teal), var(--bay-violet))" 
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Completing...
                    </>
                  ) : (
                    "Complete Profile"
                  )}
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
