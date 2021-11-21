export interface StripProps {
    children: React.ReactNode;
}

const Strip = ({ children }: StripProps) => {
    return <div className=".test-style">{children}</div>;
};

export default Strip;
