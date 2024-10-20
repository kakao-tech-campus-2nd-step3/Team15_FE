import styled from '@emotion/styled';


type Props = {
  theme?: 'nomal'|'outline'|'black'|'lightgray';
  size?: 'small'|'medium'|'large';
}&React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({ ...props }: Props) => {
  return <Container {...props} />;
};

const Container = styled.button<Pick<Props, 'theme' | 'size'>>(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background-color 200ms',
    padding: '0 16px', 
    width: 'auto',
    margin: '10px'
  },
  ({size = 'medium'}) =>{
    if (size === 'small'){
      return {
        borderRadius: '10px',
        height: '20px',
        fontSize: '10px',
      }
    }
    if (size === 'large'){
      return {
        borderRadius: '20px',
        height: '45px',
        fontSize: '30px',
      }
    }
    return {
      borderRadius: '15px',
      height: '25px',
      fontSize: '15px',
    }
  },

  ({theme = 'normal'}) =>{

    if (theme === 'black') {
      return {
        color: '#fff',
        backgroundColor: '#111',

        '&:hover': {
          backgroundColor: '#222',
        },
      };
    }
    if (theme === 'outline'){
        return {
        boxShadow: '0 0 0 1px #ccc inset',
        color: '#111',

        '&:hover': {
          backgroundColor: '#f8f8f8',
        },
      };
    }
    if (theme === 'lightgray'){
      return {
      backgroundColor: '#f0f0f0',
      color: '#111',

      '&:hover': {
        backgroundColor: '#f8f8f8',
      },
    };
  }

    return{
      color: '#111',
    }
}

);