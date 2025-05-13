import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">About This Project</h1>
        <p className="text-gray-700">
          이 프로젝트는 맛집 정보를 정리해서 보여주는 간단한 예제입니다.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
