import Banner from "@/components/Banner";

const bannerMessages = [
    {
      type: "Notice",
        message: "Welcome and thank you for learning more about me!",
    }
];

export default function About() {
    return (
        <main className="bg-white text-black p-8">
            {bannerMessages.map((banner) => (
                <Banner key={banner.type} type={banner.type} message={banner.message} />
            ))}
            <h2 className="text-2xl font-bold">About Me</h2>
            <p className="text-gray-600">A page to learn more about me and my work.</p>
        </main>
    );
}