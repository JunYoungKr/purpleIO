import { Store } from "@/types";
import { useStoreModal } from "@/stores/useStoreModal";
import Image from "next/image";

interface Props {
  stores: Store[];
}

const StoreList = ({ stores }: Props) => {
  const { setStore } = useStoreModal(); // 모달용 store 상태 설정 함수

  return (
    <div
      // 외부 padding은 인라인 스타일, 내부 여백 및 반응형 그리드는 Tailwind로 구성
      style={{ padding: "80px 24px" }}
      className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white p-6 justify-items-center"
    >
      {stores.map((store) => (
        <div key={store.id}>
          <Image
            // 이미지에 마우스 오버 시 확대 효과
            className="rounded-md h-auto object-cover cursor-pointer transform transition duration-300 hover:scale-115"
            // 이미지 클릭 시 해당 store 데이터를 전역 상태로 설정
            onClick={() => setStore(store)}
            src={store.image} // 이미지 경로
            alt={store.name} // 접근성을 위한 대체 텍스트
            width={200} // 고정 너비
            height={200} // 고정 높이
          />
        </div>
      ))}
    </div>
  );
};

export default StoreList;
