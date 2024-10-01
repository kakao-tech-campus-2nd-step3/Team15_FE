import styled from "@emotion/styled";

type Props = {
    columns: number;
    gap?: number;
} & React.HTMLAttributes<HTMLDivElement>

const CommonGrid: React.FC<Props> = ({ children, columns, ...props }: Props ) => {
    return(
        <Wrapper columns={columns} {...props}>
        {children}
    </Wrapper>
    )
}

const Wrapper = styled.div<Pick<Props, 'columns' | 'gap'>>(
    {
        width: '100%',
        display: 'grid',
    },
    ({ gap }) => ({
        gap: gap ? `${gap}px` : '0',
    }),
    ({ columns }) => {
        if (typeof columns === 'number') {
        return {
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
        };
    }
    },
);

export default CommonGrid;