import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="text-center mt-20">
      <h1 className="text-4xl font-bold mb-4">
        404 - 페이지를 찾을 수 없습니다
      </h1>
      <p>5초 후 메인 페이지로 이동합니다.</p>
    </main>
  );
};

export default NotFoundPage;
