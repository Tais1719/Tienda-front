import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast,} from 'react-toastify'
import { api } from "../../services/api";
import { useUser } from "../../hooks/UserContent";

import { Button } from "../../Button";

import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
  Link,
  

} from "./styles";

export function Login() {

  const navigate = useNavigate()
  const {putUserData} = useUser()

  // Esquema de validação com Yup
  const schema = yup.object({
    email: yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatório"),
    password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Digite uma senha"),
  })
  .required();

  // Configuração do React Hook Form com Yup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
        const { data: userData } = await toast.promise(
      api.post('/session', { 
        email: data.email,
        password: data.password,
      
      }),
      { 
        pending: 'Verificando seus dados',

        success: {
          render(){
            setTimeout(()=>{ 
               if(userData?.admin){ 
                navigate('/admin/pedidos')
              }else{ 
                navigate('/')
                
               }
               
              }, 2000)
            return  'seja Bem-vindo(a)👌'
          },
        },

      error: 'Email ou senha Incorretos🤯',
      }

    )
    
    
     putUserData(userData)
      
   
     //localStorage.setItem('token', userData.token)
     
  }

  return (
    <Container>
      <LeftContainer>
        
      </LeftContainer>

      <RightContainer>
        <Title>
          Olá, seja bem-vindo ao <span>Origen</span>  Fashion!
          <br />
          Acesse com<span> seu login e senha.</span>
        </Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register("email")} />
            {errors.email && <p>{errors.email.message}</p>}
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register("password")} />
            {errors.password && <p>{errors.password.message}</p>}
          </InputContainer>

          <Button type="submit">Entrar</Button>
        </Form>
        <p>
          Não tem conta? <Link to= '/cadastro'>Clique aqui</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
