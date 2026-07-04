//Banner message component

interface BannerProps {
    type: string;
    message: string;
}

export default function Banner({ type, message }: BannerProps) {
    return (
        <div className="bg-blue-500 text-white p-4 text-center">
            <p className="text-lg font-semibold">{message}</p>
        </div>      
    );
}