import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Image } from "@phosphor-icons/react";
import * as yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import Select from "react-select";
import {
  Container,
  Form,
  InputGroup,
  Label,
  Input,
  LabelUpload,
  SubmitButton,
  ErrorMessage,
  Containercheckbox,
  DeletarButton
} from "./styles";

// Opções em espanhol
const SIZE_OPTIONS = [
  { label: "s", value: "Pequeño" },
  { label: "M", value: "Mediano" },
  { label: "L", value: "Grande" },
  { label: "xl", value: "Extra Gande" }
];

const COLOR_OPTIONS = [
  { label: "Blanco", value: "white" },
  { label: "Negro", value: "black" },
  { label: "Azul", value: "blue" },
  { label: "Rojo", value: "red" },
  { label: "Verde", value: "green" }
];

// Schema de validação
const schema = yup.object({
  name: yup.string().required("Digite o nome do produto"),
  price: yup.number().positive().required("Digite o preço do produto"),
  category: yup.object().required("Escolha uma Categoria"),
  offer: yup.bool(),
  sizes: yup.array().of(yup.object()).min(1, "Selecione pelo menos um tamanho"),
  colors: yup.array().of(yup.object()).min(1, "Selecione pelo menos uma cor"),
  description: yup.string(),
});

export function EditProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { state: { product } } = useLocation();

  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("/categories");
      setCategories(data);
    }
    loadCategories();
  }, []);

  const onSubmit = async (data) => {
    const productFormData = new FormData();
    productFormData.append("name", data.name);
    productFormData.append("price", data.price * 100); // backend espera centavos
    productFormData.append("category_id", data.category.id);
    productFormData.append("offer", data.offer);
    productFormData.append("description", data.description);
    productFormData.append("sizes", JSON.stringify(data.sizes.map(s => s.value)));
    productFormData.append("colors", JSON.stringify(data.colors.map(c => c.value)));
    productFormData.append("file", data.file[0]);

    await toast.promise(api.put(`/products/${product.id}`, productFormData), {
      pending: "Editando o Produto...",
      success: "Produto editado com sucesso!",
      error: "Falha ao editar o produto, tente novamente",
    });

    setTimeout(() => {
      navigate("/admin/produtos");
    }, 2000);
  };

  const handleDelete = async () => {
    try {
      await toast.promise(api.delete(`/products/${product.id}`), {
        pending: "Excluindo o Produto...",
        success: "Produto excluído com sucesso!",
        error: "Falha ao excluir o produto, tente novamente",
      });
      navigate("/admin/produtos");
    } catch (error) {
      console.error("Erro ao excluir o produto:", error);
      toast.error("Erro ao excluir o produto!");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label>Nome</Label>
          <Input type="text" {...register("name")} defaultValue={product.name} />
          <ErrorMessage>{errors?.name?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>Preço</Label>
          <Input type="number" {...register("price")} defaultValue={product.price / 100} />
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
                register("file").onChange(value);
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
              />
            )}
          />
          <ErrorMessage>{errors?.category?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Containercheckbox>
            <input type="checkbox" defaultChecked={product.offer} {...register("offer")} />
            <Label>Produto em Oferta</Label>
          </Containercheckbox>
        </InputGroup>

        <InputGroup>
          <Label>Tamanhos</Label>
          <Controller
            name="sizes"
            control={control}
            defaultValue={product.sizes?.map(s => ({ label: s, value: s })) || []}
            render={({ field }) => <Select {...field} options={SIZE_OPTIONS} isMulti placeholder="Selecione tamanhos" />}
          />
          <ErrorMessage>{errors?.sizes?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>Cores</Label>
          <Controller
            name="colors"
            control={control}
            defaultValue={product.colors?.map(c => ({ label: c, value: c })) || []}
            render={({ field }) => <Select {...field} options={COLOR_OPTIONS} isMulti placeholder="Selecione cores" />}
          />
          <ErrorMessage>{errors?.colors?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>Descrição</Label>
          <textarea {...register("description")} rows={4} defaultValue={product.description} />
          <ErrorMessage>{errors?.description?.message}</ErrorMessage>
        </InputGroup>

        <SubmitButton>Editar Produto</SubmitButton>
        <DeletarButton type="button" onClick={() => setShowModal(true)}>
          Deletar Produto
        </DeletarButton>
      </Form>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex", justifyContent: "center", alignItems: "center"
          }}
        >
          <div style={{ padding: 20, borderRadius: 5, width: 300, marginRight:'390px' }}>
            <h3>Tem certeza que deseja excluir este produto?</h3>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <button
                onClick={handleDelete}
                style={{ backgroundColor: "green", color: "white", padding: "6px 10px", borderRadius: 5, border: "none", cursor: "pointer" }}
              >
                Sim
              </button>
              <button
                onClick={() => setShowModal(false)}
                style={{ backgroundColor: "red", color: "white", padding: "10px 10px", borderRadius: 5, border: "none", cursor: "pointer" }}
              >
                Não
              </button>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
