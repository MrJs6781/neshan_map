import { Header } from "@/components/Header";
import { MapInfoIndex } from "@/components/mapInfo/Index";

export default function page() {
  return (
    <main className="w-full flex flex-col items-end min-h-screen">
      <Header />
      <div
        className="w-full flex justify-center items-start pt-20 gap-6"
        style={{ direction: "rtl" }}
      >
        <MapInfoIndex />
      </div>
    </main>
  );
}
