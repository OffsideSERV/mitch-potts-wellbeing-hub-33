
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Users, Activity, Brain, Baby, Shield } from "lucide-react";

const WindsorNaturopathy = () => {
  return (
    <>
      <SEO 
        title="Best Naturopath Windsor | Book a Free 15-Min Consult!"
        description="Not feeling like yourself and not getting answers? Mitchell is a 5-star Naturopath in Windsor that will find and heal the root cause of your problems."
        canonical="/areas-we-serve/naturopath-windsor"
        keywords="naturopath Windsor, Windsor naturopathy, natural health Windsor, holistic health Windsor Brisbane"
      />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Naturopath <span className="text-primary">Windsor</span> | Natural Health Support Just Minutes from You
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img 
                    alt="Naturopath consultation at NXTLVL Health near Windsor" 
                    className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                    src="/lovable-uploads/26dd53ed-236e-42a2-a95c-c505572e08b2.png" 
                  />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Heart className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Natural Health Care</p>
                        <p className="text-xs text-muted-foreground">Windsor • Naturopathy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  className="text-base sm:text-lg px-4 py-3 h-auto whitespace-normal leading-tight"
                >
                  <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                    <svg className="mr-2 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-center">Book a Free 15-Min Consult!</span>
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  asChild 
                  className="text-base sm:text-lg px-4 py-3 h-auto"
                >
                  <a href="tel:0731808853">
                    <svg className="mr-2 h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    Call Mitch
                  </a>
                </Button>
              </div>

              {/* Google 5 Star Badge */}
              <div className="mt-6">
                <script defer async src='https://cdn.trustindex.io/loader.js?46476cb4757e774210564760f2f'></script>
              </div>
            </div>
            
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                alt="Naturopath consultation at NXTLVL Health near Windsor" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                src="/lovable-uploads/26dd53ed-236e-42a2-a95c-c505572e08b2.png" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Heart className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Natural Health Care</p>
                    <p className="text-sm text-muted-foreground">Windsor • Naturopathy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking for a Naturopath Near Windsor Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Looking for a Naturopath Near Windsor?</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/c8bb9855-7c0b-45b1-8e50-ae2da28905ea.png" 
              alt="Woman talking to a naturopath near Windsor at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  If you're living in Windsor and looking for a <strong>caring, experienced naturopath</strong>, NXTLVL Health is only a short drive away. While we are not located directly in Windsor, we proudly support many clients from the area who want a <strong>natural approach to their health</strong>. We're close, convenient, and passionate about helping you feel better.
                </p>
                <p>
                  Whether you're struggling with <strong>stress, low energy, anxiety, or chronic pain</strong>, our team is here to help guide you back to wellness through personalised natural therapies and expert support.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/c8bb9855-7c0b-45b1-8e50-ae2da28905ea.png" 
                alt="Woman talking to a naturopath near Windsor at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Natural Treatments That Work Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Natural Treatments That Work With Your Body</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/9e5ed0a0-bb35-4fde-9965-94edcb9294a8.png" 
              alt="Naturopath providing natural treatments near Windsor" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  At NXTLVL Health, we focus on <strong>understanding the root cause</strong> of your symptoms. We take the time to listen to your story so we can create a treatment plan that fits your life and your health goals.
                </p>
                <p>
                  Using <strong>naturopathy, herbal medicine, nutritional supplementation</strong>, and evidence-based wellness practices, we help support your body's natural healing abilities. Every person is unique, so every treatment plan is too.
                </p>
                <p>
                  We also support your <strong>diet, stress levels, and lifestyle choices</strong> to help you feel better every day.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/9e5ed0a0-bb35-4fde-9965-94edcb9294a8.png" 
                alt="Naturopath providing natural treatments near Windsor" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult!
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Windsor Locals Choose NXTLVL Health Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Windsor Locals Choose NXTLVL Health</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              Many of our patients from Windsor come to us looking for:
            </p>
          </div>

          <div className="mb-12">
            <img 
              src="/lovable-uploads/507d386f-e7d8-4e14-a144-56b40f6d528f.png" 
              alt="NXTLVL Health clinic welcoming Windsor patients" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Natural support for anxiety, fatigue, and illness",
              "A clinic that takes time to listen and understand",
              "Practical lifestyle changes that work in real life",
              "A personalised treatment plan, not a one-size-fits-all answer",
              "Help with chronic conditions, ongoing stress, or pain"
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              We welcome people of all ages and backgrounds, and we're proud to support the Windsor community on their wellness journey.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult!
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Common Concerns We Support Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Common Concerns We Support</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              Whether you're dealing with a health condition or just not feeling your best, our naturopathic services are here to support you. Some of the most common concerns we help with include:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Activity className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Digestive Issues</h3>
                <p className="text-sm text-muted-foreground">
                  bloating, <a href="https://www.healthdirect.gov.au/irritable-bowel-syndrome-ibs" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">IBS</a>, reflux
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Anxiety and Low Mood</h3>
                <p className="text-sm text-muted-foreground">stress management, emotional balance</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Hormonal Imbalances</h3>
                <p className="text-sm text-muted-foreground">hormonal regulation, women's health</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Fatigue and Low Energy</h3>
                <p className="text-sm text-muted-foreground">energy restoration, vitality</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Immune Weakness</h3>
                <p className="text-sm text-muted-foreground">frequent illness, immune support</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Baby className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">General Wellness</h3>
                <p className="text-sm text-muted-foreground">preventative care, overall health</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              <strong>Naturopathy can help address various health conditions</strong>, including digestive complaints, hormonal imbalances, and stress, by focusing on the root causes and promoting holistic healing.
            </p>
          </div>
        </div>
      </section>

      {/* A Holistic Approach to Healing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">A Holistic Approach to Healing</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/aa4b685d-0956-463f-ad98-180c34dbdb0d.png" 
              alt="Holistic healing approach at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  <strong>Naturopathy is all about treating the whole person</strong>—not just the symptoms. At NXTLVL Health, we use a combination of natural therapies designed to restore balance, reduce stress, and promote lasting wellness. This approach recognizes that <strong>the body has the capacity for self-regulation</strong>, which is central to achieving optimal health.
                </p>
                <p>Some of our therapies include:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Herbal medicine</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Nutritional supplementation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Lifestyle coaching and stress management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Functional testing and health assessments</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Dietary support and education</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/aa4b685d-0956-463f-ad98-180c34dbdb0d.png" 
                alt="Holistic healing approach at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              <strong>Functional testing can include gut indicans testing, heavy metal testing, pH analysis, and body composition analysis</strong>, providing valuable insights for personalized care.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult!
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Traditional Approaches Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Traditional Approaches, Backed by Modern Knowledge</h2>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/0aadec6a-7f1f-4a21-854c-39d8c3a218d0.png" 
              alt="Traditional and modern naturopathy approaches at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              While our clinic focuses on <strong>evidence-based natural medicine</strong>, we also draw inspiration from traditional systems like <strong>Traditional Chinese Medicine (TCM)</strong>. These practices have been used for centuries to support body balance and vitality.
            </p>
            <p>
              Although we don't offer acupuncture in our clinic, we understand and respect its role in wellness, and we're happy to work collaboratively with other healthcare providers.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult!
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Tailored Wellness Plans Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Tailored Wellness Plans to Fit Your Life</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/778efa12-2a50-4463-9137-b9811fb860b1.png" 
              alt="Tailored wellness plans at NXTLVL Health for Windsor patients" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  At NXTLVL Health, we understand that <strong>real healing happens when you feel supported</strong>. That's why every treatment plan we create is built around you. We consider your symptoms, lifestyle, medical history, and personal goals to craft a plan that makes sense and feels doable. <strong>Naturopathy also aims to educate and empower clients</strong> to take charge of their health, ensuring they feel confident in their wellness journey.
                </p>
                <p>This may include:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Herbal support to treat symptoms like pain, stress, or sleep issues</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Diet and lifestyle advice to support energy and digestion</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Nutritional supplementation to fill in any gaps</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Functional testing to better understand what's going on inside your body</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/778efa12-2a50-4463-9137-b9811fb860b1.png" 
                alt="Tailored wellness plans at NXTLVL Health for Windsor patients" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Your Mental Health Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Supporting Your Mental Health Naturally</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/b156db4f-02ff-40d6-948b-3ea5abb31621.png" 
              alt="Mental health support for Windsor patients at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  <strong>Stress and anxiety are two of the most common issues</strong> we see in our practice. They don't just affect the mind—they also impact your body, your energy, and your overall health.
                </p>
                <p>
                  We support Windsor patients with gentle, effective strategies that help restore emotional balance. This may include:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Herbal remedies for calming the nervous system</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Lifestyle strategies to reduce mental load</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Dietary changes that benefit mood and energy</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/b156db4f-02ff-40d6-948b-3ea5abb31621.png" 
                alt="Mental health support for Windsor patients at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult!
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Supporting Through Every Stage Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Supporting You Through Every Stage of Life</h2>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/6d0b6778-ba4b-478d-9180-3b79fe27577c.png" 
              alt="Life stage support at NXTLVL Health for Windsor patients" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              From <strong>busy professionals to parents and retirees</strong>, we support patients through every chapter of life. Whether you're managing a health condition, dealing with stress, or looking to feel your best again—we're here for you.
            </p>
            <p>
              If you're preparing for a big life event, dealing with work stress, or just feeling "off," <strong>a naturopath can help you get back on track</strong> with personalised care.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult!
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Meet Mitch Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Meet Mitch – Your Naturopath Near Windsor</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/98dc86b9-d19c-4674-90b5-465183ac0c06.png" 
              alt="Mitch Potts - Naturopath serving Windsor area" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  <strong>Mitch leads the clinic with a calm, grounded approach</strong> to health. With years of experience in naturopathic medicine and a passion for whole-body wellness, Mitch takes time to truly understand what's going on beneath the surface.
                </p>
                <p>
                  His <strong>warm, practical guidance</strong> helps patients feel safe, informed, and empowered to take back control of their health.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/98dc86b9-d19c-4674-90b5-465183ac0c06.png" 
                alt="Mitch Potts - Naturopath serving Windsor area" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Feel Better Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Feel Better?</h2>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/7bb7f8b7-68b3-4f02-9a8a-a38103492671.png" 
              alt="Ready to feel better with NXTLVL Health near Windsor" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              If you've been searching for a <strong>naturopath Windsor locals trust</strong>, NXTLVL Health is here to help. We're close by, easy to reach, and passionate about your health and wellbeing.
            </p>
            <p>
              Whether you're dealing with a specific illness or simply want to feel more balanced, we'll help you move forward with clarity, confidence, and support. <strong>Wellness allows for better function physically, mentally, and emotionally</strong>, enabling you to live a more fulfilling life.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Book Your First Appointment Today</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                <strong>Take the first step toward better health</strong> and book your consultation today. You deserve to feel good—in your body, your mind, and your life.
              </p>
              <p>
                We look forward to supporting you on your healing journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="text-base sm:text-lg px-6 py-4">
                <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Book a Free 15-Min Consult!
                </a>
              </Button>
              <Button variant="outline" asChild className="text-base sm:text-lg px-6 py-4">
                <a href="tel:0731808853">
                  <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  Call Mitch Today
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default WindsorNaturopathy;
