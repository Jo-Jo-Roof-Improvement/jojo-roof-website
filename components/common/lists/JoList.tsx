export interface JoListProps extends React.HTMLProps<HTMLUListElement> {
    children?: React.ReactNode;
    paddingLeft?: string;
    paddingBottom?: string;
}

export const JoList = ({ children, paddingLeft = '1.5rem', paddingBottom = '1.5rem', ...rest }: JoListProps) => {
    return (
        <ul style={{ paddingLeft, paddingBottom }} {...rest}>
            {children}
        </ul>
    );
};
