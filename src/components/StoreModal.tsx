"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useStoreModal } from "@/stores/useStoreModal";
import { motion } from "framer-motion";
import Image from "next/image";

const StoreModal = () => {
  const { open, selectedStore, close } = useStoreModal();

  if (!selectedStore) return null;

  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent className="bg-white p-0 sm:max-w-[900px]">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex flex-col md:flex-row h-full">
            {/* 이미지 영역 */}
            <div className="relative w-full md:w-1/2 h-[200px] md:h-auto">
              <Image
                src={selectedStore.image}
                alt={selectedStore.name}
                fill
                className="object-cover w-full h-full"
              />
            </div>

            {/* 텍스트 영역 */}
            <div
              className="w-full md:w-1/2 p-6 space-y-4"
              style={{
                padding: "12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <h2
                className="text-3xl font-extrabold font-pretendard text-black"
                style={{ fontSize: "32px", fontFamily: "pretendard" }}
              >
                {selectedStore.name}
              </h2>
              <p
                className="text-sm text-gray-800 whitespace-pre-line leading-relaxed"
                style={{ fontFamily: "pretendard", marginTop: "6px" }}
              >
                {selectedStore.description}
              </p>

              {selectedStore.url && (
                <a
                  href={selectedStore.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#707070",
                    fontFamily: "pretendard",
                    fontWeight: "600",
                  }}
                >
                  홈페이지 바로가기
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default StoreModal;
