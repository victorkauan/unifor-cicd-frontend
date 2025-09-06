import { useState } from "react";
import { Pencil } from "lucide-react";
import Button from "../button";
import updateProductService from "../../services/update-product.service";
import type { TProduct } from "../../@types/product";

interface UpdateProductModalProps {
  product: TProduct;
}

export default function UpdateProductModal({
  product,
}: UpdateProductModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(String(product.price));
  const [quantity, setQuantity] = useState(String(product.quantity));
  const [loading, setLoading] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !price || !quantity) {
      alert("Preencha todos os campos.");
      return;
    }

    setLoading(true);
    try {
      await updateProductService({
        id: product.id,
        name,
        price: Number(price),
        quantity: Number(quantity),
      });
      alert("Produto atualizado com sucesso!");
      handleClose();
      window.location.reload();
    } catch (error) {
      alert("Erro ao atualizar produto.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button onClick={handleOpen}>
        <Pencil size={20} />
        <span>Editar</span>
      </Button>
      {isOpen && (
        <>
          <div
            className="bg-neutral-950/50 w-full h-full top-0 left-0 fixed z-20"
            onClick={handleClose}
          />
          <div className="bg-white w-full max-w-md p-6 rounded-2xl top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  fixed z-30">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-center">
                Editar produto
              </h2>
              <label className="flex flex-col gap-1">
                <span className="text-neutral-800 text-sm font-semibold">
                  Nome:
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={loading}
                  className="px-3 py-2 border-2 border-neutral-200 rounded-lg focus-visible:outline-neutral-300"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-neutral-800 text-sm font-semibold">
                  Preço:
                </span>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  disabled={loading}
                  min={0}
                  step={0.01}
                  className="px-3 py-2 border-2 border-neutral-200 rounded-lg focus-visible:outline-neutral-300"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-neutral-800 text-sm font-semibold">
                  Quantidade:
                </span>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  disabled={loading}
                  min={0}
                  step={1}
                  className="px-3 py-2 border-2 border-neutral-200 rounded-lg focus-visible:outline-neutral-300"
                />
              </label>
              <div className="grid grid-cols-2 gap-2">
                <Button type="button" onClick={handleClose} disabled={loading}>
                  Cancelar
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? "Salvando..." : "Salvar"}
                </Button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}
