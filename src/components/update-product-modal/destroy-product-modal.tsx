import { useState } from "react";
import { Trash2 } from "lucide-react";
import Button from "../button";
import destroyProductService from "../../services/destroy-product.service";
import type { TProduct } from "../../@types/product";

interface DestroyProductModalProps {
  product: TProduct;
  onDestroyed?: () => void;
}

export default function DestroyProductModal({ product, onDestroyed }: DestroyProductModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };
  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  const handleDestroy = async () => {
    setLoading(true);
    try {
      await destroyProductService({ id: product.id });
      alert("Produto excluído com sucesso!");
      handleClose();
      if (onDestroyed) {
        onDestroyed();
      } else {
        window.location.reload();
      }
    } catch (error) {
      alert("Erro ao excluir produto.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button className="bg-red-500 hover:bg-red-400" onClick={handleOpen}>
        <Trash2 size={16} />
        <span>Excluir</span>
      </Button>
      {isOpen && (
        <>
          <div
            className="bg-neutral-950/50 w-full h-full top-0 left-0 fixed z-20"
            onClick={handleClose}
          />
          <div className="bg-white w-full max-w-md p-6 rounded-2xl top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  fixed z-30">
            <h2 className="text-xl font-semibold text-center mb-4">
              Excluir produto
            </h2>
            <p className="mb-6 text-center">Tem certeza que deseja excluir o produto <b>{product.name}</b>?</p>
            <div className="grid grid-cols-2 gap-2">
              <Button type="button" onClick={handleClose} disabled={loading}>
                Cancelar
              </Button>
              <Button type="button" onClick={handleDestroy} disabled={loading} className="bg-red-500 hover:bg-red-400">
                {loading ? "Excluindo..." : "Excluir"}
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
