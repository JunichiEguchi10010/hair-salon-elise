import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ConceptSection from "@/components/ConceptSection";
import MenuSection from "@/components/MenuSection";
import StaffSection from "@/components/StaffSection";
import ReservationFlowSection from "@/components/ReservationFlowSection";
import FAQSection from "@/components/FAQSection";
import AccessSection from "@/components/AccessSection";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ConceptSection />
        <MenuSection />
        <StaffSection />
        <ReservationFlowSection />
        <FAQSection />
        <AccessSection />
        <InstagramSection />
      </main>
      <Footer />
    </>
  );
}
