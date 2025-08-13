import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Image } from "@phosphor-icons/react";
import * as yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Form, InputGroup, Label, Input, LabelUpload, Select, SubmitButton, ErrorMessage, Containercheckbox,DeletarButton} from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

// Validação do formulário
const schema = yup.object({
  name: yup.string().required('Digite o Nome do Produto'),
  price: yup.number().positive().required('Digite o preço do produto').typeError('Digite o preço do produto'),
  category: yup.object().required('Escolha uma Categoria'),
  offer: yup.bool(),
});

export function EditProduct() { 
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);  // Estado para mostrar o modal de confirmação
  const navigate = useNavigate();
  const { state: { product } } = useLocation();

  useEffect(() => {
    async function loadCategories(){
      const { data } = await api.get('/categories');
      setCategories(data);
    }
    loadCategories();
  }, []);

  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const productFormData = new FormData();

    productFormData.append('name', data.name);
    productFormData.append('price', data.price * 100);  // Multiplicado por 100 porque o backend pode estar esperando em centavos.
    productFormData.append('category_id', data.category.id);
    productFormData.append('file', data.file[0]);
    productFormData.append('offer', data.offer);

    await toast.promise(api.put(`/products/${product.id}`, productFormData), {
      pending: 'Editando o Produto...',
      success: 'Produto editado com sucesso!',
      error: 'Falha ao editar o produto, tente novamente',
    });
    
    setTimeout(() => {
      navigate('/admin/produtos');
    }, 3000);
  };

  // Função para lidar com a exclusão do produto
  const handleDelete = async () => {
    try {
      await toast.promise(api.delete(`/products/${product.id}`), {
        pending: 'Excluindo o Produto...',
        success: 'Produto excluído com sucesso!',
        error: 'Falha ao excluir o produto, tente novamente',
      });
      navigate('/admin/produtos');
    } catch (error) {
      console.error('Erro ao excluir o produto:', error);
      toast.error('Erro ao excluir o produto!');
    }
  };

  return (
    <Container>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register("name")}
            defaultValue={product.name}
          />
          <ErrorMessage>{errors?.name?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>Preço</Label>
          <Input
            type="number"
            {...register("price")}
            defaultValue={product.price / 100}
          />
          <ErrorMessage>{errors?.price?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <LabelUpload>
            <Image />
            <input
              type="file"
              {...register("file")}
              accept="image/png, image/jpeg"
              onChange={(value) => {
                setFileName(value.target.files[0]?.name);
                register('file').onChange(value);
              }}
            />
            {fileName || "Upload do Produto"}
          </LabelUpload>
          <ErrorMessage>{errors?.file?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>Categoria</Label>
          <Controller
            name="category"
            control={control}
            defaultValue={product.category}
            render={({ field }) => (
              <Select
                {...field}
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                placeholder="Categorias"
                menuPortalTarget={document.body}
                defaultValue={product.category}
              />
            )}
          />
          <ErrorMessage>{errors?.category?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Containercheckbox>
            <input
              type="checkbox"
              defaultChecked={product.offer}
              {...register("offer")}
            />
            <Label>Produto em Oferta</Label>
          </Containercheckbox>
        </InputGroup>

        <SubmitButton>Editar Produto</SubmitButton>
        <DeletarButton type="button" onClick={() => setShowModal(true)}>
          Deletar Produto
        </DeletarButton>
        
      </Form>

     
      

      {/* Modal de Confirmação */}
      {showModal && (
        <div 
          style={{
            position: 'fixed',
            top: '0', left: '0', right: '0', bottom: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
          }}
        >
          <div 
            style={{ 
              padding: '20px',
              borderRadius: '5px',
              width: '300px',
              textAlign: 'center',
            }}
          >
            <h3>Tem certeza que deseja excluir este produto?</h3>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <button 
                onClick={handleDelete}
                style={{
                  backgroundColor: 'green',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Sim
              </button>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  backgroundColor: 'red',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              
              >
           nao
              </button>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
