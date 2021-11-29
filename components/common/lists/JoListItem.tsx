export const JoListItem = ({ children, color = "black" }: { color?: string; children: React.ReactNode }) => {
    return <li style={{ color,   listStyleType: '- ' }}>{children}</li>;
};
