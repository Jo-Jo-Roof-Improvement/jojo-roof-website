

interface SocialMediaSectionProps {
    children?: React.ReactNode;
}
export const SocialMediaSection = ({ children }: SocialMediaSectionProps) => {
    return <div className="w-full mt-5 mb-5 ml-4 mr-4 flex flex-col items-middled">{children}</div>;
};
