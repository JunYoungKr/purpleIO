import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const NotFoundPage = () => {
  const router = useRouter();

  // ⏱ 카운트다운 상태 (초기값 5초)
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // 매초마다 countdown 값을 1씩 감소
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // 5초 후 메인 페이지로 이동
    const timeout = setTimeout(() => {
      router.push("/");
    }, 5000);

    // 언마운트 시 타이머 정리
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [router]);

  return (
    <main className="flex flex-col justify-center items-center min-h-screen gap-10">
      {/* 404 에러 메시지 */}
      <h1 className="text-4xl font-bold mb-4">
        404 - 페이지를 찾을 수 없습니다
      </h1>

      {/* 실시간 카운트다운 표시 */}
      <p>
        <span style={{ fontSize: "32px" }}>{countdown}초</span> 후 메인 페이지로
        이동합니다.
      </p>
    </main>
  );
};

export default NotFoundPage;
