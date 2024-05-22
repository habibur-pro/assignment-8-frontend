import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function HomeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar />
      <div className="mt-16 ">{children}</div>
      <Footer />
    </section>
  );
}
