import { Store } from "@/types";
import { useStoreModal } from "@/stores/useStoreModal";
import Image from "next/image";

interface Props {
  stores: Store[];
}

const StoreList = ({ stores }: Props) => {
  const { setStore } = useStoreModal();

  return (
    <div
      style={{ padding: "80px 24px" }}
      className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white p-6 justify-items-center"
    >
      {stores.map((store) => (
        <div key={store.id}>
          <Image
            className="rounded-md h-auto object-cover cursor-pointer transform transition duration-300 hover:scale-115"
            onClick={() => setStore(store)}
            src={store.image}
            alt={store.name}
            width={200}
            height={200}
          />
        </div>
      ))}
    </div>
  );
};

export default StoreList;
