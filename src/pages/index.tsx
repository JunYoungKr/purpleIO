import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoreList from "@/components/StoreList";
import StoreModal from "@/components/StoreModal";
import { Store } from "@/types";
import { getStores } from "@/lib/api";

const Home = () => {
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    getStores().then(setStores);
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <StoreList stores={stores} />
        <StoreModal />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
