import Content from "./components/content";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";

export default function Main() {
  return (
    <main className="lg:grid lg:grid-cols-12 md:px-48 md:my-24 w-screen h-screen">
      <div className="lg:col-span-6 flex p-0 m-0">
        <Sidebar />
      </div>
      <div className="col-span-6">
        <Content />
        <Footer />
      </div>
    </main>
  );
}
